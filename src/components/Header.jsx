import { Bell, Settings } from "lucide-react";



function Header() {
    return (<div className="h-25 w-[85%] fixed top-0 right-0 bg-linear-to-r from-cyan-500 to-blue-500 flex justify-between pl-2 pr-4 items-center">
        <img width={80} className="h-20" src="https://static.vecteezy.com/system/resources/thumbnails/050/758/789/small_2x/user-icon-on-transparent-background-free-png.png" />
        <div className="flex items-center gap-8">
            <Settings className="hidden md:flex" size={35} />
            <Bell size={35} className="cursor-pointer"/>
            <div className="p-4 bg-linear-to-r/oklch from-indigo-500 to-teal-400 rounded font-bold cursor-pointer hover:scale-104 transition-all">Logout</div>
        </div>
    </div>)
}


export default Header;