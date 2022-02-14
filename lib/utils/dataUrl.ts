import { base64ToBlob, getBase64MimeType } from "./base64";

export const dataUrlToBlob = (dataUrl: string) => {
  const mimeType = getBase64MimeType(dataUrl);
  const [, base64] = dataUrl.split(',');

  return base64ToBlob(base64, mimeType);
}