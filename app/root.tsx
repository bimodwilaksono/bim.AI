import {
  Outlet,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";

import "./tailwind.css";
import Header from "./components/base/header-main";
import HeaderUser from "./components/base/header-user";
import { themeSessionResolver } from "./components/theme/theme.server";
import { BaseLayout } from "./components/base/base-layout";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);

  return {
    theme: getTheme()
  }
}

export default function App() {
  const data = useLoaderData<typeof loader>()
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
