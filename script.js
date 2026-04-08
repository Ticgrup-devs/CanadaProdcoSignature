document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signature-form");
    const signatureContainer = document.getElementById("signature-container");

	// Textos personalizados para cada oficina
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
		
		// Si el campo de género está vacío, lo dejamos fuera de la firma
		const genderText = gender ? `(${gender})` : '';  // Solo agregar el género si no está vacío
		
		// Obtener texto según la oficina
		const officeText = officeTexts[office];

		// Mostrar el bloque de la firma
		const signatureBlock = document.getElementById("show-signature");
		signatureBlock.style.display = "block";

		// Desplazar la página al bloque de la firma
		signatureBlock.scrollIntoView({ behavior: "smooth" });

        // Crear la firma HTML
        const signatureHTML = `
			<table cellpadding="0" class="An" id=":qq">
				<tbody>
					<tr>
						<td class="Ap">
							<div id=":174" class="IN" style="display: block;">
								<div id=":qg" class="roboto-firma" hidefocus="true" aria-label="Signature" g_editable="true" role="textbox" aria-multiline="true" contenteditable="true" style="direction: ltr; font-family: 'Roboto Condensed', sans-serif !important; color: rgb(44,46,53);">
									<table style="border-spacing:0px;border-collapse:collapse;background-color:transparent;color:rgb(34,34,34);width:711.5px;max-width:1000px;font-family: 'Roboto Condensed', sans-serif !important;">
										<tbody>
											<tr>
												<td style="padding:10px 10px 5px">
													<p style="margin:0px;font-size:12px;color:rgb(44,46,53);line-height:1.2;font-family: 'Roboto Condensed', sans-serif !important">${name} ${surname} ${genderText}</p>
													<p style="margin:0px;font-size:12px;padding-bottom:10px;color:rgb(44,46,53);line-height:1.2;font-family: 'Roboto Condensed', sans-serif !important">${position}</p>
													<p style="margin:0px;font-size:12px;padding-bottom:7px;color:rgb(44,46,53);line-height:1.2;font-family: 'Roboto Condensed', sans-serif !important;">
														<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcvGQVV9BEZ8Xk_AqwPTunNSiz_7cD03EGbOoh_y38_BTFXuK85tjbIH0stuEiZuwVgt5eW8mNN8tvVqOyBbq0drlFJMEH5rPOkEOkx_LD49uwuQUIuLqLwu43aMUzfqcya8Wg3SgVDwXvFy-sK6vo7BIuh?key=0yoYn1Wk--m5eohp_i2BZxI4" width="75 alt="Logo">
													</p>
													<p style="margin:0px;font-size:12px;color:rgb(44,46,53);padding-top:5px;line-height:1.2;font-family: 'Roboto Condensed', sans-serif !important;">${phone}</p>
													<p style="margin:0px;font-size:12px;color:rgb(44,46,53);line-height:1.2;font-family: 'Roboto Condensed', sans-serif !important;">
														<a href="https://www.canadacanada.com/" style="background-color:transparent;color:rgb(44,46,53);font-family: 'Roboto Condensed', sans-serif !important;" target="_blank">CANADACANADA.COM</a>
													</p>
													<img src="https://drive.google.com/file/d/1jpm4KShvkSpJliR-nLlHrxMa5YwBykIY/view?usp=drive_link" width="190" alt="Logo">
												</td>
											</tr>
											<tr>
												<td style="padding:10px">
													<p style="margin:0px;font-size:0.6em;color:rgb(211,210,212);line-height:1.5;font-family: 'Roboto Condensed', sans-serif !important;">${officeText}</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
        `;

        // Mostrar la firma generada
        signatureContainer.innerHTML = signatureHTML;
		
		// Mostrar el botón para copiar la firma
		document.getElementById('copy-button').style.display = 'block';
    });
});

// Función para copiar la firma renderizada como si fuera seleccionada
document.getElementById('copy-button').addEventListener('click', function () {
    const signatureContent = document.getElementById('signature-container');

    // Crear un rango para la selección
    const range = document.createRange();
    range.selectNodeContents(signatureContent);

    // Obtener la selección de la ventana
    const selection = window.getSelection();
    selection.removeAllRanges();  // Limpiar selecciones anteriores
    selection.addRange(range);    // Seleccionar el contenido

    // Copiar al portapapeles
    document.execCommand('copy');

    alert('Firma copiada al portapapeles!');
});
