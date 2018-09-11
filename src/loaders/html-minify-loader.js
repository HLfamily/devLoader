var loaderUtils = require('loader-utils');
var Minimize = require('minimize');
module.exports = function (source) {
    if (this.cacheable) this.cacheable()
    
    //var callback = this.async();  //异步
    var options = loaderUtils.getOptions(this) || {}; //这里拿到 webpack.config.js 的 loader 配置
    var minimize = new Minimize(options);
    
    //minimize.parse(source, callback);//异步处理,不会阻塞其他编译进度

    // do something about the source
    
    return minimize.parse(source) // 返回处理过的source
    // this.callback(null, dealedSource, map) // 如果有sourcemap
    
}