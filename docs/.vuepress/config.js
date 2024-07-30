module.exports = {
  title: "前端小记",
  description: "记录学习前端遇到的小问题",
  theme: "reco",
  // base: './',
  base:'/learnFront-End/',
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
      {
        title: "JS",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "js学习", path: "/" }],
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
    ],
  },
};
