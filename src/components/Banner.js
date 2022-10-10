import React from 'react'
import styled from 'styled-components'
import QuizMain from './QuizMain'

const Section = styled.section`
height: 115vh;
background-color: #01483f;
justify-content: center;
align-items: center;
text-align: center;
display: flex;
width: 100%;

@media(max-width: 400px){
  height: fit-content;
  position: relative;
}

@media(max-width: 576px){
  height: fit-content;
  position: relative;
}

@media (min-width: 577px) {
  height: fit-content;
}
`
const Logo = styled.div`
width: fit-content;
width: 100%;
`
const Text = styled.div`
margin-left: 0;
color: #f9f9f9;
font-size: 1.5rem;
font-family: "Playfair Display",Sans-serif;
margin-top: 2rem;
width: 100%;
line-height: 3rem;;
@media(max-width: 576px){
  position: relative;
  line-height: 1.5rem;
}

`

const SubText = styled.div`
font-size: 1rem;
color: #C0C0C0;
font-family: 'Montserrat';
line-height: 16px;
margin: 0 auto;
text-align: left;
width: 62%;
span{
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.83rem;
}
@media(max-width: 576px){
  margin: 1rem auto;
  text-align: left;
  line-height: 1.4rem;
  width: 90%;

  span{
    line-height: 1.2rem;
  }
}
@media (max-width: 1024px) {
  width: 90%;
}
`

const Banner = () => {
  return (
    <Section>
      <Logo>
      <Text>
      Ответьте на 3 вопроса и получите:<br />
      <SubText>
        Расчет затрат в банкротстве при долге от 250 000 рублей. Ответ поступит по SMS в течение 5 минут.
        Полный список <br/>необходимых документов с указанием мест получения.<br />
        <span>Список документов сформируется автоматически после ваших ответов и будет сразу доступен для загрузки.</span><br />
        <span>Сервис постоянно обновляется с учетом изменений в законодательстве РФ. Не нужно никуда звонить, узнайте все здесь и сейчас!</span>
      </SubText>
      </Text>
      <QuizMain />
      </Logo>
    </Section>
  )
}

export default Banner