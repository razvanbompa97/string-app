const { getOrderedList } = require('../src/app');
const expect = require('chai').expect;

const firstList = ['bed', 'bath', 'bedbath', 'and', 'beyond'];
const secondList = ['hello', 'are', 'you', 'how'];
const firstString = 'bedbathandbeyond';
const secondString = 'hellohowareyou';

describe('Testing string app', () => {
  it('Valid string and valid string list', () => {
    expect(getOrderedList(firstList, firstString)).to.eql([
      'bed',
      'bath',
      'and',
      'beyond',
    ]);
  });
  it('Valid string and valid string list using another example', () => {
    expect(getOrderedList(secondList, secondString)).to.eql([
      'hello',
      'how',
      'are',
      'you',
    ]);
  });
  it('No matches, should return an empty array', () => {
    expect(getOrderedList(secondList, firstString)).to.eql([]);
  });
  it('Empty string, should return an empty array', () => {
    expect(getOrderedList(firstList, '')).to.eql([]);
  });
  it('First argument is not an array, should return an error', () => {
    expect(getOrderedList.bind(getOrderedList, 25, firstString)).to.throw(
      'First argument should be an array of strings'
    );
  });
  it('Second argument is not a string, should return an error', () => {
    expect(getOrderedList.bind(getOrderedList, firstList, 25)).to.throw(
      'Second argument should be a string'
    );
  });
});
