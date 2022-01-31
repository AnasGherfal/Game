const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sackboy.png");

ASSET_MANAGER.downloadAll(function () {

	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	
	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;

	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new SackBoy(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});