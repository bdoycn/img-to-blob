export const canvasToBlob = (canvas: HTMLCanvasElement) => {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject('convert to blob failed');
    })
  }) as Promise<Blob>;
}