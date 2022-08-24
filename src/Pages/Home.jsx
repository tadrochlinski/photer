import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  padding: 10px;
  width: 100%;
  height: 80vh;
  display: grid;
  place-items: center;
  color: #575757;
  letter-spacing: 1px;
`

const Home = () =>{
  return (
    <Wrapper>Search for photos using keywords</Wrapper>
  )
}

export default Home