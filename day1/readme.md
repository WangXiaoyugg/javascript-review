### javascript 实现如歌在用户离开页面时提示用户
- 使用的事件 onbeforeunload 
- 使用场景，当用户在页面执行比较重要的操作，离开页面时要改给用户提示
- 注意：从2011年5月25日起,  HTML5 规范 声明:在该事件的处理函数中调用下列弹窗相关的方法时,可以忽略不执行,window.showModalDialog(), window.alert(), window.confirm() window.prompt().
- 测试此方法只适合写入数据到localStorage,关闭页面无提示
- 只会出发一次

