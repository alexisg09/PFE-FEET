'use client';

import Hello from "@/components/home/Hello";
import LinearCalendar from "@/components/home/LinearCalendar";



 const Home = () =>  {


  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center p-2">
      <Hello name="Alexis"/>
      <LinearCalendar />
    </main>
  )
}

export default Home;
