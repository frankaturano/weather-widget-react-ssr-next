import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import WeatherWidget from '../components/weather_widget'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      activeIndex: 0, 
      data: props.data
    }
    this.timer = this.timer.bind(this)
    this.addLocation = this.addLocation.bind(this)
    this.WeatherWidget = React.createRef()
    this.NewLocation = React.createRef()
  }

  static async getInitialProps({ req }) {
    const locations = ['San Diego, CA', 'New York, NY', 'Juneau, AK']
    
    const urls = locations.map(location => (`
      https://query.yahooapis.com/v1/public/yql?q=select * 
      from weather.forecast where woeid in (select woeid from geo.places(1) 
      where text="${location}")
      &format=json&env=store://datatables.org/alltableswithkeys
    `))

    const res = await Promise.all(urls.map(fetch)).then(responses =>
      Promise.all(responses.map(res => res.json())
    )) // #performance!

    let data = res.map(res => res.query.results ? res.query.results.channel : false)
    data = data.filter(data => data && data.location) // filter out bad locations

    return { data }
  }

  componentDidMount() {
    const intervalId = setInterval(this.timer, 5000)
    this.setState({ intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  timer() {   
    const max = this.state.data.length - 1
    const next = this.state.activeIndex < max ? this.state.activeIndex + 1 : 0

    // this is a little ghetto...
    const weatherWidgets = this.WeatherWidget.current.getElementsByClassName('weather__widget')
    const slideIndicators = this.WeatherWidget.current.getElementsByClassName('slide__indicator')

    weatherWidgets[next].style.opacity = '1'
    weatherWidgets[this.state.activeIndex].style.opacity = '0'

    slideIndicators[next].style.opacity = '1'
    slideIndicators[this.state.activeIndex].style.opacity = '.7'

    this.setState({ activeIndex: next })
  }

  jumpTo(index) {
    clearInterval(this.state.intervalId)

    const weatherWidgets = this.WeatherWidget.current.getElementsByClassName('weather__widget')
    const slideIndicators = this.WeatherWidget.current.getElementsByClassName('slide__indicator')

    // fanciness all over
    Array.prototype.slice.call(weatherWidgets).forEach(ww => ww.style.opacity = '0')
    Array.prototype.slice.call(slideIndicators).forEach(ss => ss.style.opacity = '.7')

    weatherWidgets[index].style.opacity = '1'
    slideIndicators[index].style.opacity = '1'
    
    this.setState({ activeIndex: index }, () => {
      const intervalId = setInterval(this.timer, 5000)
      this.setState({ intervalId })
    })
  }

  addLocation(e) {
    e.preventDefault()
    
    // This should be a variable somewhere
    // In fact, there should be a weather API helper in this project
    const url = `
      https://query.yahooapis.com/v1/public/yql?q=select * 
      from weather.forecast where woeid in (select woeid from geo.places(1) 
      where text="${this.NewLocation.current.value}")
      &format=json&env=store://datatables.org/alltableswithkeys
    `

    // Oh, but some error handling would have been nice... even just a little!!
    fetch(url).then(response => {
      response.json().then(({ query }) => { // let's assume the api is always just working lol
        if (query.results && query.results.channel && query.results.channel.location) {
          let data = this.state.data.concat([query.results.channel])
          this.setState({ data }, () => this.jumpTo(data.length - 1))
          // SOOOO... storing a cookie would be super easy
          // In fact... technically... we could do the could do the cookie bit server side
          // Then, render the slider a bit differently with a <noscript>
          // Result would be that this whole thing would work with NO JAVASCRIPT :)))))
          // So many chins on my emjoi!
        } else {
          // LAME!
          alert('Invalid Location, try again!')
        }
      })
    }) // nah... ;) who needs error handling anyways?
  }

  render() {
    const { data } = this.state

    return (
      <div>
        <div className="widgets__slider" ref={this.WeatherWidget}>
          {/* Weather Widgets */}
          {data.map((weather, i) => <WeatherWidget weather={weather} key={i} />)}
          {/* Slide Indicators */}
          <div className="slide__indicators">
            {data.map((weather, i) => (
              <div className="slide__indicator" key={i} onClick={e => this.jumpTo(i)}></div>
            ))}
          </div>
          {/* Add Location Form */}
          <form className="add__location" onSubmit={this.addLocation}>
            <label>Add Location (City, State)</label>
            <input type="text" ref={this.NewLocation} />
            <button type="submit">&#43;</button>
          </form>
          {/* General Styles */}
          <style jsx>{`
            .widgets__slider {
              position: relative;
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              box-shadow: 0px 0px 2px rgba(0, 0, 0, .5);
              color: #3b3d3c;
              padding-top: 88px;
            }
            .add__location {
              background: #eee;
              font-family: sans-serif;
              letter-spacing: 1px;
              padding: 1em;
              box-sizing: border-box;
            }
            .add__location label {
              display: block;
              margin-bottom: 5px;
              font-size: .9em;
            }
            .add__location input {
              border: none;
              width: calc(100% - 60px);
              padding: 6px 8px;
              font-size: .8em;
            }
            .add__location button {
              width: 35px;
              float: right;
              background: #3b3d3c;
              color: #fff;
              border: none;
              font-size: 1.2em;
              padding: 0 0 .2em 0;
            }
            .slide__indicators {
              text-align: center;
            }
            .slide__indicator {
              width: 10px;
              height: 10px;
              display: inline-block;
              background: #3b3d3c;
              margin: 5px;
              border-radius: 20px;
              opacity: .7;
              transition: opacity .5s;
              cursor: pointer;
            }
            .slide__indicator:nth-child(1) {
              opacity: 1;
            }
          `}</style>
        </div>
      </div>
    )
  }
}
