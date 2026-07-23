import { useState } from 'react'
import { QuestionCard, QuestionHeader, Question, Answer } from './QuestionAnswerstyled.js'
import open from '../../../../assets/open.svg'
import close from '../../../../assets/close.svg'

const QuestionAnswer = ({ idQuestions }) => {
  const [openQuestionId, setOpenQuestionId] = useState(null)

  const handleQuestionClick = (id) => {
    setOpenQuestionId(prev => prev === id ? null : id);
  }
  
  return (
    idQuestions.items.map((el) => { return (
      <QuestionCard
          key={el.id}
          onClick={() => handleQuestionClick(el.id)}
      >
          <QuestionHeader>
              <Question>{el.question}</Question>
              {openQuestionId === el.id
              ? <img src={close} alt="close" />
              : <img src={open} alt="open" />}
          </QuestionHeader>
          <Answer $isOpen={openQuestionId === el.id}>
              {el.answer}
          </Answer>
      </QuestionCard>
    )})
  )
}

export default QuestionAnswer