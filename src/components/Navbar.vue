<template>
    <nav>

        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>new project has been added! yeayy 😭😭😭</span>
            <v-btn text color="white" @click="snackbar = false">close</v-btn>
        </v-snackbar>

        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer" app></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text" >
                <span class="font-weight-light">Todo</span>
                <span>list</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{on, attrs}">
                    <v-btn color="grey" text v-bind="attrs" v-on="on">
                        <v-icon left>expand_more</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title class="grey--text lighten-4">{{link.text}}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app class="primary">

            <v-row justify="center" class="mt-4">
                <v-avatar size="100">
                    <img src="/avatar-1.png" alt="">
                </v-avatar>
            </v-row>
            <v-row justify="center">
                <p class="white--text">Eren</p>
            </v-row>
            <v-row justify="center">
                <Popup @projectAdded= "snackbar = true" />
            </v-row>

            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-subtitle class="white--text">{{link.text}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>
<script>
import Popup from './Popup'

export default {
    components:{
        Popup
    },
    data() {
        return {
            drawer: false,
            links : [
                {icon: 'dashboard', text: 'dashboard', route: '/'},
                {icon: 'folder', text: 'My project', route: '/projects'},
                {icon: 'person', text: 'Team', route: '/team'}
            ],
            snackbar: false
        }
    }
}
</script>