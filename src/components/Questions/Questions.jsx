import React from 'react'
import { useEffect, useState, useRef, useCallback } from 'react';
import { useGetQuestionsQuery } from '../../services/stackExchange';
import Question from '../Question/Question';
import loading from '../../img/loading.svg'
import arrow_top from '../../img/up-arrow.png' 
import './Questions.styles.css'
import { useSelector } from 'react-redux';

const Questions = () => {
  const [accQuestions, setAccQuestions] = useState([])
  const { tagged } = useSelector((state)=> state.currentTagged)
  const [pageNum, setPageNum] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)
  const {data : questions, isFetching : isQuestionsFetching, error} = useGetQuestionsQuery({page: pageNum, tagged});


  const preTagged = useRef("")
  

  console.log(tagged)

  // if no next page
  if(!isQuestionsFetching){
    if(!Boolean(questions)){
      setHasNextPage(false)
    } 
  }

  useEffect(()=>{
    if(isQuestionsFetching) return 

    if(preTagged.current === tagged){
      setAccQuestions(preQuestions => [...preQuestions, ...questions.items])
    }else{
      setAccQuestions([...questions.items])
      preTagged.current = tagged
    }
    
  }, [questions, isQuestionsFetching, tagged])




  const intObserver = useRef()
  const lastPostRef = useCallback(page => {
    if(isQuestionsFetching) return 

    if(intObserver.current) intObserver.current.disconnect()

    intObserver.current = new IntersectionObserver(pages => {

      if(pages[0].isIntersecting && hasNextPage){
        console.log('We are near the last post!')
        setPageNum(prev => prev + 1)
      }

    })

    if(page) intObserver.current.observe(page)
  }, [isQuestionsFetching, hasNextPage])


  if(error){
    return <div className='error'>Error: {error.message}</div>
  }

  const content = accQuestions == null ? [] : accQuestions.map((question, index) => {
    
    if(accQuestions.length === index + 1){
      return <Question ref={lastPostRef} myKey={`${question.question_id}_${index}`} question={question}/>
    }

    return <Question key={`${question.question_id}_${index}`} question={question}/>
  })


  return (
    <div className='questions'>
      {content}
      {isQuestionsFetching ? <div className='img-container'><img src={loading} alt="loading"/></div> : ""}
      <p className="arror_top"><a href="#top"><img alt="arror top" src={arrow_top}/></a></p>
    </div>
  )
}

export default Questions