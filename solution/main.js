let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

let emitter = new ParticleEmitter({
    maxParticles: 300, 
    emitX: 0, 
    emitY: 0,
    width: canvas.width,
    height: canvas.height,
    size: [2, 4],
    velocityX: [0, 0],
    velocityY: [0, 2],
    angularVelocity: [0, 0],
});

function start() {
    animate();
}

let lastFrame = Date.now();
let deltaTime = 0;
function animate() {
    let now = Date.now();
    //calculate the time between the last frame and now
    deltaTime = now - lastFrame;
    //clear any graphics from the last frame
    context.clearRect(0, 0, canvas.width, canvas.height);
    emitter.draw(context);
    emitter.update(deltaTime);
    lastFrame = now;
    requestAnimationFrame(animate);
}

start();