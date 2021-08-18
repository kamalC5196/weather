function Fcast(props){
    let clr=props.fColor+" text-2xl text-base";
    let clr1 = props.fColor+" text-3xl text-lg title-font font-medium mb-3"
    let clr2 = "leading-relaxed "+ props.fColor+ " uppercase text-2xl text-base"
    //console.log(props)
    return (
      <div className="p-4 lg:w-1/3 md:w-1/2">
        <div className="flex rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img src={"http://openweathermap.org/img/wn/" + props.Fdata.icon+ "@2x.png"} alt="weather icon"/>
          </div>
          <div className="flex-grow fcastE">
            <h2 className={clr1}>{props.Fdata.dt}</h2>
            <p className={clr2}>{props.Fdata.weather}</p><br/>
            <p className={clr}>Rain : {props.Fdata.pop} </p>
            <p className={clr}>Temp : {props.Fdata.tMax} to {props.Fdata.tMin}</p><br/>
          </div>
        </div>
      </div>

    )
}

export default Fcast