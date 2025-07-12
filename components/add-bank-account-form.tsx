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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import banks from "@/data/bank.json";
import { useTelegramWebApp } from "@/hooks/use-telegram";

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
    const { bank, accountNumber } = data
    mutate({ bank, accountNumber, slug })
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
                  <Label htmlFor="email">Account Number</Label>
                  <Input
                    type="number"
                    placeholder="1234567890"
                    maxLength={10}
                    required
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Please enter a valid email address',
                      }
                    })}
                  />
                  <ErrorMessage message={errors.email?.message} />
                </div>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Banks" />
                  </SelectTrigger>
                  <SelectContent>
                    {banks.map((bank, index) => (
                      <SelectItem key={`${bank.code}-${index}`} value={bank.code}>
                        {bank.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

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
