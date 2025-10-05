import { ChartBarStacked, ChartColumnStacked, ChartNoAxesCombined, FileText, MessageCircleQuestionMark, Settings, ShoppingBag, ShoppingCart, SunMedium, UsersRound } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
function Sidebar() {
    var navigate = useNavigate()


    return (
        <div className='w-[15%]  h-[100vh] bg-zinc-900 flex flex-col gap-2.5'>
            <div className='w-full h-16 flex items-center justify-center'>
                <img className='w-[80px] h-auto object-cover' src={"https://static.vecteezy.com/system/resources/thumbnails/009/636/683/small_2x/admin-3d-illustration-icon-png.png"} alt="#" />
            </div>
            <div onClick={() => navigate("/category")} className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><ChartBarStacked size={20} />Category</div>
          
            <Link to={"/subcategory"}>
                <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><ChartColumnStacked size={20} />Subcategory</div>
            </Link>
            <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><ShoppingCart size={20} />Products</div>
            <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><ShoppingBag size={20} />Orders</div>
            <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><UsersRound size={20} />Customers</div>
            <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><FileText size={20} />Reports</div>
            <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><ChartNoAxesCombined size={20} />Analytics</div>
            <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><Settings size={20} />Settings</div>
            <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><MessageCircleQuestionMark size={20} />Support</div>
            <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><SunMedium size={20} />Theme</div>
        </div>
    )
}

export default Sidebar;


