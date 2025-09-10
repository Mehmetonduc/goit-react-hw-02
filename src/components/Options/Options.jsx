

const Options = ({onUpdate,totalFeedback}) => {
  return (
    <div>
          <button onClick={()=>onUpdate("good")}>Good</button>
          <button onClick={()=>onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {
        totalFeedback !== 0 && <button onClick={()=>onUpdate("reset")}>Reset</button>
      }
    </div>
  )
}

export default Options