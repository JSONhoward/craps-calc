export const diceNumbers = {
    thirtyOne: 0,
    twentyTwo: 0,
    thirtyTwo: 0,
    fortyOne: 0,
    fiftyOne: 0,
    fortyTwo: 0,
    thirtyThree: 0,
    sixtyTwo: 0,
    fiftyThree: 0,
    fortyFour: 0,
    fiftyFour: 0,
    sixtyThree: 0,
    sixtyFour: 0,
    fiftyFive: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
    eights: 0,
    nines: 0,
    tens: 0,
    foursTens: 0,
    fivesNines: 0,
    sixesEights: 0,
    hardWays: 0,
}

export function payouts() {
    return (die1, die2, bet) => {
        let coverOneLowSide = bet * 15,
         coverOneHighSide = bet * 30,
         coverTwoLowSide = bet * 7,
         coverTwoHighSide = Math.floor((bet * .5) * 30 - (bet * .5)),
         coverThreeLowSide = Math.floor((bet * (1 / 3)) * 15 - (bet * (2 / 3))),
         coverThreeHighSide = Math.floor((bet * (1 / 3)) * 30 - (bet * (2 / 3))),
         coverFourLowSide = bet * 3,
         coverFourHighSide = Math.floor((bet * .25) * 30 - (bet * .75)),
         coverSixLowSide = Math.floor((bet * (1 / 6)) * 10),
         coverSixHighSide = Math.floor((bet * (1 / 6)) * 30 - (bet * (5 / 6)))

        if ((die1 === 0 && die2 === 2) || (die1 === 2 && die2 === 0)) {
            return { ...diceNumbers, thirtyOne: coverOneLowSide, fours: coverTwoLowSide, foursTens: coverFourLowSide }
        } else if (die1 === 1 && die2 === 1) {
            return { ...diceNumbers, twentyTwo: coverOneHighSide, fours: coverTwoHighSide, foursTens: coverFourHighSide, hardWays: coverFourHighSide }
        } else if ((die1 === 0 && die2 === 3) || (die1 === 3 && die2 === 0)) {
            return { ...diceNumbers, fortyOne: coverOneLowSide, fives: coverTwoLowSide, fivesNines: coverFourLowSide }
        } else if ((die1 === 1 && die2 === 2) || (die1 === 2 && die2 === 1)) {
            return { ...diceNumbers, thirtyTwo: coverOneLowSide, fives: coverTwoLowSide, fivesNines: coverFourLowSide }
        } else if ((die1 === 0 && die2 === 4) || (die1 === 4 && die2 === 0)) {
            return { ...diceNumbers, fiftyOne: coverOneLowSide, sixes: coverThreeLowSide, sixesEights: coverSixLowSide }
        } else if ((die1 === 1 && die2 === 3) || (die1 === 3 && die2 === 1)) {
            return { ...diceNumbers, fortyTwo: coverOneLowSide, sixes: coverThreeLowSide, sixesEights: coverSixLowSide }
        } else if (die1 === 2 && die2 === 2) {
            return { ...diceNumbers, thirtyThree: coverOneHighSide, sixes: coverThreeHighSide, sixesEights: coverSixHighSide, hardWays: coverFourHighSide }
        } else if ((die1 === 1 && die2 === 5) || (die1 === 5 && die2 === 1)) {
            return { ...diceNumbers, sixtyTwo: coverOneLowSide, eights: coverThreeLowSide, sixesEights: coverSixLowSide }
        } else if ((die1 === 2 && die2 === 4) || (die1 === 4 && die2 === 2)) {
            return { ...diceNumbers, fiftyThree: coverOneLowSide, eights: coverThreeLowSide, sixesEights: coverSixLowSide }
        } else if (die1 === 3 && die2 === 3) {
            return { ...diceNumbers, fortyFour: coverOneHighSide, eights: coverThreeHighSide, sixesEights: coverSixHighSide, hardWays: coverFourHighSide }
        } else if ((die1 === 2 && die2 === 5) || (die1 === 5 && die2 === 2)) {
            return { ...diceNumbers, sixtyThree: coverOneLowSide, nines: coverTwoLowSide, fivesNines: coverFourLowSide }
        } else if ((die1 === 3 && die2 === 4) || (die1 === 4 && die2 === 3)) {
            return { ...diceNumbers, fiftyFour: coverOneLowSide, nines: coverTwoLowSide, fivesNines: coverFourLowSide }
        } else if ((die1 === 3 && die2 === 5) || (die1 === 5 && die2 === 3)) {
            return { ...diceNumbers, sixtyFour: coverOneHighSide, tens: coverTwoLowSide, foursTens: coverFourLowSide }
        } else if (die1 === 4 && die2 === 4) {
            return { ...diceNumbers, fiftyFive: coverOneHighSide, tens: coverTwoHighSide, foursTens: coverFourHighSide, hardWays: coverFourHighSide }
        } else {
            return { ...diceNumbers }
        }
    }
}