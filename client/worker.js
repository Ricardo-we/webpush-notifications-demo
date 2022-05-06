console.log('Worker loaded');

// AL CONECTAR EL "main.js" CON LA FUNCION serviceWorker.register()
// CREAMOS LA CONEXIÓN, NUESTRO SERVICE WORKER PUEDE CORRER EVENTOS POR DEBAJO 
// INCLUSO CON LA VENTANA CERRADA 

self.addEventListener('push', e => {
    // EL EVENTO NOS DA LOS VALORES QUE NOS ENVIE EL BACKEND, 
    // NOS PERMITE RECIBIR DATOS DEL BACKEND SIN PEDIRLOS
    const data = e.data.json();
    // ESTA FUNCION NOS PERMITE ENVIAR NOTIFICACIONES AL DISPOSITIVO 
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
    })
});