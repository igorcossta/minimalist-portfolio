import Cover from '../../assets/cover.png';

const Box = () => {
  return (
    <div className='h-32 w-full overflow-hidden rounded-md bg-blue-300 drop-shadow-lg hover:cursor-pointer'>
      <img
        src={Cover}
        alt='cover'
        className='h-full w-full object-cover object-top transition duration-500 ease-in-out hover:scale-125 xl:object-center'
      />
    </div>
  );
};

export default Box;
