### 简单的模板引擎

- 正则的熟练使用
- new function()
- fn.apply(model)
- 调用方式
```
// 创建一个模板引擎:
var tpl = new Template('<p>Today: { date }</p>\n<a href="/{ user.id|safe }">{ user.company }</a>');
// 渲染得到HTML片段:
var model = {
    date: 20150316,
    user: {
        id: 'A-000&001',
        company: 'AT&T'
    }
};
var html = tpl.render(model);
console.log(html);
// <p>Today: 20150316</p>
// <a href="/A-000&001">AT&amp;T</a>

```
```
var re = /\{\s*([a-zA-Z\.\_0-9()]+)\s*\}/m
var match = re.exec('a { template } string');
```
```
function () {
    var r = [];
    r.push('<p>Today: ');
    r.push(this.date);
    r.push('</p>\n<a href="/');
    r.push(this.user.id);
    r.push('">');
    r.push(this.user.company);
    r.push('</a>');
    return r.join('');
}
```