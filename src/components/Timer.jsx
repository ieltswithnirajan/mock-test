import { useState, useEffect } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60); // Convert minutes to seconds
  const [isRunning, setIsRunning] = useState(true);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatTime = (value) => value.toString().padStart(2, '0');

  const getTimerColor = () => {
    if (isWarning) return 'text-yellow-600';
    if (timeLeft < 300) return 'text-red-600'; // Less than 5 minutes
    return 'text-green-600';
  };

  return (
    <div className="fixed top-0 right-0 m-4 bg-white rounded-lg shadow-lg p-4 z-50">
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-900">
          {formatTime(minutes)}:{formatTime(seconds)}
        </div>
        <div className="text-sm text-gray-600">Time Remaining</div>
      </div>
      <div className="mt-2 text-center">
        <ClockIcon className={`h-6 w-6 ${getTimerColor()}`} />
      </div>
      {timeLeft <= 300 && (
        <div className="mt-2 bg-yellow-50 p-3 rounded-lg shadow text-sm text-yellow-800">
          ⚠️ Less than 5 minutes remaining!
        </div>
      )}
    </div>
  );
};

export default Timer; 