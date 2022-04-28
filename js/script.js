var cnv = document.getElementById('canvas');
var ctx = cnv.getContext('2d');

let quadrado = {
    posX: 845,
    posY: 300,
    larg: 1,
    alt: 1,
    maxSpeed: 1.0,
    speedX: -0.0,
    speedY: -0.0,
    acelerX: -0.025,
    acelerY: -0.026
}

let quadrado2 = {
    posX: 960,
    posY: 350,
    larg: 1,
    alt: 1,
    maxSpeed: 1.0,
    speedX: 0.001,
    speedY: 0.0,
    acelerX: 0.025,
    acelerY: 0.026
}

function desenhar() {
    //ctx.clearRect(0, 0, 800, 800);
    ctx.fillRect(quadrado.posX, quadrado.posY, quadrado.larg, quadrado.alt);
    ctx.fillRect(quadrado2.posX, quadrado2.posY, quadrado2.larg, quadrado2.alt);
}

function atualizar() {
    quadrado.posX += quadrado.speedX * 2;
    quadrado.posY += quadrado.speedY * 2;

    quadrado.speedX += quadrado.acelerX;
    quadrado.speedY += quadrado.acelerY;

    if(quadrado.speedX <= -quadrado.maxSpeed){
        quadrado.acelerX *= -1
    }
    if(quadrado.speedX >= quadrado.maxSpeed){
        quadrado.acelerX *= -1
    }

    if(quadrado.speedY >= quadrado.maxSpeed){
        quadrado.acelerY *= -1
    }
    if(quadrado.speedY <= -quadrado.maxSpeed){
        quadrado.acelerY *= -1
    }

    
    

    quadrado2.posX += quadrado2.speedX * 2;
    quadrado2.posY += quadrado2.speedY * 2;

    quadrado2.speedX += quadrado2.acelerX;
    quadrado2.speedY += quadrado2.acelerY;

    if(quadrado2.speedX <= -quadrado2.maxSpeed){
        quadrado2.acelerX *= -1
    }
    if(quadrado2.speedX >= quadrado2.maxSpeed){
        quadrado2.acelerX *= -1
    }

    if(quadrado2.speedY >= quadrado2.maxSpeed){
        quadrado2.acelerY *= -1
    }
    if(quadrado2.speedY <= -quadrado2.maxSpeed){
        quadrado2.acelerY *= -1
    }

    /* console.log(quadrado.speedX)
    console.log(quadrado.speedY)
    console.log('------') */
}

setInterval(function(){
    desenhar();
    atualizar();
}, 0.1)

