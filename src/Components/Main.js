function Main(props){
    
     return (
        <>
        {(props.currentW.city!=null)? 
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <h1 className={"sm:text-5xl text-4xl font-medium title-font text-center "+props.hColor+ " mb-8"}>{props.currentW.city}
              <br className="uppercase"/>{props.currentW.weather}
            </h1>
            <h1 className={"sm:text-8xl text-7xl title-font text-center "+props.hColor+" mb-6"}>{props.currentW.temp}</h1>
            <hr/>
            <h1 className="sm:text-4xl uppercase text-3xl title-font text-gray-900 m-6">Today - {props.currentW.day}</h1>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex items-center p-4">
                  <i id="condition" className="wi wi-sunrise text-3xl w-160 h-160 object-cover object-center flex-shrink-0 rounded-full mr-4"></i>
                  <div className="flex-grow">
                    <h2 className={props.fColor+" text-2xl title-font font-medium"}>Sunrise</h2>
                    <p className="text-gray-900 text-3xl title-font font-medium" >{props.currentW.sunRise}</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex items-center p-4">
                  <i id="condition" className="wi wi-sunset text-3xl w-160 h-160 object-cover object-center flex-shrink-0 rounded-full mr-4"></i>
                  <div className="flex-grow">
                    <h2 className={props.fColor+" text-2xl title-font font-medium"}>Sunset</h2>
                    <p className="text-gray-900 text-3xl title-font font-medium" >{props.currentW.sunSet}</p>
                  </div>
                </div>
              </div>
            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex items-center p-4">
                  <i id="condition" className="wi wi-thermometer text-5xl w-160 h-160 object-cover object-center flex-shrink-0 rounded-full mr-4"></i>
                  <div className="flex-grow">
                    <h2 className={props.fColor+" text-2xl title-font font-medium"}>Max Temp</h2>
                    <p className="text-gray-900 text-3xl title-font font-medium" >{props.currentW.tempMax}</p>
                  </div>
                </div>
              </div>
        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex items-center p-4">
                  <i id="condition" className="wi wi-thermometer-exterior text-5xl w-160 h-160 object-cover object-center flex-shrink-0 rounded-full mr-4"></i>
                  <div className="flex-grow">
                    <h2 className={props.fColor+" text-2xl title-font font-medium"}>Min Temp</h2>
                    <p className="text-gray-900 text-3xl title-font font-medium" >{props.currentW.tempMin}</p>
                  </div>
                </div>
              </div>
        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex items-center p-4">
                  <i className="wi wi-strong-wind text-4xl w-160 h-160 object-cover object-center flex-shrink-0 rounded-full mr-4"></i>
                  <div className="flex-grow">
                    <h2 className={props.fColor+" text-2xl title-font font-medium"}>Wind Speed</h2>
                    <p className="text-gray-900 text-3xl title-font font-medium" >{props.currentW.windSpeed}</p>
                  </div>
                </div>
              </div>
        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex items-center p-4">
                  <i className="fa fa-eye fa-2x text-4xl w-160 h-160 object-cover object-center flex-shrink-0 rounded-full mr-4"></i>
                  <div className="flex-grow">
                    <h2 className={props.fColor+" text-2xl title-font font-medium"}>Visibility</h2>
                    <p className="text-gray-900 text-3xl title-font font-medium" >{props.currentW.visib}</p>
                  </div>
                </div>
              </div>
        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex items-center p-4">
                  <div className="flex-grow">
                    <h2 className={props.fColor+" text-2xl title-font font-medium"}>Humidity</h2>
                    <p className="text-gray-900 text-3xl title-font font-medium" >{props.currentW.humid}</p>
                  </div>
                </div>
              </div>
        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex items-center p-4">
                  <div className="flex-grow">
                    <h2 className={props.fColor+" text-2xl title-font font-medium"}>Pressure</h2>
                    <p className="text-gray-900 text-3xl title-font font-medium" >{props.currentW.pressure}</p>
                  </div>
                </div>
              </div>
            </div>
        <hr className="mt-6"/>
        </div>
    </section>
        :
        null}
        </>
    )
}

export default Main