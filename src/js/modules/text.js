export default function text() {
  const fullscreenSections = document.querySelectorAll('.text--fullscreen')

  // For each fullscreen text section, grab the words
  fullscreenSections.forEach((section, index) => {
    const sectionWords = section.querySelectorAll('.text__word')
    // Now loop through the array of words, and set the font size to the height of the screen divided by the number of words
    // sectionWords.forEach((word, index) => {
    //   word.style.fontSize = `${100 / sectionWords.length - 5}vh`
    // })
  })
}
