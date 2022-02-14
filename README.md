# IMG-TO-BLOB
## 说明
将 img 标签中的图片数据转换成二进制数据

以便用于复制和上传

## 使用方法
以复制图片为例
```ts
import { imgToBlob } from 'img-to-blob';

const copyImg = async (img) => {
  const blob = await imgToBlob(img)

  navigator.clipboard.write([
    new ClipboardItem({
      [blob.type]: blob,
    })
  ]);
}
```
