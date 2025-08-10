import { BackgroundDots } from "@/components/ui/BackgroundDots";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { onValidateError } from "@/lib/helpers/onValidateError";
import { useAuthStore } from "@/store/AuthState/AuthStore";
import { motion } from "framer-motion";
import { useRef } from "react";
import { SEO } from "@/components/custom/SEO";

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string().required("Password is required"),
});

const Login = () => {
	const contentRef = useRef<HTMLDivElement | null>(null);
	const login = useAuthStore((state) => state.login);
	const { values, handleChange, handleSubmit } = useFormik<{
		email: string;
		password: string;
	}>({
		initialValues: {
			email: "",
			password: "",
		},
		validateOnBlur: false,
		validateOnChange: false,
		validate: (values) => onValidateError(validationSchema, values),
		onSubmit: (values) => {
			console.log(values);
			login("mocked_token");
		},
	});
	return (
		<>
			<SEO title="Z0 - Login" description="Login into your account" />
			<BackgroundDots blockRef={contentRef as React.RefObject<HTMLDivElement>} allowPointerEvents>
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className="relative w-full h-screen z-20 flex items-center justify-center"
				>
					<div
						ref={contentRef}
						className="flex flex-col w-[80vw] h-[60vh] lg:h-[45vh] sm:max-w-[50vw] lg:max-w-[50vw] xl:max-w-[25vw] p-5 justify-center content-center shadow-lg shadow-black/20 dark:shadow-white/20 bg-white dark:bg-neutral-900 rounded-lg overflow-y-auto"
					>
						<div className="flex flex-col justify-between h-full">
							<div className="flex flex-col gap-2 p-4">
								<h4 className="text-2xl font-bold">Welcome to Z0 Platform</h4>
								<p className="text-sm text-neutral-500 font-bold">
									Login to your account to continue using Z0 Platform
								</p>
							</div>
							<form
								noValidate
								onSubmit={handleSubmit}
								className="flex items-center flex-col gap-4 w-full p-4"
							>
								<div className="flex flex-col gap-2 w-full">
									<Label htmlFor="email">Email:</Label>
									<Input
										placeholder="Email"
										name="email"
										onChange={handleChange}
										value={values.email}
										className="bg-white dark:bg-neutral-900"
									/>
								</div>
								<div className="flex flex-col gap-2 w-full">
									<Label htmlFor="password">Password:</Label>
									<Input
										placeholder="Password"
										name="password"
										onChange={handleChange}
										value={values.password}
										className="bg-white dark:bg-neutral-900"
										type="password"
									/>
								</div>
								<div className="flex flex-col gap-2 w-full">
									<Button type="submit" className="cursor-pointer">
										Login
									</Button>
									<div className="flex justify-end gap-2 w-full">
										<Button type="button" variant="link" className="cursor-pointer">
											Forgot password?
										</Button>
									</div>
									<div className="flex items-center gap-2 w-full justify-center">
										<label className="text-sm text-neutral-500">
											Don't have an account? <Link to="/register">Join us!</Link>
										</label>
									</div>
								</div>
							</form>
							<div className="overflow-hidden"></div>
						</div>
					</div>
				</motion.div>
			</BackgroundDots>
		</>
	);
};
export default Login;
