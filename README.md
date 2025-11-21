# Finventa Frontend v1

> Sistema de gestión empresarial moderno construido con React 19, TypeScript, y TailwindCSS 4

[![License](https://img.shields.io/badge/license-Custom-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff.svg)](https://vitejs.dev/)

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Arquitectura](#-arquitectura)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Rutas](#-rutas)
- [Componentes](#-componentes)
- [Estado Global](#-estado-global)
- [Licencia](#-licencia)

## 📖 Descripción

**Finventa** es una aplicación web empresarial diseñada para la gestión integral de negocios, incluyendo:

- **Gestión de Clientes**: Registro, edición y visualización detallada de clientes
- **Gestión de Productos**: Catálogo de productos con inventario
- **Gestión de Órdenes**: Creación y seguimiento de órdenes de venta
- **Panel Financiero**: Visualización de cuentas y registros financieros
- **Configuración**: Administración de usuarios, notificaciones y preferencias del sistema
- **Dashboard**: Métricas y estadísticas del negocio en tiempo real

## ✨ Características

### Funcionalidades Principales

- 🎨 **Interfaz Moderna**: Diseño premium con modo oscuro/claro
- 📊 **Dashboard Interactivo**: Gráficos y métricas con ECharts y Recharts
- 🔐 **Autenticación**: Sistema de login y registro
- 👥 **Gestión de Usuarios**: Control de acceso y roles
- 📦 **CRUD Completo**: Operaciones completas para clientes, productos y órdenes
- 🎯 **Navegación Fluida**: Transiciones de vista suaves con View Transition API
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos
- ⚡ **Rendimiento Optimizado**: Lazy loading y code splitting

### Características Técnicas

- **React 19**: Última versión con mejoras de rendimiento
- **TypeScript**: Tipado estático para mayor robustez
- **Vite 6**: Build tool ultra-rápido
- **TailwindCSS 4**: Framework CSS utility-first
- **Shadcn UI**: Componentes accesibles y personalizables
- **React Router 7**: Navegación declarativa con nested routes
- **Zustand**: Estado global ligero y eficiente
- **Formik + Yup**: Validación de formularios
- **Framer Motion**: Animaciones fluidas

## 🏗️ Arquitectura

### Patrón de Diseño

El proyecto sigue una arquitectura **component-based** con separación clara de responsabilidades:

```
┌─────────────────────────────────────────┐
│           App (ThemeProvider)           │
└────────────────┬────────────────────────┘
                 │
        ┌────────┴────────┐
        │   AppRoutes     │
        └────────┬────────┘
                 │
    ┌────────────┴────────────┐
    │                         │
┌───▼────┐              ┌────▼──────┐
│ Landing│              │ Backoffice│
│ Layout │              │  Layout   │
└────────┘              └─────┬─────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
              ┌─────▼─────┐      ┌─────▼─────┐
              │  Content  │      │  Nested   │
              │  Layout   │      │  Layouts  │
              └───────────┘      └───────────┘
```

### Flujo de Datos

1. **Estado Global** (Zustand): Sidebar state, theme preferences
2. **Props Drilling**: Datos de componente padre a hijo
3. **Context API**: Theme provider para modo oscuro/claro
4. **React Router**: Estado de navegación y parámetros de URL

### Routing Strategy

El sistema de rutas utiliza **nested routing** con layouts compartidos:

- **Layout Principal** (`Backoffice`): Header + Sidebar
- **Content Layout**: Wrapper con animaciones
- **Nested Layouts**: Settings tiene su propio sidebar interno

## 🛠️ Tecnologías

### Core

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 19.0.0 | Framework UI |
| TypeScript | 5.7.2 | Tipado estático |
| Vite | 6.2.0 | Build tool |
| React Router | 7.4.0 | Routing |

### UI & Styling

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| TailwindCSS | 4.0.15 | Framework CSS |
| Shadcn UI | - | Componentes base |
| Radix UI | - | Primitivos accesibles |
| Lucide React | 0.484.0 | Iconos |
| Framer Motion | 12.6.1 | Animaciones |

### Data & Forms

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Tanstack Table | 8.21.3 | Tablas de datos |
| Formik | 2.4.6 | Gestión de formularios |
| Yup | 1.6.1 | Validación de esquemas |
| Axios | 1.11.0 | Cliente HTTP |

### Charts & Visualization

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| ECharts | 5.6.0 | Gráficos avanzados |
| Recharts | 2.15.3 | Gráficos React |

### State Management

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Zustand | 5.0.3 | Estado global |

## 🚀 Instalación

### Requisitos Previos

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0 (recomendado) o npm

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/AdelGann/finventa-frontend-v1.git
cd finventa-frontend-v1
```

2. **Instalar dependencias**

```bash
# Con pnpm (recomendado)
pnpm install

# O con npm
npm install
```

3. **Configurar variables de entorno**

```bash
cp .env.example .env
```

Edita `.env` con tus configuraciones:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Finventa
```

4. **Iniciar servidor de desarrollo**

```bash
pnpm dev
# O
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia servidor de desarrollo

# Build
pnpm build        # Compila para producción
pnpm preview      # Preview del build de producción

# Linting
pnpm lint         # Ejecuta ESLint
```

## 💻 Uso

### Desarrollo Local

1. Inicia el servidor de desarrollo:
```bash
pnpm dev
```

2. Navega a `http://localhost:5173`

3. Las rutas principales son:
   - `/` - Landing page
   - `/login` - Página de login
   - `/register` - Página de registro
   - `/dashboard` - Panel principal (requiere autenticación)

### Build para Producción

```bash
# Compilar
pnpm build

# Preview del build
pnpm preview
```

Los archivos compilados estarán en `dist/`

### Despliegue

El proyecto está configurado para despliegue en **Vercel** (ver `vercel.json`):

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 📁 Estructura del Proyecto

```
finventa-frontend-v1/
├── public/                      # Archivos estáticos
│   ├── vite.svg
│   └── ...
├── src/
│   ├── assets/                  # Recursos (imágenes, fuentes)
│   │   ├── fonts/
│   │   └── images/
│   ├── components/              # Componentes reutilizables
│   │   ├── custom/              # Componentes personalizados
│   │   │   ├── DataTable.tsx    # Tabla de datos con paginación
│   │   │   ├── InputField.tsx   # Campo de entrada
│   │   │   ├── SelectField.tsx  # Campo de selección
│   │   │   ├── Tabs.tsx         # Componente de pestañas
│   │   │   └── ...
│   │   ├── layout/              # Componentes de layout
│   │   │   ├── Header/
│   │   │   └── Sidebar/
│   │   └── ui/                  # Componentes Shadcn UI
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       └── ...
│   ├── connections/             # Configuración de APIs
│   │   └── axios.config.ts
│   ├── lib/                     # Utilidades y configuración
│   │   ├── consts/              # Constantes
│   │   ├── hooks/               # Custom hooks
│   │   │   ├── useMobile.ts
│   │   │   └── useViewTransitionNavigate.ts
│   │   ├── routes/              # Configuración de rutas
│   │   │   ├── app_routes.tsx   # Rutas de navegación
│   │   │   └── backoffice.routes.tsx
│   │   └── utils.ts             # Funciones auxiliares
│   ├── pages/                   # Páginas de la aplicación
│   │   ├── backoffice/          # Páginas del backoffice
│   │   │   ├── Accounts/
│   │   │   ├── Clients/
│   │   │   │   ├── Clients.tsx
│   │   │   │   ├── components/
│   │   │   │   └── views/
│   │   │   │       ├── AddClient.tsx
│   │   │   │       └── ClientDetail.tsx
│   │   │   ├── Dashboard/
│   │   │   ├── FinancialOverview/
│   │   │   ├── Orders/
│   │   │   │   ├── Orders.tsx
│   │   │   │   ├── components/
│   │   │   │   │   └── OrdersTable.tsx
│   │   │   │   └── views/
│   │   │   │       ├── CreateOrder.tsx
│   │   │   │       └── OrderDetail.tsx
│   │   │   ├── Org/
│   │   │   ├── Products/
│   │   │   ├── Profile/
│   │   │   │   └── Profile.tsx
│   │   │   └── Settings/
│   │   │       ├── layout/
│   │   │       │   └── SettingsLayout.tsx
│   │   │       └── views/
│   │   │           ├── General.tsx
│   │   │           ├── Users.tsx
│   │   │           └── Notifications.tsx
│   │   ├── home/                # Landing page
│   │   ├── Login/
│   │   ├── Register/
│   │   └── 404/
│   ├── routes/                  # Layouts de rutas
│   │   └── layouts/
│   │       ├── Backoffice/
│   │       │   └── Backoffice.layout.tsx
│   │       ├── Content/
│   │       │   └── Content.layout.tsx
│   │       └── Landing/
│   ├── store/                   # Estado global (Zustand)
│   │   └── SidebarState/
│   │       └── SidebarState.ts
│   ├── App.css
│   ├── App.tsx                  # Componente raíz
│   ├── index.css                # Estilos globales
│   └── main.tsx                 # Punto de entrada
├── .env.example                 # Variables de entorno de ejemplo
├── .gitignore
├── components.json              # Configuración Shadcn
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

## 🗺️ Rutas

### Rutas Públicas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `Home` | Landing page |
| `/login` | `Login` | Página de inicio de sesión |
| `/register` | `Register` | Página de registro |

### Rutas Privadas (Backoffice)

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/dashboard` | `Dashboard` | Panel principal con métricas |
| `/organization` | `Organization` | Gestión de organización |
| `/accounts` | `Accounts` | Gestión de cuentas financieras |
| `/financial-overview` | `FinancialOverview` | Registro financiero |
| `/clients` | `Clients` | Lista de clientes |
| `/clients/client-detail/:id` | `ClientDetail` | Detalle de cliente |
| `/products` | `Products` | Catálogo de productos |
| `/orders` | `Orders` | Lista de órdenes |
| `/orders/order-detail/:id` | `OrderDetail` | Detalle de orden |
| `/settings` | `SettingsLayout` | Configuración general |
| `/settings/users` | `Users` | Gestión de usuarios |
| `/settings/notifications` | `Notifications` | Preferencias de notificaciones |
| `/profile` | `Profile` | Perfil del usuario |

### Estructura de Rutas Anidadas

```typescript
// Ejemplo: Settings con rutas anidadas
{
  path: "/settings",
  component: <SettingsLayout />,
  layout: <Content />,
  children: [
    { path: "", component: <General /> },
    { path: "users", component: <Users /> },
    { path: "notifications", component: <Notifications /> }
  ]
}
```

## 🧩 Componentes

### Componentes Custom

#### DataTable
Tabla de datos con paginación, ordenamiento y acciones personalizadas.

```tsx
<DataTable
  columns={columns}
  data={data}
  customActions={[
    { label: "Editar", onClick: (row) => handleEdit(row) },
    { label: "Eliminar", onClick: (row) => handleDelete(row) }
  ]}
  pageSize={10}
/>
```

#### InputField
Campo de entrada con label y validación.

```tsx
<InputField
  label="Nombre"
  placeholder="Ingresa tu nombre"
  defaultValue=""
/>
```

#### Tabs
Componente de pestañas personalizado.

```tsx
<Tabs
  tabsTrigger={["General", "Usuarios"]}
  tabsContent={[<GeneralTab />, <UsersTab />]}
/>
```

### Componentes UI (Shadcn)

- `Button`: Botón con variantes
- `Card`: Tarjeta de contenido
- `Dialog`: Modal
- `DropdownMenu`: Menú desplegable
- `Avatar`: Avatar de usuario
- `Badge`: Etiqueta
- `Switch`: Interruptor
- `Separator`: Separador
- Y más...

## 🔄 Estado Global

### Zustand Store

#### SidebarState

```typescript
interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
}

// Uso
const { isOpen, toggleSidebar } = useSidebarStore();
```

### Custom Hooks

#### useViewTransitionNavigate

Hook para navegación con transiciones suaves.

```typescript
const navigate = useViewTransitionNavigate();

// Navegar a una ruta
navigate("/dashboard");

// Navegar hacia atrás
navigate(-1);
```

#### useMobile

Hook para detectar dispositivos móviles.

```typescript
const { IS_MOBILE } = useMobile();
```

## 🎨 Theming

El proyecto soporta **modo oscuro/claro** usando `next-themes`:

```tsx
import { useTheme } from "next-themes";

const { theme, setTheme } = useTheme();

// Cambiar tema
setTheme("dark");
setTheme("light");
```

### Variables CSS

Las variables de tema están definidas en `src/index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

## 📝 Licencia

Este proyecto está protegido por una **licencia personalizada**.  
No se permite su uso comercial, redistribución ni modificación sin autorización expresa.  
Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

**Desarrollado por** [Adel Gann](https://github.com/AdelGann)

**Versión**: 0.0.0  
**Última actualización**: Noviembre 2025
