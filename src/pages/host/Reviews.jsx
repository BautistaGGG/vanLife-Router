import React from 'react'
import { reviewsData } from "../../../utils"
import ratingImg from "../../assets/rating.svg"
import starImg from "../../assets/star.svg"

function Reviews() {

  const reviewCommentsElement = reviewsData.map(rev => (
    <section className='review--section-2' key={rev.id}>
      <img src={starImg} alt="star-icon" />
      <img src={starImg} alt="star-icon" />
      <img src={starImg} alt="star-icon" />
      <img src={starImg} alt="star-icon" />
      <img src={starImg} alt="star-icon" />
      <p>{rev.name} <span>{rev.date}</span></p>
      <p>{rev.text}</p>
      <hr />
    </section>
  ))

  return (
    <main className='hostReviews--main'>
      <section className='review--section-1'>
        <h1>ReviewsPage</h1>
        <p>Last <span>30 days</span></p>
      </section>
      <img src={ratingImg} alt="review-rating-img" />
        {reviewCommentsElement}
    </main>
  )
}

export default Reviews