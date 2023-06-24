const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'Warm and confort socks!',

      image: './assets/images/socks_green.jpg',
      alt_descript: 'Green-Socks',

      // Lesson 3 chalenge - solution //
      url: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3',
      newTab: "_blank",

      // Lesson 4 Conditional Rendering //
      inventory: 9,

      // Lesson 4 coding challenge
      onSale: 9
    }

  } 

})