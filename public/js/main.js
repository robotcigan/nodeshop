var app = new Vue({
  el: '#app',
  data: {
    cartCount: 0,
    cardId: Number
  },
  methods: {
    addToCart: function(event) {
      let cardId = event.target.dataset.cardid;
      axios.post('http://localhost:1337/addToCart/' + cardId, {
        })
        .then((res) => {
          this.cartCount = res.data.cartCount;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
  computed: {
    cartCountFunction: function() {
      axios.post('http://localhost:1337/cartCount/', {
        })
        .then((res) => {
          console.log(res.data.cartCount);
          this.cartCount = res.data.cartCount;
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
});

app.cartCountFunction;