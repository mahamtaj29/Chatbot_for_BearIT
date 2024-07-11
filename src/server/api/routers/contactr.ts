import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const contactRouter = createTRPCRouter({
    // its an endpoint for POST request
	addRequest: publicProcedure
    .input(
        z.object({
            //requestid: z.number(),
            firstname: z
                .string({ required_error: "This field cannot be empty" })
                .max(20, { message: "First Name Cannot be more that 20 characters" }),
            lastname: z
                .string({ required_error: "This field cannot be empty" })
                .max(20, { message: "Last Name Cannot be more that 20 characters" }),
            email: z
                .string({ required_error: "This field cannot be empty" })
                .max(50, { message: "Email Cannot be more that 20 characters" }),
            phonenumber: z
                .string({ required_error: "This field cannot be empty" })
                .max(30, { message: "Cannot be more that 20 characters" }),
            message: z
                .string({ required_error: "This field cannot be empty" })
                .max(100, { message: "Message Cannot be more that 100 characters" }),
            //status: z.string().max(20),
            //createdat: z.date(),
            //updatedat: z.date(), 

        })
    )
    .mutation(async ({ input, ctx }) => {
        const data = await ctx.db.contactRequests.create({
            data: {
                //requestid: input.requestid,
                firstname: input.firstname,
                lastname: input.lastname,
                email: input.email,
                phonenumber: input.phonenumber,
                message: input.message,
                //status: input.status,
                //createdat: input.createdat,
                //updatedat: input.updatedat,
            },
        });
        return data;
    }),
    // get complete request
	getContact: publicProcedure.query(async ({ ctx }) => {
		const data = await ctx.db.contactRequests.findMany({});
		return data;
	}),
});