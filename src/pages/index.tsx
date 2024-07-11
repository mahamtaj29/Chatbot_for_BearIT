import Head from "next/head";
import { ChatButton } from "components/ChatButton";
import TypewriterMsg from "components/TypewriterMsg";

export default function Home() {

  return (
    <>
      <Head>
        <title>BearBot</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex items-center flex-wrap">
        <img src="/BearBot.jpg" alt="logo" className=" w-32 h-auto"/>
        <h3 className="font-semibold text-3xl tracking-tight text-purple-600">
          <span className="font-semibold text-3xl tracking-tight text-pink-500">Bear</span>IT </h3>
        {/* <img className= "relative border border-gray-100 shadow-sm" src="../images/original.png"/> */} 
        </nav>

      <main className=" flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="font-semibold tracking-tight text-black sm:text-[3rem]">
      {/* <h2 className="font-semibold tracking-tight text-black sm:text-[3rem]">Hi, I am your virtual assistant, <span className= "text-purple-600"> BearBot </span></h2> */}
      <TypewriterMsg 
								text= {"Hi, I am your virtual assistant,"}
								pace={() => 60}
      />
      <span className= "text-purple-600">  
      <TypewriterMsg 
								text= {"BearBot"}
								pace={() => 200}
      />
      </span>
      </div>
        <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray-200 p-4 text-black border-2 border-blue-800"> {/*  */}
          <ChatButton />
        </div>
      </main>
    </>
  );
}
