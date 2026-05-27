<template>
  <section class="stats-sec">
    <div class="container stats-grid">

      <!-- Card 1: 12 Major Fields — Lime Green -->
      <div class="stat-card stat-lime">
        <div class="stat-card-top">
          <div class="stat-number">12</div>
          <div class="stat-label">
            {{ t('Major Oil & Gas Fields', 'Крупных нефтегазовых месторождений', 'Ірі мұнай-газ кен орындары') }}
          </div>
        </div>
        <div class="globe-wrap">
          <svg class="globe-svg" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Dots representing fields in Kazakhstan region -->
            <g opacity="0.4">
              <!-- Background dot grid -->
              <circle cx="30" cy="100" r="3" fill="var(--on-accent)"/>
              <circle cx="50" cy="80" r="2.5" fill="var(--on-accent)"/>
              <circle cx="70" cy="70" r="3" fill="var(--on-accent)"/>
              <circle cx="90" cy="65" r="2.5" fill="var(--on-accent)"/>
              <circle cx="110" cy="60" r="3" fill="var(--on-accent)"/>
              <circle cx="130" cy="58" r="3" fill="var(--on-accent)"/>
              <circle cx="150" cy="60" r="2.5" fill="var(--on-accent)"/>
              <circle cx="170" cy="65" r="3" fill="var(--on-accent)"/>
              <circle cx="190" cy="72" r="2.5" fill="var(--on-accent)"/>
              <circle cx="210" cy="80" r="3" fill="var(--on-accent)"/>
              <circle cx="40" cy="110" r="3" fill="var(--on-accent)"/>
              <circle cx="60" cy="105" r="2.5" fill="var(--on-accent)"/>
              <circle cx="80" cy="100" r="3" fill="var(--on-accent)"/>
              <circle cx="100" cy="95" r="3" fill="var(--on-accent)"/>
              <circle cx="120" cy="92" r="2.5" fill="var(--on-accent)"/>
              <circle cx="140" cy="94" r="3" fill="var(--on-accent)"/>
              <circle cx="160" cy="98" r="2.5" fill="var(--on-accent)"/>
              <circle cx="180" cy="102" r="3" fill="var(--on-accent)"/>
              <circle cx="200" cy="108" r="2.5" fill="var(--on-accent)"/>
              <circle cx="50" cy="125" r="3" fill="var(--on-accent)"/>
              <circle cx="70" cy="122" r="2.5" fill="var(--on-accent)"/>
              <circle cx="95" cy="118" r="3" fill="var(--on-accent)"/>
              <circle cx="115" cy="116" r="2.5" fill="var(--on-accent)"/>
              <circle cx="135" cy="118" r="3" fill="var(--on-accent)"/>
              <circle cx="155" cy="122" r="2.5" fill="var(--on-accent)"/>
              <circle cx="175" cy="127" r="3" fill="var(--on-accent)"/>
              <circle cx="60" cy="142" r="3" fill="var(--on-accent)"/>
              <circle cx="85" cy="140" r="2.5" fill="var(--on-accent)"/>
              <circle cx="108" cy="138" r="3" fill="var(--on-accent)"/>
              <circle cx="130" cy="140" r="2.5" fill="var(--on-accent)"/>
              <circle cx="152" cy="143" r="3" fill="var(--on-accent)"/>
            </g>
            <!-- 12 highlighted field locations -->
            <circle cx="80" cy="95" r="5" fill="var(--on-accent)"/>
            <circle cx="120" cy="85" r="5" fill="var(--on-accent)"/>
            <circle cx="150" cy="92" r="5" fill="var(--on-accent)"/>
            <circle cx="170" cy="78" r="5" fill="var(--on-accent)"/>
            <circle cx="100" cy="110" r="5" fill="var(--on-accent)"/>
            <circle cx="140" cy="108" r="5" fill="var(--on-accent)"/>
            <circle cx="60" cy="105" r="4" fill="var(--on-accent)"/>
            <circle cx="190" cy="95" r="4" fill="var(--on-accent)"/>
            <circle cx="115" cy="125" r="4" fill="var(--on-accent)"/>
            <circle cx="75" cy="128" r="4" fill="var(--on-accent)"/>
            <circle cx="165" cy="115" r="4" fill="var(--on-accent)"/>
            <circle cx="135" cy="72" r="4" fill="var(--on-accent)"/>
          </svg>
        </div>
        <RouterLink to="/portfolio" class="see-more-btn">
          {{ t('See Portfolio', 'Портфолио', 'Портфолио') }}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </RouterLink>
      </div>

      <!-- Card 2: Mission Statement -->
      <div class="stat-card stat-white">
        <div class="toggle-row">
          <div class="toggle-ui">
            <span class="toggle-dot active"></span>
            <span class="toggle-dot"></span>
            <span class="toggle-dot"></span>
          </div>
          <div class="toggle-switch on">
            <div class="toggle-thumb"></div>
          </div>
        </div>

        <p class="mission-text">
          {{ t(
            'CE&R ',
            'CE&R ',
            'CE&R '
          ) }}<em>{{ t('exists', 'создана', 'бар') }}</em>
          {{ t(
            'to solve the hardest ',
            'для решения самых сложных ',
            'ең күрделі '
          ) }}<strong>{{ t(
            'engineering challenges',
            'инженерных задач',
            'инженерлік міндеттерді'
          ) }}</strong>
          {{ t(
            ' in Kazakhstan\'s energy sector. With precision, integrity,',
            ' в нефтегазовом секторе Казахстана. С точностью, честностью',
            ' шешу үшін. Дәлдікпен, адалдықпен'
          ) }}
          <strong>{{ t(' and at scale.', ' и в полном масштабе.', ' және кең ауқымда.') }}</strong>
        </p>

        <div class="ceo-row">
          <div class="ceo-initials">GD</div>
          <div>
            <div class="ceo-name">{{ t('General Director', 'Генеральный директор', 'Бас директор') }}</div>
            <div class="ceo-title">Caspian Engineering &amp; Research, LLP</div>
          </div>
        </div>
      </div>

      <!-- Card 3: Dark — Certifications & Experience -->
      <div class="stat-card stat-dark">
        <div class="dark-card-inner">
          <div class="dark-stat">
            <span class="dark-stat-value">20+</span>
            <span class="dark-stat-label">
              {{ t(
                'years of oil & gas engineering expertise in the Republic of Kazakhstan',
                'лет инженерного опыта в нефтегазовом секторе Казахстана',
                'жылдан астам Қазақстандағы мұнай-газ инжинирингінің тәжірибесі'
              ) }}
            </span>
          </div>

          <div class="cert-badges">
            <span class="cert-badge">ISO 9001:2015</span>
            <span class="cert-badge">ISO 14001:2015</span>
            <span class="cert-badge">OHSAS 18001:2008</span>
            <span class="cert-badge">ISO 31000:2009</span>
          </div>

          <div class="dark-globe">
            <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.15">
                <line x1="0" y1="30" x2="200" y2="30" stroke="white" stroke-width="0.5"/>
                <line x1="0" y1="60" x2="200" y2="60" stroke="white" stroke-width="0.5"/>
                <line x1="0" y1="90" x2="200" y2="90" stroke="white" stroke-width="0.5"/>
                <line x1="25" y1="0" x2="25" y2="120" stroke="white" stroke-width="0.5"/>
                <line x1="50" y1="0" x2="50" y2="120" stroke="white" stroke-width="0.5"/>
                <line x1="75" y1="0" x2="75" y2="120" stroke="white" stroke-width="0.5"/>
                <line x1="100" y1="0" x2="100" y2="120" stroke="white" stroke-width="0.5"/>
                <line x1="125" y1="0" x2="125" y2="120" stroke="white" stroke-width="0.5"/>
                <line x1="150" y1="0" x2="150" y2="120" stroke="white" stroke-width="0.5"/>
                <line x1="175" y1="0" x2="175" y2="120" stroke="white" stroke-width="0.5"/>
              </g>
              <!-- Caspian Sea region approximate locations -->
              <circle cx="75" cy="55" r="6" fill="var(--accent)" opacity="0.9"/>
              <circle cx="110" cy="45" r="6" fill="var(--accent)" opacity="0.9"/>
              <circle cx="140" cy="60" r="6" fill="var(--accent)" opacity="0.9"/>
              <circle cx="90" cy="75" r="4" fill="var(--accent)" opacity="0.6"/>
              <circle cx="60" cy="70" r="4" fill="var(--accent)" opacity="0.6"/>
              <line x1="75" y1="55" x2="110" y2="45" stroke="var(--accent)" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.5"/>
              <line x1="110" y1="45" x2="140" y2="60" stroke="var(--accent)" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.5"/>
              <line x1="75" y1="55" x2="90" y2="75" stroke="var(--accent)" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.5"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'
const { t } = useLanguage()
</script>

<style scoped>
.stats-sec {
  padding: 0 0 80px;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr;
  gap: 16px;
  align-items: stretch;
}

.stat-card {
  border-radius: 20px;
  overflow: hidden;
  min-height: 320px;
}

/* Lime Card */
.stat-lime {
  background: var(--accent);
  padding: 32px;
  display: flex;
  flex-direction: column;
}

.stat-card-top {
  flex: 1;
}

.stat-number {
  font-size: 56px;
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1;
  color: var(--on-accent);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  font-weight: 500;
  color: color-mix(in srgb, var(--on-accent) 65%, transparent);
  line-height: 1.4;
}

.globe-wrap {
  flex: 1;
  display: flex;
  align-items: center;
}

.globe-svg {
  width: 100%;
  height: auto;
}

.see-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--dark);
  color: var(--white);
  font-size: 13px;
  font-weight: 600;
  border-radius: 100px;
  width: fit-content;
  transition: background 0.2s;
}

.see-more-btn:hover {
  background: #333;
}

/* White Card */
.stat-white {
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toggle-ui {
  display: flex;
  gap: 8px;
  align-items: center;
}

.toggle-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gray-300);
}

.toggle-dot.active {
  background: var(--dark);
  width: 10px;
  height: 10px;
}

.toggle-switch {
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background: var(--gray-300);
  position: relative;
}

.toggle-switch.on {
  background: var(--accent);
}

.toggle-thumb {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--on-accent);
}

.mission-text {
  font-size: clamp(18px, 2.2vw, 22px);
  font-weight: 400;
  line-height: 1.45;
  color: var(--dark);
  flex: 1;
}

.mission-text em { font-style: italic; }
.mission-text strong { font-weight: 700; }

.ceo-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ceo-initials {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: var(--gray-700);
  flex-shrink: 0;
}

.ceo-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--dark);
}

.ceo-title {
  font-size: 11px;
  color: var(--gray-500);
  margin-top: 2px;
}

/* Dark Card */
.stat-dark {
  background: var(--dark);
  padding: 32px;
}

.dark-card-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dark-stat-value {
  display: block;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -2px;
  color: var(--white);
  line-height: 1;
  margin-bottom: 10px;
}

.dark-stat-label {
  font-size: 13px;
  color: rgba(255,255,255,0.55);
  line-height: 1.5;
}

.cert-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.cert-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 100px;
  font-size: 10px;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.3px;
  white-space: nowrap;
}

.dark-globe {
  flex: 1;
  display: flex;
  align-items: flex-end;
}

.dark-globe svg {
  width: 100%;
  height: auto;
}

@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .stat-dark {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-dark {
    grid-column: 1;
  }
}
</style>
