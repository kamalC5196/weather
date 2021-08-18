function Footer(props){
    return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
      <defs>
        <filter id="prefix__a" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation={3} />
          <feOffset dy={4} result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope={0.05} />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__a)">
        <g transform="translate(20 26)">
          <g className="prefix__am-weather-sun">
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth={2}
              d="M0 9v3M-6.364 6.364l-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
            />
          </g>
          <circle fill="orange" r={5} stroke="orange" strokeWidth={2} />
        </g>
        <path
          d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          fill="#C6DEFF"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={1.2}
        />
      </g>
    </svg>
      <span className="ml-3 text-xl">Kamal C</span>
    </a>
    <p className="text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} kamal —
      <a href="https://twitter.com/knyttneve" className="text-gray-900 ml-1" rel="noopener noreferrer" target="_blank">powered by openweathermap</a>
    </p>
  </div>
</footer>
    )
}

export default Footer;