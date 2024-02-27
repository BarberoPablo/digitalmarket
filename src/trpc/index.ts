import { publicProcedure, router } from "./trpc";

//this is our backend

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return "hello";
  }),
});

export type AppRouter = typeof appRouter;
