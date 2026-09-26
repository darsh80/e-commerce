"use client";

import { useState } from "react";
import { ArrowLeftRight, RefreshCw} from "lucide-react";

export default function RefreshCwButton() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <button
      onClick={() => setIsVisible(!isVisible)}

      className="bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-sm"
    >
      <RefreshCw  
        size={18}
        className={
          isVisible ? "text-gray-500 fill-gray-500" : "text-gray-700 "
        }
      />
    </button>
  );
}