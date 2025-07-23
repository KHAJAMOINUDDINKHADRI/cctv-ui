"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdReportProblem, MdOutlineWarning, MdAccessTime, MdLocationOn, MdChevronRight } from 'react-icons/md';
import { BiSolidDoorOpen, BiSolidCctv } from "react-icons/bi";
import { GiPistolGun } from "react-icons/gi";
import { FaPlus, FaUserGear, FaCheckDouble } from "react-icons/fa6";

const typeIcons = {
    'Unauthorised Access': <BiSolidDoorOpen className="text-orange-400 text-base" />, // orange
    'Gun Threat': <GiPistolGun className="text-red-500 text-base" />, // red
};

function formatIncidentTime(tsStart, tsEnd) {
    const start = new Date(tsStart);
    const end = new Date(tsEnd);
    const pad = (n) => n.toString().padStart(2, '0');
    return `${pad(start.getHours())}:${pad(start.getMinutes())} - ${pad(end.getHours())}:${pad(end.getMinutes())} on ${end.getDate()}-${end.toLocaleString('default', { month: 'short' })}-${end.getFullYear()}`;
}

export default function IncidentList() {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        fetch('/api/incidents?resolved=false')
            .then(res => res.json())
            .then(setIncidents);
    }, []);

    // Add resolve handler
    const handleResolve = async (id) => {
        // Optimistically remove the incident from the UI
        setIncidents((prev) => prev.filter((incident) => incident.id !== id));
        // Call the API to resolve
        await fetch(`/api/incidents/${id}/resolve`, { method: 'PATCH' });
    };

    return (
        <div className="flex-[1.2] bg-[#18191A] rounded-md p-2 max-h-[450px] overflow-y-auto shadow-lg border border-[#232526] min-w-[450px] max-w-[600px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs">
                    <span className="bg-red-900/80 text-red-300 rounded-full h-6 w-6 px-1.5 py-0.5 text-xs font-bold"> <MdReportProblem className="inline text-red-500 mr-1" /> </span>
                    <span className="text-sm">{incidents.length} Unresolved Incidents</span>
                </div>
                <div className="flex items-center">
                    <span className="bg-orange-900/80 text-orange-300 rounded-full h-6 w-6 px-1.5 py-0.5 text-xs"> <BiSolidDoorOpen className="inline text-orange-400 mr-1" /> </span>
                    <span className="bg-red-900/80 text-red-300 rounded-full h-6 w-6 px-1.5 py-0.5 text-xs font-bold"> <FaPlus className="inline text-red-500 mr-1" /> </span>
                    <span className="bg-blue-900/80 text-blue-300 rounded-full h-6 w-6 px-1.5 py-0.5 text-xs font-bold"> <FaUserGear className="inline text-blue-400 mr-1" /> </span>
                    <span className="text-gray-400 border border-gray-500 rounded-full px-2 py-1 text-xs font-bold flex items-center ">
                        <FaCheckDouble className='text-green-500 pr-1' />
                        4 resolved incidents
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                {incidents.map((incident) => (
                    <div key={incident.id} className="flex items-center gap-3 bg-[#232526] rounded-lg p-2 shadow border border-[#232526]">
                        <div className="w-20 h-18 bg-[#333] rounded-sm overflow-hidden flex items-center justify-center">
                            <Image src={incident.thumbnailUrl} alt="Incident Thumbnail" width={80} height={60} className="object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                            <div className="flex items-center gap-1 font-bold text-sm">
                                {typeIcons[incident.type] || <MdReportProblem className="text-yellow-400 text-base" />}
                                <span className={incident.type === 'Gun Threat' ? 'text-red-500' : 'text-orange-400'}>{incident.type}</span>
                            </div>
                            <div className="mt-2 flex items-center gap-1 text-xs text-gray-300">
                                <BiSolidCctv className="text-white text-sm" />
                                {incident.camera?.name || 'Camera'}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-white">
                                <MdAccessTime className="text-white text-sm" />
                                {formatIncidentTime(incident.tsStart, incident.tsEnd)}
                            </div>
                        </div>
                        <button
                            className="flex items-center gap-1 text-yellow-400 ml-2 text-sm hover:underline"
                            onClick={() => handleResolve(incident.id)}
                        >
                            Resolve <MdChevronRight className="text-base" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
} 