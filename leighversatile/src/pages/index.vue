<template>
  <div class="landing-page">
    <v-scroll-y-transition>
      <v-progress-linear
        v-if="loading"
        indeterminate
        color="primary"
        class="loading-bar"
      ></v-progress-linear>
    </v-scroll-y-transition>

    <v-container fluid class="pa-0">
      <HeroSection ref="heroSection" />
      <ProblemSection ref="problemSection" />
      <SolutionSection ref="solutionSection" />
      <ProcessSection ref="processSection" />
      <ServicesSection ref="servicesSection" />
      <TargetAudienceSection ref="targetAudienceSection" />
      <WhyUsSection ref="whyUsSection" />
      <CtaSection ref="ctaSection" />

      <v-btn
        v-show="showScrollTop"
        icon="mdi-arrow-up"
        size="large"
        color="primary"
        class="scroll-to-top"
        @click="scrollToTop"
      ></v-btn>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'
import HeroSection from '@/components/landing/HeroSection.vue'
import ProblemSection from '@/components/landing/ProblemSection.vue'
import SolutionSection from '@/components/landing/SolutionSection.vue'
import ProcessSection from '@/components/landing/ProcessSection.vue'
import ServicesSection from '@/components/landing/ServicesSection.vue'
import TargetAudienceSection from '@/components/landing/TargetAudienceSection.vue'
import WhyUsSection from '@/components/landing/WhyUsSection.vue'
import CtaSection from '@/components/landing/CtaSection.vue'

// State
const loading = ref(true)
const showScrollTop = ref(false)

// Meta information
useHead({
  title: 'Leigh Versatile - Digital Solutions for Modern Businesses',
  meta: [
    {
      name: 'description',
      content: 'Transform your business with our innovative digital solutions. We offer web development, mobile apps, cloud services, and digital strategy consulting.'
    }
  ]
})

// Scroll handling
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Lifecycle hooks
onMounted(() => {
  // Hide loading state after initial render
  setTimeout(() => {
    loading.value = false
  }, 1000)

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.landing-page {
  scroll-behavior: smooth;
  position: relative;
}

.loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 99;
}

/* Ensure smooth transitions between sections */
:deep(section) {
  transition: opacity 0.3s ease;
}

/* Optimize for print */
@media print {
  .scroll-to-top {
    display: none !important;
  }
}
</style>
