let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

function start() {
    animate();
}

function animate() {
    //clear any graphics from the last frame
    context.clearRect(0, 0, canvas.width, canvas.height);
    //call the next animation frame
    requestAnimationFrame(animate);
}

start();