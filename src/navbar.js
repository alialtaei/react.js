const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1> the khara blog</h1>
        <div className="links">
            <a href="/">home</a>
    {/* hur du skriver css i en jsx fil.*/}
            <a href="/create" style={{
              color:"white",
              backgroundColor:'red',
              borderRadius:"8px"  
            }}>new blog</a>
        </div>
        </nav>
     );
}
 
export default Navbar;