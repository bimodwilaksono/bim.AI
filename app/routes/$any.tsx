import { Link } from "@remix-run/react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 rounded shadow-md text-center">
        <h1 className="text-4xl mb-4">404 - Page Not Found</h1>
        <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-500">Go back to the homepage</Link>
      </div>
    </div>
  );
}