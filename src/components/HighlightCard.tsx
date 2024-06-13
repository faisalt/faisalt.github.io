type HighlightCardProps = {
  ctaMedia: React.ReactNode;
  description: React.ReactNode;
};

const HighlightCard: React.FC<HighlightCardProps> = ({
  ctaMedia,
  description,
}) => {
  return (
    <div className='py-8 px-8 bg-gray-800'>
      <div className='min-h-80'>{ctaMedia}</div>
      <div className='mt-6'>{description}</div>
    </div>
  );
};

export default HighlightCard;
