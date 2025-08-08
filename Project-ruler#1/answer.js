function main() {
    var t = parseInt(readLine());

    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());
        let sum = 0; // reset sum for each test case
        
        for (let i = 1; i < n; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        
        console.log(sum);
    }
}
