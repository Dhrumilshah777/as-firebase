"use client";

import { useSearchParams } from "next/navigation";

export default function NotFound() {
  const params = useSearchParams();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p>Query params: {params.toString()}</p>
    </div>
  );
}
