<template>
  <section class="about-sec" ref="sectionRef">
    <div class="container about-inner">
      <div class="about-tag-col">
        <span class="section-badge">{{ t('About Us', 'О компании', 'Компания туралы') }}</span>
      </div>
      <div class="about-text-col">
        <p class="about-headline">
          {{ t(
            'CE&R merges ',
            'CE&R объединяет ',
            'CE&R '
          ) }}<em>{{ t(
            'decades of engineering expertise',
            'десятилетия инженерного опыта',
            'ондаған жылдар бойы жинақталған инженерлік тәжірибе'
          ) }}</em>{{ t(
            ' with precision design to safely and quality ',
            ' с точным проектированием для безопасного и качественного ',
            ' қауіпсіз және жоғары сапа үшін дәл инженериямен '
          ) }}<em>{{ t(
            'development of oil and gas infrastructure in Kazakhstan',
            'развития нефтегазовой инфраструктуры Казахстана',
            'Қазақстандағы мұнай-газ инфрақұрылымын дамыту'
          ) }}</em>{{ t(
            '. Create the future together with industry experts!',
            '. Создавайте будущее вместе с экспертами отрасли!',
            '. Болашақты сала мамандарымен бірге құрыңыз!'
          ) }}
        </p>
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
    gsap.from('.about-tag-col .section-badge', {
      opacity: 0, x: -24, duration: 0.65, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 86%', once: true }
    })
    gsap.from('.about-headline', {
      opacity: 0, y: 36, filter: 'blur(10px)', duration: 1.05, delay: 0.1,
      ease: ease.out, clearProps: 'filter',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 86%', once: true }
    })
  }, sectionRef.value)
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.about-sec {
  padding: 72px 0 48px;
}

.about-inner {
  display: flex;
  gap: 80px;
  align-items: flex-start;
}

.about-tag-col {
  flex-shrink: 0;
  padding-top: 6px;
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
}

.about-text-col {
  flex: 1;
}

.about-headline {
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 500;
  line-height: 1.45;
  color: var(--dark);
  letter-spacing: -0.5px;
}

.about-headline em {
  font-style: normal;
  font-weight: 700;
}

@media (max-width: 768px) {
  .about-inner {
    flex-direction: column;
    gap: 24px;
  }
}
</style>
