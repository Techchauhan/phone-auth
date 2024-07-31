"use client"
import OtpLogin from "@/components/OtpLogin"

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-center mb-5"> How to add One-Time Password Phone Authentication</h1>

            <OtpLogin />
        </div>

    )
}

export default LoginPage
