import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        online: false,
        messages: [
            { icon: 'far fa-handshake', color: 'info', text: 'Witaj na stronie WebSpace', snackbar: true },
        ],
        loadedBase: [
            { id: 1, title: 'Strona w budowie', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure', icon: 'fa-edit', createdAt: '2019-07-17'},
        ],
        loadedJson: [
            {
                section: 'entry',
                content: { 
                    id: 1, title: 'Strona w budowie', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure', icon: 'fa-edit', createdAt: '2019-07-17'
                },
                
                updatedAt: ''
            },
            {
                section: 'introductions',
                content: [
                    { id: 2, title: 'Projektowanie stron', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure', icon: 'fa-edit' },
                    { id: 3, title: 'Nowatorski CMS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure', icon: 'fa-chalkboard-teacher' },
                    { id: 4, title: 'Hosting oraz opieka', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure', icon: 'fa-tools' },
                    { id: 5, title: 'Tworzenie logo', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque quam voluptatem odio sed alias pariatur quos eveniet iure', icon: 'fa-pencil-ruler' },
                ],
                updatedAt: ''
            },
            {
                section: 'packages',
                content: [
                    {
                        id: 2, title: 'Podstawowy', description: 'Przedstaw podstawowe informacje o firmie.', price: '1500', specification: [{ title: 'System CMS', subtitle: 'System zarządzania treścią', href: '/' }, { title: 'Strona typu One-Page', subtitle: 'System zarządzania treścią', href: '/' }, { title: 'Budowa treści', subtitle: 'System zarządzania treścią', href: '/' }
                        ], isPublished: true, createdAt: '2019-07-17'
                    },
                    {
                        id: 3, title: 'Biznes', description: 'Przedstaw podstawowe informacje o firmie.', price: '2000', specification: [{ title: 'System CMS', subtitle: 'System zarządzania treścią', href: '/' }, { title: 'Strona typu One-Page', subtitle: 'System zarządzania treścią', href: '/' }, { title: 'Budowa treści', subtitle: 'System zarządzania treścią', href: '/' }
                        ], isPublished: true, createdAt: '2019-07-17'
                    },
                    {
                        id: 4, title: 'Premium', description: 'Przedstaw podstawowe informacje o firmie.', price: '3000', specification: [{ title: 'System CMS', subtitle: 'System zarządzania treścią', href: '/' }, { title: 'Strona typu One-Page', subtitle: 'System zarządzania treścią', href: '/' }, { title: 'Budowa treści', subtitle: 'System zarządzania treścią', href: '/' }
                        ], isPublished: true, createdAt: '2019-07-17'
                    },
                    {
                        id: 5, title: 'VIP', description: 'Przedstaw podstawowe informacje o firmie.', price: 'do uzgodnienia', specification: [{ title: 'System CMS', subtitle: 'System zarządzania treścią', href: '/' }, { title: 'Strona typu One-Page', subtitle: 'System zarządzania treścią', href: '/' }, { title: 'Budowa treści', subtitle: 'System zarządzania treścią', href: '/' }, { title: 'Budowa ', subtitle: 'System zarządzania treścią', href: '/' }, { title: 'Treści', subtitle: 'System zarządzania treścią', href: '/' }
                        ], isPublished: true, createdAt: '2019-07-17'
                    },
                ], 
                updatedAt: ''
            },
            {
                section: 'contact',
                content: {
                    id: 1, title: "Kontakt", content: "Chcesz się z nami skontaktować? Chcesz wiedzieć wiecej na temat naszej ofrty? Zadzwoń, napisz lub użyj formularza.", surname: 'Web-Space Adam Stankiewicz', telephone: '+48 507-245-965', email: 'biuro@web-space.pl', nip: '844-201-63-21', nrAccount: "83 1140 2004 0000 3202 7429 8960", hours: "poniedziałek-sobota: 8:00-16:00", address: ''
                },
                updatedAt: ''
            },
            {
                section: 'informations',
                content: [
                    { id: 1, title: "Strona jest w przygotwaniu", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate corrupti culpa ducimus, maxime, minus doloribus vero odio, et sunt consectetur voluptatem cumque? ' },
                    { id: 2, title: "Strona jest w przygotwaniu", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate corrupti culpa ducimus, maxime, minus doloribus vero odio, et sunt consectetur voluptatem cumque? ' },
                    { id: 3, title: "Strona jest w przygotwaniu", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate corrupti culpa ducimus, maxime, minus doloribus vero odio, et sunt consectetur voluptatem cumque? ' }
                ]
            },
            {
                section: 'images',
                content: [
                    { id: 1, src: '/uploads/images/avatar/dr_strange.jpg', active: false },
                    { id: 2, src: '/uploads/images/avatar/vision.jpg', active: false },
                    { id: 3, src: '/uploads/images/avatar/panther.jpg', active: false },
                ]
            }
        ],
        users: [
            {
                id: '1',
                department: 'Web developer',
                roles: 'ROLE_ADMIN',
                authenticator: '',
                email: 'adam@webspace.pl',
                first_name: 'Adam',
                last_name: 'Stankiewicz',
                password: 'hjgshdafadsnfibd,n;',
                avatar: 'vision',
                avatar_url: '/uploads/images/avatar/vision.jpg'
            }, 
            {
                id: '2',
                department: 'Graphic designer',
                roles: 'ROLE_DESIGNER',
                authenticator: '',
                email: 'marek@webspace.pl',
                first_name: 'Marek',
                last_name: 'Stankiewicz',
                password: 'hjgshdafadsnfibd,n;',
                avatar: 'vision',
                avatar_url: '/uploads/images/avatar/vision.jpg'
            },
            {
                id: '3',
                department: 'Social media maverick',
                roles: 'ROLE_SOCIAL_MEDIA',
                authenticator: '',
                email: 'michal@webspace.pl',
                first_name: 'Michał',
                last_name: 'Stankiewicz',
                password: 'hjgshdafadsnfibd,n;',
                avatar: 'vision',
                avatar_url: '/uploads/images/avatar/vision.jpg'
            }
        ],
        user: {
            id: '1',
            department: 'Web developer',
            roles: 'ROLE_ADMIN',
            authenticator: '',
            email: 'adam@webspace.pl',
            first_name: 'Adam',
            last_name: 'Stankiewicz',
            password: 'hjgshdafadsnfibd,n;',
            avatar: 'vision',
            avatar_url: '/uploads/images/avatar/vision.jpg'
        }


    },
    getters: {
        loadedBase: (state) => {
            return state.loaded.sort((itemA, itemB) => {
                return itemA.createdAt > itemB.createdAt;
            })
        },
        leadedBaseItem: (state) => {
            return (itemId) => {
                return state.loadedBase.find(item => {
                    return item.id === itemId
                })
            }
        },
        leadedJsonSection: (state) => {
            return (itemSection) => {
                return state.loadedJson.find(item => {
                    if(item.section === itemSection) {
                        return item.content
                    }
                })
            }
        },
        online: (state) => {
            if (state.user) {
               return  state.online = true
            }
        }
    },
    mutations: {
        addMessage:(state, msg) => {
            state.messages.push(msg)
        },

    },
    actions: {
        addMessage: (context, msg) => {
            setTimeout(function() {
                context.commit('addMessage', msg)
            }, 500)
        }
    },
    modules: {
    }
})