class Menu extends Phaser.Scene{
    constructor(){
        super({key: 'Menu'});
        console.log('Menu screen hello')
    }

    preload(){
        console.log('Creating')
        this.load.image('GFS', '/assest/download.jpg');
    } 

    create(){
        console.log(Phaser.Input.Keyboard.KeyCodes);
        this.image = this.add.image(400, 300, 'GFS');
        this.key_A = this.input.keyboard.addKey(65);
        this.key_D = this.input.keyboard.addKey(68);

        this.input.on('pointerdown', event => {
            this.image.x = event.x;
            this.image.y = event.y;
        })

        this.input.keyboard.on('keyup_P', event => {
            let physicsImage = this.physics.add.image(this.image.x, this.image.y, 'GFS');
            physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100, 100), -300);
        })
    }

    update(delta){
        this.key_A.isDown && this.image.x --
        this.key_D.isDown && this.image.x ++
    }
}

var config = {
    type: Phaser.AUTO,
    width: 800, 
    height: 600, 
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    },

    scene: [Menu]
}

var game = new Phaser.Game(config);