import classNames from 'classnames';
import React from 'react';

type SliceProps = {
  children: React.ReactNode;
  bgColor: string;
  className?: string;
};

const Slice: React.FC<SliceProps> = ({ children, bgColor, className }) => {
  return (
    <section className={classNames('pt-8 pb-12', bgColor, className)}>
      <div className={`max-w-5xl mx-auto px-6`}>{children}</div>
    </section>
  );
};

export default Slice;
