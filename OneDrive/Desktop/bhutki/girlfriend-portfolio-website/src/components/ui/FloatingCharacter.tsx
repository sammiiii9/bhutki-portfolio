import { motion } from 'framer-motion';

interface FloatingCharacterProps {
  element: 'teddybear' | 'unicorn' | 'doll' | 'dolphin' | 'balloon' | 'dorayaki' | 'toy' | 'custom';
  position: { x: number; y: number };
  size?: 'small' | 'medium' | 'large';
  animationSpeed?: number;
  animationType?: 'float' | 'bounce' | 'rotate';
  customEmoji?: string;
}

const ELEMENT_EMOJIS = {
  teddybear: '🧸',
  unicorn: '🦄',
  doll: '👧',
  dolphin: '🐬',
  balloon: '🎈',
  dorayaki: '🍩',
  toy: '🎁',
  custom: '⭐',
};

const SIZE_CLASSES = {
  small: 'text-4xl',
  medium: 'text-6xl',
  large: 'text-8xl',
};

export const FloatingCharacter: React.FC<FloatingCharacterProps> = ({
  element,
  position,
  size = 'medium',
  animationSpeed = 3,
  animationType = 'float',
  customEmoji,
}) => {
  const emoji = customEmoji || ELEMENT_EMOJIS[element];

  const animations = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: animationSpeed,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    bounce: {
      y: [0, -15, 0],
      transition: {
        duration: animationSpeed * 0.7,
        repeat: Infinity,
        ease: 'easeOut',
      },
    },
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: animationSpeed * 5,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <motion.div
      className={`absolute ${SIZE_CLASSES[size]} pointer-events-none select-none z-0`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      animate={animations[animationType]}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {emoji}
    </motion.div>
  );
};
