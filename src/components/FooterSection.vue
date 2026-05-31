<template>
  <footer class="footer" ref="footerRef">
    <div class="footer-top">
      <div class="container footer-top-inner">
        <div class="footer-tagline">
          <p>{{ t('The next generation of', 'Следующее поколение', 'Жаңа буын') }}</p>
          <p class="tagline-muted">{{ t('oil & gas engineering', 'нефтегазового инжиниринга', 'мұнай-газ инжинирингі') }}</p>
        </div>

        <div class="footer-info">
          <div class="footer-col">
            <div class="footer-col-label">{{ t('LOCATION', 'АДРЕС', 'МЕКЕНЖАЙ') }}</div>
            <p>{{ t(
              'R00A7G9, Kazakhstan, Mangistau Region, Aktau, Mcrd. 17, Build. 38',
              'R00A7G9, Казахстан, Мангистауская обл., г. Актау, 17 мкрн., д. 38',
              'R00A7G9, Қазақстан, Маңғыстау обл., Ақтау қ., 17 ш/а, 38 ғимарат'
            ) }}</p>
          </div>
          <div class="footer-col">
            <div class="footer-col-label">{{ t('HOURS', 'ЧАСЫ РАБОТЫ', 'ЖҰМЫС УАҚЫТЫ') }}</div>
            <p>{{ t('Mon – Fri', 'Пн – Пт', 'Дс – Жм') }}<br />09:00 – 18:00</p>
          </div>
          <div class="footer-col">
            <div class="footer-col-label">{{ t('CONTACT', 'ТЕЛЕФОН', 'ТЕЛЕФОН') }}</div>
            <p>+7 (7292) 200-501</p>
            <p class="footer-fax">{{ t('Fax', 'Факс', 'Факс') }}: +7 (7292) 200-505</p>
          </div>
          <div class="footer-col">
            <div class="footer-col-label">EMAIL</div>
            <p>General.O@nipicer.kz</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-mid">
      <div class="container">
        <p class="footer-summary">
          {{ t(
            'Engineering excellence across every phase of the energy lifecycle. Safe, sustainable, and built to perform.',
            'Инженерное совершенство на каждом этапе энергетического цикла. Безопасно, устойчиво и результативно.',
            'Энергетика тіршілік циклінің әрбір кезеңінде инженерлік жоғары деңгей. Қауіпсіз, тұрақты және тиімді.'
          ) }}
        </p>
      </div>
    </div>

    <div class="footer-wordmark-wrap">
      <div class="container footer-wordmark-inner">
        <div class="footer-copyright">©2026</div>
        <RouterLink to="/portfolio" class="see-projects-btn">
          {{ t('See Portfolio', 'Портфолио', 'Портфолио') }}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </RouterLink>
      </div>
      <div class="footer-wordmark">CER</div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span>{{ t(
          '©2026 Caspian Engineering & Research, LLP. All Rights Reserved. Reg. #5727-1943-TOO',
          '©2026 ТОО «Caspian Engineering & Research». Все права защищены. Рег. №5727-1943-ТОО',
          '©2026 «Caspian Engineering & Research» ЖШС. Барлық құқықтар қорғалған. Тіркеу №5727-1943-ТОО'
        ) }}</span>
        <div class="footer-nav">
          <RouterLink to="/services">{{ t('Services', 'Услуги', 'Қызметтер') }}</RouterLink>
          <RouterLink to="/portfolio">{{ t('Portfolio', 'Портфолио', 'Портфолио') }}</RouterLink>
          <RouterLink to="/team">{{ t('Our Team', 'Команда', 'Команда') }}</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { gsap, ease } from '../composables/useScrollAnimation.js'

const { t } = useLanguage()
const footerRef = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.footer-tagline', {
      opacity: 0, y: 32, duration: 0.8, ease: ease.out,
      scrollTrigger: { trigger: '.footer-top', start: 'top 88%', once: true }
    })
    gsap.from('.footer-col', {
      opacity: 0, y: 22, duration: 0.65, stagger: 0.09, delay: 0.1, ease: ease.out,
      scrollTrigger: { trigger: '.footer-top', start: 'top 88%', once: true }
    })
    gsap.from('.footer-summary', {
      opacity: 0, y: 18, duration: 0.7, ease: ease.out,
      scrollTrigger: { trigger: '.footer-mid', start: 'top 90%', once: true }
    })
    gsap.from('.footer-wordmark', {
      opacity: 0, scale: 0.55, filter: 'blur(24px)', duration: 1.3,
      ease: ease.out, clearProps: 'filter',
      scrollTrigger: { trigger: '.footer-wordmark-wrap', start: 'top 88%', once: true }
    })
  }, footerRef.value)
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.footer {
  background: var(--dark);
  color: var(--white);
  overflow: hidden;
}

.footer-top {
  padding: 64px 0 40px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.footer-top-inner {
  display: flex;
  justify-content: space-between;
  gap: 48px;
  align-items: flex-start;
}

.footer-tagline {
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 600;
  letter-spacing: -0.8px;
  line-height: 1.25;
  flex-shrink: 0;
}

.tagline-muted {
  color: rgba(255,255,255,0.45);
}

.footer-info {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 130px;
}

.footer-col-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: rgba(255,255,255,0.35);
  text-transform: uppercase;
}

.footer-col p {
  font-size: 13px;
  line-height: 1.6;
  color: rgba(255,255,255,0.7);
}

.footer-fax {
  color: rgba(255,255,255,0.4) !important;
  font-size: 11px !important;
}

.footer-mid {
  padding: 24px 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.footer-summary {
  font-size: 12px;
  color: rgba(255,255,255,0.35);
  max-width: 480px;
  line-height: 1.6;
}

.footer-wordmark-wrap {
  position: relative;
  padding: 40px 0 0;
}

.footer-wordmark-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -20px;
  position: relative;
  z-index: 1;
}

.footer-copyright {
  font-size: 22px;
  font-weight: 700;
  color: rgba(255,255,255,0.5);
  letter-spacing: -0.5px;
}

.see-projects-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--accent);
  color: var(--on-accent);
  font-size: 13px;
  font-weight: 600;
  border-radius: 100px;
  transition: background 0.2s;
}

.see-projects-btn:hover {
  background: var(--accent-hover);
}

.footer-wordmark {
  font-size: clamp(100px, 18vw, 220px);
  font-weight: 700;
  letter-spacing: -4px;
  color: rgba(255,255,255,0.9);
  line-height: 0.85;
  padding: 0 24px;
  text-align: center;
  margin-top: -10px;
  will-change: transform, opacity, filter;
}

.footer-bottom {
  padding: 20px 0;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.footer-bottom span {
  font-size: 11px;
  color: rgba(255,255,255,0.3);
}

.footer-nav {
  display: flex;
  gap: 24px;
}

.footer-nav a {
  font-size: 11px;
  color: rgba(255,255,255,0.4);
  transition: color 0.2s;
}

.footer-nav a:hover {
  color: rgba(255,255,255,0.8);
}

@media (max-width: 900px) {
  .footer-top-inner {
    flex-direction: column;
  }

  .footer-info {
    gap: 24px;
  }
}

@media (max-width: 640px) {
  .footer-wordmark {
    font-size: clamp(80px, 22vw, 120px);
  }

  .footer-bottom-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
