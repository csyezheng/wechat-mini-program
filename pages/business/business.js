// pages/business/business.js

Page({
  data: {
    categories: [],
    stores: []
  },

  onLoad() {
    this.fetchCategories();
    this.fetchStores();
  },

  fetchCategories() {
    // Simulate fetching category data
    const categories = [
      { id: 1, name: 'Cafés' },
      { id: 2, name: 'Restaurants' },
      { id: 3, name: 'Shops' },
      { id: 4, name: 'Services' },
      { id: 5, name: 'Entertainment' },
      // Add more categories as needed
    ];
    this.setData({ categories });
  },

  fetchStores() {
    // Simulate fetching stores data
    const stores = [
      {
        id: 1,
        storeImage: '/images/examples/store-logo.png',
        storeName: 'Store 1',
        products: [
          { id: 1, productImage: '/images/examples/product.png', productName: 'Product 1' },
          { id: 2, productImage: '/images/examples/product.png', productName: 'Product 2' },
          { id: 3, productImage: '/images/examples/product.png', productName: 'Product 3' }
        ]
      },
      {
        id: 2,
        storeImage: '/images/examples/store-logo.png',
        storeName: 'Store 2',
        products: [
          { id: 4, productImage: '/images/examples/product.png', productName: 'Product 4' },
          { id: 5, productImage: '/images/examples/product.png', productName: 'Product 5' },
          { id: 6, productImage: '/images/examples/product.png', productName: 'Product 6' }
        ]
      }
      // Add more stores as needed
    ];
    this.setData({ stores });
  },

  onCategorySelect(e) {
    const categoryId = e.currentTarget.dataset.id;
    // Filter businesses based on selected category (if desired)
    // You can implement filtering logic here
  },

  onNavChange(e) {
    const { page } = e.detail;
    wx.switchTab({ url: `/${page}/${page}` });
  }
});
