import redis from "../utils/redis";
import logger from "../utils/logger";

const KEY_PREFIX = "collab:state:";
const TTL_SECONDS = 86_400; // 24 h

export async function loadDocState(pageId: string): Promise<Uint8Array | null> {
  try {
    const buf = await redis.getBuffer(`${KEY_PREFIX}${pageId}`);
    if (!buf) return null;
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  } catch (err) {
    logger.error(`[Collab] loadDocState failed for page ${pageId}:`, err);
    return null;
  }
}

export async function saveDocState(
  pageId: string,
  state: Uint8Array,
): Promise<void> {
  try {
    await redis.set(
      `${KEY_PREFIX}${pageId}`,
      Buffer.from(state),
      "EX",
      TTL_SECONDS,
    );
  } catch (err) {
    logger.error(`[Collab] saveDocState failed for page ${pageId}:`, err);
  }
}

export async function deleteDocState(pageId: string): Promise<void> {
  try {
    await redis.del(`${KEY_PREFIX}${pageId}`);
  } catch (err) {
    logger.error(`[Collab] deleteDocState failed for page ${pageId}:`, err);
  }
}
