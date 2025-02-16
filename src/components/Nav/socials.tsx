import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type SocialItem = {
  name: string;
  href: string;
  Icon: ReactNode;
};

type SocialProps = {
  socialItems: SocialItem[];
  itemVariants: ItemVariants;
};

type ItemVariants = Variants;

export default function Socials({ socialItems, itemVariants }: SocialProps) {
  return (
    <motion.div variants={itemVariants} className="mt-auto">
      <h3 className="text-xl font-semibold">Connect With Me</h3>
      <hr className="border-gray-300 mb-3" />
      <div className="flex space-x-2">
        {socialItems.map((item, index) => (
          <motion.a
            key={index + 1}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors font-normal"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item.name}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

const ItemVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 },
};
