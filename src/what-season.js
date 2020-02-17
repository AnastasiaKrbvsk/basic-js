module.exports = function getSeason(date) {
  let seasons = ['winter', 'spring', 'summer', 'autumn'];

  if (!date) return ('Unable to determine the time of year!');
  if (Object.keys(date).length > 0) throw new Error();
  
  let month = date.getMonth();

  if (month == 11 || month == 0 || month == 1) {
    return seasons[0];
  } else 
  if (month == 2 || month == 3 || month == 4) {
    return seasons[1];
  }  else 
  if (month == 5 || month == 6 || month == 7) {
    return seasons[2];
  } else 
  if (month == 8 || month == 9 || month == 10) {
    return seasons[3];
  }
};
