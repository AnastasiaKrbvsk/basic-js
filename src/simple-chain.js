const chainMaker = {
  currentChain: [],
  getLength() {
    return this.currentChain.length;
  },
  addLink(value) {
    this.currentChain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' ||
      position > this.getLength() - 1 ||
      position <= 0) {
        this.currentChain = [];
        throw new Error('position is not correct');
      }
    this.currentChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.currentChain.reverse();
    return this;
  },
  finishChain() {
    let result = this.currentChain.map(e => '( ' + e + ' )').join('~~');
    this.currentChain = [];
    return result;
  }
};

module.exports = chainMaker;
