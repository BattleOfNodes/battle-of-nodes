import qrcodeOptions from './qrcode-options';
import QRCodeStyling from 'qr-code-styling';

const qrcode = new QRCodeStyling(Object.assign(qrcodeOptions));
class CustomQRCodeHandler {

    handle(data, element) {
        qrcodeOptions.data = data;
        qrcode.update(Object.assign(qrcodeOptions));
        qrcode.append(element);
        return Promise.resolve(undefined);
    }

}

export default CustomQRCodeHandler;
