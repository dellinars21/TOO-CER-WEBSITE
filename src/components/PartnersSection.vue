<template>
  <section class="clients" ref="sectionRef">

    <div class="container">
      <div class="clients-header">
        <div class="tab-group">
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'clients' }"
            @click="switchTab('clients')"
          >
            {{ t('Major Clients', 'Крупные заказчики', 'Ірі тапсырыс берушілер') }}
            <span class="tab-count">{{ clients.length }}</span>
          </button>
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'partners' }"
            @click="switchTab('partners')"
          >
            {{ t('Partners', 'Партнёры', 'Серіктестер') }}
            <span class="tab-count">{{ partners.length }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Marquee stage -->
    <div class="marquee-stage" ref="stageRef">

      <!-- Row 1: scrolls left (← direction) -->
      <div class="marquee-row" @mouseenter="paused = true" @mouseleave="paused = false">
        <div class="marquee-track" :class="{ paused }" :style="{ '--dur': row1Duration }">
          <div class="client-item" v-for="(item, i) in row1doubled" :key="`r1-${i}`" :title="item.name">
            <img :src="`./images/${activeTab}/${item.file}`" :alt="item.name" class="client-logo" />
          </div>
        </div>
      </div>

      <!-- Row 2: scrolls right (→ direction) -->
      <div class="marquee-row" @mouseenter="paused = true" @mouseleave="paused = false">
        <div class="marquee-track track-rtl" :class="{ paused }" :style="{ '--dur': row2Duration }">
          <div class="client-item" v-for="(item, i) in row2doubled" :key="`r2-${i}`" :title="item.name">
            <img :src="`./images/${activeTab}/${item.file}`" :alt="item.name" class="client-logo" />
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { gsap, ease } from '../composables/useScrollAnimation.js'

const { t } = useLanguage()
const activeTab  = ref('clients')
const paused     = ref(false)
const sectionRef = ref(null)
const stageRef   = ref(null)
let   ctx

const clients = [
  { file: 'tco-tengizchevroil.png',     name: 'Tengizchevroil (TCO)' },
  { file: 'ncoc.png',                   name: 'North Caspian Operating Company (NCOC)' },
  { file: 'nc-kazmunaigas.png',         name: 'NC KazMunaiGaz' },
  { file: 'rd-kazmunaigas.png',         name: 'RD KazMunaiGaz' },
  { file: 'mangistaumunaigas.png',      name: 'MangistauMunaiGaz' },
  { file: 'karachaganak-petroleum.png', name: 'Karachaganak Petroleum Operating B.V.' },
  { file: 'maersk-oil.jpg',             name: 'Maersk Oil Kazakhstan GmbH' },
  { file: 'min-energy-rk.png',          name: 'Ministry of Energy, Republic of Kazakhstan' },
  { file: 'atyrau-npz.png',             name: 'Atyrau Refinery' },
  { file: 'kazakhoil-aktobe.png',       name: 'KazakhOil Aktobe' },
  { file: 'karakuduk-munai.png',        name: 'Karakuduk Munai' },
  { file: 'karazhanbas-munai.png',      name: 'Karazhanbas Munai' },
  { file: 'sp-kazgermunai.png',         name: 'JV Kazgermunai' },
  { file: 'kcoi.png',                   name: 'Kazakhstan Caspian Offshore Industries' },
  { file: 'nostrum-oil.png',            name: 'Nostrum Oil & Gas (Zhaikmuai)' },
  { file: 'buzachi-operating.png',      name: 'Buzachi Operating Ltd' },
  { file: 'technipfmc.png',             name: 'TechnipFMC' },
  { file: 'kazakh-projects-jv.png',     name: 'Kazakh Projects JV Limited' },
  { file: 'consafe-mcnulty.png',        name: 'Consafe McNulty JV Limited' },
  { file: 'king-institute.png',         name: 'KING' },
  { file: 'almeks-group.png',           name: 'Almeks Holding Group' },
  { file: 'kerneu.png',                 name: 'Kerneu Limited' },
  { file: 'teniz-service.png',          name: 'TenizService' },
  { file: 'honeywell-asu.png',          name: 'Honeywell ASU' },
]

const partners = [
  { file: 'petrofac.png',              name: 'Petrofac' },
  { file: 'cbi-kazakhstan.png',        name: 'CBI Kazakhstan' },
  { file: 'akzhayyk-geo.jpg',          name: 'Akzhayyk Geo' },
  { file: 'eikos.png',                 name: 'Eikos' },
  { file: 'electroshchit.png',         name: 'Electroshchit' },
  { file: 'firecon.png',               name: 'Firecon' },
  { file: 'giprogazoochistka.png',     name: 'Giprogazoochistka' },
  { file: 'ic-munaigas.png',           name: 'IC MunaiGas' },
  { file: 'kape.png',                  name: 'Kazakhstan Agency of Applied Ecology (KAPE)' },
  { file: 'kazekoproekt.png',          name: 'KazEkoProekt' },
  { file: 'kirg-institute.png',        name: 'Kazakh Institute of Exploration Geophysics (KIRG)' },
  { file: 'kitng-institute.png',       name: 'Kazakh Institute of Oil & Gas Transport (KITNG)' },
  { file: 'mangistau-engineering.png', name: 'Mangistau Engineering' },
  { file: 'ozna.jpg',                  name: 'OZNA' },
  { file: 'tmk.png',                   name: 'TMK' },
  { file: 'uraltehnostroy.png',        name: 'UralTehnoStroy' },
]

// Active list split across 2 rows
const activeList = computed(() => activeTab.value === 'clients' ? clients : partners)

const mid = computed(() => Math.ceil(activeList.value.length / 2))

// Each row's items duplicated for seamless infinite loop
const row1doubled = computed(() => {
  const half = activeList.value.slice(0, mid.value)
  return [...half, ...half]
})
const row2doubled = computed(() => {
  const half = activeList.value.slice(mid.value)
  return [...half, ...half]
})

// Duration scales with item count so speed feels consistent (~5s per item)
const ITEM_WIDTH = 158  // px: 148px cell + 10px gap
const SPEED_PX_S = 52   // pixels per second

const row1Duration = computed(() => {
  const px = mid.value * ITEM_WIDTH
  return `${Math.round(px / SPEED_PX_S)}s`
})
const row2Duration = computed(() => {
  const count = activeList.value.length - mid.value
  const px    = count * ITEM_WIDTH
  return `${Math.round(px / SPEED_PX_S)}s`
})

// Tab switch: fade stage out → swap data → fade in
async function switchTab(tab) {
  if (tab === activeTab.value) return
  await gsap.to(stageRef.value, { opacity: 0, y: 6, duration: 0.18, ease: 'power2.in' })
  activeTab.value = tab
  await nextTick()
  gsap.fromTo(stageRef.value,
    { opacity: 0, y: -6 },
    { opacity: 1, y: 0, duration: 0.28, ease: ease.out }
  )
}

onMounted(() => {
  ctx = gsap.context(() => {
    // Tab header entrance
    gsap.from('.tab-group', {
      opacity: 0, y: 14, duration: 0.5, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 88%', once: true }
    })
    // Marquee stage slides up on scroll entry
    gsap.from(stageRef.value, {
      opacity: 0, y: 28, duration: 0.7, delay: 0.1, ease: ease.out,
      scrollTrigger: { trigger: sectionRef.value, start: 'top 86%', once: true }
    })
  }, sectionRef.value)
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.clients {
  padding: 36px 0 40px;
  border-top: 1px solid var(--gray-200);
  border-bottom: 1px solid var(--gray-200);
}

/* ── Tabs ──────────────────────────────────────────────────────────── */
.clients-header {
  margin-bottom: 18px;
}

.tab-group {
  display: inline-flex;
  gap: 4px;
  background: var(--gray-100);
  border-radius: 100px;
  padding: 4px;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 18px;
  font-size: 12px;
  font-weight: 600;
  color: var(--gray-500);
  background: none;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
}

.tab-btn:hover { color: var(--dark); }

.tab-btn.active {
  background: var(--white);
  color: var(--dark);
  box-shadow: 0 1px 4px rgba(0,0,0,0.10);
}

.tab-count {
  font-size: 10px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 100px;
  background: var(--gray-200);
  color: var(--gray-500);
  transition: background 0.2s, color 0.2s;
}

.tab-btn.active .tab-count {
  background: var(--accent);
  color: var(--on-accent);
}

/* ── Marquee stage ────────────────────────────────────────────────── */
.marquee-stage {
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* Edge fades to hint at more content */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );
}

/* ── Individual row ───────────────────────────────────────────────── */
.marquee-row {
  overflow: hidden;  /* clips the scrolling track */
}

/* ── Scrolling track ──────────────────────────────────────────────── */
.marquee-track {
  display: flex;
  gap: 10px;
  width: max-content;
  /* Row 1: scrolls left (positive → negative X) */
  animation: scroll-ltr var(--dur, 30s) linear infinite;
}

/* Row 2: scrolls right (starts at -50%, moves to 0) */
.marquee-track.track-rtl {
  animation-name: scroll-rtl;
}

/* Pause both rows when either is hovered */
.marquee-track.paused {
  animation-play-state: paused;
}

@keyframes scroll-ltr {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes scroll-rtl {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}

/* ── Logo cell ────────────────────────────────────────────────────── */
.client-item {
  flex-shrink: 0;
  width: 148px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 14px;
  box-sizing: border-box;
  border: 1px solid var(--gray-200);
  border-radius: 14px;
  background: var(--white);
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  cursor: default;
}

.client-item:hover {
  border-color: var(--gray-300);
  box-shadow: 0 4px 14px rgba(0,0,0,0.07);
  transform: translateY(-2px);
}

.client-logo {
  display: block;
  max-width: 112px;
  max-height: 40px;
  width: auto;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;
  transition: transform 0.2s;
}

.client-item:hover .client-logo {
  transform: scale(1.07);
}

/* ── Mobile ───────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .clients-grid {
    gap: 8px;
  }

  .client-item {
    width: 128px;
    height: 68px;
    padding: 10px 12px;
  }

  .client-logo {
    max-width: 96px;
    max-height: 34px;
  }
}
</style>
