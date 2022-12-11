import React from 'react'
import './Question.styles.css'

const Question = React.forwardRef(({myKey, question}, ref) => {

  const handleImgError = e =>{
    e.target.src =  "https://media-exp1.licdn.com/dms/image/C5603AQFS7mcgkDuH3A/profile-displayphoto-shrink_800_800/0/1664098451346?e=1676505600&v=beta&t=IsF5SxxUwJhhpql192jLHVzTzN6VscgO2NRM_UXPEY8"
  }

    const questionBody = (
      <>
          <div className='question-left'>
            <h3 className='question-header'>{question.title}</h3>
            <div className="question-score">
              <p style={{color:"#E0144C"}}>Score</p>
              <p style={{color: question.score >= 0 ? "" : "#FF6464"}}>{question.score}</p>
            </div>
            <div className="question-answers">
              <p style={{color:"#E0144C"}}>Answers</p>
              <p style={question.is_answered ? {color:"#F9F9F9", background:"#5F8D4E"}: {color:"#5F8D4E", border:"1px solid #5F8D4E"}}>{question.answer_count}</p>
            </div>
            <div className="question-viewed">
              <p style={{color:"#E0144C"}}>Viewed</p>
              <p>{question.view_count}</p>
            </div>
          </div>
          <div className='quesiton-right'>
            <div className='profile-img-container'>
              <img className="profile-img" alt="profile-img" src={question.owner.profile_image} onError={handleImgError}/>
            </div>
            <div className='display_name'>{question.owner.display_name}</div>
          </div>
      </>
    )


    const questionContent = ref ? <div ref={ref} key={myKey} className='question-container'>{questionBody}</div>
                          :  <div key={myKey} className='question-container'>{questionBody}</div>

  return questionContent
})

export default Question