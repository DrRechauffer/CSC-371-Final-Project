import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createKey
} from './helpers';

const Selection = (numbers) => {
  const trace = newTrace(numbers);

  for (let i = 0; i < numbers.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < numbers.length; j++) {
      addToTrace(trace, numbers, lastSorted(trace), [minIndex, j]);
      if (numbers[j] < numbers[minIndex]) {
        addToTrace(trace, numbers, lastSorted(trace), [minIndex], [j]);
        minIndex = j;
        addToTrace(trace, numbers, lastSorted(trace), [minIndex], [j]);
      }
    }

    addToTrace(trace, numbers, lastSorted(trace), [], [i, minIndex]);

    swap(numbers, i, minIndex);

    addToTrace(trace, numbers, [...lastSorted(trace), i], [], []);
  }

  addToTrace(trace, numbers, [...lastSorted(trace), numbers.length - 1]);

  return trace;
};

export const SelectionKey = createKey('Comparing', 'Swapping');

export const SelectionDesc = {
  title: 'Selection Sort',
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
  best: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  space: <span>O(1)</span>
};

export default Selection;
