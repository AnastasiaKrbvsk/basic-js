const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string'
      || !(parseFloat(sampleActivity)) 
      || (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY)) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;

  t = Math.ceil(t);
  return Math.abs(t);
};
