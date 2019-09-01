var moduleOne = '这是模块一的内容'

// 使用函数
function moduleOneWrap() {
    var newModuleOne = '用函数包裹的模块一的内容'
    return {
        newModuleOne: newModuleOne
    }
}

// 使用对象
var moduleOneObj = {}
moduleOneObj.newModuleOne = '作为对象属性的模块一的内容'


(function () {
    var newModuleOne = '立即执行函数包裹的模块一的内容'
    window.moduleOne = {
        newModuleOne: newModuleOne
    }
})()