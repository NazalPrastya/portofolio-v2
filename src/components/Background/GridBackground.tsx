import React from "react";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
    </div>
  );
}
