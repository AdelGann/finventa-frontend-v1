import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { onValidateError } from "@/lib/helpers/onValidateError";
import { useAuthStore } from "@/store/AuthState/AuthStore";
import { SEO } from "@/components/custom/SEO";
import { Lock, Mail } from "lucide-react";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
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
      <SEO title="Finventa - Login" description="Inicia sesión en tu cuenta" />
      <div className="min-h-screen flex">
        {/* Left Side - Image/Gradient */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
            <div className="max-w-md space-y-6">
              <h1 className="text-5xl font-bold">Finventa</h1>
              <p className="text-xl text-white/90">
                Sistema de gestión empresarial moderno y eficiente
              </p>
              <div className="space-y-4 pt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-lg mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Gestión Integral</h3>
                    <p className="text-white/80">Controla clientes, productos y órdenes desde un solo lugar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-lg mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Reportes en Tiempo Real</h3>
                    <p className="text-white/80">Visualiza métricas y estadísticas actualizadas</p>
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
              <h2 className="text-3xl font-bold tracking-tight">Bienvenido de nuevo</h2>
              <p className="text-muted-foreground mt-2">
                Ingresa tus credenciales para acceder a tu cuenta
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
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
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="remember" className="text-sm text-muted-foreground">
                    Recordarme
                  </label>
                </div>
                <Button type="button" variant="link" className="px-0 text-sm">
                  ¿Olvidaste tu contraseña?
                </Button>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Iniciar Sesión
              </Button>

              <div className="text-center text-sm">
                <span className="text-muted-foreground">¿No tienes una cuenta? </span>
                <Link to="/register" className="text-primary hover:underline font-medium">
                  Regístrate aquí
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
