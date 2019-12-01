function Header() {
  var dom = document.getElementById('root')
  var content = document.createElement('div');
  content.innerText = 'header';
  dom.append(content);
}
//ES 模块导出
//export default Header;

//CommonJS 模块导出规范
module.exports = Header;
