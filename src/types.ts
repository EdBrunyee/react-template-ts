import React from "react"
import { SetStateAction } from "react"


export type spendDataProps = {
      "id": number
      "merchant": string
      "amount": number
      "description": string
      "date": string
      "category": string
      "status": string
}

export type spendDataArrayProps = spendDataProps[]

export type spendTableProps = {
  spendData: spendDataArrayProps,
  SetSpendData: React.Dispatch<SetStateAction<spendDataArrayProps>>
}
