import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { onValidateError } from "@/lib/helpers/onValidateError";
import { SEO } from "@/components/custom/SEO";
import { Lock, Mail, User } from "lucide-react";

const validationSchema = Yup.object().shape({
	full_name: Yup.string().required("Full name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string().required("Password is required"),
	repeat_password: Yup.string().required("Repeat password is required"),
});

const Register = () => {
	const { values, handleChange, handleSubmit } = useFormik<{
		full_name: string;
		email: string;
		password: string;
		repeat_password: string;
	}>({
		initialValues: {
			full_name: "",
			email: "",
			password: "",
			repeat_password: "",
		},
		validateOnBlur: false,
		validateOnChange: false,
		validate: (values) => onValidateError(validationSchema, values),
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<>
			<SEO title="Finventa - Registro" description="Crea tu cuenta en Finventa" />
			<div className="min-h-screen flex">
				{/* Left Side - Image/Gradient */}
				<div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 relative overflow-hidden">
					<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
					<div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
						<div className="max-w-md space-y-6">
							<h1 className="text-5xl font-bold">Únete a Finventa</h1>
							<p className="text-xl text-white/90">
								Comienza a gestionar tu negocio de manera profesional
							</p>
							<div className="space-y-4 pt-8">
								<div className="flex items-start gap-3">
									<div className="bg-white/20 p-2 rounded-lg mt-1">
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
										</svg>
									</div>
									<div>
										<h3 className="font-semibold text-lg">Seguro y Confiable</h3>
										<p className="text-white/80">Tus datos están protegidos con encriptación de nivel empresarial</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="bg-white/20 p-2 rounded-lg mt-1">
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
									</div>
									<div>
										<h3 className="font-semibold text-lg">Rápido y Eficiente</h3>
										<p className="text-white/80">Configura tu cuenta en menos de 2 minutos</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Right Side - Form */}
				<div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
					<div className="w-full max-w-md space-y-8 animate-in fade-in duration-500">
						<div className="text-center lg:text-left">
							<h2 className="text-3xl font-bold tracking-tight">Crear cuenta</h2>
							<p className="text-muted-foreground mt-2">
								Completa el formulario para comenzar
							</p>
						</div>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="full_name">Nombre Completo</Label>
									<div className="relative">
										<User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
										<Input
											id="full_name"
											name="full_name"
											type="text"
											placeholder="Juan Pérez"
											className="pl-10"
											value={values.full_name}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="email">Correo Electrónico</Label>
									<div className="relative">
										<Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
										<Input
											id="email"
											name="email"
											type="email"
											placeholder="tu@email.com"
											className="pl-10"
											value={values.email}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="password">Contraseña</Label>
									<div className="relative">
										<Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
										<Input
											id="password"
											name="password"
											type="password"
											placeholder="••••••••"
											className="pl-10"
											value={values.password}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="repeat_password">Confirmar Contraseña</Label>
									<div className="relative">
										<Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
										<Input
											id="repeat_password"
											name="repeat_password"
											type="password"
											placeholder="••••••••"
											className="pl-10"
											value={values.repeat_password}
											onChange={handleChange}
										/>
									</div>
								</div>
							</div>

							<div className="flex items-start space-x-2">
								<input
									type="checkbox"
									id="terms"
									className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary mt-1"
								/>
								<label htmlFor="terms" className="text-sm text-muted-foreground">
									Acepto los{" "}
									<a href="#" className="text-primary hover:underline">
										términos y condiciones
									</a>{" "}
									y la{" "}
									<a href="#" className="text-primary hover:underline">
										política de privacidad
									</a>
								</label>
							</div>

							<Button type="submit" className="w-full" size="lg">
								Crear Cuenta
							</Button>

							<div className="text-center text-sm">
								<span className="text-muted-foreground">¿Ya tienes una cuenta? </span>
								<Link to="/login" className="text-primary hover:underline font-medium">
									Inicia sesión
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
