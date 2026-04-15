document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signature-form");
    const signatureContainer = document.getElementById("signature-container");

    const officeTexts = {
        BARCELONA: `LAS MONTAÑAS DEL CANADA S.L., informs that all the data received through 
		online forms and/or by email will be processed with strict 
		confidentiality in accordance with the Privacy and Security Policy of 
		LAS MONTAÑAS DEL CANADA S.L., as well as with Regulation (EU) 2016/679 
		of the European Parliament and of the Council of 27 April 2016 on the 
		protection of natural persons with regard to the processing of personal 
		data and on the free movement of such data (General Data Protection 
		Regulation or GDPR). The purpose of processing these data is to respond 
		to the communications received and, if applicable, maintain the 
		corresponding contractual relations. The lawful basis being your 
		consent, performance of pre-contractual or contractual measures, 
		compliance with legal obligations and/or legitimate interests pursued by
			LAS MONTAÑAS DEL CANADA S.L. To exercise the rights of access, 
		suppression/deletion, rectification, opposition, portability or 
		limitation, and for any clarification, you can contact us by sending us 
		an email to&nbsp;<a href="mailto:info@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">info@canadacanada.com</a>.
		In any event, the interested have the right to file a claim in front of
		the appropriate Data Protection Authority. The personal data provided 
		will be kept for the time legally or contractually foreseen or while 
		your consent is maintained. The collected data will not be transferred, 
		with the exception of legal obligation or permission. Please contact&nbsp;<a href="mailto:info@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">info@canadacanada.com</a>&nbsp;immediately
		about any change or modification related to the information you 
		provided, in order that it responds truthfully to your current personal 
		situation.`,

        LONDON: `CANADA LONDON LTD informs that all the data received through online forms and/or
		 by email will be processed with strict confidentiality in accordance with the Privacy and 
		 Security Policy of CANADA LONDON LTD as well as with UK-GDPR (United Kingdom General Data 
		 Protection Regulation). The purpose of processing these data is to respond to the communications 
		 received and, if applicable, maintain the corresponding contractual relations. The lawful 
		 basis being your consent, performance of pre-contractual or contractual measures, compliance 
		 with legal obligations and/or legitimate interests pursued by CANADA LONDON LTD. To exercise 
		 the rights of access, suppression/deletion, rectification, opposition, portability or limitation, 
		 and for any clarification, you can contact us by sending an email to&nbsp;<a href="mailto:london@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">london@canadacanada.com</a>.
		 In any event, the interested have the right to file a claim in front of the appropriate Data Protection Authority. 
		 The personal data provided will be kept for the time legally or contractually foreseen or while 
		 your consent is maintained. The collected data will not be transferred, with the exception of 
		 legal obligation or permission. Please contact&nbsp;<a href="mailto:london@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">london@canadacanada.com</a>&nbsp;immediately about any 
		 change or modification related to the information you provided, in order that it responds 
		 truthfully to your current personal situation.`,
        
        "LOS ANGELES": `CANADA LOS ANGELES INC. informs that all the data received through online forms 
		and/or by email will be processed with strict confidentiality in accordance with the Privacy and 
		Security Policy of CANADA LOS ANGELES INC. as well as with the federal/state legal and regulatory framework. 
		The purpose of processing these data is to respond to the communications received and, if applicable, 
		maintain the corresponding contractual relations. The lawful basis being your consent, performance of 
		pre-contractual or contractual measures, compliance with legal obligations and/or legitimate interests 
		pursued by CANADA LOS ANGELES INC. To exercise the rights of access, suppression/deletion, rectification, 
		opposition, portability or limitation, and for any clarification, you can contact us by sending an email 
		to&nbsp;<a href="mailto:losangeles@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">losangeles@canadacanada.com</a>. 
		In any event, the interested have the right to file a claim in front of 
		the appropriate Data Protection Authority. The personal data provided will be kept for the time legally 
		or contractually foreseen or while your consent is maintained. The collected data will not be transferred, 
		with the exception of legal obligation or permission. Please contact&nbsp;<a href="mailto:losangeles@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">losangeles@canadacanada.com</a>&nbsp;immediately 
		about any change or modification related to the information you provided, in order that it responds truthfully 
		to your current personal situation.`
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

        // Plantilla de la firma (Optimizada para máxima compatibilidad)
        const signatureHTML = `
<div style="background-color: transparent; margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" border="0" style="width: 450px; min-width: 450px; font-family: 'Roboto Condensed', Arial, sans-serif; color: #2c2e35; line-height: 1.2;">
        <tbody>
            <tr>
                <td style="padding: 10px 0;">
                    <p style="margin: 0; font-size: 15px; font-weight: bold; text-transform: uppercase; color: #1a1a1a;">
                        ${name} ${surname} <span style="font-weight: normal; color: #666666;">${genderText}</span>
                    </p>
                    <p style="margin: 0; font-size: 13px; padding-bottom: 15px; text-transform: uppercase; color: #1a1a1a;">
                        ${position}
                    </p>
                    
                    <div style="margin-bottom: 10px;">
                        <img src="URL_DE_TU_LOGO_CANADA.png" 
                             width="100" 
                             alt="CANADA" 
                             style="display: block; width: 100px; max-width: 100px; height: auto; border: 0;">
                    </div>

                    <p style="margin: 0; font-size: 12px; padding-top: 5px; color: #2c2e35;">
                        ${phone}
                    </p>
                    <p style="margin: 0; font-size: 12px;">
                        <a href="https://www.canadacanada.com/" style="color: #2c2e35; text-decoration: none; font-weight: bold;" target="_blank">CANADACANADA.COM</a>
                    </p>
                    
                    <div style="padding-top: 15px;">
                        <img src="URL_DE_TU_LOGO_ADAGE.png" 
                             width="140" 
                             alt="Ad Age Production" 
                             style="display: block; width: 140px; max-width: 140px; height: auto; border: 0;">
                    </div>
                </td>
            </tr>
            <tr>
                <td style="padding-top: 20px; border-top: 1px solid #eeeeee;">
                    <p style="margin: 0; font-size: 10px; color: #a1a1a1; line-height: 1.4; text-align: justify; font-family: Arial, sans-serif;">
                        ${officeText}
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`;

        signatureContainer.innerHTML = signatureHTML;
        document.getElementById("show-signature").style.display = "block";
        document.getElementById('download-button').style.display = 'block';
    });
});

// NUEVA FUNCIÓN: Descargar como archivo HTML
document.getElementById('download-button').addEventListener('click', function () {
    const signatureContent = document.getElementById('signature-container').innerHTML;
    
    
    const fullHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: sans-serif; }
        </style>
    </head>
    <body>
        ${signatureContent}
    </body>
    </html>`;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = 'firma-canada.html';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
});
