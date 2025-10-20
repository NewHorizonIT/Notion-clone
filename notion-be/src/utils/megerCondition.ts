export function cleanUndefined(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== undefined),
  );
}

export function mergeConditions(
  conditions: Record<string, unknown>,
  defaultConditions: Record<string, unknown>,
): Record<string, unknown> {
  const cds = {
    ...cleanUndefined(conditions),
    ...cleanUndefined(defaultConditions),
  };
  return cds;
}
