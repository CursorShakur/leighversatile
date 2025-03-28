<template>
  <v-app-bar
    app
    elevation="1"
  >
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

    <v-app-bar-title>Leigh Versatile</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="item.to"
        :prepend-icon="item.icon"
        :title="item.title"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
const menuItems = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'Problems', icon: 'mdi-alert-circle-outline', to: '#problems' },
  { title: 'Solution', icon: 'mdi-lightbulb-on-outline', to: '#solutions' },
  { title: 'Process', icon: 'mdi-timeline-outline', to: '#process' },
  { title: 'Services', icon: 'mdi-cog-outline', to: '#services' },
  { title: 'Why Us', icon: 'mdi-thumb-up-outline', to: '#why-us' },
  { title: 'Contact', icon: 'mdi-email-outline', to: '#cta' }
]

const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<style scoped>
.v-app-bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style> 