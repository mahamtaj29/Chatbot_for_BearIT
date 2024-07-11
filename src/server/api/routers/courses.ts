
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const coursesRouter = createTRPCRouter({
	// get all todos
	getcourses: publicProcedure.query(async ({ ctx }) => {
		const data = await ctx.db.coursesAndServices.findMany({});
		return data;
	}),
});