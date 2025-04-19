import { Link } from "react-router";
import { ThemeToggle } from "../theme/theme-toggle";
import type { ReactNode } from "react";

interface Props {
  children?: ReactNode
}

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-10 w-full border-border backdrop:blur bg-background">
      <div className="container px-4 md:px-8 w-full flex h-14 items-center justify-between">
        <Link to={'/'} prefetch="render">
          <div className="flex items-center gap-1">
            <img src="/logo-light.png" alt="home-logo" className="w-10 h-5" />
            <h1>bim.AI</h1>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <ThemeToggle />
          {props.children}
        </div>
      </div>
    </header>
  )
}

export default Header;