// pages/forums/forums.js
Page({
  data: {
    currentTab: 0,
    tabs: [
      { name: '推荐', posts: [] },
      { name: '关注', posts: [] },
      { name: '动态', posts: [] },
      { name: '问答', posts: [] },
      { name: '话题', posts: [] },
      { name: '附近', posts: [] }
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
      { id: 1, avatar: '/images/avatar.jpg', author: 'User1', content: '推荐的帖子内容', date: '2024-07-14', replies: 5, likes: 10, isFollowing: false },
      { id: 2, avatar: '/images/avatar.jpg', author: 'User2', content: '关注的帖子内容', date: '2024-07-14', replies: 2, likes: 4, isFollowing: false },
      { id: 3, avatar: '/images/avatar.jpg', author: 'User3', content: '动态的帖子内容', date: '2024-07-14', replies: 8, likes: 15, isFollowing: false },
      { id: 4, avatar: '/images/avatar.jpg', author: 'User4', content: '问答的帖子内容', date: '2024-07-14', replies: 1, likes: 1, isFollowing: false },
      { id: 5, avatar: '/images/avatar.jpg', author: 'User5', content: '话题的帖子内容', date: '2024-07-14', replies: 3, likes: 6, isFollowing: false },
      { id: 6, avatar: '/images/avatar.jpg', author: 'User6', content: '附近的帖子内容', date: '2024-07-14', replies: 0, likes: 2, isFollowing: false },
      { id: 7, avatar: '/images/avatar.jpg', author: 'User1', content: '推荐的帖子内容', date: '2024-07-14', replies: 5, likes: 10, isFollowing: false },
      { id: 8, avatar: '/images/avatar.jpg', author: 'User2', content: '关注的帖子内容', date: '2024-07-14', replies: 2, likes: 4, isFollowing: false },
      { id: 9, avatar: '/images/avatar.jpg', author: 'User3', content: '动态的帖子内容', date: '2024-07-14', replies: 8, likes: 15, isFollowing: false },
      { id: 10, avatar: '/images/avatar.jpg', author: 'User4', content: '问答的帖子内容', date: '2024-07-14', replies: 1, likes: 1, isFollowing: false },
      { id: 11, avatar: '/images/avatar.jpg', author: 'User5', content: '话题的帖子内容', date: '2024-07-14', replies: 3, likes: 6, isFollowing: false },
      { id: 12, avatar: '/images/avatar.jpg', author: 'User6', content: '附近的帖子内容', date: '2024-07-14', replies: 0, likes: 2, isFollowing: false }
    ];


    this.setData({
      'tabs[0].posts': posts.filter(post => post.content.includes('推荐')),
      'tabs[1].posts': posts.filter(post => post.content.includes('关注')),
      'tabs[2].posts': posts.filter(post => post.content.includes('动态')),
      'tabs[3].posts': posts.filter(post => post.content.includes('问答')),
      'tabs[4].posts': posts.filter(post => post.content.includes('话题')),
      'tabs[5].posts': posts.filter(post => post.content.includes('附近'))
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
  },

  followAuthor(e) {
    const postId = e.currentTarget.dataset.id;
    const currentTab = this.data.currentTab;
    const posts = this.data.tabs[currentTab].posts.map(post => {
      if (post.id === postId) {
        post.isFollowing = !post.isFollowing;
      }
      return post;
    });

    this.setData({
      [`tabs[${currentTab}].posts`]: posts,
      currentPosts: posts
    });
  }
});
