<template>
<div>
    <v-overlay class="d-none d-md-block"> 
        <v-wallpaper class="d-none d-md-block"/>
    </v-overlay>

    <div class="home">
        <a href="/#introduction" class="home-btn d-none d-md-block">
            <i class="fas fa-arrow-alt-circle-down fa-2x"></i>
        </a>

        <div class="home-entry">
            <span class="home-entry__box">
                <img class="home-entry__box--image" src="../assets/images/entry5.jpg" alt="entry">
            </span>

            <div class="home-entry__card">
                <div class="home-entry__card--header">
                    <span class="home-entry__card--title cyan--text darken-4 display-1 font-italic font-weight-bold">
                        {{ entry.title }}
                    </span>
                </div>

                <div class="home-entry__card--body">
                    <span class="home-entry__card--text">
                       {{ entry.description }}
                    </span>
                </div>
            </div>
        </div>

        <div class="home-introduction" id="introduction">
            <div class="home-introduction__cards" >
                <v-card-introduction v-for="introduction in introductions" :key="introduction.id" :item="introduction"/>
            </div>
        </div>

        <div class="home-about" id="about">
            <span class="home-entry__box d-none d-md-block">
                <img class="home-entry__box--image d-none d-md-block" src="../assets/images/about.jpg" alt="entry">
            </span>

            <div class="home-about__cards">
                 <v-expansion-panel-about></v-expansion-panel-about>
            </div>
        </div>

        <div class="home-price" id="price">
            <div class="home-price__cards">
                <v-card-price v-for="pack in packages" :key="pack.id" :item="pack"/>
            </div>
        </div>

        <div class="home-contact" id="contact">
            <div class="home-contact__cards">
                <v-card-contact :item="contact"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
// import db from '@/fb'
import VCardIntroduction  from '../components/cards/VCardIntroduction';
import VExpansionPanelAbout  from '../components/panels/VExpansionPanelAbout';
import VCardPrice  from '../components/cards/VCardPrice';
import VCardContact  from '../components/cards/VCardContact';
import VWallpaper from '../components/overlays/VWallpaper';
import VOverlay from '../components/overlays/VOverlay';

export default {
    name: 'home',
    components:{
        VWallpaper: VWallpaper,
        VOverlay: VOverlay,
        VCardIntroduction: VCardIntroduction,
        VExpansionPanelAbout: VExpansionPanelAbout,
        VCardPrice: VCardPrice,
        VCardContact: VCardContact,
    },
    props: ['path'],
    data() {
        return {
            items: [],
            entry: {id: 1, title: 'Strona w budowie', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure', icon: 'fa-edit'},
            introductions: [
                {id: 2, title: 'Projektowanie stron', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure', icon: 'fa-edit'},
                {id: 3, title: 'Nowatorski CMS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure', icon: 'fa-chalkboard-teacher'},
                {id: 4, title: 'Hosting oraz opieka', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure', icon: 'fa-tools'},
                {id: 5, title: 'Tworzenie logo', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure', icon: 'fa-pencil-ruler'},
            ],
            packages: [
                {id: 1, title: 'Podstawowy', description: 'Przedstaw podstawowe informacje o firmie.', price: '1500', specification:[{title:'System CMS', subtitle: 'System zarządzania treścią', href: '/'},{title:'Strona typu One-Page', subtitle: 'System zarządzania treścią', href: '/'},{title:'Budowa treści', subtitle: 'System zarządzania treścią', href: '/'}
                ], isPublished: true},
                {id: 2, title: 'Biznes', description: 'Przedstaw podstawowe informacje o firmie.', price: '2000', specification: [{title:'System CMS', subtitle: 'System zarządzania treścią', href: '/'},{title:'Strona typu One-Page', subtitle: 'System zarządzania treścią', href: '/'},{title:'Budowa treści', subtitle: 'System zarządzania treścią', href: '/'}
                ], isPublished: true},
                {id: 3, title: 'Premium', description: 'Przedstaw podstawowe informacje o firmie.', price: '3000', specification: [{title:'System CMS', subtitle: 'System zarządzania treścią', href: '/'},{title:'Strona typu One-Page', subtitle: 'System zarządzania treścią', href: '/'},{title:'Budowa treści', subtitle: 'System zarządzania treścią', href: '/'}
                ], isPublished: true},
                {id: 4, title: 'VIP', description: 'Przedstaw podstawowe informacje o firmie.', price: 'do uzgodnienia', specification: [{title:'System CMS', subtitle: 'System zarządzania treścią', href: '/'},{title:'Strona typu One-Page', subtitle: 'System zarządzania treścią', href: '/'},{title:'Budowa treści', subtitle: 'System zarządzania treścią', href: '/'}, {title:'Budowa ', subtitle: 'System zarządzania treścią', href: '/'}, {title:'Treści', subtitle: 'System zarządzania treścią', href: '/'}
                ], isPublished: true},
            ],
            contact: {
                id: 1, title:"Kontakt", content: "Chcesz się z nami skontaktować? Chcesz wiedzieć wiecej na temat naszej ofrty? Zadzwoń, napisz lub użyj formularza.", surname: 'Web-Space Adam Stankiewicz',  telephone: '+48 507-245-965', email: 'biuro@web-space.pl', nip: '844-201-63-21', nrAccount: "83 1140 2004 0000 3202 7429 8960", hours: "poniedziałek-sobota: 8:00-16:00", address: ''
            }
            
        }
    },
    methods: {
        fetchPackage() {
            axios.get('/api/packages')
                .then(res => {
                    if(res.data.items) {
                        this.items = res.data.items;
                    }
                })
                // .catch(err => (console.log(err)));
        },
    },
    created() {
        this.fetchPackage();
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
