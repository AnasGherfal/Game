class SackBoy{
	constructor(game, x, y){
		Object.assign(this,{game,x,y})
		
		this.game = game;

		this.spritesheet = ASSET_MANAGER.getAsset("./sackboy.png");

		this.animations =new Animator(this.spritesheet, 25, 170, 55, 70.5, 3, 0.2);





		// this.size = 0; // 0 = normal size
        // this.facing = 0; // 0 = right
        // this.state = 0; // 0 = idle, 1 = walking, 2 = running, 3 = jumping, 4 = falling, 5 = dancing
        this.dead = false;

		this.x = 0;
		this.y = 485;
		this.speed = 70;

		// this.animations = [];
        // this.loadAnimations();
	};

	// loadAnimations() {
    //     for (var i = 0; i < 6; i++) { // six states
    //         this.animations.push([]);
	// 		for (var j = 0; j < 1; j++) { // one size
    //             this.animations[i].push([]);
    //         	for (var k = 0; k < 2; k++) { // two directions
    //             this.animations[i][j].push([]);
    //         	}
	// 		}
    //     }
		
	// 	this.animations[0][0] = new Animator(this.spritesheet, 12, 2, 55, 75, 1, 0.33, 14, false, true);


		// walk animation


		// run animation
        // facing right

		// jump animation   


	//};
	update(){
		this.x += this.speed * this.game.clockTick;
		if(this.x > 1024) this.x = 0;

	};
	draw(ctx){
		   this.animations.drawFrame(this.game.clockTick, ctx, this.x, this.y);
		//    this.animations2.drawFrame(this.game.clockTick, ctx, 50, 100);
		//    this.animations3.drawFrame(this.game.clockTick, ctx, 100, 200);
		   

	};
}