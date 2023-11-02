"use client";

import { Dialog } from "@headlessui/react";
import React from "react";
import { Modal, useUIStore } from "@/zustand/ui";
import { Screen, useScreenStore } from "@/zustand/screen";

const Disclaimer = () => {
  const { modals, setModalOpen } = useUIStore();
  const { setSelectedScreen } = useScreenStore();
  const { disclaimer } = modals;

  const closeModal = () => {
    setModalOpen(Modal.DISCLAIMER, false);
    setSelectedScreen(Screen.SELECT_FEELING);
  };

  return (
    <Dialog
      className="absolute left-0 top-0 flex h-screen w-full"
      open={disclaimer.isOpen}
      onClose={closeModal}
    >
      <Dialog.Panel className="flex h-full w-full items-center justify-center bg-bootstrap-leather">
        <div className="relative w-10/12 max-w-7xl py-8 md:py-14 lg:text-center">
          <button
            className="absolute right-0 top-0 font-semibold text-catalina-tile focus:outline-none"
            onClick={closeModal}
          >
            close
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
