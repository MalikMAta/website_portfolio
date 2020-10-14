import React from "react";
import "./Middle.css";

function Middle() {
  return (
    <div className="projects-container">
      <h3>Projects</h3>

    <div className="middle" id="1" onclick="myFunction()">
        <div className="projects">
          <h3>Tutor App</h3>
          <p>Project description</p>
          <img></img>
          <a href="github.com">Link</a>
        </div>
        <div className="projects" id="2" onclick="myFunction()">
          <h3>Spartan Counselor Web App</h3>
          <p>Project description</p>
          <img></img>
          <a href="github.com">Link</a>
        </div>
        <div className="projects" id="3" onclick="myFunction()">
          <h3>Web Scraper</h3>
          <p>Project description</p>
          <img></img>
          <a href="github.com">Link</a>
        </div>
        <div className="projects" id="4" onclick="myFunction()">
          <h3>Twitter Clone</h3>
          <p>Project description</p>
          <img></img>
          <a href="github.com">Link</a>
        </div>
        <div className="projects" id="5" onclick="myFunction()">
          <h3>Virus Catcher</h3>
          <p>Project description</p>
          <img></img>
          <a href="github.com">Link</a>
        </div>
        <div className="projects" id="6" onclick="myFunction()">
          <h3>Western K9</h3>
          <p>Project description</p>
          <img></img>
          <a href="github.com">Link</a>
        </div>
        <div className="projects" id="7" onclick="myFunction()">
          <h3>School POS System</h3>
          <p>Project description</p>
          <img></img>
          <a href="github.com">Link</a>
        </div>
        <div className="projects" id="8" onclick="myFunction()">
          <h3>Westher App</h3>
          <p>Project description</p>
          <img></img>
          <a href="github.com">Link</a>
        </div>
        <div className="projects" id="8" onclick="myFunction()">
          <h3>Weather App</h3>
          <p>Project description</p>
          <img></img>
          <a href="github.com">Link</a>
      </div>
      <div className="projects" id="8" onclick="myFunction()">
        <h3>Js Card Game</h3>
        <p>Project description</p>
        <img></img>
        <a href="github.com">Link</a>
      </div>
      <div className="projects" id="8" onclick="myFunction()">
        <h3>Connect Four</h3>
        <p>Project description</p>
        <img></img>
        <a href="github.com">Link</a>
      </div>
      <div className="projects" id="8" onclick="myFunction()">
        <h3>Smart Senior Care System</h3>
        <p>Project description</p>
        <img></img>
        <a href="github.com">Link</a>
      </div>
      <div className="projects" id="8" onclick="myFunction()">
        <h3>Chore Slammer</h3>
        <p>Project description</p>
        <img></img>
        <a href="github.com">Link</a>
      </div>
      </div>
    </div>
  );
}

function withdraw() {
  document.addEventListener("click", function(e) {
    if (e.target.tagName == "DIV") {
      e.target.style.fontSize = "20px";
    }
  })
}

export default Middle;
