type BuySellButtonsType = {
    onClick: (value: boolean) => void
    isBuying: boolean
}

export function BuySellButtons(props: BuySellButtonsType) {
    let name = props.isBuying ? 'Buy' : 'Sell'

    const buttons = ['Buy', 'Sell'].map((el, i) => (
      <button
        key={el + i}
        onClick={() => props.onClick(el === 'Buy')}
        style={name === el ? {background: 'blue'} : {}}
      >{el}</button>
    ))
    return (
      <div>
          {buttons}
      </div>
    )
}