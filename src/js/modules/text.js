import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

export default function text() {
  // Ticker
  const tickers = document.querySelectorAll('.ticker')
  tickers.forEach((ticker) => {
    const list = ticker.querySelector('.ticker__list')
    const clone = list.cloneNode(true)
    ticker.append(clone)
  })

  // SplitText
  const theTexts = document.querySelectorAll('.text')
  // const split = new SplitText(theTexts, {
  //   type: 'lines',
  //   linesClass: 'text__line',
  // })

  // Text animation
}
