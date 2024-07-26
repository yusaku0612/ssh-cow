Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        secondary: '#00BCD4', // 水色に設定
      },
    },
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});

let app = new Vue({
  el:'#app',
  vuetify,
  data(){
    return {
      active: 0,
      slideshowActive: false,
      images: [
        { id: 0, img: 'https://imgur.com/LZInjaX.jpg' },
        { id: 1, img: 'https://imgur.com/kEoxege.jpg' },
        { id: 2, img: 'https://imgur.com/zsvaqVg.jpg' },
        { id: 3, img: 'https://imgur.com/72Y6lvA.jpg' },
        { id: 4, img: 'https://imgur.com/NF1BJE4.jpg' },
        { id: 5, img: 'https://imgur.com/8Chx8gu.jpg' },
      ],
      slideshowTimer: null
    }
  },
  methods:{
    current(id){
      this.active = id
    },
    prev(){
      if(this.active <= 0){
        this.active = this.images.length - 1
      } else {
        this.active--
      }
    },
    next(){
      if(this.active >= this.images.length - 1){
        this.active = 0
      } else {
        this.active++
      }
    },
    startSlideshow(){
      this.slideshowActive = true;
      this.slideshowTimer = setInterval(() => {
        if (this.slideshowActive) {
          this.next();
        }
      }, 4000);
    },
    stopSlideshow(){
      this.slideshowActive = false;
      clearInterval(this.slideshowTimer);
    }
  }
});