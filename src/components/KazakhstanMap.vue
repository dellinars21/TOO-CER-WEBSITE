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

    <div class="container map-stage">
      <!-- SVG Map -->
      <div class="map-svg-wrap" ref="mapRef">
        <div class="map-svg-clip">
        <svg
          viewBox="16 -2 334 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="kz-svg"
          preserveAspectRatio="xMidYMid meet"
          @mouseleave="clearHover"
        >
          <!-- Kazakhstan outline (from kazakhstan-map-2026.svg) -->
          <g transform="matrix(0.532077,0,0,0.532594,-19.583224,-162.211734)">
            <path
              class="kz-land"
              d="M 292.899437 588.299587 L 279.398386 569.897623 L 278.796382 565.298966 L 238.697011 532.697639 L 193.399846 541.601579 L 181.602027 628.396652 L 172.102103 628.396652 L 168.996641 622.001071 L 165.002855 614.197289 L 165.296516 609.899341 L 153.498696 599.198478 L 138.800978 598.897769 L 133.896844 599.499188 L 127.803384 602.997688 L 124.602482 605.601394 L 122.598248 606.503523 L 118.898123 609.400603 L 116.600228 611.40289 L 87.197449 536.203474 L 91.198576 490.40026 L 86.602786 486.403022 L 80.002761 480.601526 L 78.798752 478.29853 L 80.002761 476.303579 L 82.601658 476.596954 L 84.899553 479.200659 L 86.896446 479.501369 L 89.201683 478.29853 L 87.997674 476.002869 L 86.602786 473.399163 L 85.699779 469.702635 L 84.503112 461.598143 L 81.896873 458.701062 L 81.896873 454.403115 L 79.598978 451.799409 L 77.602085 450.398542 L 73.600957 450.398542 L 70.400056 446.702014 L 68.997826 448.696966 L 67.801158 450.097833 L 64.901259 448.102881 L 64.901259 442.103357 L 66.898152 440.70249 L 66.898152 436.096498 L 58.800457 429.803599 L 66.303489 419.403445 L 71.00206 418.002578 L 72.697951 414.496744 L 72.396949 412.201082 L 69.497049 410.198796 L 74.100181 398.097066 L 78.996973 398.097066 L 81.603212 396.102115 L 81.896873 391.503457 L 83.901107 388.899752 L 87.403011 387.498885 L 89.700906 389.200461 L 93.20281 396.703534 L 93.797473 402.196986 L 96.697373 405.402111 L 102.203511 404.199272 L 105.397071 404.199272 L 105.698074 400.202034 L 103.701181 396.996909 L 104.002183 387.198175 L 108.00331 388.401014 L 111.997096 386.098018 L 117.202232 385.203223 L 117.202232 378.998337 L 120.403134 378.998337 L 124.39692 380.399203 L 127.597821 378.103542 L 132.200953 378.103542 L 134.498848 374.898417 L 138.000752 372.302046 L 139.696643 371.099207 L 141.098873 368.202127 L 142.001879 370.197078 L 147.199674 370.197078 L 149.798571 376.497312 L 154.996366 376.497312 L 158.49827 373.299522 L 163.997067 372.698103 L 166.302303 379.599756 L 176.10323 381.000623 L 179.29679 381.902752 L 181.000022 383.897703 L 181.301024 388.496361 L 185.001149 390.498647 L 187.901049 393.696437 L 188.202051 397.4003 L 191.696614 399.101877 L 189.699721 404.001244 L 190.602728 406.597615 L 193.803629 406.898325 L 194.699295 404.301953 L 194.699295 400.803453 L 192.401399 398.199748 L 195.000297 394.701248 L 197.599194 396.703534 L 201.299319 400.202034 L 208.501348 409.098639 L 215.997038 405.900849 L 217.399268 402.402349 L 221.400395 401.800929 L 223.69829 398.896514 L 232.897212 399.798643 L 235.503451 404.3973 L 239.798239 404.3973 L 242.698138 400.400062 L 248.79894 401.001482 L 253.703074 402.402349 L 253.996734 408.19651 L 259.20187 413.697296 L 264.700667 413.396587 L 267.901569 416.000292 L 271.102471 417.701869 L 273.701368 414.496744 L 274.597033 410.800216 L 277.797935 410.198796 L 279.001944 413.697296 L 285.102745 414.298716 L 292.899437 413.396587 L 297.201567 411.100925 L 299.499462 402.497695 L 299.800464 399.299905 L 296.100339 396.102115 L 291.497207 396.102115 L 290.601542 392.89699 L 284.001518 392.89699 L 283.098511 390.601328 L 284.30252 388.599042 L 279.699388 385.401252 L 279.699388 383.699675 L 284.001518 380.802594 L 290.102319 379.101018 L 293.802444 375.602518 L 292.899437 370.996526 L 289.397533 366.698578 L 296.100339 360.002288 L 299.000239 360.002288 L 303.302368 361.403155 L 308.199161 361.403155 L 310.497056 359.701578 L 310.798058 357.398582 L 307.303495 355.697006 L 302.098359 353.702054 L 296.599562 353.100635 L 296.599562 350.203554 L 299.800464 349.602135 L 304.403596 347.299139 L 302.700364 345.898272 L 298.398234 345.898272 L 294.89633 344.497405 L 297.502569 341.901034 L 298.699237 339.598038 L 296.100339 337.896461 L 298.398234 334.999381 L 302.098359 334.698671 L 304.403596 336.400248 L 308.698384 336.700957 L 316.502417 336.700957 L 326.002341 335.798828 L 329.496904 334.097252 L 337.300937 332.901748 L 341.302065 330.598752 L 354.296551 331.80159 L 355.999783 330.899461 L 355.999783 326.902223 L 360.602915 324.599227 L 366.101712 322.897651 L 370.102839 323.79978 L 380.799431 320.601989 L 392.898252 315.702622 L 397.501384 315.702622 L 398.103388 312.497498 L 402.097174 308.800969 L 406.700306 305.896554 L 409.299203 304.70105 L 415.598225 306.402626 L 425.098149 310.700574 L 428.299051 306.996711 L 432.902183 306.101917 L 435.802082 311.602703 L 436.396745 317.902937 L 439.898649 321.599465 L 439.002984 325.897413 L 439.002984 328.801828 L 436.396745 330.79678 L 440.09687 335.402772 L 443.297772 332.197647 L 445.001004 334.801352 L 448.502908 331.302852 L 453.098699 328.398437 L 457.099826 332.696385 L 457.099826 337.896461 L 459.698723 337.302377 L 460.60173 334.999381 L 461.196393 332.1023 L 464.896518 332.1023 L 467.502757 335.6008 L 471.797545 336.202219 L 474.396442 333.297804 L 477.597344 336.202219 L 476.701678 338.79859 L 473.500777 338.79859 L 470.901879 342.29709 L 469.499649 346.301663 L 472.700551 347.70253 L 475.901453 345.399534 L 479.601578 343.096538 L 483.301703 345.399534 L 485.9006 346.000953 L 487.097268 341.101586 L 492.001402 338.197171 L 496.597192 336.202219 L 499.798094 330.400723 L 503.799221 329.498594 L 508.703355 325.802066 L 508.997016 323.49907 L 512.49892 323.49907 L 516.199045 320.902699 L 518.49694 319.69986 L 518.797942 323.396389 L 517.102051 327.100252 L 512.197917 327.100252 L 515.097817 331.999619 L 528.400647 339.201981 L 534.200446 343.499929 L 541.101473 351.296377 L 576.803274 399.101877 L 579.996835 395.896752 L 582.603074 392.999671 L 581.700067 389.501171 L 582.001069 387.198175 L 585.201971 385.203223 L 590.700768 386.098018 L 591.897435 388.401014 L 592.800442 391.298095 L 596.801569 392.200224 L 598.196457 395.698724 L 603.401594 395.698724 L 606.903498 392.801643 L 612.402295 393.102353 L 616.697082 388.202986 L 620.69821 388.202986 L 623.297107 384.499123 L 628.201241 384.499123 L 634.302042 386.802119 L 636.599937 388.496361 L 643.199962 398.896514 L 653.000888 400.297381 L 656.502792 405.798167 L 660.79758 409.50203 L 665.701714 409.80274 L 675.502641 409.80274 L 678.703542 405.497458 L 681.30244 402.901086 L 683.299332 402.600377 L 683.901337 406.296905 L 688.497127 408.599901 L 689.701136 411.203607 L 694.898931 411.496982 L 694.597928 414.100687 L 690.596801 414.702107 L 687.997904 416.396349 L 686.302013 418.398635 L 689.201913 422.696583 L 689.502915 427.896659 L 686.001011 430.500365 L 682.800109 432.803361 L 678.196978 435.099022 L 675.297078 436.499889 L 674.702415 445.997913 L 677.00031 454.102405 L 681.001437 462.199563 L 679.599207 466.49751 L 679.599207 469.101216 L 674.100411 470.29672 L 672.103518 473.201135 L 670.099283 476.098216 L 667.199384 476.098216 L 664.901489 472.599716 L 659.10169 474.301292 L 654.498558 476.002869 L 647.597531 475.40145 L 642.399737 473.098454 L 639.499837 473.098454 L 635.997933 514.002301 L 635.40327 516.598672 L 642.296955 516.598672 L 641.702292 524.703163 L 635.902493 521.798748 L 632.400589 524.402454 L 629.199687 524.402454 L 626.299788 521.197329 L 620.198987 523.199615 L 600.597134 533.599768 L 598.600241 537.597006 L 598.901243 539.599293 L 599.503248 539.900002 L 609.003172 538.997873 L 606.697935 546.500946 L 609.003172 554.898813 L 619.097759 569.596914 L 617.901091 573.300777 L 620.800991 574.503615 L 620.800991 577.701406 L 615.999638 577.701406 L 614.002745 580.297777 L 615.199413 581.698644 L 616.902645 582.901482 L 614.002745 584.896434 C 614.002745 584.896434 611.396507 584.896434 611.396507 586.297301 C 611.396507 587.698168 611.396507 590.602583 611.396507 590.602583 L 614.002745 592.898244 L 614.597408 596.602107 L 612.299513 597.496902 L 610.603623 597.203527 L 609.700616 596.301398 L 608.298386 596.000688 L 605.699489 594.299111 L 597.601795 594.900531 L 595.296558 592.597535 L 593.299665 589.700454 L 584.100743 590.301873 L 581.501846 588.600297 L 576.597712 590.301873 L 563.096661 590.903293 L 559.9031 591.798087 L 555.600971 590.096511 L 550.997839 590.99864 L 546.996712 593.602345 L 533.701223 593.602345 L 532.298993 596.800136 L 521.602402 596.800136 L 516.397266 594.49714 L 511.500473 591.600059 L 507.800348 589.597773 L 504.599446 589.597773 L 500.297317 592.502188 L 496.303531 594.49714 L 494.600299 599.697216 L 493.697292 605.498712 L 495.400524 609.79666 L 492.801627 610.698789 L 489.299723 608.102418 L 484.696591 607.801708 L 480.702806 604.897293 L 476.400676 604.897293 L 470.299875 603.203051 L 464.500076 602.902341 L 459.896944 604.097845 L 453.803484 604.699265 L 453.502482 608.997212 L 450.30158 612.202337 L 450.30158 617.101704 L 450.000578 619.998785 L 446.300453 620.900914 L 444.898223 625.198861 L 440.897096 622.9032 L 437.997196 626.10099 L 433.702408 631.902486 L 426.500379 633.897438 L 422.800254 637.902011 L 419.599353 639.603587 L 416.699453 643.300116 L 414.100556 646.798616 L 409.798426 651.397273 L 409.798426 658.599636 L 404.901634 658.599636 L 399.402837 653.399559 L 401.39973 649.402321 L 395.599931 644.502954 L 390.402136 645.397749 L 375.403415 645.999168 L 371.402288 625.800281 L 363.003591 625.198861 L 364.699482 601.002736 L 361.49858 602.997688 L 358.598681 604.699265 L 355.698781 596.301398 L 354.002891 593.103607 L 349.098757 590.800611 L 343.298957 582.996829 L 335.803268 587.903531 L 324.798332 586.502664 L 318.697531 586.502664 L 313.800739 584.199668 Z"
            />
          </g>

          <!-- Connector lines for visual grouping (drawn below pins) -->
          <g class="kz-connectors">
            <line v-for="(c, i) in connectors" :key="i"
              :x1="c.x1" :y1="c.y1" :x2="c.x2" :y2="c.y2"
              :opacity="c.opacity"
            />
          </g>

          <!-- Project pins -->
          <g v-for="pin in pins" :key="pin.id">
            <circle
              :cx="pin.x" :cy="pin.y"
              :r="hovered === pin.id ? 12 : 0"
              fill="var(--accent)"
              opacity="0.12"
              class="pin-pulse"
            />
            <circle
              :cx="pin.x" :cy="pin.y" r="3.6"
              :fill="hovered === pin.id ? 'var(--accent)' : 'var(--white)'"
              :stroke="pin.major ? 'var(--accent)' : 'var(--gray-400)'"
              stroke-width="0.85"
              class="pin-outer"
              @mouseenter="setHover(pin.id)"
              @mouseleave="clearHover"
            />
            <circle
              :cx="pin.x" :cy="pin.y" r="1.5"
              :fill="pin.major ? 'var(--accent)' : 'var(--gray-400)'"
              :opacity="hovered === pin.id ? 0 : 1"
              class="pin-dot"
              @mouseenter="setHover(pin.id)"
              @mouseleave="clearHover"
            />
            <text
              :x="pin.x + labelOffset(pin).dx"
              :y="pin.y + labelOffset(pin).dy"
              :text-anchor="labelAnchor(pin)"
              class="pin-label"
              :class="{ 'pin-label-major': pin.major }"
            >{{ pin.shortLabel || pin.label }}</text>
          </g>
        </svg>
        </div><!-- /.map-svg-clip -->

        <!-- Tooltip card (sibling to .map-svg-clip so it can extend past the rounded border) -->
        <Transition name="tooltip-pop">
          <div
            v-if="activePin"
            class="map-tooltip"
            :style="tooltipStyle"
            @mouseenter="setHover(activePin.id)"
            @mouseleave="clearHover"
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
          @mouseenter="setHover(pin.id)"
          @mouseleave="clearHover"
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

// label  = full project / location name (used in the side list & tooltip)
// shortLabel = compact label rendered on the SVG itself (avoids overlap)
// labelPos = 'right' | 'left' | 'top' | 'bottom' — direction the label sits relative to the pin
const pins = computed(() => [
  {
    id: 'tengiz',
    x: 70, y: 154, labelPos: 'right', major: true,
    shortLabel: t('Tengiz', 'Тенгиз', 'Теңіз'),
    label: t('Tengiz Field', 'Месторождение Тенгиз', 'Теңіз кен орны'),
    region: t('Atyrau Region', 'Атырауская обл.', 'Атырау облысы'),
    desc: t(
      'Engineering design and author supervision for FGP/WPMP expansion. Multiple design stages delivered for TCO.',
      'Инженерное проектирование и авторский надзор в рамках расширения FGP/WPMP. Выполнены несколько стадий проектирования для ТШО.',
      'FGP/WPMP кеңейту жобасы үшін инжинирингтік жобалау және авторлық қадағалау. ТШО үшін бірнеше жобалау сатысы орындалды.'
    ),
    client: 'Tengizchevroil (TCO)',
    scope: t('FGP/WPMP, 2008–2025', 'FGP/WPMP, 2008–2025', 'FGP/WPMP, 2008–2025'),
  },
  {
    id: 'kashagan',
    x: 30, y: 142, labelPos: 'top', major: true,
    shortLabel: t('Kashagan', 'Кашаган', 'Қашаған'),
    label: t('Kashagan Field', 'Месторождение Кашаган', 'Қашаған кен орны'),
    region: t('Caspian Shelf', 'Каспийский шельф', 'Каспий шельфі'),
    desc: t(
      'EP stage and detailed design documentation for offshore facilities. Longest running engagement spanning 13 years.',
      'Разработка проектной документации EP-стадии и рабочей документации для морских объектов. Самое продолжительное сотрудничество — 13 лет.',
      'Теңіз нысандары үшін EP сатысы және жұмыс құжаттамасы. Ең ұзақ мерзімді ынтымақтастық — 13 жыл.'
    ),
    client: 'NCOC N.V.',
    scope: t('EP & Detailed Design, 2005–2018', 'EP и РД, 2005–2018', 'EP және РД, 2005–2018'),
  },
  {
    id: 'karachaganak',
    x: 62, y: 72, labelPos: 'right', major: true,
    shortLabel: t('Karachaganak', 'Карачаганак', 'Қарашығанақ'),
    label: t('Karachaganak', 'Карачаганак', 'Қарашығанақ'),
    region: t('West Kazakhstan Region', 'ЗКО', 'БҚО'),
    desc: t(
      'FS, EIA, working documentation and author supervision for the 4th stabilization line, Phase III development, condensate/LPG loading and the Karachaganak–Uralsk gas pipeline.',
      'ТЭО, ОВОС, рабочая документация и авторский надзор: 4-я линия стабилизации, Этап III освоения, наливные эстакады конденсата/СУГ и газопровод Карачаганак–Уральск.',
      'ТЭН, ҚОӘБ, жұмыс құжаттамасы және авторлық қадағалау: 4-ші тұрақтандыру желісі, III кезеңі, конденсат/СҰГ эстакадалары және Қарашығанақ–Орал газ құбыры.'
    ),
    client: 'Karachaganak Petroleum Operating B.V.',
    scope: t('Design, EIA, Author Supervision', 'Проект, ОВОС, Авторнадзор', 'Жоба, ҚОӘБ, Авторлық қадағалау'),
  },
  {
    id: 'aktau',
    x: 35, y: 178, labelPos: 'right', major: true,
    shortLabel: t('Aktau (HQ)', 'Актау (ГО)', 'Ақтау (ГО)'),
    label: t('Aktau (HQ)', 'Актау (ГО)', 'Ақтау (ГО)'),
    region: t('Mangistau Region', 'Мангистауская обл.', 'Маңғыстау облысы'),
    desc: t(
      'CE&R headquarters and base for Mangistau Region delivery: Dunga, Severnye Buzachi, Karazhanbas/Kalamkas, Uzen, KCOI steel plant and Bautino offshore support base.',
      'Головной офис CE&R и база работ по Мангистау: Дунга, Северные Бузачи, Каражанбас/Каламкас, Узень, завод КМОИ и база Баутино.',
      'CE&R бас кеңсесі және Маңғыстау бойынша жұмыс базасы: Доңға, Солтүстік Бұзашы, Қаражанбас/Қаламқас, Өзен, КМОИ зауыты және Баутино базасы.'
    ),
    client: t('Multiple operators (Maersk, Buzachi, KCOI, …)', 'Maersk, Buzachi, КМОИ и др.', 'Maersk, Buzachi, КМОИ және т.б.'),
    scope: t('Field Development & Infrastructure', 'Обустройство и инфраструктура', 'Жайластыру және инфрақұрылым'),
  },
  {
    id: 'atyrau',
    x: 55, y: 138, labelPos: 'left', major: false,
    shortLabel: t('Atyrau', 'Атырау', 'Атырау'),
    label: t('Atyrau', 'Атырау', 'Атырау'),
    region: t('Atyrau Region', 'Атырауская обл.', 'Атырау облысы'),
    desc: t(
      'Atyrau Refinery reconstruction documentation, Western Prorva sulfur removal unit and CPC pipeline detail design (Atyrau OPS, 0–204 km).',
      'ПСД реконструкции Атырауского НПЗ, установка сероочистки на Западной Прорве и рабочая документация КТК (НПС Атырау, 0–204 км).',
      'Атырау МӨЗ-ні қайта құру ЖСҚ, Батыс Прорва күкірт тазалау қондырғысы және КТК жұмыс құжаттамасы (Атырау МАС-ы, 0–204 км).'
    ),
    client: t('Atyrau Refinery, KERNEU, CPC', 'АНПЗ, KERNEU, КТК', 'АМӨЗ, KERNEU, КТК'),
    scope: t('Refinery, Pipeline, GPCU', 'НПЗ, Трубопровод, УКПГ', 'МӨЗ, Құбыр, ҮКПГ'),
  },
  {
    id: 'uralsk',
    x: 75, y: 80, labelPos: 'left', major: false,
    shortLabel: t('Uralsk', 'Уральск', 'Орал'),
    label: t('Uralsk', 'Уральск', 'Орал'),
    region: t('West Kazakhstan Region', 'ЗКО', 'БҚО'),
    desc: t(
      'Chinarevskoye OPF and oil pipeline design, trunk pump station working project, and GPCU oil & gas processing facilities for Zhaikmunai / Nostrum Oil & Gas.',
      'Проект УПН и нефтепровода Чинаревское НГКМ, рабочий проект МНС, объекты сбора и подготовки нефти и газа УКПНГ для Жаикмунай / Nostrum Oil & Gas.',
      'Шынарево МДҚ және мұнай құбыры жобасы, МСС жұмыс жобасы, МжГКДҚ-дағы мұнай-газ нысандары (Жайықмұнай / Nostrum Oil & Gas).'
    ),
    client: 'Zhaikmunai / Nostrum Oil & Gas',
    scope: t('Design & Author Supervision', 'Проектирование и Авторнадзор', 'Жобалау және Авторлық қадағалау'),
  },
  {
    id: 'aktobe',
    x: 115, y: 90, labelPos: 'right', major: false,
    shortLabel: t('Aktobe', 'Актобе', 'Ақтөбе'),
    label: t('Aktobe', 'Актобе', 'Ақтөбе'),
    region: t('Aktobe Region', 'Актюбинская обл.', 'Ақтөбе облысы'),
    desc: t(
      'Alibekmola full field development (SPPD, CPGTU 3 mln t/y, GTU) and Alibekmola GPF-50 to Zhanazhol-KS-13 gas pipeline; engineering consulting for KazakhOil Aktobe.',
      'Полное обустройство Алибекмолы (СППД, ЦППНГ 3 млн т/год, УПТГ) и газопровод от УКПГ-50 Алибекмола до Жанажол-КС-13; инжиниринговый консалтинг KazakhOil Aktobe.',
      'Әлібекмола кешенді жайластыруы (СППД, ЦППНГ 3 млн т/жыл, УПТГ) және Әлібекмола ГӨЗ-50–Жаңажол-ҚС-13 газ құбыры; KazakhOil Aktobe инжинирингтік кеңесі.'
    ),
    client: 'KazakhOil Aktobe LLP',
    scope: t('Field Development & Pipeline', 'Обустройство и газопровод', 'Жайластыру және газ құбыры'),
  },
  {
    id: 'shymkent',
    x: 200, y: 180, labelPos: 'top', major: false,
    shortLabel: t('Shymkent', 'Шымкент', 'Шымкент'),
    label: t('Shymkent', 'Шымкент', 'Шымкент'),
    region: t('Turkistan Region', 'Туркестанская обл.', 'Түркістан облысы'),
    desc: t(
      'Feasibility study and Pre-EIA for the modernization and reconstruction of the Shymkent Refinery (PKOP, with Honeywell-ACS).',
      'ТЭО и ПредОВОС модернизации и реконструкции Шымкентского НПЗ (ПКОП, совместно с АО «Ханиуэлл-АСУ»).',
      'Шымкент МӨЗ-ін жаңғырту және қайта құру ТЭН-і мен Алдын-ала ҚОӘБ (ПКОП, «Ханиуэлл-АСУ» бірлесіп).'
    ),
    client: 'PKOP / Honeywell-ACS',
    scope: t('FS & Pre-EIA', 'ТЭО и ПредОВОС', 'ТЭН және Алдын-ала ҚОӘБ'),
  },
])

// Pure positioning helpers — return SVG offset for the label relative to the pin.
const LABEL_GAP = 5
function labelOffset (pin) {
  switch (pin.labelPos) {
    case 'left':   return { dx: -LABEL_GAP, dy: 1.3 }
    case 'top':    return { dx: 0, dy: -LABEL_GAP - 1 }
    case 'bottom': return { dx: 0, dy: LABEL_GAP + 4 }
    case 'right':
    default:       return { dx: LABEL_GAP, dy: 1.3 }
  }
}
function labelAnchor (pin) {
  if (pin.labelPos === 'left') return 'end'
  if (pin.labelPos === 'top' || pin.labelPos === 'bottom') return 'middle'
  return 'start'
}

// Faint dashed lines that visually group related project sites.
const connectors = [
  // Atyrau cluster — Kashagan (offshore) → Atyrau (city) → Tengiz (field)
  { x1: 30, y1: 142, x2: 55, y2: 138, opacity: 0.35 },
  { x1: 55, y1: 138, x2: 70, y2: 154, opacity: 0.35 },
  // West-Kazakhstan corridor — Atyrau → Uralsk → Karachaganak
  { x1: 55, y1: 138, x2: 75, y2: 80,  opacity: 0.22 },
  { x1: 75, y1: 80,  x2: 62, y2: 72,  opacity: 0.30 },
  // Mangistau peninsula link — Aktau ↔ Atyrau coast
  { x1: 35, y1: 178, x2: 55, y2: 138, opacity: 0.22 },
]

const activePin = computed(() => pins.value.find(p => p.id === hovered.value) ?? null)

// Hover handling with a small grace period so the cursor can travel from a pin
// to the tooltip card (and back) without the card flickering away.
const HOVER_GRACE_MS = 120
let leaveTimer = null
function setHover (id) {
  if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null }
  hovered.value = id
}
function clearHover () {
  if (leaveTimer) clearTimeout(leaveTimer)
  leaveTimer = setTimeout(() => { hovered.value = null; leaveTimer = null }, HOVER_GRACE_MS)
}

// Must match the <svg viewBox> above.
const SVG_MIN_X = 16
const SVG_WIDTH = 334
const SVG_MIN_Y = -2
const SVG_HEIGHT = 196
const SVG_MID_X = SVG_MIN_X + SVG_WIDTH / 2
const SVG_MID_Y = SVG_MIN_Y + SVG_HEIGHT / 2
const TOOLTIP_W = 240   // .map-tooltip width + a little breathing room
const TOOLTIP_H = 170   // approx; we only need it to decide above/below flip

// Position the tooltip on whichever side keeps it inside the map frame:
// flip to the left of the pin in the right half, and above the pin in the bottom half.
const tooltipStyle = computed(() => {
  if (!activePin.value) return {}
  const { x, y } = activePin.value
  const pctX = ((x - SVG_MIN_X) / SVG_WIDTH * 100).toFixed(2)
  const pctY = ((y - SVG_MIN_Y) / SVG_HEIGHT * 100).toFixed(2)
  const flipX = x > SVG_MID_X
  const flipY = y > SVG_MID_Y
  return {
    left: flipX ? `calc(${pctX}% - ${TOOLTIP_W + 4}px)` : `calc(${pctX}% + 24px)`,
    top:  flipY ? `calc(${pctY}% - ${TOOLTIP_H}px)`     : `calc(${pctY}% - 12px)`,
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

onUnmounted(() => {
  if (leaveTimer) clearTimeout(leaveTimer)
  ctx?.revert()
})
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
/* Widen beyond the default 1200px .container to give the map more room. */
.map-stage {
  max-width: 1440px;
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 40px;
  align-items: start;
}

/* ── SVG map ────────────────────────────────────────────────────── */
/* .map-svg-wrap is the positioning context — overflow is intentionally not
   clipped so the tooltip card can extend past the map's rounded border. */
.map-svg-wrap {
  position: relative;
}

/* The inner clip carries the rounded corners, background and border so the
   SVG itself stays neatly framed without trapping the tooltip inside it. */
.map-svg-clip {
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
  stroke-width: 1.6;
  vector-effect: non-scaling-stroke;
}

.kz-connectors line {
  stroke: var(--accent);
  stroke-width: 0.6;
  stroke-dasharray: 2.5 1.8;
  vector-effect: non-scaling-stroke;
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
  font-size: 5.4px;
  fill: var(--gray-600, #555);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  pointer-events: none;
  paint-order: stroke;
  stroke: rgba(240, 244, 248, 0.9);
  stroke-width: 1.6px;
  stroke-linejoin: round;
}

.pin-label-major {
  font-weight: 700;
  fill: var(--dark);
  font-size: 6.2px;
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
  /* pointer-events ON so the cursor can travel to the card without
     it disappearing; the grace period in clearHover() bridges the gap. */
  pointer-events: auto;
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
