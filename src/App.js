import React from 'react';
import slide1 from './images/User Guide.pptx (1).png';
import slide2 from './images/User Guide.pptx (2).png';
import slide2a from './images/User Guide.pptx (2a).png';
import slide2b1 from './images/User Guide.pptx (2b1).png';
import slide2b2 from './images/User Guide.pptx (2b2).png';
import slide2b3 from './images/User Guide.pptx (2b3).png';
import slide2b4 from './images/User Guide.pptx (2b4).png';
import slide3 from './images/User Guide.pptx (3).png';
import slide4 from './images/User Guide.pptx (4).png';
import slide5 from './images/User Guide.pptx (5).png';
import slide6 from './images/User Guide.pptx (6).png';
import slide7 from './images/User Guide.pptx (7).png';
import slide8 from './images/User Guide.pptx (8).png';
import slide9 from './images/User Guide.pptx (9).png';
import slide10 from './images/User Guide.pptx (10).png';
import slide11 from './images/User Guide.pptx (11).png';
import slide12 from './images/User Guide.pptx (12).png';
import slide13 from './images/User Guide.pptx (13).png';
import slide14 from './images/User Guide.pptx (14).png';
import slide15 from './images/User Guide.pptx (15).png';
import slide16 from './images/User Guide.pptx (16).png';
import slide17 from './images/User Guide.pptx (17).png';
import slide18 from './images/User Guide.pptx (18).png';
import slide19 from './images/User Guide.pptx (19).png';
import slide20 from './images/User Guide.pptx (20).png';
import slide21 from './images/User Guide.pptx (21).png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src = {slide1} alt="slide" />
        <img src = {slide2a} alt="slide" />
        <table cellspacing="0" cellpadding="0" border="0" bordercolor="0">
          <tr>
            <td><a href="#create-project"><img src = {slide2b1} alt="slide" /></a></td>
            <td><a href="#add-image"><img src = {slide2b2} alt="slide" /></a></td>
            <td><a href="#annotation"><img src = {slide2b3} alt="slide" /></a></td>
            <td><a href="#aiaa"><img src = {slide2b4} alt="slide" /></a></td>
          </tr>
        </table>
        <img src = {slide3} alt="slide" />
        <img id = "create-project" src = {slide4} alt="slide" />
        <img src = {slide5} alt="slide" />
        <img src = {slide6} alt="slide" />
        <img src = {slide7} alt="slide" />
        <img id = "add-image" src = {slide8} alt="slide" />
        <img src = {slide9} alt="slide" />
        <img src = {slide10} alt="slide" />
        <img id = "annotation" src = {slide11} alt="slide" />
        <img src = {slide12} alt="slide" />
        <img src = {slide13} alt="slide" />
        <img src = {slide14} alt="slide" />
        <img src = {slide15} alt="slide" />
        <img src = {slide16} alt="slide" />
        <img src = {slide17} alt="slide" />
        <img id = "aiaa" src = {slide18} alt="slide" />
        <img src = {slide19} alt="slide" />
        <img src = {slide20} alt="slide" />
        <img src = {slide21} alt="slide" />
      </header>
    </div>
  );
}

export default App;