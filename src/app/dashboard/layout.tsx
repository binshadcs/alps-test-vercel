import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children, }: Readonly<{children: React.ReactNode; }>) {
  return (
    <div className="bg-teal-700">
        {children}
    </div>
  );
}
