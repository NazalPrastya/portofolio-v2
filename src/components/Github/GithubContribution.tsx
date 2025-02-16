"use client"; // Jika pakai Next.js App Router

import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubContributions = ({ username }: { username: string }) => {
  return (
    <div className="bg-gray-200 text-medium p-4 rounded-lg shadow-md w-full border-2 border-monochrome2">
      <GitHubCalendar
        username={username}
        blockSize={12} // Ukuran kotak
        blockMargin={4} // Jarak antar kotak
        fontSize={14} // Ukuran teks label bulan
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        }}
      />
    </div>
  );
};

export default GitHubContributions;
