export const forbidScroll = (elem) => {
  let flag = false

  elem.addEventListener(
    'touchstart',
    (evt) => {
      if (elem.contains(evt.target)) {
        flag = true
      } else {
        flag = false
      }
    },
    false
  )
  elem.addEventListener('touchmove', (evt) => {
    evt.prop = flag
  })
}

const handle = (evt) => {
  if (evt.prop) {
    evt.preventDefault()
  }
}

document.body.removeEventListener('touchmove', handle, { passive: false })
document.body.addEventListener('touchmove', handle, { passive: false })
