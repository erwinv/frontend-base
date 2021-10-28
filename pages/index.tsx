import * as React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { styled } from '@mui/material/styles'
import {
  Box,
  Container,
  Typography,
} from '@mui/material'

const PREFIX = 'Home'
const classes = {
  content: `${PREFIX}-content`
}
const Main = styled('main')(({ theme }) => ({
  [`& .${classes.content}`]: {
    paddingTop: theme.spacing(5),
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))

interface HomeProps {
  message: string
}

const Home: NextPage<HomeProps> = ({ message: initialMessage }) => {
  const [message, setMessage] = React.useState(initialMessage)

  React.useEffect(() => {
    const abortCtrl = new AbortController()

    fetch('/api/hello', { signal: abortCtrl.signal })
      .then(res => res.json())
      .then(({ message }) => {
        setMessage(message)
      })

    return () => {
      abortCtrl.abort()
    }
  }, [])

  return (
    <Container>
      <Head>
        <title>Next MUI TS app</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box sx={{ my: 2 }}>
        <Typography variant='h3'>{message}</Typography>
      </Box>
    </Container>
  )
}

export default Home

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  return {
    props: {
      message: 'Lorem Ipsum Dolor Sit Amet',
    },
  }
}
