<template>
  <section class="clients">
    <div class="container">
      <div class="clients-header">
        <span class="clients-label">
          {{ t('Major Clients', 'Крупные заказчики', 'Ірі тапсырыс берушілер') }}
        </span>
        <span class="clients-count">{{ clients.length }}</span>
      </div>
      <div class="clients-grid">
        <div class="client-item" v-for="c in clients" :key="c.file" :title="c.name">
          <img :src="`/images/clients/${c.file}`" :alt="c.name" class="client-logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'
const { t } = useLanguage()

const clients = [
  { file: 'tco-tengizchevroil.png',    name: 'Tengizchevroil (TCO)' },
  { file: 'ncoc.png',                  name: 'North Caspian Operating Company (NCOC)' },
  { file: 'nc-kazmunaigas.png',        name: 'NC KazMunaiGaz' },
  { file: 'rd-kazmunaigas.png',        name: 'RD KazMunaiGaz' },
  { file: 'mangistaumunaigas.png',     name: 'MangistauMunaiGaz' },
  { file: 'karachaganak-petroleum.png',name: 'Karachaganak Petroleum Operating B.V.' },
  { file: 'maersk-oil.jpg',            name: 'Maersk Oil (TotalEnergies)' },
  { file: 'min-energy-rk.png',         name: 'Ministry of Energy, Republic of Kazakhstan' },
  { file: 'atyrau-npz.png',            name: 'Atyrau Refinery' },
  { file: 'kazakhoil-aktobe.png',      name: 'KazakhOil Aktobe' },
  { file: 'karakuduk-munai.png',       name: 'Karakuduk Munai' },
  { file: 'karazhanbas-munai.png',     name: 'Karazhanbas Munai' },
  { file: 'sp-kazgermunai.png',        name: 'JV Kazgermunai' },
  { file: 'kcoi.png',                  name: 'Kazakhstan Caspian Offshore Industries' },
  { file: 'nostrum-oil.png',           name: 'Nostrum Oil & Gas (Zhaikmuai)' },
  { file: 'buzachi-operating.png',     name: 'Buzachi Operating Ltd' },
  { file: 'technipfmc.png',            name: 'TechnipFMC' },
  { file: 'kazakh-projects-jv.png',    name: 'Kazakh Projects JV Limited' },
  { file: 'consafe-mcnulty.png',       name: 'Consafe McNulty JV Limited' },
  { file: 'king-institute.png',        name: 'Kazakh Institute of Oil & Gas (KING)' },
  { file: 'almeks-group.png',          name: 'Almeks Holding Group' },
  { file: 'kerneu.png',                name: 'Kerneu Limited' },
  { file: 'teniz-service.png',         name: 'TenizService' },
  { file: 'honeywell-asu.png',         name: 'Honeywell ASU' },
]
</script>

<style scoped>
.clients {
  padding: 48px 0;
  border-bottom: 1px solid var(--gray-200);
  border-top: 1px solid var(--gray-200);
}

.clients-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
}

.clients-label {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  background: var(--accent);
  color: var(--on-accent);
  font-size: 11px;
  font-weight: 600;
  border-radius: 100px;
  letter-spacing: 0.5px;
}

.clients-count {
  font-size: 11px;
  font-weight: 600;
  color: var(--gray-500);
  background: var(--gray-100);
  border: 1px solid var(--gray-200);
  border-radius: 100px;
  padding: 4px 10px;
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 12px;
}

.client-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 12px;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  background: var(--white);
  transition: border-color 0.2s, box-shadow 0.2s, opacity 0.2s;
  opacity: 0.6;
  min-height: 60px;
}

.client-item:hover {
  opacity: 1;
  border-color: var(--gray-300);
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}

.client-logo {
  max-width: 100%;
  max-height: 40px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.2s;
}

.client-item:hover .client-logo {
  filter: grayscale(0%);
}

@media (max-width: 1200px) {
  .clients-grid { grid-template-columns: repeat(6, 1fr); }
}

@media (max-width: 900px) {
  .clients-grid { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 640px) {
  .clients-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
