function countingValleys(steps, path) {
    // Write your code here
    let count = 0;
    let countArr = []
    let finalCount = 0;
    for(let i=0;i<=steps;i++){
        if(path[i] == "U"){
            count++;
            countArr.push(count)
        }if(path[i] == "D"){
            count--;
            countArr.push(count)
        }
    }
    for(let i=0;i<=countArr.length;i++){
        if(countArr[i] == -1 && countArr[i+1] == 0){
            finalCount++
        }
    }
    return finalCount
}