import Icon from '../../assets/blurred_icon.png';
import IconMobile from '../../assets/android-chrome-192x192.png';
import Box from '../../components/box';

const Home = () => {
  return (
    <main className='container mx-auto overflow-hidden'>
      <div className='my-5 grid md:my-0 md:h-screen md:grid-cols-2 md:content-center md:gap-5'>
        {/* my info */}
        <div className='relative mb-5 flex flex-col items-center gap-3 md:mb-0 md:items-end md:justify-center'>
          <img
            src={IconMobile}
            alt='icon-mobile'
            height={92}
            width={93}
            className='absolute -top-11 -right-7 rotate-45 blur-sm md:hidden'
          />
          <img src={Icon} alt='icon' className='hidden md:block' />
          <h1 className='text-dark'>Igor M. Costa</h1>
          <p className='text-center text-light md:max-w-[300px] md:text-right'>
            I've been learning to code for a year. I started with HTML, but have
            really found a passion for backend development.
          </p>
          <span className='w-full text-center font-bold uppercase text-aqua md:text-right'>
            follow me on
          </span>
          <div className='flex items-center justify-center gap-2'>
            <a href='https://github.com/igorcossta'>
              <i class='bi bi-github text-2xl text-dark hover:text-aqua md:text-xl'></i>
            </a>
            <a href='https://www.linkedin.com/in/igorcossta'>
              <i class='bi bi-linkedin text-2xl text-dark hover:text-aqua md:text-xl'></i>
            </a>
          </div>
        </div>

        {/* my projects */}
        {/* <h3 className='text-center text-dark md:hidden'>My Projects</h3> */}
        <div className='h-[380px] overflow-scroll bg-transparent p-5'>
          <div className='grid gap-3'>
            <Box />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
