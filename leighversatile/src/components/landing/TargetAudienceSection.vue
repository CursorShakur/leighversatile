<template>
  <section id="target-audience" class="target-audience-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-4">Who We Serve</h2>
          <p class="text-subtitle-1">Tailored solutions for diverse business needs</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(audience, index) in audiences"
          :key="index"
          cols="12"
          md="4"
          class="d-flex"
        >
          <v-card class="audience-card flex-grow-1">
            <v-img
              :src="audience.image"
              height="200"
              cover
              class="audience-image"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-item>
              <v-card-title class="text-h5 mb-3">{{ audience.title }}</v-card-title>
              <v-card-text>
                <p class="mb-4">{{ audience.description }}</p>
                <v-list>
                  <v-list-item
                    v-for="(benefit, bIndex) in audience.benefits"
                    :key="bIndex"
                    :prepend-icon="benefit.icon"
                    :title="benefit.text"
                  ></v-list-item>
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
const audiences = [
  {
    title: 'Small Businesses',
    description: 'Perfect for growing businesses looking to establish or enhance their digital presence.',
    image: '@/assets/small-business.jpg',
    benefits: [
      { icon: 'mdi-rocket-launch', text: 'Quick Implementation' },
      { icon: 'mdi-currency-usd', text: 'Cost-Effective Solutions' },
      { icon: 'mdi-chart-line', text: 'Scalable Growth' }
    ]
  },
  {
    title: 'Mid-Size Companies',
    description: 'Comprehensive solutions for established businesses seeking digital transformation.',
    image: '@/assets/mid-size.jpg',
    benefits: [
      { icon: 'mdi-cog-sync', text: 'Process Automation' },
      { icon: 'mdi-account-group', text: 'Team Collaboration' },
      { icon: 'mdi-chart-bar', text: 'Data Analytics' }
    ]
  },
  {
    title: 'Enterprises',
    description: 'Enterprise-grade solutions for large organizations with complex requirements.',
    image: '@/assets/enterprise.jpg',
    benefits: [
      { icon: 'mdi-shield-check', text: 'Enterprise Security' },
      { icon: 'mdi-cloud-sync', text: 'Cloud Integration' },
      { icon: 'mdi-api', text: 'API Development' }
    ]
  }
]
</script>

<style scoped>
.target-audience-section {
  background-color: var(--v-background-lighten3);
}

.audience-card {
  transition: transform 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.audience-card:hover {
  transform: translateY(-5px);
}

.audience-image {
  position: relative;
}

.audience-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%);
}
</style> 