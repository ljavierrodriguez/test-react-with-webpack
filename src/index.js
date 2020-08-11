import React from 'react';
import ReactDOM from 'react-dom';

// Carga de CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

// Carga de JavaScript
import 'jquery';
import 'popper.js';
import 'bootstrap';


const App = () => {
    return (
        <h1>Hola <i className="fas fa-globe-americas fa-4x"></i></h1>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));