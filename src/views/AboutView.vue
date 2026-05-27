<template>
  <main>

    <!-- ── HERO ─────────────────────────────────────────────────────── -->
    <section class="page-hero">
      <div class="container">
        <span class="page-badge">{{ t('About Us', 'О компании', 'Компания туралы') }}</span>
        <h1 class="page-title">
          {{ t('Engineering excellence', 'Инженерное', 'Инженерлік') }}<br />
          <em>{{ t('for Kazakhstan\'s energy sector', 'совершенство в нефтегазовом секторе', 'жоғары деңгей') }}</em>
        </h1>
        <p class="page-sub">
          {{ t(
            'Caspian Engineering & Research, LLP — established August 29, 2003 in Aktau, Kazakhstan. One of the leading engineering and consulting companies in the oil and gas sector of the Republic of Kazakhstan.',
            'ТОО «Caspian Engineering & Research» — учреждено 29 августа 2003 года в Актау, Казахстан. Одна из ведущих инжиниринговых и консалтинговых компаний нефтегазового сектора Республики Казахстан.',
            '«Caspian Engineering & Research» ЖШС — 2003 жылы 29 тамызда Ақтауда тіркелген. Қазақстан Республикасы мұнай және газ секторының жетекші инжинирингтік және консалтингтік компанияларының бірі.'
          ) }}
        </p>
      </div>
    </section>

    <!-- ── STORY ─────────────────────────────────────────────────────── -->
    <section class="about-story">
      <div class="container about-story-grid">
        <div class="story-img-wrap">
          <img
            src="/images/company.jpg"
            alt="Offshore platform"
            class="story-img"
          />
        </div>
        <div class="story-text">
          <h2>{{ t('About the Company', 'О компании', 'Компания туралы') }}</h2>
          <p>{{ t(
            'CE&R\'s profile includes work on the development of pre-design and design documentation of field development. The Company performs engineering works for the largest subsoil users in Kazakhstan for fields including Tengiz, Kashagan, Karachaganak, Alibekmola, Chinarevskoye, North Buzachi, Kalamkas, W.Prorva, Dunga, Arystanovskoye, Akshabulak, Karakuduk, and Karazhanbas.',
            'Профиль деятельности CE&R включает работы по разработке предпроектной и проектно-сметной документации обустройства месторождений. Компания выполняет проектные работы для крупнейших недропользователей Казахстана по месторождениям Тенгиз, Кашаган, Карачаганак, Алибекмола, Чинаревское, Северные Бузачи, Каламкас, Западная Прорва, Дунга, Арыстановское, Акшабулак, Каракудук, Каражанбас.',
            'CE&R-дің қызмет профилі алдын-ала жобалау және кен орындарын жайластырудың жобалық-сметалық құжаттамасын әзірлеу жұмыстарын қамтиды. Компания Теңіз, Қашаған, Қарашығанақ, Әлібекмола, Чинарев, Солтүстік Бозашы, Қаламқас, Батыс Прорва, Доңға, Арыстан, Ақшабұлақ, Қарақұдық, Қаражанбас кен орындарында жұмыс жасайды.'
          ) }}</p>
          <p>{{ t(
            'The Company values its business reputation and image. External relations are built on the basis of mutual respect, openness, honesty and responsibility. The reputation of an honest, open Company strictly adhering to high standards of corporate ethics is the key to its success and prosperity.',
            'Компания дорожит своей деловой репутацией и имиджем. Внешние отношения строятся на принципах взаимного уважения, открытости, добросовестности и ответственности. Репутация честной, открытой Компании, придерживающейся высоких стандартов корпоративной этики, — залог успеха и процветания.',
            'Компания өзінің іскерлік беделі мен имиджін бағалайды. Сыртқы қарым-қатынастар өзара сыйластық, ашықтық, адалдық және жауапкершілік принциптері негізінде құрылады. Корпоративтік этиканың жоғары стандарттарын ұстанатын адал, ашық Компанияның беделі – оның табысқа жетуінің кепілі.'
          ) }}</p>

          <div class="story-stats">
            <div class="story-stat">
              <span class="ss-num">20+</span>
              <span class="ss-label">{{ t('Years', 'Лет', 'Жыл') }}</span>
            </div>
            <div class="story-stat">
              <span class="ss-num">12</span>
              <span class="ss-label">{{ t('Major Fields', 'Крупных месторождений', 'Ірі кен орны') }}</span>
            </div>
            <div class="story-stat">
              <span class="ss-num">25+</span>
              <span class="ss-label">{{ t('Projects', 'Проектов', 'Жоба') }}</span>
            </div>
            <div class="story-stat">
              <span class="ss-num">4</span>
              <span class="ss-label">{{ t('Core Services', 'Основные услуги', 'Негізгі қызметтер') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── BUSINESS PARTNERS ─────────────────────────────────────────── -->
    <section class="partners-sec">
      <div class="container">
        <div class="section-header-row">
          <div>
            <span class="page-badge-light">{{ t('Business Partners', 'Партнёры', 'Іскерлік серіктестер') }}</span>
            <h2 class="section-title">
              {{ t('Trusted engineering network', 'Надёжная инженерная сеть', 'Сенімді инженерлік желі') }}
            </h2>
          </div>
          <p class="section-sub">
            {{ t(
              'CE&R collaborates with leading engineering institutes and specialized companies across Kazakhstan and internationally.',
              'CE&R сотрудничает с ведущими инженерными институтами и специализированными компаниями в Казахстане и за рубежом.',
              'CE&R Қазақстандағы және шетелдегі жетекші инженерлік институттармен және мамандандырылған компаниялармен ынтымақтасады.'
            ) }}
          </p>
        </div>
        <div class="partners-grid">
          <div class="partner-item" v-for="p in partners" :key="p.file" :title="p.name">
            <img :src="`/images/partners/${p.file}`" :alt="p.name" class="partner-logo" />
          </div>
        </div>
      </div>
    </section>

    <!-- ── QUALITY CERTIFICATIONS ─────────────────────────────────────── -->
    <section class="licenses-sec">
      <div class="container">
        <span class="page-badge-light">{{ t('Quality & Compliance', 'Качество и соответствие', 'Сапа және сәйкестік') }}</span>
        <h2 class="licenses-title">
          {{ t('Certified to international standards', 'Сертифицированы по международным стандартам', 'Халықаралық стандарттар бойынша сертификатталған') }}
        </h2>
        <p class="licenses-sub">
          {{ t(
            'The integrated quality system of the Company is certified for compliance with the requirements of international standards. Policy in quality, environment, health and safety declares obligations on unconditional compliance with standards and requirements of the Republic of Kazakhstan legislation.',
            'Интегрированная система качества Компании сертифицирована на соответствие требованиям международных стандартов. Политика в области качества, экологии, охраны здоровья и безопасности труда декларируют обязательства по безусловному соблюдению норм и требований законодательства РК.',
            'Компанияның Интегралданған Менеджмент Жүйесі халықаралық стандарттар талаптарына сәйкес сертификатталған. Сапа, экология, денсаулықты сақтау және еңбек қауіпсіздігі саясаты ҚР заңнамасының нормалары мен талаптарын мүлтіксіз сақтауды мәлімдейді.'
          ) }}
        </p>
        <div class="cert-grid">
          <div class="cert-card" v-for="c in certs" :key="c.code">
            <div class="cert-code">{{ c.code }}</div>
            <div class="cert-name">{{ t(c.nameEn, c.nameRu, c.nameKz) }}</div>
          </div>
        </div>

        <!-- License documents -->
        <h3 class="subsec-title">{{ t('Licenses & Attestations', 'Лицензии и аттестаты', 'Лицензиялар мен аттестаттар') }}</h3>
        <div class="doc-grid">
          <div
            class="doc-card"
            v-for="d in licenses"
            :key="d.file"
            @click="openLightbox(`/images/licenses/${d.file}`)"
          >
            <div class="doc-thumb-wrap">
              <img :src="`/images/licenses/${d.file}`" :alt="t(d.nameEn, d.nameRu, d.nameKz)" class="doc-thumb" />
              <div class="doc-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3H21V9M21 3L9 15M10 5H3V21H19V14" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <p class="doc-label">{{ t(d.nameEn, d.nameRu, d.nameKz) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── COMPANY POLICY ─────────────────────────────────────────────── -->
    <section class="policy-sec">
      <div class="container">
        <div class="section-header-row">
          <div>
            <span class="page-badge-light">{{ t('Company Policy', 'Политика компании', 'Компания саясаты') }}</span>
            <h2 class="section-title">
              {{ t('Our management commitments', 'Наши управленческие обязательства', 'Біздің басқару міндеттемелеріміз') }}
            </h2>
          </div>
          <p class="section-sub">
            {{ t(
              'CE&R maintains a comprehensive Integrated Management System covering quality, environmental protection, occupational health, and safety.',
              'CE&R поддерживает комплексную интегрированную систему менеджмента в области качества, охраны окружающей среды, охраны труда и безопасности.',
              'CE&R сапа, қоршаған ортаны қорғау, еңбекті қорғау және қауіпсіздік саласын қамтитын кешенді интегралданған менеджмент жүйесін қолдайды.'
            ) }}
          </p>
        </div>
        <div class="policy-grid">
          <div
            class="policy-card"
            v-for="p in policyDocs"
            :key="p.file"
            @click="openLightbox(`/images/company_policy/${p.file}`)"
          >
            <div class="doc-thumb-wrap">
              <img :src="`/images/company_policy/${p.file}`" :alt="t(p.nameEn, p.nameRu, p.nameKz)" class="doc-thumb" />
              <div class="doc-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3H21V9M21 3L9 15M10 5H3V21H19V14" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <p class="doc-label">{{ t(p.nameEn, p.nameRu, p.nameKz) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── AWARDS & RECOGNITION ───────────────────────────────────────── -->
    <section class="awards-sec">
      <div class="container">
        <span class="page-badge-dark">{{ t('Awards & Recognition', 'Награды и признание', 'Марапаттар мен мойындау') }}</span>
        <h2 class="awards-title">
          {{ t('Recognised for excellence', 'Признанное превосходство', 'Жоғары деңгейі мойындалған') }}
        </h2>
        <p class="awards-sub">
          {{ t(
            'CE&R has earned recognition from Kazakhstan\'s largest energy companies and national institutions for consistent delivery of high-quality engineering work.',
            'CE&R получила признание от крупнейших энергетических компаний Казахстана и национальных институтов за неизменно высокое качество инженерных работ.',
            'CE&R Қазақстанның ірі энергетика компаниялары мен ұлттық мекемелерден инженерлік жұмыстардың жоғары сапасы үшін марапатқа ие болды.'
          ) }}
        </p>

        <!-- Category tabs -->
        <div class="award-tabs">
          <button
            v-for="tab in rewardTabs"
            :key="tab.key"
            :class="['award-tab', { active: activeTab === tab.key }]"
            @click="activeTab = tab.key"
          >
            {{ t(tab.labelEn, tab.labelRu, tab.labelKz) }}
            <span class="tab-count">{{ rewardsByTab(tab.key).length }}</span>
          </button>
        </div>

        <div class="awards-grid">
          <div
            class="award-card"
            v-for="r in rewardsByTab(activeTab)"
            :key="r.file"
            @click="openLightbox(`/images/rewards/${r.file}`)"
          >
            <div class="award-thumb-wrap">
              <img :src="`/images/rewards/${r.file}`" :alt="t(r.nameEn, r.nameRu, r.nameKz)" class="award-thumb" />
              <div class="doc-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3H21V9M21 3L9 15M10 5H3V21H19V14" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <p class="award-label">{{ t(r.nameEn, r.nameRu, r.nameKz) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── VALUES ─────────────────────────────────────────────────────── -->
    <section class="values-sec">
      <div class="container">
        <span class="page-badge-light">{{ t('Our Values', 'Наши ценности', 'Біздің құндылықтарымыз') }}</span>
        <h2 class="values-title">{{ t('What drives us forward', 'Что движет нами', 'Бізді алға апаратын нәрсе') }}</h2>
        <div class="values-grid">
          <div class="value-card" v-for="v in values" :key="v.icon">
            <div class="value-icon">{{ v.icon }}</div>
            <h3>{{ t(v.titleEn, v.titleRu, v.titleKz) }}</h3>
            <p>{{ t(v.descEn, v.descRu, v.descKz) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── LIGHTBOX ───────────────────────────────────────────────────── -->
    <Teleport to="body">
      <div class="lightbox" v-if="lightboxSrc" @click="lightboxSrc = null">
        <button class="lb-close" @click="lightboxSrc = null" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 2L18 18M18 2L2 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <img :src="lightboxSrc" class="lb-img" @click.stop />
      </div>
    </Teleport>

    <FooterSection />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import FooterSection from '../components/FooterSection.vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t } = useLanguage()

// Lightbox
const lightboxSrc = ref(null)
function openLightbox(src) { lightboxSrc.value = src }

// Close lightbox on Escape
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightboxSrc.value = null
  })
}

// ── DATA ────────────────────────────────────────────────────────────────────

const partners = [
  { file: 'petrofac.png',              name: 'Petrofac' },
  { file: 'firecon.png',               name: 'Firecon LTD' },
  { file: 'cbi-kazakhstan.png',        name: 'CB&I Kazakhstan' },
  { file: 'tmk.png',                   name: 'Trubная Metallurgical Company (TMK)' },
  { file: 'electroshchit.png',         name: 'Electroshchit-TM Samara' },
  { file: 'uraltehnostroy.png',        name: 'Corporation Uraltehnostroy' },
  { file: 'giprogazoochistka.png',     name: 'Giprogazoochistka' },
  { file: 'ozna.jpg',                  name: 'Ozna' },
  { file: 'kirg-institute.png',        name: 'Kazakh Institute of Exploration Geophysics (KIRG)' },
  { file: 'kitng-institute.png',       name: 'Kazakh Institute of Oil & Gas Transport (KITNG)' },
  { file: 'kape.png',                  name: 'Kazakhstan Agency of Applied Ecology (KAPE)' },
  { file: 'kazekoproekt.png',          name: 'Kazekoproekt' },
  { file: 'mangistau-engineering.png', name: 'Mangistau Engineering' },
  { file: 'ic-munaigas.png',           name: 'Engineering Company MunaiGaz' },
  { file: 'akzhayyk-geo.jpg',          name: 'Akzhayyk Geo' },
  { file: 'eikos.png',                 name: 'Eikos' },
]

const certs = [
  { code: 'ISO 9001:2015',  nameEn: 'Quality Management Systems',       nameRu: 'Системы менеджмента качества',        nameKz: 'Сапа менеджменті жүйелері' },
  { code: 'ISO 14001:2015', nameEn: 'Environmental Management Systems', nameRu: 'Системы экологического менеджмента',  nameKz: 'Экологиялық менеджмент жүйелері' },
  { code: 'OHSAS 18001:2008', nameEn: 'Occupational Health & Safety',   nameRu: 'Охрана здоровья и безопасность труда', nameKz: 'Денсаулықты сақтау және еңбек қауіпсіздігі' },
  { code: 'ISO 31000:2009', nameEn: 'Risk Management',                  nameRu: 'Менеджмент рисков',                    nameKz: 'Тәуекелдерді басқару' },
]

const licenses = [
  {
    file: 'attest-industrial-safety.jpg',
    nameEn: 'Certificate — Industrial Safety Works',
    nameRu: 'Аттестат на право проведения работ в области промышленной безопасности',
    nameKz: 'Өнеркәсіптік қауіпсіздік саласында жұмыс жүргізу аттестаты',
  },
  {
    file: 'license-regional-dev.png',
    nameEn: 'State General License (Cat. 1) — Ministry of Regional Development',
    nameRu: 'Государственная генеральная лицензия 1 категории — Министерство регионального развития РК',
    nameKz: 'Мемлекеттік бас лицензия 1 санат — ҚР Аймақтық даму министрлігі',
  },
  {
    file: 'license-environment.png',
    nameEn: 'State General License — Ministry of Environmental Protection',
    nameRu: 'Государственная генеральная лицензия — Министерство охраны окружающей среды РК',
    nameKz: 'Мемлекеттік бас лицензия — ҚР Қоршаған ортаны қорғау министрлігі',
  },
  {
    file: 'license-construction-control.jpg',
    nameEn: 'License — State Architectural & Construction Control, Mangistau Region',
    nameRu: 'Лицензия — Управление государственного архитектурно-строительного контроля Мангистауской обл.',
    nameKz: 'Лицензия — Маңғыстау облысының мемлекеттік сәулет-құрылыс бақылауы басқармасы',
  },
  {
    file: 'license-energy-ministry.jpg',
    nameEn: 'License — Ministry of Energy, Republic of Kazakhstan',
    nameRu: 'Лицензия — Министерство Энергетики Республики Казахстан',
    nameKz: 'Лицензия — Қазақстан Республикасы Энергетика министрлігі',
  },
]

const policyDocs = [
  {
    file: 'policy-qhse.jpg',
    nameEn: 'QHSE Policy',
    nameRu: 'Политика QHSE',
    nameKz: 'QHSE саясаты',
  },
  {
    file: 'policy-integrated.jpg',
    nameEn: 'Integrated Management Policy',
    nameRu: 'Политика интегрированного менеджмента',
    nameKz: 'Интеграцияланған менеджмент саясаты',
  },
]

// Awards / Rewards
const activeTab = ref('awards')

const rewardTabs = [
  { key: 'awards',   labelEn: 'Awards',              labelRu: 'Награды',                    labelKz: 'Марапаттар' },
  { key: 'letters',  labelEn: 'Letters of Gratitude', labelRu: 'Благодарственные письма',    labelKz: 'Алғыс хаттар' },
  { key: 'reviews',  labelEn: 'Client Reviews',       labelRu: 'Отзывы клиентов',            labelKz: 'Клиент пікірлері' },
  { key: 'recs',     labelEn: 'Recommendations',      labelRu: 'Рекомендации',               labelKz: 'Ұсынымдар' },
]

const rewards = [
  // Awards
  { tab: 'awards', file: 'award-gold-fgp-2025.jpg',    nameEn: 'Gold Award — FGP/WPMP Project (2025)',                      nameRu: 'Золотая награда — Проект ФРП/УУПД (2025)',                                        nameKz: 'Алтын марапат — ФРП/УУПД жобасы (2025)' },
  { tab: 'awards', file: 'award-altyn-sapa-2019.jpg',  nameEn: 'Presidential Award "Altyn Sapa" — Best Service Company (2019)', nameRu: 'Премия Президента РК «Алтын Сапа» — Лучшее сервисное предприятие (2019)',     nameKz: 'ҚР Президентінің «Алтын Сапа» сыйлығы — Үздік қызмет ұйымы (2019)' },
  { tab: 'awards', file: 'diploma-kazstrin-2015.jpg',  nameEn: 'Diploma from KazStrIn (2015)',                              nameRu: 'Грамота от КазСтИн (2015)',                                                        nameKz: 'КазСтИн грамотасы (2015)' },
  { tab: 'awards', file: 'gramota-ncoc-2019.jpg',      nameEn: 'Certificate of Honor from NCOC (2019)',                     nameRu: 'Почётная грамота от НКОК (2019)',                                                  nameKz: 'НКОК-тан Құрмет грамотасы (2019)' },
  { tab: 'awards', file: 'gramota-knok-2014.jpg',      nameEn: 'Certificate of Honor from KNOK (2014)',                     nameRu: 'Почётная грамота от КНОК (2014)',                                                  nameKz: 'КНОК-тан Құрмет грамотасы (2014)' },
  // Letters of Gratitude
  { tab: 'letters', file: 'letter-tco-2019.jpg',         nameEn: 'Letter of Gratitude from TCO (2019)',             nameRu: 'Благодарственное письмо от ТШО (2019)',                   nameKz: 'ТШО-дан алғыс хат (2019)' },
  { tab: 'letters', file: 'letter-tco-2017.jpg',         nameEn: 'Letter of Gratitude from TCO (2017)',             nameRu: 'Благодарственное письмо от ТШО (2017)',                   nameKz: 'ТШО-дан алғыс хат (2017)' },
  { tab: 'letters', file: 'letter-tco-2014.jpg',         nameEn: 'Letter of Gratitude from TCO (2014)',             nameRu: 'Благодарственное письмо от ТШО (2014)',                   nameKz: 'ТШО-дан алғыс хат (2014)' },
  { tab: 'letters', file: 'letter-ncoc-2023.jpg',        nameEn: 'Letter of Gratitude from NCOC (2023)',            nameRu: 'Благодарственное письмо от НКОК (2023)',                  nameKz: 'НКОК-тан алғыс хат (2023)' },
  { tab: 'letters', file: 'letter-ncoc-2019.jpg',        nameEn: 'Letter of Gratitude from NCOC (2019)',            nameRu: 'Благодарственное письмо от НКОК (2019)',                  nameKz: 'НКОК-тан алғыс хат (2019)' },
  { tab: 'letters', file: 'letter-atameken-2019.jpg',    nameEn: 'Letter of Gratitude from NPP RK "Atameken" (2019)', nameRu: 'Благодарственное письмо от НПП РК «Атамекен» (2019)',  nameKz: '«Атамекен» ҚР ҰКП-нан алғыс хат (2019)' },
  { tab: 'letters', file: 'letter-zhaikmuai-2019.jpg',   nameEn: 'Letter of Gratitude from Zhaikmuai (2019)',       nameRu: 'Благодарственное письмо от ТОО «Жаикмунай» (2019)',      nameKz: '«Жайықмұнай» ЖШС-нан алғыс хат (2019)' },
  { tab: 'letters', file: 'letter-tepke-2023.jpg',       nameEn: 'Letter of Gratitude from TEPKE (2023)',           nameRu: 'Благодарственное письмо от ТОО «ТЕПКЕ» (2023)',          nameKz: '«ТЕПКЕ» ЖШС-нан алғыс хат (2023)' },
  // Client Reviews
  { tab: 'reviews', file: 'review-ncoc-2018.jpg',         nameEn: 'Client Review — NCOC (2018)',                  nameRu: 'Отзыв НКОК (2018)',                                    nameKz: 'НКОК пікірі (2018)' },
  { tab: 'reviews', file: 'review-mmg-2018.jpg',          nameEn: 'Client Review — MangistauMunaiGaz (2018)',     nameRu: 'Отзыв АО «Мангистаумунайгаз» (2018)',                  nameKz: '«Маңғыстаумұнайгаз» АҚ пікірі (2018)' },
  { tab: 'reviews', file: 'review-karakuduk-2018.jpg',    nameEn: 'Client Review — Karakuduk Munai (2018)',       nameRu: 'Отзыв ТОО «Каракудукмунай» (2018)',                    nameKz: '«Қарақұдықмұнай» ЖШС пікірі (2018)' },
  { tab: 'reviews', file: 'review-buzachi-2024.jpg',      nameEn: 'Client Review — Buzachi Operating (2024)',     nameRu: 'Отзыв Buzachi Operating Ltd (2024)',                    nameKz: 'Buzachi Operating Ltd пікірі (2024)' },
  { tab: 'reviews', file: 'review-zhaikmuai-2023.jpg',    nameEn: 'Client Review — Zhaikmuai (2023)',             nameRu: 'Отзыв ТОО «Жаикмунай» (2023)',                         nameKz: '«Жайықмұнай» ЖШС пікірі (2023)' },
  { tab: 'reviews', file: 'review-avencom-2023.jpg',      nameEn: 'Client Review — AVENCOM (2023)',               nameRu: 'Отзыв ТОО AVENCOM (2023)',                              nameKz: 'AVENCOM ЖШС пікірі (2023)' },
  { tab: 'reviews', file: 'review-astana-expo-2024.jpg',  nameEn: 'Client Review — Astana Expo Trade (2024)',     nameRu: 'Отзыв ТОО Astana Expo Trade (2024)',                    nameKz: 'Astana Expo Trade ЖШС пікірі (2024)' },
  { tab: 'reviews', file: 'review-ndf-2024.jpg',          nameEn: 'Client Review — NDF Kazakhstan (2024)',        nameRu: 'Отзыв ТОО NDF Kazakhstan (2024)',                       nameKz: 'NDF Kazakhstan ЖШС пікірі (2024)' },
  // Recommendations
  { tab: 'recs', file: 'rec-ncoc-2018.jpg', nameEn: 'Recommendation Letter from NCOC (2018)', nameRu: 'Рекомендательное письмо от НКОК (2018)', nameKz: 'НКОК-тан ұсыным хат (2018)' },
  { tab: 'recs', file: 'rec-kpo-2011.jpg',  nameEn: 'Award Nomination Request from KPO (2011)', nameRu: 'Просьба о награждении CE&R от КПО (2011)', nameKz: 'КПО-дан CE&R-ді марапаттау өтініші (2011)' },
]

function rewardsByTab(key) {
  return rewards.filter(r => r.tab === key)
}

const values = [
  {
    icon: '📐',
    titleEn: 'Engineering Precision',
    titleRu: 'Инженерная точность',
    titleKz: 'Инженерлік дәлдік',
    descEn: 'Every project is executed with exacting standards, leveraging advanced design tools and rigorous quality management to deliver flawless documentation.',
    descRu: 'Каждый проект выполняется по строгим стандартам с применением передовых инструментов проектирования и управления качеством.',
    descKz: 'Әрбір жоба алдыңғы қатарлы жобалау құралдары мен сапа менеджменті арқылы жоғары стандарттармен орындалады.',
  },
  {
    icon: '🤝',
    titleEn: 'Client Partnership',
    titleRu: 'Партнёрство с клиентами',
    titleKz: 'Клиенттермен серіктестік',
    descEn: 'We build lasting relationships based on mutual respect, openness, and a proven track record of delivering exactly what our clients need.',
    descRu: 'Мы строим долгосрочные отношения на основе взаимного уважения, открытости и подтверждённого послужного списка.',
    descKz: 'Біз өзара сыйластық, ашықтық негізінде ұзақ мерзімді қарым-қатынастар орнатамыз.',
  },
  {
    icon: '🌱',
    titleEn: 'Environmental Responsibility',
    titleRu: 'Экологическая ответственность',
    titleKz: 'Экологиялық жауапкершілік',
    descEn: 'We embed environmental stewardship into every project, fully complying with Kazakhstan\'s environmental legislation and international standards.',
    descRu: 'Мы включаем экологическую ответственность в каждый проект, полностью соблюдая природоохранное законодательство Казахстана.',
    descKz: 'Біз Қазақстанның экологиялық заңнамасын толық сақтай отырып, экологиялық жауапкершілікті әрбір жобаға енгіземіз.',
  },
  {
    icon: '⚖️',
    titleEn: 'Regulatory Expertise',
    titleRu: 'Нормативная экспертиза',
    titleKz: 'Нормативтік сараптама',
    descEn: 'Deep knowledge of Kazakhstan\'s technical norms and standards ensures all projects are approved without obstacles by regulatory authorities.',
    descRu: 'Глубокое знание технических норм и стандартов Казахстана гарантирует беспрепятственное согласование проектов в контролирующих органах.',
    descKz: 'Қазақстанның техникалық нормалары мен стандарттарын терең білу барлық жобалардың бақылаушы органдарда кедергісіз келісілуін қамтамасыз етеді.',
  },
]
</script>

<style scoped>
/* ── HERO ──────────────────────────────────────────────────────────────── */
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
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 700;
  color: var(--white);
  letter-spacing: -2px;
  line-height: 1.05;
  margin-bottom: 24px;
}

.page-title em { font-style: normal; color: var(--accent); }

.page-sub {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255,255,255,0.6);
  max-width: 580px;
}

/* ── STORY ─────────────────────────────────────────────────────────────── */
.about-story { padding: 100px 0; }

.about-story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.story-img-wrap { border-radius: 20px; overflow: hidden; }
.story-img { width: 100%; height: 480px; object-fit: cover; }

.story-text h2 {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 20px;
}

.story-text p {
  font-size: 14px;
  line-height: 1.75;
  color: var(--gray-700);
  margin-bottom: 16px;
}

.story-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1.5px solid var(--gray-200);
}

.story-stat { display: flex; flex-direction: column; gap: 4px; }

.ss-num {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -1px;
  color: var(--dark);
  line-height: 1;
}

.ss-label { font-size: 13px; color: var(--gray-500); }

/* ── SHARED SECTION UTILITIES ───────────────────────────────────────────── */
.page-badge-light {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border: 1.5px solid var(--gray-300);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-700);
  margin-bottom: 20px;
}

.page-badge-dark {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255,255,255,0.6);
  margin-bottom: 20px;
}

.section-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 40px;
}

.section-title {
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  letter-spacing: -0.8px;
  margin-top: 0;
  margin-bottom: 0;
}

.section-sub {
  font-size: 14px;
  line-height: 1.7;
  color: var(--gray-700);
  max-width: 380px;
  flex-shrink: 0;
}

.subsec-title {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin: 48px 0 20px;
  color: var(--dark);
}

/* ── BUSINESS PARTNERS ──────────────────────────────────────────────────── */
.partners-sec {
  padding: 80px 0;
  border-top: 1.5px solid var(--gray-200);
  border-bottom: 1.5px solid var(--gray-200);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 12px;
}

.partner-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 10px;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  background: var(--white);
  opacity: 0.6;
  transition: opacity 0.2s, border-color 0.2s, box-shadow 0.2s;
  min-height: 60px;
}

.partner-item:hover {
  opacity: 1;
  border-color: var(--gray-300);
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}

.partner-logo {
  max-width: 100%;
  max-height: 40px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.2s;
}

.partner-item:hover .partner-logo { filter: grayscale(0%); }

/* ── LICENSES / CERTS ───────────────────────────────────────────────────── */
.licenses-sec {
  padding: 80px 0;
  background: var(--gray-100);
  border-top: 1.5px solid var(--gray-200);
  border-bottom: 1.5px solid var(--gray-200);
}

.licenses-title {
  font-size: clamp(26px, 3.5vw, 40px);
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 16px;
}

.licenses-sub {
  font-size: 14px;
  line-height: 1.7;
  color: var(--gray-700);
  max-width: 680px;
  margin-bottom: 40px;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.cert-card {
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  border-radius: 16px;
  padding: 24px 20px;
}

.cert-code {
  font-size: 15px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
  font-variant-numeric: tabular-nums;
}

.cert-name { font-size: 12px; color: var(--gray-500); line-height: 1.5; }

/* ── DOCUMENT GRID (licenses, policy) ──────────────────────────────────── */
.doc-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.doc-card, .policy-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.doc-thumb-wrap {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 1.5px solid var(--gray-200);
  background: var(--white);
  aspect-ratio: 3/4;
}

.doc-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.doc-card:hover .doc-thumb,
.policy-card:hover .doc-thumb {
  transform: scale(1.03);
}

.doc-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10,10,10,0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}

.doc-card:hover .doc-overlay,
.policy-card:hover .doc-overlay,
.award-card:hover .doc-overlay {
  opacity: 1;
}

.doc-label {
  font-size: 12px;
  line-height: 1.5;
  color: var(--gray-700);
  text-align: center;
}

/* ── COMPANY POLICY ─────────────────────────────────────────────────────── */
.policy-sec {
  padding: 80px 0;
  border-bottom: 1.5px solid var(--gray-200);
}

.policy-grid {
  display: grid;
  grid-template-columns: repeat(2, 280px);
  gap: 20px;
}

/* ── AWARDS ─────────────────────────────────────────────────────────────── */
.awards-sec {
  padding: 80px 0 100px;
  background: var(--dark);
}

.awards-title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -1.5px;
  color: var(--white);
  margin-bottom: 16px;
}

.awards-sub {
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255,255,255,0.55);
  max-width: 560px;
  margin-bottom: 36px;
}

.award-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.award-tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 100px;
  background: transparent;
  color: rgba(255,255,255,0.5);
  font-family: var(--font-main);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.award-tab:hover {
  border-color: rgba(255,255,255,0.35);
  color: rgba(255,255,255,0.8);
}

.award-tab.active {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--on-accent);
}

.tab-count {
  font-size: 11px;
  font-weight: 700;
  background: rgba(255,255,255,0.15);
  border-radius: 100px;
  padding: 1px 7px;
}

.award-tab.active .tab-count {
  background: rgba(10,10,10,0.15);
}

.awards-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.award-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.award-thumb-wrap {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  aspect-ratio: 3/4;
}

.award-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.award-card:hover .award-thumb { transform: scale(1.03); }

.award-label {
  font-size: 12px;
  line-height: 1.5;
  color: rgba(255,255,255,0.55);
  text-align: center;
}

/* ── VALUES ─────────────────────────────────────────────────────────────── */
.values-sec { padding: 80px 0 100px; }

.values-title {
  font-size: clamp(26px, 4vw, 40px);
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 40px;
  margin-top: 16px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.value-card {
  background: var(--white);
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1.5px solid var(--gray-200);
}

.value-icon { font-size: 28px; line-height: 1; }

.value-card h3 { font-size: 15px; font-weight: 700; color: var(--dark); }

.value-card p { font-size: 13px; line-height: 1.65; color: var(--gray-500); }

/* ── LIGHTBOX ────────────────────────────────────────────────────────────── */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.lb-close {
  position: absolute;
  top: 20px;
  right: 24px;
  background: rgba(255,255,255,0.1);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}

.lb-close:hover { background: rgba(255,255,255,0.2); }

.lb-img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
}

/* ── RESPONSIVE ─────────────────────────────────────────────────────────── */
@media (max-width: 1200px) {
  .partners-grid  { grid-template-columns: repeat(6, 1fr); }
  .awards-grid    { grid-template-columns: repeat(4, 1fr); }
  .doc-grid       { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 1024px) {
  .cert-grid      { grid-template-columns: repeat(2, 1fr); }
  .values-grid    { grid-template-columns: repeat(2, 1fr); }
  .partners-grid  { grid-template-columns: repeat(4, 1fr); }
  .awards-grid    { grid-template-columns: repeat(3, 1fr); }
  .doc-grid       { grid-template-columns: repeat(3, 1fr); }
  .section-header-row { flex-direction: column; gap: 12px; }
}

@media (max-width: 768px) {
  .about-story-grid  { grid-template-columns: 1fr; }
  .cert-grid         { grid-template-columns: 1fr 1fr; }
  .values-grid       { grid-template-columns: 1fr; }
  .partners-grid     { grid-template-columns: repeat(3, 1fr); }
  .awards-grid       { grid-template-columns: repeat(2, 1fr); }
  .doc-grid          { grid-template-columns: repeat(2, 1fr); }
  .policy-grid       { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .partners-grid  { grid-template-columns: repeat(2, 1fr); }
  .doc-grid       { grid-template-columns: repeat(2, 1fr); }
  .awards-grid    { grid-template-columns: repeat(2, 1fr); }
}
</style>
