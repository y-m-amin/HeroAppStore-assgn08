const StateCard = ({ title, data, description }) => {
  return (
    <div className='rounded-xl p-6   flex flex-col justify-between xl:max-w-1/2'>
      <h3 className='text-sm font-semibold mb-2'>{title}</h3>

      <div className='flex items-center justify-between mb-3'>
        <p className='text-5xl font-bold tracking-tight'>{data.text}</p>
        {data.image && (
          <span className='text-5xl opacity-90 ml-2'>{data.image}</span>
        )}
      </div>

      <p className='text-sm  font-light'>{description}</p>
    </div>
  );
};

export default StateCard;
