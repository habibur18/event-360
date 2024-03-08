import { Link, useLocation } from "react-router-dom";

interface LinkTrackerProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}
export default function LinkTracker({ children, to, className }: LinkTrackerProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`${isActive ? "text-[#0070f3] font-bold" : "block px-[8px] py-[12px]"} text-xl  ${className}`}>
      {children}
    </Link>
  );
}
