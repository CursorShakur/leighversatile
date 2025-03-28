<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.text"
        color="white"
        variant="text"
        class="mx-2"
        :to="link.to"
      >
        {{ link.text }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Leigh Versatile</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
const links = [
  { text: 'Home', to: '/' },
  { text: 'Why Us', to: '#why-us' },
  { text: 'Services', to: '#services' },
  { text: 'Contact', to: '#cta' },
  { text: 'Terms', to: '/terms' },
  { text: 'Privacy', to: '/privacy' }
]
</script>

<style scoped>
.v-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style> 