import classNames from 'classnames';
import Header from '../components/Header';
import Slice from '../components/Slice';
import { mediaData } from '../copy';

const Media = () => {
  return (
    <>
      <Header title='Media' focussed />
      <div className='mt-10'>
        {mediaData.map((media, index) => (
          <Slice
            key={media.title}
            bgColor={classNames({
              'bg-white': index % 2 === 0,
              'bg-slate-100': index % 2 !== 0,
            })}
          >
            <a
              href={media.url}
              className='inline-block mt-8 '
              title={media.title}
            >
              <img src={media.image} className='' />
            </a>
            <h2 className='mt-6 text-2xl text-slate-900'>{media.title}</h2>
            <p className='mt-4 text-blue-950'>{media.description}</p>
          </Slice>
        ))}
      </div>
    </>
  );
};

export default Media;
