import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function Layout()
{
    return (
        <div className="py-5 px-[70px] flex flex-col min-h-screen ">
            {/* <Header/> */}
            <Outlet />
        </div>
    )
}