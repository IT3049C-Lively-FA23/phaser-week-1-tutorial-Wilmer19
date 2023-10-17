class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload(){
        this.load.image("background", "Assets/Images/background.png");
        this.load.spritesheet("ship", "Assets/Spritesheets/ship.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ship2", "Assets/Spritesheets/ship2.png",{
            frameWidth: 32,
            frameHeight: 16
        });
        this.load.spritesheet("ship3", "Assets/Spritesheets/ship3.png",{
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet("explosion", "Assets/Spritesheets/explosion.png",{
            frameWidth: 16,
            frameHeight: 16
        });
    }

    create(){
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}