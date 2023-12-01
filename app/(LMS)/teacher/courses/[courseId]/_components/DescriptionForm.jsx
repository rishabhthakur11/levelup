"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { PencilIcon, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  description: z.string().min(1, {
    message: "Description is required",
  }),
});

function DescriptionForm({ initialData, courseId }) {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing((current) => !current);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: initialData?.description || "",
    },
  });
  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values) => {
    console.log(values);
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Course updated");
      toggleEditing();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course description
        <Button onClick={toggleEditing} variant="ghost">
          {isEditing && (
            <>
              <X className="h-5 w-4 mr-2" />
              Cancel
            </>
          )}
          {!isEditing && (
            <>
              <PencilIcon className="h-5 w-4 mr-2" />
              Edit description
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div className="mt-2">
          <h2
            className={cn(
              "text-sm mt-2",
              !initialData.description && "text-slate-500 italic"
            )}
          >
            {initialData.description || "No description"}
          </h2>
        </div>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      disabled={isSubmitting}
                      placeholder="e.g. 'This course is about...'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}

export default DescriptionForm;
