import classNames from 'classnames';
import Header from '../components/Header';
import Slice from '../components/Slice';
import { projectsData } from '../copy';

const Projects = () => {
  return (
    <>
      <Header title='Projects' focussed />
      {projectsData.map((project, index) => (
        <Slice
          key={project.title}
          bgColor={classNames({
            'bg-white': index % 2 === 0,
            'bg-slate-100': index % 2 !== 0,
          })}
        >
          {project.images.length > 0 && (
            <div
              className={classNames('mt-8', {
                'sm:grid sm:grid-cols-2 sm:gap-4': project.grid,
              })}
            >
              {project.images.map((imgUrl, index) => (
                <img
                  key={`${project.title}-img`}
                  className={classNames('w-full', {
                    'mt-4':
                      !project.grid && project.images.length > 1 && index > 0,
                  })}
                  src={imgUrl}
                  aria-hidden
                />
              ))}
            </div>
          )}

          {project.videos.length > 0 && (
            <div className='mt-8'>
              {project.videos.map((video) => (
                <video
                  key={`${project.title}-video`}
                  className='w-full'
                  controls
                  poster={video.poster}
                >
                  <source src={video.src} type='video/mp4'></source>
                </video>
              ))}
            </div>
          )}

          <h2 className='mt-6 text-2xl text-slate-900'>{project.title}</h2>
          <div className='mt-4'>
            {project.description.map((desc) => (
              <p key={`${project.title}-desc`} className='mt-2 text-blue-950'>
                {desc}
              </p>
            ))}
          </div>
        </Slice>
      ))}
    </>
  );
};

export default Projects;
