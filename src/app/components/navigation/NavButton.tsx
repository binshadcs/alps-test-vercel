'use client'

import { useRouter } from "next/navigation"

export default function NavButton({path, label} : any) {
    
    const router = useRouter()
    return (
        <button onClick={()=> {
            router.push(path)
        }} className="px-2 py-1 bg-green-500 text-white">{label}</button>
    )
}