const mensajes = [
    "Por lo que veo no te tento el matcha",
    "Te lo ruego, dime que si",
    "TE LO IMPLORO KAMILLA XUNAXI",
    "Si sigues diciendo que no me quitare los ojos",
    "Tu me odias entonces...",
    "Que sentido tiene la vida ahora...",
    "PORFAVOR KAMILLA XUNAXI TE LO IMPLORO, ERES LO UNICO QUE NECESITO",
    "TE SOBORNO CON TIRAMISU Y MATCHA INFITO, ES SUFICIENTE"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const envelopeContainer = document.querySelector('.envelope-container');
    
    noButton.textContent = mensajes[messageIndex];
    messageIndex = (messageIndex + 1) % mensajes.length;

    // ✅ Solo el botón "Sí" crece hasta cierto límite y se expande en ambas direcciones
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    const currentWidth = parseFloat(window.getComputedStyle(yesButton).width);
    
    yesButton.style.fontSize = `${currentSize * 1.54}px`; // Crece en tamaño
    yesButton.style.width = `${currentWidth * 1.54}px`; // Crece en el ancho

    // ✅ Oculta la carta después de presionar "No"
    envelopeContainer.style.display = "none";
}

function handleYesClick() {
    const envelopeContainer = document.querySelector('.envelope-container');

    // ✅ Oculta la carta después de presionar "Sí"
    envelopeContainer.style.display = "none";

    window.location.href = "yes_page.html";
}

function openEnvelope() {
    document.querySelector('.envelope').classList.add('open');

    // ✅ Muestra los botones después de abrir la carta
    document.querySelector('.buttons-container').style.visibility = 'visible';
}
