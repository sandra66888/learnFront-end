module.exports = {
  title: "前端小记",
  description: "记录学习前端遇到的小问题",
  theme: "reco",
  // base: './',
  base:'/learnFront-End/', // 部署用
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    // subSidebar: 'auto',
    nav: [
      { text: "首页", link: "/" },
      {
        text: "尤玲玉的 前端 blog",
        items: [
          { text: "Github", link: "https://github.com/sandra66888" },
          // { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
        ],
      },
    ],
    sidebar: [
      // {
      //   title: "JS",
      //   path: "/",
      //   collapsable: false, // 不折叠
      //   children: [{ title: "js学习", path: "/" }],
      // },
      {
        title: "JS",
        path: "/learnJS/this",
        collapsable: false, // 不折叠
        children: [{ title: "this指向问题", path: "/learnJS/this.md" },{
          title:'call,bind,apply的区别',path:'/learnJS/call，bind，applly.md'
        },{ title: "js垃圾回收机制", path: "/learnJS/garabageCollection.md" }],
      },
      {
        title: "HTML",
        path: "/learnHTML/defer",
        collapsable: false, // 不折叠
        children: [
          {
            title: "script标签上的defer和async区别",
            path: "/learnHTML/defer.md",
          },
          { title: "hash", path: "/learnHTML/hash.md" },
        ],
      },
      {
        title: "CSS",
        path: "/learnCSS/scope",
        collapsable: false, // 不折叠
        children: [
          {
            title: "scope样式隔离原理",
            path: "/learnCSS/scope.md",
          },
          // { title: "hash", path: "/learnHTML/hash.md" },
        ],
      },
      {
        title: 'VUE',
        path: "/learnVUE/router",
        collapsable: false, // 不折叠
        children: [
          {
            title: "route中的push和resolve区别",
            path: "/learnVUE/router.md",
          },
          // { title: "hash", path: "/learnHTML/hash.md" },
        ],
      },
    ],
  },
};
