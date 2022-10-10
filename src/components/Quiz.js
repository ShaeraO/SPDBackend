import React from 'react'
import styled from 'styled-components'
import QuizMain from './QuizMain'

const Section = styled.header`
padding-top: 4rem;
padding-bottom: 2rem;
height: fit-content;
background-color: #015046;
justify-content: center;
align-items: center;
text-align: center;

`

const Text = styled.div`
margin-left: 50%;
transform: translatex(-50%);
color: #fff;
font-size: 18px;
font-family: "Montserrat",Sans-serif;
margin-top: 1.7rem;
width: 88%;
justify-content: center;
align-items: center;
display: flex;
font-weight: 500;
align-self: center;
`

const Head = styled.h4`
color: #fff;
font-weight: 500;
font-size: 20px;
padding-bottom: 0rem;
margin-top: -1rem;


`
const TextBlock = styled.div`
width: 60%;
margin-left: 50%;
transform: translatex(-50%);


`  

const Quiz = () => {
  return (
    <>
    <Section>
      <TextBlock>
      <Head>Ответьте на 4 вопроса и получите:</Head>
      <Text>Расчет затрат в банкротстве при долге от 250 000 рублей. <br />Ответ поступит по SMS в течение 5 минут.<br />
            Полный список необходимых документов с указанием мест получения.</Text><br />

      <Text>Список документов сформируется автоматически после ваших <br />ответов и будет сразу доступен для загрузки.</Text>
      <br />
      <Text>Сервис постоянно обновляется с учетом изменений в законодательстве РФ.<br />
            Не нужно никуда звонить, узнайте все здесь и сейчас!</Text>
      </TextBlock>
      <QuizMain />
    </Section>

    </>
  )
}

export default Quiz