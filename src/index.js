module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number === 0) return 'zero';

  let result = '';

  const hundred = Math.floor(number / 100);
  const tenUnits = number % 100;
  const ten = Math.floor(tenUnits / 10);
  const unit = tenUnits % 10;

  if (hundred > 0) {
    result += `${ones[hundred]} hundred`;
    if (tenUnits > 0) result += ' ';
  }

  if (tenUnits > 0) {
    if (tenUnits < 10) {
      result += ones[tenUnits];
    } else if (tenUnits < 20) {
      result += teens[tenUnits - 10];
    } else {
      result += tens[ten];
      if (unit > 0) result += ` ${ones[unit]}`;
    }
  }

  return result;
};
