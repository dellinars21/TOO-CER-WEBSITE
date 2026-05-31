<template>
  <section class="trust-sec" ref="sectionRef">
    <div class="container trust-inner">

      <!-- Left: headline + description -->
      <div class="trust-left">
        <span class="section-badge">
          {{ t('Trusted Across the Industry', 'Доверие отрасли', 'Саланың сенімі') }}
        </span>
        <h2 class="trust-title">
          {{ t('Two decades of relationships,', 'Два десятилетия партнёрства,', 'Екі онжылдық серіктестік,') }}<br />
          <em>{{ t('built on results', 'выстроенных на результатах', 'нәтижелерге негізделген') }}</em>
        </h2>
        <p class="trust-desc">
          {{ t(
            'CE&R has accumulated one of the most comprehensive engineering documentation libraries in Kazakhstan\'s oil and gas sector — spanning 20+ years of project records, regulatory filings, and technical references across every major producing basin.',
            'CE&R накопила одну из наиболее полных библиотек инженерной документации в нефтегазовом секторе Казахстана — более 20 лет проектных записей, регуляторных документов и технических справочников по всем крупным добывающим бассейнам.',
            'CE&R Қазақстанның мұнай-газ секторында ең толық инженерлік құжаттама кітапханаларының бірін жинақтады — 20+ жыл ішінде барлық ірі өндіруші бассейндер бойынша жобалық жазбалар, нормативтік құжаттар және техникалық анықтамалар.'
          ) }}
        </p>
        <RouterLink to="/portfolio" class="trust-cta">
          {{ t('Explore Our Portfolio', 'Смотреть портфолио', 'Портфолионы көру') }}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </RouterLink>
      </div>

      <!-- Right: stat cards -->
      <div class="trust-right">
        <div class="trust-stat-card trust-stat-accent">
          <div class="tstat-value">40+</div>
          <div class="tstat-label">
            {{ t('Major Projects Documented', 'Крупных задокументированных проектов', 'Ірі құжатталған жобалар') }}
          </div>
          <div class="tstat-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="6" y="4" width="20" height="24" rx="3" stroke="currentColor" stroke-width="1.5"/>
              <line x1="10" y1="11" x2="22" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="10" y1="15" x2="22" y2="15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="10" y1="19" x2="17" y2="19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
        </div>

        <div class="trust-stat-card">
          <div class="tstat-value">24<span>+</span></div>
          <div class="tstat-label">
            {{ t('Active Client Relationships', 'Действующих клиентских отношений', 'Белсенді клиент байланыстары') }}
          </div>
          <div class="tstat-sub">
            {{ t('incl. TCO, NCOC, KMG', 'вкл. ТШО, NCOC, КМГ', 'ТШО, NCOC, КМГ қоса') }}
          </div>
        </div>

        <div class="trust-stat-card">
          <div class="tstat-value">100<span>%</span></div>
          <div class="tstat-label">
            {{ t('Regulatory Compliance Rate', 'Соответствие нормативным требованиям', 'Нормативтік талаптарға сәйкестік') }}
          </div>
          <div class="tstat-sub">
            {{ t('RK standards, ISO 9001:2015', 'Нормы РК, ISO 9001:2015', 'ҚР нормалары, ISO 9001:2015') }}
          </div>
        </div>

        <div class="trust-stat-card trust-stat-dark">
          <div class="tstat-value">12</div>
          <div class="tstat-label">
            {{ t('Major Oil & Gas Fields Served', 'Крупных обслуженных месторождений', 'Қызмет көрсетілген ірі кен орындары') }}
          </div>
          <div class="tstat-field-list">
            <span>Tengiz</span>
            <span>Kashagan</span>
            <span>Karachaganak</span>
            <span>+9 {{ t('more', 'ещё', 'тағы') }}</span>
          </div>
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
    gsap.from('.section-badge', {
      opacity: 0, x: -20, duration: 0.6, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 84%', once: true }
    })
    gsap.from('.trust-title', {
      opacity: 0, y: 32, filter: 'blur(8px)', duration: 0.9, delay: 0.1,
      ease: ease.out, clearProps: 'filter',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 84%', once: true }
    })
    gsap.from(['.trust-desc', '.trust-cta'], {
      opacity: 0, y: 20, duration: 0.7, stagger: 0.1, delay: 0.22, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 84%', once: true }
    })
    gsap.from('.trust-stat-card', {
      opacity: 0, y: 44, scale: 0.94, duration: 0.8, stagger: 0.1, delay: 0.08,
      ease: ease.out,
      scrollTrigger: { trigger: '.trust-right', start: 'top 86%', once: true }
    })
  }, sectionRef.value)
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.trust-sec {
  padding: 96px 0 100px;
  background: var(--gray-50, #fafafa);
  border-bottom: 1px solid var(--gray-200);
}

.trust-inner {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 72px;
  align-items: start;
}

/* ── Left ───────────────────────────────────────────────────────── */
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
  margin-bottom: 24px;
}

.trust-title {
  font-size: clamp(26px, 3.5vw, 40px);
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.15;
  color: var(--dark);
  margin-bottom: 20px;
}

.trust-title em {
  font-style: normal;
  color: var(--gray-500);
}

.trust-desc {
  font-size: 13px;
  line-height: 1.75;
  color: var(--gray-500);
  max-width: 420px;
  margin-bottom: 32px;
}

.trust-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  background: var(--dark);
  color: var(--white);
  font-size: 13px;
  font-weight: 600;
  border-radius: 100px;
  transition: background 0.2s;
}

.trust-cta:hover {
  background: #333;
}

/* ── Right: stat cards ──────────────────────────────────────────── */
.trust-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.trust-stat-card {
  border-radius: 20px;
  padding: 28px 24px;
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.trust-stat-accent {
  background: var(--accent);
  border-color: var(--accent);
  position: relative;
  overflow: hidden;
}

.trust-stat-dark {
  background: var(--dark);
  border-color: var(--dark);
}

.tstat-value {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1;
  color: var(--dark);
}

.tstat-value span {
  font-size: 32px;
  letter-spacing: -1px;
}

.trust-stat-accent .tstat-value {
  color: var(--on-accent);
}

.trust-stat-dark .tstat-value {
  color: var(--white);
}

.tstat-label {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.45;
  color: var(--gray-600, #444);
}

.trust-stat-accent .tstat-label {
  color: color-mix(in srgb, var(--on-accent) 75%, transparent);
}

.trust-stat-dark .tstat-label {
  color: rgba(255,255,255,0.65);
}

.tstat-sub {
  font-size: 11px;
  color: var(--gray-400, #aaa);
  margin-top: 2px;
}

.trust-stat-accent .tstat-sub {
  color: color-mix(in srgb, var(--on-accent) 50%, transparent);
}

.tstat-icon {
  position: absolute;
  bottom: 16px;
  right: 16px;
  opacity: 0.2;
  color: var(--on-accent);
}

.tstat-field-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
}

.tstat-field-list span {
  display: inline-flex;
  padding: 3px 9px;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 100px;
  font-size: 10px;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .trust-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 640px) {
  .trust-right {
    grid-template-columns: 1fr;
  }
}
</style>
