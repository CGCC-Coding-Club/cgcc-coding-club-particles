class Particle {
    constructor(ttl) {
        this.x = 0;
        this.y = 0;
        this.color = "#ffffff";
        this.velocityX = 0;
        this.velocityY = 0;
        this.angle = 0;
        this.angularVelocity = 0;
        this.size = 5;
        this.opacity = 1;
        this.sprite = null;
      //  this.timeToLive = utils.timer(ttl);
    }

    draw(context) {
        context.fillStyle = this.color;
        context.globalAlpha = this.opacity;
        context.fillRect(this.x, this.y, this.size, this.size);
    }

    update(delta) {
        this.x += this.velocityX * Math.cos(this.angle);
        this.y += this.angle == 0 ? this.velocityY : this.velocityY * Math.sin(this.angle);
        this.angle += this.angularVelocity;
    }
}