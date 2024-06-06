import { Primarytext } from "@/components/atoms/primary-text/page";

interface CardProps {
  name?: string;
  heading?: string;
  date?: string;
  email?: string;
}
export const CardModal: React.FC<CardProps> = ({
  name,
  heading,
  date,
  email,
}) => {
  return (
    <div className="h-full  rounded-lg ">
      <div className="text-center">
        <Primarytext>{heading}</Primarytext>{" "}
      </div>
      <div className="p-6">
        <Primarytext>Address</Primarytext>
        <h2 className="tracking-widest text-xs title-font font-medium mt-3 mb-4 text-cyan-600 ">
          {name}
        </h2>
        <Primarytext>Date</Primarytext>
        <h1 className="title-font text-lg font-medium mt-3 mb-4 text-cyan-600">
          {date}
        </h1>
        <Primarytext>Name / Email</Primarytext>
        <p className="leading-relaxed mt-3 mb-4 text-cyan-600">{email}</p>
      </div>
    </div>
  );
};

export default CardModal;
