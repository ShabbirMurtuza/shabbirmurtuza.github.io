const status = document.querySelector('.status');

let online = () => {
    status.innerText = 'Connection Available';
    status.style.backgroundColor = '#6e5ce7'
}

let offline = () => {
    status.innerText = ' No Connection';
    status.style.backgroundColor = '#e82401'
}

if (window.navigator.onLine) {
    online();
} else {
    offline();
}

window.addEventListener('online', online)
window.addEventListener('offline', offline)