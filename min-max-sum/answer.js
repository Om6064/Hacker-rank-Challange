function miniMaxSum(arr) {
    let totalSum = 0;
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    let minSum = totalSum - max;
    let maxSum = totalSum - min;

    console.log(minSum + " " + maxSum);
}