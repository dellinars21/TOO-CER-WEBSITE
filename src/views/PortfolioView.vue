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
          <div class="project-card-full" v-for="p in filteredProjects" :key="p.titleEn">
            <div class="pcf-img-wrap">
              <img :src="p.img" :alt="t(p.titleEn, p.titleRu, p.titleKz)" class="pcf-img" />
              <div class="pcf-overlay">
                <span class="pcf-tag">{{ t(p.category.en, p.category.ru, p.category.kz) }}</span>
              </div>
            </div>
            <div class="pcf-info">
              <div class="pcf-client">{{ p.client }}</div>
              <h3 class="pcf-title">{{ t(p.titleEn, p.titleRu, p.titleKz) }}</h3>
              <p class="pcf-desc">{{ t(p.descEn, p.descRu, p.descKz) }}</p>
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
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
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
    img: '/images/objects/Месторождение Кашаган.jpg'
  },
  {
    titleEn: 'Tengiz Field — FGP/WPMP',
    titleRu: 'Месторождение Тенгиз — FGP/WPMP',
    titleKz: 'Теңіз кен орны — FGP/WPMP',
    client: 'Tengizchevroil LLP (TCO)',
    descEn: 'Feasibility study, GTPD, regulatory consulting, and author supervision for TCO\'s Tengiz Field Future Growth Project (FGP/WPMP) — one of the largest oil & gas capital projects in Kazakhstan history.',
    descRu: 'ТЭО, ОППД, регуляторный консалтинг и авторский надзор для проекта расширения Тенгиз (FGP/WPMP) — одного из крупнейших инвестиционных нефтегазовых проектов в истории Казахстана.',
    descKz: 'ТЭН, ЖТҚ, реттеуші консалтинг және авторлық қадағалау ТШО-ның Теңіз кен орнын дамыту жобасы (FGP/WPMP) үшін — Қазақстан тарихындағы ең ірі инвестициялық мұнай-газ жобаларының бірі.',
    period: '2009 – 2025',
    scope: { en: 'Consulting & Author Supervision', ru: 'Консалтинг и Авторский надзор', kz: 'Консалтинг және Авторлық қадағалау' },
    category: { en: 'Onshore', ru: 'Наземные', kz: 'Жердегі' },
    type: 'onshore',
    img: '/images/objects/Месторождение Тенгиз.jpg'
  },
  {
    titleEn: 'CPC Pipeline Expansion',
    titleRu: 'Расширение трубопровода КТК',
    titleKz: 'КТК Құбырын кеңейту',
    client: 'CPC Pipeline',
    descEn: 'Detail design of Atyrau Oil Pump Station and 116-204 km pipeline section; development, approval, and field supervision of 0–116 km pipeline construction for the Caspian Pipeline Consortium expansion in Kazakhstan.',
    descRu: 'Рабочая документация Атырауской НПС и участка трубопровода 116-204 км; разработка, согласование и полевой надзор строительства 0-116 км трубопровода в рамках расширения КТК в Казахстане.',
    descKz: 'Атырау МАС-ының жұмыс құжаттамасы және 116-204 км құбыр учаскесі; Қазақстандағы КТК кеңейту жобасы аясында 0-116 км құбыр салуды разработка, келісу және далалық қадағалау.',
    period: '2006 – 2008',
    scope: { en: 'Detail Design & Field Supervision', ru: 'Рабочая документация и Полевой надзор', kz: 'Жұмыс құжаттамасы және Далалық қадағалау' },
    category: { en: 'Pipeline', ru: 'Трубопроводы', kz: 'Құбыр желілері' },
    type: 'pipeline',
    img: '/images/objects/КТК Атырау.webp'
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
    img: '/images/objects/Месторождение Дунга.jpg'
  },
  {
    titleEn: 'Alibekmola Gas Pipeline',
    titleRu: 'Газопровод Алибекмола',
    titleKz: 'Әлібекмола газ құбыры',
    client: 'KazakhOil Aktobe LLP',
    descEn: 'Design of gas pipeline for transportation of sales gas from Alibekmola GPF-50 to the Zhanazhol-KS-13 trunk pipeline section.',
    descRu: 'Проектирование газопровода для транспортировки товарного газа от Алибекмольского ГПЗ-50 до участка магистрального трубопровода Жанажол-КС-13.',
    descKz: '"Әлібекмола ГӨЗ-50"-нан "Жаңажол-ҚС-13" магистральды құбыры учаскесіне дейін тауарлық газ тасымалдауға арналған газ құбырын жобалау.',
    period: '2010 – 2014',
    scope: { en: 'Pipeline Design', ru: 'Проектирование газопровода', kz: 'Газ құбырын жобалау' },
    category: { en: 'Pipeline', ru: 'Трубопроводы', kz: 'Құбыр желілері' },
    type: 'pipeline',
    img: '/images/objects/Месторождение Алибекмола.jpg'
  },
  {
    titleEn: 'KCOI Steel Structures Plant & Quay',
    titleRu: 'Завод металлоконструкций и причал КМОИ',
    titleKz: 'КМОИ металл конструкциялар зауыты және айлақ',
    client: 'Kazakhstan Caspian Offshore Industries (KCOI)',
    descEn: 'Development, approval, and author supervision of project and detailed design for Steel Structures Plant with Quay in Tyub-Karaganskiy district, Mangystau Province.',
    descRu: 'Разработка, согласование и авторский надзор проектной и рабочей документации для завода металлоконструкций с причалом в Тюб-Кирганском районе Мангистауской области.',
    descKz: 'Маңғыстау облысы Түп-Қараған ауданындағы айлағы бар металл конструкциялар зауытының жобалық және жұмыс құжаттамасын әзірлеу, келісу және авторлық қадағалау.',
    period: '2009 – 2011',
    scope: { en: 'Design & Author Supervision', ru: 'Проектирование и Авторский надзор', kz: 'Жобалау және Авторлық қадағалау' },
    category: { en: 'Infrastructure', ru: 'Инфраструктура', kz: 'Инфрақұрылым' },
    type: 'infrastructure',
    img: '/images/objects/KCOI company.jpg'
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
  transition: box-shadow 0.3s;
}

.project-card-full:hover {
  box-shadow: 0 8px 40px rgba(0,0,0,0.1);
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
  margin-bottom: 20px;
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

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>
