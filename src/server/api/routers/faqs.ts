
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const faqsRouter = createTRPCRouter({
	// get all todos
	getfaqs: publicProcedure.query(async ({ ctx }) => {
		const data = await ctx.db.fAQs.findMany({});
		return data;
	}),
});