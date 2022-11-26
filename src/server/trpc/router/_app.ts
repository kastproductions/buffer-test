import { router } from '../trpc';
import { authRouter } from './auth';
import { exampleRouter } from './example';
import { fileGeneratorRouter } from './file';

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  fileGenerator: fileGeneratorRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
