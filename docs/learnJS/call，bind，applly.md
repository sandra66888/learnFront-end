---
title: call,bind,apply的区别
author: youlingyu
date: '2024-07-29'
---
## apply
apply接收两个参数，第一个参数是this的指向，第二个参数是函数接受的参数，以数组的形式传入，改变this指向后原函数会立即执行，且此方法只是临时改变this指向一次
``` js
function fn(...args){
  console.log(this,args);
}
let obj = {
  myname:"张三"
}

fn.apply(obj,[1,2]); // this会变成传入的obj，传入的参数必须是一个数组；
fn(1,2) // this指向window

```
当第一参数为null或者undefined的时候，会默认指向window
``` js
fn.apply(null,[1,2]); // this指向window
fn.apply(undefined,[1,2]); // this指向window
```

## call
call方法的第一个参数也是this的指向，后面传入的是一个参数列表<br>
跟apply一样，改变this指向后，原函数会立即执行，且此方法只是临时改变this指向一次
``` js
function fn(...args){
    console.log(this,args);
}
let obj = {
    myname:"张三"
}

fn.call(obj,1,2); // this会变成传入的obj,传入的是一个参数列表
fn(1,2) // this指向window
```
同样的，当传入的第一个参数为null，undefined的时候，默认指向window
``` js
fn.call(null,1,2); // this指向window
fn.call(undefined,1,2); // this指向window
```

## bind
bind方法与call很类似，第一个参数也是this的指向，后面传入的也是一个参数列表（但这个参数列表可以分多次传入）<br>
改变this指向后不会立即执行，而是返回一个永久改变this指向的函数
``` js
function fn(...args){
    console.log(this,args);
}
let obj = {
    myname:"张三"
}

const bindFn = fn.bind(obj); // this 也会变成传入的obj ，bind不是立即执行需要执行一次
bindFn(1,2) // this指向obj
fn(1,2) // this指向window
```

## 总结
上面可以看到，三者的区别在于：
+ 三者都可以改变函数的this指向对象
+ 三者第一个参数都是this要指向的对象，如果没有这个参数或者为undefined或者null，则默认指向全局window
+ 三者都可以传参数，apply传的是数组，call传的是参数列表，而call，和apply是一次性传入参数，而bind可以分多次传入
+ bind是返回绑定this之后的函数，apply，call是立即执行


## 实现bind
实现bind的步骤，我们可以分解为三部分：
+ 修改this指向
+ 动态传递参数
  ``` js
  // 方式一 只在bind中传递函数参数
  fn.bind(obj,1,2)()

  // 方式二 在bind中传递参数，也在返回函数中传递参数
  fn.bind(obj,1,2)(3)
  ```
+ 兼容new关键词


整体实现代码如下：
``` js
Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }

    // 获取参数
    const args = [...arguments].slice(1),
          fn = this;

    return function Fn() {

        // 根据调用方式，传入不同绑定值
        return fn.apply(this instanceof Fn ? new fn(...arguments) : context, args.concat(...arguments)); 
    }
}
```


