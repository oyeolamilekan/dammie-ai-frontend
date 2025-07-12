import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FieldValues, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ErrorMessage } from "@/components/ui/input-error"
import { useMutation } from "@tanstack/react-query";
import { addBankAccount } from "@/endpoints/api";
import { toast } from "sonner";
import { AxiosError } from "axios";
import banks from "@/data/bank.json";
import { useTelegramWebApp } from "@/hooks/use-telegram";
import { Select } from "@/components/ui/select";

interface LoginFormProps extends React.ComponentProps<"div"> {
  slug: string;
}

export function AddBankAccountForm({
  className,
  slug,
  ...props
}: LoginFormProps) {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { closeMiniApp } = useTelegramWebApp();

  const onSubmit = async (data: FieldValues) => {
    const { bankCode, accountNumber } = data
    mutate({ bankCode, accountNumber, slug })
  };

  const { isPending, mutate } = useMutation({
    mutationFn: addBankAccount,
    onSuccess() {
      toast.success("Account created successfully!");
      closeMiniApp();
    },
    onError(err: AxiosError<{ message: string }>) {
      const message = err.response?.data?.message || "Something went wrong.";
      toast.error(message);
    },
  })

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">How far Chief</CardTitle>
          <CardDescription>
            Add your bank account account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input
                    id="accountNumber"
                    type="text"
                    placeholder="1234567890"
                    maxLength={10}
                    required
                    {...register('accountNumber', {
                      required: 'Account number is required',
                      pattern: {
                        value: /^[0-9]{10,11}$/,
                        message: 'Account number must be 10 digits only',
                      },
                      minLength: {
                        value: 10,
                        message: 'Account number must be at least 10 digits'
                      },
                      maxLength: {
                        value: 11,
                        message: 'Account number cannot exceed 10 digits'
                      },
                      validate: {
                        numbersOnly: (value) =>
                          /^[0-9]+$/.test(value) || 'Account number must contain only numbers',
                        notAllSame: (value) =>
                          !(/^(\d)\1+$/.test(value)) || 'Account number cannot be all the same digit'
                      }
                    })}
                  />
                  <ErrorMessage message={errors.accountNumber?.message} />
                </div>

                <Select 
                  options={banks as []}
                  required
                  {...register('bankCode', {
                    required: 'Bank code is required',
                  })}
                />
                <ErrorMessage message={errors.bankCode?.message} />

                <Button type="submit" className="w-full">
                  {isPending ? "Loading" : "Add Bank Account"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
