<template>
  <section class="projects-sec" ref="sectionRef">
    <div class="container">
      <div class="projects-grid">

        <!-- Left column: text -->
        <div class="projects-left">
          <span class="section-badge">
            {{ t('Our Portfolio', 'Наш портфолио', 'Біздің портфолио') }}
          </span>
          <h2 class="projects-title">
            {{ t('Built to perform,', 'Создано с точностью,', 'Дәлдікпен жасалған,') }}<br />
            <em>{{ t('proven to last', 'проверено временем', 'уақытпен дәлелденген') }}</em>
          </h2>
          <p class="projects-desc">
            {{ t(
              'We design for the giants of Kazakhstan. From Tengiz to Kashagan, and Karachaganak to Akshabulak — we’re powering the most iconic fields in the industry.',
              'Мы проектируем для гигантов Казахстана. От Тенгиза до Кашагана, от Карачаганака до Акшабулака — мы обеспечиваем работу самых знаковых месторождений отрасли.',
              'Біз Қазақстанның ірі компанияларына арнап жобалаймыз. Теңізден Қашағанға, Қарашығанақтан Ақшабұлаққа дейін — саланың ең танымал кен орындарының жұмысын қамтамасыз етеміз.'
            ) }}
          </p>
        </div>

        <!-- Middle column: photo + watch all -->
        <div class="projects-middle">
          <div class="project-photo-wrap">
            <transition name="photo-fade" mode="out-in">
              <img
                :key="activeProject.image"
                :src="activeProject.image"
                :alt="activeProject.titleEn"
                class="project-photo"
              />
            </transition>
          </div>
          <RouterLink to="/portfolio" class="watch-all-btn">
            {{ t('Watch all projects', 'Все проекты', 'Барлық жобалар') }}
          </RouterLink>
        </div>

        <!-- Right column: arrows + cards -->
        <div class="projects-right">
          <div class="projects-arrows">
            <button class="arrow-btn" @click="prev" :aria-label="t('Previous', 'Назад', 'Артқа')">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 11V3M7 3L3 7M7 3L11 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="arrow-btn" @click="next" :aria-label="t('Next', 'Вперёд', 'Келесі')">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 3V11M7 11L3 7M7 11L11 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <div class="projects-cards">
            <!-- Featured dark card -->
            <div class="project-card project-featured" :key="activeProject.id">
              <div class="project-card-header">
                <div>
                  <h3 class="project-card-title">
                    {{ t(activeProject.titleEn, activeProject.titleRu, activeProject.titleKz) }}<br />
                    {{ t(activeProject.subEn, activeProject.subRu, activeProject.subKz) }}
                  </h3>
                </div>
                <RouterLink to="/portfolio" class="see-project-btn">
                  {{ t('View', 'Смотреть', 'Қарау') }}
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </RouterLink>
              </div>
              <div class="project-stats-row">
                <div class="project-stat">
                  <div class="pstat-label">{{ t('Client', 'Заказчик', 'Тапсырыс беруші') }}</div>
                  <div class="pstat-value">{{ activeProject.client }}</div>
                </div>
                <div class="project-stat">
                  <div class="pstat-label">{{ t('Location', 'Локация', 'Орналасуы') }}</div>
                  <div class="pstat-value">{{ t(activeProject.locEn, activeProject.locRu, activeProject.locKz) }}</div>
                </div>
                <div class="project-stat">
                  <div class="pstat-label">{{ t('Duration', 'Период', 'Мерзімі') }}</div>
                  <div class="pstat-value">{{ activeProject.duration }}</div>
                </div>
              </div>
            </div>

            <!-- Light rows for inactive projects -->
            <button
              v-for="p in inactiveProjects"
              :key="p.id"
              class="project-row-card"
              @click="setActive(p.id)"
            >
              <span class="project-row-title">
                {{ t(p.titleEn, p.titleRu, p.titleKz) }}
              </span>
              <span class="row-indicator" :class="{ loading: p.id === nextId }">
                <svg v-if="p.id === nextId" class="row-progress" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
                  <circle
                    cx="12" cy="12" r="10" fill="none"
                    stroke="var(--accent)" stroke-width="2"
                    stroke-dasharray="62.83" :stroke-dashoffset="62.83 * (1 - progress)"
                    transform="rotate(-90 12 12)"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { gsap, ease } from '../composables/useScrollAnimation.js'

const { t } = useLanguage()
const sectionRef = ref(null)
let ctx

const projects = [
  {
    id: 'kashagan',
    titleEn: 'Kashagan Field', titleRu: 'Месторождение Кашаган', titleKz: 'Қашаған кен орны',
    subEn: 'EP Development', subRu: 'Разработка ЕП', subKz: 'ЕП Игеру',
    client: 'NCOC N.V.',
    locEn: 'Caspian Sea', locRu: 'Каспийское море', locKz: 'Каспий теңізі',
    duration: '2005 – 2018',
    image: '/images/objects/Месторождение Кашаган.jpg'
  },
  {
    id: 'tengiz',
    titleEn: 'Tengiz Field', titleRu: 'Месторождение Тенгиз', titleKz: 'Теңіз кен орны',
    subEn: 'TCO (FGP/WPMP)', subRu: 'ТШО (FGP/WPMP)', subKz: 'ТШО (FGP/WPMP)',
    client: 'TCO',
    locEn: 'Atyrau Region', locRu: 'Атырауская область', locKz: 'Атырау облысы',
    duration: '2008 – 2025',
    image: '/images/objects/Месторождение Тенгиз.jpg'
  },
  {
    id: 'cpc',
    titleEn: 'CPC Pipeline', titleRu: 'Трубопровод КТК', titleKz: 'КТК Құбыры',
    subEn: 'Expansion Project', subRu: 'Расширение', subKz: 'Кеңейту',
    client: 'CPC', locEn: 'Kazakhstan / Russia', locRu: 'Казахстан / Россия', locKz: 'Қазақстан / Ресей',
    duration: '2006 – 2008',
    image: '/images/objects/КТК Атырау.webp'
  }
]

const activeIndex = ref(0)
const progress = ref(0)
const ROTATE_MS = 6000
let rotateTimer = null
let progressTimer = null
let progressStart = 0

const activeProject = computed(() => projects[activeIndex.value])
const inactiveProjects = computed(() =>
  projects.filter((_, i) => i !== activeIndex.value)
)
const nextId = computed(() => {
  const nextIdx = (activeIndex.value + 1) % projects.length
  return projects[nextIdx].id
})

function startRotation() {
  stopRotation()
  progressStart = performance.now()
  progress.value = 0
  progressTimer = setInterval(() => {
    progress.value = Math.min(1, (performance.now() - progressStart) / ROTATE_MS)
  }, 50)
  rotateTimer = setTimeout(() => {
    activeIndex.value = (activeIndex.value + 1) % projects.length
    startRotation()
  }, ROTATE_MS)
}

function stopRotation() {
  if (rotateTimer) { clearTimeout(rotateTimer); rotateTimer = null }
  if (progressTimer) { clearInterval(progressTimer); progressTimer = null }
}

function next() {
  activeIndex.value = (activeIndex.value + 1) % projects.length
  startRotation()
}
function prev() {
  activeIndex.value = (activeIndex.value - 1 + projects.length) % projects.length
  startRotation()
}
function setActive(id) {
  const idx = projects.findIndex(p => p.id === id)
  if (idx >= 0) {
    activeIndex.value = idx
    startRotation()
  }
}

onMounted(() => {
  startRotation()

  ctx = gsap.context(() => {
    gsap.from('.projects-left .section-badge', {
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
    gsap.from('.project-photo-wrap', {
      opacity: 0, scale: 0.94, duration: 0.85, delay: 0.2, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })
    gsap.from('.watch-all-btn', {
      opacity: 0, y: 18, duration: 0.6, delay: 0.45, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })
    gsap.from('.project-featured', {
      opacity: 0, y: 52, scale: 0.94, duration: 0.95, ease: ease.out,
      scrollTrigger: { trigger: '.projects-right', start: 'top 84%', once: true }
    })
    gsap.from('.project-row-card', {
      opacity: 0, y: 30, duration: 0.7, stagger: 0.1, delay: 0.15, ease: ease.out,
      scrollTrigger: { trigger: '.projects-right', start: 'top 84%', once: true }
    })
    gsap.from('.projects-arrows .arrow-btn', {
      opacity: 0, x: 12, duration: 0.5, stagger: 0.08, delay: 0.35, ease: ease.out,
      scrollTrigger: { trigger: '.projects-right', start: 'top 84%', once: true }
    })
  }, sectionRef.value)
})

onUnmounted(() => {
  stopRotation()
  ctx?.revert()
})
</script>

<style scoped>
.projects-sec {
  padding: 100px 0;
  background: var(--dark);
}

.section-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border: 1.5px solid rgba(255,255,255,0.2);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  white-space: nowrap;
  margin-bottom: 24px;
  background: rgba(255,255,255,0.07);
}

.projects-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr 1fr;
  gap: 48px;
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
  color: var(--white);
  margin-bottom: 20px;
}

.projects-title em {
  font-style: normal;
  color: var(--accent);
}

.projects-desc {
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255,255,255,0.5);
  margin-bottom: 0;
  max-width: 360px;
}

/* Middle column */
.projects-middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.project-photo-wrap {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 24px;
  overflow: hidden;
  background: var(--gray-100);
  position: relative;
}

.project-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.photo-fade-enter-active,
.photo-fade-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.photo-fade-enter-from {
  opacity: 0;
  transform: scale(1.04);
}
.photo-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.watch-all-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  border: 1.5px solid rgba(255,255,255,0.2);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,0.8);
  background: transparent;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}
.watch-all-btn:hover {
  background: var(--white);
  border-color: var(--white);
  color: var(--dark);
}

/* Right column */
.projects-right {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.projects-arrows {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 80px;
  flex-shrink: 0;
}

.arrow-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.2);
  background: transparent;
  color: rgba(255,255,255,0.7);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}
.arrow-btn:hover {
  border-color: var(--white);
  background: var(--white);
  color: var(--dark);
}

.projects-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 0;
}

.project-card {
  border-radius: 20px;
  overflow: hidden;
}

.project-featured {
  background: rgba(255, 255, 255, 0.096);
  border: 1.5px solid rgba(255,255,255,0.12);
  padding: 24px;
}

.project-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 28px;
}

.project-card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--white);
  line-height: 1.25;
}

.see-project-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
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
  padding-top: 18px;
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
  padding: 18px 22px;
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  background: rgba(255,255,255,0.04);
  gap: 16px;
  width: 100%;
  cursor: pointer;
  text-align: left;
  font: inherit;
  transition: border-color 0.2s, background 0.2s;
}
.project-row-card:hover {
  border-color: rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08);
}

.project-row-title {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
}

.row-indicator {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.25);
  flex-shrink: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.row-indicator.loading {
  border: none;
}
.row-progress {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}

@media (max-width: 1100px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .projects-right {
    flex-direction: column;
  }
  .projects-arrows {
    padding-top: 0;
    flex-direction: row;
    order: 2;
    align-self: center;
  }
}
</style>
