document.addEventListener("DOMContentLoaded", (a)=>{
    const $content = document.getElementById('txt')
    $content.innerHTML = '<br /><hr /> Text from js <hr /><br />' + new Date()
})