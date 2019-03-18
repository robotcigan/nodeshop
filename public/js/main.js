var app = new Vue({
  el: '#app',
  data: {
    cartCount: 0
  },
  methods: {
    addToCart: function() {
      // console.log('add to cart')
      axios.post('http://localhost:1337/addToCart', {
          some: 'some shit'
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
});