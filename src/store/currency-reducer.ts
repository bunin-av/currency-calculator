import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CurrenciesNames = 'USD' | 'EUR' | 'RUR' | 'BYN'
export type CurrenciesType = {
    currencyName: CurrenciesNames
    buyRate: number
    sellRate: number
}
type CurrencyState = {
    currencies: CurrenciesType[]
    currentCurrency: CurrenciesNames
    isBuying: boolean
    amountOfBYN: string
    amountOfCurrency: string
}
const initialState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 2.62,
            sellRate: 2.58,
        },
        {
            currencyName: 'EUR',
            buyRate: 3.1,
            sellRate: 3.06,
        },
        {
            currencyName: 'RUR',
            buyRate: 0.0345,
            sellRate: 0.0341,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
} as CurrencyState

const currenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        changeIsBuying(state, action: PayloadAction<boolean>) {
            state.isBuying = action.payload
            state.amountOfCurrency = ''
            state.amountOfBYN = ''
        },
        changeCurrentCurrency(state, action: PayloadAction<CurrenciesNames>) {
            state.currentCurrency = action.payload
            state.amountOfCurrency = ''
            state.amountOfBYN = ''
        },
        addAmountOfBYN(state, action: PayloadAction<string>) {
            state.amountOfBYN = action.payload
        },
        addAmountOfCurrency(state, action: PayloadAction<string>) {
            state.amountOfCurrency = action.payload
        },
    }
})

export default currenciesSlice.reducer
export const {
    changeIsBuying,
    changeCurrentCurrency,
    addAmountOfBYN,
    addAmountOfCurrency,
} = currenciesSlice.actions