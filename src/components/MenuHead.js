import React from 'react'
import styled from 'styled-components'

const Section = styled.header`
height: 75px;
background-color: #015046;

`

const HeaderContent = styled.div`
height: 75px;
width: 75%;
margin: 0 auto;
display: flex;

@media(max-width: 576px){
   width: 100%;
}
`
const Logo = styled.div`
img{
  align-self: center;
  height: 50px;
  margin-top: 12px;
}

@media(max-width: 576px){
   margin-left: 1rem;
}
`

const Text = styled.div`
margin-left: 1.5rem;
color: #fff;
font-size: 1rem;
font-family: "Playfair Display",Sans-serif;
margin-top: 1.7rem;
width: 90%;
justify-content: space-between;
display: flex;

@media(max-width: 576px){
   font-size : 0.9rem;
   margin-top: 1.8rem;

  .number{
    display: none;
  }
}
`

const MenuHead = () => {
  return (
    <Section>
      <HeaderContent>
        <Logo>
          <img src='https://svgshare.com/i/n9J.svg' alt='logo' />
        </Logo>
        <Text>
          <div>Центр арбитражных решений</div>
          <div style={{fontFamily: 'Montserrat', fontWeight: '600', fontSize: '1rem'}} className='number'>8 (800) 777-62-17</div>
        </Text>
      </HeaderContent>
    </Section>
  )
}

export default MenuHead