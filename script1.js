// script1.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('animation-container').appendChild(renderer.domElement);

// Create Earth
const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
const earthTexture = new THREE.TextureLoader().load(earth.jpg); // You need to provide an earth texture image
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

// Create Sun
const sunGeometry = new THREE.SphereGeometry(6, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);


const moonGeometry = new THREE.SphereGeometry(6, 32, 32);
const moonMaterial = new THREE.MeshBasicMaterial({ color: white });
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
scene.add(moon);


// Position the objects
earth.position.set(0, 0, -100);
sun.position.set(0, 0, -30);
moon.position.set(0,0,100)
// Set up camera position
camera.position.z = 20;

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the Earth
    earth.rotation.y += 0.005;

    renderer.render(scene, camera);
};

animate();
