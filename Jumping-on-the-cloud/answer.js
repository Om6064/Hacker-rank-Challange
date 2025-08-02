let c = [0, 0, 1, 0, 0, 1, 1, 0];
let energy = 100;
let i = 0; 
let k = 2;

do {
    i = (i + k) % c.length;

    if (c[i] === 1) {
        energy -= 3;
    } else {
        energy -= 1;
    }

} while (i !== 0); 

console.log(energy);