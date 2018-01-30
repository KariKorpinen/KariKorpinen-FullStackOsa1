import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  //const kurssi = 'Half Stack -sovelluskehitys'
  //const osa1 = 'Reactin perusteet'
  //const tehtavia1 = 10
  //const osa2 = 'Tiedonvälitys propseilla'
  //const tehtavia2 = 7
  //const osa3 = 'Komponenttien tila'
  //const tehtavia3 = 14
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
       <Otsikko kurssi={kurssi} />
       <Sisalto osa1={osa1.nimi} tehtavia1={osa1.tehtavia}
       osa2={osa2.nimi} tehtavia2={osa2.tehtavia} 
       osa3={osa3.nimi} tehtavia3={osa3.tehtavia3}/>
       <Yhteensa tehtavia1={osa1.tehtavia} tehtavia2={osa2.tehtavia} tehtavia3={osa3.tehtavia}/>
    </div>
   )
}

const Otsikko = (props) => {
    return (
      <div>
        <p><h1>{props.kurssi}</h1></p>
      </div>
    )
  }

  const Sisalto = (props) => {
    return (
      <div>
        <Osa osa={props.osa1} tehtavia={props.tehtavia1} />
        <Osa osa={props.osa2} tehtavia={props.tehtavia2} />
        <Osa osa={props.osa3} tehtavia={props.tehtavia3} />
      </div>
    )
  }

  const Yhteensa = (props) => {
    return (
      <div>
        <p>yhteensä {props.tehtavia1 + props.tehtavia2 + props.tehtavia3} tehtävää</p>
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
