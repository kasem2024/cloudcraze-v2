
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import GameClickTop from "./components/GameClickTop";
import Login from "./components/Login";


export default async function Home() {
  
  const session = await auth()
  const user = session?.user
  if(user) redirect("/cloud-craze")
  return (
    <div className="bg-white w-full  flex flex-col justify-between items-center h-screen overflow-hidden">
       <div className="w-full flex justify-center items-center "><GameClickTop/></div>
       <div>
        <Login/>
       </div>
       <div className="w-full flex justify-center items-center bg-black h-[100px] "></div>
    </div>
   
  );
}
