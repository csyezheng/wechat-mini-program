// pages/index/index.js

Page({
  data: {
    features: [
      { id: 'notices', name: 'Notices & Announcements', icon: '/images/icons/notices.png', page: '/pages/announcements/announcements' },
      { id: 'maintenance', name: 'Maintenance Requests', icon: '/images/icons/notices.png', page: '/pages/maintenance/maintenance' },
      { id: 'payments', name: 'Payment Services', icon: '/images/icons/notices.png', page: '/pages/payments/payments' },
      { id: 'facilities', name: 'Facility Booking', icon: '/images/icons/notices.png', page: '/pages/facilities/facilities' },
      { id: 'directory', name: 'Business Directory', icon: '/images/icons/notices.png', page: '/pages/business-directory/business-directory' }
    ],
  },

  navigateToFeature(e) {
    const { page } = e.currentTarget.dataset;
    wx.navigateTo({ url: page });
  },

  onNavChange(e) {
    const { page } = e.detail;
    debugger
    wx.switchTab({ url: `pages/${page}/${page}` });
  },
});
