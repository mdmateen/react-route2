import React from 'react'
import { Link, Outlet } from 'react-router-dom';
export default function Products() {
    return (
        <>
            <div>
                <input placeholder='Search product' />
            </div>
            <nav>
                <Link to='feature'>Feature </Link>
                <Link to='new'> New Products</Link>
            </nav>
            <Outlet />
        </>
    )
}
