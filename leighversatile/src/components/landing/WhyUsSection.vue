<template>
  <section id="why-us" class="why-us-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">Why Choose Us</h2>
          <p class="text-subtitle-1">What sets us apart from the competition</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            src="@/assets/Dynamic Team Collaboration_simple_compose.png"
            alt="Dynamic team collaborating on a project"
            height="400"
            cover
            class="rounded-lg"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col
              v-for="(reason, index) in reasons"
              :key="index"
              cols="12"
              sm="6"
            >
              <v-card
                class="reason-card h-100"
                variant="outlined"
              >
                <v-card-item>
                  <template v-slot:prepend>
                    <v-icon
                      :color="reason.color"
                      size="36"
                      class="mb-3"
                    >
                      {{ reason.icon }}
                    </v-icon>
                  </template>
                  <v-card-title class="text-h6">{{ reason.title }}</v-card-title>
                  <v-card-text>{{ reason.description }}</v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col cols="12" class="text-center">
          <v-sheet
            class="pa-12 rounded-lg"
            color="primary"
            theme="dark"
          >
            <h3 class="text-h4 font-weight-bold mb-6">Our Commitment</h3>
            <p class="text-h6">
              We're dedicated to delivering exceptional results through innovation, expertise, and unwavering commitment to your success.
            </p>
            <v-btn
              size="x-large"
              variant="outlined"
              class="mt-6"
              @click="scrollToContact"
            >
              Get Started
            </v-btn>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const reasons = [
  {
    title: 'Expertise',
    description: 'Our team brings years of experience and deep technical expertise.',
    icon: 'mdi-certificate',
    color: 'primary'
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve with cutting-edge technologies.',
    icon: 'mdi-lightbulb',
    color: 'warning'
  },
  {
    title: 'Support',
    description: 'Dedicated support team available 24/7 for your needs.',
    icon: 'mdi-headset',
    color: 'success'
  },
  {
    title: 'Results',
    description: 'Proven track record of delivering successful projects.',
    icon: 'mdi-trophy',
    color: 'info'
  }
]

const scrollToContact = () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.why-us-section {
  background-color: var(--v-surface-base);
}

.reason-card {
  transition: all 0.3s ease;
}

.reason-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.v-sheet {
  background: linear-gradient(135deg, var(--v-primary-base), var(--v-primary-darken2));
}
</style> 