<template>
  <footer class="footer" ref="footerRef">
    <div class="footer-grid">
      <!-- LEFT COLUMN: Nav links -->
      <div class="footer-left">
        <div class="footer-eyebrow">{{ t('CASPIAN ENGINEERING & RESEARCH', 'CASPIAN ENGINEERING & RESEARCH', 'CASPIAN ENGINEERING & RESEARCH') }}</div>

        <nav class="footer-nav-list">
          <RouterLink to="/services" class="footer-nav-row">
            <span class="nav-title">{{ t('Services', 'Услуги', 'Қызметтер') }}</span>
            <span class="nav-meta">{{ t('Engineering & documentation', 'Инжиниринг и документация', 'Инжиниринг және құжаттама') }}</span>
            <svg class="nav-arrow" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 17L17 5M17 5H7M17 5V15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </RouterLink>

          <RouterLink to="/portfolio" class="footer-nav-row">
            <span class="nav-title">{{ t('Portfolio', 'Портфолио', 'Портфолио') }}</span>
            <span class="nav-meta">{{ t('40+ major projects', '40+ крупных проектов', '40+ ірі жоба') }}</span>
            <svg class="nav-arrow" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 17L17 5M17 5H7M17 5V15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </RouterLink>

          <RouterLink to="/about" class="footer-nav-row">
            <span class="nav-title">{{ t('About', 'О компании', 'Компания туралы') }}</span>
            <span class="nav-meta">{{ t('20+ years in Kazakhstan', '20+ лет в Казахстане', 'Қазақстанда 20+ жыл') }}</span>
            <svg class="nav-arrow" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 17L17 5M17 5H7M17 5V15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </RouterLink>

          <RouterLink to="/team" class="footer-nav-row">
            <span class="nav-title">{{ t('Our Team', 'Команда', 'Команда') }}</span>
            <span class="nav-meta">{{ t('Specialists & leadership', 'Специалисты и руководство', 'Мамандар және басшылық') }}</span>
            <svg class="nav-arrow" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 17L17 5M17 5H7M17 5V15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </RouterLink>

          <a href="mailto:General.O@nipicer.kz" class="footer-nav-row">
            <span class="nav-title">{{ t('Contacts', 'Контакты', 'Байланыс') }}</span>
            <span class="nav-meta">{{ t('Get in touch', 'Связаться с нами', 'Бізбен байланысу') }}</span>
            <svg class="nav-arrow" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 17L17 5M17 5H7M17 5V15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </a>
        </nav>

        <div class="footer-copyright">@2026 - All rights reserved.</div>
      </div>

      <!-- RIGHT COLUMN: Contact info -->
      <div class="footer-right">
        <div class="footer-eyebrow">{{ t('CONTACT INFORMATION', 'КОНТАКТНАЯ ИНФОРМАЦИЯ', 'БАЙЛАНЫС АҚПАРАТЫ') }}</div>

        <div class="info-block">
          <div class="info-label">{{ t('LOCATION', 'АДРЕС', 'МЕКЕНЖАЙ') }}</div>
          <p class="info-text">{{ t(
            'Kazakhstan, Mangistau Region',
            'Казахстан, Мангистауская обл.',
            'Қазақстан, Маңғыстау обл.'
          ) }}<br />{{ t(
            'Aktau, Mcrd. 17, Build. 38',
            'г. Актау, 17 мкрн., д. 38',
            'Ақтау қ., 17 ш/а, 38 ғимарат'
          ) }}</p>
        </div>

        <div class="info-block">
          <div class="info-label">{{ t('CONTACT', 'ТЕЛЕФОН', 'ТЕЛЕФОН') }}</div>
          <p class="info-phone">+7 (7292) 200-501</p>
          <p class="info-email">General.O@nipicer.kz</p>
        </div>

        <div class="info-block">
          <div class="info-label">{{ t('HOURS', 'ЧАСЫ РАБОТЫ', 'ЖҰМЫС УАҚЫТЫ') }}</div>
          <p class="info-text">{{ t('Mon – Fri', 'Пн – Пт', 'Дс – Жм') }}, 09:00 – 18:00</p>
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
    gsap.from('.footer-left .footer-eyebrow, .footer-right .footer-eyebrow', {
      opacity: 0, y: 20, duration: 0.7, ease: ease.out,
      scrollTrigger: { trigger: '.footer', start: 'top 88%', once: true }
    })
    gsap.from('.footer-nav-row', {
      opacity: 0, y: 24, duration: 0.7, stagger: 0.08, delay: 0.1, ease: ease.out,
      scrollTrigger: { trigger: '.footer', start: 'top 88%', once: true }
    })
    gsap.from('.info-block', {
      opacity: 0, y: 20, duration: 0.65, stagger: 0.08, delay: 0.15, ease: ease.out,
      scrollTrigger: { trigger: '.footer', start: 'top 88%', once: true }
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
  padding: 80px 0 56px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: stretch;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
}

.footer-eyebrow {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.8px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  margin-bottom: 56px;
}

/* LEFT COLUMN */
.footer-left {
  display: flex;
  flex-direction: column;
}

.footer-nav-list {
  display: flex;
  flex-direction: column;
}

.footer-nav-row {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 32px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--white);
  transition: padding 0.25s ease;
}

.footer-nav-row:hover {
  padding-left: 8px;
}

.footer-nav-row:hover .nav-arrow {
  transform: translate(3px, -3px);
  color: rgba(255, 255, 255, 0.95);
}

.nav-title {
  font-size: clamp(22px, 2.4vw, 34px);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.5px;
  color: rgba(255, 255, 255, 0.95);
}

.nav-meta {
  font-size: clamp(12px, 0.95vw, 14px);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.2px;
}

.nav-arrow {
  color: rgba(255, 255, 255, 0.4);
  transition: transform 0.25s ease, color 0.25s ease;
}

.footer-copyright {
  margin-top: 56px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.5px;
}

/* RIGHT COLUMN */
.footer-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.info-block {
  margin-bottom: 70px;
}

.info-label {
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.info-text {
  font-size: clamp(18px, 1.6vw, 24px);
  font-weight: 500;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.95);
}

.info-phone {
  font-size: clamp(26px, 2.6vw, 38px);
  font-weight: 700;
  line-height: 1.1;
  color: var(--white);
  margin-bottom: 6px;
  letter-spacing: -0.5px;
}

.info-email {
  font-size: clamp(18px, 1.6vw, 24px);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: -0.2px;
}



@media (max-width: 1024px) {
  .footer-grid {
    gap: 40px;
    padding: 0 40px;
  }

  .nav-title {
    font-size: clamp(18px, 3vw, 28px);
  }
}

@media (max-width: 820px) {
  .footer {
    padding: 56px 0 40px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 0 24px;
  }

  .footer-nav-row {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: 4px 16px;
  }

  .nav-title {
    grid-column: 1;
    grid-row: 1;
    font-size: 24px;
  }

  .nav-meta {
    grid-column: 1;
    grid-row: 2;
    font-size: 12px;
  }

  .nav-arrow {
    grid-column: 2;
    grid-row: 1 / 3;
    align-self: center;
  }

  .info-phone {
    font-size: 18px;
  }
}

</style>
