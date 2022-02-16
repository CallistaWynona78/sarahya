var player = document.getElementById('mario')

function updateElement(element, incx, incy) {
  var x = Number(element.getAttribute('data-x')) + incx
  var y = Number(element.getAttribute('data-y')) + incy
  
  
  element.style.transform = 'translate('+ x +'px, '+ y +'px)'
  
  if (element.classList.contains('mirror'))
    element.style.transform += ' scaleX(-1)'
    
  if (element.classList.contains('big'))
    element.style.transform += ' scale(2)'
  
  element.setAttribute('data-x', x)
  element.setAttribute('data-y', y)
}

setInterval(() => {
  player.classList.add('caminar')
  player.classList.remove('mirror')
  updateElement(player, 10, 0)
}, 100)

updateElement(player, 0, 0)