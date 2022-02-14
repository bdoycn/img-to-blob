export const getSrcBlob = async (src: string) => {
  const response = await fetch(src);
  if (!response.ok) throw new Error('fetch src failed');

  return response.blob();
}
