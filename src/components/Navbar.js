import React from "react";
import { NavLink, Link } from "react-router-dom";
export default function Navbar({list}) {

    console.log("users nav---", list);
    return (

        <ul>
            {list.map(user =>
                <li key={user.id}
                    className={user.cName}
                    component={NavLink}>
                    <Link to={user.path}>
                        {user.name}
                    </Link>
                </li>
            )}
        </ul>
    );
}
