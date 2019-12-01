function Content() {
  var dom = document.getElementById('root')
  var content = document.createElement('div');
  content.innerText = 'content';
  dom.append(content);
}
//ES 模块导出
// export default Content;

//CommonJS 模块导出规范
module.exports = Content;