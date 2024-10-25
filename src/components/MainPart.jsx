import { useEffect, useState } from 'react';
import { GoPersonFill } from 'react-icons/go';
import { FaFlag } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { RiDeleteBin2Line } from 'react-icons/ri';
const MainPart = ({ amount, handleAmountDec }) => {
  const [active, setActive] = useState('Available');
  const [data, setData] = useState([]);
  const [selectPlayer, setSelectPlayer] = useState([]);

  const handleActive = (value) => {
    setActive(value);
  };
  useEffect(() => {
    fetch('source.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const handleChoose = (value) => {
    if (amount <= value.biddingPrice) {
      toast.error('Insufficient balance');
      return;
    }
    if (selectPlayer.length === 6) {
      toast.error('Maximum player limit reached');
      return;
    }
    const findValue = selectPlayer.find(
      (value1) => value1.playerId === value.playerId
    );
    if (!findValue) {
      setSelectPlayer([...selectPlayer, value]);
      handleAmountDec(value.biddingPrice);
      toast.success(`${value.name} Selected`);
    } else {
      toast.error('player already selected');
    }
  };
  const handleRemove = (value) => {
    setSelectPlayer(
      selectPlayer.filter((value1) => value1.playerId !== value.playerId)
    );
  };
  return (
    <div className='w-11/12 mx-auto my-14'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-primary text-[28px] leading-9 font-bold'>
            {active === 'Selected'
              ? `Selected Player (${selectPlayer.length}/6)`
              : 'Available Players'}
          </h1>
        </div>
        <div>
          <button
            onClick={() => handleActive('Available')}
            className={`${
              active === 'Available'
                ? 'bg-[#E7FE29] text-primary'
                : 'text-primary/60'
            } px-[30px] py-[14px]  text-[16px] font-bold leading-5 border border-solid border-primary/10 rounded-tl-xl rounded-bl-xl`}
          >
            Available
          </button>
          <button
            onClick={() => handleActive('Selected')}
            className={`${
              active === 'Selected'
                ? 'bg-[#E7FE29] text-primary'
                : 'text-primary/60'
            }  px-[30px] py-[14px]  text-[16px] font-bold leading-5 border border-solid border-primary/10 rounded-tr-xl rounded-br-xl`}
          >
            Selected ({selectPlayer.length})
          </button>
        </div>
      </div>
      {active === 'Available' ? (
        <div className='grid mt-9 grid-cols-3 gap-5'>
          {data?.map((item, i) => {
            return (
              <div
                className='p-6 border border-solid border-primary/10 rounded-2xl'
                key={i}
              >
                <img
                  className='w-full rounded-2xl h-[250px]'
                  src={item.image}
                  alt=''
                />
                <div className='mt-6 mb-4 flex items-center gap-3'>
                  <span className='text-primary/80 text-2xl'>
                    <GoPersonFill />
                  </span>
                  <p className='text-primary text-[20px] font-bold leading-6'>
                    {item.name}
                  </p>
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-3 opacity-50'>
                    <span className=''>
                      <FaFlag className='text-primary' />
                    </span>
                    <p className='text-primary text-[16px] font-normal leading-5'>
                      {item.country}
                    </p>
                  </div>
                  <div>
                    <button className='rounded-lg bg-primary/5 text-[14px]font-normal leading-5 px-4 py-2'>
                      {item.role}
                    </button>
                  </div>
                </div>
                <hr className='border border-primary/10 mt-3 mb-4' />
                <h3 className='text-primary text-[16px] font-bold leading-5'>
                  Rating
                </h3>
                <div className='flex mt-4 justify-between items-center'>
                  <div>
                    <p className='text-primary text-[16px] font-semibold leading-5'>
                      {item.battingType}
                    </p>
                  </div>
                  <div>
                    <p className='text-primary/70 text-[16px] font-normal leading-5'>
                      {item.bowlingType}
                    </p>
                  </div>
                </div>
                <div className='flex mt-4 justify-between items-center'>
                  <div>
                    <p className='text-primary text-[16px] font-semibold leading-5'>
                      Price:${item.biddingPrice}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => handleChoose(item)}
                      className=' rounded-lg border-primary/10 border-solid border text-[14px] font-normal leading-[18px] px-4 py-[9px]'
                    >
                      Choose Player
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className='mt-9'>
          {selectPlayer?.length > 0 ? (
            <>
              {selectPlayer?.map((item, i) => (
                <div
                  key={i}
                  className='p-6 mb-2 rounded-2xl border border-solid border-primary/10 flex justify-between items-center'
                >
                  <div className='flex gap-5 items-center'>
                    <div>
                      <img
                        className='w-[150px] h-[100px] rounded-2xl'
                        src={item.image}
                        alt=''
                      />
                    </div>
                    <div>
                      <h1 className='text-primary mb-2 text-[20px] font-bold leading-6'>
                        {item.name}
                      </h1>
                      <p className='text-primary/70 mb-2  text-[16px] font-normal leading-5'>
                        {item.role}
                      </p>
                      <p className='text-primary/70 text-[16px] font-normal leading-5'>
                        ${item.biddingPrice}
                      </p>
                    </div>
                  </div>
                  <div>
                    <RiDeleteBin2Line
                      onClick={() => handleRemove(item)}
                      className='text-[#F14749] cursor-pointer text-[20px] font-normal leading-5'
                    />
                  </div>
                </div>
              ))}
              <div className='p-2 mt-5 w-fit border bg-white/5 border-[#E7FE29] rounded-2xl'>
                <button
                  onClick={() => handleActive('Available')}
                  className='bg-[#E7FE29] text-primary px-5 py-[14px] rounded-xl text-[16px] font-bold leading-5'
                >
                  Add More Player
                </button>
              </div>
            </>
          ) : (
            <h6 className='text-primary/70 text-[16px] font-normal leading-5'>
              No Player Selected
            </h6>
          )}
        </div>
      )}
    </div>
  );
};

export default MainPart;
