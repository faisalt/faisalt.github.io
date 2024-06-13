import { Link } from 'react-router-dom';
import '../App.css';
import emergeVideo from '../assets/projects/EMERGE.mp4';
import emergePoster from '../assets/projects/emerge-thumbnail.png';
import Header from '../components/Header';
import HighlightCard from '../components/HighlightCard';
import Slice from '../components/Slice';
import { categoryData } from '../copy';

const Root = () => {
  return (
    <>
      <Header title='Faisal Taher' />
      <main>
        <Slice bgColor='bg-emerald-950'>
          <h2 className='text-slate-50 text-2xl'>Professional Summary</h2>
          <p className='mt-2 text-sky-100'>
            I have been a full-stack developer, researcher, user experience
            developer, front-end developer, and I am currently a lead developer.
            I have led various projects, written React, Python and C#
            applications, built a physical 3D bar chart using custom hardware,
            and ran user testing sessions and workshops. I&apos;ve been
            fortunate to have experienced various aspects of development, both
            from a technical and leadership standpoint.
          </p>
          <p className='mt-2 text-sky-100'>
            I love working in a team, especially mobbing and pairing with
            developers, coaching those new to the field, and collaborating with
            stakeholders. It&apos;s a rewarding experience working together,
            delivering outcomes regularly, and reflecting and improving on the
            way we work.
          </p>
          <p className='mt-2 text-sky-100'>
            Technically, my passion ultimately lies with front-end technologies
            and creating beautiful, inclusive, and usable experiences for
            end-users with maintainable, tested, and robust code behind it. To
            achieve this, I believe in investing in the people and their
            motivation and creating a positive work environment, e.g. through
            autonomy, psychological safety, challenges, growth opportunities,
            etc.
          </p>
          <h2 className='mt-4 text-slate-50 text-2xl'>Personal Summary</h2>
          <p className='mt-2 text-sky-100'>
            I'm a dad so free time is a bit limited! I mainly use it to try and
            keep fit through running and going to the gym. I also enjoy cooking.
            When I get a chance I do like to delve into my old hobbies like
            sketching, photography, and playing my guitar. I also want to get
            back into reading sci-fi again.
          </p>
        </Slice>
        <Slice bgColor='bg-gray-600'>
          <h2 className='text-2xl text-slate-50'>Favourite Projects</h2>
          <div className='mt-4 grid md:grid-cols-2 gap-4'>
            <HighlightCard
              ctaMedia={
                <iframe
                  className='h-80 w-full'
                  src='https://www.youtube.com/embed/WaEhLPVNOoU'
                  title='NFC Coffee System'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                ></iframe>
              }
              description={
                <>
                  <p className='text-sky-100 text-md'>
                    This was a personal side project whilst I was working at
                    Jisc. To replace a paper based coffee tracking system we
                    used in the office, I created digital software/hardware
                    system which included:
                    <ul className='list-disc mt-2'>
                      <li className='ml-6'>
                        a python Flask application (server, client, database) to
                        manage users, NFC tags, and their coffee balance
                      </li>
                      <li className='ml-6 mt-1'>
                        a Raspberry Pi connected to an NFC reader to allow
                        people to scan their NFC chip. I also repurposed an old
                        Android phone and wrote a very basic Android application
                        to serve the client-side UI
                      </li>
                    </ul>
                  </p>
                  <p className='mt-2 text-sky-100 text-md'>
                    In a way the development part was the easy bit. The main
                    challenges were around keeping the system operational 24/7
                    as a self-serve tool.
                  </p>
                </>
              }
            />
            <HighlightCard
              ctaMedia={
                <video className='w-full' controls poster={emergePoster}>
                  <source src={emergeVideo} type='video/mp4'></source>
                </video>
              }
              description={
                <>
                  <p className='text-sky-100 text-md'>
                    This was a project I led on whilst I was a Research
                    Associate at Lancaster University, which was to create a
                    physical 3D bar chart. It fed into research around shape
                    changing displays, i.e. imagine if the pixels on your phone
                    could move up and down.
                  </p>
                  <p className='mt-2 text-sky-100 text-md'>
                    It was possibly the most complicated and rewarding
                    undertaking of my career. At the end of it I got experience
                    in CAD modelling, fabricating and building with custom
                    materials using laser cutting and 3D printing, working with
                    electronics, creating a NodeJS app using websockets, working
                    with large complex 2D data structures, and I could honestly
                    go on. I defintely built a lot of resilience as well as
                    confidence.
                  </p>
                </>
              }
            />
          </div>
        </Slice>
        <Slice bgColor='bg-emerald-950'>
          <h2 className='text-2xl text-slate-50'>Portfolio</h2>
          <div className='mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
            {categoryData.map((category) => (
              <div key={category.name} className='mb-4 bg-gray-600'>
                <div className='flex items-center bg-fuchsia-100 min-h-40 text-blue-950 px-6 py-4'>
                  <i
                    className={`fa ${category.icon} fa-2x`}
                    aria-hidden='true'
                  ></i>
                  <p className='ml-4'>{category.description}</p>
                </div>
                <p className='inline-block px-6 mt-4 pb-4'>
                  <Link
                    className='flex items-center hover:underline text-slate-200 hover:text-slate-100 focus:bg-yellow-200 focus:text-blue-700 focus:outline-none'
                    to={category.url}
                  >
                    <span>View {category.name}</span>
                    <span className='ml-2 no-underline'>
                      <i className='fa fa-chevron-right' aria-hidden='true'></i>
                    </span>
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </Slice>
      </main>
    </>
  );
};

export default Root;
