interface MemberNameProps {
  name: string;
  surname: string;
}
const MemberName: React.FC<MemberNameProps> = ({ name, surname }) => {
  return (
    <div className="flex flex-col items-center text-clip break-all text-center w-full gap-1">
      {name !== '' && surname !== '' ? (
        <>
          <span className="font-athiti font-medium text-white">{name}</span>
          <span className="font-athiti font-medium text-white">{surname}</span>
        </>
      ) : (
        <>
          <span className="font-athiti font-medium text-[36px] text-white">
            -
          </span>
        </>
      )}
    </div>
  );
};

export default MemberName;
