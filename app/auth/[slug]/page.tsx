"use client"

import { GalleryVerticalEnd } from "lucide-react"
import { CompleteSignUpForm } from "@/components/complete-signup-form"
import { use } from 'react';

interface Props {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: Props) {
  const { slug } = use(params);

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Dammie AI.
        </a>
        <CompleteSignUpForm slug={slug} />
      </div>
    </div>
  )
}
