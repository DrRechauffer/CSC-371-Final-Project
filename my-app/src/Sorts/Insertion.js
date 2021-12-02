import React from 'react';
import { newTrace, addToTrace, createKey } from './helpers';

const Insertion = (numbers) => {
  const trace = newTrace(numbers);

  for (let i = 1; i < numbers.length; i++) {
    let value = numbers[i];
    let hole = i;
    addToTrace(trace, numbers, [], [i]);
    while (hole > 0 && numbers[hole - 1] > value) {
      addToTrace(trace, numbers, [], [hole], [hole - 1]);
      numbers[hole] = numbers[hole - 1];
      hole -= 1;
      addToTrace(trace, numbers, [], [], [hole, hole + 1]);
    }
    addToTrace(trace, numbers, [], [], [], [hole]);
    numbers[hole] = value;
    addToTrace(trace, numbers, [], [], [], [hole]);
  }

  addToTrace(trace, numbers, [...Array(numbers.length).keys()]);
  return trace;
};

export const InsertionKey = createKey(
  'Comparing',
  'Swapping',
  'Overwrite from memory'
);
export const InsertionDesc = {
  title: 'Insertion Sort',
  worst: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  average: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  best: <span>O(n)</span>,
  space: <span>O(1)</span>
};

export default Insertion;
