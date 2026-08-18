const apisToCheck = {
    "Geolocalización": "geolocation" in navigator,
    "LocalStorage": typeof(Storage) !== "undefined",
    "Service Worker": "serviceWorker" in navigator,
    "IndexedDB": "indexedDB" in window
};

const apiGrid = document.getElementById('api-grid');

// Renderizar las tarjetas dinámicamente
Object.entries(apisToCheck).forEach(([apiName, isSupported]) => {
    const card = document.createElement('div');
    card.className = `api-card ${isSupported ? 'supported' : ''}`;
    card.innerHTML = `
        <span>${apiName}</span>
        <span class="status-icon">${isSupported ? '✔' : '✖'}</span>
    `;
    apiGrid.appendChild(card);
});

// Enviar datos al Backend
document.getElementById('send-btn').addEventListener('click', async () => {
    const statusMsg = document.getElementById('status-msg');
    statusMsg.textContent = "Enviando datos al servidor...";
    statusMsg.style.color = "#fbbf24";

    try {
        const response = await fetch('http://127.0.0.1:5000/api/detect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ apis: apisToCheck })
        });

        const result = await response.json();
        if (response.ok) {
            statusMsg.textContent = "¡Reporte registrado con éxito en el backend!";
            statusMsg.style.color = "#22c55e";
        } else {
            statusMsg.textContent = "Error al registrar: " + (result.error || "Desconocido");
            statusMsg.style.color = "#ef4444";
        }
    } catch (error) {
        statusMsg.textContent = "Error de conexión con el servidor backend (asegúrate de que Flask esté corriendo).";
        statusMsg.style.color = "#ef4444";
    }
});