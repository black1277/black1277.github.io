document.addEventListener("DOMContentLoaded", (a)=>{
    const $content = document.getElementById('txt')
    const $btn1 = document.getElementById('btn1')
    const $din = document.getElementById('din')
    $din.addEventListener('click', (event)=>{
        event.target.classList.toggle('red')
    })
    $btn1.addEventListener('click', ()=>{
        console.log('btn1 clicked')
        animateCSS('din', 'rotateOut').then(()=>{
            animateCSS('din', 'backInDown')
        })
    })
    $content.innerHTML = '<p>Text from js file</p>' + new Date()
})

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.getElementById(element);
        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            resolve('Animation ended');
            node.classList.remove(`${prefix}animated`, animationName);
        }

        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });
