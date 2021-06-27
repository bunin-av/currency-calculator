import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {InputPair} from "./components/InputPair/InputPair";
import {
    addAmountOfBYN,
    addAmountOfCurrency,
    changeCurrentCurrency,
    changeIsBuying,
    CurrenciesNames,
    CurrenciesType
} from "./store/currency-reducer";
import {CurrencyButtons} from "./components/CurrencyButtons/CurrencyButtons";
import {BuySellButtons} from "./components/BuySellButtons/BuySellButtons";

function App() {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.currencies)

    const onChange = (currency: string, value: string, rate: number) => {
        if (!isFinite(+value)) {
            return
        }
        if (currency === 'BYN') {
            dispatch(addAmountOfBYN(value))
            let exchangedValue = (+value / rate).toFixed(2)
            if (!value) {
                dispatch(addAmountOfCurrency(''))
                return
            }
            dispatch(addAmountOfCurrency(exchangedValue))
        } else {
            dispatch(addAmountOfCurrency(value))
            let exchangedValue = (+value * rate).toFixed(2)
            if (!value) {
                dispatch(addAmountOfBYN(''))
                return
            }
            dispatch(addAmountOfBYN(exchangedValue))
        }
    }

    const changeCurrency = (value: CurrenciesNames) => dispatch(changeCurrentCurrency(value))
    const doChangeIsBuying = (value: boolean) => dispatch(changeIsBuying(value))

    const currentInputPair = state.currencies.filter(el => el.currencyName === state.currentCurrency)
    const inputElems = currentInputPair.map((el: CurrenciesType, i) => (
      <InputPair
        currentCurrency={state.currentCurrency}
        amountOfCurrency={state.amountOfCurrency}
        amountOfBYN={state.amountOfBYN}
        onChange={onChange}
        key={el.currencyName + i}
        rate={state.isBuying ? el.buyRate : el.sellRate}
      />

    ))
    return (
      <div className="App">
          <CurrencyButtons currentCurrency={state.currentCurrency} onClick={changeCurrency}/>
          {inputElems}
          <BuySellButtons isBuying={state.isBuying} onClick={doChangeIsBuying}/>
      </div>
    )
}

export default App;
