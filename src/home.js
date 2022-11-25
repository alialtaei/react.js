const Home = () => {

        const handleClick = (e) => {
        console.log('hello, my Gs',e);

         }
        const handleClickAgain =(name)=>{
            console.log('hello ' + name);
        }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click</button>
            <button onClick={() =>handleClickAgain('alush')}>Click me again </button>


        </div>
        

     );
}
 
export default Home;