<template>
  <section class="about-sec">
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
            'жылдар бойы жинақталған инженерлік тәжірибені'
          ) }}</em>{{ t(
            ' with precision design to safely and efficiently ',
            ' с точным проектированием для безопасного и эффективного ',
            ' кәсіби жобалаумен біріктіреді — '
          ) }}<em>{{ t(
            'unlock Kazakhstan\'s energy infrastructure',
            'развития энергетической инфраструктуры Казахстана',
            'Қазақстанның энергетикалық инфрақұрылымын'
          ) }}</em>{{ t(
            ', redefining oil and gas engineering in Central Asia.',
            ', переосмысляя нефтегазовый инжиниринг в Центральной Азии.',
            ' дамытып, Орталық Азиядағы нефтегаз инжинирингін жаңаша анықтайды.'
          ) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'
const { t } = useLanguage()
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
