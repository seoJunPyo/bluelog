const formatElapsedDate = date => {
  const timeDiff = (new Date() - date) / 1000;

  if (timeDiff < 30) return '방금';

  if (timeDiff < 60) return `${Math.floor(timeDiff)}초 전`;

  if (timeDiff < 60 * 60) return `${Math.floor(timeDiff / 60)}분 전`;

  if (timeDiff < 60 * 60 * 24) return `${Math.floor(timeDiff / (60 * 60))}시간 전 `;

  if (timeDiff < 60 * 60 * 24 * 7) return `${Math.floor(timeDiff / (60 * 60 * 24))}일 전`;

  if (timeDiff < 60 * 60 * 24 * 7 * 4) return `${Math.floor(timeDiff / (60 * 60 * 24 * 7))}주 전`;

  if (timeDiff < 60 * 60 * 24 * 7 * 4 * 12) return `${Math.floor(timeDiff / (60 * 60 * 24 * 7))}달 전`;

  return `${Math.floor((timeDiff / 60) * 60 * 24 * 7 * 12)}년 전`;
};

export default formatElapsedDate;
