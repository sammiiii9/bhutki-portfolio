import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CartoonCardProps {
  title: string;
  content: string;
  icon?: ReactNode;
  color?: string;
  animation?: 'bounce' | 'scale' | 'rotate';
  onClick?: () => void;
}

export const CartoonCard: React.FC<CartoonCardProps> = ({
  title,
  content,
  icon,
  color = '#FFFFFF',
  animation = 'scale',
  onClick,
}) => {
  const hoverAnimations = {
    bounce: {
      y: -10,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    scale: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    rotate: {
      rotate: 5,
      scale: 1.03,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="rounded-cartoon p-6 shadow-lg cursor-pointer relative overflow-hidden"
      style={{ backgroundColor: color }}
      whileHover={hoverAnimations[animation]}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {icon && (
        <div className="text-5xl mb-4 flex justify-center">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-heading text-gray-800 mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-700 text-center font-body">
        {content}
      </p>
    </motion.div>
  );
};
