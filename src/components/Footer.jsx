const Footer = () => {
  return (
    <div className='bg-[#06091A]'>
      <div>
        <div className='flex justify-center'>
          <img
            className='w-[150px] h-[150px] border-dashed border-[#ced0d8] border-2'
            src='/logo-footer.png'
            alt=''
          />
        </div>
        <div className='grid mt-14 grid-cols-3 w-11/12 mx-auto'>
          <div>
            <h2 className='text-white font-semibold text-[18px] leading-6'>
              About Us
            </h2>
            <p className='text-white/60 text-[16px] font-normal leading-6 mt-4'>
              We are a passionate team <br /> dedicated to providing the best{' '}
              <br /> services to our customers.
            </p>
          </div>
          <div>
            <h2 className='text-white font-semibold text-[18px] leading-6'>
              Quick Links
            </h2>
            <ul className='text-white/60 text-[16px] font-normal leading-6 mt-4'>
              <li>Home </li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className=' place-content-end'>
            <h2 className='text-white font-semibold text-[18px] leading-6'>
              Subscribe
            </h2>
            <p className='text-white/60 text-[16px] font-normal leading-6 mt-4'>
              Subscribe to our newsletter for the <br /> latest updates.
            </p>
            <div className='mt-4 flex'>
              <input
                className='w-full border-none outline-none py-[14px] rounded-tl-xl rounded-bl-xl px-[30px]'
                placeholder='Enter your email'
                type='text'
              />

              <button className='text-[#040D11] px-[30px] py-[14px] rounded-tr-xl font-bold text-[16px] leading-5 rounded-br-xl bg-inp-background shadow-custom-shadow'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className='mt-12 border-solid border border-white/15' />
        <div className='text-center py-8'>
          <h6 className='text-white/60 text-[16px] font-normal leading-6'>
            @2024 Your Company All Rights Reserved.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
