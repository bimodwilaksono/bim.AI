import z from 'zod';
import { Constants } from '~/constants';

const envSchema = z.object({
  PORT: z.number().default(3000),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string().default(Constants.BASE_URL),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
});

const envServer = envSchema.safeParse({
  PORT: Number(process.env.PORT),
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
});

if (!envServer.success) {
  console.error(envServer.error.issues);
  throw new Error('There is an error with the server environment variables');
}

export const envServerSchema = envServer.data;
