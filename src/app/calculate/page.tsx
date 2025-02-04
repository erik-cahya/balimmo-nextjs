import React, { Suspense } from "react";
import Calculate from "@/components/Calculate";

export default function CalculatePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Calculate />
    </Suspense>
  );
}