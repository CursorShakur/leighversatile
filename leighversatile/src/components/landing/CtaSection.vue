<template>
  <section id="cta" class="cta-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-card class="cta-card">
            <v-parallax
              src="@/assets/cta-background.jpg"
              height="400"
            >
              <div class="d-flex flex-column fill-height justify-center align-center text-center px-4">
                <h2 class="text-h2 font-weight-bold mb-6 text-white">
                  Ready to Transform Your Business?
                </h2>
                <p class="text-h5 mb-8 text-white">
                  Let's work together to bring your digital vision to life
                </p>
                <div class="d-flex flex-wrap justify-center gap-4">
                  <v-btn
                    color="primary"
                    size="x-large"
                    class="px-8"
                    @click="scrollToContact"
                  >
                    Get Started
                    <v-icon end>mdi-arrow-right</v-icon>
                  </v-btn>
                  <v-btn
                    variant="outlined"
                    color="white"
                    size="x-large"
                    class="px-8"
                    @click="scheduleDemo"
                  >
                    Schedule Demo
                    <v-icon end>mdi-calendar</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-parallax>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-16" justify="center">
        <v-col cols="12" md="8" class="text-center">
          <v-sheet class="pa-8 rounded-lg" color="surface">
            <h3 class="text-h4 mb-6">Our Guarantee</h3>
            <p class="text-h6 mb-8">
              We're committed to your success. If you're not completely satisfied with our services within the first 30 days, we'll work with you until you are.
            </p>
            <v-row justify="center" class="mt-4">
              <v-col
                v-for="(stat, index) in stats"
                :key="index"
                cols="12"
                sm="4"
                class="text-center"
              >
                <div class="text-h3 font-weight-bold primary--text mb-2">
                  {{ stat.value }}
                </div>
                <div class="text-subtitle-1">{{ stat.label }}</div>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '250+', label: 'Projects Completed' },
  { value: '24/7', label: 'Support Available' }
]

const scrollToContact = () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

const scheduleDemo = () => {
  // Implement demo scheduling logic
  console.log('Schedule demo clicked')
}
</script>

<style scoped>
.cta-section {
  background-color: var(--v-background-base);
}

.cta-card {
  overflow: hidden;
  border-radius: 16px;
}

.v-parallax::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.v-parallax__content {
  z-index: 2;
}

.v-sheet {
  border: 1px solid rgba(var(--v-border-color), 0.12);
}
</style> 