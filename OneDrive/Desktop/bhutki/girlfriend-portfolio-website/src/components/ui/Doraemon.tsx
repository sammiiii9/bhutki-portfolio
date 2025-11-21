import { motion } from 'framer-motion';

interface DoraemonProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Doraemon: React.FC<DoraemonProps> = ({ size = 'large', className = '' }) => {
  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-40 h-40',
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      {/* Doraemon Body - Blue Circle */}
      <div className="absolute inset-0 bg-blue-500 rounded-full shadow-2xl border-4 border-blue-600"></div>
      
      {/* White Face/Belly */}
      <div className="absolute top-[15%] left-[15%] w-[70%] h-[70%] bg-white rounded-full border-2 border-gray-300"></div>
      
      {/* Eyes */}
      <div className="absolute top-[25%] left-[25%] w-[20%] h-[25%] bg-white rounded-full border-2 border-black">
        <div className="absolute bottom-0 right-[20%] w-[40%] h-[40%] bg-black rounded-full"></div>
      </div>
      <div className="absolute top-[25%] right-[25%] w-[20%] h-[25%] bg-white rounded-full border-2 border-black">
        <div className="absolute bottom-0 left-[20%] w-[40%] h-[40%] bg-black rounded-full"></div>
      </div>
      
      {/* Red Nose */}
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 w-[15%] h-[15%] bg-red-500 rounded-full border-2 border-red-600"></div>
      
      {/* Whiskers - Left */}
      <div className="absolute top-[48%] left-[5%] w-[25%] h-[2px] bg-black"></div>
      <div className="absolute top-[55%] left-[5%] w-[25%] h-[2px] bg-black"></div>
      
      {/* Whiskers - Right */}
      <div className="absolute top-[48%] right-[5%] w-[25%] h-[2px] bg-black"></div>
      <div className="absolute top-[55%] right-[5%] w-[25%] h-[2px] bg-black"></div>
      
      {/* Smile */}
      <div className="absolute top-[58%] left-1/2 transform -translate-x-1/2 w-[30%] h-[15%] border-b-2 border-black rounded-b-full"></div>
      
      {/* Bell */}
      <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 w-[20%] h-[20%] bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-lg">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-yellow-600 rounded-full"></div>
      </div>
      
      {/* Bell String */}
      <div className="absolute bottom-[35%] left-1/2 transform -translate-x-1/2 w-[2px] h-[20%] bg-red-600"></div>
    </div>
  );
};
