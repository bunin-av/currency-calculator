import {CurrenciesNames} from "../../store/currency-reducer";

type CurrencyButtonsType = {
    currentCurrency: string
    onClick: (value: CurrenciesNames) => void
}

export function CurrencyButtons(props: CurrencyButtonsType) {
    const buttons = ['USD', 'EUR', 'RUR'] as CurrenciesNames[]

    return (
      <div>
          {buttons.map((el, i) => (
            <button
              key={el + i}
              onClick={() => props.onClick(el)}
              style={props.currentCurrency === el ? {background: 'blue'} : {}}
            >{el}</button>
          ))}
      </div>
    )
}