
import './App.css';
import Navbar from './navbar';
import Home from './home';
function App() {
// exempel på functioner som används på jsx men samtidigt så funkar alla js-functions i jsx 
/*const title= "welome to my blog"
const likes = 50;
const person = {name: alussh, age:45}
const link= "http://www.google.com"*/

  return (
    <div className="App">
      <Navbar> </Navbar>
    <div className='content'>
      <Home/>
    </div>
    </div>
  );
}

export default App; // export är ett verktyg som ger oss tillgång att använda koden som är skriven här i andra sidor.
// koden ovanför som ser ut som html är faktist jsx och dens syntex är liknande till html