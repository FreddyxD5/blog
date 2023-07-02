import Link from "next/link"

const Navbar = () =>{
    return(
        <>
        <div className='container-navbar'>
            <Link href="/" className='font-source name-title'>Jesus More</Link>  
            <nav className='navbar'>
                <Link href='/aboutme' className='navbar-item item-underline'>Acerca de mi</Link>
                <Link href="/blog" className='navbar-item item-underline'>Blog</Link>
                <Link href="/projects" className='navbar-item item-underline'>Projects</Link>
                <Link href="https://github.com/FreddyxD5" className='navbar-item item-underline'>Github</Link>
            </nav>
        </div> 
        </>
    )
}
export default Navbar;