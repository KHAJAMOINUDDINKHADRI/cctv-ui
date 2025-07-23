"use client";
import Navbar from './components/Navbar';
import IncidentList from './components/IncidentList';
import Image from 'next/image';
import { FaCalendarAlt } from "react-icons/fa";

function Dots() {
    return (
        <span className="text-white text-lg ml-2">&#8942;</span>
    );
}

function CameraCard({ image, label }) {
    return (
        <div className="w-[120px] h-[90px] bg-[#333] rounded-lg overflow-hidden shadow-lg border border-gray-700 flex flex-col">
            {/* Top: label and dots */}
            <div className="flex h-6 items-center justify-between px-2 py-1 bg-black/80 rounded-t-sm">
                <span className="text-xs">{label}</span>
                <Dots />
            </div>
            {/* Bottom: image */}
            <div className="relative flex-1 w-full h-0 min-h-[54px]">
                <Image src={image} alt={label} fill className="object-cover rounded-b-lg" />
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div className="relative bg-black min-h-screen text-white flex flex-col items-center overflow-x-hidden">
            {/* Yellow bubble background */}
            <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-yellow-300 opacity-25 rounded-full blur-3xl z-0"></div>
            {/* Gold/gradient navbar (handled in Navbar.js) */}
            <div className="relative z-10 w-full">
                <Navbar />
                <div className="w-full h-[1px] bg-gray-700 mt-2 mb-2"></div>
            </div>
            <div className="flex w-full max-w-8xl p-8 gap-6 mt-2 z-10">
                {/* Left: Incident Player */}
                <div className="flex-[2.5] bg-[#232526] rounded-md p-0 min-h-[450px] flex flex-col shadow-2xl border border-[#292929] overflow-hidden min-w-4xl">
                    {/* Main CCTV Image with overlays */}
                    <div className="relative w-full h-[450px] bg-black rounded-md overflow-hidden">
                        <Image src="/Thumbnails/image1.png" alt="Main CCTV" fill className="object-cover" />
                        {/* Timestamp overlay */}
                        <div className="absolute top-4 left-4 bg-black/70 text-xs px-3 py-1 rounded flex items-center gap-2">
                            <FaCalendarAlt className='text-gray-400' />
                            <span>11/7/2025 - 03:12:37</span>
                        </div>
                        {/* Camera label overlay */}
                        <div className="absolute bottom-2 left-2 bg-black/80 text-white text-sm px-3 py-1 rounded flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                            Camera - 01
                        </div>
                        {/* Camera 02 & 03 overlay cards */}
                        <div className="absolute bottom-2 right-2 flex gap-3">
                            <CameraCard image="/Thumbnails/image2.png" label="Camera - 02" />
                            <CameraCard image="/Thumbnails/image3.png" label="Camera - 03" />
                        </div>
                    </div>
                </div>
                {/* Right: Incident List */}
                <IncidentList />
            </div>
            {/* Placeholder for below area (timeline, etc.) */}
            <div className="w-full max-w-7xl h-[300px] bg-[#18191A] flex rounded-lg border border-[#232526] mb-8 z-10">
                {/* Timeline/other area placeholder */}
            </div>
        </div>
    );
} 