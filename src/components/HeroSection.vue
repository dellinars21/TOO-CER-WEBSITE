<template>
  <section class="hero" ref="heroRef">
    <div class="hero-bg">
      <img
        src="./images/hero background.webp"
        alt="Offshore oil platform"
        class="hero-img"
        ref="imgRef"
        :class="{ 'hero-img--hidden': videoReady }"
      />
      <video
        ref="videoRef"
        class="hero-video"
        :class="{ 'hero-video--visible': videoReady }"
        src="./images/hero_section_video.mp4"
        autoplay
        muted
        playsinline
        preload="auto"
        @canplaythrough="onVideoReady"
      />
      <div class="hero-overlay"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-brand" ref="brandRef">
        <h1 ref="titleRef">CER<sup>©</sup></h1>
        <p class="hero-brand-sub">{{ t('Caspian Engineering & Research', 'Caspian Engineering & Research', 'Caspian Engineering & Research') }}</p>
      </div>

      <div class="hero-right" ref="rightRef">
        <p class="hero-desc">
          {{ t(
            'One of the leading engineering and consulting companies in the oil and gas sector of Kazakhstan — providing engineering design, environmental support, and consulting services since 2003.',
            'Одна из ведущих инжиниринговых и консалтинговых компаний нефтегазового сектора Казахстана — разрабатывает проектную документацию, обеспечивает экологическое сопровождение и консалтинговые услуги с 2003 года.',
            'Қазақстанның мұнай және газ секторындағы жетекші инжинирингтік және консалтингтік компаниялардың бірі — 2003 жылдан бастап жобалау, экологиялық сүйемелдеу және консалтингтік қызметтерді ұсынады.'
          ) }}
        </p>
        <RouterLink to="/about" class="btn-hero">
          {{ t('Get in Touch', 'Связаться', 'Байланыс') }}
          <span class="arrow-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { gsap, ScrollTrigger, splitChars, ease } from '../composables/useScrollAnimation.js'

const { t } = useLanguage()

const heroRef  = ref(null)
const imgRef   = ref(null)
const videoRef = ref(null)
const titleRef = ref(null)
const rightRef = ref(null)
const videoReady = ref(false)
let ctx

function onVideoReady() {
  videoReady.value = true
  videoRef.value.playbackRate = 0.70
}

onMounted(() => {
  ctx = gsap.context(() => {
    // ── 1. Character-level blur-in for "CER©" ───────────────────────────
    const chars = splitChars(titleRef.value)

    gsap.set(chars, { opacity: 0, y: 50, filter: 'blur(12px)' })
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.9,
      stagger: 0.06,
      ease: ease.out,
      delay: 0.15,
      clearProps: 'filter,transform',
    })

    // ── 2. Sub-brand line ────────────────────────────────────────────────
    gsap.from('.hero-brand-sub', {
      opacity: 0,
      y: 14,
      duration: 0.7,
      delay: 0.55,
      ease: ease.out,
    })

    // ── 3. Right column: desc + CTA ─────────────────────────────────────
    gsap.from(rightRef.value.querySelector('.hero-desc'), {
      opacity: 0,
      y: 22,
      filter: 'blur(4px)',
      duration: 0.75,
      delay: 0.65,
      ease: ease.out,
      clearProps: 'filter',
    })

    gsap.from(rightRef.value.querySelector('.btn-hero'), {
      opacity: 0,
      y: 18,
      scale: 0.92,
      duration: 0.7,
      delay: 0.82,
      ease: ease.out,
    })

    // ── 4. Parallax — background image/video moves slower than viewport ────
    gsap.to([imgRef.value, videoRef.value], {
      yPercent: 22,
      ease: ease.none,
      scrollTrigger: {
        trigger: heroRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      },
    })

    // ── 5. Hero content fades out as you scroll away ─────────────────────
    gsap.to('.hero-content', {
      opacity: 0,
      y: -30,
      ease: ease.none,
      scrollTrigger: {
        trigger: heroRef.value,
        start: 'center top',
        end: 'bottom top',
        scrub: 1.2,
      },
    })
  }, heroRef.value)
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.hero {
  position: relative;
  height: calc(100vh - 64px);
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 64px;
  margin-top: 64px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-img {
  width: 100%;
  height: 115%;          /* extra height for parallax travel */
  object-fit: cover;
  object-position: center 40%;
  will-change: transform;
  transition: opacity 0.8s ease;
}

.hero-img--hidden {
  opacity: 0;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 115%;          /* matches img for parallax travel */
  object-fit: cover;
  object-position: center 40%;
  will-change: transform;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.hero-video--visible {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.1) 0%,
    rgba(0,0,0,0.3) 50%,
    rgba(0,0,0,0.75) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  gap: 40px;
  will-change: transform, opacity;
}

.hero-brand h1 {
  font-size: clamp(64px, 10vw, 120px);
  font-weight: 700;
  color: var(--white);
  letter-spacing: -2px;
  line-height: 0.9;
  will-change: transform, opacity, filter;
}

.hero-brand h1 sup {
  font-size: 0.3em;
  top: -0.7em;
  position: relative;
}

.hero-brand-sub {
  font-size: 13px;
  color: rgba(255,255,255,0.55);
  margin-top: 8px;
  font-weight: 400;
  letter-spacing: 0.2px;
}

.hero-right {
  max-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 8px;
}

.hero-desc {
  font-size: 13px;
  line-height: 1.7;
  color: rgba(255,255,255,0.85);
}

.btn-hero {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: var(--accent);
  color: var(--on-accent);
  font-size: 13px;
  font-weight: 600;
  border-radius: 100px;
  width: fit-content;
  transition: background 0.2s, transform 0.15s;
}

.btn-hero:hover {
  background: var(--accent-hover);
  transform: translateY(-2px) scale(1.02);
}

.arrow-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--on-accent);
  border-radius: 50%;
  color: var(--accent);
  transition: transform 0.2s;
}

.btn-hero:hover .arrow-icon {
  transform: rotate(45deg) scale(1.1);
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .hero-right {
    max-width: 100%;
  }
}
</style>
