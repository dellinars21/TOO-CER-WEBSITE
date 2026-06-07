<template>
  <section class="stats-sec" ref="sectionRef">
    <div class="container">
      <div class="stats-panel">

        <!-- Column 1: Scale -->
        <div class="stats-col stats-col--left">
          <div class="stats-col-body">
            <div class="stat-hero accent">{{ t('Scale', 'Масштаб', 'Масштаб') }}</div>
            <div class="stat-primary-label">
              {{ t('12 Major Oil & Gas Fields', '12 Крупных нефтегазовых месторождений', '12 Ірі мұнай-газ кен орындары') }}
            </div>
            <div class="stat-sub-label">Tengiz, Kashagan, Karachaganak, Northern Buzachi, Alibekmola Field, CPC Pipeline, + 5</div>
          </div>
          <RouterLink to="/portfolio" class="portfolio-btn">
            {{ t('Portfolio', 'Портфолио', 'Портфолио') }}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 11L11 2M11 2H4.5M11 2V8.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
          </RouterLink>
        </div>

        <div class="stats-divider"></div>

        <!-- Column 2: Mission -->
        <div class="stats-col stats-col--center">
          <p class="mission-text" ref="missionRef">
            <span class="typed-text" ref="typedRef"></span><span class="cursor" ref="cursorRef">|</span>
          </p>
          <div class="ceo-row">
            <div class="ceo-avatar">GD</div>
            <div>
              <div class="ceo-name">{{ t('General Director', 'Генеральный директор', 'Бас директор') }}</div>
              <div class="ceo-company">Caspian Engineering &amp; Research, LLP</div>
            </div>
          </div>
        </div>

        <div class="stats-divider"></div>

        <!-- Column 3: Qualification -->
        <div class="stats-col stats-col--right">
          <div class="stats-col-body">
            <div class="stat-hero dark">{{ t('Qualification', 'Квалификация', 'Біліктілік') }}</div>
            <div class="stat-primary-label muted">
              {{ t('20+ years of engineering expertise', '20+ лет инженерного опыта', '20+ жылдан астам инженерлік тәжірибе') }}
            </div>
            <div class="stat-sub-label muted">
              {{ t('in Kazakhstan\'s oil & gas sector', 'в нефтегазовом секторе Казахстана', 'Қазақстанның мұнай-газ саласында') }}
            </div>
          </div>
          <div class="cert-badges">
            <span class="cert-badge">ISO 9001:2015</span>
            <span class="cert-badge">ISO 14001:2015</span>
            <span class="cert-badge">OHSAS 18001:2008</span>
            <span class="cert-badge">ISO 31000:2009</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { gsap, ScrollTrigger, ease } from '../composables/useScrollAnimation.js'

const { t } = useLanguage()
const sectionRef = ref(null)
const typedRef   = ref(null)
const cursorRef  = ref(null)
let ctx
let typeTimer = null

// Segments: [text, tag] — tag can be null | 'em' | 'strong'
const SEGMENTS = [
  ["CE&R ", null],
  ["exists", "em"],
  [" to solve the hardest ", null],
  ["engineering challenges", "strong"],
  [" in Kazakhstan's energy sector. With precision, integrity,", null],
  [" and at scale.", "strong"],
]

// Build flat char list: { char, openTag, closeTag }
function buildChars() {
  const chars = []
  SEGMENTS.forEach(([text, tag]) => {
    text.split('').forEach((ch, i) => {
      chars.push({
        char: ch,
        openTag:  i === 0 && tag ? `<${tag}>` : '',
        closeTag: i === text.length - 1 && tag ? `</${tag}>` : '',
      })
    })
  })
  return chars
}

// Human-like delay: faster on normal chars, pauses on punctuation, tiny bursts
function charDelay(ch, next) {
  const base = 28 + Math.random() * 30        // 28–58 ms base
  if ('.!?'.includes(ch))  return base + 260 + Math.random() * 160
  if (',;:'.includes(ch))  return base + 80  + Math.random() * 60
  if (ch === ' ' && next && next !== ' ') return base + (Math.random() < 0.08 ? 140 : 0)
  // occasional micro-pause mid-word (simulates hesitation)
  if (Math.random() < 0.04) return base + 120 + Math.random() * 80
  return base
}

function startTypewriter(chars) {
  let i = 0
  let html = ''

  function typeNext() {
    if (i >= chars.length) {
      // blink cursor 3× then fade out
      let blinks = 0
      const blink = setInterval(() => {
        cursorRef.value.style.opacity = cursorRef.value.style.opacity === '0' ? '1' : '0'
        if (++blinks >= 6) {
          clearInterval(blink)
          cursorRef.value.style.transition = 'opacity 0.4s'
          cursorRef.value.style.opacity = '0'
        }
      }, 400)
      return
    }

    const { char, openTag, closeTag } = chars[i]
    // Escape &, then restore intentional HTML tags
    const safe = char === '&' ? '&amp;' : char
    html += openTag + safe + closeTag
    typedRef.value.innerHTML = html

    i++
    typeTimer = setTimeout(typeNext, charDelay(char, chars[i]?.char))
  }

  typeNext()
}

onMounted(() => {
  const chars = buildChars()

  ctx = gsap.context(() => {
    gsap.from('.stats-panel', {
      opacity: 0, y: 40, duration: 0.9, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 84%', once: true }
    })
    gsap.from(['.stats-col--left', '.stats-col--right'], {
      opacity: 0, y: 24, duration: 0.7, stagger: 0.1, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })

    ScrollTrigger.create({
      trigger: sectionRef.value,
      start: 'top 78%',
      once: true,
      onEnter: () => startTypewriter(chars),
    })
  }, sectionRef.value)
})

onUnmounted(() => {
  clearTimeout(typeTimer)
  ctx?.revert()
})
</script>

<style scoped>
.stats-sec {
  padding: 0 0 80px;
}

.stats-panel {
  display: grid;
  grid-template-columns: 1fr 20px 1.4fr 20px 1fr;
  border: 1.5px solid var(--gray-200);
  border-radius: 20px;
  overflow: hidden;
}

/* Divider columns */
.stats-divider {
  border-left: 1.5px solid var(--gray-200);
  margin: 32px 0;
}

/* Shared column layout */
.stats-col {
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.stats-col--left,
.stats-col--right {
  justify-content: space-between;
  min-height: 280px;
}

.stats-col--center {
  justify-content: space-between;
  gap: 24px;
}

.stats-col-body {
  display: flex;
  flex-direction: column;
}

/* Hero stat word */
.stat-hero {
  font-size: clamp(36px, 4.5vw, 52px);
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1;
  margin-bottom: 10px;
}

.stat-hero.accent {
  color: var(--accent);
}

.stat-hero.dark {
  color: var(--dark);
}

.stat-primary-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--dark);
  line-height: 1.4;
}

.stat-primary-label.muted {
  color: var(--gray-600, #555);
}

.stat-sub-label {
  font-size: 12px;
  color: var(--gray-500);
  margin-top: 5px;
  font-style: italic;
}

.stat-sub-label.muted {
  color: var(--gray-400, #999);
}

/* Portfolio button */
.portfolio-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  background: var(--dark);
  color: var(--white);
  font-size: 13px;
  font-weight: 600;
  border-radius: 100px;
  width: fit-content;
  transition: background 0.2s;
  text-decoration: none;
}

.portfolio-btn:hover {
  background: #333;
}

/* Mission text */
.mission-text {
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 400;
  line-height: 1.5;
  color: var(--dark);
  flex: 1;
  min-height: 4.5em; /* prevent layout shift while typing */
}

.mission-text em { font-style: italic; }
.mission-text strong { font-weight: 700; }

.cursor {
  display: inline-block;
  font-weight: 300;
  color: var(--accent);
  animation: blink-caret 0.65s step-end infinite;
  margin-left: 1px;
}

@keyframes blink-caret {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

/* CEO row */
.ceo-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ceo-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--gray-700);
  flex-shrink: 0;
}

.ceo-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--dark);
}

.ceo-company {
  font-size: 11px;
  color: var(--gray-500);
  margin-top: 2px;
}

/* Cert badges */
.cert-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.cert-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border: 1px solid var(--gray-300);
  border-radius: 100px;
  font-size: 10px;
  font-weight: 600;
  color: var(--gray-600, #555);
  letter-spacing: 0.3px;
  white-space: nowrap;
}

/* Responsive */
@media (max-width: 1024px) {
  .stats-panel {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .stats-divider {
    border-left: none;
    border-top: 1.5px solid var(--gray-200);
    margin: 0 32px;
    height: 1px;
  }

  .stats-col--left,
  .stats-col--right {
    min-height: unset;
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .stats-col {
    padding: 28px 24px;
  }

  .stat-hero {
    font-size: clamp(32px, 10vw, 44px);
  }
}
</style>
