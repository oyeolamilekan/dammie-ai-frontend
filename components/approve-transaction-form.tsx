import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { FieldValues, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { ErrorMessage } from '@/components/ui/input-error';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { approveInstantSwap } from '@/endpoints/api';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useTelegramWebApp } from '@/hooks/use-telegram';


interface ApproveTransactionFormProps extends React.ComponentProps<"div"> {
  slug: string;
}

export function ApproveTransactionForm({ slug, className, ...props }: ApproveTransactionFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const { closeMiniApp } = useTelegramWebApp();

  const onSubmit = async (data: FieldValues) => {
    const { code } = data
    mutate({ code, slug })
  };

  const { isPending, mutate } = useMutation({
    mutationFn: approveInstantSwap,
    onSuccess() {
      toast.success("Swap successfully approved!");
      closeMiniApp();
    },
    onError(err: AxiosError<{ message: string }>) {
      const message = err.response?.data?.message || "Something went wrong.";
      toast.error(message);
    },
  })

  return (
    <div className={cn("flex flex-col gap-6 items-center min-h-screen", className)} {...props}>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">How Far My Boss</CardTitle>
          <CardDescription>
            Complete your transaction
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-3">
              <Input
                type="password"
                placeholder="*****"
                className='text-center'
                maxLength={4}
                required
                {...register('code', {
                  required: 'code is required'
                })}
              />
              <ErrorMessage message={errors.code?.message} />
            </div>
            <Button type="submit" className="w-full mt-4">
              {isPending ? "Loading" : "Complete Transaction"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
