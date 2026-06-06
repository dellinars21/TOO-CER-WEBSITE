<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <span class="page-badge">{{ t('Our Services', 'Наши услуги', 'Біздің қызметтер') }}</span>
        <h1 class="page-title">
          {{ t('Full lifecycle', 'Полный цикл', 'Толық цикл') }}<br />
          <em>{{ t('engineering services', 'инженерных услуг', 'инженерлік қызметтер') }}</em>
        </h1>
        <p class="page-sub">
          {{ t(
            'From feasibility studies through to author supervision of construction, CE&R provides integrated engineering and consulting services for all stages of oil, gas, and pipeline facility development.',
            'От технико-экономического обоснования до авторского надзора за строительством, CE&R обеспечивает комплексные инженерные и консалтинговые услуги для всех этапов обустройства нефтегазовых и трубопроводных объектов.',
            'ТЭН-нен авторлық қадағалауға дейін CE&R мұнай, газ және құбыр нысандарының барлық кезеңдері үшін кешенді инженерлік және консалтингтік қызметтерді ұсынады.'
          ) }}
        </p>
      </div>
    </section>

    <section class="services-list-sec">
      <div class="container">
        <div class="services-list">
          <div class="service-item" v-for="(s, i) in services" :key="i">
            <div class="service-num">0{{ i + 1 }}</div>
            <div class="service-content">
              <h2 class="service-title">{{ t(s.titleEn, s.titleRu, s.titleKz) }}</h2>
              <p class="service-desc">{{ t(s.descEn, s.descRu, s.descKz) }}</p>
              <ul class="service-features">
                <li v-for="(f, fi) in s.features" :key="fi">{{ t(f.en, f.ru, f.kz) }}</li>
              </ul>
            </div>
            <div class="service-img-wrap">
              <img :src="s.img" :alt="t(s.titleEn, s.titleRu, s.titleKz)" class="service-img" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </main>
</template>

<script setup>
import FooterSection from '../components/FooterSection.vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t } = useLanguage()

const services = [
  {
    titleEn: 'Engineering Design',
    titleRu: 'Проектирование',
    titleKz: 'Жобалау',
    descEn: 'Accumulated experience in oil and gas facility design, continuous qualification improvement, and advanced software tools allow CE&R to develop high-quality projects at all design stages — from feasibility studies to detailed design.',
    descRu: 'Наработанный опыт в области проектирования нефтегазовых объектов, постоянное совершенствование квалификации и применение новейшего ПО позволяют CE&R разрабатывать высококачественные проекты всех стадий проектирования — от ТЭО до рабочей документации.',
    descKz: 'Мұнай-газ объектілерін жобалау тәжірибесі, үздіксіз біліктілік жетілдіру және заманауи бағдарламалық қамтамасыз ету CE&R-ге ТЭН-нен рабочая құжаттамаға дейін жоғары сапалы жобалар әзірлеуге мүмкіндік береді.',
    features: [
      { en: 'Feasibility study of facilities construction', ru: 'Технико-экономическое обоснование строительства объектов', kz: 'Объектілер құрылысының ТЭН' },
      { en: 'Conceptual projects', ru: 'Концептуальные проекты', kz: 'Тұжырымдамалық жобалар' },
      { en: 'Project documentation & detailed design', ru: 'Проектная документация и рабочая документация', kz: 'Жобалық және жұмыс құжаттамасы' },
      { en: 'Declaration of industrial safety & process regulations', ru: 'Декларация промышленной безопасности и технологические регламенты', kz: 'Өнеркәсіптік қауіпсіздік декларациясы және технологиялық регламенттер' },
      { en: 'Associated petroleum gas development programs', ru: 'Программы развития и переработки ПНГ', kz: 'ІМГ дамыту және қайта өңдеу бағдарламалары' }
    ],
    img: './images/services/projecting_program.jpg'
  },
  {
    titleEn: 'Project Environmental Support',
    titleRu: 'Экологическое сопровождение',
    titleKz: 'Экологиялық сүйемелдеу',
    descEn: 'CE&R provides services for the development and approval of environmental documentation mandatory for all legal entities in the field of environmental protection, environmental conservation, and safety management.',
    descRu: 'CE&R предоставляет услуги по разработке и согласованию обязательной экологической документации в сфере охраны окружающей среды, рационального природопользования и экологического менеджмента.',
    descKz: 'CE&R қоршаған ортаны қорғау, табиғатты ұтымды пайдалану және экологиялық менеджмент саласындағы барлық заңды тұлғалар үшін міндетті экологиялық құжаттаманы әзірлеу және келісу бойынша қызмет көрсетеді.',
    features: [
      { en: 'Development of Pre-EIA, EIA and Environmental Protection sections', ru: 'Разработка разделов ПредОВОС, ОВОС и РООС', kz: 'Алдын ала ҚОӘБ, ҚОӘБ және ҚОҚ бөлімдерін әзірлеу' },
      { en: 'Public hearings', ru: 'Проведение общественных слушаний', kz: 'Қоғамдық тыңдаулар өткізу' },
      { en: 'Approval of projects in supervisory bodies', ru: 'Согласование проектов в контролирующих органах', kz: 'Жобаларды бақылаушы органдарда келісу' },
      { en: 'Expert evaluation of environment emissions', ru: 'Экспертная оценка эмиссий в окружающую среду', kz: 'Қоршаған ортаға эмиссиялардың сараптамалық бағалауы' },
      { en: 'Environmental design consulting', ru: 'Консалтинг в сфере природоохранного проектирования', kz: 'Экологиялық жобалау бойынша консалтинг' }
    ],
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80'
  },
  {
    titleEn: 'Author Supervision',
    titleRu: 'Авторский надзор',
    titleKz: 'Авторлық қадағалау',
    descEn: 'CE&R performs author supervision services — an important stage in construction guaranteeing the safe operation of a facility in the future. The Company monitors compliance of construction and installation works with approved project documentation.',
    descRu: 'CE&R выполняет услуги авторского надзора — важного этапа строительства, гарантирующего безопасную эксплуатацию объекта. Компания контролирует соответствие СМР утверждённой проектной документации.',
    descKz: 'CE&R авторлық қадағалау қызметтерін орындайды — нысанды болашақта қауіпсіз пайдалануға кепілдік беретін маңызды кезең. Компания ҚМЖ-ның бекітілген жобалық құжаттамаға сәйкестігін бақылайды.',
    features: [
      { en: 'Monitoring compliance of construction works with design documentation', ru: 'Контроль соответствия СМР проектной документации', kz: 'ҚМЖ-ның жобалық құжаттамаға сәйкестігін бақылау' },
      { en: 'Rapid design change management', ru: 'Оперативное внесение изменений в проектную документацию', kz: 'Жобалық құжаттамаға жедел өзгерістер енгізу' },
      { en: 'Preparation of as-built documentation', ru: 'Оформление исполнительной документации', kz: 'Атқарушы құжаттаманы рәсімдеу' },
      { en: 'Participation in facility acceptance for operation', ru: 'Участие в приёмке объекта в эксплуатацию', kz: 'Нысанды пайдалануға қабылдауға қатысу' }
    ],
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80'
  },
  {
    titleEn: 'Consulting Services',
    titleRu: 'Консалтинговые услуги',
    titleKz: 'Консалтингтік қызметтер',
    descEn: 'CE&R verifies norms, standards and project documentation for compliance with Kazakhstan regulations, and participates in projects by foreign design companies — both on-site in project offices and remotely.',
    descRu: 'CE&R проверяет нормы, стандарты и проектную документацию на соответствие нормам РК, участвует в разработке проектов иностранными компаниями — как непосредственно в проектных офисах, так и дистанционно.',
    descKz: 'CE&R нормалар, стандарттар мен жобалық құжаттаманы ҚР нормаларына сәйкестігін тексереді және шетелдік компаниялардың жобаларын әзірлеуге қатысады — тікелей жобалық кеңселерде де, дистанционды түрде де.',
    features: [
      { en: 'Evaluation of technical documentation for RoK compliance', ru: 'Оценка технической документации на соответствие нормам РК', kz: 'Техникалық құжаттаманы ҚР нормаларына сәйкестігін бағалау' },
      { en: 'Consulting on engineering equipment selection', ru: 'Консалтинг по подбору инженерного оборудования', kz: 'Инженерлік жабдықтарды іріктеу бойынша консалтинг' },
      { en: 'Support of construction, installation, and commissioning works', ru: 'Сопровождение СМР и пусконаладочных работ', kz: 'ҚМЖ және іске қосу-жөндеу жұмыстарын сүйемелдеу' },
      { en: 'Participation in facility acceptance commission', ru: 'Участие в Рабочей комиссии по приёмке объекта', kz: 'Нысанды қабылдау бойынша Жұмыс комиссиясының жұмысына қатысу' }
    ],
    img: './images/team company.jpg'
  }
]
</script>

<style scoped>
.page-hero {
  padding: 120px 0 80px;
  background: var(--dark);
}

.page-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255,255,255,0.6);
  margin-bottom: 28px;
}

.page-title {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 700;
  color: var(--white);
  letter-spacing: -2px;
  line-height: 1.05;
  margin-bottom: 24px;
}

.page-title em {
  font-style: normal;
  color: var(--accent);
}

.page-sub {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255,255,255,0.6);
  max-width: 560px;
}

.services-list-sec {
  padding: 80px 0 100px;
}

.services-list {
  display: flex;
  flex-direction: column;
}

.service-item {
  display: grid;
  grid-template-columns: 80px 1fr 380px;
  gap: 48px;
  padding: 60px 0;
  border-bottom: 1.5px solid var(--gray-200);
  align-items: start;
}

.service-num {
  font-size: 13px;
  font-weight: 600;
  color: var(--gray-500);
  padding-top: 8px;
}

.service-title {
  font-size: clamp(22px, 2.8vw, 34px);
  font-weight: 700;
  letter-spacing: -0.8px;
  margin-bottom: 16px;
}

.service-desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--gray-700);
  margin-bottom: 24px;
  max-width: 480px;
}

.service-features {
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0;
}

.service-features li {
  font-size: 13px;
  color: var(--gray-700);
  display: flex;
  align-items: center;
  gap: 8px;
}

.service-features li::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}

.service-img-wrap {
  border-radius: 16px;
  overflow: hidden;
}

.service-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: transform 0.4s;
}

.service-img-wrap:hover .service-img {
  transform: scale(1.03);
}

@media (max-width: 1024px) {
  .service-item {
    grid-template-columns: 60px 1fr;
  }
  .service-img-wrap {
    grid-column: 2;
    max-width: 360px;
  }
}

@media (max-width: 640px) {
  .service-item {
    grid-template-columns: 1fr;
    padding: 40px 0;
  }
  .service-img-wrap {
    grid-column: 1;
    max-width: 100%;
  }
}
</style>
