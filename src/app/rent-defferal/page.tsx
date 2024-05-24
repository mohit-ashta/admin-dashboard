"use client";

import { useState } from "react";
import Card from "@/components/card/page";
import DashbaordPage from "../main-layout";

import { Primarytext } from "@/components/primary-text/page";
import { BiChevronRight } from "react-icons/bi";
import { rentDefferalData } from "@/constants/card-data";
import { CommonModal } from "@/components/common-modal/page";
import { MdClose } from "react-icons/md";
import CardModal from "@/components/card-modal/page";

interface RentDefferalProps {
  number: string;
  para: string;
  date: string;
  title: string;
}
const RentDefferal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDeff, setSelectedDeff] = useState<RentDefferalProps | null>(
    null
  );
  const RENTDEFFERAL = "Rent Defferal";
  const openModal = (deff: RentDefferalProps) => {
    setSelectedDeff(deff);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <DashbaordPage>
        {/* <Primarytext className="text-center py-10">{RENTDEFFERAL}</Primarytext>
        <div className="container max-w-3xl mx-auto space-y-2">
          {rentDefferalData.map((deff, index) => (
            <Card
              key={index}
              number={deff.number}
              para={deff.para}
              phoneNumber={deff.date}
              title={deff.title}
              icon={<BiChevronRight size={34} />}
              onClick={() => openModal(deff)}
            />
          ))}
        </div>
        {isModalOpen && selectedDeff && (
          <CommonModal isOpen={isModalOpen} closeModal={closeModal}>
            <div
              className="flex justify-end cursor-pointer"
              onClick={closeModal}
            >
              <MdClose size={26} />
            </div>
            <CardModal
              name={selectedDeff.number}
              date={selectedDeff.date}
              email={selectedDeff.title}
            />
          </CommonModal>
        )} */}
        kkk
      </DashbaordPage>
    </>
  );
};

export default RentDefferal;
