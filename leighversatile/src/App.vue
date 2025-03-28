<template>
  <v-app>
    <AppBar />
    
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import AppBar from '@/components/layout/AppBar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<style>
.v-main {
  min-height: calc(100vh - 128px); /* Adjust based on your header and footer heights */
}
</style>
