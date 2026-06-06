<template>
  <section class="awards-home-sec" ref="sectionRef">
    <div class="container">
      <div class="awards-home-top">
        <span class="section-badge">
          {{ t('Awards & Recognition', 'Награды и признание', 'Марапаттар мен мойындау') }}
        </span>
      </div>

      <div class="awards-home-grid">
        <!-- Left: Carousel -->
        <div class="awards-carousel-wrap">
          <h2 class="awards-home-title">
            {{ t('Recognised for excellence', 'Признанное превосходство', 'Жоғары деңгейі мойындалған') }}
          </h2>

          <div class="awards-carousel">
            <button
              ref="prevSlotRef"
              class="award-slot award-slot--side award-slot--prev"
              :aria-label="t('Previous', 'Предыдущий', 'Алдыңғы')"
              @click="prev"
            >
              <img :src="`./images/rewards/${prevItem.file}`" :alt="t(prevItem.nameEn, prevItem.nameRu, prevItem.nameKz)" />
            </button>

            <div ref="centerSlotRef" class="award-slot award-slot--center" @click="openLightbox(currentItem)">
              <img :src="`./images/rewards/${currentItem.file}`" :alt="t(currentItem.nameEn, currentItem.nameRu, currentItem.nameKz)" />
              <div class="award-center-overlay">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3H21V9M21 3L9 15M10 5H3V21H19V14" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

            <button
              ref="nextSlotRef"
              class="award-slot award-slot--side award-slot--next"
              :aria-label="t('Next', 'Следующий', 'Келесі')"
              @click="next"
            >
              <img :src="`./images/rewards/${nextItem.file}`" :alt="t(nextItem.nameEn, nextItem.nameRu, nextItem.nameKz)" />
            </button>
          </div>

          <div class="award-carousel-footer">
            <p class="award-current-name">
              {{ t(currentItem.nameEn, currentItem.nameRu, currentItem.nameKz) }}
            </p>
            <div class="award-nav-btns">
              <button class="award-nav-btn" @click="prev" :aria-label="t('Previous', 'Предыдущий', 'Алдыңғы')">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <span class="award-nav-counter">{{ index + 1 }} / {{ n }}</span>
              <button class="award-nav-btn" @click="next" :aria-label="t('Next', 'Следующий', 'Келесі')">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Right: Copy + CTA -->
        <div class="awards-home-copy">
          <p class="awards-home-desc">
            <span class="awards-home-desc--highlight">{{ t(
              'CE&R has earned something special.',
              'CE&R заслужила нечто особенное.',
              'CE&R ерекше нәрсеге ие болды.'
            ) }}</span>
            {{ ' ' }}
            <span class="awards-home-desc--plain">{{ t(
              'The biggest energy players and national institutions in Kazakhstan trust us, because we don\'t just do engineering—we deliver excellence, every single time.',
              'Крупнейшие игроки энергетики и национальные институты Казахстана доверяют нам, потому что мы не просто занимаемся инжинирингом — мы каждый раз обеспечиваем превосходство.',
              'Қазақстанның ірі энергетика ойыншылары мен ұлттық институттары бізге сенеді, өйткені біз тек инжиниринг жасап қана қоймай, әр жолы үздік нәтиже береміз.'
            ) }}</span>
          </p>
          <RouterLink to="/about" class="awards-home-cta">
            {{ t('About us', 'О нас', 'Біз туралы') }}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div class="awards-lightbox" v-if="lightboxSrc" @click="lightboxSrc = null">
        <button class="awards-lb-close" @click.stop="lightboxSrc = null" :aria-label="t('Close','Закрыть','Жабу')">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 2L18 18M18 2L2 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <img :src="lightboxSrc" class="awards-lb-img" @click.stop />
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { gsap, ease } from '../composables/useScrollAnimation.js'

const { t } = useLanguage()
const sectionRef = ref(null)
let ctx

// Combine awards + letters of gratitude into one carousel (first item prioritized).
const items = [
  // Awards first — first item gets priority position on initial render
  { file: 'award-gold-fgp-2025.jpg',   nameEn: 'Gold Award — FGP/WPMP Project (2025)',                          nameRu: 'Золотая награда — Проект ФРП/УУПД (2025)',                                     nameKz: 'Алтын марапат — ФРП/УУПД жобасы (2025)' },
  { file: 'award-altyn-sapa-2019.jpg', nameEn: 'Presidential Award "Altyn Sapa" — Best Service Company (2019)', nameRu: 'Премия Президента РК «Алтын Сапа» — Лучшее сервисное предприятие (2019)',     nameKz: 'ҚР Президентінің «Алтын Сапа» сыйлығы — Үздік қызмет ұйымы (2019)' },
  { file: 'diploma-kazstrin-2015.jpg', nameEn: 'Diploma from KazStrIn (2015)',                                  nameRu: 'Грамота от КазСтИн (2015)',                                                    nameKz: 'КазСтИн грамотасы (2015)' },
  { file: 'gramota-ncoc-2019.jpg',     nameEn: 'Certificate of Honor from NCOC (2019)',                         nameRu: 'Почётная грамота от НКОК (2019)',                                              nameKz: 'НКОК-тан Құрмет грамотасы (2019)' },
  { file: 'gramota-knok-2014.jpg',     nameEn: 'Certificate of Honor from KNOK (2014)',                         nameRu: 'Почётная грамота от КНОК (2014)',                                              nameKz: 'КНОК-тан Құрмет грамотасы (2014)' },
  // Letters of gratitude
  { file: 'letter-tco-2019.jpg',       nameEn: 'Letter of Gratitude from TCO (2019)',                           nameRu: 'Благодарственное письмо от ТШО (2019)',                                        nameKz: 'ТШО-дан алғыс хат (2019)' },
  { file: 'letter-tco-2017.jpg',       nameEn: 'Letter of Gratitude from TCO (2017)',                           nameRu: 'Благодарственное письмо от ТШО (2017)',                                        nameKz: 'ТШО-дан алғыс хат (2017)' },
  { file: 'letter-tco-2014.jpg',       nameEn: 'Letter of Gratitude from TCO (2014)',                           nameRu: 'Благодарственное письмо от ТШО (2014)',                                        nameKz: 'ТШО-дан алғыс хат (2014)' },
  { file: 'letter-ncoc-2023.jpg',      nameEn: 'Letter of Gratitude from NCOC (2023)',                          nameRu: 'Благодарственное письмо от НКОК (2023)',                                       nameKz: 'НКОК-тан алғыс хат (2023)' },
  { file: 'letter-ncoc-2019.jpg',      nameEn: 'Letter of Gratitude from NCOC (2019)',                          nameRu: 'Благодарственное письмо от НКОК (2019)',                                       nameKz: 'НКОК-тан алғыс хат (2019)' },
  { file: 'letter-atameken-2019.jpg',  nameEn: 'Letter of Gratitude from NPP RK "Atameken" (2019)',             nameRu: 'Благодарственное письмо от НПП РК «Атамекен» (2019)',                          nameKz: '«Атамекен» ҚР ҰКП-нан алғыс хат (2019)' },
  { file: 'letter-zhaikmuai-2019.jpg', nameEn: 'Letter of Gratitude from Zhaikmuai (2019)',                     nameRu: 'Благодарственное письмо от ТОО «Жаикмунай» (2019)',                            nameKz: '«Жайықмұнай» ЖШС-нан алғыс хат (2019)' },
  { file: 'letter-tepke-2023.jpg',     nameEn: 'Letter of Gratitude from TEPKE (2023)',                         nameRu: 'Благодарственное письмо от ТОО «ТЕПКЕ» (2023)',                                nameKz: '«ТЕПКЕ» ЖШС-нан алғыс хат (2023)' },
]

const index = ref(0)
const n = items.length
const isAnimating = ref(false)

const currentItem = computed(() => items[index.value])
const prevItem = computed(() => items[(index.value - 1 + n) % n])
const nextItem = computed(() => items[(index.value + 1) % n])

const centerSlotRef = ref(null)
const prevSlotRef = ref(null)
const nextSlotRef = ref(null)

function navigate(dir) {
  if (isAnimating.value) return
  const center = centerSlotRef.value
  const left   = prevSlotRef.value
  const right  = nextSlotRef.value
  if (!center || !left || !right) return

  isAnimating.value = true

  // Kill any in-flight tweens on these targets so a freshly-mounted scroll-in
  // animation (or a previous nav) can't fight the new timeline.
  gsap.killTweensOf([center, left, right])

  const tl = gsap.timeline({
    defaults: { force3D: true, overwrite: 'auto' },
    onComplete: () => { isAnimating.value = false },
  })

  // ── Phase 1: animate OUT (center slides in travel direction, sides fade)
  tl.to(center, {
    xPercent: dir * -60, opacity: 0, scale: 0.9,
    duration: 0.32, ease: 'power2.in',
  }, 0)
  tl.to([left, right], {
    opacity: 0, scale: 0.86,
    duration: 0.26, ease: 'power2.in',
  }, 0)

  // ── Phase 2: swap state while elements are invisible.
  // GSAP runs callbacks during its own ticker, BEFORE the paint of the same
  // frame. Vue schedules the DOM update as a microtask — which runs after this
  // callback but before paint, so the new img srcs land before the browser
  // composites this frame. We then snap (synchronously) the elements to the
  // "enter-from" pose so nothing is ever painted at the wrong position.
  tl.add(() => {
    index.value = (index.value + dir + n) % n
    gsap.set(center, { xPercent: dir * 60, opacity: 0, scale: 0.92 })
    gsap.set([left, right], { opacity: 0, scale: 0.86 })
  })

  // ── Phase 3: animate IN
  tl.to(center, {
    xPercent: 0, opacity: 1, scale: 1,
    duration: 0.46, ease: 'power3.out',
    clearProps: 'transform,opacity',
  })
  tl.to([left, right], {
    opacity: 0.55, scale: 0.92,
    duration: 0.36, ease: 'power2.out',
    clearProps: 'transform,opacity',
  }, '<0.04')
}

function next() { navigate(1) }
function prev() { navigate(-1) }

// Lightbox
const lightboxSrc = ref(null)
function openLightbox(item) {
  lightboxSrc.value = `./images/rewards/${item.file}`
}

function onKey(e) {
  if (e.key === 'Escape') lightboxSrc.value = null
  else if (lightboxSrc.value) return
  else if (e.key === 'ArrowRight') next()
  else if (e.key === 'ArrowLeft') prev()
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  ctx = gsap.context(() => {
    gsap.from('.awards-home-sec .section-badge', {
      opacity: 0, scale: 0.85, duration: 0.55, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })
    gsap.from('.awards-home-title', {
      opacity: 0, y: 34, filter: 'blur(10px)', duration: 0.9, delay: 0.1,
      ease: ease.out, clearProps: 'filter',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })
    gsap.from('.awards-home-desc, .awards-home-cta', {
      opacity: 0, y: 20, duration: 0.7, delay: 0.22, stagger: 0.1, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })
    gsap.from('.award-slot', {
      opacity: 0, y: 30, scale: 0.94, duration: 0.75, stagger: 0.1, ease: ease.out,
      scrollTrigger: { trigger: '.awards-carousel', start: 'top 85%', once: true }
    })
  }, sectionRef.value)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  ctx?.revert()
})
</script>

<style scoped>
.awards-home-sec {
  padding: 50px 0;
  background: #0058b1;
}

.awards-home-top {
  margin-bottom: 20px;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border: 1.5px solid rgba(255,255,255,0.35);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
}

.awards-home-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 60px;
  align-items: center;
  min-height: 0;
}

.awards-home-title {
  font-size: clamp(32px, 4.6vw, 56px);
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.05;
  color: var(--on-accent);
  margin-bottom: 40px;
}

.awards-carousel {
  display: grid;
  grid-template-columns: 0.55fr 1fr 0.55fr;
  gap: 18px;
  align-items: center;
  justify-items: center;
  position: relative;
}

.award-slot {
  position: relative;
  width: 100%;
  border-radius: 14px;
  border: 1.5px solid rgba(255,255,255,0.2);
  background: var(--white);
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  transition: border-color 0.25s, box-shadow 0.25s;
  display: block;
  will-change: transform, opacity;
  transform-origin: center center;
  backface-visibility: hidden;
}

.award-slot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.award-slot--side {
  aspect-ratio: 3 / 4;
  opacity: 0.55;
  transform: scale(0.92);
  z-index: 1;
}

.award-slot--side:hover {
  opacity: 0.85;
  transform: scale(0.95);
  border-color: rgba(255,255,255,0.45);
}

.award-slot--center {
  aspect-ratio: 3 / 4;
  cursor: zoom-in;
  box-shadow: 0 12px 36px rgba(0,0,0,0.25);
  z-index: 2;
}

.award-slot--center:hover {
  border-color: rgba(255,255,255,0.45);
  box-shadow: 0 16px 48px rgba(0,0,0,0.35);
}

.award-center-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10,10,10,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}

.award-slot--center:hover .award-center-overlay {
  opacity: 1;
}

.award-carousel-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  gap: 16px;
}

.award-current-name {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,0.75);
  flex: 1;
}

.award-nav-btns {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.award-nav-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.35);
  background: rgba(255,255,255,0.1);
  color: var(--on-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.award-nav-btn:hover {
  background: rgba(255,255,255,0.22);
  border-color: rgba(255,255,255,0.6);
}

.award-nav-counter {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255,255,255,0.6);
  min-width: 36px;
  text-align: center;
}

/* Right column */
.awards-home-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;
  align-self: center;
}

.awards-home-desc {
  font-size: 16px;
  line-height: 1.65;
  color: rgba(255,255,255,0.8);
  max-width: 460px;
}

.awards-home-desc--highlight {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.3px;
}

.awards-home-desc--plain {
  font-size: 15px;
  font-weight: 400;
  color: rgba(255,255,255,0.65);
}

.awards-home-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: 1.5px solid rgba(255,255,255,0.4);
  border-radius: 100px;
  color: var(--on-accent);
  font-size: 13px;
  font-weight: 600;
  transition: background 0.2s, border-color 0.2s;
}

.awards-home-cta:hover {
  background: rgba(255,255,255,0.15);
  border-color: rgba(255,255,255,0.7);
}

/* Lightbox */
.awards-lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 40px;
  cursor: zoom-out;
}

.awards-lb-img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.awards-lb-close {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}

.awards-lb-close:hover {
  background: rgba(255,255,255,0.2);
}

@media (max-width: 1024px) {
  .awards-home-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .awards-home-desc { max-width: 100%; }
}

@media (max-width: 640px) {
  .awards-home-sec { padding: 70px 0; }
  .awards-carousel { gap: 10px; }
  .award-current-name { font-size: 13px; }
}
</style>
