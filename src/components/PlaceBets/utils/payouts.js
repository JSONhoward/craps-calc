let outsideEven = bet => Math.floor(bet * (9 / 5))
let odd = bet => Math.floor(bet * (7 / 5))
let insideEven = bet => Math.floor(bet * (7 / 6))
let boughtOutsideEven = bet => bet * 2

module.exports = {
    outsideEven,
    odd,
    insideEven,
    boughtOutsideEven
}