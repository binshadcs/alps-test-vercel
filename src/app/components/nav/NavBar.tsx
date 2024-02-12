import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="flex justify-around text-black bg-gray-300 border border-gray-300 h-8 w-full">
            <ul className="flex gap-5">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
            </ul>
            <ul className="flex gap-5">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    )
}