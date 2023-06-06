<>
        <nav className="navbar">
            <Link to='/'><img className="logo" src={logo}></img></Link>
            <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>                
                <Link to='/Portfolio'><li>Portfolio</li></Link>
                <Link to='/Contact'><li>Contact</li></Link>
                <Link to='/About'><li>About</li></Link>
                <li className="instaImg" onClick={() => window.open("https://www.instagram.com/twelve.photographyy/", "_blank") }>< BsInstagram /></li>
                
                <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross/>: <FaBars/>}  
                </button>
            </ul>
        </nav>
        </>