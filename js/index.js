document.addEventListener("DOMContentLoaded", (a)=>{
    const $content = document.getElementById('txt')
    const $btn1 = document.getElementById('btn1')
    const $din = document.getElementById('din')
    $din.addEventListener('click', (event)=>{
        event.target.classList.toggle('red')
    })
    $btn1.addEventListener('click', async ()=>{
        TotalLength(98)
        await  animateCSS('din', 'rotateOut')
        await  animateCSS('din', 'backInDown')
        await  delay(1000)
        await  animateCSS('din', 'backOutDown')
        await  animateCSS('din', 'fadeInRight')
    })
    $content.innerHTML = '<p>Text from js file</p>' + new Date()
})
const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}
const animateCSS = (element, animation, prefix = 'animate__') =>

    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`
        const node = document.getElementById(element)
        node.classList.add(`${prefix}animated`, animationName)
        function handleAnimationEnd(event) {
            event.stopPropagation()
            resolve('Animation ended')
            node.classList.remove(`${prefix}animated`, animationName)
        }
        node.addEventListener('animationend', handleAnimationEnd, {once: true})
    })