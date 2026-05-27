<template>
  <section class="expertise-sec">
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
            <div class="toggle-row">
              <div class="toggle-switch on">
                <div class="toggle-thumb"></div>
              </div>
              <span class="toggle-label">
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
            <line x1="140" y1="20" x2="100" y2="300" stroke="#CCCCCC" stroke-width="1.5"/>
            <line x1="140" y1="20" x2="180" y2="300" stroke="#CCCCCC" stroke-width="1.5"/>
            <line x1="110" y1="80" x2="170" y2="80" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="108" y1="120" x2="172" y2="120" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="106" y1="160" x2="174" y2="160" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="104" y1="200" x2="176" y2="200" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="102" y1="240" x2="178" y2="240" stroke="#CCCCCC" stroke-width="1"/>
            <line x1="110" y1="80" x2="140" y2="120" stroke="#DDDDDD" stroke-width="0.8"/>
            <line x1="170" y1="80" x2="140" y2="120" stroke="#DDDDDD" stroke-width="0.8"/>
            <line x1="108" y1="120" x2="140" y2="160" stroke="#DDDDDD" stroke-width="0.8"/>
            <line x1="172" y1="120" x2="140" y2="160" stroke="#DDDDDD" stroke-width="0.8"/>
            <line x1="106" y1="160" x2="140" y2="200" stroke="#DDDDDD" stroke-width="0.8"/>
            <line x1="174" y1="160" x2="140" y2="200" stroke="#DDDDDD" stroke-width="0.8"/>
            <rect x="125" y="10" width="30" height="14" rx="3" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
            <rect x="70" y="295" width="140" height="18" rx="4" fill="none" stroke="#AAAAAA" stroke-width="1.5"/>
            <line x1="70" y1="295" x2="50" y2="320" stroke="#AAAAAA" stroke-width="1.2"/>
            <line x1="210" y1="295" x2="230" y2="320" stroke="#AAAAAA" stroke-width="1.2"/>
            <line x1="50" y1="320" x2="230" y2="320" stroke="#AAAAAA" stroke-width="1.5"/>
            <line x1="80" y1="313" x2="75" y2="380" stroke="#BBBBBB" stroke-width="2"/>
            <line x1="140" y1="313" x2="140" y2="380" stroke="#BBBBBB" stroke-width="2"/>
            <line x1="200" y1="313" x2="205" y2="380" stroke="#BBBBBB" stroke-width="2"/>
            <line x1="140" y1="305" x2="140" y2="415" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6,4"/>
            <line x1="230" y1="80" x2="240" y2="80" stroke="#AAAAAA" stroke-width="0.8"/>
            <line x1="230" y1="160" x2="240" y2="160" stroke="#AAAAAA" stroke-width="0.8"/>
            <line x1="235" y1="80" x2="235" y2="160" stroke="#AAAAAA" stroke-width="0.8"/>
            <text x="244" y="124" font-size="9" fill="#999999" font-family="Space Grotesk, sans-serif">EP Stage</text>
            <line x1="230" y1="160" x2="240" y2="160" stroke="#AAAAAA" stroke-width="0.8"/>
            <line x1="230" y1="300" x2="240" y2="300" stroke="#AAAAAA" stroke-width="0.8"/>
            <line x1="235" y1="160" x2="235" y2="300" stroke="#AAAAAA" stroke-width="0.8"/>
            <text x="244" y="235" font-size="9" fill="#999999" font-family="Space Grotesk, sans-serif">DD Stage</text>
            <circle cx="140" cy="80" r="5" fill="var(--accent)" opacity="0.9"/>
            <circle cx="140" cy="160" r="5" fill="var(--accent)" opacity="0.9"/>
            <circle cx="140" cy="240" r="5" fill="var(--accent)" opacity="0.9"/>
          </svg>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'
const { t } = useLanguage()
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
  align-items: start;
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
  background: var(--gray-100);
  border-radius: 16px;
  padding: 24px;
}

.toggle-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;
}

.toggle-switch {
  flex-shrink: 0;
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background: var(--accent);
  position: relative;
}

.toggle-thumb {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--on-accent);
}

.toggle-label {
  font-size: 11px;
  line-height: 1.5;
  color: var(--gray-500);
}

.years-value {
  font-size: 80px;
  font-weight: 700;
  letter-spacing: -3px;
  color: var(--dark);
  line-height: 1;
}

.years-value span {
  font-size: 48px;
  letter-spacing: -2px;
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
  background: var(--white);
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
  align-items: center;
  justify-content: center;
}

.rig-diagram {
  width: 100%;
  max-width: 280px;
  height: auto;
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
