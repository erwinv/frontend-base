import * as React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import {
  Container,
  Typography,
} from '@mui/material'

interface HomeProps {
  message: string
}

const Home: NextPage<HomeProps> = ({ message: initialMessage }) => {
  const [message, setMessage] = React.useState(initialMessage)

  React.useEffect(() => {
    const abortCtrl = new AbortController()

    fetch('/api/hello', {
      signal: abortCtrl.signal
    })
      .then(res => res.json())
      .then(({ message }) => {
        setMessage(message)
      })

    return () => {
      abortCtrl.abort()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Next MUI TS app</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container maxWidth='lg'>
        <Typography variant='h3'>{message}</Typography>
      </Container>
    </>
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
