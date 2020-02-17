module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    return output = {
        turns: (Math.pow(2, disksNumber) - 1),
        seconds: ((Math.pow(2, disksNumber) - 1) / (turnsSpeed / 3600)),
    }
}