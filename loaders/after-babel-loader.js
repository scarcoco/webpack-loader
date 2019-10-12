module.exports = function (...args) {

    console.log('after: ', args)
    
    return 'console.log("aaa");' + args.join('')
}