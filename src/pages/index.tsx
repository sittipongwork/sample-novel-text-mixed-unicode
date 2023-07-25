import { InferGetServerSidePropsType } from 'next'
import { responseAPI } from '../lib/sample-text'
import type { NextPageWithLayout } from './_app'

export default function SsrProfile({
  data,
} : InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      {
        data.data.map((v, i) => {
          return <p key={"DisplayDataText_"+i.toString()} dangerouslySetInnerHTML={{__html: v}}></p>
        })
      }
    </main>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/convert-text`)
  const data: responseAPI = await res.json()
  return { props: { data } }
}