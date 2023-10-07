// script.js
const earth = document.getElementById('earth');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');

earth.style.left = '50px';
earth.style.top = '175px';
moon.style.left = '250px';
moon.style.top = '175px';
sun.style.left = '150px';
sun.style.top = '150px';

earth.addEventListener('mousedown', (e) => {
    moveObject(e, earth);
});
moon.addEventListener('mousedown', (e) => {
    moveObject(e, moon);
});

function moveObject(e, object) {
    let offsetX = e.clientX - object.getBoundingClientRect().left;
    let offsetY = e.clientY - object.getBoundingClientRect().top;

    document.onmousemove = (e) => {
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        // Keep the objects within the simulator
        x = Math.min(Math.max(x, 0), 350);
        y = Math.min(Math.max(y, 0), 350);

        object.style.left = x + 'px';
        object.style.top = y + 'px';
    };

    document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
    };
}
