---
title: script标签上的defer和async区别
author: youlingyu
date: 2024-07-29
---


## script
当浏览器加载HTML并遇到```<script></script>```标签的时候，他无法构建dom，他必须立即执行脚本.外部脚本```<script src='...'></script>```也是如此，浏览器必须等待脚本下载，执行下载的脚本，然后才能处理页面的其余部分。<br>
<br>
这导致一个重要的问题：
<br>
&emsp;&emsp;如果页面顶部有一个庞大的脚本，他会“阻塞页面”。在下载并运行之前，用户无法看到页面的内容。
<br>
```html
<p>...content before script...</p>

<script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- 以下在脚本加载完之前是不可见的 -->
<p>...content after script...</p>
```
有一个解决方法，就是把所有的脚本都放在最底部，但是对于长HTML文档，可能会有明显的延迟。

## defer
defer属性告诉浏览器不要等待脚本执行，浏览器会继续处理HTML，构建dom。该脚本在后台“加载”，然后在dom完全构建完成后在执行。
```html
<p>...content before script...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- 不等待脚本,立即显示 -->
<p>...content after script...</p>

```
另外，defer属性总是在dom准备好时执行，（但是在DOMContentLoaded事件之前）
```html
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM fully loaded and parsed after defer!"));
</script>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<p>...content after scripts...</p>

```

&emsp;&emsp;1.页面内容立即显示。<br>
&emsp;&emsp;2.DOMContentLoaded事件处理程序，等待defer脚本执行完之后执行。<br>
&emsp;&emsp;3.当纯 HTML 被完全加载以及解析时，DOMContentLoaded 事件会被触发，而不必等待样式表，图片或者子框架完成加载。<br>

### defer保持相对脚本来执行，像常规脚本一样
例如，我们有两个脚本，long.js 和 small.js
```html
<script defer src="https://javascript.info/article/script-async-defer/long.js"></script>
<script defer src="https://javascript.info/article/script-async-defer/small.js"></script>
<!-- 这两个脚本并行下载，small.js 可能比 long.js 更先下载完成，但是执行的时候会先执行 long.js -->
```
所以defer可以用于对脚本执行顺序有严格要求的情况。

## async
async属性意味着该脚本是完全独立的：
+ 浏览器不会阻塞async脚本
+ 其他脚本也不会等待async脚本，async脚本也不会等待其他脚本
+ DOMContentLoaded和async脚本不会互相等待
    + DOMContentLoaded可能在async脚本执行之前触发（如果async脚本在页面解析完成后完成加载）
    + 或在async脚本执行之后触发（如果async脚本很快加载完成或在 HTTP 缓存中）

简单来说就是 async 脚本在后台加载完就立即运行
```html
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM 完全加载以及解析"));
</script>

<script async src="https://javascript.info/article/script-async-defer/long.js"></script>
<script async src="https://javascript.info/article/script-async-defer/small.js"></script>

<p>...content after scripts...</p>

```

> + 页面内容立即显示，async不阻塞
> + DOMContentLoaded 可能发生在async前或后
> + small.js先加载完就会在long.js之前执行，但如果long.js之前有缓存，那么long.js先执行。


应用场景：将独立的第三方脚本应用到页面中时，比如计数器，广告等。
> 注意：async和defer属性都仅适用于外部脚本，如果script标签没有src属性，尽管写了async和defer也会被忽略











