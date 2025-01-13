import { Link, Outlet } from "react-router-dom"


export function Product(){
    return(
        <>
        <nav>
        <form>
            <input type="search" placeholder="search" className="border-black-1"></input>
        </form>
        </nav>

        <nav >
            <Link to="feature" className="p-5">Featured</Link>
            <Link to="new">New</Link>
        </nav>
        <Outlet />
        </>
    )
}