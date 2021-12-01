import React, { Component } from 'react';
import './App.css';

import Control_App from './Screen_Components/Control_App';
import Bar_Top from './Screen_Components/Bar_Top';
import Drawer from './Screen_Components/Drawer';
import Sort_Visualizer from './Screen_Components/Sort_Visualizer';
import Footer from './Screen_Components/Footer';

import BubbleSort, {
  BubbleSortKey,
  BubbleSortDesc
} from './Sorts/BubbleSort';
import SelectionSort, {
  SelectionSortKey,
  SelectionSortDesc
} from './Sorts/SelectionSort';
import InsertionSort, {
  InsertionSortKey,
  InsertionSortDesc
} from './Sorts/InsertionSort';
import MergeSort, {
  MergeSortKey,
  MergeSortDesc
} from './Sorts/MergeSort';
import QuickSort, {
  QuickSortKey,
  QuickSortDesc
} from './Sorts/QuickSort';
import HeapSort, {
  HeapSortKey,
  HeapSortDesc
} from './Sorts/HeapSort';


class App extends Component {
  state = {
    array: [],
    arraySize: 10,
    trace: [],
    algorithm: null,
    appDrawerOpen: false
  };

  ALGORITHM = {
    'Bubble Sort': BubbleSort,
    'Selection Sort': SelectionSort,
    'Insertion Sort': InsertionSort,
    'Merge Sort': MergeSort,
    'Quick Sort': QuickSort,
    'Heap Sort': HeapSort,
   
  };

  ALGORITHM_KEY = {
    'Bubble Sort': BubbleSortKey,
    'Selection Sort': SelectionSortKey,
    'Insertion Sort': InsertionSortKey,
    'Merge Sort': MergeSortKey,
    'Quick Sort': QuickSortKey,
    'Heap Sort': HeapSortKey,
    
  };

  ALGORITHM_DESC = {
    'Bubble Sort': BubbleSortDesc,
    'Selection Sort': SelectionSortDesc,
    'Insertion Sort': InsertionSortDesc,
    'Merge Sort': MergeSortDesc,
    'Quick Sort': QuickSortDesc,  
    'Heap Sort': HeapSortDesc,
   
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateRandomArray = () => {
    // Generate pseudo-random number between 1 and max
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // Generate an array of length max
    const array = Array(this.state.arraySize)
      .fill(0)
      .map(() => getRandomInt(this.state.arraySize * 5));

    this.setState(
      {
        array,
        trace: []
      },
      this.createTrace
    );
  };

  handleAlgorithmChange = (algorithm) => {
    this.setState({ algorithm }, this.generateRandomArray);
  };

  handleArraySizeChange = (size) => {
    size = Number(size);
    size = size > 100 ? 100 : size;
    size = size < 0 ? 0 : size;
    this.setState({ arraySize: size }, this.generateRandomArray);
  };

  createTrace = () => {
    const numbers = [...this.state.array];
    const sort = this.ALGORITHM[this.state.algorithm];
    if (sort) {
      const trace = sort(numbers);
      this.setState({ trace });
    }
  };

  toggleAppDrawer = () => {
    this.setState((prevState) => ({
      appDrawerOpen: !prevState.appDrawerOpen
    }));
  };

  render() {
    let theme = `App`;
    if (this.state.appDrawerOpen) theme += ` App_modal_open`;

    const Color = this.ALGORITHM_KEY[this.state.algorithm];
    const desc = this.ALGORITHM_DESC[this.state.algorithm];

    const controls = (
      <Control_App
        onGenerateRandomArray={this.generateRandomArray}
        algorithm={this.state.algorithm}
        onAlgorithmChange={this.handleAlgorithmChange}
        arraySize={this.state.arraySize}
        onArraySizeChange={this.handleArraySizeChange}
        
      />
    );

    return (
      <div className={theme}>
        <Bar_Top
          drawerOpen={this.state.appDrawerOpen}
          toggleDrawer={this.toggleAppDrawer}
        >
          {controls}
        </Bar_Top>

        <Drawer
          open={this.state.appDrawerOpen}
          closeDrawer={this.toggleAppDrawer}
        >
          {controls}
        </Drawer>

        <main className="App__Body">
          <Sort_Visualizer
            array={this.state.array}
            trace={this.state.trace}
            Color={Color}
            desc={desc}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
