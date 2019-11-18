<template>
    <div class="projects">
        <h1 class="title text-center grey--text">Projects</h1>

        <v-container class="my-5">
            <v-row justify="center">
                <v-expansion-panels inset>
                <v-expansion-panel v-for="project in myProjects" :key="project.title">
                    <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
                    <v-expansion-panel-content >
                        <v-card>
                            <v-card-text class="grey--text">
                                <div class="font-weight-bold">Czas ukończenia {{ project.due }}</div>
                                <div>{{ project.content }}</div>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
            </v-row>

            <v-row justify="center" class="mt-10">
                <v-popup @projectAdded="snackbar = true" :name="name" :colorBtn="colorBtn"/>
            </v-row>
        </v-container>
        
    </div>
</template>

<script>
import VPopup from '../components/modals/VPopup'

export default {
    name: 'projects',
    components: {
       VPopup: VPopup, 
    },
    data() {
        return {
            projects: [
                {title: "Strona jest w przygotwaniu", person: 'Dr.Strange', due: '2019-10-11', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate corrupti culpa ducimus, maxime, minus doloribus vero odio, et sunt consectetur voluptatem cumque? '},
                {title: "Strona jest w przygotwaniu", person: 'Vision', due: '2019-10-11', status: 'copleate', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate corrupti culpa ducimus, maxime, minus doloribus vero odio, et sunt consectetur voluptatem cumque? '},
                {title: "Strona jest w przygotwaniu", person: 'Thanos', due: '2019-10-11', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate corrupti culpa ducimus, maxime, minus doloribus vero odio, et sunt consectetur voluptatem cumque? '}
            ],
            name: 'skontaktuj się',
            colorBtn: 'success'
        }
    },
    computed: {
        myProjects() {
            return this.projects.filter(project => {
                return project.person === 'Vision'
            })
        }
    },
    created() {
          // db.collection('projects').onSnapshot(res => {
        //     const changes = res.docChanges();

        //     changes.forEach(chenge => {
        //         if(change.type  === 'added') {
        //             this.projects.push({
        //                 ...change.doc.data(),
        //                 id: change.doc.id
        //             })
        //         }
        //     });
        // })
    },
    
}
</script>