const mainForm = document.querySelector('#main-form');
const formInput = document.querySelector('#form-input');
const PUBLIC_VAPID_KEY = "BOlkEQP4lBBRFA7Ro91Y-PnAxKXL0rLSJk7Z1N7PCB0sG8noQCbeM5RN9n2WYLBhFSmXlmtGLa7IiMbVE-6RlMA";

// /suscribe

if('serviceWorker' in navigator){
    send()
        .catch(err => console.log(err))
}

async function send(){
    // REGISTRA EL SERVICE WORKER/CREA LA CONEXIÓN CON ESTE
    const register = await navigator.serviceWorker.register('./worker.js', {
        scope: '/'
    });

    // SE "SUSCRIBE", CREA UNA SUSCRIPCIÓN
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:  urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
    })

    // ENVIAMOS LA SUSCRIPCION AL BACKEND
    const response = await fetch('/suscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    mainForm.addEventListener('submit', e => {
        e.preventDefault();
    })
})