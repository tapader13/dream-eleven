const Hero = () => {
  return (
    <div className='w-11/12 mx-auto bg-black bg-hero-background bg-no-repeat bg-center bg-cover h-[600px] rounded-2xl'>
      <div className='flex flex-col h-full justify-center items-center'>
        <img
          className='w-[250px] h-[200px]'
          src='/public/banner-main.png'
          alt=''
        />
        <h1 className='text-white font-bold text-[40px] mt-6 mb-4 leading-[60px]'>
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className='text-white/70 leading-7 font-medium font-inter text-[24px] mb-6'>
          Beyond Boundaries Beyond Limits
        </p>
        <div className='p-2 w-fit border bg-white/5 border-[#E7FE29] rounded-2xl'>
          <button className='bg-[#E7FE29] text-primary px-5 py-[14px] rounded-xl text-[16px] font-bold leading-5'>
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
