import getValidCreditCard from '../validate';

test.each([
  ['true for valid user card', '379513078397192', true],
  ['true for valid user card', '4929162475977819246', true],
  ['false for invalid user card ', '7715964999', false],
  ['false for invalid user card ', '42', false],
  ['false for invalid user card ', '4200003992829919100102929010', false],
  ['false for invalid user card ', '0000000000000000', false],

])(('it should be %s'), (_, value, expected) => {
  expect(getValidCreditCard(value)).toBe(expected);
});