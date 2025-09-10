import Description from "./components/Description/Description"
import Options from "./components/Options/Options"
import Feedback from "./components/Feedback/Feedback"
import {useEffect,useState } from "react"
import Notification from "./components/Notification/Notification"

function App() {
  const [cafe, setCafe] = useState(() => {
    const savedCafe = window.localStorage.getItem("cafes")

    if (savedCafe !== null) {
      return JSON.parse(savedCafe)
    }
    return {
    good: 0,
	  neutral: 0,
	  bad: 0
  }
  })
  
  useEffect(() => {
    window.localStorage.setItem("cafes", JSON.stringify(cafe));
  }, [cafe]);
  
  
  const updateFeedback = feedbackType => {
    switch (feedbackType) {
      case "good":
        setCafe({
          ...cafe,
          good: cafe.good + 1
        })
        break;
      case "neutral":
        setCafe({
          ...cafe,
          neutral: cafe.neutral + 1
        })
        break;
      case "bad":
        setCafe({
          ...cafe,
          bad: cafe.bad + 1
        })
        break;
      case "reset":
        setCafe({
          ...cafe,
          good: 0,
          neutral: 0,
          bad:0
        })
    }
  }
  const totalFeedback = cafe.good + cafe.bad + cafe.neutral
  const positiveFeedback = Math.round((cafe.good / totalFeedback) * 100)


  return (
    <>
      <Description />    
      <Options totalFeedback={totalFeedback} onUpdate={updateFeedback} />
      {
        totalFeedback === 0 ? <Notification/>  : <Feedback positiveFeedback={positiveFeedback} totalFeedback={totalFeedback} cafe={ cafe} />
      }
      
    </>
  )
}

export default App