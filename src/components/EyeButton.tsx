"use client";

import { useState } from "react";
import { Eye} from "lucide-react";

export default function EyeButton() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <button
      onClick={() => setIsVisible(!isVisible)}

      className="bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-sm"
    >
      <Eye
        size={18}
        className={
          isVisible ? "text-gray-500 fill-green-500" : "text-gray-700 hover:text-green-500"
        }
      />
    </button>
  );
}