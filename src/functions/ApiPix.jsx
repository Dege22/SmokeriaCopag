import axios from "axios";

export async function apiPix(value) {
    // Substituir vírgula por ponto para formato decimal correto
    const formattedValue = value.replace(',', '.');
    console.log('Formatted value:', formattedValue);

    const { data } = await axios.get(`https://api-pix-smokeria021.onrender.com/generate-pix-fixo/${formattedValue}`);

    const qrCodeUrlImg = data.qr_code_url;
    const pixCode = data.pix_code;

    return {
        qrCodeUrlImg,
        pixCode
    };
}
