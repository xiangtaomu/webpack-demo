function Sidebar() {
  var dom = document.getElementById('root')
  var content = document.createElement('div');
  content.innerText = 'sidebar';
  dom.append(content);
}
//ES 模块导出
//export default Sidebar;

//CommonJS 模块导出规范
module.exports = Sidebar;
