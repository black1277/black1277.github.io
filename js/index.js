document.addEventListener("DOMContentLoaded", (a)=>{
    const $content = document.getElementById('txt')
    $content.innerHTML = '<p>Text from js file</p>' + new Date()
})