const butInstall = document.getElementById('buttonInstall');
let deferredPrompt; 


window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    promptEvent.prompt();

    
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
