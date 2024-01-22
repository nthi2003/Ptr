const generateCode = (lengh) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers ='123456789'
    let code = ''
    for (let i = 0; i < lengh -1 ; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length))
    } return `${code}${numbers.charAt(Math.floor(Math.random() * characters.length))}`

}
export default generateCode