import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import React from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards"

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const purpose = useContractReader(readContracts, "YourContract", "purpose");

  return (
    <div className='text-gray'>
      <div className='max-w-[800px] mt-[-50px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold text-lg p-2'>
          A Frenly Catalog
        </p>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6 dark:text-white'>
        🛠️ Created with Scaffold-eth. 🛠️
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 dark:text-white'>
            Onboarding you into WEB3, NFTs & DeFI.
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 h-20 dark:text-[#18c4e2]'>A fast prototyping framework.🏗</p>
        <svg class="animate-bounce w-full h-20 mx-auto text-gray-900 justify-center py-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="#00df9a">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
      </div>
      <p class="md:text-2xl text-xl font-bold font-mono h-20 flex justify-center">A monthly curated list of top 30 builds. </p>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/Buidlguidl.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>BuidlGuidl v3</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Builders</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Public Goods</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Damage Dealers</span>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://buidlguidl.com/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/speedrunethereum.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>SpeedRunEthereum</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#education</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#onboarding</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#challenges</span>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://speedrunethereum.com/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/oe40.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>OE 40</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://oe40.me/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/nftr.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>NFTR</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DeFI</span>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://nftr.name/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/fwb.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>FWB</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Community</span>            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://www.fwb.art/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/stealthdrop.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Stealthdrop</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Community</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://stealthdrop.xyz/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/nimi.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Nimi</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ENS</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Community</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://nimi.eth.limo/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/sailorloogies.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Sailor Loogies</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Game</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#On-Chain</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://sailor.fancyloogies.com/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/debond.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>DeBond</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DeFI</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://debondapp.web.app/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/appleheads.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Apple Heads</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://appleheads.io/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/arcadians.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Arcadians</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://arcadians.io/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/avavox.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Avavox</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Avalanche</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://avavox.art/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/bufficorn.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Bufficorn Buidl Brigade</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ETH Denver</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://bufficornbuidlbrigade.com/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/burnyboys.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Burnyboys</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://burnyboys.com/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/circle game.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Circle Game</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#On-chain</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Game</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://circlegame.io/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/cityDAO.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>CityDAO Citizenship</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DAO</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Governance</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://citizen.citydao.io/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/daohaus.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>daohaus</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DAO</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Governance</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://daohaus.org/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/conviction.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Gitcoin Conviction</h2>
              <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DAO</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Governance</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://gtc.v37.io/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/inde.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>InDe</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DeFI</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://inde.fi/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/jpegme.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>JpegMe</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="http://jpegme.com/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/koywe.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Koywe</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Ecology</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://koywe.eth.limo/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/lost+found.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Lost+Found</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://www.lostfound.blue/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/moonshot.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Moonshot Collective</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DAO</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://moonshotcollective.space/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/moonshotbots.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Moonshot Bots</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Public Goods</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://bots.moonshotcollective.space/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/moonstake.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Moonstake</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DeFI</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Polkadot & Moonbeam</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://moonstake.club/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/riceday.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Riceday.gg</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://riceday.gg/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/robos.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>ROBOS</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DeFI</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://www.robosnft.com/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/signature.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Signatorio</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#On-chain</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://signator.io/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/snakesonchain.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Snakes On-Chain</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#On-chain</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://snakesonachain.club/">Visit this build</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="/images/will3.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Will3</h2>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DeFI</span>
            </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://will3.net/">Visit this build</a></button>
          </div>
      </div>
    </div>
  );
}

export default Home;
