import { NextPage } from 'next'
import Head from 'next/head'
import {
  Container,
  Typography,
} from '@mui/material'

interface DocsProps {
}

const Docs: NextPage<DocsProps> = ({ }) => {
  return (
    <>
      <Head>
        <title>Docs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Typography variant='h3'>Docs</Typography>
      </Container>
    </>
  )
}

export default Docs
