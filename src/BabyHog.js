import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: 10
    }
  }

  colorEyeMapper = () => {
    switch (this.props.eyeColor) {
      case "blue":
        return BlueBaby
      case "sun":
        return SunBaby
      case "glowing":
        return GlowingBaby
      default:
        return normalBaby
    }
  }

  changeWeight = (e) => {
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    if (newWeight > 0) {
      this.setState({
        weight: newWeight
      })
    }
  }

  render() {
    return (
      <li className="hogbabies">
        <h1>{this.props.name}</h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby: {this.props.hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor} </h4>
          
        <Button name="+" onClick={this.changeWeight} >
          Increase Weight
        </Button>
        <Button name="-" onClick={this.changeWeight}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={this.colorEyeMapper()} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}
