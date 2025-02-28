import { Link } from "react-router";
import notfound from "../../assets/images/not-found.png";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-main-bg">
      <div className="p-8 max-w-md text-center">
        <img
          src={notfound}
          alt="Not Found - 404"
          className="mx-auto mb-6 w-96 h-72"
          loading="lazy"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! Looks like this trainer went the wrong way!
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Return to Pokédex
        </Link>
      </div>
    </main>
  );
}
