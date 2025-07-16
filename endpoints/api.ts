import { axiosInstance } from "@/config/api";

interface CompleteAccountBody {
  email: string;
  firstName: string;
  lastName: string;
  bvnNumber: string;
  transactionPin: string;
  slug: string;
}

interface BankAccountBody {
  bankCode: string;
  accountNumber: string;
  slug: string;
}

interface ApproveInstantSwapBody {
  code: string;
  slug: string;
}

export const completeAccount = async (body: CompleteAccountBody) => {
    const { data } = await axiosInstance.post(`users/create_user/${body.slug}`, body);
    return data;
}

export const addBankAccount = async (body: BankAccountBody) => {
    const { data } = await axiosInstance.post(`users/add_bank_account/${body.slug}`, body);
    return data;
}

export const approveInstantSwap = async (body: ApproveInstantSwapBody) => {
    const { data } = await axiosInstance.post(`users/approve_transaction/${body.slug}`, body);
    return data;
}