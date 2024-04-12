var main = document.getElementById("main")
var cursor = document.getElementById("cursor")

main.addEventListener('mousemove',function(mouse) {
    cursor.style.left = mouse.x+"px"
    cursor.style.top = mouse.y+"px"
    
})