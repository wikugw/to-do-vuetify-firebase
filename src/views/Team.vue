<template>
  <div class="team">
      <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container  class="my-5">
      <v-row wrap>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
          <v-card flat class="text-center grey lighten-4">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="overline">{{person.name}}</div>
              <div class="grey-text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn depressed="" color="white">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      team: [
        {name: 'eren', role: 'web developer', avatar: '/avatar-1.png'},
        {name: 'mikasa', role: 'web designer', avatar: '/avatar-2.png'},
        {name: 'armin', role: 'graphic designer', avatar: '/avatar-3.png'},
        {name: 'armor titan', role: 'web developer', avatar: '/avatar-4.png'},
        {name: 'collosal titan', role: 'web breaker', avatar: '/avatar-5.png'}
      ]
    }
  }
}
</script>