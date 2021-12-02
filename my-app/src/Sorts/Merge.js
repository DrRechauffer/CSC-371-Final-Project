import React from 'react';
import { newTrace, addToTrace, createKey } from './helpers';

const Merge = (numbers) => {
  const trace = newTrace(numbers);

  function merge(original, start, mid, end) {
    const left = original.slice(start, mid);
    const right = original.slice(mid, end);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        addToTrace(trace, original, [], [], [], [k + start]);
        original[k + start] = left[i];
        i++;
        addToTrace(trace, original, [], [], [], [k + start]);
      } else {
        addToTrace(trace, original, [], [], [], [k + start]);
        original[k + start] = right[j];
        j++;
        addToTrace(trace, original, [], [], [], [k + start]);
      }
      k++;
    }
    while (i < left.length) {
      addToTrace(trace, original, [], [], [], [k + start]);
      original[k + start] = left[i];
      i++;
      k++;
      addToTrace(trace, original, [], [], [], [k + start]);
    }
    while (j < right.length) {
      addToTrace(trace, original, [], [], [], [k + start]);
      original[k + start] = right[j];
      j++;
      k++;
      addToTrace(trace, original, [], [], [], [k + start]);
    }

    left.length = 0;
    right.length = 0;
  }

  function recursiveMerge(original, start, end) {
    const length = end - start;
    if (length < 2) {
      if (length < 1) return original;
      else return [original[start]];
    }

    const midPoint = Math.floor((start + end) / 2);

    addToTrace(
      trace,
      original,
      [],
      [...Array(midPoint - start).keys()].map((i) => i + start)
    );
    recursiveMerge(original, start, midPoint);

    addToTrace(
      trace,
      original,
      [],
      [...Array(end - midPoint).keys()].map((i) => i + midPoint)
    );
    recursiveMerge(original, midPoint, end);

    merge(original, start, midPoint, end);
  }

  recursiveMerge(numbers, 0, numbers.length);

  addToTrace(trace, numbers, [...Array(numbers.length).keys()]);
  return trace;
};

export const MergeKey = createKey(
  'Call Merge Sort',
  null,
  'Overwrite from axillary array'
);
export const MergeDesc = {
  title: 'Merge Sort',
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
  space: (
    <span>
      O(<em>n</em>)
    </span>
  )
};
export default Merge;
