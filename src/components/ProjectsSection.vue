<template>
  <section class="projects-sec" ref="sectionRef">
    <div class="container">
      <div class="projects-grid">

        <!-- Left column -->
        <div class="projects-left">
          <span class="section-badge lime-badge">
            {{ t('Our Portfolio', 'Наш портфолио', 'Біздің портфолио') }}
          </span>
          <h2 class="projects-title">
            {{ t('Built to perform,', 'Создано с точностью,', 'Дәлдікпен жасалған,') }}<br />
            <em>{{ t('proven to last', 'проверено временем', 'уақытпен дәлелденген') }}</em>
          </h2>
          <p class="projects-desc">
            {{ t(
              'From offshore Caspian platforms to onshore gas processing facilities, CE&R delivers complex engineering projects across Kazakhstan — combining deep design expertise with proven regulatory compliance.',
              'От морских каспийских платформ до береговых газоперерабатывающих объектов, CE&R реализует сложные инженерные проекты по всему Казахстану, сочетая глубокую проектную экспертизу с соблюдением нормативных требований.',
              'Каспийдің теңіздегі платформаларынан жағалаудағы газ өңдеу нысандарына дейін, CE&R Қазақстан бойынша күрделі инженерлік жобаларды іске асырады.'
            ) }}
          </p>

          <div class="project-images">
            <div class="project-img-tag">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" fill="var(--accent)"/>
              </svg>
              {{ t('Kashagan Field – Caspian Sea', 'Месторождение Кашаган – Каспийское море', 'Қашаған кен орны – Каспий теңізі') }}
            </div>
            <div class="project-img-row">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80"
                alt="Offshore platform"
                class="project-thumb"
              />
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&q=80"
                alt="Gas processing facility"
                class="project-thumb"
              />
            </div>
          </div>
        </div>

        <!-- Right column: project cards -->
        <div class="projects-right">
          <!-- Featured dark card: Kashagan -->
          <div class="project-card project-featured">
            <div class="project-card-header">
              <div>
                <h3 class="project-card-title">
                  {{ t('Kashagan Field', 'Месторождение Кашаган', 'Қашаған кен орны') }}<br />
                  {{ t('EP Development', 'Разработка ЕП', 'ЕП Игеру') }}
                </h3>
              </div>
              <RouterLink to="/portfolio" class="see-project-btn">
                {{ t('View Project', 'Смотреть', 'Қарау') }}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </RouterLink>
            </div>
            <div class="project-stats-row">
              <div class="project-stat">
                <div>
                  <div class="pstat-label">{{ t('Client', 'Заказчик', 'Тапсырыс беруші') }}</div>
                  <div class="pstat-value">NCOC N.V.</div>
                </div>
              </div>
              <div class="project-stat">
                <div>
                  <div class="pstat-label">{{ t('Location', 'Локация', 'Орналасуы') }}</div>
                  <div class="pstat-value">{{ t('Caspian Sea', 'Каспийское море', 'Каспий теңізі') }}</div>
                </div>
              </div>
              <div class="project-stat">
                <div>
                  <div class="pstat-label">{{ t('Duration', 'Период', 'Мерзімі') }}</div>
                  <div class="pstat-value">2005 – 2018</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Light project rows -->
          <div class="project-row-card">
            <span class="project-row-title">
              {{ t('Tengiz Field – TCO (FGP/WPMP)', 'Месторождение Тенгиз – ТШО (FGP/WPMP)', 'Теңіз кен орны – ТШО (FGP/WPMP)') }}
            </span>
            <RouterLink to="/portfolio" class="view-project-link">
              {{ t('View', 'Смотреть', 'Қарау') }}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </RouterLink>
          </div>

          <div class="project-row-card">
            <span class="project-row-title">
              {{ t('CPC Pipeline Expansion', 'Расширение трубопровода КТК', 'КТК Құбырын кеңейту') }}
            </span>
            <RouterLink to="/portfolio" class="view-project-link">
              {{ t('View', 'Смотреть', 'Қарау') }}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </RouterLink>
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
    // Left column sequence
    gsap.from('.projects-left .lime-badge', {
      opacity: 0, scale: 0.85, duration: 0.55, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })
    gsap.from('.projects-title', {
      opacity: 0, y: 40, filter: 'blur(10px)', duration: 0.95, delay: 0.1,
      ease: ease.out, clearProps: 'filter',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })
    gsap.from('.projects-desc', {
      opacity: 0, y: 22, duration: 0.7, delay: 0.25, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })
    gsap.from('.project-thumb', {
      opacity: 0, scale: 0.82, y: 24, duration: 0.8, stagger: 0.1, delay: 0.38,
      ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })

    // Right column
    gsap.from('.project-featured', {
      opacity: 0, y: 52, scale: 0.94, duration: 0.95, ease: ease.out,
      scrollTrigger: { trigger: '.projects-right', start: 'top 84%', once: true }
    })
    gsap.from('.project-row-card', {
      opacity: 0, y: 30, duration: 0.7, stagger: 0.1, delay: 0.15, ease: ease.out,
      scrollTrigger: { trigger: '.projects-right', start: 'top 84%', once: true }
    })
  }, sectionRef.value)
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.projects-sec {
  padding: 100px 0;
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
  margin-bottom: 24px;
}

.lime-badge {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--on-accent);
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.projects-left {
  display: flex;
  flex-direction: column;
}

.projects-title {
  font-size: clamp(32px, 4.5vw, 52px);
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.1;
  color: var(--dark);
  margin-bottom: 20px;
}

.projects-title em {
  font-style: normal;
  color: var(--gray-500);
}

.projects-desc {
  font-size: 13px;
  line-height: 1.7;
  color: var(--gray-500);
  margin-bottom: 32px;
}

.project-img-tag {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 500;
  color: var(--gray-500);
  margin-bottom: 12px;
}

.project-img-row {
  display: flex;
  gap: 12px;
}

.project-thumb {
  width: 140px;
  height: 90px;
  object-fit: cover;
  border-radius: 12px;
}

.projects-right {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-card {
  border-radius: 20px;
  overflow: hidden;
}

.project-featured {
  background: var(--dark);
  padding: 28px;
}

.project-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;
}

.project-card-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--white);
  line-height: 1.2;
}

.see-project-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--accent);
  color: var(--on-accent);
  font-size: 12px;
  font-weight: 600;
  border-radius: 100px;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.2s;
}

.see-project-btn:hover {
  background: var(--accent-hover);
}

.project-stats-row {
  display: flex;
  gap: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 20px;
  flex-wrap: wrap;
}

.project-stat {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.pstat-label {
  font-size: 10px;
  color: rgba(255,255,255,0.45);
  margin-bottom: 3px;
  letter-spacing: 0.3px;
}

.pstat-value {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
}

.project-row-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border: 1.5px solid var(--gray-200);
  border-radius: 14px;
  background: var(--white);
  gap: 16px;
  transition: border-color 0.2s, background 0.2s;
}

.project-row-card:hover {
  border-color: var(--gray-300);
  background: var(--gray-100);
}

.project-row-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--dark);
}

.view-project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-500);
  flex-shrink: 0;
  transition: color 0.2s;
}

.view-project-link:hover {
  color: var(--dark);
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
