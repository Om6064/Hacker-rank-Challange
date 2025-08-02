let k =4;
let height = [1, 6 ,3 ,5 ,2]
let portion = 0
height.forEach((hurdle) => {
    if (hurdle > k) {
        portion = Math.max(portion, hurdle - k) // to prevent overrite the portion in this we can find only maximum usege of portion thts why
    }
})
console.log(portion);
