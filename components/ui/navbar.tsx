"use client"

import { useRouter } from "next/navigation";

const Navbar = () =>{
    const router = useRouter()

    return(
        <div className="flex items-center justify between p-4 nx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-3xl" onClick={() => router.push("/")}>Tarre
                <span className="font-bold">Dev</span>
            </h1>
            <div className="items-center justify-between hidden sm:flex">
                <p>Menu Desktop</p>
            </div>
        </div>
    )
}
export default Navbar;