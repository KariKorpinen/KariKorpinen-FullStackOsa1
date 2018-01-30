import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
 constructor(props) {
    super(props)
    this.state = {
      vasen: 0,
      oikea: 0,
      keski: 0,
      kaikki: [],
    }
  }

  klikVasen = () => {
    this.setState({
      vasen: this.state.vasen + 1,
      kaikki: this.state.kaikki.concat('v'),
    })
  }

  klikKeski = () => {
    this.setState({
      keski: this.state.keski + 1,
      kaikki: this.state.kaikki.concat('k'),
    })
  }

  klikOikea = () => {
    this.setState({
      oikea: this.state.oikea + 1,
      kaikki: this.state.kaikki.concat('o'),
    })
  }

  
  
  render() {
    const historia = () => {
      if (this.state.kaikki.length === 0) {
         return (
            <div>
               <em>sovellusta käytetään nappeja painelemalla</em>
            </div>
         )
       }
       return (
          <div>
            näppäilyhistoria: {this.state.kaikki.join(' ')}
          </div>
       )
    }
    const pituus = () => this.state.kaikki.length
    const vasen = () => this.state.vasen
    const keski = () => this.state.keski
    const oikea = () => this.state.oikea
    return (
      <div>
        <h1>anna palautetta</h1>
        <button onClick={this.klikVasen}>hyvä</button>
        <button onClick={this.klikKeski}>neutraali</button>
        <button onClick={this.klikOikea}>huono</button>
        <div>{historia()}</div>
        <h1>statistiikka</h1>
        
        <div>yhteensä {pituus()}</div>
        <div>hyvä {vasen()}</div>
        <div>neutraaleja {keski()}</div>
        <div>huono {oikea()}</div>
        <Statistics vasen={this.state.vasen} keski={this.state.keski} oikea={this.state.oikea} />
        
        </div>
        
     )
   }
}

const Statistics = (props) => {
     return(
        <div>
           <Statistic sta={((props.vasen * 1) + (props.keski * 0) + (props.oikea * -1))/(props.vasen + props.keski + props.oikea) } />
           <Statistic sta={props.vasen /(props.vasen + props.keski + props.oikea) * 100 } /> 
        </div>
     )
  }
  const Statistic = (props) => {
    return(
      <div>
         <p>{props.sta}</p>
      </div>
   )
 }


ReactDOM.render(
  <App />,
  document.getElementById('root')
)