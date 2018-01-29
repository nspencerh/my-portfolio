import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  /* properties necesarios para desplegar el 1er elemento*/
  {
    'title':"New Sales Model Kiosk EMD LATAM",
    'href':"https://example.com",
    'desc':"Este es el ejemplo 1, quis nostrud exercitationt, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
        'desc': "Example of Kiosk EMDs",
        'src': "images/example1.png",
        'comment': "Kiosk EMD Sales"
    }
  },
  /* properties necesarios para desplegar el 2do elemento*/
  {
    'title':"Work Example 2",
    'href':"https://example.com",
    'desc':"Este es el ejemplo 2, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    'image': {
        'desc': "Example of Agent Front End",
        'src': "images/KioskEMD_1.png",
        'comment':"Agent Front End"
    }
  },
  /* properties necesarios para desplegar el 3er elemento*/
  {
    'title':"Work Example 3",
    'href':"https://example.com",
    'desc':"Este es el ejemplo 3, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    'image': {
        'desc': "Example of Serverless Portfolio",
        'src':"images/Foto.png",
        'comment':"Serverless Portfolio"
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
