import { gql } from "@apollo/client"
import  queryClient from "../../apolloClient"
import Link from "next/link";

export default function Home({advices}: any) {

  // console.log('Calendar :::',advices)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       Test
       Test
       Test
       Test

       {advices && advices.map((advice: any) => (
         <div key={advice.id}>
            {advice.id}
            </div>
        ))}
      </div> 
      <Link href="/">Home</Link>

    </main>
  )
}


// export async function getStaticProps() {



//   const  { data } = await queryClient.query({
//     query: gql
//     `query {
//         advices {
//         id
//       }
//     }`
//   })

// const {advices} = data
// return {
//   props: {
//     advices
//   }
// }

// }