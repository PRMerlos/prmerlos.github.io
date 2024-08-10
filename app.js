const jsonUrl = 'https://raw.githubusercontent.com/swaggyP36000/TrollStore-IPAs/main/apps_esign.json'; // Reemplaza con la URL correcta

// Función para obtener los datos del JSON
async function fetchApps() {
    try {
        const response = await fetch(jsonUrl);
        const data = await response.json();
        console.log('Datos obtenidos:', data); // Verifica que los datos se obtienen correctamente
        displayApps(data);
    } catch (error) {
        console.error('Error al obtener el JSON:', error);
    }
}

// Función para mostrar las apps en la interfaz
function displayApps(data) {
    const apps = Array.isArray(data) ? data : data.apps;

    if (!apps) {
        console.error("No se encontraron aplicaciones en los datos proporcionados.");
        return;
    }

    const appList = document.getElementById('app-list');

    apps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';

        appCard.innerHTML = `
            <img src="${app.iconURL}" alt="${app.name} icon">
            <h2>${app.name}</h2>
            <p>${app.developerName}</p>
            <p><strong>Versión:</strong> ${app.version}</p>
            <p><strong>Fecha:</strong> ${app.versionDate}</p>
            <p><strong>Descripción:</strong> ${app.localizedDescription}</p>
            <a href="${app.downloadURL}" class="download-button">Descargar</a>
        `;

        appList.appendChild(appCard);
    });
}

// Ejecutar la función para obtener y mostrar las apps
fetchApps();
