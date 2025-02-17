/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Variants } from "framer-motion";

type MenuItem = {
  name: string;
  href: string;
};

type UlLinksProps = {
  menuItems: MenuItem[];
  setIsOpen: (isOpen: boolean) => void;
  itemVariants: Variants;
};

const ItemVariants: Variants = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 },
};
export default function UlLinks({
  menuItems,
  setIsOpen,
  itemVariants,
}: UlLinksProps) {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  return (
    <motion.ul className="space-y-6 flex-1 flex flex-col justify-center">
      {menuItems.map((item, index) => (
        <motion.li
          key={item.name}
          variants={itemVariants}
          onHoverStart={() => setActiveIndex(index)}
          onHoverEnd={() => setActiveIndex(-1)}
        >
          <Link
            href={item.href}
            className="text-3xl font-semibold hover:text-gray-300 transition-colors flex items-center justify-between group"
            onClick={() => setIsOpen(false)}
          >
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: activeIndex === index ? 10 : 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              {item.name}
            </motion.span>
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{
                x: activeIndex === index ? 0 : -10,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight size={24} />
            </motion.span>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
