import { useState } from "react"

const Button = (props) => {
  const {handler, text} = props

  return (
    <button onClick={handler}>
      {text}
    </button>
  )
}

const Statisticsline = (props) => {
  const {text, val} = props
  if(text !== 'positive') {
    return (
      <div>{text} {val}</div>
    )
  } else {
    return (
      <div>{text} {val * 100} %</div>
    )
  }
}

const Statistics = (props) => {
  const {gCount, nCount, bCount, all, average, positive} = props

  if(all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <div>
        <Statisticsline text="good" val={gCount} />
        <Statisticsline text="neutral" val={nCount} />
        <Statisticsline text="bad" val={bCount} />
        <Statisticsline text="all" val={all} />
        <Statisticsline text="average" val={average} />
        <Statisticsline text="positive" val={positive} />
      </div>
    )
  }

}

const App = () => {
  const [gCount, setG] = useState(0)
  const [nCount, setN] = useState(0)
  const [bCount, setB] = useState(0)

  const incCount = (count, setCount) => () => setCount(count + 1)
 
  const all = gCount + nCount + bCount
  const average = (gCount - bCount) / all
  const positive = gCount / all

  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={incCount(gCount, setG)} text='good' />
      <Button handler={incCount(nCount, setN)} text='neutral' />
      <Button handler={incCount(bCount, setB)} text='bad' />
      
      <h1>statistics</h1>
      <Statistics gCount={gCount} nCount={nCount} bCount={bCount} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App
