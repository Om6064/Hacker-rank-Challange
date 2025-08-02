function funnyString(s) {
    let s_rev = s.split("").reverse().join("")
    for(let i=0;i<s.length - 1;i++){
        if(Math.abs(s.charCodeAt(i+1) - s.charCodeAt(i)) !== Math.abs(s_rev.charCodeAt(i+1) - s_rev.charCodeAt(i))){
            return "Not Funny"
        }
    }
    return "Funny"
}