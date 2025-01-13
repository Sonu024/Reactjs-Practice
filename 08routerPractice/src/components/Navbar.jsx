import {NavLink} from "react-router-dom"

export function Navbar() {
    return(
<nav className="p-7 bg-blue-400 rounded">
    <NavLink to="/" 
    className={({isActive}) =>
        `${isActive ? "text-red-600" : "text-gray-600"} p-4`
    }
    >
        Home
    </NavLink>

    <NavLink to="/about" 
    className={({isActive}) =>
        `${isActive ? "text-red-600 " : "text-gray-600"}`
    }
    >
        About
    </NavLink>

    <NavLink to="/product" 
    className={({isActive}) =>
    `${isActive ? "text-red-600 " : "text-gray-600"} p-4`
    }
    >
        Product
    </NavLink>
</nav>
        
    )
}