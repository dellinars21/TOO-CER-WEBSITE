<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <span class="page-badge">{{ t('Portfolio', 'Портфолио', 'Портфолио') }}</span>
        <h1 class="page-title">
          {{ t('Built to perform,', 'Создано с точностью,', 'Дәлдікпен жасалған,') }}<br />
          <em>{{ t('proven to last', 'проверено временем', 'уақытпен дәлелденген') }}</em>
        </h1>
        <p class="page-sub">
          {{ t(
            'Over 25 major oil and gas projects engineered across Kazakhstan — from the Caspian offshore to onshore refineries and gas processing facilities.',
            'Более 25 крупных нефтегазовых проектов, выполненных по всему Казахстану — от морских платформ на Каспии до береговых НПЗ и газоперерабатывающих объектов.',
            'Қазақстан бойынша 25-тен астам ірі мұнай-газ жобалары орындалды — Каспийдің теңіздегі платформаларынан жағалаудағы мұнай өңдеу зауыттары мен газ өңдеу нысандарына дейін.'
          ) }}
        </p>
      </div>
    </section>

    <section class="portfolio-filter-sec">
      <div class="container">
        <div class="filter-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.code"
            class="filter-tab"
            :class="{ active: activeTab === tab.code }"
            @click="activeTab = tab.code"
          >{{ t(tab.en, tab.ru, tab.kz) }}</button>
        </div>
      </div>
    </section>

    <section class="portfolio-grid-sec">
      <div class="container">
        <div class="portfolio-grid">
          <button
            class="project-card-full"
            v-for="p in filteredProjects"
            :key="p.titleEn"
            @click="openProject(p)"
            type="button"
          >
            <div class="pcf-img-wrap">
              <img :src="p.img" :alt="t(p.titleEn, p.titleRu, p.titleKz)" class="pcf-img" />
              <div class="pcf-overlay">
                <span class="pcf-tag">{{ t(p.category.en, p.category.ru, p.category.kz) }}</span>
              </div>
              <div class="pcf-hover">
                <span class="pcf-view">{{ t('View details', 'Подробнее', 'Толығырақ') }} →</span>
              </div>
            </div>
            <div class="pcf-info">
              <div class="pcf-client">{{ p.client }}</div>
              <h3 class="pcf-title">{{ t(p.titleEn, p.titleRu, p.titleKz) }}</h3>
              <p class="pcf-desc">{{ t(p.descEn, p.descRu, p.descKz) }}</p>
              <div class="pcf-logos" v-if="p.clients && p.clients.length">
                <img
                  v-for="c in p.clients.slice(0, 4)"
                  :key="c.logo"
                  :src="c.logo"
                  :alt="c.name"
                  class="pcf-logo"
                />
              </div>
              <div class="pcf-stats">
                <span class="pcf-stat">
                  <span class="pcf-stat-lbl">{{ t('Period', 'Период', 'Мерзім') }}</span>
                  <span class="pcf-stat-val">{{ p.period }}</span>
                </span>
                <span class="pcf-stat" v-if="p.scope">
                  <span class="pcf-stat-lbl">{{ t('Scope', 'Объём', 'Аясы') }}</span>
                  <span class="pcf-stat-val">{{ t(p.scope.en, p.scope.ru, p.scope.kz) }}</span>
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- Project Detail Modal -->
    <transition name="modal">
      <div v-if="selectedProject" class="modal-backdrop" @click.self="closeProject">
        <div class="modal-window" role="dialog" aria-modal="true">
          <button class="modal-close" @click="closeProject" :aria-label="t('Close','Закрыть','Жабу')">×</button>

          <div class="modal-hero">
            <img :src="selectedProject.img" :alt="t(selectedProject.titleEn, selectedProject.titleRu, selectedProject.titleKz)" />
            <div class="modal-hero-overlay">
              <span class="pcf-tag">{{ t(selectedProject.category.en, selectedProject.category.ru, selectedProject.category.kz) }}</span>
              <h2 class="modal-title">{{ t(selectedProject.titleEn, selectedProject.titleRu, selectedProject.titleKz) }}</h2>
              <p class="modal-period">{{ selectedProject.period }}</p>
            </div>
          </div>

          <div class="modal-body">
            <div class="modal-meta">
              <div class="modal-meta-block">
                <div class="modal-meta-lbl">{{ t('Scope of Work', 'Объём работ', 'Жұмыс аясы') }}</div>
                <div class="modal-meta-val">{{ t(selectedProject.scope.en, selectedProject.scope.ru, selectedProject.scope.kz) }}</div>
              </div>
              <div class="modal-meta-block">
                <div class="modal-meta-lbl">{{ t('Category', 'Категория', 'Санаты') }}</div>
                <div class="modal-meta-val">{{ t(selectedProject.category.en, selectedProject.category.ru, selectedProject.category.kz) }}</div>
              </div>
              <div class="modal-meta-block">
                <div class="modal-meta-lbl">{{ t('Period', 'Период', 'Мерзім') }}</div>
                <div class="modal-meta-val">{{ selectedProject.period }}</div>
              </div>
            </div>

            <div class="modal-section">
              <h3 class="modal-h3">{{ t('Overview', 'Описание', 'Сипаттама') }}</h3>
              <p class="modal-text">{{ t(selectedProject.descEn, selectedProject.descRu, selectedProject.descKz) }}</p>
            </div>

            <div class="modal-section" v-if="selectedProject.clients && selectedProject.clients.length">
              <h3 class="modal-h3">{{ t('Clients & Partners', 'Клиенты и партнёры', 'Клиенттер мен серіктестер') }}</h3>
              <div class="modal-clients">
                <div class="modal-client" v-for="c in selectedProject.clients" :key="c.name">
                  <div class="modal-client-logo">
                    <img :src="c.logo" :alt="c.name" />
                  </div>
                  <div class="modal-client-name">{{ c.name }}</div>
                </div>
              </div>
            </div>

            <div class="modal-section" v-if="selectedProject.details && selectedProject.details.length">
              <h3 class="modal-h3">{{ t('Scope of Work Delivered', 'Выполненные работы', 'Орындалған жұмыстар') }}</h3>
              <ul class="modal-list">
                <li v-for="(d, i) in selectedProject.details" :key="i">
                  {{ t(d.en, d.ru, d.kz) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <FooterSection />
  </main>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'
import FooterSection from '../components/FooterSection.vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t } = useLanguage()

const tabs = [
  { code: 'all', en: 'All Projects', ru: 'Все проекты', kz: 'Барлық жобалар' },
  { code: 'offshore', en: 'Offshore', ru: 'Морские', kz: 'Теңіздегі' },
  { code: 'onshore', en: 'Onshore', ru: 'Наземные', kz: 'Жердегі' },
  { code: 'pipeline', en: 'Pipeline', ru: 'Трубопроводы', kz: 'Құбыр желілері' },
  { code: 'infrastructure', en: 'Infrastructure', ru: 'Инфраструктура', kz: 'Инфрақұрылым' }
]

const activeTab = ref('all')
const selectedProject = ref(null)

function openProject(p) {
  selectedProject.value = p
}
function closeProject() {
  selectedProject.value = null
}

// Lock body scroll while modal open + ESC closes it
function onKey(e) { if (e.key === 'Escape') closeProject() }
watch(selectedProject, (val) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = val ? 'hidden' : ''
  if (val) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})
onUnmounted(() => {
  if (typeof document !== 'undefined') document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})

const projects = [
  {
    titleEn: 'Kashagan Field — EP Development',
    titleRu: 'Месторождение Кашаган — Разработка ЕП',
    titleKz: 'Қашаған кен орны — ЕП Игеру',
    client: 'NCOC N.V. / Agip KCO / PSN Kazstroy',
    descEn: 'Comprehensive design and author supervision services for Kashagan EP offshore and onshore facilities, including raw gas injection, drilling islands, process facilities, gas utilization programs, and onshore processing infrastructure.',
    descRu: 'Комплексные услуги проектирования и авторского надзора для морских и береговых объектов ЕП Кашаган: закачка газа, буровые острова, технологические объекты, программы газоиспользования и береговая инфраструктура.',
    descKz: 'Қашаған ЕП теңіздегі және жағалаудағы нысандары үшін кешенді жобалау және авторлық қадағалау қызметтері: газды айдау, бұрғылау аралдары, технологиялық нысандар, газды пайдалану бағдарламалары.',
    period: '2005 – 2018',
    scope: { en: 'Design & Author Supervision', ru: 'Проектирование и Авторский надзор', kz: 'Жобалау және Авторлық қадағалау' },
    category: { en: 'Offshore', ru: 'Морские', kz: 'Теңіздегі' },
    type: 'offshore',
    img: '/images/objects/Месторождение Кашаган.jpg',
    clients: [
      { name: 'NCOC N.V.', logo: '/images/clients/ncoc.png' },
      { name: 'Consafe McNulty JV', logo: '/images/clients/consafe-mcnulty.png' }
    ],
    details: [
      { en: 'Raw gas injection project at EP stage (2005).', ru: 'Проект закачки сырого газа на стадии ОПР (2005).', kz: 'ТӨӨ кезеңінде шикі газды айдау жобасы (2005).' },
      { en: 'Declaration of Intentions for Kashagan FFD OPF Construction (2006).', ru: 'Декларация о намерениях по строительству УПН для полномасштабной разработки Кашаган (2006).', kz: 'Қашаған кен орнын толықмасштабты жасақтауға МДҚ құрылысына ниеттері туралы декларация (2006).' },
      { en: 'Caspian Region Infrastructure Study to choose logistics options for FFD (2006-2007).', ru: 'Оценка инфраструктуры Каспийского региона для выбора вариантов логистики полномасштабной разработки (2006-2007).', kz: 'Толықмасштабтық жұмыстар логистикасын таңдау үшін Каспий өңірінің инфрақұрылымын бағалау (2006-2007).' },
      { en: 'Technical documentation and engineering support for Raw Gas Injection Project (2007-2010).', ru: 'Техническая документация и техническое сопровождение проекта обратной закачки газа (2007-2010).', kz: 'Газды кері айдау жобасы бойынша техникалық сүйемелдеу және құжаттаманы дайындау (2007-2010).' },
      { en: 'Project engineering of DC-1, DC-4, DC-6, DC-7 Drilling Islands Construction (2008-2009).', ru: 'Проекты на строительство островов разбуривания DC-1, DC-4, DC-6, DC-7 (2008-2009).', kz: 'DC-1, DC-4, DC-6, DC-7 бұрғылау аралдарының құрылысы жобалары (2008-2009).' },
      { en: 'EP Gas Utilization Program development and approval (2008-2011).', ru: 'Разработка и согласование Программы утилизации газа на период ОПР (2008-2011).', kz: 'ТӨӨ кезеңінде газды пайдалану бағдарламасын дайындау және келісу (2008-2011).' },
      { en: 'Project update and author supervision: EP Kashagan Onshore & Offshore Process Facilities (2011-2018).', ru: 'Корректировка проектов и авторский надзор: ОПР Кашаган. Наземный и морской комплексы (2011-2018).', kz: 'Жобаларды түзету және авторлық қадағалау: Қашаған ТӨӨ. Жердегі және теңіздегі кешендері (2011-2018).' },
      { en: 'Earth Depth Monitoring Stations Detail Designs and EIA in Atyrau and Mangistau regions (2012-2015).', ru: 'Рабочие проекты наземных станций мониторинга недр и ОВОС в Атырауской и Мангистауской областях (2012-2015).', kz: 'Атырау және Маңғыстау облыстарындағы жердегі мониторинг стансаларының жұмыс жобалары және ҚОӘБ (2012-2015).' },
      { en: 'Unit 560 — separation of oily water from produced water (2016-2017).', ru: 'Установка 560 — отделение нефтесодержащей воды из пластовой воды (2016-2017).', kz: '560-Қондырғы — қабат суынан мұнайлы суды бөлу (2016-2017).' },
      { en: 'Author supervision of gas turbine generator, sulfur storage and export oil/gas pipelines (2017-2018).', ru: 'Авторский надзор ГТГ, склада серы и экспортных нефте- и газопроводов (2017-2018).', kz: 'ГТҚ, күкірт қоймасы және экспорттық мұнай-газ құбырларын авторлық қадағалау (2017-2018).' }
    ]
  },
  {
    titleEn: 'Tengiz Field — FGP/WPMP',
    titleRu: 'Месторождение Тенгиз — ПБР/ПУУД',
    titleKz: 'Теңіз кен орны — FGP/WPMP',
    client: 'Tengizchevroil LLP (TCO)',
    descEn: 'Feasibility study, GTPD, regulatory consulting, and author supervision for TCO\'s Tengiz Field Future Growth Project (FGP/WPMP) — one of the largest oil & gas capital projects in Kazakhstan history.',
    descRu: 'ТЭО, ОТПД, регуляторный консалтинг и авторский надзор для проекта расширения Тенгиз (ПБР/ПУУД) — одного из крупнейших инвестиционных нефтегазовых проектов в истории Казахстана.',
    descKz: 'ТЭН, ЖТҚ, реттеуші консалтинг және авторлық қадағалау ТШО-ның Теңіз кен орнын дамыту жобасы (FGP/WPMP) үшін — Қазақстан тарихындағы ең ірі инвестициялық мұнай-газ жобаларының бірі.',
    period: '2008 – 2025',
    scope: { en: 'Consulting & Author Supervision', ru: 'Консалтинг и Авторский надзор', kz: 'Консалтинг және Авторлық қадағалау' },
    category: { en: 'Onshore', ru: 'Наземные', kz: 'Жердегі' },
    type: 'onshore',
    img: '/images/objects/Месторождение Тенгиз.jpg',
    clients: [
      { name: 'Tengizchevroil LLP', logo: '/images/clients/tco-tengizchevroil.png' }
    ],
    details: [
      { en: 'Sulfur storage pilot project (2008).', ru: 'Пилотный проект хранения серы (2008).', kz: 'Күкірт сақтау пилоттық жобасы (2008).' },
      { en: 'Declaration of Intentions and Environmental Review for FGP/WPMP (2009-2011).', ru: 'Декларация о намерениях и Обзор окружающей среды для ПБР/ПУУД (2009-2011).', kz: 'FGP/WPMP үшін ниет декларациясы және қоршаған орта шолуы (2009-2011).' },
      { en: 'Feasibility study and Pre-EIA for FGP/WPMP capacity expansion (2009-2013).', ru: 'ТО и ПредОВОС для расширения мощностей ПБР/ПУУД (2009-2013).', kz: 'ПБР/ПУУД қуатын кеңейтуге арналған ТН және Алдын-ала ҚОӘБ (2009-2013).' },
      { en: 'General Technical Project Documentation (GTPD) for FGP/WPMP (2011-2013).', ru: 'Общая техническая проектная документация (ОТПД) ПБР/ПУУД (2011-2013).', kz: 'FGP/WPMP жалпы техникалық жобалық құжаттамасы (2011-2013).' },
      { en: 'Standards for wellpad development & operation at TCO fields (2012-2014).', ru: 'СТ ТОО «Требования по обустройству и эксплуатации площадок кустовых скважин» (2012-2014).', kz: 'ТШО кен орындары ұңғыма алаңдарын жабдықтау стандарттары (2012-2014).' },
      { en: 'Regulatory consulting services for FGP/WPMP (2009-2025).', ru: 'Консультационные услуги по нормативно-правовому регулированию ПБР/ПУУД (2009-2025).', kz: 'ПБР/ПУУД жобасы үшін нормативтік-құқықтық консультациялар (2009-2025).' },
      { en: 'Endorsement of engineering and project documentation for RK compliance (2013-2016).', ru: 'Проверка (Endorsement) инженерно-технической документации на соответствие нормам РК (2013-2016).', kz: 'Инженерлік-техникалық құжаттаманың ҚР нормаларына сәйкестігін тексеру (2013-2016).' },
      { en: 'Civil Defense protective structure design for FGP/WPMP facilities (2014-2018).', ru: 'Основы проектирования защитного сооружения ГО для объектов ПБР/ПУУД (2014-2018).', kz: 'ПБР/ПУУД нысандары үшін АҚ қорғаныс құрылысы жобалау негіздері (2014-2018).' },
      { en: 'Cargo Transport Route (CaTRo) regulatory support at Prorva (2015-2019).', ru: 'Сопровождение проекта Маршрут грузовых перевозок (CaTRo) на Прорве (2015-2019).', kz: 'Прорвадағы CaTRo жүк тасымалдау маршрутын сүйемелдеу (2015-2019).' },
      { en: 'Acceptance documentation and start-up complex definition for FGP/WPMP (2020-2022).', ru: 'Документ приёмки объектов ПБР/ПУУД, выделение пусковых комплексов (2020-2022).', kz: 'ПБР/ПУУД нысандарын қабылдау құжаты және іске қосу кешендерін бөлу (2020-2022).' }
    ]
  },
  {
    titleEn: 'Karachaganak Oil & Gas Condensate Field',
    titleRu: 'Месторождение Карачаганак',
    titleKz: 'Қарашығанақ кен орны',
    client: 'KPO B.V. / Petrofac / AMEC Kazakhstan',
    descEn: 'Long-running program of feasibility studies, EIA, working documentation and author supervision across satellite stations, 4th stabilization line, Phase III development, condensate/LPG loading racks and gas pipeline to Uralsk.',
    descRu: 'Многолетняя программа ТЭО, ОВОС, рабочей документации и авторского надзора: сателлитные станции, 4-я линия стабилизации, Этап III освоения, наливные эстакады конденсата и СУГ, газопровод Карачаганак-Уральск.',
    descKz: 'ТЭН, ҚОӘБ, жұмыс құжаттамасы және авторлық қадағалаудың ұзақ жылдық бағдарламасы: сателлиттік стансалар, 4-ші тұрақтандыру желісі, III кезеңі, конденсат пен СҰГ құю эстакадалары, Қарашығанақ-Орал газ құбыры.',
    period: '2004 – 2011',
    scope: { en: 'Design, EIA & Author Supervision', ru: 'Проектирование, ОВОС и Авторский надзор', kz: 'Жобалау, ҚОӘБ және Авторлық қадағалау' },
    category: { en: 'Onshore', ru: 'Наземные', kz: 'Жердегі' },
    type: 'onshore',
    img: '/images/objects/Месторождение Карачаганак.jpg',
    clients: [
      { name: 'Karachaganak Petroleum Operating B.V.', logo: '/images/clients/karachaganak-petroleum.png' }
    ],
    details: [
      { en: 'Commissioning permits for Satellite Station, GPU-2, KPC and pre-plant/industrial zones (2004).', ru: 'Разрешения на ввод в действие Сателлитной станции, УКПГ-2, КПК, Предзаводской и Производственной зон (2004).', kz: 'Сателлиттік стансаны, ГӨҚ-2, КӨК және зауыт алды/өндірістік аймақтарды іске қосуға рұқсаттар (2004).' },
      { en: 'FS and Pre-EIA for Karachaganak-Uralsk treated gas pipeline (2006).', ru: 'ТЭО и ПредОВОС газопровода очищенного газа Карачаганак-Уральск (2006).', kz: 'Қарашығанақ-Орал тазартылған газ құбырының ТЭН және Алдын-ала ҚОӘБ (2006).' },
      { en: 'Declaration of Intentions, Investment Justification (FS) and Pre-EIA for 4th stabilization & purification line (2006-2007).', ru: 'Декларация о намерениях, ТЭО и ПредОВОС для 4-й линии стабилизации и очистки сырья КПК (2006-2007).', kz: 'КӨК 4-ші тұрақтандыру және тазарту желісіне арналған ниет декларациясы, ТЭН және Алдын-ала ҚОӘБ (2006-2007).' },
      { en: 'Project, EIA & Working documentation for 4th stabilization line; construction author supervision (2007-2011).', ru: 'Проект, ОВОС и рабочая документация 4-й линии стабилизации; авторский надзор за строительством (2007-2011).', kz: '4-ші тұрақтандыру желісінің жобасы, ҚОӘБ және жұмыс құжаттамасы; құрылысқа авторлық қадағалау (2007-2011).' },
      { en: 'Declaration of Intentions, Environmental Review and FS for Phase III field development (2007-2009).', ru: 'Декларация о намерениях, Обзор окружающей среды и ТЭО Этапа III освоения месторождения (2007-2009).', kz: 'Кен орнын игерудің III кезеңі үшін ниет декларациясы, қоршаған орта шолуы және ТЭН (2007-2009).' },
      { en: 'Declaration of Intentions and Investment Justification (FS) for condensate and LPG loading racks (2007).', ru: 'Декларация о намерениях и ТЭО наливных эстакад конденсата и СУГ (2007).', kz: 'Конденсат пен СҰГ құю эстакадаларына арналған ниет декларациясы және ТЭН (2007).' }
    ]
  },
  {
    titleEn: 'CPC Pipeline Expansion',
    titleRu: 'Расширение трубопровода КТК',
    titleKz: 'КТК Құбырын кеңейту',
    client: 'CPC Pipeline / TechnipFMC',
    descEn: 'Detail design of Atyrau Oil Pump Station and 116-204 km pipeline section; development, approval, and field supervision of 0–116 km pipeline construction for the Caspian Pipeline Consortium expansion in Kazakhstan.',
    descRu: 'Рабочая документация Атырауской НПС и участка трубопровода 116-204 км; разработка, согласование и полевой надзор строительства 0-116 км трубопровода в рамках расширения КТК в РК.',
    descKz: 'Атырау МАС-ының жұмыс құжаттамасы және 116-204 км құбыр учаскесі; Қазақстандағы КТК кеңейту жобасы аясында 0-116 км құбыр салуды дайындау, келісу және далалық қадағалау.',
    period: '2006 – 2008',
    scope: { en: 'Detail Design & Field Supervision', ru: 'Рабочая документация и Полевой надзор', kz: 'Жұмыс құжаттамасы және Далалық қадағалау' },
    category: { en: 'Pipeline', ru: 'Трубопроводы', kz: 'Құбыр желілері' },
    type: 'pipeline',
    img: '/images/objects/КТК Атырау.webp',
    clients: [
      { name: 'TechnipFMC', logo: '/images/clients/technipfmc.png' }
    ],
    details: [
      { en: 'CPC Expansion in RK — Detail design of Atyrau OPS and pipeline 116-204 km (2006-2008).', ru: 'Расширение КТК в РК — Рабочая документация НПС Атырау, трубопровода 116-204 км (2006-2008).', kz: 'ҚР-дағы КТК кеңеюі — Атырау МАС-ы және 116-204 км құбыр жұмыс құжаттамасы (2006-2008).' },
      { en: 'CPC Expansion — Development, approval, and author supervision of 0-116 km pipeline construction (2006-2008).', ru: 'Расширение КТК — Разработка, согласование и авторский надзор строительства 0-116 км трубопровода (2006-2008).', kz: 'КТК кеңеюі — 0-116 км құбыр құрылысын дайындау, келісу және авторлық қадағалау (2006-2008).' },
      { en: 'Declaration of Intentions and Investment Justification for Kazakhstan-Caspian Pipeline System (Yeskene-Kuryk, 760 km) (2006).', ru: 'Декларация о намерениях и ТЭО Казахстано-Каспийской трубопроводной системы «Западное Ескене-Курык», 760 км (2006).', kz: 'Қазақстан-Каспий құбыр жүйесі («Батыс Ескене-Құрық», 760 км) ниет декларациясы және ТЭН (2006).' }
    ]
  },
  {
    titleEn: 'Dunga Field — Full Field Development',
    titleRu: 'Месторождение Дунга — Полное обустройство',
    titleKz: 'Доңға кен орны — Толық жайластыру',
    client: 'Maersk Oil Kazakhstan GmbH',
    descEn: 'Project and detail design, EIA, and field supervision for associated gas treatment, wellhead installation and oil gathering system upgrades, and full field development documentation at the Dunga Central Gathering Facility.',
    descRu: 'Проектная и рабочая документация, ОВОС и полевой надзор для установки подготовки ПНГ, обновления системы сбора нефти и устьевого оборудования, документация полного обустройства Дунга ЦПС.',
    descKz: 'ІМГ дайындау нысанының жобалық және жұмыс құжаттамасы, ҚОӘБ және далалық қадағалау; мұнай жинау жүйесін және ұңғыма басы жабдықтарын жаңарту; Доңға ОЖС-ның толық жайластыру құжаттамасы.',
    period: '2007 – 2010',
    scope: { en: 'Design, EIA & Supervision', ru: 'Проектирование, ОВОС и надзор', kz: 'Жобалау, ҚОӘБ және қадағалау' },
    category: { en: 'Onshore', ru: 'Наземные', kz: 'Жердегі' },
    type: 'onshore',
    img: '/images/objects/Месторождение Дунга.jpg',
    clients: [
      { name: 'Maersk Oil Kazakhstan GmbH', logo: '/images/clients/maersk-oil.jpg' }
    ],
    details: [
      { en: 'Project & working documentation incl. EIA for Associated Petroleum Gas treatment at Dunga (2007-2008).', ru: 'Проект и рабочая документация, в т.ч. ОВОС, для объекта «Подготовка ПНГ на месторождении Дунга» (2007-2008).', kz: 'Доңға кен орнындағы ілеспе мұнай газын дайындау нысанының жобалық және жұмыс құжаттамасы (2007-2008).' },
      { en: 'Wellhead facility & oil gathering/transportation system at Dunga CGF; PPD pipelines; author supervision (2007-2010).', ru: 'Обустройство устьев скважин, система сбора и транспорта нефти на ЦПС Дунга; трубопроводы ППД; авторский надзор (2007-2010).', kz: 'Доңға ОЖС-ындағы ұңғыма басы, мұнай жинау/тасымалдау жүйесі; ҚҚА құбырлары; авторлық қадағалау (2007-2010).' },
      { en: 'Full Field Development design documentation and author supervision at Dunga.', ru: 'ПСД и авторский надзор полномасштабного освоения месторождения Дунга.', kz: 'Доңға кен орнын толықмасштабты игеру жобалық-сметалық құжаттамасы және авторлық қадағалау.' }
    ]
  },
  {
    titleEn: 'Alibekmola Field Development',
    titleRu: 'Месторождение Алибекмола',
    titleKz: 'Әлібекмола кен орны',
    client: 'KazakhOil Aktobe LLP',
    descEn: 'Comprehensive development of the Alibekmola oil-gas-condensate field: detail designs for SPPD, CPGTU (3 mln t/year), auxiliary facilities and gas treatment unit, plus the gas pipeline from Alibekmola GPF-50 to Zhanazhol-KS-13.',
    descRu: 'Комплексное обустройство Алибекмолы: рабочие проекты СППД, ЦППНГ (3 млн т/год), объектов вспомогательного назначения и УПТГ; газопровод от УКПГ-50 Алибекмола до Жанажол-КС-13.',
    descKz: 'Әлібекмола кен орнының кешенді жайластыруы: СППД, ЦППНГ (3 млн т/жыл), қосалқы нысандар және УПТГ жұмыс жобалары; ГӨЗ-50 Әлібекмоладан Жаңажол-ҚС-13-ке дейінгі газ құбыры.',
    period: '2004 – 2014',
    scope: { en: 'Field Development & Pipeline Design', ru: 'Обустройство месторождения и проектирование газопровода', kz: 'Кен орнын жайластыру және газ құбырын жобалау' },
    category: { en: 'Pipeline', ru: 'Трубопроводы', kz: 'Құбыр желілері' },
    type: 'pipeline',
    img: '/images/objects/Месторождение Алибекмола.jpg',
    clients: [
      { name: 'KazakhOil Aktobe LLP', logo: '/images/clients/kazakhoil-aktobe.png' }
    ],
    details: [
      { en: 'Working designs for full field development incl. SPPD, CPGTU (up to 3 mln t/y), auxiliary facilities & GTU; author supervision (2004-2009).', ru: 'Рабочие проекты комплексного обустройства: СППД, ЦППНГ (до 3 млн т/год), вспомогательные объекты, УПТГ; авторский надзор (2004-2009).', kz: 'Кешенді жайластыру жұмыс жобалары: СППД, ЦППНГ (3 млн т/жылға дейін), қосалқы нысандар, УПТГ; авторлық қадағалау (2004-2009).' },
      { en: 'Construction management and engineering consulting for EPC participants (2004-2009).', ru: 'Управление строительством, инжиниринговый консалтинг Заказчика и участников ЕРС-контракта (2004-2009).', kz: 'Құрылысты басқару, Тапсырыс беруші мен ЕРС-келісімшарт қатысушыларына инжинирингтік консалтинг (2004-2009).' },
      { en: 'FS for joint Alibekmola & Kozhasai field development (2006).', ru: 'ТЭО «Комплексное обустройство месторождений Алибекмола и Кожасай» (2006).', kz: '«Әлібекмола және Қожасай кен орындарын кешенді жайластыру» ТЭН (2006).' },
      { en: 'Associated gas utilization program for Alibekmola & Kozhasai (2006).', ru: 'Программа утилизации попутного нефтяного газа Алибекмола и Кожасай (2006).', kz: 'Әлібекмола және Қожасай ілеспе мұнай газын пайдалану бағдарламасы (2006).' },
      { en: 'Updated technological scheme — design & author supervision (2010-2011).', ru: 'Проект «Комплексное обустройство по уточнённой технологической схеме»; авторский надзор (2010-2011).', kz: 'Нақтыланған технологиялық схема бойынша кешенді жайластыру жобасы; авторлық қадағалау (2010-2011).' },
      { en: 'Gas pipeline from Alibekmola GPF-50 to Zhanazhol-KS-13 (2010-2014).', ru: 'Газопровод от УКПГ-50 Алибекмола до участка Жанажол-КС-13 (2010-2014).', kz: 'Әлібекмола ГӨЗ-50-нан Жаңажол-ҚС-13 учаскесіне дейін газ құбыры (2010-2014).' }
    ]
  },
  {
    titleEn: 'Severnye Buzachi Field',
    titleRu: 'Месторождение Северные Бузачи',
    titleKz: 'Солтүстік Бұзашы кен орны',
    client: 'Buzachi Operating Ltd.',
    descEn: 'Modernization and full-scale development of the Severnye Buzachi field — concept design through 2021, GTU and compressor station construction, gas pipeline to Karazhanbas, and EPF-1/EPF-2 expansion.',
    descRu: 'Модернизация и промышленная разработка месторождения Северные Бузачи: концептуально-технологический проект до 2021 года, УПГ и компрессорная станция, газопровод до Каражанбаса, расширение УПСВ-1 и УПСВ-2.',
    descKz: 'Солтүстік Бұзашы кен орнын жаңғырту және өнеркәсіптік игеру: 2021 жылға дейінгі тұжырымдамалық-технологиялық жоба, ГӨҚ және компрессорлық станса, Қаражанбас газ құбыры, УПСВ-1 және УПСВ-2 кеңейту.',
    period: '2004 – 2016',
    scope: { en: 'Concept, Design & Author Supervision', ru: 'Концепция, проектирование и Авторский надзор', kz: 'Тұжырымдама, жобалау және Авторлық қадағалау' },
    category: { en: 'Onshore', ru: 'Наземные', kz: 'Жердегі' },
    type: 'onshore',
    img: '/images/objects/Месторождение Северные Бузачи.jpg',
    clients: [
      { name: 'Buzachi Operating Ltd.', logo: '/images/clients/buzachi-operating.png' }
    ],
    details: [
      { en: 'Modernization design at EP stage (2004-2006).', ru: 'Проект модернизации системы обустройства на стадии ОПР (2004-2006).', kz: 'ТӨӨ кезеңінде жайластыру жүйесін жаңғырту жобасы (2004-2006).' },
      { en: 'Conceptual & technological project for industrial development through 2021 (2010).', ru: 'Концептуально-технологический проект обустройства до 2021 года (2010).', kz: '2021 жылға дейінгі тұжырымдамалық-технологиялық жайластыру жобасы (2010).' },
      { en: 'GTU, compressor station, related equipment & utilities; Severnye Buzachi–Karazhanbas gas pipeline (2010-2012).', ru: 'УПГ, компрессорная станция, оборудование и коммуникации; газопровод «Северные Бузачи-Каражанбас» (2010-2012).', kz: 'ГӨҚ, компрессорлық станса, жабдық пен коммуникациялар; «Солтүстік Бұзашы-Қаражанбас» газ құбыры (2010-2012).' },
      { en: 'EPF-1 expansion and EPF-2 construction with EIA; author supervision (2011-2016).', ru: 'Расширение УПСВ-1 и строительство УПСВ-2 с ОВОС; авторский надзор (2011-2016).', kz: 'УПСВ-1 кеңейту және УПСВ-2 құрылысы (ҚОӘБ); авторлық қадағалау (2011-2016).' },
      { en: 'Phase III pipeline design — Volga water pipeline for industrial development (2008).', ru: 'Проектные работы Фазы III — трубопровод волжской воды для промышленной разработки (2008).', kz: 'III фазасы құбыр жұмыстары — өнеркәсіптік игеруге арналған Еділ суы құбыры (2008).' }
    ]
  },
  {
    titleEn: 'Chinarevskoye Field',
    titleRu: 'Чинаревское месторождение',
    titleKz: 'Шынарево кен орны',
    client: 'Zhaikmunai LLP / Nostrum Oil & Gas',
    descEn: 'OPF design and author supervision; Chinarevskoye–Rostoshi oil pipeline; trunk pump station detail design; complete oil & gas gathering and processing facilities at the GPCU.',
    descRu: 'Проект УПН и авторский надзор; нефтепровод Чинаревское НГКМ – Ростоши; рабочий проект Магистральной насосной станции; объекты сбора и подготовки нефти и газа на УКПНГ.',
    descKz: 'МДҚ жобасы және авторлық қадағалау; Шынарево МГКӨ – Ростоши мұнай құбыры; Магистральдық сорғы стансасының жұмыс жобасы; МжГКДҚ-дағы мұнай-газ жинау және дайындау нысандары.',
    period: '2004 – 2018',
    scope: { en: 'Design & Author Supervision', ru: 'Проектирование и Авторский надзор', kz: 'Жобалау және Авторлық қадағалау' },
    category: { en: 'Onshore', ru: 'Наземные', kz: 'Жердегі' },
    type: 'onshore',
    img: '/images/objects/Чинаревское Месторождение.jpg',
    clients: [
      { name: 'Nostrum Oil & Gas (Zhaikmunai)', logo: '/images/clients/nostrum-oil.png' }
    ],
    details: [
      { en: 'FS for LPG transportation and transshipment (2007).', ru: 'ТЭО транспортировки и перевалки СУГ (2007).', kz: 'СҰГ тасымалдау және ауыстырып тиеу ТЭН (2007).' },
      { en: 'OPF design and author supervision (2004-2006).', ru: 'Проект УПН, авторский надзор (2004-2006).', kz: 'МДҚ жобасы, авторлық қадағалау (2004-2006).' },
      { en: 'Chinarevskoye OGCF – Rostoshi oil pipeline design & author supervision (2004-2006).', ru: 'Проект нефтепровода Чинаревское НГКМ – Ростоши, авторский надзор (2004-2006).', kz: 'Шынарево МГКӨ – Ростоши мұнай құбыры жобасы, авторлық қадағалау (2004-2006).' },
      { en: 'Trunk Pump Station working project (2006-2009).', ru: 'Рабочий проект Магистральной насосной станции (2006-2009).', kz: 'Магистральдық сорғы стансасының жұмыс жобасы (2006-2009).' },
      { en: 'Oil & gas gathering and processing facilities at the GPCU — projects and working documentation (2006-2018).', ru: 'Проекты, рабочие проекты и рабочая документация объектов сбора и подготовки нефти и газа на УКПНГ (2006-2018).', kz: 'МжГКДҚ-дағы мұнай-газ жинау және дайындау нысандарының жобалары мен жұмыс құжаттамасы (2006-2018).' }
    ]
  },
  {
    titleEn: 'Western Prorva Field — Sulfur Removal Unit',
    titleRu: 'Месторождение Западная Прорва — УКПГ',
    titleKz: 'Батыс Прорва кен орны — Күкірт тазалау',
    client: 'KERNEU Limited LLP',
    descEn: 'Project and working documentation for the Sulfur Removal Unit for associated petroleum gas across the Prorva Group of Fields (GPCU).',
    descRu: 'Проект и рабочая документация установки сероочистки попутного нефтяного газа Прорвинской группы месторождений (УКПГ).',
    descKz: 'Прорва кен орындары тобының ілеспе мұнай газын күкіртсіздендіру қондырғысының жобасы және жұмыс құжаттамасы (УКПГ).',
    period: '2014 – 2018',
    scope: { en: 'Design & Working Documentation', ru: 'Проект и Рабочая документация', kz: 'Жоба және жұмыс құжаттамасы' },
    category: { en: 'Onshore', ru: 'Наземные', kz: 'Жердегі' },
    type: 'onshore',
    img: '/images/objects/Месторождение Западная прорва.jpg',
    clients: [
      { name: 'KERNEU Limited LLP', logo: '/images/clients/kerneu.png' }
    ],
    details: [
      { en: 'Project and working documentation: Sulfur removal unit for associated petroleum gas, Prorva Group of Fields GPCU (2014-2018).', ru: 'Проект и рабочая документация «Установка сероочистки ПНГ Прорвинской группы месторождений (УКПГ)» (2014-2018).', kz: '«Прорва тобы кен орындарының ілеспе мұнай газын күкіртсіздендіру қондырғысы (УКПГ)» жобасы және жұмыс құжаттамасы (2014-2018).' }
    ]
  },
  {
    titleEn: 'KCOI Steel Structures Plant & Quay',
    titleRu: 'Завод металлоконструкций и причал КМОИ',
    titleKz: 'КМОИ металл конструкциялар зауыты және айлақ',
    client: 'Kazakhstan Caspian Offshore Industries (KCOI)',
    descEn: 'Development, approval, and author supervision of project and detailed design for the Steel Structures Plant with Quay in Tyub-Karagansky district, Mangystau Province.',
    descRu: 'Разработка, согласование и авторский надзор проектной и рабочей документации завода металлоконструкций с причалом в Тюб-Караганском районе Мангистауской области.',
    descKz: 'Маңғыстау облысы Түп-Қараған ауданындағы айлағы бар металл конструкциялар зауытының жобалық және жұмыс құжаттамасын әзірлеу, келісу және авторлық қадағалау.',
    period: '2009 – 2011',
    scope: { en: 'Design & Author Supervision', ru: 'Проектирование и Авторский надзор', kz: 'Жобалау және Авторлық қадағалау' },
    category: { en: 'Infrastructure', ru: 'Инфраструктура', kz: 'Инфрақұрылым' },
    type: 'infrastructure',
    img: '/images/objects/KCOI company.jpg',
    clients: [
      { name: 'Kazakhstan Caspian Offshore Industries', logo: '/images/clients/kcoi.png' }
    ],
    details: [
      { en: 'Project documentation, working documentation and author supervision for Steel Structures Plant with Quay, Tyub-Karagansky district (2009-2011).', ru: 'Проектная и рабочая документация, авторский надзор Завода металлоконструкций с причалом в Тюб-Караганском районе (2009-2011).', kz: 'Түп-Қараған ауданында айлағы бар металл конструкциялар зауытының жобалық, жұмыс құжаттамасы және авторлық қадағалау (2009-2011).' }
    ]
  },
  {
    titleEn: 'Infrastructure Facilities',
    titleRu: 'Инфраструктурные объекты',
    titleKz: 'Инфрақұрылым нысандары',
    client: 'Multiple operators',
    descEn: 'Multiple infrastructure programs across Kazakhstan — Baut­ino offshore support base, vehicle repair bases at Karazhanbas / Kalamkas / Uzen, Shymkent Refinery modernization FS, and Atyrau Refinery reconstruction documentation.',
    descRu: 'Серия инфраструктурных программ по Казахстану — база поддержки морских операций в Баутино, ремонтные базы на Каражанбасе/Каламкасе/Узене, ТЭО реконструкции Шымкентского НПЗ, ПСД реконструкции Атырауского НПЗ.',
    descKz: 'Қазақстан бойынша инфрақұрылым бағдарламалары — Баутинодағы теңіздегі қолдау базасы, Қаражанбас/Қаламқас/Өзен жөндеу базалары, Шымкент МӨЗ-нің жаңғырту ТЭН-і, Атырау МӨЗ-нің қайта құру ЖСҚ.',
    period: '2004 – 2014',
    scope: { en: 'Design, FS & Author Supervision', ru: 'Проектирование, ТЭО и Авторский надзор', kz: 'Жобалау, ТЭН және Авторлық қадағалау' },
    category: { en: 'Infrastructure', ru: 'Инфраструктура', kz: 'Инфрақұрылым' },
    type: 'infrastructure',
    img: '/images/objects/Инфраструктурные объекты.jpg',
    clients: [
      { name: 'Atyrau Refinery', logo: '/images/clients/atyrau-npz.png' },
      { name: 'Teniz Service', logo: '/images/clients/teniz-service.png' },
      { name: 'Honeywell-ACS (PKOP)', logo: '/images/clients/honeywell-asu.png' }
    ],
    details: [
      { en: 'NefteStroyService — repair bases for 250 units (Karazhanbas) and 100 units (Kalamkas) (2012-2013).', ru: 'НефтеСтройСервис — ремонтные базы на 250 ед. (Каражанбас) и 100 ед. (Каламкас) (2012-2013).', kz: 'НефтеСтройСервис — Қаражанбаста 250 және Қаламқаста 100 бірлікке жөндеу базалары (2012-2013).' },
      { en: '«Oil Transport Corporation» — production base for 600 vehicles at Kalamkas field (2012-2014).', ru: '«Ойл Транспорт Корпорейшэн» — производственно-техническая база на 600 ед. на м/р Каламкас (2012-2014).', kz: '«Ойл Транспорт Корпорейшэн» — Қаламқас кен орнында 600 бірлік өндірістік-техникалық база (2012-2014).' },
      { en: 'Auto-service Center for 1000 units at Uzen field (2012-2014).', ru: 'Автосервисный центр на 1000 единиц техники на м/р Узень (2012-2014).', kz: 'Өзен кен орнында 1000 бірлікке арналған автосервис орталығы (2012-2014).' },
      { en: 'Teniz Service — Bautino offshore operations support base (2005-2006); toxic industrial waste landfill with oily wastewater treatment (2007-2008).', ru: 'ТенизСервис — база поддержки морских операций в Баутино (2005-2006); полигон для токсичных отходов с утилизацией нефтесодержащих стоков (2007-2008).', kz: 'ТенизСервис — Баутинодағы теңіз операцияларын қолдау базасы (2005-2006); мұнайлы ағындыларды кәдеге жаратумен улы өндіріс қалдықтары полигоны (2007-2008).' },
      { en: 'PKOP / Honeywell-ACS — FS and Pre-EIA for Shymkent Refinery modernization (2009).', ru: 'ПКОП, АО «Ханиуэлл-АСУ» — ТЭО и ПредОВОС модернизации и реконструкции Шымкентского НПЗ (2009).', kz: 'ПКОП, «Ханиуэлл-АСУ» — Шымкент МӨЗ-ін жаңғырту және қайта құру ТЭН-і мен Алдын-ала ҚОӘБ (2009).' },
      { en: 'Atyrau Refinery — reconstruction design documentation and infrastructure objects (2004-2006).', ru: 'Атырауский НПЗ — ПСД на реконструкцию и инфраструктурные объекты АНПЗ (2004-2006).', kz: 'Атырау МӨЗ — қайта құру ЖСҚ және инфрақұрылым нысандары (2004-2006).' }
    ]
  },
  {
    titleEn: 'Other Field Development Projects',
    titleRu: 'Другие проекты освоения месторождений',
    titleKz: 'Кен орындарын игерудің басқа жобалары',
    client: 'KarazhanbasMunai / KarakudukMunai / Ken-Sary / others',
    descEn: 'Diverse program of project documentation, working designs, EIA, gas utilization programs and author supervision for the Karazhanbas, Karakuduk and Arystanovskoye fields and others across Kazakhstan.',
    descRu: 'Серия проектов: проектная и рабочая документация, ОВОС, программы утилизации газа и авторский надзор для месторождений Каражанбас, Каракудук, Арыстановское и других в Казахстане.',
    descKz: 'Қаражанбас, Қарақұдық, Арыстан және басқа кен орындары үшін жобалық және жұмыс құжаттамасы, ҚОӘБ, газды пайдалану бағдарламалары және авторлық қадағалау.',
    period: '2004 – 2013',
    scope: { en: 'Design, EIA, Gas Utilization & Author Supervision', ru: 'Проектирование, ОВОС, утилизация газа и Авторский надзор', kz: 'Жобалау, ҚОӘБ, газды пайдалану және Авторлық қадағалау' },
    category: { en: 'Onshore', ru: 'Наземные', kz: 'Жердегі' },
    type: 'onshore',
    img: '/images/objects/Другие объекты.jpg',
    clients: [
      { name: 'KarazhanbasMunai', logo: '/images/clients/karazhanbas-munai.png' },
      { name: 'KarakudukMunai LLP', logo: '/images/clients/karakuduk-munai.png' },
      { name: 'NC KazMunayGas', logo: '/images/clients/nc-kazmunaigas.png' },
      { name: 'MangistauMunaiGas', logo: '/images/clients/mangistaumunaigas.png' }
    ],
    details: [
      { en: 'KarazhanbasMunai — design documentation and author supervision for facility construction at Karazhanbas (2004-2005).', ru: 'КаражанбасМунай — ПСД для строительства объектов месторождения Каражанбас, авторский надзор (2004-2005).', kz: 'КаражанбасМунай — Қаражанбас кен орнының нысандарын салуға ЖСҚ, авторлық қадағалау (2004-2005).' },
      { en: 'KarakudukMunai — reconstruction of oil & gas gathering/treatment system; working project (2006-2008).', ru: 'КаракудукМунай — реконструкция системы сбора и подготовки нефти и газа, рабочий проект (2006-2008).', kz: 'КаракудукМунай — мұнай-газ жинау/дайындау жүйесін қайта құру, жұмыс жобасы (2006-2008).' },
      { en: 'KarakudukMunai — Gas Utilization Program development and approval (2006).', ru: 'КаракудукМунай — Программа утилизации газа (2006).', kz: 'КаракудукМунай — газды кәдеге жарату бағдарламасы (2006).' },
      { en: 'KarakudukMunai — Associated gas utilization facilities project & working documentation; author supervision (2007-2009).', ru: 'КаракудукМунай — Проект и рабочая документация утилизации попутного газа; авторский надзор (2007-2009).', kz: 'КаракудукМунай — ілеспе газды кәдеге жарату нысандарының жобасы және авторлық қадағалау (2007-2009).' },
      { en: 'Ken-Sary LLP — Project, EIA and working documentation for GTU and gas pipeline at Arystanovskoye field; author supervision (2012-2013).', ru: 'ТОО «Кен-Сары» — Проект, ОВОС и рабочая документация УПГ и газопровода Арыстановское; авторский надзор (2012-2013).', kz: '«Кен-Сары» — Арыстан кен орны ГӨҚ және газ құбыры жобасы, ҚОӘБ және жұмыс құжаттамасы; авторлық қадағалау (2012-2013).' }
    ]
  }
]

const filteredProjects = computed(() => {
  if (activeTab.value === 'all') return projects
  return projects.filter(p => p.type === activeTab.value)
})
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
  max-width: 540px;
}

.portfolio-filter-sec {
  padding: 40px 0 0;
  border-bottom: 1.5px solid var(--gray-200);
}

.filter-tabs {
  display: flex;
  gap: 4px;
  overflow-x: auto;
}

.filter-tab {
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--gray-500);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
  cursor: pointer;
  margin-bottom: -2px;
  white-space: nowrap;
}

.filter-tab:hover { color: var(--dark); }

.filter-tab.active {
  color: var(--dark);
  border-bottom-color: var(--dark);
  font-weight: 600;
}

.portfolio-grid-sec {
  padding: 60px 0 100px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.project-card-full {
  border-radius: 20px;
  overflow: hidden;
  border: 1.5px solid var(--gray-200);
  background: var(--white);
  transition: box-shadow 0.3s, transform 0.3s;
  padding: 0;
  text-align: left;
  font-family: inherit;
  cursor: pointer;
  display: block;
  width: 100%;
}

.project-card-full:hover {
  box-shadow: 0 8px 40px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.pcf-img-wrap {
  position: relative;
  overflow: hidden;
}

.pcf-img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 0.4s;
  display: block;
}

.project-card-full:hover .pcf-img {
  transform: scale(1.03);
}

.pcf-overlay {
  position: absolute;
  top: 16px;
  left: 16px;
}

.pcf-tag {
  padding: 5px 12px;
  background: var(--accent);
  color: var(--on-accent);
  font-size: 11px;
  font-weight: 600;
  border-radius: 100px;
}

.pcf-hover {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 16px;
  background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card-full:hover .pcf-hover { opacity: 1; }

.pcf-view {
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2px;
}

.pcf-info {
  padding: 24px;
}

.pcf-client {
  font-size: 11px;
  font-weight: 600;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.pcf-title {
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.4px;
  color: var(--dark);
  margin-bottom: 10px;
}

.pcf-desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--gray-500);
  margin-bottom: 16px;
}

.pcf-logos {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.pcf-logo {
  height: 26px;
  max-width: 90px;
  object-fit: contain;
  filter: grayscale(1);
  opacity: 0.7;
  transition: filter 0.2s, opacity 0.2s;
}

.project-card-full:hover .pcf-logo {
  filter: none;
  opacity: 1;
}

.pcf-stats {
  display: flex;
  gap: 24px;
  border-top: 1.5px solid var(--gray-200);
  padding-top: 16px;
  flex-wrap: wrap;
}

.pcf-stat {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.pcf-stat-lbl {
  font-size: 10px;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.pcf-stat-val {
  font-size: 13px;
  font-weight: 600;
  color: var(--dark);
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(10, 12, 16, 0.7);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow-y: auto;
}

.modal-window {
  background: var(--white);
  border-radius: 24px;
  width: 100%;
  max-width: 960px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  position: relative;
  box-shadow: 0 30px 80px rgba(0,0,0,0.4);
}

.modal-close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
  border: none;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  color: var(--dark);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.2s;
}

.modal-close:hover { background: #fff; }

.modal-hero {
  position: relative;
  height: 320px;
  overflow: hidden;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

.modal-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.75) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  color: #fff;
}

.modal-hero-overlay .pcf-tag {
  align-self: flex-start;
  margin-bottom: 16px;
}

.modal-title {
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  letter-spacing: -0.6px;
  line-height: 1.15;
  margin-bottom: 6px;
}

.modal-period {
  font-size: 14px;
  opacity: 0.85;
}

.modal-body {
  padding: 32px 40px 40px;
}

.modal-meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding-bottom: 24px;
  border-bottom: 1.5px solid var(--gray-200);
  margin-bottom: 28px;
}

.modal-meta-lbl {
  font-size: 11px;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.modal-meta-val {
  font-size: 14px;
  font-weight: 600;
  color: var(--dark);
}

.modal-section {
  margin-bottom: 32px;
}

.modal-section:last-child { margin-bottom: 0; }

.modal-h3 {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--dark);
  margin-bottom: 14px;
}

.modal-text {
  font-size: 15px;
  line-height: 1.7;
  color: var(--gray-500);
}

.modal-clients {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
}

.modal-client {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 18px 14px;
  border: 1.5px solid var(--gray-200);
  border-radius: 14px;
  background: var(--white);
}

.modal-client-logo {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-client-logo img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.modal-client-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--dark);
  text-align: center;
  line-height: 1.4;
}

.modal-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.modal-list li {
  position: relative;
  padding-left: 22px;
  font-size: 14px;
  line-height: 1.65;
  color: var(--dark);
}

.modal-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-active .modal-window, .modal-leave-active .modal-window {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .modal-window, .modal-leave-to .modal-window {
  transform: translateY(20px);
  opacity: 0;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  .modal-body { padding: 24px; }
  .modal-hero { height: 220px; }
  .modal-hero-overlay { padding: 20px; }
  .modal-meta { grid-template-columns: 1fr; gap: 16px; }
}
</style>
