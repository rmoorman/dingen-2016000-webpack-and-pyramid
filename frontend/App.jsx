import React from "react"


class Hello extends React.Component {
  render() {
    return (
      <p>Hello {this.props.children}!{this.props.suffix}</p>
    )
  }
}


const App = React.createClass({
  displayName: "AppComponent",
  render() {
    return <Hello suffix="!!!">world</Hello>
  },
})


export default App
