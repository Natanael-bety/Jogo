const mumia = document.querySelector('.mumia');
const movimento = document.querySelector('.movimento');

const pulo = () =>{
    mumia.classList.add('pulo');

    setTimeout(() =>{
        mumia.classList.remove('pulo');
    } ,600);
}

const loop = setInterval(() =>{
    const posicaoPulo = movimento.offsetLeft;
    const posicaoMumia = +window.getComputedStyle(mumia).bottom.replace('px','');
    
    if(posicaoPulo <= 35 && posicaoPulo > 0 && posicaoMumia < 65) {
        movimento.style.animation = 'none';
        movimento.style.left = `${posicaoPulo}px`;

        mumia.style.animation = 'none';
        mumia.style.bottom = `${posicaoMumia}px`;

        mumia.src = './imagens/explosion.gif';
        mumia.style.width = '90px';

        clearInterval(loop);
    }
} , 10);


document.addEventListener('keydown', pulo);