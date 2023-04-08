import React, { Component } from 'react'
import Introsection from '../components/Introsection'
import Portfoliogrid from '../components/Portfoliogrid'
import Contactform from '../components/Contactform'

export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <Introsection />
        <Portfoliogrid />
        <Contactform />
      </div>
    )
  }
}
