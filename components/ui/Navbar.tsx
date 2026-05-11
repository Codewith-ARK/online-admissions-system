'use client';
import { Menu, Search } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

function Navbar() {
    const router = useRouter();
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
                        {/* <li>
                            <details>
                                <summary>Scholarships</summary>
                                <ul className="p-2 bg-base-100 w-40 z-1">
                                    <li><button>Programs</button></li>
                                    <li><button>Scholarships</button></li>
                                    <li><button>Contact</button></li>
                                </ul>
                            </details>
                        </li> */}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <label className="input">
                        <Search />
                        <input type="search" className="grow" placeholder="Search" />
                    </label>
                    <button onClick={() => router.push('/login')} className='btn btn-primary'>Sign In</button>
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
