import React from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask'
import { Link, useSearchParams } from 'react-router-dom'
import axios from '../utils/axios'

const Quiz = styled.div`
display: block;
justify-content: center;
align-items: center;
background-color: #e9ecef;
width: 62%;
align-self: center;
margin: 3rem auto;
border-radius: 5px;
height: fit-content;
min-height: 100px;
padding-top: 1rem;
padding-bottom: 1rem;
padding-left: 0.8rem;
padding-right: 0.8rem;

hr{
    width: 95%;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0);
}

@media(max-width: 400px){
  width: 85%;
  position: relative;
}

@media(max-width: 576px){
  width: 85%;
  position: relative;
}

@media (max-width: 577px) {
  width: 85%;
}
`

const QuestionSection = styled.div`
border-bottom: 1px solid rgba(0, 0, 0, 0.125);
text-align: left;
width: 95%;
margin: 0 auto;
padding-bottom: 1rem;
`

const Count = styled.div`
    font-size: 17px;
    font-weight: 400;

span{
    font-weight: 500;
}
`

const QusetionText = styled.div`
    font-size: 19px;
    font-weight: 500;
    margin-top: 1rem;
`

const AnswerSection = styled.div`
display: grid;
grid-template-columns: 95%;
grid-template-rows: fit-content;
width: 95%;
margin: 1rem auto;
border-bottom: 1px solid rgba(0, 0, 0, 0.125);
padding-bottom: 1rem;


input{
    cursor: pointer;
    text-align: left;
    width: 105%;
    display: flex;
    border: 1px solid rgba(0,0,0,.125);
    transition: 0.3s ease;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Montserrat';
    padding-left: 1.3rem;
    background-color: white;
    height: 60px;
    margin: 0 0rem;
}

.none:hover{
    background-color: rgba(191, 163, 116, 0.8);
    color: white;
}

input.false{
    background-color:  #ba9156;
    color: white;
}

.phone{
    width: 103%;
    height: 40px;
    transition: 0s ease;
    font-family: 'Montserrat';
}

.phone:focus{
    outline: 2px solid #bfa374;
}


@media(max-width: 576px){
    .phone{
        width: 96%;
    }

    input[type='button']{
        font-size: 15px;
        font-weight: 400;
        display: block;
        white-space: normal;
    }
}
`

const Btn = styled.button`
width: 95%;
padding-top: 1rem;
padding-bottom: 1rem;
border: none;
margin-left: 0px;
background-color: #004f44;
color: white;
font-size: 18px;
font-weight: 500;
border-radius: 0.5rem;

&:disabled{
    filter: contrast(0.5);
}
`

const Head = styled.h4`
font-family: "Playfair Display",Sans-serif;
font-size: 1.5rem;
font-weight: 500;
margin-top: 0rem;
`

const Description = styled.div`
font-size: 1.1rem;

span{
    font-weight: 600;
}

.link{
    color: rgba(191, 163, 116, 0.9);
    text-decoration: none;
    font-weight: 500;
}
.link:hover{
    color: #bfa374;
    text-decoration: underline;
}

@media(max-width: 400px){
    font-size: 0.9rem;
}
`

  

const QuizMain = () => {

    const questions = [
        {
            questionText: 'Укажите причину возникновения долгов',
            answerOptions: [
                {answerText: 'Задолженность по кредитным обязательствам'},
                {answerText: 'Выплаты по решению суда или задолженность по алиментам'},
                {answerText: 'Иное'},
            ]
        },
        {
            questionText: 'Укажите сумму общей задолженности',
            answerOptions: [
                {answerText: 'Меньше 150 000 рублей'},
                {answerText: '150 000 - 300 000'},
                {answerText: 'Больше 300 000 рублей'},
            ]
        },
        {
            questionText: 'Имеются ли сделки с движимым и недвижимым имуществом за последние 3 года?',
            answerOptions: [
                {answerText: 'Да, имеются'},
                {answerText: 'Нет, сделок не было'},
            ]
        },
    ]

    const [currentQuestion, setCurrentQuestion] = React.useState(0)

    const [score, setScore] = React.useState([])

    const [showInput, setShowInput] = React.useState(false)

    const [result, setResult] = React.useState(false) 

    const [buttonState, setButtonState] = React.useState(false)

    const [active, setActive] = React.useState(false)

    const [disabled, setDisabled] = React.useState(true)

    const [phone, setPhone] = React.useState()

    const [loading, setLoading] = React.useState(false)
 
    const [searchParams, setSearchParams] = useSearchParams()

    const [reason, setReason] = React.useState('')

    const [sumary, setSumary] = React.useState('')

    const [deals, setDeals] = React.useState('')

    const source = searchParams.get('utm_source')
    const medium = searchParams.get('utm_medium')
    const campaign = searchParams.get('utm_campaign')
    const content = searchParams.get('utm_content')
    const term = searchParams.get('utm_term')

    // const handleDeleteAnswer = (value) => {
    //     if(){
    //         setScore(...score, value)
    //         console.log(score)
    //     }else{
    //         console.log('Не работает')
    //     }
    // }
    console.log(reason, sumary, deals)

    const handleAnswerClick = (value) => {
       const nextQuestion = currentQuestion + 1 
       if (nextQuestion < questions.length){
        setCurrentQuestion(nextQuestion)
       } else {
        setShowInput(true)
       }
    }

    const handleSubmit = async () => {
        setResult(!result)
        try{
            setLoading(true)

            const fields = {
                phone,
                reason,
                sumary,
                deals,
                source,
                medium,
                campaign,
                content,
                term
            }

            const { data } = await axios.post('/leadAdd', fields)

            console.log(phone)
        }catch(err){
            console.warn(err)
        }
    }

    const numberSubmit = (value, error) => {
        if(value.length === 11){
            setPhone(`+7(${value.substr(1,3)}) ${value.substr(4,3)}-${value.substr(7,2)}-${value.substr(9,2)}`)
        }if(value.length === 12 ){
            setPhone(`+7(${value.substr(2,3)}) ${value.substr(5,3)}-${value.substr(8,2)}-${value.substr(10,2)}`)
        }if(value.length === 10){
            setPhone(`+7(${value.substr(0,3)}) ${value.substr(3,3)}-${value.substr(6,2)}-${value.substr(8,2)}`)
        }else{
            return error
        }
    }

  return (
    <Quiz>
        {result ? 
        <QuestionSection style={{border: 'none'}}>
            <Head>
              Документ начал скачиваться...  
            </Head>
            <Description>
                Если этого не произошло, нажмите, пожалуйста,&nbsp;
                <Link to='/docs/doc.pdf'
                 target='_blank'
                 className='link' 
                 download>
                    сюда
                </Link>.
                <br />
                <br />
                Внимание: сервис работает в тестовом режиме. В случае отсутствия смс, с вами могут связаться наши специалисты для консультации и уточнения информации. Звонок поступит с нашего номера <span>+7(495)133-50-27</span>.
                <br/> Спасибо за ваше обращение!
                <br />
                <br />
                Вы можете связаться с нами любым удобным способом!
                <br />
                По телефону <Link to=''
                 target='_blank'
                 className='link'>8-800-777-68-05</Link>
                    <br />
                В личных сообщениях⠀<Link to=''
                 target='_blank'
                 className='link'>ВКонтакте</Link>
                    <br />
                И на сайте <Link to=''
                 target='_blank'
                 className='link'>caa-group.ru</Link>
                 <br/>
                 <br/>
            <Head>
            Видеокурс о самостоятельном банкротстве в мобильном приложении на android и ios:<br/>
            <Link to=''
                 target='_blank'
                 className='link'>
                    скачать бесплатно
                 </Link>
            </Head>
            </Description>
        </QuestionSection>
         :
        <>
        {showInput ? 
        <>
            <QuestionSection>
                <Count>
                    Итог
                   </Count>
                <QusetionText style={{fontSize: '1.20rem', fontWeight: 400,}}>
                Укажите, пожалуйста, Ваш мобильный номер телефона.<br />
                После обработки данных, на указанный номер в течение 5 минут <span style={{textDecoration: 'underline'}}>поступит sms-сообщение с результатом<br/>
                анализа</span> возможности списания долгов и <span style={{textDecoration: 'underline'}}>описанием расходов</span> на процедуру банкротства.
                </QusetionText>
            </QuestionSection>
            <AnswerSection>
               {/* <InputMask mask="+7\(999)-999-99-99" maskChar={null} value={number} onChange={e => setNumber(e.target.value)} className='phone'>
               </InputMask> className='phone'*/}
               <input type='text' 
               className='phone' 
               pattern='.{10, 12}' 
               value={phone}                    
               maxLength='12' 
               placeholder='Укажите ваш телефон' 
               onBlur={e => (numberSubmit(e.target.value))}
               onChange={() => ''}
               onClick={() => setPhone()} />
            </AnswerSection>
            <Link to='/docs/doc.pdf' target='_blank'  onClick={handleSubmit} download>
                <Btn>
                    Отправить
                </Btn>
            </Link>
         </> :
        
        <>
        <QuestionSection>
            <Count>
                Вопрос <span>{currentQuestion + 1}</span> из  <span>3</span>
            </Count>
            <QusetionText>
            {questions[currentQuestion].questionText}
            </QusetionText>
        </QuestionSection>
        <AnswerSection>
            {questions[currentQuestion].answerOptions.map((item, i) => (
                <input 
                key={i} 
                type='button' 
                className={`'true' ${active === i ? 'false' : 'none'}`} 
                value={item.answerText} 
                onClick={(e) =>(setActive(i), 
                    setDisabled(false),
                    (currentQuestion === 0 ? setReason(e.target.value) : currentQuestion === 1 ? setSumary(e.target.value) : setDeals(e.target.value))
                )}/>
            ))}
        </AnswerSection>
        <Btn onClick={() => (handleAnswerClick(), 
            setActive(''), 
            setDisabled(!disabled)
        )} disabled={disabled}>
            Далее
        </Btn>
        </>
        }
        </>
    }
        
    </Quiz>
  )
}

export default QuizMain