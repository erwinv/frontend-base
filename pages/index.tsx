import Head from 'next/head'
import { GetStaticProps } from 'next'
import {
  Container,
  Typography,
} from '@mui/material'
import { MyPage } from './_app'
import { HomeLayout } from '../components/layout'

interface HomeProps {
  title: string
  content: string[]
}

const Home: MyPage<HomeProps> = ({ title, content }) => {
  return (
    <>
      <Head>
        <title>Next MUI TS app</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container maxWidth='lg'>
        <Typography variant='h3'>{title}</Typography>
        {content.map((paragraph, i) => (
          <Typography
            key={`${i}`}
            paragraph
          >
            {paragraph}
          </Typography>
        ))}
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  return {
    props: {
      title: 'Lorem Ipsum Dolor Sit Amet',
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit, leo non laoreet pulvinar, massa leo fermentum nunc, vitae auctor justo dolor at orci. Fusce fermentum id sem maximus suscipit. Praesent tristique lorem ut mollis fermentum. Vivamus iaculis dictum nulla vitae vulputate. Pellentesque tristique non felis sit amet tincidunt. Sed mauris urna, scelerisque a pretium sit amet, lacinia vitae nisi. Praesent vestibulum tempor euismod. Sed quis nisi in massa fringilla porttitor. Vivamus a magna a nisl lacinia faucibus. Pellentesque feugiat scelerisque velit, sit amet molestie nisi blandit eu. Pellentesque in turpis pharetra, tempus sem ac, consequat nulla. Sed condimentum magna vitae mi scelerisque, sit amet auctor dolor aliquet. Morbi et lacinia ex. Quisque nunc enim, ullamcorper vitae turpis id, fermentum efficitur urna.",
        "Etiam tincidunt risus ex, nec lacinia augue porta vel. Praesent ac facilisis ex. Curabitur rhoncus vestibulum odio, semper ultrices ligula scelerisque sed. In eu mattis lectus, ac tristique risus. Nam vitae est in velit convallis ultrices a ac elit. Vivamus arcu nulla, mollis id malesuada ac, aliquet non diam. Mauris a pulvinar magna. Suspendisse vel massa neque. Nam eleifend felis quis massa semper, a gravida tellus pellentesque. Donec tristique, magna sit amet condimentum dictum, tellus leo faucibus felis, fringilla scelerisque ex nibh sit amet sapien. Etiam tellus nulla, viverra quis placerat non, ultricies in mauris. Quisque condimentum massa vitae imperdiet blandit. In consectetur vitae enim eget finibus. In consequat dolor risus, id fermentum velit ullamcorper et. Aenean lobortis, nibh vel dictum cursus, velit massa egestas ipsum, vel ultrices nisi magna id est. Mauris augue ligula, semper non dui non, tincidunt semper enim.",
        "Nam placerat lorem in erat ornare sollicitudin et in diam. Vestibulum eleifend at leo non ultricies. Ut fermentum mi sit amet ligula mattis sollicitudin. Maecenas ultricies eleifend nisl, in placerat ligula. Integer nec tempus justo. Fusce ex leo, rutrum nec iaculis ullamcorper, tristique ac mi. Fusce imperdiet augue quis velit iaculis, id pretium urna sodales. Nulla velit enim, scelerisque in scelerisque nec, condimentum ut purus. Sed consequat dolor at augue hendrerit, eget tincidunt nisi commodo. Maecenas a urna sem. Nullam tincidunt neque consequat dolor semper dapibus.",
        "Phasellus magna nisl, tristique sit amet dapibus quis, maximus sed dolor. Curabitur tristique varius lectus vel efficitur. Nunc hendrerit, sem et gravida condimentum, velit justo lobortis eros, sit amet dapibus nunc mi in elit. Fusce sapien nibh, feugiat non porta ut, porttitor ut massa. Vestibulum a tellus quis nisl fringilla vulputate ut sit amet nisl. Integer ac mollis nibh. Duis hendrerit arcu vitae quam tempor pulvinar. Aenean sagittis mollis ex vel maximus. Nunc id neque quis velit tristique laoreet. Suspendisse malesuada nisl eget ornare posuere. Duis et cursus magna. Duis id dictum lectus. Sed iaculis nisi id turpis maximus, et fringilla urna scelerisque. Donec ac tempor nibh, posuere blandit odio. Vestibulum venenatis sit amet nunc vitae fermentum. Maecenas nec elit fringilla, ornare enim in, facilisis arcu.",
        "Maecenas pulvinar arcu ut pharetra placerat. Cras fermentum a magna eu venenatis. Proin posuere a nisi nec facilisis. Sed aliquet, tellus at placerat faucibus, quam lorem pretium justo, vitae vulputate nunc tortor id mauris. Ut convallis bibendum sapien, id ornare felis rhoncus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac velit ut orci consequat sollicitudin ac et magna. Fusce scelerisque, leo sit amet fringilla aliquet, justo felis iaculis lacus, id hendrerit risus turpis quis sapien. Etiam ac tempor lacus. Praesent ultrices sapien pharetra, viverra justo ac, posuere nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus non mi faucibus, placerat est eget, feugiat diam. Donec lobortis sem a convallis luctus. Duis sagittis accumsan tincidunt. Suspendisse et magna eget diam sollicitudin posuere eget id sem.",
      ]
    },
  }
}

Home.Layout = HomeLayout

export default Home
