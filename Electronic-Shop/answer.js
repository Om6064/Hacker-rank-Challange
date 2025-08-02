function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let result = -1
    for (let i = 0; i <= keyboards.length; i++) {
        for (let j = 0; j <= drives.length; j++) {
            if (keyboards[i] + drives[j] <= b) {
                result = keyboards[i] + drives[j]
            }
        }
    }
    return result
}