import { LoginForm } from '~/components/login-form';
import type { Route } from './+types/login';

export async function loader({ params }: Route.LoaderArgs) {
  const response = await fetch('http://localhost:5173/api');

  return response.json();
}

export default function Page({ loaderData }: Route.ComponentProps) {
  const { message } = loaderData;

  console.log('message', message);
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
