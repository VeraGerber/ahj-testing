export default function whichCard(value) {
  if ((value.length === 13 || value.length === 16 || value.length === 19) && /^4/.test(value)) {
    return '.card-visa';
  }

  if (value.length === 16 && /^5[1-5]/.test(value)) {
    return '.card-master';
  }

  if (value.length === 16 && /^2/.test(value)) {
    return '.card-mir';
  }

  if (value.length === 15 && /^3[47]/.test(value)) {
    return '.card-american';
  }

  if ((value.length === 16 || value.length === 19) && /^(?:2131|1800|35\d{3})\d{11}/.test(value)) {
    return '.card-jcb';
  }

  if ((value.length === 16 || value.length === 19) && /^6(?:011|5)/.test(value)) {
    return '.card-discover';
  }

  if (value.length === 14 && /^3(?:0[0-5]|[68])/.test(value)) {
    return '.card-diners';
  }
  return null;
}