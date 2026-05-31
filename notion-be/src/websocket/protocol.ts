// y-websocket binary protocol helpers — no lib0 dependency

export const MSG_SYNC = 0;
export const MSG_AWARENESS = 1;

export const SYNC_STEP1 = 0; // client sends its state vector
export const SYNC_STEP2 = 1; // server responds with missing updates
export const SYNC_UPDATE = 2; // incremental update

// --- varint encoding (matches lib0 encoding used by y-websocket) ---

function writeVarUint(buf: number[], n: number): void {
  while (n > 0x7f) {
    buf.push((n & 0x7f) | 0x80);
    n >>>= 7;
  }
  buf.push(n);
}

function readVarUint(data: Uint8Array, pos: number): [number, number] {
  let n = 0;
  let shift = 0;
  for (;;) {
    const b = data[pos++];
    n |= (b & 0x7f) << shift;
    if ((b & 0x80) === 0) return [n, pos];
    shift += 7;
  }
}

// --- message builders ---

export function makeMessage(
  msgType: number,
  syncType: number,
  payload: Uint8Array,
): Buffer {
  const hdr: number[] = [];
  writeVarUint(hdr, msgType);
  writeVarUint(hdr, syncType);
  writeVarUint(hdr, payload.length);
  return Buffer.concat([Buffer.from(hdr), Buffer.from(payload)]);
}

// --- message parsers ---

/** Return the leading message-type varint (safe for types 0-127 = 1 byte). */
export function getMsgType(raw: Buffer): number {
  return raw.length > 0 ? raw[0] : -1;
}

/** Return the sync sub-type varint (safe for values 0-127 = 1 byte). */
export function getSyncType(raw: Buffer): number {
  return raw.length > 1 ? raw[1] : -1;
}

/**
 * Extract the payload bytes from a sync message.
 * Format: varuint(msgType) | varuint(syncType) | varuint(len) | bytes[len]
 */
export function extractSyncPayload(raw: Buffer): Uint8Array {
  const u8 = new Uint8Array(raw.buffer, raw.byteOffset, raw.byteLength);
  let pos = 0;
  // skip msgType
  [, pos] = readVarUint(u8, pos);
  // skip syncType
  [, pos] = readVarUint(u8, pos);
  // read length
  let len: number;
  [len, pos] = readVarUint(u8, pos);
  return u8.slice(pos, pos + len);
}
