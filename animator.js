class Animator {
    constructor(spritesheet, xStart, yStart, width, hight, frameCount, frameDuration) {
        Object.assign(this, {spritesheet, xStart, yStart, width, hight, frameCount, frameDuration,})
        
        this.elapsedTime = 0;
        this.totalTime= frameCount * frameDuration;

    };
    drawFrame(thick, ctx, x, y){

        this.elapsedTime += thick;
        if(this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        const frame = this.currentFrame(); 

        ctx.drawImage(this.spritesheet,
            this.xStart + this.width * frame, this.yStart,
            this.width, this.hight,
            x, y,
            this.width*2.5,this.hight*2.5)
    };
    currentFrame(){
        return Math.floor(this.elapsedTime / this.frameDuration);

    };

    isDone(){
        return(this.elapsedTime >= this.totalTime);

    };
};