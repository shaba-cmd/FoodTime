import Button from '../../../components/ui/Button/Button'
import QuestionAnswer from './QuestionAnswer/QuestionAnswer'
import { useEffect, useState } from 'react'
import { SQuestions, Head, Title, BtnBox, FaqBox } from './Questions.styled.js'
import { getFaq } from '../../../api.js'

const Questions = () => {
    const [faq, setFaq] = useState([]);
    const [idQuestions, setIdQuestions] = useState(null);
    const [openQuestionId, setOpenQuestionId] = useState(null);

    useEffect(() => {
        getFaq()
        .then(data => {
            setFaq(data);
            if (data.length > 0) {
                setIdQuestions(data[0]);
            }
        })
        .catch(console.error);
    }, []);
    
    const handleClick = (id) => {
        setOpenQuestionId(prev => prev === id ? null : id);
    }

    if (!faq.length) return <div>Loading...</div>;

    return (
        <SQuestions className='container'>
            <Head>   
                <Title>Frequently asked questions</Title>
                <BtnBox>
                    {faq.map((el) => {
                        return (
                            <Button 
                                key={el.id}
                                styles={el.id !== openQuestionId && 'faq-btn'}
                                text={el.title}
                                onClick={() => handleClick(el)}
                            />
                        )
                    })}
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