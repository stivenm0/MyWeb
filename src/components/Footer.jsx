function Footer() {
  return (
    <footer className="w-full px-4 mt-24 md:px-0">
        <div className="flex flex-col items-center justify-between leading-relaxed md:flex-row">
            <div className="w-full text-center md:w-1/2 md:text-left">
                <p className="font-semibold">©2024 Estiven Muñoz</p>
                <p className="text-slate-700">Animation and Icons: 
                <a href="https://lottiefiles.com/" target="_blank"  className="underline hover:no-underline text-slate-700 hover:text-gray-900" rel="noopener noreferrer">LottieFiles</a>, <a href="https://cocomaterial.com/" target="_blank"  className="underline hover:no-underline" rel="noopener noreferrer">Coco Material</a>
                
                </p>
            </div>
            <div className="w-full mt-4 text-center md:w-1/2 md:text-right md:mt-0">
                <p className="font-semibold"></p>
                <p className="text-slate-700">
                    <a href="https://github.com/stivenm0/" target="_blank" className="hover:underline text-slate-700 hover:text-gray-900" rel="noopener noreferrer">GitHub</a>
                    <span className="text-slate-300">&nbsp;—&nbsp;</span>
                    <a href="https://twitter.com/stivenm_0?" target="_blank" className="hover:underline text-slate-700 hover:text-gray-900" rel="noopener noreferrer">Twitter</a>
                    <span className="text-slate-300">&nbsp;—&nbsp;</span>
                    <a href="https://www.linkedin.com/in/maycolmu%C3%B1oz/" target="_blank" className="hover:underline text-slate-700 hover:text-gray-900" rel="noopener noreferrer">Linkedin</a>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer