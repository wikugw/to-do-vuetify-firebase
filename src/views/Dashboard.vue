<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-row class="mb-3 ml-1">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs}">
            <v-btn text small color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">by project name</span>
            </v-btn>
          </template>
          <span>Sort by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs}">
            <v-btn text small color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">by person</span>
            </v-btn>
          </template>
          <span>Sort by person</span>
        </v-tooltip>
      </v-row>

      <v-card flat color="grey lighten-4" v-for="project in projects" :key="project.title">
        <v-row :class="`pa-3 mx-1 project ${project.status}`">
          <v-col cols="12" sm="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due date</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col cols="2" sm="4" md="2">
            <div align="right">
              <v-chip small :class="`v-chip--active black--text caption my-2`"> {{project.status}}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>

  </div>
</template>

<script>
import db from '@/fb'

export default {
  title () {
    return "Dashboard"
  },
  name: 'Dashboard',
  data() {
    return {
      projects: []
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1 )
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if(change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    });
  }
}
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  border-left: 4px solid #3cd1c2 !important;
}

.v-chip.ongoing {
  border-left: 4px solid orange !important;
}

.v-chip.overdue {
  border-left: 4px solid tomato !important;
}
</style>