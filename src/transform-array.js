module.exports = function transform(arr) {
    if (!(arr instanceof Array)) throw new Error('This is not Array');
    if (arr.length === 0) return [];
    let arrTransformed = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--double-next': 
                if (arr.length - 1 > i) {
                    arrTransformed.push(arr[i + 1]);
                }
                break;
            case '--discard-prev':
                if (i > 0) {
                    arrTransformed.pop();
                }
                break;
            case '--double-prev':
                if (i >= 1) {
                    arrTransformed.push(arr[i - 1]);
                }
                break;
            default:
                arrTransformed.push(arr[i]);
        }
    }
    return arrTransformed;
};
