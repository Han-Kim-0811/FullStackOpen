import { useState } from "react"

const Button = (props) => {
  const {handler, text} = props

  return (
    <button onClick={handler}>
      {text}
    </button>
  )
}

const Display = (props) => {
  const {text, val} = props

  return (
    <div>{text} {val}</div>
  )
}

const Percentage = (props) => {
  const {text, val} = props

  return (
    <div>{text} {val * 100} %</div>
  )
}

const Statistics = (props) => {
  const {all, average, positive} = props
  return (
    <div>
      <Display text={'all'} val={all} />
      <Display text={'average'} val={average} />
      <Percentage text={'positive'} val={positive} />
    </div>
  )
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
      <Display text={'good'} val={gCount} />
      <Display text={'neutral'} val={nCount} />
      <Display text={'bad'} val={bCount} />
      <Statistics all={all} average={average} positive={positive} />
    </div>
  )
}

export default App
