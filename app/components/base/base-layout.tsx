import { Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import clsx from "clsx";
import { ReactNode } from "react";
import { PreventFlashOnWrongTheme, Theme, ThemeProvider, useTheme } from "remix-themes";

interface Props {
  theme: Theme | null;
  children?: ReactNode;
}

export const BaseLayout = (props: Props) => {
  return (
    <ThemeProvider specifiedTheme={props.theme} themeAction="/action/theme">
      <Layout {...props} />
    </ThemeProvider>
  )
}

function Layout(props: Props) {
  const { children } = props;

  const [theme] = useTheme(); 
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}