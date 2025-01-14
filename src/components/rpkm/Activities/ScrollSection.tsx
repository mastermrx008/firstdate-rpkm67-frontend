import IActivity from '@/types/activity';
import Card from './Card';

interface ScrollSectionProps {
  cards: IActivity[];
  className?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ cards, className }) => {
  return (
    <div className="px-3 pb-3 flex gap-x-2 overscroll-x-contain overflow-y-scroll">
      {cards.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          image={card.image}
          description={card.description}
          href={`/rpkm/activities/details/${card.id}`}
          className={className}
        />
      ))}
    </div>
  );
};

export default ScrollSection;
