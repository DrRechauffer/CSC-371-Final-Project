import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createKey
} from './helpers';

const Bubble = (numbers) => {
  const trace = newTrace(numbers);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      addToTrace(trace, numbers, lastSorted(trace), [j, j + 1]);
      if (numbers[j] > numbers[j + 1]) {
        swap(numbers, j, j + 1);
        addToTrace(trace, numbers, lastSorted(trace), [], [j, j + 1]);
      }
    }

    addToTrace(trace, numbers, [
      ...lastSorted(trace),
      numbers.length - 1 - i
    ]);
  }

  return trace;
};

export const BubbleKey = createKey('Comparing', 'Swapping');
export const BubbleDesc = {
  title: 'Bubble Sort',
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
export default Bubble;
