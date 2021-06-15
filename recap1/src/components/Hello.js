import { Component } from "react"
import App from "../App"


class Hello extends Component{
    render(){
    return(
        <h1>Hello World {this.props.name}</h1>
        )
    }
}
export default Hello;