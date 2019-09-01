// for循环面试题
for (var i = 0; i < 10; i++) {
    console.log(i)
    setTimeout(function () {
        console.log(i)
    })
}