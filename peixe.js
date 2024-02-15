// configurações iniciais do jogo como altura e largura
// o phaser.auto serve para que o navegador escolha automaticamente o renderizador (responsável por exibir os gráficos e animações)
var config = { 
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update:update
    }

};

var game = new Phaser.Game(config);

var peixinho;

//apelida o arquivo de background como mar 
function preload(){
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe', 'assets/peixes/peixinho_laranja.png');
    this.load.image('alga', 'assets/alga.png');
    this.load.image('bolha', 'assets/bolha.png')
}

//carrega o background de acordo com o número das coordenadas
function create(){
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(100, 100, 'alga').setScale(0.2);
    this.add.image(600, 500, 'bolha').setScale(0.1);
    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false);
    peixinho.setFlip(true, false);
}

function update(){

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

}