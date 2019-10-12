export function convert (...args) {
    if(args.length <= 0) {
        return
    }
    const words = args.map(arg => arg.toUpperCase())
    
    console.log(args, words)

    return words
}


convert('aaaaa', 'bbbbbb', 'cccccc')