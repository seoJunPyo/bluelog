import React from 'react';

const Img = ({ src, alt }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <img
      src={src ?? '/default.jpg'}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      style={{ opacity: loaded ? 1 : 0 }}
    />
  );
};

export default Img;
