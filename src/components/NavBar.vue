<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <!-- Scroll progress indicator -->
    <div class="nav-progress">
      <div class="nav-progress-bar" :style="{ transform: `scaleX(${scrollProgress / 100})` }"></div>
    </div>
    <div class="container nav-inner">
      <RouterLink to="/" class="logo">
        <img src="/images/logo.svg" alt="CER — Caspian Engineering &amp; Research" class="logo-img" />
      </RouterLink>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <RouterLink to="/" @click="menuOpen = false">{{ t('Home', 'Главная', 'Басты бет') }}</RouterLink>
        <RouterLink to="/about" @click="menuOpen = false">{{ t('About Us', 'О компании', 'Компания туралы') }}</RouterLink>
        <RouterLink to="/services" @click="menuOpen = false">{{ t('Services', 'Услуги', 'Қызметтер') }}</RouterLink>
        <RouterLink to="/portfolio" @click="menuOpen = false">{{ t('Portfolio', 'Портфолио', 'Портфолио') }}</RouterLink>
        <RouterLink to="/team" @click="menuOpen = false">{{ t('Our Team', 'Наша команда', 'Біздің команда') }}</RouterLink>
      </nav>

      <div class="nav-right">
        <!-- Language Switcher -->
        <div class="lang-switcher">
          <button
            v-for="lang in langs"
            :key="lang.code"
            class="lang-btn"
            :class="{ active: currentLang === lang.code }"
            @click="setLang(lang.code)"
          >{{ lang.label }}</button>
        </div>

        <RouterLink to="/about" class="btn-cta">{{ t('Get In Touch', 'Связаться', 'Байланыс') }}</RouterLink>
      </div>

      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const { currentLang, setLang, t } = useLanguage()
const isScrolled     = ref(false)
const menuOpen       = ref(false)
const scrollProgress = ref(0)

const langs = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'kz', label: 'KZ' }
]

function handleScroll() {
  const y   = window.scrollY
  const max = document.documentElement.scrollHeight - window.innerHeight
  isScrolled.value     = y > 20
  scrollProgress.value = max > 0 ? (y / max) * 100 : 0
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.75);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid transparent;
  transition: border-color 0.4s, box-shadow 0.4s, background 0.4s;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.92);
  border-bottom-color: rgba(0,0,0,0.07);
  box-shadow: 0 1px 0 rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.05);
}

/* ── Scroll progress ─────────────────────────────────────────────────── */
.nav-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: transparent;
  overflow: hidden;
}

.nav-progress-bar {
  height: 100%;
  width: 100%;
  background: var(--accent);
  transform-origin: left center;
  transform: scaleX(0);
  transition: transform 0.1s linear;
  will-change: transform;
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 32px;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo-img {
  height: 36px;
  width: auto;
  display: block;
}

@media (min-width: 1100px) {
  .logo-full {
    display: inline;
  }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  flex: 1;
  justify-content: center;
}

.nav-links a {
  font-size: 13.5px;
  font-weight: 500;
  color: var(--gray-700);
  transition: color 0.2s;
  position: relative;
  white-space: nowrap;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.2s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--dark);
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

/* Language Switcher */
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 2px;
  background: var(--gray-100);
  border-radius: 100px;
  padding: 3px;
}

.lang-btn {
  padding: 5px 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--gray-500);
  background: none;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.lang-btn:hover {
  color: var(--dark);
}

.lang-btn.active {
  background: var(--dark);
  color: var(--white);
}

.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 20px;
  background: var(--accent);
  color: var(--on-accent);
  font-size: 13px;
  font-weight: 600;
  border-radius: 100px;
  white-space: nowrap;
  transition: background 0.2s, transform 0.2s;
}

.btn-cta:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 4px;
  margin-left: auto;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--dark);
  transition: transform 0.3s, opacity 0.3s;
}

.hamburger span:nth-child(1).open { transform: translateY(7px) rotate(45deg); }
.hamburger span:nth-child(2).open { opacity: 0; }
.hamburger span:nth-child(3).open { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 960px) {
  .nav-links {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 20px;
    border-bottom: 1px solid var(--gray-200);
    transform: translateY(-110%);
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    z-index: 999;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
  }

  .hamburger {
    display: flex;
  }

  .btn-cta {
    display: none;
  }

  .nav-right {
    gap: 10px;
  }
}

@media (max-width: 640px) {
  .lang-switcher {
    display: none;
  }
}
</style>
