class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload(){
        this.load.image("background", "Assets/Images/background.png");
        this.load.image("ship", "Assets/Images/ship.png");
        this.load.image("ship2", "Assets/Images/ship2.png");
        this.load.image("ship3", "Assets/Images/ship3.png");
    }

    create(){
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}