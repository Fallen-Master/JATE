const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;  // to save the beforeinstallprompt event


window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    promptEvent.prompt();

    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
