const Service = () => {
  const service = {
    name: 'Adult Cut',
    duration: '30 minutes',
    price: '$300',
    description: 'Looking for a quick haircut? This is the one for you.',
  };

  return (
    <div>
      <div className="title">{service.name}</div>

      <div className="contents">
        <div>
          <div>{service.duration}</div>

          <div>{service.description}</div>
        </div>

        <div>{service.price}</div>
      </div>
    </div>
  );
};

export default Service;
