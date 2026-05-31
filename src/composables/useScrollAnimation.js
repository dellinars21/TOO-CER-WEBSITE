import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Shared eases used across all animations
export const ease = {
  out:   'power3.out',
  inOut: 'power2.inOut',
  none:  'none',
}

// Register ScrollTrigger defaults so every instance feels the same
ScrollTrigger.defaults({
  markers: false,
})

export { gsap, ScrollTrigger }

// ── helpers ──────────────────────────────────────────────────────────────────

/**
 * Split an element's text content into per-character <span class="char"> nodes.
 * Preserves child elements (e.g. <sup>) by treating them as single characters.
 * Returns the array of newly created char spans.
 */
export function splitChars(el) {
  const chars = []
  const nodes = [...el.childNodes]

  el.innerHTML = ''

  for (const node of nodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      for (const ch of node.textContent) {
        const span = document.createElement('span')
        span.className = 'char'
        span.style.display = 'inline-block'
        span.textContent = ch === ' ' ? ' ' : ch
        el.appendChild(span)
        chars.push(span)
      }
    } else {
      // Keep element nodes (like <sup>) as a single "char"
      node.classList?.add('char')
      el.appendChild(node)
      chars.push(node)
    }
  }
  return chars
}

/**
 * Wrap every word (whitespace-split) in an element into
 * <span class="word"><span class="word-inner"> … </span></span>
 * so the outer clips and the inner slides up.
 * Returns the inner spans to animate.
 */
export function splitWords(el) {
  const text = el.textContent
  const inners = []
  el.innerHTML = text.split(/(\s+)/).map(tok => {
    if (/^\s+$/.test(tok)) return tok
    const word = document.createElement('span')
    word.className = 'word'
    word.style.overflow = 'hidden'
    word.style.display = 'inline-block'
    word.style.verticalAlign = 'bottom'
    const inner = document.createElement('span')
    inner.className = 'word-inner'
    inner.style.display = 'inline-block'
    inner.textContent = tok
    word.appendChild(inner)
    inners.push(inner)
    return word.outerHTML
  }).join('')
  // Re-query after innerHTML reassignment
  return [...el.querySelectorAll('.word-inner')]
}

/**
 * Standard scroll-triggered fade-up for a list of elements.
 * Each element gets its own ScrollTrigger so they fire individually.
 */
export function revealUp(elements, options = {}) {
  const {
    y = 40,
    blur = '6px',
    duration = 0.8,
    stagger = 0,
    start = 'top 88%',
    once = true,
    delay = 0,
  } = options

  return gsap.from(elements, {
    opacity: 0,
    y,
    filter: `blur(${blur})`,
    duration,
    delay,
    ease: ease.out,
    stagger,
    clearProps: 'filter,transform',
    scrollTrigger: {
      trigger: typeof elements === 'string' ? elements : elements[0],
      start,
      once,
    },
  })
}
