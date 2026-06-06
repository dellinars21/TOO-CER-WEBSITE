<template>
  <section class="expertise-sec" ref="sectionRef">
    <div class="container">
      <div class="expertise-header">
        <span class="section-badge lime-badge">
          {{ t('Our Capabilities', 'Наши компетенции', 'Біздің мүмкіндіктеріміз') }}
        </span>
        <h2 class="expertise-title">
          {{ t(
            'Full-Spectrum Engineering & Design',
            'Комплексный инжиниринг и проектирование',
            'Кешенді инжиниринг және жобалау'
          ) }}
        </h2>
        <p class="expertise-sub">
          {{ t(
            'Accumulated experience, continuous qualification improvement, and the use of the latest technologies and software allow CE&R to develop high-quality projects at all design stages.',
            'Наработанный опыт, постоянное совершенствование квалификации и применение современных технологий позволяют CE&R разрабатывать высококачественные проекты всех стадий проектирования.',
            'Жинақталған тәжірибе, біліктілікті үздіксіз жетілдіру және қазіргі заманғы технологияларды қолдану CE&R-ге жобалаудың барлық сатыларында жоғары сапалы жобалар әзірлеуге мүмкіндік береді.'
          ) }}
        </p>
      </div>

      <div class="expertise-grid">

        <!-- Left: feature cards -->
        <div class="expertise-features">
          <div class="feature-card active">
            <div class="feature-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
                <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
                <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
                <path d="M11 14.5H17M14 11.5V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div class="feature-title">{{ t('Engineering Design', 'Проектирование', 'Жобалау') }}</div>
              <div class="feature-name-badge">{{ t('Project & Detailed Design', 'Проектная и рабочая документация', 'Жобалық және жұмыс құжаттамасы') }}</div>
              <p class="feature-desc">
                {{ t(
                  'Full design cycle from feasibility study and conceptual projects to detailed design documentation for oil, gas, and pipeline facilities.',
                  'Полный цикл проектирования: от технико-экономического обоснования до рабочей документации нефте-, газовых и трубопроводных объектов.',
                  'ТЭН-нен рабочая құжаттамаға дейін мұнай, газ және құбыр желісі объектілерінің толық жобалау циклы.'
                ) }}
              </p>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C10 2 4 5 4 10.5C4 14.09 6.69 17 10 17C13.31 17 16 14.09 16 10.5C16 5 10 2 10 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M7 13C7.83 14.2 8.85 15 10 15C11.15 15 12.17 14.2 13 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div class="feature-title">{{ t('Environmental', 'Экология', 'Экология') }}</div>
              <div class="feature-name-badge">{{ t('Project Environmental Support', 'Экологическое сопровождение', 'Экологиялық сүйемелдеу') }}</div>
              <p class="feature-desc">
                {{ t(
                  'Development and approval of Pre-EIA, EIA, and environmental protection sections, including public hearings and regulatory approval.',
                  'Разработка и согласование разделов ПредОВОС, ОВОС и РООС, включая проведение общественных слушаний.',
                  'Алдын ала ҚОӘБ, ҚОӘБ және ҚОҚ бөлімдерін әзірлеу және келісу, қоғамдық тыңдаулар өткізуді қоса алғанда.'
                ) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Center column -->
        <div class="expertise-center">
          <div class="years-card">
            <div class="cert-row">
              <div class="cert-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="8" r="5" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M7 13.5L6 18L10 16L14 18L13 13.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                  <path d="M8.5 8L9.5 9L11.5 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="cert-label">
                {{ t(
                  'Certified to ISO 9001:2015 · ISO 14001:2015 · OHSAS 18001:2008',
                  'Сертифицированы по ISO 9001:2015 · ISO 14001:2015 · OHSAS 18001:2008',
                  'ISO 9001:2015 · ISO 14001:2015 · OHSAS 18001:2008 бойынша сертификатталған'
                ) }}
              </span>
            </div>
            <div class="years-value">
              20<span>+</span>
            </div>
            <div class="years-label">{{ t('Years', 'Лет', 'Жыл') }}</div>
          </div>

          <div class="supervision-card">
            <div class="supervision-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2L4 5.5V11C4 14.87 7.13 18.5 11 20C14.87 18.5 18 14.87 18 11V5.5L11 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M8 11L10 13L14 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <div class="supervision-title">{{ t('Author Supervision', 'Авторский надзор', 'Авторлық қадағалау') }}</div>
              <p class="supervision-desc">
                {{ t(
                  'Compliance monitoring of construction against approved design documentation, with rapid design change management and as-built documentation.',
                  'Контроль соответствия СМР проектной документации, оперативное внесение изменений и оформление исполнительной документации.',
                  'Жобалық құжаттамаға ҚМЖ сәйкестігін бақылау, жедел өзгерістер енгізу және атқарушы құжаттаманы рәсімдеу.'
                ) }}
              </p>
            </div>
          </div>

          <RouterLink to="/services" class="expertise-cta">
            {{ t('View All Services', 'Все услуги', 'Барлық қызметтер') }}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </RouterLink>
        </div>

        <!-- Right: technical diagram -->
        <div class="expertise-diagram">
          <svg viewBox="0 0 280 420" fill="none" xmlns="http://www.w3.org/2000/svg" class="rig-diagram">

            <!-- Ground line -->
            <line x1="20" y1="340" x2="260" y2="340" stroke="#BBBBBB" stroke-width="1.5"/>
            <!-- Ground hatch -->
            <line x1="30" y1="340" x2="20" y2="354" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="50" y1="340" x2="40" y2="354" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="70" y1="340" x2="60" y2="354" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="90" y1="340" x2="80" y2="354" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="110" y1="340" x2="100" y2="354" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="130" y1="340" x2="120" y2="354" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="150" y1="340" x2="140" y2="354" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="170" y1="340" x2="160" y2="354" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="190" y1="340" x2="180" y2="354" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="210" y1="340" x2="200" y2="354" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="230" y1="340" x2="220" y2="354" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="250" y1="340" x2="240" y2="354" stroke="#CCCCCC" stroke-width="1"/>

            <!-- Base / skid frame -->
            <rect x="60" y="310" width="160" height="30" rx="3" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
            <line x1="100" y1="310" x2="100" y2="340" stroke="#BBBBBB" stroke-width="1"/>
            <line x1="140" y1="310" x2="140" y2="340" stroke="#BBBBBB" stroke-width="1"/>
            <line x1="180" y1="310" x2="180" y2="340" stroke="#BBBBBB" stroke-width="1"/>

            <!-- Samson post (vertical tower) -->
            <rect x="118" y="170" width="10" height="140" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
            <rect x="132" y="170" width="10" height="140" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
            <!-- Cross braces on samson post -->
            <line x1="118" y1="200" x2="142" y2="230" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="142" y1="200" x2="118" y2="230" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="118" y1="240" x2="142" y2="270" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="142" y1="240" x2="118" y2="270" stroke="#CCCCCC" stroke-width="1"/>

            <!-- Sampson post cap / pivot bearing -->
            <rect x="112" y="162" width="36" height="12" rx="3" fill="none" stroke="#999999" stroke-width="1.5"/>
            <!-- Pivot pin -->
            <circle cx="130" cy="168" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>

            <!-- Walking beam (angled — front end up, tail end down) -->
            <!-- Beam runs from ~x=50,y=148 (front/horse-head end) to x=210,y=188 (tail end) -->
            <line x1="50" y1="148" x2="210" y2="188" stroke="#888888" stroke-width="4" stroke-linecap="round"/>
            <!-- Beam thickness (parallel line) -->
            <line x1="50" y1="153" x2="210" y2="193" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round"/>

            <!-- Horse head (curved front of beam) -->
            <path d="M50,148 Q34,140 30,158 Q28,172 44,176" stroke="#888888" stroke-width="3" fill="none" stroke-linecap="round"/>
            <circle cx="44" cy="176" r="3" fill="none" stroke="var(--accent)" stroke-width="1.5"/>

            <!-- Polished rod / bridle cable from horse head down -->
            <line x1="44" y1="176" x2="44" y2="310" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="5,3"/>
            <!-- Polished rod stuffing box -->
            <rect x="36" y="298" width="16" height="14" rx="2" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
            <circle cx="44" cy="305" r="3" fill="none" stroke="#999999" stroke-width="1"/>

            <!-- Counterweight crank arm (tail side) -->
            <!-- Crank arm from pivot down-right to crank pin -->
            <line x1="130" y1="168" x2="210" y2="260" stroke="#888888" stroke-width="3" stroke-linecap="round"/>
            <!-- Counterweight box on crank arm -->
            <rect x="192" y="248" width="32" height="20" rx="4" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
            <!-- Crank pin circle -->
            <circle cx="210" cy="258" r="5" fill="none" stroke="#999999" stroke-width="1.5"/>

            <!-- Pitman arm (connects crank pin to tail of beam) -->
            <line x1="210" y1="258" x2="210" y2="193" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round"/>

            <!-- Prime mover / motor box -->
            <rect x="165" y="278" width="50" height="32" rx="4" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
            <line x1="175" y1="278" x2="175" y2="310" stroke="#BBBBBB" stroke-width="1"/>
            <line x1="185" y1="278" x2="185" y2="310" stroke="#BBBBBB" stroke-width="1"/>
            <text x="172" y="297" font-size="8" fill="#999999" font-family="Space Grotesk, sans-serif">MOTOR</text>

            <!-- Belt drive from motor to crank -->
            <line x1="190" y1="278" x2="210" y2="260" stroke="#CCCCCC" stroke-width="1" stroke-dasharray="3,2"/>

            <!-- Annotation: Walking Beam -->
            <line x1="120" y1="162" x2="86" y2="130" stroke="#CCCCCC" stroke-width="0.8"/>
            <circle cx="86" cy="130" r="2" fill="#CCCCCC"/>
            <text x="10" y="128" font-size="8" fill="#999999" font-family="Space Grotesk, sans-serif">Walking Beam</text>

            <!-- Annotation: Horse Head -->
            <line x1="36" y1="158" x2="8" y2="148" stroke="#CCCCCC" stroke-width="0.8"/>
            <circle cx="8" cy="148" r="2" fill="#CCCCCC"/>
            <text x="10" y="144" font-size="8" fill="#999999" font-family="Space Grotesk, sans-serif">Horse Head</text>

            <!-- Annotation: Polished Rod -->
            <line x1="58" y1="240" x2="72" y2="240" stroke="#CCCCCC" stroke-width="0.8"/>
            <text x="74" y="243" font-size="8" fill="#999999" font-family="Space Grotesk, sans-serif">Polished Rod</text>

            <!-- Annotation: Counterweight -->
            <line x1="224" y1="258" x2="248" y2="248" stroke="#CCCCCC" stroke-width="0.8"/>
            <circle cx="248" cy="248" r="2" fill="#CCCCCC"/>
            <text x="244" y="244" font-size="8" fill="#999999" font-family="Space Grotesk, sans-serif">Crank &amp;</text>
            <text x="244" y="254" font-size="8" fill="#999999" font-family="Space Grotesk, sans-serif">Counterweight</text>

            <!-- Stage bracket left -->
            <line x1="20" y1="170" x2="10" y2="170" stroke="#AAAAAA" stroke-width="0.8"/>
            <line x1="20" y1="310" x2="10" y2="310" stroke="#AAAAAA" stroke-width="0.8"/>
            <line x1="15" y1="170" x2="15" y2="310" stroke="#AAAAAA" stroke-width="0.8"/>
            <text x="2" y="246" font-size="8" fill="#999999" font-family="Space Grotesk, sans-serif" transform="rotate(-90,8,246)">Surface Unit</text>

            <!-- Accent dots at key pivot points -->
            <circle cx="130" cy="168" r="4" fill="var(--accent)" opacity="0.85"/>
            <circle cx="44" cy="176" r="3.5" fill="var(--accent)" opacity="0.85"/>
            <circle cx="210" cy="258" r="3.5" fill="var(--accent)" opacity="0.85"/>
          </svg>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { gsap, ease } from '../composables/useScrollAnimation.js'

const { t } = useLanguage()
const sectionRef = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    // Header sequence
    gsap.from('.expertise-header .lime-badge', {
      opacity: 0, scale: 0.85, duration: 0.55, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })
    gsap.from('.expertise-title', {
      opacity: 0, y: 34, filter: 'blur(10px)', duration: 0.9, delay: 0.1,
      ease: ease.out, clearProps: 'filter',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })
    gsap.from('.expertise-sub', {
      opacity: 0, y: 20, duration: 0.7, delay: 0.22, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })

    // Feature cards slide in from left
    gsap.from('.feature-card', {
      opacity: 0, x: -36, duration: 0.75, stagger: 0.14, ease: ease.out,
      scrollTrigger: { trigger: '.expertise-features', start: 'top 85%', once: true }
    })

    // Center cards stagger up
    gsap.from(['.years-card', '.supervision-card', '.expertise-cta'], {
      opacity: 0, y: 32, scale: 0.96, duration: 0.75, stagger: 0.12, ease: ease.out,
      scrollTrigger: { trigger: '.expertise-center', start: 'top 85%', once: true }
    })

    // Diagram fade + slide
    gsap.from('.rig-diagram', {
      opacity: 0, scale: 0.88, y: 44, duration: 1.1, ease: ease.out,
      scrollTrigger: { trigger: '.expertise-diagram', start: 'top 85%', once: true }
    })
  }, sectionRef.value)
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.expertise-sec {
  padding: 100px 0;
}

.expertise-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: start;
  gap: 40px;
  margin-bottom: 60px;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border: 1.5px solid var(--gray-300);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-700);
  white-space: nowrap;
  height: fit-content;
}

.lime-badge {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--on-accent);
}

.expertise-title {
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.1;
  color: var(--dark);
}

.expertise-sub {
  font-size: 13px;
  line-height: 1.7;
  color: var(--gray-500);
  max-width: 280px;
  padding-top: 8px;
}

.expertise-grid {
  display: grid;
  grid-template-columns: 1.1fr 1.1fr 0.8fr;
  gap: 20px;
  align-items: stretch;
}

.expertise-features {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  border-radius: 16px;
  border: 1.5px solid var(--gray-200);
  background: var(--white);
  transition: border-color 0.2s;
}

.feature-card.active {
  background: var(--gray-100);
  border-color: var(--gray-300);
}

.feature-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--on-accent);
}

.feature-title {
  font-size: 11px;
  font-weight: 500;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 4px;
}

.feature-name-badge {
  font-size: 13px;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 8px;
}

.feature-desc {
  font-size: 12px;
  line-height: 1.6;
  color: var(--gray-500);
}

/* Center */
.expertise-center {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.years-card {
  background: #ffffff;
  border-radius: 16px;
  border: 1.5px solid #dfdede;
  padding: 20px;
}

.cert-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.cert-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--on-accent);
}

.cert-label {
  font-size: 11px;
  line-height: 1.5;
  color: var(--gray-500);
  padding-top: 2px;
}

.years-value {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -2px;
  color: var(--dark);
  line-height: 1;
}

.years-value span {
  font-size: 32px;
  letter-spacing: -1px;
}

.years-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-500);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.supervision-card {
  display: flex;
  gap: 14px;
  padding: 20px;
  border-radius: 16px;
  border: 1.5px solid var(--gray-200);
  background: var(--gray-100);
  align-items: flex-start;
}

.supervision-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--on-accent);
}

.supervision-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 6px;
}

.supervision-desc {
  font-size: 12px;
  line-height: 1.6;
  color: var(--gray-500);
}

.expertise-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  background: var(--dark);
  color: var(--white);
  font-size: 13px;
  font-weight: 600;
  border-radius: 100px;
  width: fit-content;
  transition: background 0.2s;
}

.expertise-cta:hover {
  background: #333;
}

.expertise-diagram {
  display: flex;
  align-items: stretch;
  justify-content: center;
  align-self: stretch;
}

.rig-diagram {
  width: 100%;
  max-width: 100%;
  height: 100%;
}

@media (max-width: 1024px) {
  .expertise-header {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
  }

  .expertise-sub {
    grid-column: 1 / -1;
    max-width: 100%;
  }

  .expertise-grid {
    grid-template-columns: 1fr 1fr;
  }

  .expertise-diagram {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .expertise-header {
    grid-template-columns: 1fr;
  }

  .expertise-grid {
    grid-template-columns: 1fr;
  }
}
</style>
