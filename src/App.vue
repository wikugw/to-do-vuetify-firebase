<template>
  <v-app color="grey lighten-4">
    <navbar />
    <v-main class="mx-4 mb-4">
      <router-view>

      </router-view>
    </v-main>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>
