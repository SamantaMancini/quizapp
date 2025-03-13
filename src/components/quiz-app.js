'use client'
import { useState, useEffect } from "react";
import Layout from "./ui/layout";
import Header from "./ui/header";
import Button from "./ui/button";

export default function QuizApp() {
    const [question, setQuestion] = useState(null)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [isEnd, setIsEnd] = useState(false)
   

    useEffect(() => {
      const fetchQuestions = async () => {
        try {
          const res = await fetch('/api/questions');
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
          const data = await res.json();
          console.log('Data received:', data);
          if (Array.isArray(data)) {
            setQuestion(data);
        } else {
            console.error('Data is not an array:', data)
        }
        } catch(error) {
          console.error("Failed to fetch questions:", error);
        }
        
      }
      fetchQuestions()
    }, [])
   

    const handleClick = (e, selectedAnswer) => {
        
        if (selectedAnswer == question[questionIndex]?.answer) {
            setScore(score + 1)

        }
        if (questionIndex == question.length - 1) {
            setIsEnd(true)
        } else {
          setQuestionIndex(questionIndex + 1)
        }
    }

    const handleClickTry = () => {
        if (isEnd) {
            setIsEnd(false)
            setQuestionIndex(0)
            setScore(0)
        }
    }

  return ( 
     <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
        {isEnd ? (
        <Layout>
            <Header number={"Try Again!"} position={"center"} />
            <div className="grid gap-4 mt-8">
              <Button text={"Try"} onClick={handleClickTry}/>
            </div>
            <div className="mt-4 text-right">
              <span className="text-muted-foreground">Score: {score}</span>
            </div>
        </Layout>
        ): ( 
        <Layout>
          {question ? (
            <>
           <Header text={question[questionIndex]?.text} number={question[questionIndex]?.number} position={"left"} />
            <div className="grid gap-4 mt-8">
              <Button text={question[questionIndex]?.button1} onClick={(e) => handleClick(e, question[questionIndex].button1)} />
              <Button text={question[questionIndex]?.button2} onClick={(e) => handleClick(e, question[questionIndex].button2)} />
              <Button text={question[questionIndex]?.button3} onClick={(e) => handleClick(e, question[questionIndex].button3)} />
              <Button text={question[questionIndex]?.button4} onClick={(e) => handleClick(e, question[questionIndex].button4)} />
            </div>
         <div className="mt-4 text-right">
          <span className="text-muted-foreground">Score: {score}</span>
        </div>
         </>
          ) : (
            <div>Loading questions...</div>
          )}

        </Layout>
    )}
    </div>
    )
  
}
