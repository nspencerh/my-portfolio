import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title':"Work Example 1",
    'image': {
        'desc': "Example of Kiosk EMD",
        'src':"images/example1.png",
        'comment':"This is comment 1"
    }
  },
  {
    'title':"Work Example 2",
    'image': {
        'desc': "Example of Agent Front End",
        'src':"images/example2.png",
        'comment':"This is comment 2"
    }
  },
  {
    'title':"Work Example 3",
    'image': {
        'desc': "Example of Serverless Portfolio",
        'src':"images/example3.png",
        'comment':"This is comment 3"
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
