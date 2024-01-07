import logo from '../../img/logo.svg'
import styled from 'styled-components'

const LogoImg = styled.img`
  margin-right: 10px;
`

const LogoContainer = styled.div` 
  display: flex;
  font-size: 30px;
`

function Logo() {
  return (
    <LogoContainer>
      <LogoImg
        src={logo}
        alt='logo do site'
      />
      <p> <strong>Alura</strong>Books</p>
    </LogoContainer>
  )
}

export default Logo


