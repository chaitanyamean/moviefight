const debounce = (func) => {
    let timeOutId;
    return (...args) => {
        if(timeOutId) {
            clearTimeout(timeOutId)
        }
        timeOutId = setTimeout(() => {
            func.apply(null, args)
        }, 500)
        // console.log(args)

    }
}