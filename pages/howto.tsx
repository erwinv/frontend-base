import { NextPage } from 'next'
import Head from 'next/head'
import {
  Container,
  Typography,
} from '@mui/material'

interface GuidesProps {
}

const Guides: NextPage<GuidesProps> = ({ }) => {
  return (
    <>
      <Head>
        <title>Guides</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Typography variant='h3'>Guides</Typography>
      </Container>
    </>
  )
}

export default Guides
