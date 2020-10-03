const string = `
.skin *{box-sizing: border-box; margin: 0;padding: 0;}
.skin *::before,.skin *::after{box-sizing: border-box;}
.skin{
    background: #ffdb00;
    min-height: 100vh;
    position: relative;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: 50% 100%;
    animation: wave 200ms infinite linear;
}
.nose{
    border: 10px solid red;
    border-color: red transparent transparent;
    position: relative;
    border-bottom: none;
    width: 0px;
    height: 0px;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}
.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top:-16px;
    background: red;
    left: -10px;
    border-radius: 10px 10px 0 0;
}
.eye{
    position: absolute;
    height: 64px;
    width: 64px;
    border: 2px solid #000000;
    left: 50%;
    top: 100px;
    background: #2e2e2e;
    margin-left: -32px;
    border-radius: 50%;
}
.eye::before{
    content: '';
    width: 25px;
    height: 25px;
    display: block;
    background: #ffffff;
    position: absolute;
    left: 10px;
    border-radius: 50%;
    top: 2px;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
    
}
.mouth .up{
    position: relative;
    top: -28px;

}
.mouth .up .lip{
    height: 30px;
    width: 100px;
    border: 5px solid black;
    border-top: transparent;
    background: #ffdb00;
    position: relative;
    position: absolute;
    z-index: 2;
    
}

.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    border-right-color: transparent;
    transform: rotate(-22deg) translateX(-49px);
    left: 50%;
    margin-left: -50px;
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    border-left-color: transparent;
    transform: rotate(22deg) translateX(49px);
    right: 50%;
    margin-right: -50px;
}
.mouth .up .lip::before{
    content: '';
    width: 6px;
    height: 30px;
    position: absolute;
    display: block;
    background: #ffdb00;
    
}

.mouth .up .lip.left::before{
    bottom: -1px;
    right: -3px;
}
.mouth .up .lip.right::before{
    bottom: 1px;
    left: -3px;
}
.mouth .down{
    height: 190px;
    position: absolute;
    width: 100%;
    overflow: hidden;

}

.mouth .down .yuan1{
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 100px/430px;
    background:#a81008;
    overflow: hidden;
    border: 4px solid #1c0300;
}
.mouth .down .yuan1 .yuan2{
    width: 150px;
    height: 160px;
    position: absolute;
    bottom: 0;
    background: #ff5b5d;
    left: 50%;
    margin-left: -75px;
    border-radius: 100px;
}
.face >img{
    position: absolute;
    left: 50%;
    top: 50%;
}
.face.left >img{
    transform-origin: 0 0;
    transform: rotateY(180deg);
}
.face{
    width: 88px;
    height:88px;
    border: 3px solid #170900;
    position: absolute;
    left: 50%;
    top: 190px;
    background: #fe1800;
    margin-left: -44px;
}
.face.left{
    transform: translateX(-150px);
    border-radius: 44px;
}
.face.right{
    transform: translateX(150px);
    border-radius: 44px;
    
}
`
export default string;