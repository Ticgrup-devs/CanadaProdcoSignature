document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signature-form");
    const signatureContainer = document.getElementById("signature-container");

    const officeTexts = {
        BARCELONA: `LAS MONTAÑAS DEL CANADA S.L., informs that all the data received through online forms and/or by email will be processed with strict confidentiality in accordance with the Privacy and Security Policy of LAS MONTAÑAS DEL CANADA S.L., as well as with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (General Data Protection Regulation or GDPR). The purpose of processing these data is to respond to the communications received and, if applicable, maintain the corresponding contractual relations. The lawful basis being your consent, performance of pre-contractual or contractual measures, compliance with legal obligations and/or legitimate interests pursued by LAS MONTAÑAS DEL CANADA S.L. To exercise the rights of access, suppression/deletion, rectification, opposition, portability or limitation, and for any clarification, you can contact us by sending us an email to <a href="mailto:info@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">info@canadacanada.com</a>. In any event, the interested have the right to file a claim in front of the appropriate Data Protection Authority. The personal data provided will be kept for the time legally or contractually foreseen or while your consent is maintained. The collected data will not be transferred, with the exception of legal obligation or permission. Please contact <a href="mailto:info@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">info@canadacanada.com</a> immediately about any change or modification related to the information you provided, in order that it responds truthfully to your current personal situation.`,
        LONDON: `CANADA LONDON LTD informs that all the data received through online forms and/or by email will be processed with strict confidentiality in accordance with the Privacy and Security Policy of CANADA LONDON LTD as well as with UK-GDPR (United Kingdom General Data Protection Regulation). The purpose of processing these data is to respond to the communications received and, if applicable, maintain the corresponding contractual relations. The lawful basis being your consent, performance of pre-contractual or contractual measures, compliance with legal obligations and/or legitimate interests pursued by CANADA LONDON LTD. To exercise the rights of access, suppression/deletion, rectification, opposition, portability or limitation, and for any clarification, you can contact us by sending an email to <a href="mailto:london@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">london@canadacanada.com</a>. In any event, the interested have the right to file a claim in front of the appropriate Data Protection Authority. The personal data provided will be kept for the time legally or contractually foreseen or while your consent is maintained. The collected data will not be transferred, with the exception of legal obligation or permission. Please contact <a href="mailto:london@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">london@canadacanada.com</a> immediately about any change or modification related to the information you provided, in order that it responds truthfully to your current personal situation.`,
        "LOS ANGELES": `CANADA LOS ANGELES INC. informs that all the data received through online forms and/or by email will be processed with strict confidentiality in accordance with the Privacy and Security Policy of CANADA LOS ANGELES INC. as well as with the federal/state legal and regulatory framework. The purpose of processing these data is to respond to the communications received and, if applicable, maintain the corresponding contractual relations. The lawful basis being your consent, performance of pre-contractual or contractual measures, compliance with legal obligations and/or legitimate interests pursued by CANADA LOS ANGELES INC. To exercise the rights of access, suppression/deletion, rectification, opposition, portability or limitation, and for any clarification, you can contact us by sending an email to <a href="mailto:losangeles@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">losangeles@canadacanada.com</a>. In any event, the interested have the right to file a claim in front of the appropriate Data Protection Authority. The personal data provided will be kept for the time legally or contractually foreseen or while your consent is maintained. The collected data will not be transferred, with the exception of legal obligation or permission. Please contact <a href="mailto:losangeles@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">losangeles@canadacanada.com</a> immediately about any change or modification related to the information you provided, in order that it responds truthfully to your current personal situation.`
    };

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.toUpperCase();
        const surname = document.getElementById("surname").value.toUpperCase();
        const gender = document.getElementById("gender").value.toUpperCase();
        const position = document.getElementById("position").value.toUpperCase();
        const phone = document.getElementById("phone").value.toUpperCase();
        const office = document.getElementById("office").value;
        
        const genderText = gender ? `(${gender})` : '';
        const officeText = officeTexts[office];

        const signatureBlock = document.getElementById("show-signature");
        signatureBlock.style.display = "block";
        signatureBlock.scrollIntoView({ behavior: "smooth" });

        // CAMBIO CRUCIAL: Se eliminaron todos los background-color: #ffffff y se puso transparent
       const signatureHTML = `
    <table cellpadding="0" cellspacing="0" border="0" width="480" style="width: 480px; min-width: 480px; border-collapse: collapse; background-color: transparent; border: none;">
        <tbody>
            <tr>
                <td style="padding: 10px 0px; font-family: 'Roboto Condensed', Arial, sans-serif; background-color: transparent;">
                    
                    <div style="margin-bottom: 2px;">
                        <span style="font-size: 15px; font-weight: bold; color: rgb(44,46,53); text-transform: uppercase; font-family: 'Roboto Condensed', sans-serif !important;">${name} ${surname}</span>
                        <span style="font-size: 14px; color: #666666; margin-left: 4px; font-family: 'Roboto Condensed', sans-serif !important;">${genderText}</span>
                    </div>
                    <div style="margin-bottom: 12px;">
                        <span style="font-size: 13px; color: rgb(44,46,53); text-transform: uppercase; font-weight: bold; font-family: 'Roboto Condensed', sans-serif !important;">${position}</span>
                    </div>
                    
                    <div style="margin-bottom: 10px; width: 75px !important; height: auto !important;">
                        <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcvGQVV9BEZ8Xk_AqwPTunNSiz_7cD03EGbOoh_y38_BTFXuK85tjbIH0stuEiZuwVgt5eW8mNN8tvVqOyBbq0drlFJMEH5rPOkEOkx_LD49uwuQUIuLqLwu43aMUzfqcya8Wg3SgVDwXvFy-sK6vo7BIuh?key=0yoYn1Wk--m5eohp_i2BZxI4" 
                             width="75" 
                             height="25" 
                             alt="CANADA" 
                             style="display: block; width: 75px !important; max-width: 75px !important; height: auto !important; border: 0;">
                    </div>

                    <div style="margin-top: 8px; line-height: 1.4; color: rgb(44,46,53);">
                        <span style="font-size: 12px; display: block; font-family: 'Roboto Condensed', sans-serif !important;">${phone}</span>
                        <a href="https://www.canadacanada.com/" style="font-size: 12px; color: rgb(44,46,53); text-decoration: none; font-weight: bold; font-family: 'Roboto Condensed', sans-serif !important;" target="_blank">CANADACANADA.COM</a>
                    </div>
                    
                    <div style="margin-top: 18px; width: 140px !important; height: auto !important;">
                        <img src="https://lh3.googleusercontent.com/d/1N9QqMSv42j9pYSgS25xJXmjG2qf_aJ2T" 
                             width="140" 
                             height="50" 
                             alt="Ad Age Production" 
                             style="display: block; width: 140px !important; max-width: 140px !important; height: auto !important; border: 0;">
                    </div>
                </td>
            </tr>
            <tr>
                <td style="padding-top: 15px; border-top: 1px solid #eeeeee; background-color: transparent;">
                    <p style="margin: 0px; font-size: 0.6em; color: rgb(211,210,212); line-height: 1.5; font-family: 'Roboto Condensed', sans-serif !important; text-align: justify; width: 480px; min-width: 480px;">
                        ${officeText}
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
`;

        signatureContainer.innerHTML = signatureHTML;
        document.getElementById('copy-button').style.display = 'inline-block';
		document.getElementById('download-button').style.display = 'inline-block';
        // Asegurarse de mostrar el botón de descarga si existe en el HTML
        if(document.getElementById('download-button')) document.getElementById('download-button').style.display = 'block';
    });
});

// Función para copiar
document.getElementById('copy-button').addEventListener('click', function () {
    const signatureContent = document.getElementById('signature-container');
    const range = document.createRange();
    range.selectNodeContents(signatureContent);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    alert('Firma copiada al portapapeles!');
});

// Función para descargar
document.getElementById('download-button').addEventListener('click', function () {
    const signatureContent = document.getElementById('signature-container').innerHTML;
    const fullHtml = `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>${signatureContent}</body></html>`;
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'signature_canada.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
});
