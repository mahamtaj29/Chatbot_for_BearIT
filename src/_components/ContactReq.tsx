import { api } from "../utils/api";

interface ContactType {
    requestid: number;
	firstname: string;
	lastname: string;
    email: string;
    phonenumber: string;
	message: string;
    status: string | null;
    createdat: Date | null;
    updatedat: Date | null;
}

export const ContactReq = () => {
	const contactreq = api.contactr.getContact.useQuery<ContactType[]>();
	return (
		<div>
			<div className="todo-card">
				{contactreq.data?.map((contact: ContactType) => (
					<div key={contact.requestid} className="single-todo">
						<h1> Contact Details:   </h1>
                        <p> First Name: {contact.firstname} </p> 
                        <p> Last Name: {contact.lastname} </p>
                        <p> Email: {contact.email} </p>
                        <p> Phone Number: {contact.phonenumber} </p>
                        <p> Message: {contact.message} </p>
                        <p> Your details have been saved. You will be contacted soon. </p>
					<br></br>
					</div>
				))}
			</div>
		</div>
	);
};
