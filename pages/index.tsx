import * as React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import {
  Container,
  Typography,
} from '@mui/material'
import useFetch from '../hooks/useFetch'
import { MyPage } from './_app'
import { HomeLayout } from '../components/layout'

interface HomeProps {
  message: string
}

const Home: MyPage<HomeProps> = ({ message: initialMessage }) => {
  const { data } = useFetch<HomeProps>('/api/hello')

  return (
    <>
      <Head>
        <title>Next MUI TS app</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container maxWidth='lg'>
        <Typography variant='h3'>{data?.message ?? initialMessage}</Typography>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  return {
    props: {
      message: 'Lorem Ipsum Dolor Sit Amet',
    },
  }
}

Home.Layout = HomeLayout

export default Home
