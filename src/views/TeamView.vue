<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <span class="page-badge">{{ t('Our Team', 'Наша команда', 'Біздің команда') }}</span>
        <h1 class="page-title">
          {{ t('Highly qualified', 'Высококвалифицированные', 'Жоғары білікті') }}<br />
          <em>{{ t('engineering specialists', 'инженерные специалисты', 'инженерлік мамандар') }}</em>
        </h1>
        <p class="page-sub">
          {{ t(
            'The presence of highly qualified specialists of all necessary disciplines allows CE&R to offer subsoil users all kinds of services in the field of design of oil and gas condensate field facilities, preparation and transportation of oil, gas and water.',
            'Наличие в компании высококвалифицированных специалистов всех необходимых специальностей позволяет CE&R предлагать недропользователям все виды услуг в области проектирования объектов нефтегазоконденсатных месторождений, подготовки и транспортировки нефти, газа и воды.',
            'Компанияда барлық қажетті мамандықтардың жоғары білікті мамандарының болуы CE&R-ге жер қойнауын пайдаланушыларға мұнай-газ конденсат кен орындарының нысандарын жобалау, мұнайды, газды және суды дайындау мен тасымалдау саласындағы барлық қызмет түрлерін ұсынуға мүмкіндік береді.'
          ) }}
        </p>
      </div>
    </section>

    <section class="team-intro">
      <div class="container team-intro-grid">
        <div class="ti-block">
          <div class="ti-icon">🎓</div>
          <h3>{{ t('Professional Development', 'Профессиональное развитие', 'Кәсіби даму') }}</h3>
          <p>{{ t(
            'Staff development is carried out at various courses and seminars both in Kazakhstan and abroad, allowing CE&R to track advanced technologies in world design experience.',
            'Развитие кадров осуществляется на различных курсах и семинарах как в Казахстане, так и за рубежом, что позволяет CE&R отслеживать передовые технологии мирового проектного опыта.',
            'Кадрларды дамыту Қазақстанда да, шетелде де әртүрлі курстар мен семинарларда жүзеге асырылады, бұл CE&R-ге дүниежүзілік жобалау тәжірибесіндегі озық технологияларды бақылауға мүмкіндік береді.'
          ) }}</p>
        </div>
        <div class="ti-block">
          <div class="ti-icon">🌐</div>
          <h3>{{ t('International Experience', 'Международный опыт', 'Халықаралық тәжірибе') }}</h3>
          <p>{{ t(
            'CE&R specialists work alongside international design companies on major Kazakhstan projects, building expertise in both local regulatory frameworks and global engineering practices.',
            'Специалисты CE&R работают совместно с международными проектными компаниями на крупных казахстанских проектах, накапливая экспертизу в области казахстанского регулирования и международных инженерных практик.',
            'CE&R мамандары ірі қазақстандық жобаларда халықаралық жобалау компанияларымен бірге жұмыс жасайды, Қазақстан реттеу базасы мен халықаралық инженерлік тәжірибе саласындағы сараптаманы жинақтайды.'
          ) }}</p>
        </div>
        <div class="ti-block">
          <div class="ti-icon">⚙️</div>
          <h3>{{ t('Multi-Discipline Coverage', 'Многодисциплинарность', 'Көп дисциплиналық') }}</h3>
          <p>{{ t(
            'The team covers all engineering disciplines required for complete facility design: process, piping, civil/structural, electrical, instrumentation, environmental, and more.',
            'Команда охватывает все инженерные дисциплины, необходимые для полного проектирования объектов: технологию, трубопроводы, гражданское/строительное, электрику, КиПиА, экологию и другие.',
            'Команда нысандарды толық жобалау үшін қажетті барлық инженерлік пәндерді қамтиды: технология, құбыр желілері, азаматтық/құрылыс, электрика, КЖҚА, экология және т.б.'
          ) }}</p>
        </div>
        <div class="ti-block">
          <div class="ti-icon">🏆</div>
          <h3>{{ t('Proven Track Record', 'Подтверждённый опыт', 'Дәлелденген тәжірибе') }}</h3>
          <p>{{ t(
            'Decades of successful project delivery for the largest subsoil users in Kazakhstan, including TCO, NCOC, KPO, and KazMunaiGaz, demonstrates the caliber of CE&R\'s engineering team.',
            'Десятилетия успешной реализации проектов для крупнейших недропользователей Казахстана — ТШО, НКОК, КПО и КазМунайГаз — свидетельствуют о высоком уровне инженерной команды CE&R.',
            'ТШО, НКОК, КПО және ҚазМұнайГаз сияқты Қазақстанның ірі жер қойнауын пайдаланушыларына ондаған жылдар бойы жобаларды сәтті жеткізу CE&R инженерлік командасының жоғары деңгейін дәлелдейді.'
          ) }}</p>
        </div>
      </div>
    </section>

    <section class="disciplines-sec">
      <div class="container">
        <span class="section-badge-light">{{ t('Engineering Disciplines', 'Инженерные специальности', 'Инженерлік мамандықтар') }}</span>
        <h2 class="disciplines-title">
          {{ t('Complete design capability', 'Полная проектная компетенция', 'Толық жобалау мүмкіндігі') }}
        </h2>
        <div class="disciplines-grid">
          <div class="disc-card" v-for="d in disciplines" :key="d.code">
            <div class="disc-code">{{ d.code }}</div>
            <div class="disc-name">{{ t(d.nameEn, d.nameRu, d.nameKz) }}</div>
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

const disciplines = [
  { code: 'PROC', nameEn: 'Process Engineering', nameRu: 'Технологическое проектирование', nameKz: 'Технологиялық жобалау' },
  { code: 'PIPE', nameEn: 'Piping & Pipeline Design', nameRu: 'Трубопроводное проектирование', nameKz: 'Құбыр желілерін жобалау' },
  { code: 'CIVIL', nameEn: 'Civil & Structural', nameRu: 'Гражданское и строительное', nameKz: 'Азаматтық және құрылыс' },
  { code: 'ELEC', nameEn: 'Electrical Engineering', nameRu: 'Электротехника', nameKz: 'Электротехника' },
  { code: 'INST', nameEn: 'Instrumentation & Control', nameRu: 'КИПиА', nameKz: 'КЖ және А' },
  { code: 'ENV', nameEn: 'Environmental Engineering', nameRu: 'Природоохранное проектирование', nameKz: 'Экологиялық жобалау' },
  { code: 'MECH', nameEn: 'Mechanical Engineering', nameRu: 'Механическое оборудование', nameKz: 'Механикалық жабдықтар' },
  { code: 'FIRE', nameEn: 'Fire & Safety Systems', nameRu: 'Пожаротушение и безопасность', nameKz: 'Өрт сөндіру және қауіпсіздік' }
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
  font-size: clamp(36px, 5.5vw, 68px);
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
  max-width: 600px;
}

.team-intro {
  padding: 80px 0;
  border-bottom: 1.5px solid var(--gray-200);
}

.team-intro-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.ti-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ti-icon {
  font-size: 28px;
  line-height: 1;
}

.ti-block h3 {
  font-size: 15px;
  font-weight: 700;
  color: var(--dark);
}

.ti-block p {
  font-size: 13px;
  line-height: 1.65;
  color: var(--gray-500);
}

.disciplines-sec {
  padding: 80px 0 100px;
}

.section-badge-light {
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

.disciplines-title {
  font-size: clamp(26px, 3.5vw, 40px);
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 40px;
}

.disciplines-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.disc-card {
  padding: 24px 20px;
  border: 1.5px solid var(--gray-200);
  border-radius: 16px;
  background: var(--white);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.disc-card:hover {
  border-color: var(--accent);
  box-shadow: 0 2px 16px var(--accent-glow);
}

.disc-code {
  font-size: 11px;
  font-weight: 700;
  color: var(--gray-500);
  letter-spacing: 1px;
  margin-bottom: 8px;
  font-family: 'Space Mono', monospace;
}

.disc-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--dark);
  line-height: 1.3;
}

@media (max-width: 1024px) {
  .team-intro-grid { grid-template-columns: repeat(2, 1fr); }
  .disciplines-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .team-intro-grid { grid-template-columns: 1fr; }
  .disciplines-grid { grid-template-columns: 1fr 1fr; }
}
</style>
