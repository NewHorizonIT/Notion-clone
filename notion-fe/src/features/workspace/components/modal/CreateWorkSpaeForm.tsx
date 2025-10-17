"use client";

import { BaseModal } from "@/shared/components/layout/BaseModal";
import { Button } from "@/shared/components/ui/button";
import { useCreateWorkspace } from "../../hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateWorkspaceData, createWorkspaceSchema } from "../../validator";
import { Form } from "@/shared/components/ui/form";
import FormFieldCustom from "@/features/auth/components/FormFieldCustom";
import { Mail } from "lucide-react";
import { da } from "date-fns/locale";

interface CreateWorkSpaceFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateWorkSpaceForm({
  isOpen,
  onOpenChange,
}: CreateWorkSpaceFormProps) {
  const { mutateWorkspace } = useCreateWorkspace();
  const onSubmit = (data: CreateWorkspaceData) => {
    console.log(data);
    mutateWorkspace(data);
    onOpenChange(false);
  };
  const form = useForm<CreateWorkspaceData>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  return (
    <BaseModal
      title="Create new Workspace"
      open={isOpen}
      onOpenChange={onOpenChange}
    >
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4 text-black">
            <FormFieldCustom
              control={form.control}
              name="name"
              label="Name workspace"
              placeholder="My workspace"
              type="text"
              icon={<Mail />}
            />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Form>
    </BaseModal>
  );
}
