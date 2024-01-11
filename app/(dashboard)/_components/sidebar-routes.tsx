"use client"
import { Layout } from "lucide-react"
import { SidebarItems } from "./sidebar-item";

const guestRoutes=[
    {
        icon:Layout,
        label:"Dashboard",
        href:"/"
    },
    {
        icon:Layout,
        label:"Browse",
        href:"/search"
    }
]
export const SidebarRoutes =()=>{

    const routes=guestRoutes;
    return (
    <div className=" flex flex-col w-full">
        {
            routes.map((route)=>{
                return <SidebarItems key={route.href} icon={route.icon} label={route.label} href={route.href} />
            })
        }
    </div>
    )
}