import { useState } from 'react'
import { QuestionCard, QuestionHeader, Question, Answer } from './QuestionAnswerstyled.js'
import open from '../../../../assets/open.svg'
import close from '../../../../assets/close.svg'

const QuestionAnswer = ({ idQuestions }) => {
  const [openQuestionId, setOpenQuestionId] = useState(Number)
  const [activeFaq, setActiveFaq] = useState(false)

  const handleQuestionClick = (el) => {
    setOpenQuestionId(el)
    activeFaq ? setActiveFaq(false) : setActiveFaq(true)
  }
  
  return (
    idQuestions.items.map((el) => { return (
      <QuestionCard
          key={el.idQuestion}
          onClick={() => handleQuestionClick(el.idQuestion)}
      >
          <QuestionHeader>
              <Question>{el.question}</Question>
              {openQuestionId === el.idQuestion && activeFaq
              ? <img src={close} alt="close" />
              : <img src={open} alt="open" />}
          </QuestionHeader>
          <Answer $isOpen={openQuestionId === el.idQuestion && activeFaq}>
              {el.answer}
          </Answer>
      </QuestionCard>
    )})
  )
}

export default QuestionAnswer