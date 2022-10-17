// @ts-ignore
import { toPng } from "dom-to-image";

export const downloadImage = (element: HTMLElement | null): string => {
  if (!element) {
    return "Element not found";
  }

  toPng(element).then(function (blob: any) {
    if (blob) {
      var link = document.createElement("a");
      link.download = "snapshot.png";
      link.href = blob;
      link.click();
    }
  });

  return "Success";
};
