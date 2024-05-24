"use client";


import Card from "@/components/card/page";
import { BiChevronRight } from "react-icons/bi";
import DashbaordPage from "../main-layout";
import { Primarytext } from "@/components/primary-text/page";
import { rentAdvanceData } from "@/constants/card-data";
import { useState } from "react";
import { CommonModal } from "@/components/common-modal/page";
import { MdClose } from "react-icons/md";
import CardModal from "@/components/card-modal/page";

interface RentAdvanceProps {
  number: string;
  para: string;
  date: string;
  title: string;
}

const RentAdvance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvc, setSelectedAdvc] = useState<RentAdvanceProps | null>(null);
  const RENTADVANCE = "Rent Advance"
  const openModal = (advc:RentAdvanceProps) => {
    setSelectedAdvc(advc)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DashbaordPage>
        <Primarytext className="text-center py-10">{RENTADVANCE}</Primarytext>
      <div className="container max-w-3xl mx-auto space-y-2">
        {rentAdvanceData.map((advc, index) => (
          <Card
            key={index}
            number={advc.number}
            para={advc.para}
            phoneNumber={advc.date}
            title={advc.title}
            icon={<BiChevronRight size={34} />}
            onClick={() => openModal(advc)}
          />
        ))}
      </div>
      {isModalOpen && selectedAdvc && (
          <CommonModal isOpen={isModalOpen} closeModal={closeModal}>
            <div
              className="flex justify-end cursor-pointer"
              onClick={closeModal}
            >
              <MdClose size={26} />
            </div>
            <CardModal
                name={selectedAdvc.number}
                date={selectedAdvc.date}
                email={selectedAdvc.title}
              />
          </CommonModal>
        )}
    </DashbaordPage>
  );
};

export default RentAdvance;
