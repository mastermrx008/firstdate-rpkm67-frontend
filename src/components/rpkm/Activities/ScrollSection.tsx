import { StaticImageData } from 'next/image';
import Card from './Card';

interface ScrollSectionProps {
  cards: {
    title: string;
    image: StaticImageData;
    content: string;
  }[];
  href: string;
  className?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  cards,
  href,
  className,
}) => {
  return (
    <div className="px-3 pb-3 flex gap-x-2 overscroll-x-contain overflow-y-scroll">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          image={card.image}
          content={card.content}
          href={href}
          className={className}
        />
      ))}
    </div>
  );
};

export default ScrollSection;
