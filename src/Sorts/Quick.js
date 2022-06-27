import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createRange,
  createKey
} from './helpers';

const Quick = (numbers) => {
  const trace = newTrace(numbers);

  function choosePivot(array, start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
  }

  function partition(array, start, end) {
    let i = start + 1;
    let j = start + 1;

    addToTrace(trace, array, lastSorted(trace), [start]);

    while (j <= end) {
      if (array[j] < array[start]) {
        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [j],
          [],
          createRange(start + 1, i)
        );

        swap(array, i, j);

        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [i],
          [],
          createRange(start + 1, i)
        );
        i += 1;
      }
      j += 1;
    }

    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    swap(array, start, i - 1);

    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    return i - 1;
  }

  function recursiveQuick(array, start, end) {
    if (start >= end) {
      if (start === end) {
        addToTrace(trace, array, [...lastSorted(trace), start]);
      }
      return null;
    }

    let pivot = choosePivot(array, start, end);

    addToTrace(trace, array, lastSorted(trace), [pivot]);

    swap(array, start, pivot);

    addToTrace(trace, array, lastSorted(trace), [pivot]);

    pivot = partition(array, start, end);

    addToTrace(trace, array, [...lastSorted(trace), pivot]);

    recursiveQuick(array, start, pivot - 1);
    recursiveQuick(array, pivot + 1, end);
  }

  recursiveQuick(numbers, 0, numbers.length - 1);

  return trace;
};

export const QuickKey = createKey(
  'Comparing',
  'Swapping',
  null,
  'Less than pivot'
);

export const QuickDesc = {
  title: 'Quick Sort',
  worst: (
    <span>
      O(<em>n</em>
      <sup>2</sup>)
    </span>
  ),
  average: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  best: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  space: (
    <span>
      O(log<em>n</em>)
    </span>
  )
};

export default Quick;
