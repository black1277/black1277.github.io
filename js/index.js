document.addEventListener("DOMContentLoaded", (a)=>{
  const $content = document.getElementById('txt')
  const $btn1 = document.getElementById('btn1')
  const $din = document.getElementById('din')
  $din.addEventListener('click', (event)=>{
    event.target.classList.toggle('red')
  })
  $btn1.addEventListener('click', async ()=>{
    $btn1.disabled = true
    $btn1.textContent = 'Please, wait'
    console.log($btn1)
    TotalLength(100)
    await  animateCSS('din', 'rotateOut')
    await  animateCSS('din', 'backInDown')
    await  delay(1000)
    await  animateCSS('din', 'backOutDown')
    await  animateCSS('din', 'fadeInRight')
    $btn1.disabled = false
    $btn1.textContent = 'Click for animate'
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

function TotalLength(target){
  if(target > 100) target = 100
  const path = document.querySelector('#check')
  const tx = document.querySelector('#count1')
  const ani1 = document.querySelector('#ani1')

  let len = Math.round( path.getTotalLength() )

  path.setAttribute('stroke-dashoffset', String( len ))
  ani1.setAttribute('fill', 'remove')
  tx.setAttribute('font-size', '12')
  tx.setAttribute('fill', '#000000')

  let iv = setInterval(()=>{
    let n = path.getAttribute('stroke-dashoffset')
    let proc = Math.floor((316 - n) / 3.14) // растет от 0 до target
    if (target <= proc ) {
      clearInterval(iv)
    }
    if(proc === 25) {tx.setAttribute('fill', '#ff3737'); }
    if(proc === 50) {tx.setAttribute('fill', '#ffa702'); }
    if(proc === 75) {tx.setAttribute('fill', '#1ee000'); }
    tx.innerHTML ='HTML ' +  Math.floor((316 - n) / 3.14) + '%'
    path.setAttribute('stroke-dashoffset', String(n-2))
  }, 20)
}