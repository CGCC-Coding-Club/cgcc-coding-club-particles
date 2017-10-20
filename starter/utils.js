let utils = {
	/**
	 * Generates a random number from a given min and max range.
	 */
    randomRange: (min, max) => {
        return Math.random() * (max - min) + min;
    },

	/**
	 * Returns a timer object
	 */
    timer: (ttl) => {
         let t = {
			timeToLive: ttl,
			elapsedMS: 0,
            startTime: 0,

			start: function() {
				this.elapsedMS = 0;
                this.startTime = Date.now();
			},
			
			getNow: function() {
				return Date.now();
			},

			hasExpired: function() {
				if(this.elapsedMS>this.timeToLive) return true;
				return false;	
			},

			getElapsedMS: function() {
				return this.elapsedMS;	
			},

			reset: function() {
				this.start();
			},

			update: function(elapsed) {
				this.elapsedMS += elapsed;
			}
		};

		return t;
    }
};