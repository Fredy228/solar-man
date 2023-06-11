export const numbersFormatCost = number => {
  const numberString = String(number);
  const formattedNumber = [];
  let group = '';

  for (let i = numberString.length - 1; i >= 0; i--) {
    group = numberString[i] + group;
    if (group.length === 3 || i === 0) {
      formattedNumber.unshift(group);
      group = '';
    }
  }

  return formattedNumber.join(' ');
};
