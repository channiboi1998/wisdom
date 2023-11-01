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
      className="min-h-screen absolute top-0 left-0 w-full flex flex-row items-center justify-center z-40 bg-bootstrap-leather"
      open={disclaimer.isOpen}
      onClose={closeModal}
    >
      <Dialog.Panel className="max-w-xl bg-white p-5">
        <div className="flex flex-row justify-between items-center">
          <p>Hi There!</p>
          <button onClick={closeModal}>
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>
        <p>
          Before you begin, we wish to emphasise that this service is not a
          substitute for professional mental health assistance. If you are
          facing a crisis, we encourage you to call or text a mental health
          support line available in your area. Throughout your experience here,
          if you ever find that your emotions become too uncomfortable, don’t
          hesitate to step away and prioritise your self-care.
        </p>
        <p>
          We recognise that mental health support varies from person to person,
          and our platform may not be the perfect fit for everyone. Please feel
          free to take what resonates with you and leave what does not. Our
          ultimate hope is that you find the support you need and rightfully
          deserve.
        </p>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Disclaimer;
