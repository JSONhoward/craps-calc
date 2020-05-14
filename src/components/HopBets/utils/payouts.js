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
    const coverOneLowSide = bet => bet * 15
    const coverOneHighSide = bet => bet * 30
    const coverTwoLowSide = bet => bet * 7
    const coverTwoHighSide = bet => Math.floor((bet * .5) * 30 - (bet * .5))
    const coverThreeLowSide = bet => Math.floor((bet * (1 / 3)) * 15 - (bet * (2 / 3)))
    const coverThreeHighSide = bet => Math.floor((bet * (1 / 3)) * 30 - (bet * (2 / 3)))
    const coverFourLowSide = bet => bet * 3
    const coverFourHighSide = bet => Math.floor((bet * .25) * 30 - (bet * .75))
    const coverSixLowSide = bet => Math.floor((bet * (1 / 6)) * 10)
    const coverSixHighSide = bet => Math.floor((bet * (1 / 6)) * 30 - (bet * (5 / 6)))


    return (die1, die2, bet) => {
        if ((die1 === 0 && die2 === 2) || (die1 === 2 && die2 === 0)) {
            return { ...diceNumbers, thirtyOne: coverOneLowSide(bet), fours: coverTwoLowSide(bet), foursTens: coverFourLowSide(bet) }
        } else if (die1 === 1 && die2 === 1) {
            return { ...diceNumbers, twentyTwo: coverOneHighSide(bet), fours: coverTwoHighSide(bet), foursTens: coverFourHighSide(bet), hardWays: coverFourHighSide(bet) }
        } else if ((die1 === 0 && die2 === 3) || (die1 === 3 && die2 === 0)) {
            return { ...diceNumbers, fortyOne: coverOneLowSide(bet), fives: coverTwoLowSide(bet), fivesNines: coverFourLowSide(bet) }
        } else if ((die1 === 1 && die2 === 2) || (die1 === 2 && die2 === 1)) {
            return { ...diceNumbers, thirtyTwo: coverOneLowSide(bet), fives: coverTwoLowSide(bet), fivesNines: coverFourLowSide(bet) }
        } else if ((die1 === 0 && die2 === 4) || (die1 === 4 && die2 === 0)) {
            return { ...diceNumbers, fiftyOne: coverOneLowSide(bet), sixes: coverThreeLowSide(bet), sixesEights: coverSixLowSide(bet) }
        } else if ((die1 === 1 && die2 === 3) || (die1 === 3 && die2 === 1)) {
            return { ...diceNumbers, fortyTwo: coverOneLowSide(bet), sixes: coverThreeLowSide(bet), sixesEights: coverSixLowSide(bet) }
        } else if (die1 === 2 && die2 === 2) {
            return { ...diceNumbers, thirtyThree: coverOneHighSide(bet), sixes: coverThreeHighSide(bet), sixesEights: coverSixHighSide(bet), hardWays: coverFourHighSide(bet) }
        } else if ((die1 === 1 && die2 === 5) || (die1 === 5 && die2 === 1)) {
            return { ...diceNumbers, sixtyTwo: coverOneLowSide(bet), eights: coverThreeLowSide(bet), sixesEights: coverSixLowSide(bet) }
        } else if ((die1 === 2 && die2 === 4) || (die1 === 4 && die2 === 2)) {
            return { ...diceNumbers, fiftyThree: coverOneLowSide(bet), eights: coverThreeLowSide(bet), sixesEights: coverSixLowSide(bet) }
        } else if (die1 === 3 && die2 === 3) {
            return { ...diceNumbers, fortyFour: coverOneHighSide(bet), eights: coverThreeHighSide(bet), sixesEights: coverSixHighSide(bet), hardWays: coverFourHighSide(bet) }
        } else if ((die1 === 2 && die2 === 5) || (die1 === 5 && die2 === 2)) {
            return { ...diceNumbers, sixtyThree: coverOneLowSide(bet), nines: coverTwoLowSide(bet), fivesNines: coverFourLowSide(bet) }
        } else if ((die1 === 3 && die2 === 4) || (die1 === 4 && die2 === 3)) {
            return { ...diceNumbers, fiftyFour: coverOneLowSide(bet), nines: coverTwoLowSide(bet), fivesNines: coverFourLowSide(bet) }
        } else if ((die1 === 3 && die2 === 5) || (die1 === 5 && die2 === 3)) {
            return { ...diceNumbers, sixtyFour: coverOneHighSide(bet), tens: coverTwoLowSide(bet), foursTens: coverFourLowSide(bet) }
        } else if (die1 === 4 && die2 === 4) {
            return { ...diceNumbers, fiftyFive: coverOneHighSide(bet), tens: coverTwoHighSide(bet), foursTens: coverFourHighSide(bet), hardWays: coverFourHighSide(bet) }
        }
    }
}