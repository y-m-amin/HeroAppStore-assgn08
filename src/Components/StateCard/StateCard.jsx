const StateCard = ({ title, bgColor }) => {
  return (
    <div className={`rounded-xl p-6 text-white ${bgColor}`}>
      <h3 className='text-xl font-semibold'>{title}</h3>
      <p className='mt-2 text-sm opacity-80'>Some quick information here.</p>
    </div>
  );
};

export default StateCard;
