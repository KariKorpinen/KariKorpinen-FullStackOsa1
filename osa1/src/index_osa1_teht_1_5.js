import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = { 
  nimi: 'Half Stack -sovelluskehitys',
  osat: [ 
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14
        }
     ]
  }
  return (
    <div>
       <Otsikko kurssi={kurssi.nimi} />
       <Sisalto osat={kurssi.osat}/>
       <Yhteensa osat={kurssi.osat}/>
       <div>
          <Otsikko kurssi="Anna palautetta" />
          <div>
             <div>{this.state.counter}</div>
                <div>
                   <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
                     plus
                   </button>
                   <button onClick={() => this.setState({ counter: 0 })}>
                    zero
                   </button>
                </div>
              </div>
          <Sisalto osat={kurssi.osat}/>
          <Otsikko kurssi="statistiikka"/>
       </div>
    </div>
   )
}


const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
    )
  }

  const Sisalto = (props) => {
    return (
      <div>
        <Osa osa={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia} />
        <Osa osa={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia} />
        <Osa osa={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia} />
      </div>
    )
  }

  const Yhteensa = (props) => {
    return (
      <div>
        <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
      </div>
    )
  }

  const Osa = (props) => {
    return (
      <div>
        <p>{props.osa} {props.tehtavia}</p>
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
class App2 extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 1
    }
  }
}