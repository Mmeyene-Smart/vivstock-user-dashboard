import { BsCurrencyDollar, BsHash } from 'react-icons/bs';
import { TbArrowsExchange2 } from 'react-icons/tb';
import { MdKeyboardArrowRight } from 'react-icons/md';

function StockMetrics({ price }) {
  return (
    <div className=" absolute top-[135%] flex w-[400px] ">
    
    <div className="md:flex md:gap-4 md:mb-4 w-full">
      <div className="flex-1 bg-app-gray rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BsCurrencyDollar size={20} className="text-[#00B087]" />
            <span className="text-sm">Open price</span>
          </div>
          <span className="font-semibold text-sm">₦{price}</span>
        </div>
      </div>

      <div className="flex-1 bg-app-gray rounded-lg p-4 my-2 md:my-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BsHash size={20} className="text-[#00B087]" />
            <span className="text-sm">Volume (24hrs)</span>
          </div>
          <span className="font-semibold text-sm">0</span>
        </div>
      </div>

      {/* <div className="flex-1 h-[80px] bg-app-gray rounded-lg p-4 mb-[20px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 mb-[20px]">
            <TbArrowsExchange2 size={20} className="text-[#00B087]" />
            <span className="text-sm">Compare Stocks</span>
          </div>
          <MdKeyboardArrowRight size={20} className="text-gray-400" />
        </div>
      </div> */}
    </div>
    </div>
  );
}

export default StockMetrics;