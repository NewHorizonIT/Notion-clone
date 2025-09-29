"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import React from "react";
import { Control, FieldValues, Path } from "react-hook-form";

interface FormFieldCustomProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  description?: string;
  type?: string;
  icon?: React.ReactNode;
}

export default function FormFieldCustom<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  type = "text",
  icon,
}: FormFieldCustomProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white pb-2">{label}</FormLabel>
          <FormControl>
            <div className="flex items-center bg-gray-800 border border-gray-600 rounded-md px-4 py-2">
              <div className=" text-white min-w-[30px]">{icon}</div>
              <Input
                placeholder={placeholder}
                type={type}
                {...field}
                className="bg-transparent focus:outline-none text-gray-400 flex-1 border-0"
              />
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
