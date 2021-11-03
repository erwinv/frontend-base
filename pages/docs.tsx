import Head from 'next/head'
import {
  Container,
  Typography,
} from '@mui/material'
import { MyPage } from './_app'
import { DocsLayout } from '../components/layout'

interface DocsProps {
}

const Docs: MyPage<DocsProps> = ({ }) => {
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

Docs.Layout = DocsLayout

export default Docs
