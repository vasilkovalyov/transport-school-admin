export const isPublishBlockButton = (
  publish: boolean | null
): boolean | null => {
  if (typeof publish === null) return null;
  return publish;
};
