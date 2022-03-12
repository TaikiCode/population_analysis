import { VFC } from 'react'

const demoData = ['東京', '大阪', '神奈川', '北海道', '兵庫県']

const Prefecture: VFC<{ name: string }> = ({ name }) => (
  <label htmlFor={name}>
    <input id={name} type="checkbox" />
    {name}
  </label>
)

const PrefectureList: VFC = () => (
  <div className="prefectureListArea">
    <div>都道府県</div>
    <div className="prefectureList">
      {demoData.map((name: string) => (
        <Prefecture key={name} name={name} />
      ))}
    </div>
  </div>
)

export default PrefectureList
