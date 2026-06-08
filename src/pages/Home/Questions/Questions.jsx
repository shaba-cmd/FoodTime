import Button from '../../../components/ui/Button/Button'
import QuestionAnswer from './QuestionAnswer/QuestionAnswer'
import { useState } from 'react'
import { questions } from '../../../../data.js'
import { SQuestions, Head, Title, BtnBox, FaqBox } from './Questions.styled.js'

const Questions = () => {
    const [activeId, setActiveId] = useState(questions[0].id)
    const [idQuestions, setIdQuestions] = useState(questions[0])

    const handleClick = (el) => {
        setActiveId(el.id)
        setIdQuestions(el)
    }

    return (
        <SQuestions className='container'>
            <Head>   
                <Title>Frequently asked questions</Title>
                <BtnBox>
                    {questions.map((el) => { return (
                        <Button 
                            key={el.id}
                            styles={el.id !== activeId && 'faq-btn'}
                            text={el.title}
                            onClick={() => handleClick(el)}
                        />
                    )})}
                </BtnBox>
            </Head>
            <FaqBox>
                <QuestionAnswer
                    idQuestions={idQuestions}
                />
            </FaqBox>
        </SQuestions>
    )
}

export default Questions