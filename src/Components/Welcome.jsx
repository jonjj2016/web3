import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import Loader from './Loader'

const Welcome = () => {
  const connectWallet = () => {
    //connect to metamask wallet
  }
  const commonStyles =
    'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-white text-3xl sm:text-5xl text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left text-white  mt-5 font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world.Buy and sell crypto currencies easily on
            KRYPT
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 text-white bg-[#2952e3] p-3 text-base font-semibold rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            Connect Wallet
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={commonStyles}>Low fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Welcome
