import { canvasToBlob } from "./utils/canvas";
import { dataUrlToBlob } from "./utils/dataUrl";
import { getSrcBlob } from "./utils/fetch";
import { imgToCanvas, imgToDataUrl } from "./utils/img";

export const imgToBlob = async (img: HTMLImageElement) => {
  if (!img.src) throw new Error('img not src');

  try {
    return getSrcBlob(img.src);
  } catch {}

  try {
    const canvas = imgToCanvas(img);
    return await canvasToBlob(canvas);
  } catch { }
  
  try {
    const dataUrl = imgToDataUrl(img);
    return dataUrlToBlob(dataUrl);
  } catch {
    throw new Error('img convert blob failed');
  }
}
