import { Component } from "react"
import "./Portfolio.css"
import Card from "../Card/Card"
export default class Portfolio extends Component{
    constructor(){
        super()
    }
    render(){
        return<div className="prnt">
                    <h1>Portfolio</h1>
                    <div className="cards">
                        <Card content={"web design"} bgcolor={"#ff9164"} />
                        <Card content={"UI/UX"}  bgcolor={"#58510d"}/>
                        <Card content={"Frontend"} bgcolor={"#ff9164"}/>
                        <Card content={"Backend"} bgcolor={"#58510d"}/>
                        <Card content={"mobile app"}  bgcolor={"#ff9164"}/>
                        <Card content={"web design"} bgcolor={"#58510d"}/>
                    </div>
            </div>
    }
}