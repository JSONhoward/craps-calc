const twoOrTwelveHighSide = amountBet => {
    return Math.floor((amountBet * (2 / 5)) * 30 - (amountBet * (3 / 5)))
}

const threeOrElevenHighSide = amountBet => {
    return Math.floor((amountBet * (2 / 5) * 15 - (amountBet * (3 / 5))))
}

const highSide = amountBet => {
    return Math.floor((amountBet * 1 / 5) * 30 - (amountBet * (4 / 5)))
}

const lowSide = amountBet => {
    return Math.floor((amountBet * (1 / 5) * 15 - (amountBet * (4 / 5))))
}

const hornHighSide = amountBet => {
    return Math.floor((amountBet * 7) - (amountBet * .25))
}

const byThree = amountBet => amountBet * 3

const bySeven = amountBet => amountBet * 7

const byFifteen = amountBet => amountBet * 15

const byThirty = amountBet => amountBet * 30



module.exports = {
    twoOrTwelveHighSide,
    threeOrElevenHighSide,
    highSide,
    lowSide,
    hornHighSide,
    byThree,
    bySeven,
    byFifteen,
    byThirty
}