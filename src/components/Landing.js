import React from 'react'
// import { Navbar } from './Navbar'


export const Landing = () => {
    return (
            <div className="home flex justify-around items-center">
            <div className="text-left">
                <h1 className="text-5xl mb-5 font-serif antialiased text-gray-700 text-opacity-15 leading-normal whitespace-normal align-middle" >Learning Center for<br/> Your Kids</h1>
                <p className="text-lg font-serif antialiased text-gray-700 text-opacity-15 leading-loose whitespace-normal align-middle">Another free template by Colorlib. Far far away,</p>
                <p className="text-lg font-serif antialiased text-gray-700 text-opacity-15 leading-loose whitespace-normal align-middle"> behind the word mountains, far from the countries</p>
                <p className="text-lg font-serif antialiased text-gray-700 text-opacity-15 leading-loose whitespace-normal align-middle"> Vokalia and Consonantia, there live the blind texts.</p>
                <button className=" w-24 h-10 mt-5 mb-5 px-4 rounded-full text-white leading-loose align-middle align-text-top bg-green-500 hover:bg-green-400">Explore</button>    
            </div>
            <div>
              <button class="rounded-full h-24 w-24 text-white flex items-center justify-center bg-green-500  hover:bg-green-400 font-serif antialiased border-4 border-green">PLAY</button>
            </div>
        </div>
    )
}
