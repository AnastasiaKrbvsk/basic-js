module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!(arr instanceof Array)) return 0;
        let level = 1;
        for (let item of arr) {
            level = Math.max(this.calculateDepth(item) + 1, level)
        }
        return level;
    }
};