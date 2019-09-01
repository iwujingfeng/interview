var moduleTwo = '这是模块二的内容'
var moduleOne = '模块二使用和模块一同名的变量，覆盖了模块一的内容' // 变量重名

// 使用函数
function moduleTwoWrap() {
    var newModuleTwo = '用函数包裹的模块二的内容'
    var newModuleOne = '用函数包裹后，覆盖模块一的内容' // 变量重名
    return {
        newModuleOne: newModuleOne,
        newModuleTwo: newModuleTwo,
    }
}
// 使用对象
var moduleTwoObj = {}
moduleTwoObj.newModuleTwo = '作为对象属性的模块二的内容'
moduleTwoObj.newModuleOne = '作为对象属性的覆盖模块一的内容' // 变量重名

(function () {
    var newModuleTwo = '立即执行函数包裹的模块二的内容'
    var newModuleOne = '用函数包裹后的覆盖模块一的内容' // 变量重名

    window.moduleTwo = {
        newModuleOne: newModuleOne,
        newModuleTwo: newModuleTwo,
    }
})()