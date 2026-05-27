<template>
  <section class="hero">
    <div class="hero-bg">
      <img
        src="/images/hero background.webp"
        alt="Offshore oil platform"
        class="hero-img"
      />
      <div class="hero-overlay"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-brand">
        <h1>CER<sup>©</sup></h1>
        <p class="hero-brand-sub">{{ t('Caspian Engineering &amp; Research', 'Каспийские Инжиниринг и Исследования', 'Каспий Инжиниринг және Зерттеулер') }}</p>
      </div>

      <div class="hero-right">
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
import { useLanguage } from '../composables/useLanguage.js'
const { t } = useLanguage()
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
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
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
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
}

.hero-brand h1 {
  font-size: clamp(64px, 10vw, 120px);
  font-weight: 700;
  color: var(--white);
  letter-spacing: -2px;
  line-height: 0.9;
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
  transition: background 0.2s, transform 0.2s;
}

.btn-hero:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
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
