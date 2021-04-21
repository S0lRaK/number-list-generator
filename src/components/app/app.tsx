import { ChangeEvent, FormEvent, useState } from 'react'
import Switch from 'react-switch'
import reactLogo from '../../assets/react-logo.svg'
import tsLogo from '../../assets/typescript-logo-2020.svg'
import { getRandomNumList } from '../../utils/random-num-list'
import { NumberList } from '../number-list/number-list'
import './app.css'

function App() {
  const INITIAL_INPUTS_STATE = {
    numAmount: 10000,
    betweenMin: 1,
    betweenMax: 10000,
    randomNumList: [] as number[],
    switchChecked: false,
  }

  const [state, setState] = useState(INITIAL_INPUTS_STATE)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target
    let valueNumber: number = Number(value)

    setState({
      ...state,
      [name]: valueNumber,
    })
  }

  const handleSwitchChange = (nextChecked: boolean) => {
    setState({
      ...state,
      switchChecked: nextChecked,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setState({
      ...state,
      randomNumList: getRandomNumList(
        state.betweenMin,
        state.betweenMax,
        state.numAmount,
        state.switchChecked
      ),
    })
  }

  return (
    <div className="app">
      <header>
        <form onSubmit={handleSubmit}>
          <p>
            I want a list of
            <br />
            <input
              className="input"
              name="numAmount"
              type="number"
              value={state.numAmount}
              min="1"
              onChange={handleChange}
            />
            <br />
            numbers,
            <br />
            between
            <br />
            <input
              className="input"
              name="betweenMin"
              type="number"
              value={state.betweenMin}
              onChange={handleChange}
            />
            <br />
            and
            <br />
            <input
              className="input"
              name="betweenMax"
              type="number"
              value={state.betweenMax}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="inclusive-switch">
              <Switch
                onChange={handleSwitchChange}
                checked={state.switchChecked}
                width={70}
                uncheckedIcon={<div className="switch switch--unchecked">Excl.</div>}
                checkedIcon={<div className="switch switch--checked">Incl.</div>}
              />
            </label>
            <br />
            randomly ordered.
            <br />
            <button className="button">Generate</button>
          </p>
        </form>
      </header>
      <NumberList list={state.randomNumList} />
      <footer className="footer">
        Made with
        <img src={reactLogo} className="logo logo--spin" alt="React logo" />
        <img src={tsLogo} className="logo" alt="Typescript logo" />
        <br />
        <a
          className="link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </footer>
    </div>
  )
}

export default App
