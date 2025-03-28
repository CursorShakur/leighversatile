<template>
  <section id="process" class="process-section py-16" :style="sectionStyle">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">Our Process</h2>
          <p class="text-subtitle-1">How we deliver excellence</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-timeline align="start">
            <v-timeline-item
              v-for="(step, index) in processSteps"
              :key="index"
              :dot-color="step.color"
              size="small"
            >
              <template v-slot:opposite>
                <div class="text-h6 font-weight-bold">Step {{ index + 1 }}</div>
              </template>
              <v-card class="elevation-2">
                <v-card-item>
                  <v-card-title class="text-h6">{{ step.title }}</v-card-title>
                  <v-card-text>{{ step.description }}</v-card-text>
                </v-card-item>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import processBgImage from '@/assets/Digital Network Flow_simple_compose.png'

const sectionStyle = computed(() => ({
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${processBgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}))

const processSteps = [
  {
    title: 'Discovery',
    description: 'We begin by understanding your business, goals, and challenges through in-depth consultation.',
    color: 'primary'
  },
  {
    title: 'Strategy',
    description: 'Our team develops a comprehensive strategy tailored to your specific needs and objectives.',
    color: 'info'
  },
  {
    title: 'Implementation',
    description: 'We execute the plan using agile methodologies, ensuring quick iterations and continuous feedback.',
    color: 'success'
  },
  {
    title: 'Testing & Refinement',
    description: 'Rigorous testing and refinement ensure the solution meets all requirements and quality standards.',
    color: 'warning'
  },
  {
    title: 'Launch & Support',
    description: 'We launch your solution and provide ongoing support to ensure long-term success.',
    color: 'deep-purple'
  }
]
</script>

<style scoped>
.process-section {
  position: relative;
}

.v-timeline-item {
  margin-bottom: 2rem;
}

.v-card {
  transition: transform 0.3s ease;
}

.v-card:hover {
  transform: translateX(10px);
}
</style> 