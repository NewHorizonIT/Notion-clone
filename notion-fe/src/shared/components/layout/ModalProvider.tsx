// components/providers/ModalProvider.tsx
"use client";

import { ForgetPasswordModal } from "@/features/auth/components/modals/ForgetPassword";
import { useModalStore } from "@/shared/store/useModalStore";

export function ModalProvider() {
  const { modalType, modalProps, closeModal } = useModalStore();

  return (
    <>
      {modalType === "forget-password" && (
        <ForgetPasswordModal open onOpenChange={closeModal} {...modalProps} />
      )}
    </>
  );
}
