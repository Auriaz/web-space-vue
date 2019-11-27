import Vue from 'vue'
import Vuex from 'vuex'

import db from '../firebase/firestore'
import auth from '../firebase/auth'



Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        online: false,
        messages: [
            { icon: 'far fa-handshake', color: 'info', text: 'Witaj na stronie WebSpace', snackbar: true },
        ],
        loadedBase: [],
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
        loaded: [],
        users: [
            {
                user_id: '@/users/4',
                department: 'Web developer',
                roles: 'ROLE_ADMIN',
                authenticator: '',
                email: 'adam@webspace.pl',
                first_name: 'Adam',
                last_name: 'Stankiewicz',
                password: 'hjgshdafadsnfibd,n;',
                avatar: 'vision',
                avatar_url: '/uploads/images/avatar/vision.jpg',
                createdAt: '2019-08-28'
            }, 
            {
                user_id: '@/users/2',
                department: 'Graphic designer',
                roles: 'ROLE_DESIGNER',
                authenticator: '',
                email: 'marek@webspace.pl',
                first_name: 'Marek',
                last_name: 'Stankiewicz',
                password: 'hjgshdafadsnfibd,n;',
                avatar: 'vision',
                avatar_url: '/uploads/images/avatar/vision.jpg',
                createdAt:'2019-08-23'
            },
            {
                user_id: '@/users/3',
                department: 'Social media maverick',
                roles: 'ROLE_SOCIAL_MEDIA',
                authenticator: '',
                email: 'michal@webspace.pl',
                first_name: 'Michał',
                last_name: 'Stankiewicz',
                password: 'hjgshdafadsnfibd,n;',
                avatar: 'vision',
                avatar_url: '/uploads/images/avatar/vision.jpg',
                createdAt: '2019-05-23'
            }
        ],
        user: null,
        loading: false,
        error: null
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
        loading: (state) => {
            return state.loading
        },
        online: (state) => {
            if (state.user !== null && state.user !== undefined) {
               return  state.online = true
            }
        }
    },
    mutations: {
        addMessage: (state, msg) => {
            state.messages.push(msg)
        },
        setLoadedUsers:(state, payload) => {
            state.users.push(payload)
        },
        createdUser: (state, payload) => {
            state.users.push(payload)
        },
        updatedUser: (state, user) => {
            state.users.forEach(element => {
                if(element.user_id == user.user_id) {
                    element = user
                }
            });
        },
        deletedUser: (state, user_id) => {
            let index = state.users.findIndex(user => user.user_id == user_id)
            state.users.splice(index, 1)
        },
        setUser: (state, payload) => {
            state.user = payload
        },
        setLoading: (state, payload) => {
            state.loading = payload
        },
        setError: (state, payload) => {
            state.error = payload
        },
        clearError: (state) => {
            state.error = null
        },
        logout: (state) => {
            state.user = null
            state.online = false
        },
    },
    actions: {
        deletedUser({ commit }, user_id) {
            db
                .collection('users').where('user_id', '==', user_id).get()
                .then(query => {
                    query.forEach(doc => {
                        doc.ref.delete()
                    });
                    commit('deletedUser', user_id)
                    commit('addMessage', {
                        icon: 'fas fa-envelope',
                        color: 'success',
                        text: 'Użytkownik został usuniety',
                        snackbar: true,
                    })
                })
                .catch(error => {
                    commit('addMessage', {
                        icon: 'fas fa-envelope',
                        color: 'error',
                        text: error.message,
                        snackbar: true,
                    })
                })
        },
        updatedUser({ commit }, user) {
            db
                .collection('users')
                .where('user_id', '==', user.user_id)
                .get()
                .then(query => {
                    query.forEach(doc => {
                        doc.ref.update(user)
                            .then(() => {
                                commit('updatedUser', user.data())
                                commit('addMessage', {
                                    icon: 'fas fa-envelope',
                                    color: 'success',
                                    text: 'Dane użytkownika zostały uaktualnione',
                                    snackbar: true,
                                })
                            })
                    })
                })
                .catch(error => {
                    commit('addMessage', {
                        icon: 'fas fa-envelope',
                        color: 'error',
                        text: error.message,
                        snackbar: true,
                    })
                })
        },
        // editUser ({commit}, user_id, next) {
        //     db.collection('users').where('user_id', '==', user_id).get()
        //         .then(query => {
        //             query.forEach(doc => {
        //                 next(vm => {
        //                     vm.user_id = doc.data().user_id
        //                     vm.department = doc.data().department
        //                     vm.roles = doc.data().roles
        //                     vm.authenticator = doc.data().authenticator
        //                     vm.email = doc.data().email
        //                     vm.first_name = doc.data().first_name
        //                     vm.last_name = doc.data().last_name
        //                     vm.avatar = doc.data().avatar
        //                     vm.avatar_url = doc.data().avatar_url
        //                     vm.createdAt = doc.data().createdAt
        //                 })
        //             })
        //         })
        // },
        loadUsers ({commit}) {
            commit('setLoading', true)

            db
                .collection('users')
                .orderBy('department')
                .get()
                .then(query => {
                    query.forEach(doc => {
                        const users = {
                            id: doc.id,
                            user_id: doc.data().user_id,
                            department: doc.data().department,
                            roles: doc.data().roles,
                            authenticator: doc.data().authenticator,
                            email: doc.data().email,
                            first_name: doc.data().first_name,
                            last_name: doc.data().last_name,
                            avatar: doc.data().avatar,
                            avatar_url: doc.data().avatar_url,
                            createdAt: doc.data().createdAt
                        }
                        commit('setLoadedUsers', users)
                    })

                    commit('setLoading', false)
                })
                .catch(error => {
                    commit('setLoading', false)
                    commit('addMessage', {
                        icon: 'fas fa-envelope',
                        color: 'error',
                        text: error.message,
                        snackbar: true,
                    })
                }) 
        },
        createUser({ commit }, payload) {
            db
                .collection('users')
                .add(payload)
                .then(docRef => {
                    const key = docRef.id

                    commit('createdUser', { ...payload, id: key })
                    commit('addMessage', {
                        icon: 'fas fa-envelope',
                        color: 'success',
                        text: 'Nowy użytkownik został dodany',
                        snackbar: true,
                    })
                })
                .catch(error => {
                    commit('addMessage', {
                        icon: 'fas fa-envelope',
                        color: 'error',
                        text: error.message,
                        snackbar: true,
                    })
                })
        },
        registration({ commit }, payload) {
            commit('setLoading', true)
            // commit('clearError')
            auth
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    commit('setLoading', false)

                    commit('addMessage', {
                        icon: 'fas fa-envelope',
                        color: 'success',
                        text: `Konto dla maila ${user.email} zostało utworzone`,
                        snackbar: true,
                    })
                })
                .catch(error => {
                    commit('setLoading', false)
                    // commit('setError', error)
                    commit('addMessage', {
                        icon: 'fas fa-envelope',
                        color: 'error',
                        text: error.message,
                        snackbar: true,
                    })
                })
        },
        login({ commit }, payload) {
            commit('setLoading', true)
            // commit('clearError')
            auth
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    commit('setLoading', false)
                    commit("setUser", { id: user.uid });
                    commit('addMessage', {
                        icon: 'fas fa-envelope',
                        color: 'success',
                        text: 'Użytkownik został pomyślnie zalogowany',
                        snackbar: true,
                    })
                })
                .catch(error => {
                    commit('setLoading', false)
                    // commit('setError', error.message)
                    commit('addMessage', {
                        icon: 'fas fa-envelope',
                        color: 'error',
                        text: error.message,
                        snackbar: true,
                    })
                })
        },
        logout({commit}) {
            auth
                .signOut()
                .then(() => {
                    commit('logout')
                    commit('addMessage', {
                        icon: 'fas fa-envelope',
                        color: 'success',
                        text: 'Użytkownik został pomyślnie wylogowany',
                        snackbar: true,
                    })
                })
                .catch(error => {
                    commit('addMessage', {
                        icon: 'fas fa-envelope',
                        color: 'error',
                        text: error.message,
                        snackbar: true,
                    })
                })
        }
    },
    modules: {
    }
})