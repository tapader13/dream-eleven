const Navbar = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className='flex justify-between py-5 items-center'>
        <div>
          <img
            className=' border-dashed border-[#121F5E] border-2'
            src='/logo.png'
            alt=''
          />
        </div>
        <div>
          <ul className='flex items-center gap-12 '>
            <li className='text-primary/70 text-[16px] font-normal leading-5'>
              Home
            </li>
            <li className='text-primary/70 text-[16px] font-normal leading-5'>
              Fixture
            </li>
            <li className='text-primary/70 text-[16px] font-normal leading-5'>
              Teams
            </li>
            <li className='text-primary/70 text-[16px] font-normal leading-5'>
              Schedules
            </li>
            <li>
              <button className='flex items-center gap-2 py-4 px-5 rounded-xl border border-solid border-primary/10'>
                <span className='text-primary text-[16px] font-semibold leading-5'>
                  0 Coin
                </span>
                <img src='/dollar 1.png' alt='' />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
