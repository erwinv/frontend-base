import { NextPage } from 'next'
import Head from 'next/head'
import {
  Container,
  Typography,
} from '@mui/material'
import { MyPage } from './_app'
import { DocsLayout } from '../components/layout'

interface GuidesProps {
}

const Guides: MyPage<GuidesProps> = ({ }) => {
  return (
    <>
      <Head>
        <title>Guides</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Typography
          variant='h3'
          mt={2}
        >
          Guides
        </Typography>
      </Container>
    </>
  )
}

Guides.Layout = DocsLayout

export default Guides
