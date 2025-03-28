<template>
  <section class="hero-section">
    <v-container>
      <v-row align="center" justify="center" class="py-16">
        <v-col cols="12" md="7" class="text-center text-md-left">
          <h1 class="text-h2 font-weight-bold mb-4">
            Empower Your Experts. Multiply Your Output.
          </h1>
          <h2 class="text-h4 mb-6">
            Have your current employees do 10x the work with less burnout.
          </h2>
          <p class="text-subtitle-1 mb-8">
            In today's tight labor market, hiring technical talent is harder than ever. But what if your existing team could build the solutions they need—without writing a single line of code?
          </p>
          <div class="d-flex flex-column flex-sm-row justify-center justify-md-start gap-4">
            <v-btn
              color="primary"
              size="x-large"
              class="px-8"
              @click="scrollToServices"
            >
              Get Started
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
            <v-btn
              variant="outlined"
              size="x-large"
              class="px-8"
              @click="watchDemo"
            >
              Watch Demo
              <v-icon end>mdi-play</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="5" class="text-center d-none d-md-block">
          <v-img
            src="@/assets/Empowered by AI_simple_compose.png"
            alt="AI empowering business experts"
            class="mx-auto"
            max-width="500"
          />
        </v-col>
      </v-row>

      <!-- About Section -->
      <v-row class="py-16">
        <v-col cols="12" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-6">
            The Power of Domain Expertise + AI
          </h2>
          <v-card class="pa-6" elevation="2">
            <p class="text-h6 mb-6">
              Leigh Versatile helps small businesses unlock extraordinary productivity by enabling domain experts to create their own technical solutions—without needing to code.
            </p>
            <p class="text-body-1">
              Our CodeMyVibe™ methodology transforms how your non-technical teams work, allowing them to build custom tools that perfectly fit their needs while experiencing less burnout and greater job satisfaction.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const scrollToServices = () => {
  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
}

const watchDemo = () => {
  // Implement demo video logic
  console.log('Watch demo clicked')
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, var(--v-background-base), var(--v-surface-base));
  min-height: 100vh;
  display: flex;
  align-items: center;
}

@media (max-width: 600px) {
  .hero-section {
    min-height: auto;
    padding: 4rem 0;
  }
}
</style> 