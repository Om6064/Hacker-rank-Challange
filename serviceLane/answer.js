// Assume width is globally accessible
let width = [2, 3, 1, 2, 3, 2, 3, 3];

function serviceLane(n, cases) {
    let results = [];

    for (let i = 0; i < cases.length; i++) {
        let start = cases[i][0];
        let end = cases[i][1];

        // Get the segment of the service lane
        let segment = width.slice(start, end + 1);

        // Find the minimum width in this segment
        let minWidth = Math.min(...segment);

        results.push(minWidth);
    }

    return results;
}

// Example call
let n = 8;
let cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];

console.log(serviceLane(n, cases)); // Output: [1, 2, 3, 2, 1]
