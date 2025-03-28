<template>
  <section id="problems" class="problem-section py-16" :style="sectionStyle">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4 text--primary">Technical Bottlenecks Are Holding Your Team Back</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(problem, index) in problems"
          :key="index"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="mx-auto problem-card h-100"
            elevation="2"
          >
            <v-card-item>
              <v-icon
                :color="problem.color"
                size="48"
                class="mb-4"
              >
                {{ problem.icon }}
              </v-icon>
              <v-card-text class="text-body-1">
                {{ problem.description }}
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import problemBgImage from '@/assets/Modern Corporate Elegance_simple_compose.png'

const sectionStyle = computed(() => ({
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${problemBgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}))

const problems = [
  {
    description: 'Hiring technical talent or getting custom software is expensive and time-consuming',
    icon: 'mdi-currency-usd-off',
    color: 'error'
  },
  {
    description: 'Your domain experts understand the problems but lack coding skills',
    icon: 'mdi-account-lock',
    color: 'warning'
  },
  {
    description: 'Traditional development creates communication gaps and longer build cycles',
    icon: 'mdi-message-alert',
    color: 'info'
  },
  {
    description: "Off-the-shelf solutions don't fit your specific needs or are too expensive",
    icon: 'mdi-package-variant-closed-remove',
    color: 'deep-purple'
  },
  {
    description: 'IT backlogs delay critical business solutions for months',
    icon: 'mdi-clock-alert',
    color: 'error'
  }
]
</script>

<style scoped>
.problem-section {
  position: relative; /* Needed for potential future overlays */
  background-color: var(--v-background-lighten2);
}

.problem-card {
  height: 100%;
  transition: transform 0.3s ease;
  border-left: 4px solid;
}

.problem-card:hover {
  transform: translateY(-5px);
}

.v-icon {
  transition: transform 0.3s ease;
}

.problem-card:hover .v-icon {
  transform: scale(1.1);
}
</style> 