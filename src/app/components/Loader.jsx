"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 10); // 1% every 10ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-red-500 text-lg font-semibold">{progress}%</p>
    </div>
  );
}
