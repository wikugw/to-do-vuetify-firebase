<template>
    <v-dialog v-model="dialog" width="600" :v-model="dialog">
        <template v-slot:activator="{on, attrs}">
            <v-btn text v-bind="attrs" v-on="on" class="success">Create new project</v-btn>
        </template>
        <v-card>
            <v-card-title>Creat a new project</v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                        <v-textarea label="information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

                        <v-menu v-model="menu" max-width="290px">
                            <template v-slot:activator="{on, attrs}">
                                <v-text-field max-width="290px" :value="formattedDate" label="due date" v-bind="attrs" v-on="on" prepend-icon="date_range" :rules="inputRules"></v-text-field>
                            </template>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-menu>

                        <v-btn text class="success" @click="submit" :loading="loading">Publish</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
import format from 'date-fns/format'
import { parseISO } from 'date-fns/fp';
import db from '@/fb'

export default {
    data(){
        return {
            title       : '',
            content     : '',
            due         : null,
            inputRules  : [
                v => v.length > 0 || 'Must be filled!'
            ],
            loading: false,
            dialog: false
        }
    },
    methods: {
        submit(){
            if(this.$refs.form.validate()){
                this.loading = true;

                const project = {
                    title: this.title,
                    content: this.content,
                    due: format(parseISO(this.due), 'do MMM YYY'),
                    person: 'eren',
                    status: 'ongoing'
                }

                console.log(project);

                db.collection('projects').add(project).then(() => {
                    this.loading = false;
                    this.dialog = false;
                    this.$emit('projectAdded');
                })
            }
        }
    },
    computed: {
        formattedDate() {
            return this.due ? format(parseISO(this.due), 'do MMM YYY' ) : ''
        }
    }
}
</script>