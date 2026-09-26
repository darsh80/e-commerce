import { cn } from "@/lib/utils";
import { TabsTrigger } from "./ui/tabs";

type Props = {
  value: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

export function ProductTabTrigger({ value, icon, children }: Props) {
  return (
    <TabsTrigger
      value={value}
      className={cn(
        "flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200",
        "text-gray-600 border-b-2 border-transparent",
        "data-[state=active]:text-primary-600",
        "data-[state=active]:border-primary-600",
        "data-[state=active]:bg-primary-50/50"
      )}
    >
      <span className="text-sm">{icon}</span>
      {children}
    </TabsTrigger>
  );
}