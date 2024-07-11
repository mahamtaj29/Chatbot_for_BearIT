"use client";
//import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "../utils/api";
import TypewriterMsg from "components/TypewriterMsg";

interface AboutType {
    aboutusid: number;
    description: string;
    createdat: Date | null; 
    updatedat: Date | null; 

  }

export const Aboutus = () => {
//This React component uses the useQuery hook from tRPC to fetch data and display it.
	const aboutdes = api.aboutus.getaboutus.useQuery<AboutType[]>();
	const [aboutUs, setAboutUs] = useState(false);

	return (
		<div>
			<div className="todo-card">
					{aboutdes.data?.map((aboutus: AboutType) => (
						<div key={aboutus.aboutusid} className="rounded-md italic text-customBlue px-2 py-3 font-semibold transition">
							{aboutUs ? (
							<>
							<TypewriterMsg 
								text= {aboutus.description}
								pace={() => 30}
							/>
								{/* <p> {aboutus.description}</p> */}
								<button 
                                className="rounded-md px-4 py-3 font-semibold text-purple-600 transition border-2 border-blue-900 hover:bg-white/20 ml-auto block"
                                onClick={() => setAboutUs(false)}>
									Back 
								</button>
							</>
							) : (
								<div className="todo-btns">
									<button 
                                    className="rounded-md bg-white/10 px-10 py-3 font-semibold transition border-2 border-blue-900 hover:bg-white/20"
                                    onClick={() => setAboutUs(true)}>
									BearIT Introduction →
									</button> 
								</div> 
							)}
						</div>
					))}
			</div>
		</div>
	);
};
