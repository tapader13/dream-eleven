const NewsLetter = () => {
  return (
    <div className='relative translate-y-1/2 '>
      <div className='w-11/12 mx-auto p-6 rounded-3xl border-[2px] border-white border-solid bg-white/15'>
        <div className=' bg-hero-background bg-white rounded-3xl bg-no-repeat bg-center bg-cover py-20'>
          <div className='w-[75%] flex flex-col items-center mx-auto'>
            <h1 className='text-primary font-bold text-[32px] leading-[40px]'>
              Subscribe to our Newsletter
            </h1>
            <p className='text-primary/70 inter mt-4 mb-6 font-medium text-[20px] leading-[24px]'>
              Get the latest updates and news right in your inbox!
            </p>
            <div className='flex gap-5'>
              <input
                className='w-full border border-solid border-primary/15 outline-none py-[14px] rounded-xl px-[30px]'
                placeholder='Enter your email'
                type='text'
              />

              <button className='text-[#040D11] px-[30px] py-[14px] rounded-xl font-bold text-[16px] leading-5  bg-newslatter-background shadow-custom-shadow'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
