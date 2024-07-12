//"use client";
import React, { useState } from "react";
import { api } from "../utils/api";
import TypewriterMsg from "components/TypewriterMsg";

interface FaqType {
    faqid: number;
    category: string;
    question: string;
    answer: string; 
    createdat: Date | null; 
    updatedat: Date | null; 
  }
export const FAQ = () => {
	const faq = api.faqs.getfaqs.useQuery<FaqType[]>();
	const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
	const [showFaqs, setShowFaqs] = useState(false);
// Group FAQs by category 
const groupedFAQs = faq.data?.reduce((acc: Record<string, FaqType[]>, curr: FaqType) => {
	if (!acc[curr.category]) {
		acc[curr.category] = [];
	}
	acc[curr.category]?.push(curr);
	return acc;
}, {});

	return (
		<div className="rounded-md italic text-customBlue px-2 py-3 font-semibold transition">
			{!showFaqs ? (
            <button
                onClick={() => setShowFaqs(true)}
                className="rounded-md bg-white/10 px-10 py-3 font-semibold border-2 border-blue-900 transition hover:bg-white/20"
            >
                BearIT FAQs →
            </button>
            ) : (
			<div className="todo-card">
				<h3 className="text-l">
                    <TypewriterMsg
                    text="Here are the list of categories for FAQs. Please click any topic to see FAQs!"
                    pace={() => 40}
                    />
                </h3>
			{groupedFAQs && Object.keys(groupedFAQs).map((category: string, index: number) => (
					<div key={index}>
					{selectedCategoryId === index ? (
						<>
						{groupedFAQs[category]?.map((faq: FaqType) => (
							<div key={faq.faqid}>
								<h3> <span className= "text-purple-600"> Question: </span></h3>
								<TypewriterMsg 
								text= {faq.question}
								pace={() => 30}
								/><br/>
								<p> <span className= "text-purple-600">  Answer: </span></p>
								<TypewriterMsg 
								text= {faq.answer}
								pace={() => 30}
								/><br/>
							</div>
							))}
							<button onClick={() => setSelectedCategoryId(null)}
                                className="rounded-md mt-3 px-4 py-3 font-semibold text-purple-600 transition border-2 border-blue-900 hover:bg-white/20"
                                >
								Back
							</button>
						</>
					) : (
						<div>
							<button onClick={() => setSelectedCategoryId(index)}
                                className="w-60 rounded-md mt-3 bg-white/10 px-10 py-3 font-semibold transition border-2 border-blue-900 hover:bg-white/20 ml-auto block"
                                >
								<span className= "text-pink-500">{category} →</span> 
								
							</button> 
						</div> 
					)}
					</div>
					))}
					<button
                    onClick={() => setShowFaqs(false)}
                    className="rounded-md mt-3 px-2 py-3 font-semibold text-pink-500 border-2 border-blue-900 hover:bg-white/20 ml-auto block"
                >
                Back
                </button>
			</div>
			)}
		</div>
	);
};
