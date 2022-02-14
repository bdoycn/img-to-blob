export const getBase64MimeType = (base64: string) => {
  const mimeType = base64.match(/^data:(.*?);/)?.[1];
  if (!mimeType) throw new Error('get mimeType failed');
  
  return mimeType;
}

export const base64ToBlob = (base64: string, mimeType?: string) => {
  const decodeData = atob(base64);
  const u8Arr = new Uint8Array(decodeData.length);
  
  for (let i = decodeData.length; i > 0; i--) {
    u8Arr[i] = decodeData.charCodeAt(i);
  }
  
  return new Blob([u8Arr], { type: mimeType });
}