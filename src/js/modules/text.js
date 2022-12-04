import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

export default function text() {
  const theTexts = document.querySelectorAll('.text')
  const split = new SplitText(theTexts, {
    type: 'lines',
    linesClass: 'text__line',
  })
  // theTexts.forEach((text) => {

  // })
}
