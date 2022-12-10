import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { moveOffscreen } from './helper-functions'

gsap.registerPlugin(ScrollTrigger)

export default function animations() {
  const section0 = document.querySelector('#section--0')
  const section1 = document.querySelector('#section--1')
  const ticker1 = document.querySelector('#ticker--1')
  const ticker2 = document.querySelector('#ticker--2')
  const plant2 = document.querySelector('.plant--2')
  const section1Texts = document.querySelectorAll('#section--1 .text')

  // GSAP SET
  gsap.set([ticker1, ticker2], {
    y: '-100%',
  })
  gsap.set(plant2, {
    x: moveOffscreen(plant2, 'right'),
  })
  // section1Texts.forEach((text) => {
  //   gsap.set(text, {
  //     y: moveOffscreen(text, 'bottom'),
  //   })
  // })

  const t1 = gsap.timeline()

  t1.to(section1Texts, {
    yPercent: -100,
    ease: 'none',
    stagger: 0.5,
    scrollTrigger: {
      trigger: section1,
      // start: 'top -50px',
      // end: 'top -500px',
      scrub: true,
      onEnter: function (self) {
        // console.log(self)
      },
    },
  })
}
