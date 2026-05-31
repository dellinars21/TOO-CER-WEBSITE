<template>
  <section class="map-sec" ref="sectionRef">
    <div class="container map-header">
      <span class="section-badge">
        {{ t('Geography of Operations', 'География работ', 'Жұмыс географиясы') }}
      </span>
      <h2 class="map-title">
        {{ t('Projects across Kazakhstan', 'Проекты по всему Казахстану', 'Қазақстан бойынша жобалар') }}
      </h2>
      <p class="map-sub">
        {{ t(
          'From the Caspian coast to central Kazakhstan — CE&R has delivered engineering solutions at every major producing basin.',
          'От берегов Каспия до центрального Казахстана — CE&R реализовала инженерные решения на всех крупных добывающих бассейнах.',
          'Каспий жағалауынан Орталық Қазақстанға дейін — CE&R барлық ірі өндіруші бассейндерде инженерлік шешімдер іске асырды.'
        ) }}
      </p>
    </div>

    <div class="map-stage">
      <!-- SVG Map -->
      <div class="map-svg-wrap" ref="mapRef">
        <svg
          viewBox="-529.304 -281.513 1590.864 884.148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="kz-svg"
          @mouseleave="hovered = null"
        >
          <!-- Kazakhstan outline -->
          <path
            class="kz-land"
            d="M -446.14 154.734 L -425.64 180.234 L -425.64 177.234 L -402.14 177.234 L -332.64 162.734 L -293.14 183.234 L -277.64 180.234 L -261.64 190.734 L -268.64 206.734 L -261.64 216.234 L -284.64 245.234 L -289.64 259.234 L -258.14 276.234 L -317.14 259.234 L -345.64 255.734 L -371.64 282.734 L -352.64 309.734 L -371.64 303.734 L -375.64 295.734 L -402.14 289.734 L -407.64 303.734 L -387.14 317.734 L -375.64 357.234 L -380.64 380.234 L -362.64 386.734 L -356.14 402.734 L -321.64 422.234 L -341.14 451.234 L -341.14 470.234 L -317.14 454.234 L -284.64 445.734 L -258.14 451.234 L -231.64 481.234 L -231.64 489.234 L -213.14 524.234 L -190.14 524.234 L -161.64 309.734 L -49.641 289.734 L 48.859 373.234 L 48.859 380.234 L 79.359 422.234 L 132.359 415.234 L 187.859 422.234 L 211.859 411.234 L 216.859 424.234 L 228.859 431.734 L 249.359 462.234 L 257.359 458.734 L 260.859 487.234 L 254.859 492.734 L 254.859 517.734 L 277.859 517.734 L 291.859 562.734 L 339.359 559.734 L 348.359 570.234 L 345.859 580.234 L 368.359 589.734 L 372.859 586.234 L 370.359 567.734 L 386.859 551.734 L 400.359 532.234 L 407.359 535.734 L 418.859 520.734 L 432.359 517.734 L 449.359 493.734 L 457.359 496.234 L 472.859 483.734 L 469.859 476.734 L 485.359 455.734 L 507.357 449.734 L 569.357 459.734 L 583.357 465.734 L 578.357 457.234 L 582.357 429.734 L 597.357 416.234 L 608.357 414.734 L 656.857 431.734 L 670.357 429.734 L 680.857 420.234 L 708.857 418.234 L 733.357 410.234 L 742.857 411.734 L 778.857 410.234 L 792.357 402.734 L 806.357 405.734 L 820.357 402.734 L 837.857 418.234 L 845.357 416.734 L 864.357 418.234 L 871.357 422.734 L 867.357 393.734 L 871.357 389.734 L 879.357 386.734 L 880.357 381.734 L 871.357 379.734 L 871.357 375.234 L 877.357 371.234 L 884.357 369.734 L 884.357 360.234 L 879.357 358.234 L 879.357 348.734 L 858.857 317.234 L 848.357 281.234 L 839.857 279.234 L 828.357 281.234 L 830.357 269.734 L 890.857 234.734 L 904.357 244.234 L 916.857 236.234 L 930.357 240.234 L 931.857 225.234 L 920.857 217.734 L 911.857 215.734 L 919.357 117.234 L 927.857 115.734 L 941.357 120.734 L 962.857 120.734 L 975.357 113.734 L 985.357 111.734 L 991.357 120.734 L 1005.86 101.734 L 1016.36 101.734 L 1021.86 86.734 L 1002.86 49.234 L 1007.86 19.234 L 1021.86 9.734 L 1027.36 9.734 L 1034.36 1.734 L 1033.36 -13.766 L 1029.86 -17.766 L 1028.86 -23.266 L 1032.36 -28.266 L 1037.36 -30.766 L 1042.86 -32.266 L 1044.36 -35.766 L 1040.86 -40.766 L 1033.36 -41.766 L 1017.86 -54.266 L 1014.36 -58.766 L 1017.86 -66.766 L 1007.36 -66.766 L 1012.36 -63.266 L 1011.36 -58.766 L 999.357 -44.266 L 977.857 -44.266 L 965.357 -41.766 L 949.357 -63.266 L 922.357 -65.266 L 908.857 -86.766 L 890.357 -97.766 L 882.357 -97.766 L 878.857 -100.27 L 869.357 -98.766 L 865.357 -92.766 L 857.857 -91.266 L 854.857 -80.266 L 824.857 -76.766 L 815.357 -68.766 L 808.857 -80.266 L 795.857 -76.766 L 795.857 -91.266 L 778.857 -93.766 L 769.357 -84.766 L 772.357 -68.766 L 758.357 -60.266 L 656.857 -182.27 L 603.857 -217.27 L 600.357 -222.77 L 603.857 -224.77 L 607.857 -224.77 L 612.357 -230.27 L 612.357 -236.77 L 612.357 -243.27 L 599.357 -234.77 L 592.857 -234.77 L 590.357 -226.77 L 574.357 -218.27 L 565.857 -217.27 L 565.857 -205.77 L 550.857 -198.27 L 536.357 -186.77 L 537.857 -178.27 L 533.857 -174.77 L 527.357 -178.27 L 519.857 -182.27 L 511.857 -178.27 L 504.359 -170.77 L 497.359 -174.77 L 498.859 -189.77 L 502.859 -196.27 L 508.357 -196.27 L 510.857 -201.77 L 507.357 -205.77 L 500.859 -198.27 L 494.359 -198.27 L 480.859 -205.77 L 476.359 -207.27 L 472.359 -203.27 L 477.359 -198.27 L 468.859 -192.77 L 465.859 -196.27 L 467.859 -204.27 L 450.359 -218.77 L 446.359 -216.77 L 454.859 -207.27 L 444.359 -208.77 L 439.359 -202.77 L 430.859 -205.77 L 424.359 -201.77 L 420.359 -208.77 L 426.359 -215.27 L 421.359 -225.27 L 424.359 -231.77 L 415.859 -241.27 L 415.859 -254.77 L 407.359 -264.77 L 397.359 -266.27 L 386.859 -257.77 L 365.359 -267.27 L 360.359 -269.27 L 355.859 -266.27 L 351.359 -269.27 L 345.859 -264.77 L 339.859 -266.27 L 337.859 -260.27 L 322.859 -255.77 L 325.359 -250.27 L 320.359 -243.27 L 312.359 -244.27 L 303.859 -235.77 L 293.359 -235.77 L 283.859 -228.77 L 278.859 -229.77 L 253.359 -222.27 L 247.859 -225.27 L 240.359 -219.27 L 236.359 -222.27 L 223.859 -214.77 L 221.359 -203.77 L 215.359 -205.77 L 178.859 -202.27 L 165.859 -195.77 L 154.359 -195.77 L 149.359 -192.77 L 135.359 -190.27 L 132.359 -183.27 L 126.859 -189.27 L 117.859 -189.27 L 112.859 -184.27 L 104.859 -190.27 L 98.859 -185.27 L 93.359 -192.77 L 89.359 -192.77 L 88.359 -187.27 L 81.859 -188.27 L 80.359 -185.27 L 87.359 -178.77 L 80.359 -169.27 L 85.859 -163.77 L 94.359 -163.77 L 97.359 -159.27 L 94.359 -157.27 L 87.359 -159.27 L 83.359 -149.27 L 93.359 -144.77 L 99.359 -144.77 L 104.859 -139.77 L 115.859 -135.77 L 116.859 -130.27 L 111.859 -125.77 L 101.859 -130.27 L 84.359 -133.27 L 65.859 -113.77 L 74.359 -93.766 L 69.359 -89.766 L 65.859 -83.766 L 54.859 -83.766 L 46.859 -76.266 L 38.359 -74.266 L 38.359 -65.766 L 44.859 -67.266 L 54.859 -63.266 L 50.859 -55.266 L 65.859 -50.266 L 72.359 -40.766 L 91.359 -34.266 L 81.359 -3.266 L 46.859 1.234 L 40.359 -10.766 L 31.859 -8.266 L 27.859 1.234 L 18.859 7.234 L 14.859 7.234 L 14.859 1.234 L -10.641 -3.266 L -18.641 -13.266 L -16.641 -24.266 L -25.641 -32.266 L -31.641 -28.766 L -46.641 -32.266 L -51.141 -21.266 L -61.641 -24.266 L -69.141 -32.266 L -86.141 -28.766 L -94.141 -36.266 L -98.141 -28.766 L -105.64 -28.766 L -111.14 -17.266 L -130.64 -10.766 L -146.64 -32.266 L -159.14 -42.766 L -164.14 -39.266 L -164.14 -17.266 L -174.14 -17.266 L -168.14 -36.266 L -174.14 -39.266 L -184.64 -56.766 L -192.64 -61.766 L -192.64 -71.766 L -201.14 -81.766 L -214.64 -76.766 L -220.14 -81.766 L -232.64 -81.766 L -236.14 -98.266 L -255.14 -98.266 L -262.64 -92.766 L -275.64 -92.766 L -275.64 -104.27 L -292.14 -104.27 L -300.64 -104.27 L -313.14 -86.266 L -330.14 -87.766 L -332.64 -81.766 L -351.14 -86.266 L -351.14 -71.766 L -381.64 -65.766 L -381.64 -28.766 L -408.14 -24.266 L -411.14 -42.766 L -421.64 -65.766 L -436.14 -56.766 L -436.14 -46.266 L -446.14 -39.266 L -456.64 -39.266 L -469.64 -10.766 L -462.14 -3.266 L -464.64 7.234 L -476.64 10.734 L -491.14 38.734 L -473.14 52.234 L -476.64 58.734 L -473.14 63.234 L -479.64 66.234 L -479.64 79.734 L -473.14 89.234 L -467.14 79.734 L -462.14 86.234 L -446.14 91.734 L -441.14 103.234 L -430.64 119.234 L -430.64 135.734 L -421.64 154.734 L -430.64 159.734 L -441.14 151.234 L -446.14 154.734 Z"
          />

          <!-- Caspian Sea (west) -->
          <ellipse cx="-522" cy="75" rx="45" ry="115" class="kz-sea" />
          <text x="-529" y="75" class="sea-label" transform="rotate(-90 -529 75)">
            {{ t('Caspian Sea', 'Каспийское море', 'Каспий теңізі') }}
          </text>

          <!-- Region shading for Mangistau / West KZ -->
          <path
            class="kz-region"
            d="M -430 295 L -395 305 L -405 365 L -445 385 L -465 345 L -450 305 Z"
          />

          <!-- Project pins -->
          <g v-for="pin in pins" :key="pin.id">
            <!-- Pulse ring (shown when hovered) -->
            <circle
              :cx="pin.x" :cy="pin.y"
              :r="hovered === pin.id ? 39 : 0"
              :fill="`var(--accent)`"
              opacity="0.12"
              class="pin-pulse"
            />
            <!-- Outer ring -->
            <circle
              :cx="pin.x" :cy="pin.y" r="18"
              :fill="hovered === pin.id ? 'var(--accent)' : 'var(--white)'"
              :stroke="pin.major ? 'var(--accent)' : 'var(--gray-400)'"
              stroke-width="3.5"
              class="pin-outer"
              @mouseenter="hovered = pin.id"
            />
            <!-- Inner dot -->
            <circle
              :cx="pin.x" :cy="pin.y" r="7"
              :fill="pin.major ? 'var(--accent)' : 'var(--gray-400)'"
              :opacity="hovered === pin.id ? 0 : 1"
              class="pin-dot"
              @mouseenter="hovered = pin.id"
            />
            <!-- Label -->
            <text
              :x="pin.x + (pin.labelSide === 'left' ? -25 : 25)"
              :y="pin.y - 25"
              :text-anchor="pin.labelSide === 'left' ? 'end' : 'start'"
              class="pin-label"
              :class="{ 'pin-label-major': pin.major }"
            >{{ pin.label }}</text>
          </g>

          <!-- Connector lines between related pins -->
          <line x1="-280" y1="241" x2="-254" y2="236" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="7,5" opacity="0.35"/>
          <line x1="-254" y1="236" x2="-312" y2="158" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="7,5" opacity="0.25"/>
          <line x1="-312" y1="158" x2="-218" y2="-60" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="7,5" opacity="0.2"/>
        </svg>

        <!-- Tooltip card -->
        <Transition name="tooltip-pop">
          <div
            v-if="activePin"
            class="map-tooltip"
            :style="tooltipStyle"
          >
            <div class="tooltip-tag">{{ activePin.region }}</div>
            <div class="tooltip-title">{{ activePin.label }}</div>
            <p class="tooltip-desc">{{ activePin.desc }}</p>
            <div class="tooltip-meta">
              <span v-if="activePin.client">
                <strong>{{ t('Client', 'Заказчик', 'Тапсырыс беруші') }}:</strong> {{ activePin.client }}
              </span>
              <span v-if="activePin.scope">
                <strong>{{ t('Scope', 'Объём', 'Ауқым') }}:</strong> {{ activePin.scope }}
              </span>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Side panel: project list -->
      <div class="map-list">
        <div class="map-list-label">
          {{ t('Project Highlights', 'Ключевые проекты', 'Негізгі жобалар') }}
        </div>
        <div
          class="map-list-item"
          v-for="pin in pins"
          :key="pin.id"
          :class="{ active: hovered === pin.id, major: pin.major }"
          @mouseenter="hovered = pin.id"
          @mouseleave="hovered = null"
        >
          <div class="mli-dot" :class="{ major: pin.major }"></div>
          <div class="mli-body">
            <div class="mli-title">{{ pin.label }}</div>
            <div class="mli-region">{{ pin.region }}</div>
          </div>
          <svg v-if="pin.major" class="mli-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
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
const mapRef = ref(null)
const hovered = ref(null)
let ctx

const pins = computed(() => [
  {
    id: 'tengiz',
    x: -254, y: 236,
    label: t('Tengiz Field', 'Месторождение Тенгиз', 'Теңіз кен орны'),
    region: t('Atyrau Region', 'Атырауская обл.', 'Атырау облысы'),
    desc: t(
      'Engineering design and author supervision for FGP/WPMP expansion. Multiple design stages delivered for TCO.',
      'Инженерное проектирование и авторский надзор в рамках расширения FGP/WPMP. Выполнены несколько стадий проектирования для ТШО.',
      'FGP/WPMP кеңейту жобасы үшін инжинирингтік жобалау және авторлық қадағалау. ТШО үшін бірнеше жобалау сатысы орындалды.'
    ),
    client: 'Tengizchevroil (TCO)',
    scope: t('FGP/WPMP, 2018–2025', 'FGP/WPMP, 2018–2025', 'FGP/WPMP, 2018–2025'),
    major: true, labelSide: 'right',
  },
  {
    id: 'kashagan',
    x: -280, y: 241,
    label: t('Kashagan Field', 'Месторождение Кашаган', 'Қашаған кен орны'),
    region: t('Caspian Shelf', 'Каспийский шельф', 'Каспий шельфі'),
    desc: t(
      'EP stage and detailed design documentation for offshore facilities. Longest running engagement spanning 13 years.',
      'Разработка проектной документации EP-стадии и рабочей документации для морских объектов. Самое продолжительное сотрудничество — 13 лет.',
      'Теңіз нысандары үшін EP сатысы және рабочая құжаттама. Ең ұзақ мерзімді ынтымақтастық — 13 жыл.'
    ),
    client: 'NCOC N.V.',
    scope: t('EP & Detailed Design, 2005–2018', 'EP и РД, 2005–2018', 'EP және РД, 2005–2018'),
    major: true, labelSide: 'right',
  },
  {
    id: 'karachaganak',
    x: -218, y: -60,
    label: t('Karachaganak', 'Карачаганак', 'Қарашығанақ'),
    region: t('West Kazakhstan Region', 'ЗКО', 'БҚО'),
    desc: t(
      'Environmental impact assessment and project documentation for gas condensate processing facilities.',
      'Оценка воздействия на окружающую среду и проектная документация для газоконденсатных объектов.',
      'Газ конденсатын өңдеу нысандары үшін ҚОӘБ және жобалық құжаттама.'
    ),
    client: 'Karachaganak Petroleum Operating B.V.',
    scope: t('EIA, Pre-EIA', 'ОВОС, ПредОВОС', 'ҚОӘБ, Алдын ала ҚОӘБ'),
    major: true, labelSide: 'right',
  },
  {
    id: 'aktau',
    x: -372, y: 350,
    label: t('Aktau (HQ)', 'Актау (ГО)', 'Ақтау (ГО)'),
    region: t('Mangistau Region', 'Мангистауская обл.', 'Маңғыстау облысы'),
    desc: t(
      'CE&R headquarters. Home base for Caspian offshore project delivery and regulatory coordination.',
      'Главный офис CE&R. Операционная база для каспийских морских проектов и нормативного согласования.',
      'CE&R бас кеңсесі. Каспий теңіз жобаларын орындаудың операциялық базасы.'
    ),
    client: 'CE&R HQ',
    scope: '',
    major: false, labelSide: 'right',
  },
  {
    id: 'atyrau',
    x: -312, y: 158,
    label: t('Atyrau', 'Атырау', 'Атырау'),
    region: t('Atyrau Region', 'Атырауская обл.', 'Атырау облысы'),
    desc: t(
      'Atyrau Refinery modernisation design and environmental sections for refining unit upgrades.',
      'Проектирование модернизации Атырауского НПЗ и экологические разделы для установок переработки.',
      'Атырау мұнай өңдеу зауытын жаңғырту жобасы және өңдеу қондырғылары үшін экологиялық бөлімдер.'
    ),
    client: 'Atyrau Refinery',
    scope: t('Refinery modernisation', 'Модернизация НПЗ', 'НМЗ жаңғырту'),
    major: false, labelSide: 'right',
  },
  {
    id: 'uralsk',
    x: -278, y: -80,
    label: t('Uralsk', 'Уральск', 'Орал'),
    region: t('West Kazakhstan Region', 'ЗКО', 'БҚО'),
    desc: t(
      'Pipeline corridor studies and pre-EIA documentation for the Orenburg–Aktobe gas infrastructure.',
      'Исследования коридоров трубопроводов и документация ПредОВОС для газовой инфраструктуры Оренбург–Актобе.',
      'Орынбор–Ақтөбе газ инфрақұрылымы үшін құбыр дәліздерін зерттеу және алдын ала ҚОӘБ.'
    ),
    client: 'NC KazMunaiGaz',
    scope: t('Pre-EIA, Pipeline', 'ПредОВОС, Трубопровод', 'Алдын ала ҚОӘБ, Құбыр'),
    major: false, labelSide: 'right',
  },
  {
    id: 'aktobe',
    x: -69, y: -36,
    label: t('Aktobe', 'Актобе', 'Ақтөбе'),
    region: t('Aktobe Region', 'Актюбинская обл.', 'Ақтөбе облысы'),
    desc: t(
      'Project documentation for Aktobe field development and author supervision at KazakhOil Aktobe facilities.',
      'Проектная документация для разработки Актюбинского месторождения и авторский надзор на объектах KazakhOil Aktobe.',
      'Ақтөбе кен орнын игеру жобасы және KazakhOil Aktobe нысандарында авторлық қадағалау.'
    ),
    client: 'KazakhOil Aktobe',
    scope: t('Project & Author Supervision', 'Проект и авторнадзор', 'Жоба және авторлық қадағалау'),
    major: false, labelSide: 'right',
  },
  {
    id: 'astana',
    x: 443, y: -41,
    label: t('Astana', 'Астана', 'Астана'),
    region: t('Akmola Region', 'Акмолинская обл.', 'Ақмола облысы'),
    desc: t(
      'Regulatory submissions, expert examinations, and coordination with national energy ministry bodies.',
      'Нормативные согласования, экспертизы и взаимодействие с органами министерства энергетики.',
      'Нормативтік келісулер, сараптамалар және энергетика министрлігі органдарымен өзара іс-қимыл.'
    ),
    client: t('Ministry of Energy, RK', 'Министерство энергетики РК', 'ҚР Энергетика министрлігі'),
    scope: t('Regulatory coordination', 'Нормативное согласование', 'Нормативтік келісу'),
    major: false, labelSide: 'left',
  },
])

const activePin = computed(() => pins.value.find(p => p.id === hovered.value) ?? null)

const SVG_MIN_X = -529.304
const SVG_WIDTH = 1590.864
const SVG_MIN_Y = -281.513
const SVG_HEIGHT = 884.148

const tooltipStyle = computed(() => {
  if (!activePin.value) return {}
  const pin = activePin.value
  const pctX = ((pin.x - SVG_MIN_X) / SVG_WIDTH * 100).toFixed(1)
  const pctY = ((pin.y - SVG_MIN_Y) / SVG_HEIGHT * 100).toFixed(1)
  const isRight = pin.x > 200
  return {
    left: isRight ? `calc(${pctX}% - 244px)` : `calc(${pctX}% + 20px)`,
    top: `calc(${pctY}% - 80px)`
  }
})

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.map-header .section-badge', {
      opacity: 0, x: -20, duration: 0.6, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })
    gsap.from('.map-title', {
      opacity: 0, y: 30, filter: 'blur(8px)', duration: 0.9, delay: 0.1,
      ease: ease.out, clearProps: 'filter',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })
    gsap.from('.map-sub', {
      opacity: 0, y: 18, duration: 0.7, delay: 0.22, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 82%', once: true }
    })
    gsap.from('.map-svg-wrap', {
      opacity: 0, scale: 0.96, y: 40, duration: 1.1, delay: 0.15,
      ease: ease.out,
      scrollTrigger: { trigger: '.map-stage', start: 'top 85%', once: true }
    })
    gsap.from('.map-list-item', {
      opacity: 0, x: 28, duration: 0.6, stagger: 0.07, delay: 0.3, ease: ease.out,
      scrollTrigger: { trigger: '.map-stage', start: 'top 85%', once: true }
    })
  }, sectionRef.value)
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.map-sec {
  padding: 100px 0 80px;
  overflow: hidden;
}

/* ── Header ─────────────────────────────────────────────────────── */
.map-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 56px;
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
  margin-bottom: 20px;
}

.map-title {
  font-size: clamp(28px, 4vw, 46px);
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.1;
  color: var(--dark);
  margin-bottom: 14px;
}

.map-sub {
  font-size: 13px;
  line-height: 1.7;
  color: var(--gray-500);
  max-width: 540px;
}

/* ── Stage ──────────────────────────────────────────────────────── */
.map-stage {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 32px;
  align-items: start;
}

/* ── SVG map ────────────────────────────────────────────────────── */
.map-svg-wrap {
  position: relative;
  background: #f0f4f8;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--gray-200);
}

.kz-svg {
  width: 100%;
  height: auto;
  display: block;
}

.kz-land {
  fill: #dde8f0;
  stroke: #b8cdd8;
  stroke-width: 3;
}

.kz-sea {
  fill: #c2d8e8;
}

.kz-region {
  fill: var(--accent);
  opacity: 0.08;
}

.sea-label {
  font-size: 16px;
  fill: #7a9bb0;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 1px;
}

/* Pins */
.pin-outer {
  cursor: pointer;
  transition: fill 0.22s, r 0.22s;
}

.pin-dot {
  pointer-events: none;
  transition: opacity 0.22s;
}

.pin-pulse {
  transition: r 0.3s ease, opacity 0.3s ease;
}

.pin-label {
  font-size: 17px;
  fill: var(--gray-600, #555);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  pointer-events: none;
}

.pin-label-major {
  font-weight: 700;
  fill: var(--dark);
  font-size: 19px;
}

/* ── Tooltip ────────────────────────────────────────────────────── */
.map-tooltip {
  position: absolute;
  width: 220px;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  pointer-events: none;
  z-index: 10;
}

.tooltip-tag {
  font-size: 10px;
  font-weight: 600;
  color: var(--accent);
  letter-spacing: 0.4px;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.tooltip-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
  line-height: 1.2;
}

.tooltip-desc {
  font-size: 11px;
  line-height: 1.55;
  color: var(--gray-500);
  margin-bottom: 10px;
}

.tooltip-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tooltip-meta span {
  font-size: 10px;
  color: var(--gray-500);
  line-height: 1.4;
}

.tooltip-meta strong {
  color: var(--dark);
  font-weight: 600;
}

/* Tooltip transition */
.tooltip-pop-enter-active,
.tooltip-pop-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.tooltip-pop-enter-from,
.tooltip-pop-leave-to {
  opacity: 0;
  transform: scale(0.94) translateY(4px);
}

/* ── Side list ──────────────────────────────────────────────────── */
.map-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.map-list-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--gray-400);
  text-transform: uppercase;
  margin-bottom: 12px;
  padding-left: 8px;
}

.map-list-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.18s;
}

.map-list-item:hover,
.map-list-item.active {
  background: var(--gray-100);
}

.map-list-item.active .mli-title {
  color: var(--accent);
}

.mli-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gray-300);
  border: 2px solid var(--gray-300);
  transition: background 0.18s;
}

.mli-dot.major {
  background: var(--accent);
  border-color: var(--accent);
}

.map-list-item.active .mli-dot {
  background: var(--accent);
  border-color: var(--accent);
}

.mli-body {
  flex: 1;
  min-width: 0;
}

.mli-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--dark);
  transition: color 0.18s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mli-region {
  font-size: 10px;
  color: var(--gray-400);
  margin-top: 1px;
}

.mli-arrow {
  flex-shrink: 0;
  color: var(--accent);
  opacity: 0;
  transition: opacity 0.18s;
}

.map-list-item:hover .mli-arrow,
.map-list-item.active .mli-arrow {
  opacity: 1;
}

/* ── Responsive ─────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .map-stage {
    grid-template-columns: 1fr;
  }

  .map-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }

  .map-list-label {
    grid-column: 1 / -1;
  }
}

@media (max-width: 600px) {
  .map-list {
    grid-template-columns: 1fr;
  }
}
</style>
