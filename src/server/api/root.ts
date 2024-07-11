//import { postRouter } from "~/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { aboutusRouter } from "./routers/aboutus";
import {coursesRouter } from "./routers/courses";
import { faqsRouter } from "./routers/faqs";
import { contactRouter } from "./routers/contactr";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 * This file imports different routers and combines them into a single AppRouter.
 */
export const appRouter = createTRPCRouter({
  //post: postRouter,
  aboutus: aboutusRouter,
  courses: coursesRouter,
  faqs: faqsRouter,
  contactr: contactRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
