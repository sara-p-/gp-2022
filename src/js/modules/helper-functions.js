// Figure out distance in pixels it will take to get an element off the screen
export function moveOffscreen(element, side = 'bottom') {
  const windowHeight = window.innerHeight
  const windowWidth = window.innerWidth
  const elementPosition = element.getBoundingClientRect()
  if (side == 'top') {
    return `-${elementPosition.bottom}px`
  }
  if (side == 'right') {
    return `${windowWidth - elementPosition.left}px`
  }
  if (side == 'bottom') {
    return `${windowHeight - elementPosition.top}px`
  }
  if (side == 'left') {
    return `-${elementPosition.right}px`
  }
}
