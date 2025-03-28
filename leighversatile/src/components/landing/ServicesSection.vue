<template>
  <section id="services" class="services-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">Our Services</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(service, index) in services"
          :key="index"
          cols="12"
          lg="6"
          class="d-flex"
        >
          <v-card
            class="service-card flex-grow-1"
            :class="{ 'on-hover': hover }"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
          >
            <v-card-item>
              <v-card-title class="text-h4 mb-4">{{ service.title }}</v-card-title>
              <v-card-text>
                <p class="text-body-1 mb-6">{{ service.description }}</p>
                <v-list>
                  <v-list-item
                    v-for="(feature, fIndex) in service.features"
                    :key="fIndex"
                    :prepend-icon="service.icon"
                    class="mb-2"
                  >
                    <v-list-item-title>{{ feature }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hover = ref(false)

const services = [
  {
    title: 'Strategic AI Coding Assessment & Roadmap',
    description: "Discover exactly how AI can transform your team's productivity with our comprehensive assessment:",
    icon: 'mdi-chart-timeline-variant',
    features: [
      '1 hour Evaluation of current workflows and pain points',
      'Identification of processes suitable for AI augmentation',
      'Customized tool recommendations for your specific challenges',
      'Self-guided training roadmap for your team'
    ]
  },
  {
    title: 'Team Training & Implementation',
    description: 'Empower your domain experts with hands-on workshops:',
    icon: 'mdi-account-group',
    features: [
      '1 hour Interactive training sessions tailored to your needs',
      'Practical guidance on using optimal AI frameworks and tools',
      'Processes to maintain quality and standards',
      'Knowledge transfer to internal champions'
    ]
  },
  {
    title: 'AI-Generated Code Maintenance',
    description: 'Ensure your solutions remain effective and secure:',
    icon: 'mdi-cog-refresh',
    features: [
      'Ongoing support for debugging and optimizing AI-generated code',
      'Regular refactoring to improve maintainability',
      'Seamless integration with existing systems',
      'Performance tuning and security hardening'
    ]
  },
  {
    title: 'Custom Solution Development',
    description: 'Need help with a specific challenge? Our team can build it:',
    icon: 'mdi-code-braces',
    features: [
      'End-to-end development using our CodeMyVibe™ methodology',
      'Rapid prototyping and iteration',
      'Comprehensive maintenance strategies and documentation',
      'Complete knowledge transfer to your team'
    ]
  }
]
</script>

<style scoped>
.services-section {
  background-color: var(--v-surface-lighten1);
  position: relative;
}

.services-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(var(--v-theme-primary), 0.05), transparent);
  z-index: 0;
}

.service-card {
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  border: 1px solid rgba(var(--v-border-color), 0.12);
  margin-bottom: 2rem;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.v-list-item {
  transition: background-color 0.3s ease;
}

.v-list-item:hover {
  background-color: rgba(var(--v-theme-primary), 0.05);
}
</style> 