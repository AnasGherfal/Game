class SackBoy {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y })

        this.game.SackBoy = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./sackboy.png");

        // this.animations =new Animator(this.spritesheet, 25, 170, 55, 70.5, 3, 0.2);

        this.size = 0; // 0 = normal size
        this.facing = 0; // 0 = right
        this.state = 0; // 0 = idle, 1 = walking, 2 = jumping, , 3 = dancing
        this.dead = false;

        this.x = 0;
        this.y = 485;
        this.speed = 70;

        // this.velocity = { x: 0, y: 0 };
        // this.fallAcc = 562.5;


        // this.updateBB();

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        for (var i = 0; i < 4; i++) { // four states
            this.animations.push([]);
            for (var j = 0; j < 1; j++) { // one size
                this.animations[i].push([]);
                for (var k = 0; k < 1; k++) { // one directions
                    this.animations[i][j].push([]);
                }
            }
        }

        //idle
        this.animations[0][0][0] = new Animator(this.spritesheet, 7, 4.5, 55, 70.5, 1, 0.33, 14, false, true);


        // walk animation
        this.animations[1][0][0] = new Animator(this.spritesheet, 25, 170, 55, 70.5, 3, 0.2, 14, false, true);


        // // jump animation
        this.animations[2][0][0] = new Animator(this.spritesheet, 19, 247, 55, 70.5, 2, 0.2, 14, false, true);

        this.deadAnim = new Animator(this.spritesheet, 0, 16, 16, 16, 1, 0.33, 0, false, true);




    };

    // updateBB() {
    //     this.lastBB = this.BB;
    //     if (this.size === 0 || this.size === 3) {
    //         this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
    //     }
    //     else {
    //         this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2);
    //     }
    // };
    update() {
        const TICK = this.game.clockTick;
        // this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;


        const MIN_WALK = 4.453125;
        const MAX_WALK = 93.75;
        const MAX_RUN = 153.75;
        const ACC_WALK = 133.59375;
        const ACC_RUN = 200.390625;
        const DEC_REL = 182.8125;
        const DEC_SKID = 365.625;
        const MIN_SKID = 33.75;

        const STOP_FALL = 1575;
        const WALK_FALL = 1800;
        const RUN_FALL = 2025;
        const STOP_FALL_A = 450;
        const WALK_FALL_A = 421.875;
        const RUN_FALL_A = 562.5;

        const MAX_FALL = 270;

    };
    draw(ctx) {

        if (this.dead) {
            this.deadAnim.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);

        } else {
            this.animations[this.state][this.size][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, PARAMS.SCALE);

        }
    };
}