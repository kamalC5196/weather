import Fcast from './Fcast'

function Forecast(props){
  return(
    <div>
    {(props.fcast.length > 0)? 
     <section className="text-gray-600 body-font">
  <div className="container px-5 -mt-10 mx-auto flex flex-wrap">
     <h1 className="sm:text-4xl text-3xl title-font text-gray-900 mb-6">Forecast</h1>
    <div className="flex flex-wrap -m-4">
     {props.fcast.map((e,i)=>(
     <Fcast Fdata={e} fColor={props.fColor} key={i}/>
    ))}
     </div>
  </div>
</section>
     : null}
    </div>
    )
}

export default Forecast;