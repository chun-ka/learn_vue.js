const app = Vue.createApp({
  data() {
    return {
      products: [
        {
          thumb: "assets/1.jpg",
          name: "xe máy",
          price: "10",
          isCart: true,
        },
        {
          thumb: "assets/1.jpg",
          name: "xe đạp",
          price: "15",
          isCart: false,
        },
        {
          thumb: "assets/1.jpg",
          name: "xe ô tô",
          price: "20",
          isCart: false,
        },
      ],
    };
  },
  methods: {
    onToggleCart(product) {
      product.isCart = !product.isCart;
    },
  },
  computed: {
    productsComputed() {
      return this.products.filter(product => product.price < 20);
    },
  },
});

app.mount("#contact");
 