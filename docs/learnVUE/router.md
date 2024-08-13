---
title: js的垃圾回收机制
author: youlingyu
date: '2024-08-13'
---

## router.push()
router.push 是一个导航方法，它用于将用户重定向到新的路由。当你调用router.push的时候，用户会被重定向到新的路由，并更新浏览器的历史记录。这意味着用户可以返回之前的状态，并且router.push方法会返回一个包含新路由信息的对象。
``` js
router.push({ name: 'user', params: { userId: '123' } });
```
使用router.push方法将用户重定向到user的路由，并传递了一个params对象，其中包含了 userId 参数。

## router.resolve()
router.resolve是一个辅助方法，它用来解析一个给定的路由，或查询字符串，并返回一个包含路由配置和状态的对象。这个方法不会实际改变用户的路由，他只是解析给定的路由或查询字符串，并返回一个对象，其中包含了匹配到的路由配置和状态信息。
``` js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: UserProfile
    }
  ]
});
const route = router.resolve({ path: '/user/123' });

// 解析查询字符串
const route = router.resolve({ path: '/user', query: { id: '123' } });

// 解析带有命名视图的路径
const route = router.resolve({ name: 'user', params: { userId: '123' } });

// 解析带有路径和查询字符串的路径
const route = router.resolve({ path: '/user/123', query: { id: '123' } });



// 解析路径
const route = router.resolve({ path: '/user/123' });

console.log(route);

// 打印信息
{
  location: {
    path: '/user/123',
    query: {},
    hash: '',
    fullPath: '/user/123',
    matched: [ { path: '/user/:userId', component: UserProfile, ... } ],
    params: { userId: '123' }
  },
  route: {
    path: '/user/123',
    query: {},
    params: { userId: '123' },
    hash: '',
    fullPath: '/user/123',
    matched: [ { path: '/user/:userId', component: UserProfile, ... } ]
  },
  href: 'http://example.com/user/123'
}

```
router.resolve 方法解析路径 /user/123，并将其打印到控制台。route 对象将包含匹配到的路由配置和状态信息。这个对象通常包含location，route，href属性。
+ location:解析后的位置对象，包含了路径和查询字符串。
+ route:解析后的路由对象，包含了匹配到的路由配置。
+ href:解析后完整的url
