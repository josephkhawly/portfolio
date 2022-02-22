import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  NavLink,
} from "remix";
import Header from "./components/Header";
import styles from "./tailwind.css";
import type { MetaFunction, LinksFunction } from "remix";
import Drawer from "./components/Drawer";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles
    }
  ];
};

export default function App() {
  return (
    <html lang="en" data-theme="synthwave">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle"></input>
        <div className="drawer-content">
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
        <Drawer />
      </body>
    </html>
  );
}
