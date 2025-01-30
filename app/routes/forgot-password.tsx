import ForgotPassForm from "~/components/forgot-password-form";

export default function ForgotPassPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ForgotPassForm />
      </div>
    </div>
  )
}