import React, { useState } from "react";
import { api } from "../utils/api";
import TypewriterMsg from "components/TypewriterMsg";

export const AddRequest = () => {
    // Uses tRPC's useContext to get the context for making API calls
	const utils = api.useUtils();
	// using useState, we are updating the table values together as a form, 
	const [formData, setFormData] = useState(
        {
		requestid: 0,
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        message: "",
        status: "" || null,
        createdat: new Date(),
        updatedat: new Date(),
	    }
);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showForm, setShowForm] = useState(false);

	const addRequest = api.contactr.addRequest.useMutation({
		onSuccess: async () =>  {
     //A callback function that invalidates the query for input
    //after successfully adding a new row, ensuring the database is refreshed.
			await utils.contactr.getContact.invalidate();
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 5000);
		},
	});
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //This function handles form submission
    //e.prevent Prevents the default form submission behavior
		e.preventDefault();
		if (formData.firstname === "" || formData.lastname === "")
			return alert("No Empty fields");
		addRequest.mutate({
			firstname: formData.firstname,
			lastname: formData.lastname,
            email: formData.email,
            phonenumber: formData.phonenumber,
            message: formData.message,
		});
		setFormData({
			requestid: 0,
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            message: "",
            status: "" || null,
            createdat: new Date(),
            updatedat: new Date(),
		});
	};

	return (
        <div className="rounded-md italic text-customBlue px-2 py-3 font-semibold transition">
        {!showForm ? (
        <button
            onClick={() => setShowForm(true)}
            className="rounded-md bg-white/10 px-10 py-3 font-semibold transition border-2 border-blue-900 hover:bg-white/20"
        >
            Contact BearIT →
        </button>
        ) : (
            <div >
            <h3 className="text-l">
                {/* Display introductory message with typewriter effect */}
                <TypewriterMsg
                text="Please share your query and contact information with us!"
                pace={() => 40}
                />
            </h3>
        
		<form className="inputs" onSubmit={handleSubmit}>
			<input
				type="text"
				value={formData.firstname}
				onChange={(e) =>
					setFormData({ ...formData, firstname: e.target.value })
				}
				className="border-2 border-blue-900"
                name="text1"
				placeholder="Add firstname ..."
                style={{
                    color: 'black',       
                    backgroundColor: 'white', 
                    width: '100%',        
                    padding: '5px',      
                    borderRadius: '10px',
                    marginBottom:  '10px',
                  }}
			/>
			<input
				value={formData.lastname}
				onChange={(e) =>
					setFormData({ ...formData, lastname: e.target.value })
				}
				type="text"
				className="border-2 border-blue-900"
				placeholder="Add lastname.."
                name="text2"
                style={{
                    color: 'black',       
                    backgroundColor: 'white', 
                    width: '100%',        
                    padding: '5px',      
                    borderRadius: '10px', 
                    marginBottom:  '10px',
                  }}
			/>
            <input
				type="text"
				value={formData.email}
				onChange={(e) =>
					setFormData({ ...formData, email: e.target.value })
				}
				className="border-2 border-blue-900"
                name="text3"
				placeholder="Add email ..."
                style={{
                    color: 'black',       
                    backgroundColor: 'white', 
                    width: '100%',        
                    padding: '5px',      
                    borderRadius: '10px', 
                    marginBottom:  '10px',
                  }}
			/>
			<input
				value={formData.phonenumber || ""}
				onChange={(e) =>
					setFormData({ ...formData, phonenumber: e.target.value })
				}
				type="text"
				className="border-2 border-blue-900"
				placeholder="Add phone number.."
                name="text4"
                style={{
                    color: 'black',       
                    backgroundColor: 'white', 
                    width: '100%',        
                    padding: '5px',      
                    borderRadius: '10px', 
                    marginBottom:  '10px',
                  }}
			/>
            <textarea
				/* type="text" */
				value={formData.message}
				onChange={(e) =>
					setFormData({ ...formData, message: e.target.value })
				}
				className="border-2 border-blue-900"
				placeholder="Add message ..."
                name="text5"
                rows={3}
                style={{
                    color: 'black',       
                    backgroundColor: 'white', 
                    width: '100%', 
                    padding: '5px',      
                    borderRadius: '10px', 
                    marginBottom:  '10px',
                  }}
			/>
            <div className="mt-4 flex justify-between items-center">
			<button type="submit"
            className="rounded-md bg-white/10 px-4 py-3 font-semibold transition border-2 border-blue-900 hover:bg-white/20"
            >
                Send</button>
                <button type="submit"
           className="rounded-md px-4 py-3 font-semibold text-purple-600 transition border-2 border-blue-900 hover:bg-white/20"
            onClick={() => setShowForm(false)}>
                Back </button>
            </div>
		</form>
        </div>
        )}
        {showSuccessMessage && (
        <div className="success-message">
          Your details have been saved. You will be contacted soon.
        </div>
      )}
        </div>
	);
};
