import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavbar";

export default function NavbarLayout() {
    return (
        <>
            <header>
                <MainNavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}