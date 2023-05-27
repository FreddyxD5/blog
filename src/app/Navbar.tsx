import Link from "next/link"

const Navbar = () =>{
    return(
        <>
        <div className='container-body'>
            <Link href="/" className='font-source name-title'>Jesus More</Link>  
            <nav className='navbar'>
                <Link href='/aboutme' className='navbar-item'>Acerca de Mi</Link>
                <Link href="#" className='navbar-item'>Blog</Link>
                <Link href="/projects" className='navbar-item'>Projects</Link>
                <Link href="https://github.com/FreddyxD5" className='navbar-item'>Github</Link>
            </nav>
        </div> 
        </>
    )
}
export default Navbar;