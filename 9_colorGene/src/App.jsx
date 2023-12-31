//! on submit
import React, { useState } from 'react'
import SingleColor from './component/SingleColor'
import "./App.css"
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App







// import React, { useState, useEffect } from 'react';
// import SingleColor from './component/SingleColor';
// import './App.css';
// import Values from 'values.js';

// function App() {
//   const [color, setColor] = useState('#');
//   const [error, setError] = useState(false);
//   const [list, setList] = useState(new Values('#f15025').all(10));

//   const handleChange = (e) => {
//     const inputValue = e.target.value;
//     setColor(inputValue);

//     // Validate and update the color list as the user types
//     try {
//       let colors = new Values(inputValue).all(10);
//       setList(colors);
//       setError(false); // Reset error state if valid
//     } catch (error) {
//       setError(true);
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <section className='container'>
//         <h3>color generator</h3>
//         <form>
//           <input
//             type='text'
//             value={color}
//             onChange={handleChange} // Handle change event
//             placeholder='#f15025'
//             className={`${error ? 'error' : null}`}
//           />
//         </form>
//       </section>
//       <section className='colors'>
//         {list.map((color, index) => {
//           return (
//             <SingleColor
//               key={index}
//               {...color}
//               index={index}
//               hexColor={color.hex}
//             />
//           );
//         })}
//       </section>
//     </>
//   );
// }

// export default App;


