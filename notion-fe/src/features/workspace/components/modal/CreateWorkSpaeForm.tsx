"use client";

import { BaseModal } from "@/shared/components/layout/BaseModal";
import { Button } from "@/shared/components/ui/button";
import { useCreateWorkspace, useUpdateWorkspace } from "../../hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateWorkspaceData, createWorkspaceSchema } from "../../validator";
import { Form } from "@/shared/components/ui/form";
import FormFieldCustom from "@/features/auth/components/FormFieldCustom";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { Workspace } from "../../types";
import axios from "axios";

interface CreateWorkSpaceFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  workspaceId?: string;
  initialName?: string;
  onSuccess?: (workspace: Workspace) => void;
}

export default function CreateWorkSpaceForm({
  isOpen,
  onOpenChange,
  workspaceId,
  initialName,
  onSuccess,
}: CreateWorkSpaceFormProps) {
  const { create, isLoading: isCreating } = useCreateWorkspace();
  const { update, isLoading: isUpdating } = useUpdateWorkspace(
    workspaceId || "",
  );
  const isEditMode = Boolean(workspaceId);
  const isLoading = isCreating || isUpdating;

  const form = useForm<CreateWorkspaceData>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: initialName || "",
    },
  });

  const onSubmit = async (data: CreateWorkspaceData) => {
    try {
      const payload = {
        name: data.name.trim(),
      };

      const result = isEditMode ? await update(payload) : await create(payload);

      onSuccess?.(result.data as Workspace);
      toast.success(
        isEditMode
          ? "Cập nhật workspace thành công"
          : "Tạo workspace thành công",
      );
      form.reset({ name: "" });
      onOpenChange(false);
    } catch (error) {
      const fallbackMessage = isEditMode
        ? "Cập nhật workspace thất bại"
        : "Tạo workspace thất bại";

      if (axios.isAxiosError(error)) {
        const messageFromServer =
          (error.response?.data as { message?: string } | undefined)?.message ||
          fallbackMessage;
        toast.error(messageFromServer);
        return;
      }

      toast.error(fallbackMessage);
    }
  };

  return (
    <BaseModal
      title={isEditMode ? "Cập nhật workspace" : "Tạo workspace mới"}
      open={isOpen}
      onOpenChange={onOpenChange}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <FormFieldCustom
              control={form.control}
              name="name"
              label="Tên workspace"
              placeholder="Workspace của tôi"
              type="text"
              icon={<Mail />}
            />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Hủy
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Đang xử lý..." : isEditMode ? "Cập nhật" : "Tạo"}
            </Button>
          </div>
        </form>
      </Form>
    </BaseModal>
  );
}
