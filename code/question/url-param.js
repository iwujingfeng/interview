{
    const url = 'http://www.runoob.com/index.html?id=8&type=1&token=1'

    function getUrlPrams(url) {
        const arr = url.split('?')
        if (arr[0] === url) {
            return false
        }
        const prams = arr[1].split('&')
        let pramObj = {}
        prams.forEach(item => {
            const pram = item.split('=')
            pramObj[pram[0]] = pram[1]
        })
        return pramObj
    }

    const prams = getUrlPrams(url)
    console.log(prams, prams.id) // { id: '8', type: '1', token: '1' } '8'
}