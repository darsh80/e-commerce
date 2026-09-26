import { ReactNode, createElement } from "react";

export const productFeatures: {
  icon: ReactNode;
  title: string;
  desc: string;
}[] = [
  {
    icon: createElement("span", { className: "text-green-500 text-lg" }, "🚚"),
    title: "Free Delivery",
    desc: "Orders over certain amount",
  },
  {
    icon: createElement("span", { className: "text-green-500 text-lg" }, "↩"),
    title: "30 Days Return",
    desc: "Money back guarantee",
  },
  {
    icon: createElement("span", { className: "text-green-500 text-lg" }, "🔒"),
    title: "Secure Payment",
    desc: "100% protected checkout",
  },
];