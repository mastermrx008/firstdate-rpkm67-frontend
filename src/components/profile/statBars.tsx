import ProgressDisplay from "./ProgressDisplay";
import { ProgressProps } from "./ProgressDisplay";

export default function StatBars({ stamp }: any) {
  const progressBars: ProgressProps[] = [
    { point: stamp?.pointA || 0, type: 'pointA' },
    { point: stamp?.pointB || 0, type: 'pointB' },
    { point: stamp?.pointC || 0, type: 'pointC' },
    { point: stamp?.pointD || 0, type: 'pointD' },
  ];

  return (
    <div className="flex justify-evenly gap-6">
      {progressBars.map((props, index) => (
        <ProgressDisplay key={index} {...props} />
      ))}
    </div>
  );
}
