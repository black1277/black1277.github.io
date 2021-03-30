document.addEventListener("DOMContentLoaded", (a)=>{
    const $content = document.getElementById('txt')
    const $btn1 = document.getElementById('btn1')
    $btn1.addEventListener('click', ()=>{
        console.log('btn1 clicked')
    })
    $content.innerHTML = '<p>Text from js file</p>' + new Date()
})