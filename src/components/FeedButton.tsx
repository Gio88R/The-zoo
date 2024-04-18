import React from 'react';

interface FeedAnimalButtonProps {
  onFeed: () => void;
}

const FeedAnimalButton: React.FC<FeedAnimalButtonProps> = ({ onFeed }) => {
  return (
    <button onClick={onFeed}>Mata djur</button>
  );
}

export default FeedAnimalButton;
