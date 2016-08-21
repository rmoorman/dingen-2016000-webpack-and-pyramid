import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import "./app.styl"


const body = document.getElementsByTagName("body")[0]
const target = document.createElement("div")
target.id = "target"
body.appendChild(target)


ReactDOM.render(
  <App />,
  target
)
