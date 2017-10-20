class ParticleEmitter {
    constructor(settings) {
        this.particles = [];
        this.settings = settings;
        for(let i = 0; i < settings.maxParticles; i++) {
            let particle = new Particle();
            particle.x = utils.randomRange(settings.emitX, settings.width);
            particle.y = utils.randomRange(settings.emitY, settings.height);
            particle.velocityX = utils.randomRange(settings.velocityX[0], settings.velocityX[1]);
            particle.velocityY = utils.randomRange(settings.velocityY[0], settings.velocityY[1]);
            particle.angularVelocity = utils.randomRange(settings.angularVelocity[0], settings.angularVelocity[1]);
            particle.size = utils.randomRange(settings.size[0], settings.size[1]);
            this.particles.push(particle);
        }
    }

    draw(context) {
        for(let i = 0; i < this.particles.length; i++) {
            let particle = this.particles[i];
            particle.draw(context);
        }
    }

    update(delta) {
         for(let i = 0; i < this.particles.length; i++) {
             let particle = this.particles[i];
             particle.update(delta);

             if(particle.y >= this.settings.height-particle.size) {
                 particle.y = this.settings.height-particle.size;
             }
         }
    }
    /*
    recycleParticle(particle) {
        particle.x = this.settings.emitX+(Math.random() * this.settings.width);
        particle.y = this.settings.emitY+(Math.random() * this.settings.height);
        particle.velocityX = this.settings.velocityX;
        particle.velocityY = this.settings.velocityY;
        particle.opacity = 1;
        particle.timeToLive.reset();
    }*/
}