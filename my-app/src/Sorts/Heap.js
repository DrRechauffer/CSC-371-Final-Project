import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createRange,
  createKey
} from './helpers';

const Heap = (numbers) => {
  const trace = newTrace(numbers);

  const left = (i) => 2 * i + 1;
  const right = (i) => 2 * i + 2;
  const parent = (i) => Math.floor((i - 1) / 2);

  const maxHeapify = (array, i, size) => {
    const leftChild = left(i);
    const rightChild = right(i);

    addToTrace(trace, array, lastSorted(trace), [i, leftChild]);

    let largest =
      leftChild < size && array[leftChild] > array[i]
        ? leftChild
        : i;

    addToTrace(trace, array, lastSorted(trace), [largest, rightChild]);

    if (rightChild < size && array[rightChild] > array[largest])
      largest = rightChild;

    if (largest !== i) {
      addToTrace(trace, array, lastSorted(trace), [], [i, largest]);

      swap(array, i, largest);

      addToTrace(trace, array, lastSorted(trace), [], [i, largest]);

      maxHeapify(array, largest, size);
    }
  };

  const BuildMaxHeap = (array) => {
    const start = Math.floor(array.length / 2);
    const size = array.length;
    for (let i = start; i >= 0; i--) {
      maxHeapify(array, i, size);
    }

    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [],
      [],
      [],
      createRange(0, array.length)
    );
  };

  const Heap = (array) => {
    BuildMaxHeap(array);
    let size = array.length;
    for (let i = array.length - 1; i > 0; i--) {
      addToTrace(trace, array, lastSorted(trace), [], [0, i]);

      swap(array, 0, i);
      size -= 1;

      addToTrace(trace, array, [...lastSorted(trace), i], [], [0, i]);

      maxHeapify(array, 0, size);

      addToTrace(
        trace,
        array,
        lastSorted(trace),
        [],
        [],
        [],
        createRange(0, size)
      );
    }
    addToTrace(trace, array, [...lastSorted(trace), 0]);
  };

  Heap(numbers);
  return trace;
};

export const HeapKey = createKey(
  'Comparing',
  'Swapping',
  null,
  'Heap Built'
);

export const HeapDesc = {
  title: 'Heap Sort',
  worst: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  average: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  best: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  space: <span>O(1)</span>
};

export default Heap;
