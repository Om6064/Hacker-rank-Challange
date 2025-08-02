function equalizeArray(arr) {
    // Write your code here
    let freq = {}
    let arr2 = []
    
    for(let i=0;i<=arr.length;i++){
        if(freq[arr[i]]){
            freq[arr[i]]++
        }else{
            freq[arr[i]] = 1
        }
    }
    return arr.length - Math.max(...Object.values(freq))
}