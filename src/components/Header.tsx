import classNames from 'classnames';
import React from 'react';

type HeaderProps = {
  title: string;
  focussed?: boolean;
};

const Header: React.FC<HeaderProps> = ({ title, focussed }) => {
  return (
    <header className='w-full bg-gray-700'>
      <div
        className={classNames(
          'max-w-7xl mr-auto ml-auto px-6',
          { 'py-10': !focussed },
          { 'py-4': focussed },
        )}
      >
        {focussed ? (
          <nav className='text-slate-50 flex items-center'>
            <div>
              <a
                href='/'
                title='Home'
                className='text-2xl focus:bg-yellow-200 focus:text-blue-700 focus:outline-none'
              >
                <i className='fa fa-home' aria-hidden='true'></i>
              </a>
            </div>
            <i className='fa fa-chevron-right ml-4' aria-hidden='true'></i>
            <h1 className='ml-4 text-2xl'>{title}</h1>
          </nav>
        ) : (
          <div className='text-center'>
            <h1 className='text-4xl'>{title}</h1>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
