<template>
  <section id="solutions" class="solution-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">
            CodeMyVibe™: Visualize. Instruct. Build. Enhance.
          </h2>
          <p class="text-h6 mb-8">
            Our proprietary methodology enables your domain experts to harness AI-powered development tools to create their own solutions—without writing code.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(step, index) in steps"
          :key="index"
          cols="12"
          sm="6"
          md="3"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 8 : 2"
              class="solution-card h-100"
              :class="{ 'on-hover': isHovering }"
            >
              <v-card-item>
                <div class="text-h2 font-weight-bold mb-4 primary--text">
                  {{ index + 1 }}
                </div>
                <v-card-title class="text-h5 mb-4">{{ step.title }}</v-card-title>
                <v-card-text class="text-body-1">
                  {{ step.description }}
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col cols="12" class="text-center">
          <p class="text-h5 font-weight-medium">
            The result? Your team builds exactly what they need, when they need it—no coding required.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Visualize',
    description: 'Define exactly what you need through intuitive interfaces'
  },
  {
    title: 'Instruct',
    description: 'Guide AI tools using natural language'
  },
  {
    title: 'Build',
    description: 'Generate working solutions in minutes, not months'
  },
  {
    title: 'Enhance',
    description: 'Refine and improve through conversation with AI'
  }
]
</script>

<style scoped>
.solution-section {
  background-color: var(--v-surface-base);
  position: relative;
}

.solution-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(var(--v-theme-primary), 0.05), rgba(var(--v-theme-secondary), 0.05));
  z-index: 0;
}

.solution-card {
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  border: 1px solid rgba(var(--v-border-color), 0.12);
}

.solution-card.on-hover {
  transform: translateY(-8px);
}

@media (max-width: 600px) {
  .solution-card {
    margin-bottom: 1rem;
  }
}
</style> 