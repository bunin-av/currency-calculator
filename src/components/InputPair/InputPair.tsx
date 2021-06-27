import React from "react";

type InputPairType = {
    currentCurrency: string
    amountOfCurrency: string
    amountOfBYN: string
    onChange: (currency: string, value: string, rate:number) => void
    rate: number
}

export function InputPair(props: InputPairType) {
    return (
      <>
          <label>
              {props.currentCurrency}
              <input
                type='text'
                value={props.amountOfCurrency}
                data-currency={props.currentCurrency}
                onChange={(e) => {
                    e.currentTarget.dataset.currency &&
                    props.onChange(e.currentTarget.dataset.currency, e.currentTarget.value, props.rate)
                }}
              />
          </label>
          <br/>
          <label>
              BYN
              <input
                type='text'
                value={props.amountOfBYN}
                data-currency='BYN'
                onChange={(e) => {
                    e.currentTarget.dataset.currency &&
                    props.onChange(e.currentTarget.dataset.currency, e.currentTarget.value, props.rate)
                }}
              />
          </label>
          <div>Current exchange rate: {props.rate}</div>
      </>
    )
}