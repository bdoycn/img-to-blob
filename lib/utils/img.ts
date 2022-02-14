export const imgToCanvas = (img: HTMLImageElement) => {
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('get canvas context failed');

  ctx.drawImage(img, 0, 0, img.width, img.height);

  return canvas;
}

const getImgExt = (img: HTMLImageElement) => {
  const extMatch = img.src.match(/(\.(.*?)$|^data:image\/(.*?);)/);
  
  return extMatch?.[2] ?? extMatch?.[3] ?? null;
}

export const getImgType = (img: HTMLImageElement) => {
  const ext = getImgExt(img);

  return ext ? `image/${ext}` : null;
}

export const imgToDataUrl = (img: HTMLImageElement) => {
  const canvas = imgToCanvas(img);
  
  const imgType = getImgType(img);
  const dataURL = canvas.toDataURL(imgType ?? undefined);

  return dataURL;
}
