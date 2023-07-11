import React from 'react';

const useInterSection = callback => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        callback();
      }
    });

    observer.observe(ref.current);
  }, []);

  return ref;
};

export default useInterSection;
