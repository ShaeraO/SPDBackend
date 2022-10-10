import React from 'react'
import styled from 'styled-components'

const Section = styled.footer`
background: #015046;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Montserrat';

@media(max-width: 576px){
}

`
const Text = styled.div`
margin-top: 0rem;
width: 100%;
text-align: center;
font-size: 18px;
line-height: 30px;

span{
  font-weight: 600;
}
@media(max-width: 576px){
}
`


const Block = styled.div`
margin-top: 3rem;
height: 50vh;
width: 75%;
@media(max-width: 576px){
  height: 102vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 25% 25% 25% 25%;
  justify-content: center;
  align-items: center;
}
`

const InfoBlock = styled.div`
display: flex;
justify-content: space-between;
border-top: 1px solid white;
margin-top: 2rem;
@media(max-width: 576px){
  display: block;
  margin-top: 22rem;
  justify-content: center;
}
`

const LogoCont = styled.div`
display: block;
justify-content: center;
align-items: center; 
margin-top: 3rem;
width: 290px;
img{
  margin: 0 4.2rem;
  width: 140px;
}
@media(max-width: 576px){
justify-content: center;
}
`

const InfoCont = styled.div`
display: block;
text-align: right;
font-size: 14px;
line-height: 20px;

span:hover{
  text-decoration: underline;
}

div{
  margin-top: 3rem;
  font-weight: 600;
  font-size: 22px;
  color: #bfa272;
  width: 395px;
  justify-content: right;
  border-bottom: 1px solid #014b41;
  padding-bottom: 0.5rem;
}

@media(max-width: 576px){
text-align: center;
line-height: 22px;

div{
justify-content: center;
width: 102%;
}
}
`

const Footer = () => {
  return (
    <Section>
      <Block>
      <Text>
        Мы гарантируем, что ваши данные не будут переданы третьим лицам, согласно федеральному закону от <span>27.07.2006. №152-ФЗ</span> «О персональных данных».
      </Text>
      <InfoBlock>
        <LogoCont>
          <img src='https://svgshare.com/i/n9J.svg' alt='logo' />
          <Text style={{marginTop: '1rem'}}>
          Центр арбитражных решений<br/>
          <div style={{borderTop: '1px solid white', fontWeight:'400', width:'290px'}}>Centrum Arbitral Awards</div>
          </Text>
        </LogoCont>
        <InfoCont>
        <div>Думайте о будущем</div><br/>
        <span>8 (800) 777-62-17</span><br/>
        Время работы: 9.00 – 18.00<br/>
        <span>info@center-solution.ru</span><br/>
        Банкротство физических лиц<br/>
        ООО «Центр арбитражных решений»<br/>
        ОГРН: 1197456041562<br/>
        <span>Политика конфидециальности</span><br/>
        </InfoCont>
      </InfoBlock>
      </Block>
    </Section>
  )
}

export default Footer