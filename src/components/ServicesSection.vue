<template>
  <section class="services-sec" ref="sectionRef">
    <div class="services-inner">
      <div class="services-bg">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80"
          alt="Engineering team on site"
          class="services-img"
          ref="imgRef"
        />
        <div class="services-overlay"></div>
      </div>

      <div class="container services-content">
        <div class="services-top">
          <span class="our-services-label">{{ t('Our Services', 'Наши услуги', 'Біздің қызметтер') }}</span>
          <div class="slide-counter">(0{{ currentSlide }}/04)</div>
        </div>

        <div class="services-body">
          <div class="services-main">
            <h2 class="services-title">{{ slides[currentSlide - 1].title }}</h2>
            <p class="services-desc">{{ slides[currentSlide - 1].desc }}</p>
          </div>
          <div class="services-nav">
            <button class="nav-btn" @click="prev" aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 4L6 10L12 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="nav-btn nav-btn-lime" @click="next" aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { gsap, ease, ScrollTrigger } from '../composables/useScrollAnimation.js'

const { t, currentLang } = useLanguage()
const currentSlide = ref(2)
const sectionRef = ref(null)
const imgRef = ref(null)
let ctx

const slides = computed(() => [
  {
    title: t(
      'Engineering Design — from concept to detailed documentation',
      'Проектирование — от концепции до рабочей документации',
      'Жобалау — тұжырымдамадан жұмыс құжаттамасына дейін'
    ),
    desc: t(
      'CE&R develops high-quality projects at all design stages — feasibility studies, conceptual projects, project documentation, process regulations, and detailed designs — in full compliance with Kazakhstan building norms and standards.',
      'CE&R разрабатывает высококачественные проекты всех стадий проектирования — ТЭО, концептуальные проекты, проектная документация, технологические регламенты, рабочая документация — в полном соответствии с нормами и стандартами РК.',
      'CE&R жобалаудың барлық сатыларында — ТЭН, тұжырымдамалық жобалар, жобалық және жұмыс құжаттамасы — Қазақстан нормалары мен стандарттарына толық сәйкес жоғары сапалы жобалар әзірлейді.'
    )
  },
  {
    title: t(
      'Project Environmental Support',
      'Экологическое сопровождение проектов',
      'Жобаларды экологиялық сүйемелдеу'
    ),
    desc: t(
      'Development and approval of mandatory environmental documentation: Pre-EIA, EIA, and Environmental Protection sections. We perform public hearings, regulatory approvals, expert evaluation of emissions, and environmental design consulting.',
      'Разработка и согласование обязательной экологической документации: ПредОВОС, ОВОС и РООС. Проведение общественных слушаний, согласование в контролирующих органах, экспертная оценка эмиссий и консалтинг.',
      'Міндетті экологиялық құжаттаманы — Алдын ала ҚОӘБ, ҚОӘБ және ҚОҚ — әзірлеу және келісу. Қоғамдық тыңдаулар, бақылаушы органдарда келісу, эмиссиялардың сараптамалық бағалауы.'
    )
  },
  {
    title: t(
      'Author Supervision of construction',
      'Авторский надзор за строительством',
      'Құрылысты авторлық қадағалау'
    ),
    desc: t(
      'CE&R monitors compliance of construction works with approved design documentation, makes rapid design changes when needed, and prepares complete as-built documentation — ensuring every facility operates exactly as designed.',
      'CE&R контролирует соответствие СМР проектной документации, оперативно вносит изменения при необходимости и оформляет полный комплект исполнительной документации, обеспечивая безопасную эксплуатацию объекта.',
      'CE&R ҚМЖ-ның жобалық құжаттамаға сәйкестігін бақылайды, қажет болса жедел өзгерістер енгізеді және атқарушы құжаттаманың толық пакетін рәсімдейді.'
    )
  },
  {
    title: t(
      'Consulting Services',
      'Консалтинговые услуги',
      'Консалтингтік қызметтер'
    ),
    desc: t(
      'Verification of project documentation for compliance with Kazakhstan standards, participation in projects by foreign design companies, technical consulting at design, preparation, and acceptance stages — both on-site and remotely.',
      'Проверка проектной документации на соответствие нормам РК, участие в разработке проектов иностранными компаниями, технический консалтинг на этапах проектирования, подготовки к эксплуатации и приемки объектов.',
      'ҚР нормаларына сәйкестігін тексеру, шетелдік компаниялардың жобаларын әзірлеуге қатысу, жобалау, пайдалануға дайындау және қабылдау сатыларындағы техникалық консалтинг.'
    )
  }
])

function prev() {
  if (currentSlide.value > 1) currentSlide.value--
  else currentSlide.value = 4
}

function next() {
  if (currentSlide.value < 4) currentSlide.value++
  else currentSlide.value = 1
}

watch(currentSlide, () => {
  gsap.fromTo('.services-title',
    { opacity: 0, y: 22, filter: 'blur(5px)' },
    { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, ease: ease.out, clearProps: 'filter' }
  )
  gsap.fromTo('.services-desc',
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.5, delay: 0.06, ease: ease.out }
  )
})

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.services-top', {
      opacity: 0, y: 24, duration: 0.7, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 80%', once: true }
    })
    gsap.from('.services-main', {
      opacity: 0, y: 36, filter: 'blur(8px)', duration: 0.85, delay: 0.12,
      ease: ease.out, clearProps: 'filter',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 80%', once: true }
    })
    gsap.from('.services-nav', {
      opacity: 0, y: 20, duration: 0.6, delay: 0.25, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 80%', once: true }
    })

  }, sectionRef.value)
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.services-sec {
  position: relative;
}

.services-inner {
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: flex-end;
  padding: 72px 0;
  overflow: hidden;
}

.services-bg {
  position: absolute;
  inset: 0;
}

.services-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
}

.services-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0,0,0,0.88) 0%,
    rgba(0,0,0,0.65) 60%,
    rgba(0,0,0,0.3) 100%
  );
}

.services-content {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.services-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.our-services-label {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 100px;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.5px;
}

.slide-counter {
  font-size: 48px;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  letter-spacing: -1px;
  line-height: 1;
}

.services-body {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
}

.services-main {
  max-width: 600px;
}

.services-title {
  font-size: clamp(24px, 4vw, 46px);
  font-weight: 700;
  color: var(--white);
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin-bottom: 20px;
}

.services-desc {
  font-size: 13px;
  line-height: 1.7;
  color: rgba(255,255,255,0.65);
  max-width: 520px;
}

.services-nav {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.nav-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.2);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  cursor: pointer;
}

.nav-btn:hover {
  background: rgba(255,255,255,0.25);
}

.nav-btn-lime {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--on-accent);
}

.nav-btn-lime:hover {
  background: var(--accent-hover);
}

@media (max-width: 768px) {
  .services-body {
    flex-direction: column;
    align-items: flex-start;
  }

  .slide-counter {
    font-size: 32px;
  }
}
</style>
