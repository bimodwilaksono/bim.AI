import {
  isRouteErrorResponse,
  Outlet,
  useLoaderData,
  type LinksFunction,
  type LoaderFunctionArgs,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import Header from './components/base/header-main';
import HeaderUser from './components/base/header-user';
import { themeSessionResolver } from './components/theme/theme.server';
import { BaseLayout } from './components/base/base-layout';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);

  return {
    theme: getTheme(),
  };
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  return (
    <BaseLayout theme={data.theme}>
      <div className="flex-col bg-background">
        <Header>
          <HeaderUser />
        </Header>
        <Outlet />
      </div>
    </BaseLayout>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
