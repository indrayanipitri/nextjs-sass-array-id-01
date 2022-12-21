import Link from "next/link";

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="container">
                <Link href="/" className='logo'>Pitri.</Link>
            
                <ul className='nav-links'>
                <li><Link href="/" className='nav-item active'>Home</Link></li>
                <li><Link href="/about" className='nav-item'>About</Link></li>
                <li><Link href="/portfolio" className='nav-item'>Portofolio</Link></li>
                <li><Link href="/contact" className='nav-item'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}