import { FC } from 'react'

interface Props {
  list: number[]
}

export const NumberList: FC<Props> = ({ list }) => {
  const listItems = list.map((num) => <li key={num.toString()}>{num}</li>)
  return (
    <div className="list">
      <ol>{listItems}</ol>
    </div>
  )
}
