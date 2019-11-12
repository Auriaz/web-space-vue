<template>
    <div class="about">
        <div class="about__box-images" >  
            <div class="about__box-image my-5" v-for="image in images" :key="image.id" :class="{ action: image.isAction }">
                <v-avatar>
                    <v-img :src="image.src"  alt="Avatar" width="100" height="50" ></v-img>
                </v-avatar>
            </div>                              
        </div>

        <div class="about__content">
            <v-expansion-panels inset focusable>
                <v-expansion-panel v-for="information in informations" :key="information.id" class="my-4" @click="onAction(information.id)">
                    <v-expansion-panel-header class="deep-purple darken-3 white--text" >
                        {{ information.title }}</v-expansion-panel-header>
                    <v-expansion-panel-content>{{ information.content }}</v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-expansion-panel-about',
    data() {
        return {
            informations: [
                {id: 1, title: 'Jestśmy firmą, która stworzyła się z pasji do programowania', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', isActive: false},                
                {id: 2, title: 'Do programowania, używamy naj nowszych trendów', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', isActive: false},

                {id: 3, title: 'Do programowania, używamy naj nowszych trendów', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', isActive: false},
            ],
            images: [
                {id: 1, src: '/uploads/images/avatar/dr_strange.jpg', isAction: false},
                {id: 2, src: '/uploads/images/avatar/vision.jpg', isAction: false},
                {id: 3, src: '/uploads/images/avatar/panther.jpg', isAction: false},
            ],
            // isAction: false
        }
    },
    methods: {
        onAction(id) {
            this.images.forEach(image => {
                image.isAction = false
             
                if(image.id == id ) {
                    image.isAction = !image.isAction
                }
                
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .about {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-flow: wrap row;
        &__box {
            &-images {
                width: 20%;
            }            
            
            &-image {
                width: 100%;
                filter: grayscale(100%);
            }
        }

        &__content {
            width: 75%;
        }
    }

    .action {
        transform: scale(1.3) translateX(10%);
        filter: grayscale(0%); 
    }
</style>