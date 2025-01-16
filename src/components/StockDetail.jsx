import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { IoMdHeart } from 'react-icons/io';
import { stockData } from '../data/stockData';
import StockChart from './StockChart';
import StockMetrics from './stock/StockMetrics';

function StockDetail() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');
  const [isLiked, setIsLiked] = useState(false);
  const stock = stockData.find(s => s.symbol === symbol);

  if (!stock) return null;

  const stats = {
    open: '₦25.95',
    high: '₦26.95',
    low: '₦22.55',
    volume: '0.00',
    avgVol: '---',
    mktCap: '---'
  };

  return (
    <div className="min-h-screen h-[1200px] max-w-5xl mx-auto font-['DM Sans']">
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-[#1E1E1E] rounded-full transition-colors"
          >
            <IoArrowBack size={24} />
          </button>
          <h1 className="text-xl font-bold">{stock.symbol}</h1>
          <IoMdHeart 
            size={24} 
            className={`${isLiked ? 'text-purple-500' : 'text-white'} cursor-pointer transition-colors`}
            onClick={() => setIsLiked(!isLiked)}
          />
        </div>

        <div className="flex gap-6 mb-6  text-center  relative left-[30%]">
          <button 
            className={`pb-2 ${activeTab === 'about' ? 'text-white text-center font-semibold border-b-2 border-[#00B087]' : 'text-gray-400'}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button 
            className={`pb-2 ${activeTab === 'financials' ? 'text-white font-semibold border-b-2 border-[#00B087]' : 'text-gray-400'}`}
            onClick={() => setActiveTab('financials')}
          >
            Financials
          </button>
          {/* <div className="border-b border-gray-700 h-2 w-full relative left-[-220px] top-[30px]"></div> */}
        </div>

        {activeTab === 'about' ? (
          <div className="mb-8">
            <div className="mb-8">
              <div className="flex justify-center items-center gap-4">
                <img src={stock.logo} alt={stock.name} className="w-16 h-16 rounded-lg" />
                <div className="text-center">
                  <h2 className="text-2xl font-bold">{stock.symbol}</h2>
                  <p className="text-gray-400">{stock.name}</p>
                </div>
              </div>
              
              <div className="text-center mt-4">
                <h3 className="text-4xl font-bold">₦{stock.price}</h3>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-red-500">₦0.10</span>
                  <span className="text-red-500">0.39%</span>
                  <span className="text-gray-400">TODAY</span>
                </div>
                <div className="text-red-500 mt-1">● Market Closed</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {stock.name} operates as a company in the Nigerian market. The company provides various services
              and products to its customers, maintaining a strong presence in the local business environment.
            </p>
          </div>
        ) : (
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#1E1E1E] w-[200%] p-4 rounded-lg">
                <p className="text-gray-300 leading-relaxed">
              {stock.name} operates as a company in the Nigerian market. The company provides various services
              and products to its customers, maintaining a strong presence in the local business environment.
            </p>
              </div>
              

               
            </div>

            {/* <div className="bg-[#1E1E1E] p-4 rounded-lg mb-8">
              <div className="text-sm text-gray-400 mb-2">Compare Stocks</div>
              <button className="text-[#00B087] text-sm">Select stocks to compare</button>
            </div> */}

            {/* <div className="mb-8">
              <StockChart />
            </div>
 */}
            <div className="bg-[#1E1E1E] p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Market Stats</h3>
              <table className="w-full">
                <tbody className="space-y-4">
                  <tr className="flex justify-between py-2">
                    <td className="text-gray-400 border-b border-white w-[25%]">High</td>
                    <td className="font-medium border-b border-white w-[25%]">{stats.high}</td>
                  </tr>
                  <tr className="flex justify-between py-2">
                    <td className="text-gray-400 border-b border-white w-[25%]">Low</td>
                    <td className="font-medium border-b border-white w-[25%]">{stats.low}</td>
                  </tr>
                  <tr className="flex justify-between py-2">
                    <td className="text-gray-400 border-b border-white w-[25%]">Avg Volume</td>
                    <td className="font-medium border-b border-white w-[25%]">{stats.avgVol}</td>
                  </tr>
                  <tr className="flex justify-between py-2">
                    <td className="text-gray-400 border-b border-white w-[25%]">Market Cap</td>
                    <td className="font-medium border-b border-white w-[25%]">{stats.mktCap}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <>
            <div className="mb-8 h-48">
              <StockChart />
            </div>
            <StockMetrics price={stock.price} />
          </>
        )}
      </div>
    </div>
  );
}

export default StockDetail;