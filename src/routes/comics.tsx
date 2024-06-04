import Header from '../components/Header';
import Slice from '../components/Slice';

const photos = import.meta.glob('../assets/comics/*.jpg', {
  eager: true,
  query: 'url',
  import: 'default',
});

const Comics = () => {
  return (
    <>
      <Header title='Comics' focussed />
      <Slice bgColor='bg-white'>
        <div className='mt-3 text-center'>
          {Object.keys(photos).map((key) => (
            <img
              key={key}
              className='w-full mt-3'
              src={photos[key] as string}
              aria-hidden
            />
          ))}
        </div>
      </Slice>
    </>
  );
};

export default Comics;
