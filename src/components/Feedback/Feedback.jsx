

const Feedback = ({ cafe,totalFeedback,positiveFeedback}) => {
  return (
    <div>
          <p>Good: {cafe.good}</p>
          <p>Neutral: {cafe.neutral} </p>
      <p>Bad: {cafe.bad} </p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: { positiveFeedback}%</p>
    </div>
  )
}

export default Feedback