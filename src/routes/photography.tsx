import Header from '../components/Header';
import Slice from '../components/Slice';

const photos = import.meta.glob('../assets/photography/*.jpg', {
  eager: true,
  query: 'url',
  import: 'default',
});

const Photography = () => {
  return (
    <>
      <Header title='Photography' focussed />
      <Slice bgColor='bg-white'>
        <div className='mt-6 columns-3 gap-1'>
          {Object.keys(photos).map((key) => (
            <img key={key} className='w-full ' src={photos[key] as string} />
          ))}
        </div>
      </Slice>
    </>
  );
};

export default Photography;
