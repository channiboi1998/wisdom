"use client";

import { Dialog } from "@headlessui/react";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Modal, useUIStore } from "@/zustand/ui";

const Disclaimer = () => {
  const { modals, setModalOpen } = useUIStore();
  const { disclaimer } = modals;

  const closeModal = () => {
    setModalOpen(Modal.DISCLAIMER, false);
  };

  return (
    <Dialog
      className="z-100 absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-bootstrap-leather"
      open={disclaimer.isOpen}
      onClose={closeModal}
    >
      <Dialog.Panel className="relative flex h-full w-10/12 max-w-7xl flex-col items-center justify-center lg:text-center">
        <div className="relative w-full py-8 md:py-14">
          <button className="absolute focus:outline-none right-0 top-0" onClick={closeModal}>
            <XMarkIcon className="h-8 text-catalina-tile lg:h-10" />
          </button>
          <p className="py-2 text-lg tracking-wide text-catalina-tile lg:py-4 lg:text-2xl lg:font-semibold xl:text-4xl">
            Before you begin, we wish to emphasize that this service is not a
            substitute for professional mental health assistance. If you are
            facing a crisis, we encourage you to call or text a mental health
            support line available in your area. If you ever find that your
            emotions become too uncomfortable during your experience here, don’t
            hesitate to step away and prioritize your self-care.
          </p>
          <p className="py-2 text-lg tracking-wide text-catalina-tile lg:py-4 lg:text-2xl lg:font-semibold xl:text-4xl">
            We recognize that mental health support varies from person to
            person, and our platform may not be the right fit for everyone.
            Please feel free to take what resonates with you and leave what does
            not. Our ultimate hope is that you find the support you need and
            rightfully deserve.
          </p>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Disclaimer;
