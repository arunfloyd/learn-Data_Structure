function nextAlpha(str, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'a' && char <= 'z') {
            const val = alphabet.indexOf(char);
            const nextChar = alphabet[(val + n) % 26];
            newStr += nextChar;
        } else {
            newStr += char;
        }
    }
    return newStr;
}

console.log(nextAlpha('zoo', 2));
