'use client';

import Link from "next/link";
import Title from "@/components/global/Title";
import Subtitle from "@/components/global/Subtitle";
import Checkbox from "@/components/input/Checkbox";
import { useState } from "react";
import IconCheckbox from "@/components/input/IconCheckbox";



export default function Home() {

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center p-2">
      <Title title="Accueil" />
      <Subtitle subtitle="Ajoutez ici ce que vous avez ressenti dans la journée." />
      <Link href="/calendar">Calendar</Link>

    </main>
  )
}


export async function getStaticProps() {
//   const  { data, error } = await queryClient.query({
//     query: gql
//     `{
//       symptoms {
//         createdAt
//         id
//         intensity
//         isFromSensors
//         name
//         symptomCategory {
//           color {
//             hex
//             css
//           }
//           id
//           name
//         }
//       }
//     }`
//   })

// return {
//   props: {
//     data, 
//     error
//   }
// }

}