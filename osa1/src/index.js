import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
 constructor() {
    super()
    this.state = {
      counter: 0,
      counter2: 0,
      counter3: 0
    }
  }

  asetaArvoon = (arvo) => {
    return () => {
      this.setState({ counter: arvo })
    }
  }

  asetaArvoon2 = (arvo) => {
    return () => {
      this.setState({ counter2: arvo })
    }
  }

  asetaArvoon3 = (arvo) => {
    return () => {
      this.setState({ counter3: arvo })
    }
  }


  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        
        <div>
           <button onClick={this.asetaArvoon(this.state.counter + 1)}>
            hyvä
          </button>
          <button onClick={this.asetaArvoon2(this.state.counter2 + 1)}>
            neutraali
          </button>
           <button onClick={this.asetaArvoon3(this.state.counter3 + 1)}>
            huono
           </button>
        </div>
        <h1>statistiikka</h1>
        <div>hyvä {this.state.counter}</div>
        <div>neutraali {this.state.counter2}</div>
        <div>huono {this.state.counter3}</div>
        <div>keskiarvo {((this.state.counter * 1) + (this.state.counter2 * 0) + (this.state.counter3 * -1))/(this.state.counter + this.state.counter2 + this.state.counter3) }</div>
        <div>positiivisia {this.state.counter /(this.state.counter + this.state.counter2 + this.state.counter3) * 100 } % </div>


      </div>
     )
   }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)