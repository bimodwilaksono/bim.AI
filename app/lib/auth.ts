import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaClient } from '@prisma/client';
import { Constants } from '~/constants';
import { envServerSchema } from '~/env/serverEnvSchema';

const prisma = new PrismaClient();

const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  trustedOrigins: [Constants.BASE_URL],
  socialProviders: {
    google: {
      clientId: envServerSchema.GOOGLE_CLIENT_ID,
      clientSecret: envServerSchema.GOOGLE_CLIENT_SECRET,
    },
  },
});
