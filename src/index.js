module.exports = function check(str, bracketsConfig) {
    //Replace all correct brackets and if true s is empty else it has not correct sequence
    let t
    if (parseFloat(str)) { // If numeric str
        console.log('before',str)
        do {
            t = str
            str = str.replace(/12|34|56|77|88/g, "");
        } while (t.length != str.length);
        console.log('after',str)
        return str.length === 0
    }
    else {
        do {
            t = str
            str = str.replace(/ *(\| *\||\{ *\}|\( *\)|\[ *\]) */g, "");
        } while (t.length != str.length);
        return str.length === 0;
    }
}
