"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900 text-white text-center font-bold">
      <p>
        Movie Database Scraped from{" "}
        <Link href="https://www.themoviedb.org/" className="text-blue-600">
          TMDB
        </Link>
      </p>
    </footer>
  );
}
