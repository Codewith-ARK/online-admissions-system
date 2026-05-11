'use client';
import { Menu, Search } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useAuth } from '../auth/AuthProvider';

function Navbar() {
    const router = useRouter();
    const { user } = useAuth();
    console.log(user);
    return (
        <div className="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <Menu />
                    </label>
                    <Link href={'/'} className="btn btn-ghost text-xl">AdmissionsPro</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href={'/programs/'}>Program</Link></li>
                        <li><Link href={'/institute/'}>University</Link></li>
                        <li><button>Scholarships</button></li>
                        <li><button>Contact</button></li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {
                        user !== null
                            ? <p className='text-xs'>Hello, {`${user.firstName} ${user.lastName}`}</p>
                            : <button onClick={() => router.push('/login')} className='btn btn-primary'>Sign In</button>
                    }
                </div>
            </div>

            <div className="collapse-content lg:hidden z-1">
                <ul className="menu">
                    <li><button>Item 1</button></li>
                    <li>
                        <button>Parent</button>
                        <ul>
                            <li><button>Submenu 1</button></li>
                            <li><button>Submenu 2</button></li>
                        </ul>
                    </li>
                    <li><button>Item 3</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
