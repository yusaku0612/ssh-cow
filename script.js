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
            {id:0, img:'images/image007.jpg'},
            {id:1, img:'images/image008.jpg'},
            {id:2, img:'images/image009.jpg'},
            {id:3, img:'images/image010.jpg'},
            {id:4, img:'images/image011.jpg'},
            {id:5, img:'images/image012.jpg'},
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