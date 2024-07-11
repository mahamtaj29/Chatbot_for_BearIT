//import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
//API endpoint to fetch About Us data.
export const aboutusRouter = createTRPCRouter({
	/* This is tRPC router for the About Us data. It defines a query called getaboutus
	 which fetches all records from the aboutUs table in the database. */
	getaboutus: publicProcedure.query(async ({ ctx }) => {
		const data = await ctx.db.aboutUs.findMany({});
		return data;
	}),
});