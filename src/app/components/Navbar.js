import Image from 'next/image';
import { MdDashboard, MdOutlineTheaters, MdReportProblem, MdPeople, MdKeyboardArrowDown } from 'react-icons/md';
import { BiSolidCctv } from "react-icons/bi";

export default function Navbar() {
    return (
        <nav className="w-full flex items-center h-16 px-8 mt-4">
            {/* Logo (left) */}
            <div className="flex items-center gap-3 flex-shrink-0">
                <img src="/logo.png" alt="Logo" className="h-10" />
                <span className="text-2xl font-light  tracking-widest">MANDLAC<span className="font-bold">X</span></span>
            </div>
            {/* Nav links (center) */}
            <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-8">
                    <NavItem icon={<MdDashboard className='text-yellow-400' />} label="Dashboard" />
                    <NavItem icon={<BiSolidCctv />} label="Cameras" />
                    <NavItem icon={<MdOutlineTheaters />} label="Scenes" />
                    <NavItem icon={<MdReportProblem />} label="Incidents" />
                    <NavItem icon={<MdPeople />} label="Users" />
                </div>
            </div>
            {/* Profile (right) */}
            <div className="flex items-center gap-3 flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8">
                    <Image
                        src="/profile.png"
                        alt="Profile"
                        width={40}
                        height={40}
                        className="h-8 w-8 rounded-full object-cover object-top"
                    />
                </div>
                <div className="flex flex-col items-start leading-tight">
                    <span className="font-semibold text-base text-white">Mohammed Ajhas</span>
                    <span className="text-sm text-gray-400">ajhas@mandlac.com</span>
                </div>
                <MdKeyboardArrowDown className="text-white text-xl ml-1" />
            </div>
        </nav>
    );
}

function NavItem({ icon, label }) {
    return (
        <div className="flex items-center gap-1.5 cursor-pointer font-medium">
            {icon}
            <span>{label}</span>
        </div>
    );
} 