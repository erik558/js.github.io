let addText = document.querySelectorAll('.addText>div')

addText.forEach((el, i) => {
 el.addEventListener('click', () => {
  el.classList.toggle('addStyle')
 })
})
