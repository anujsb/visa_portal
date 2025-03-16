"use client"
// components/sidebar.tsx
import Link from "next/link";
import { FaUserAlt, FaClipboardList, FaPlane, FaFileInvoiceDollar } from "react-icons/fa";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "Dashboard", href: "/", icon: <FaUserAlt className="w-4 h-4 mr-2" /> },
  { name: "Create FTR", href: "/create-ftr", icon: <FaClipboardList className="w-4 h-4 mr-2" /> },
  { name: "Document Upload", href: "/documents", icon: <FaClipboardList className="w-4 h-4 mr-2" /> },
  { name: "Visa Status", href: "/visa-status", icon: <FaPlane className="w-4 h-4 mr-2" /> },
  { name: "Finance", href: "/finance", icon: <FaFileInvoiceDollar className="w-4 h-4 mr-2" /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-slate-100 dark:bg-slate-800 w-64 p-4 shadow-md">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Visa Tracking System</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center p-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
