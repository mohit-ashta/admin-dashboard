"use client";

import { useState } from "react";
import Card from "@/components/card/page";
import DashboardPage from "../main-layout";
import { Primarytext } from "@/components/primary-text/page";
import { BiChevronRight } from "react-icons/bi";
import { jobLossData } from "@/constants/card-data";
import { MdClose } from "react-icons/md";
import CardModal from "@/components/card-modal/page";
import { CommonModal } from "@/components/common-modal/page";


interface JobLossClaimsProps {
  number: string;
  para: string;
  date: string;
  title: string;
}
const JobLossClaims = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobData, setSelectedJobData] = useState<JobLossClaimsProps | null>(null);
  const JOBLOSSCLAIMS = "Job Loss Claims";
  const openModal = (jobData:JobLossClaimsProps) => {
    setSelectedJobData(jobData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <DashboardPage>
        <Primarytext className="text-center py-10">{JOBLOSSCLAIMS}</Primarytext>
        <div className="container max-w-3xl mx-auto space-y-2">
          {jobLossData.map((job, index) => (
            <Card
              key={index}
              number={job.number}
              para={job.para}
              phoneNumber={job.date}
              title={job.title}
              icon={<BiChevronRight size={34} />}
              onClick={() => openModal(job)}
            />
          ))}
          {isModalOpen && selectedJobData && (
            <CommonModal isOpen={isModalOpen} closeModal={closeModal}>
              <div
                className="flex justify-end cursor-pointer"
                onClick={closeModal}
              >
                <MdClose size={26} />
              </div>
              <CardModal
              heading={selectedJobData.para}
                name={selectedJobData.number}
                date={selectedJobData.date}
                email={selectedJobData.title}
              />
            </CommonModal>
          )}
        </div>
      </DashboardPage>
    </>
  );
};

export default JobLossClaims;
