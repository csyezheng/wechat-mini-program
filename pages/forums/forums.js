// pages/forums/forums.js
Page({
  data: {
    currentTab: 0,
    tabs: [
      { name: 'Recommendations', posts: [] },
      { name: 'Attention', posts: [] },
      { name: 'Dynamics', posts: [] },
      { name: 'Q&A', posts: [] },
      { name: 'Topics', posts: [] },
      { name: 'Nearby', posts: [] }
    ],
    currentPosts: []
  },

  onLoad() {
    this.fetchPosts();
  },

  onLoad() {
    this.fetchPosts();
  },

  fetchPosts() {
    // Simulate fetching posts for each tab
    const posts = [
      { id: 1, author: 'User1', content: 'Post content for recommendations' },
      { id: 2, author: 'User2', content: 'Post content for attention' },
      { id: 3, author: 'User3', content: 'Post content for dynamics' },
      { id: 4, author: 'User4', content: 'Post content for Q&A' },
      { id: 5, author: 'User5', content: 'Post content for topics' },
      { id: 6, author: 'User6', content: 'Post content for nearby' }
    ];

    this.setData({
      'tabs[0].posts': posts.filter(post => post.content.includes('recommendations')),
      'tabs[1].posts': posts.filter(post => post.content.includes('attention')),
      'tabs[2].posts': posts.filter(post => post.content.includes('dynamics')),
      'tabs[3].posts': posts.filter(post => post.content.includes('Q&A')),
      'tabs[4].posts': posts.filter(post => post.content.includes('topics')),
      'tabs[5].posts': posts.filter(post => post.content.includes('nearby'))
    });

    // Initialize with posts from the first tab
    this.setData({
      currentPosts: this.data.tabs[0].posts
    });
  },

  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentTab: index,
      currentPosts: this.data.tabs[index].posts
    });
  }
});
