import React from 'react'
import { transactionsData } from '../../../utils';
import reviewChart from "../../assets/reviewChart.svg"

/* TERMINAR EL DISEÑO SEGUN SE LO VE EN FIGMA */

function Income() {

  const transactionsElements = transactionsData.map(transaction => (
    <ul key={transaction.id}>
      <li>
        <h2>${transaction.amount}</h2>
        <p>{transaction.date}</p>
      </li>
    </ul>
  ))

  return (
    <main className='hostIncome--main'>
      <h1>Income</h1>
      <p>Last <span>30 days</span></p>
      <h2>$2,260</h2>
      <img src={reviewChart} alt="rating-chart" />
      <section className='container'>
        <article>
          <h2>Your transactions (3)</h2>
          <p>Last <span>30 days</span></p>
        </article>
        {transactionsElements}
      </section>
    </main>
  )
}

export default Income