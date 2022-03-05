import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
// import Categories from "./components/Categories";
import { Header } from './components';
import { Cart, Home } from './pages';
import { setPizzas } from './redux/actions/pizzas';
import { useDispatch } from 'react-redux';
function App() {
  // const dispatch = useDispatch();



  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          {/* <Route path="*" element={<Home items={pizzas}/>}/> */}
          {/* <Route path="*" element={<Home items={this.props.items} />} /> */}
          <Route path="*" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = {
//   setPizzas,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// import store from './redux/store';
// function App() {
//   // const [pizzas, setPizzas] = useState([]);

//   useEffect(() => {

//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       setPizzas(data.pizzas)
//     })

//     // fetch('http://localhost:3000/db.json').then(response => response.json()).then(data => setPizzas(data.pizzas))
//   }, [])

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//           <Routes>
//             <Route path="*" element={<Home items={pizzas}/>}/>
//             <Route path="/cart" element={<Cart />}/>
//           </Routes>
//       </div>
//     </div>
//   );
// }

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Routes>
//             {/* <Route path="*" element={<Home items={pizzas}/>}/> */}
//             <Route path="*" element={<Home items={this.props.items} />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </div>
//     );
//   }
// }
