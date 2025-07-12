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
import { completeAccount } from "@/endpoints/api";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useTelegramWebApp } from "@/hooks/use-telegram";

interface LoginFormProps extends React.ComponentProps<"div"> {
  slug: string;
}

export function CompleteSignUpForm({
  className,
  slug,
  ...props
}: LoginFormProps) {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { closeMiniApp } = useTelegramWebApp();

  const onSubmit = async (data: FieldValues) => {
    const { email, firstName, lastName, bvnNumber, transactionPin } = data
    mutate({ email, firstName, lastName, bvnNumber, transactionPin, slug }) // Replace "some-id" with actual user ID;
  };

  const { isPending, mutate } = useMutation({
    mutationFn: completeAccount,
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
          <CardTitle className="text-xl">Welcome Boss</CardTitle>
          <CardDescription>
            Complete your signup and let&apos;s start trading
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="m@example.com"
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

                <div className="grid gap-3">
                  <Label htmlFor="First Name">First Name</Label>
                  <Input
                    type="text"
                    placeholder="Adigun"
                    required
                    {...register('firstName', {
                      required: "First name is required"
                    })}
                  />
                  <ErrorMessage message={errors.first_name?.message} />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="Last Name">Last Name</Label>
                  <Input
                    type="text"
                    placeholder="Efon"
                    required
                    {...register('lastName', {
                      required: "Last name is required"
                    })}
                  />
                  <ErrorMessage message={errors.last_name?.message} />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="Bvn Number">Bvn Number</Label>
                  <Input
                    type="text"
                    placeholder="20393****"
                    required
                    {...register('bvnNumber', {
                      required: "Last name is required"
                    })}
                  />
                  <ErrorMessage message={errors.bvn_number?.message} />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="Transaction pin">Transaction Pin</Label>
                  </div>
                  <Input
                    type="password"
                    placeholder="****"
                    maxLength={4}
                    minLength={4}
                    required
                    {...register('transactionPin', {
                      required: "Transaction pin is required"
                    })}
                  />
                </div>
                <Button type="submit" className="w-full">
                  {isPending ? "Loading" : "Complete Signup"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
