'use client';

import OtpLogin from "@/components/OtpLogin";

export default function Home() {
  return (
    <main className="text-center">
      <div>Phone OTP Authentication</div>

      <OtpLogin />
    </main>
  );
}
