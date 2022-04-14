import type { NextPage } from 'next'
import Button from '@mui/material/Button'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`

const Home: NextPage = () => {
  return (
    <Container>
      <Button variant="contained">ボタン</Button>
    </Container>
  )
}

export default Home
