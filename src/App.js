import logo from './logo.svg';
import './App.css';




import CardComponent from './components/CardComponent.js';


import peopleObjs from "./data/peopleObjs.js"
//// With Array of peopleObjs

// import { sam, johanness, felix, kenya } from "./data/peopleObjs.js"
//// With Individual peopleObjs


function App(  ) {

  //// js

    console.log("-------- In App --------")  // 

    // console.log("peopleObjs: " , peopleObjs)  // 
    //   const sam = peopleObjs[0]
      const johanness = peopleObjs[1]
    //   const felix = peopleObjs[2]
    //   const kenya = peopleObjs[3]

    let theResultOfItteratingWithForEach = peopleObjs.forEach(  function(){ 
      return( < CardComponent personObj={johanness} juiceJug="Orange Juice" /> )
    }  )
    console.log("theResultOfItteratingWithForEach: " , theResultOfItteratingWithForEach)  // 


    let theResultOfItteratingWithDotMap = peopleObjs.map(  function(){ 
      return( < CardComponent personObj={johanness} juiceJug="Orange Juice" /> )
    }  )
    console.log("theResultOfItteratingWithDotMap: " , theResultOfItteratingWithDotMap)  // 


  //// js

  //// more HTML Like

  return (
    <div className="App">
      <header className="App-header">


        <h1>Y'all Are Awesome!💛✨</h1>
        <img src={logo} className="App-logo" alt="logo" />

      {
        // [ {} , {} , {} , {}  ]
        peopleObjs.map(  function( eachPerson ){
          
          return( < CardComponent personObj={eachPerson} juiceJug="Orange Juice" /> )

        }  )
        // [ < CardComponent /> , < CardComponent /> , < CardComponent /> , < CardComponent />  ]
      }
      {
        // [ {} , {} , {} , {}  ]
        peopleObjs.map(  ( eachPerson )=>{
          
          return( < CardComponent personObj={eachPerson} juiceJug="Orange Juice" /> )

        }  )
        // [ < CardComponent /> , < CardComponent /> , < CardComponent /> , < CardComponent />  ]
      }


      {

        peopleObjs.map(  eachPerson => < CardComponent personObj={eachPerson} juiceJug="Orange Juice" />  )
      
      }
      {

      peopleObjs.map(  eachPerson => 
          < CardComponent 
            personObj={eachPerson} 
            juiceJug="Orange Juice" 
          /> 
        )

      }


        {/* < CardComponent personObj={johanness} juiceJug="Orange Juice" />

        < CardComponent personObj={sam} juiceJug="Grape Juice" />

        < CardComponent personObj={felix} juiceJug="Gin and Juice" />

        < CardComponent personObj={kenya} juiceJug="Pineapple Juice" /> */}


      </header>
    </div>
  );

  //// more HTML Like

}
export default App;








      {/* {

        peopleObjs.forEach(  function(){

          return( < CardComponent personObj={johanness} juiceJug="Orange Juice" /> )

        }  )

      } */}



{
  /* 
    <SomeComponent 

      v WhatThisWillBeReferedToInTheNextComponent={ WhatIsBeingReferedToHERE } ^ /> 
      WIG={ WIAH } 

    /> 
  */
  }



        {/* <h2>================</h2>
            <h2>Sam</h2>
            <img src="https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-38321cb359b0-512" />
            <p>Favorite Color: Gold</p>
        <h2>================</h2> */}