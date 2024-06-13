import classNames from 'classnames';
import React from 'react';

type ChipProps = {
  bgColor: string;
  text: string;
  className?: string;
};

const Chip: React.FC<ChipProps> = ({ bgColor, text, className }) => {
  return (
    <div className={classNames('rounded-md', bgColor, className)}>
      <span className='block py-2 px-4 text-nowrap'>{text}</span>
    </div>
  );
};

export default Chip;
