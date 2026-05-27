<template>
  <section class="testimonials-sec">
    <div class="container">
      <div class="test-header">
        <span class="section-badge">{{ t('Our Clients', 'Наши заказчики', 'Біздің тапсырыс берушілер') }}</span>
      </div>

      <h2 class="test-headline">
        {{ t(
          'We collaborate with top oil and gas operators, providing engineering excellence on every project.',
          'Мы сотрудничаем с ведущими нефтегазовыми операторами, обеспечивая инженерное совершенство в каждом проекте.',
          'Біз жетекші мұнай-газ операторларымен ынтымақтасамыз, әр жобада инженерлік жоғары деңгейді қамтамасыз етеміз.'
        ) }}
        <em>{{ t(
          ' Our reputation stems from precision, reliability, and decades of flawless execution.',
          ' Наша репутация строится на точности, надёжности и многолетнем безупречном исполнении.',
          ' Біздің беделіміз дәлдіктен, сенімділіктен және ондаған жылдардағы кемшіліксіз орындаудан туындайды.'
        ) }}</em>
      </h2>

      <div class="test-grid">
        <div class="test-card" v-for="(item, i) in testimonials" :key="i">
          <p class="test-quote">"{{ item.quote }}"</p>
          <div class="test-author">
            <div class="test-initials" :style="{ background: item.color }">{{ item.initials }}</div>
            <div>
              <div class="test-name">{{ item.name }}</div>
              <div class="test-role">{{ item.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t, currentLang } = useLanguage()

const testimonials = computed(() => [
  {
    quote: t(
      'CE&R\'s engineering design work for our Tengiz FGP/WPMP project was instrumental in meeting Kazakhstan regulatory requirements. Their team provided consistent, high-quality documentation and consulting support across years of collaboration.',
      'Проектная работа CE&R для нашего проекта FGP/WPMP на Тенгизе сыграла ключевую роль в соответствии требованиям регуляторов Казахстана. Команда обеспечила стабильную, высококачественную документацию на протяжении всего сотрудничества.',
      'Теңіздегі FGP/WPMP жобасы үшін CE&R-дің жобалау жұмыстары Қазақстан реттеуші талаптарын орындауда шешуші рөл атқарды. Команда бірнеше жыл бойы тұрақты, жоғары сапалы құжаттаманы қамтамасыз етті.'
    ),
    name: t('Engineering Management', 'Инженерное руководство', 'Инженерлік басшылық'),
    role: 'Tengizchevroil LLP (TCO)',
    initials: 'TC',
    color: '#c8102e'
  },
  {
    quote: t(
      'The team at CE&R delivered comprehensive project and detailed design documentation for Kashagan EP facilities on time and in full compliance with RoK norms. Their author supervision ensured construction matched every approved specification.',
      'Команда CE&R выполнила полную проектную и рабочую документацию для объектов ЕП Кашаган в установленные сроки и в полном соответствии с нормами РК. Авторский надзор гарантировал соответствие строительства всем утвержденным спецификациям.',
      'CE&R командасы Қашаған ЕП нысандары үшін жобалық және жұмыс құжаттамасын белгіленген мерзімде және ҚР нормаларына толық сәйкес орындады. Авторлық қадағалау барлық бекітілген сипаттамаларға сәйкестігін қамтамасыз етті.'
    ),
    name: t('Project Management Office', 'Офис управления проектами', 'Жоба басқару кеңсесі'),
    role: 'NCOC N.V. (Kashagan)',
    initials: 'NC',
    color: '#00529b'
  },
  {
    quote: t(
      'CE&R provided invaluable regulatory consulting and compliance support for our gas pipeline design. Their knowledge of Kazakhstan technical standards and ability to work alongside our international design teams was exceptional.',
      'CE&R оказал неоценимую поддержку по регуляторному консалтингу и соответствию нормам при проектировании нашего газопровода. Их знание казахстанских технических стандартов и способность работать вместе с нашими международными командами были исключительными.',
      'CE&R газ құбырын жобалау кезінде реттеуші консалтинг пен сәйкестікті қамтамасыз ету бойынша баға жетпес қолдау көрсетті. Қазақстан техникалық стандарттарын білімі мен халықаралық командалармен бірге жұмыс жасау қабілеті ерекше болды.'
    ),
    name: t('Engineering Director', 'Технический директор', 'Техникалық директор'),
    role: 'KazakhOil Aktobe LLP',
    initials: 'KA',
    color: '#1a5276'
  }
])
</script>

<style scoped>
.testimonials-sec {
  padding: 100px 0;
  background: var(--white);
}

.test-header {
  margin-bottom: 32px;
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
}

.test-headline {
  font-size: clamp(20px, 3.2vw, 34px);
  font-weight: 500;
  line-height: 1.4;
  color: var(--dark);
  max-width: 900px;
  margin-bottom: 60px;
  letter-spacing: -0.5px;
}

.test-headline em {
  font-style: normal;
  color: var(--gray-500);
  font-weight: 400;
}

.test-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.test-card {
  padding: 28px;
  border: 1.5px solid var(--gray-200);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.test-card:hover {
  border-color: var(--gray-300);
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
}

.test-quote {
  font-size: 13px;
  line-height: 1.7;
  color: var(--gray-700);
  flex: 1;
}

.test-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.test-initials {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.test-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--dark);
}

.test-role {
  font-size: 11px;
  color: var(--gray-500);
  margin-top: 2px;
}

@media (max-width: 900px) {
  .test-grid {
    grid-template-columns: 1fr;
  }
}
</style>
