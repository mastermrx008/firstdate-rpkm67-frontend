import Image from 'next/image';
interface CardProps {
  imgUrl?: string;
  description?: string;
  num: number;
}
export default function Card(props: CardProps) {
  const { imgUrl, description, num } = props;
  return (
    <div className="h-full w-full">
      <div className="h-3/5 w-full border border-black">
        <Image
          src={imgUrl ?? ''}
          alt={description ?? ''}
          layout="full"
        />
      </div>
      <span className="break-words text-sm">
        {num}.) {description}wdwd
      </span>
    </div>
  );
}
