
// Not func !!!
const btn = document.querySelector('#dark-modee');
const html = document.querySelector('html');

btn.addEventListener('click', function() {
    
    html.classList.toggle('dark');
});