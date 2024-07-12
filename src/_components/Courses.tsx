//"use client";
import React, { useState } from "react";
import { api } from "../utils/api";
import TypewriterMsg from "components/TypewriterMsg";
// Define the TypeScript interface for the course data
interface CourseType {
    courseserviceid: number;
    name: string;
    description: string;
    requirements: string;
    category: string;
    startdate: Date | null; 
    enddate: Date | null; 
    createdat: Date | null; 
    updatedat: Date | null; 
  }
export const Courses = () => {
    // Fetch course data using the useQuery hook from tRPC
	const courses = api.courses.getcourses.useQuery<CourseType[]>();
	const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
    const [showCourses, setShowCourses] = useState(false);
	return (
		<div className="rounded-md italic text-customBlue px-2 py-3 font-semibold transition">
            {!showCourses ? (
            <button
                onClick={() => setShowCourses(true)}
                className="rounded-md bg-white/10 px-10 py-3 font-semibold transition border-2 border-blue-900 hover:bg-white/20"
            >
                BearIT Courses →
            </button>
            ) : (
			<div className="todo-card">
                <h3 className="text-l">
                    {/* Display introductory message with typewriter effect */}
                    <TypewriterMsg
                    text="Here are the list of four popular Programs. Please click any button to see more details"
                    pace={() => 40}
                    />
                </h3>
				{courses.data?.map((course: CourseType) => (
					<div key={course.courseserviceid} className="rounded-md italic text-customBlue px-2 py-3 font-semibold transition">
						
                           {selectedCourseId === course.courseserviceid ? (
                            <>
                            <h3> <span className= "text-purple-600">Program Introduction: </span> </h3>
                            <TypewriterMsg 
								text= {course.description}
								pace={() => 30}
                            /><br/>
                            <h3> <span className= "text-purple-600"> Pre-requisites: </span></h3>
                            <TypewriterMsg 
								text= {course.requirements}
								pace={() => 30}
                            /><br/>
                            <h3> <span className= "text-purple-600">Training Duration: </span></h3>
                            <TypewriterMsg 
								text= {"8-months"}
								pace={() => 30}
                            />
                                <button onClick={() => setSelectedCourseId(null)}
                                    className="rounded-md mt-3 px-4 py-3 font-semibold text-purple-600 transition border-2 border-blue-900 hover:bg-white/20"
                                    >
                                    Back
                                </button>
                            </>
                        ) : (
                            <div className="todo-btns">
                                 {/* Button to select a course and view details */}
                                <button onClick={() => setSelectedCourseId(course.courseserviceid)}
                                    className="w-60 rounded-md mt-3 bg-white/10 px-10 py-3 font-semibold transition border-2 border-blue-900 hover:bg-white/20 ml-auto block"
                                    >
                                <span className= "text-pink-500">{course.name} → </span> 
                                </button> 
                            </div> 
                        )}
                    </div>
				))}
                {/* Button to go back to the initial view */}
                <button
                    onClick={() => setShowCourses(false)}
                    className="rounded-md mt-3 bg-white/10 px-10 py-3 font-semibold text-pink-500 transition border-2 border-blue-900 hover:bg-white/20 ml-auto block"
                >
                Back
                </button>
			</div>
            )}
		</div>
	);
};
