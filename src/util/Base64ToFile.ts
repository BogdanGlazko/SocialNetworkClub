import { v4 as uuidv4 } from 'uuid';

export const dataURLtoFile = (dataUrl:string) => {
    if (dataUrl) {
        const arr = dataUrl.split(',');
        const mime = arr[0].match(/:(.*?);/)![1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        while (n) {
            n -= 1;
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], uuidv4(), { type: mime });
    }

    return undefined;
};
