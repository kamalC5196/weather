import Icon from './SVG/Icon'
function Header(props){
    let srch='';
    //let [x,sX] = useState('');
    return(
    <header className="text-white body-font -mb-10">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Icon />
      <span className="ml-3 text-3xl">Weather</span>
    </a>
    <form className="w-full max-w-sm mx-auto" onSubmit={(e)=>{ e.preventDefault(); props.SearchCity(srch)}}>
  <div className="flex items-center border-b border-teal-500 py-2">
    <input style={{outline:"none", background:"transparent", color:"#000"}} type="text" placeholder="Enter City" onChange={(e) => srch = e.target.value}/>
    <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-7">
  Search
</button>
    
  </div>
</form>
  </div>
</header>
    )
}

export default Header;

 