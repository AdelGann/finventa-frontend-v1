## Principal

**Framework:**  
En esta prueba técnica, lo primordial será que se desarrolle todo en **React** o **Next.js**. También puedes optar por trabajar con **JavaScript** o **TypeScript**, según tu criterio.

**Estilos:**  
Tienes completa libertad para elegir el motor de estilado, la librería o los componentes que desees utilizar.

---

### Requerimientos

Para esta prueba técnica, se evaluarán los siguientes aspectos y criterios:

1. **Buenas prácticas en HTML:**  
   - Uso de semántica adecuada.  
   - SEO básico.  
   - Correcta carga de scripts y enlaces HTML.

2. **Habilidades en CSS:**  
   - Uso eficaz de Flexbox y/o Grid.  
   - Manejo de especificidad en CSS.  
   - Uso de pseudo-clases.  
   - Implementación de animaciones.

3. **Framework CSS:**  
   - Aplicación de herramientas como TailwindCSS, SCSS, CSS Modules o Bootstrap.

4. **Manejo de JS/TS:**  
   - Buenas prácticas en JavaScript o TypeScript.  
   - Uso adecuado de directivas y manejo de hooks.  
   - Implementación de hooks personalizados (_custom hooks_).  
   - **Optimización del Rendimiento:** Uso de técnicas como `React.memo`, `useMemo` y `useCallback` para evitar renderizados innecesarios y mejorar la eficiencia.  
   - **Gestión del Estado:** Implementación eficiente del estado local o global mediante herramientas como Context API, Redux, Zustand u otras soluciones de manejo de estado.  
   - **Manejo de Errores:** Gestión adecuada de errores en componentes y peticiones asíncronas, proporcionando mensajes de retroalimentación claros para los usuarios.  
   - **Módulos y Componentización:** Creación de módulos/componentes reutilizables con una clara separación de responsabilidades en el código.  
   - **Ciclo de Vida:** Uso correcto de hooks como `useEffect`, gestionando dependencias de manera eficiente y evitando errores comunes como bucles infinitos.  
   - **Acceso y Seguridad:** Implementación de controles de acceso en rutas o datos sensibles para reforzar la seguridad en el frontend.  

5. **Métodos Fetch:**  
   - Manejo adecuado de peticiones HTTP (`POST`, `GET`, `PUT`, `DELETE`) con APIs externas.

---

### Consideraciones Adicionales

Estos aspectos no son obligatorios, pero se considerarán puntos adicionales:

1. **Documentación:**  
   - Se evaluará la claridad y calidad de la documentación del código y el contexto general del proyecto.  
   - Se espera un archivo `README.md` que incluya:
     - Instrucciones para la instalación y ejecución del proyecto.  
     - Explicación de la arquitectura del proyecto.  
     - Justificación de las decisiones técnicas.

2. **Testing:**  
   - Se evaluará al menos un caso de prueba (unitario, integración o snapshot).  
   - Puedes utilizar la librería de testing que prefieras (Jest, React Testing Library, Cypress, etc.).

3. **Creatividad:**  
   - Se valorará la creatividad en el diseño y funcionalidad de la página. Cuanto más innovador, mejor.

4. **Persistencia de Datos:**  
   - Es recomendable implementar alguna forma de persistencia de datos (real o simulada), como:
     - JSON-server, Firebase o almacenamiento local.

5. **Rutas Protegidas:**  
   - Las rutas deben protegerse para garantizar acceso solo a usuarios autorizados.  
   - En caso de intentar acceder sin autorización, redirigir a la ruta principal ("/") o una ruta definida.

---

### Contexto del Proyecto

Acabas de recibir una llamada... Te han contactado para desarrollar un **BackOffice** para la administración y análisis de datos de laboratorio de un hospital. En general, el proyecto busca:

- Mejorar la gestión de pacientes en listas de espera para trasplantes de órganos.  
- Automatizar los procesos para garantizar que todos los pacientes puedan recibir su trasplante de manera adecuada y sin irregularidades.  
- Reemplazar un sistema médico anterior que era propenso a la pérdida de datos y fallas técnicas constantes.

---

### Tareas Principales

#### **Landing Page:**

Desarrollar una **landing page** cuyo objetivo principal sea captar posibles donantes y personas que necesiten un trasplante.

##### **Elementos principales de la landing page:**
- **Vista principal:** Atractiva y con un diseño que transmita el propósito de la página.  
- **Visión:** Explicación de los objetivos y el compromiso del hospital con la salud y la vida.  
- **Estadísticas:** Datos claros sobre la cantidad de personas atendidas y los logros alcanzados.  
- **Historia y ubicación:** Información relevante sobre la trayectoria del hospital y cómo llegar a él.  
- **Formulario de contacto:** Permite registrar tanto a donantes como a receptores.

##### **Especificaciones del formulario:**

**Formulario de Donante:**  
Debe recopilar los siguientes datos:  
- **Información básica:** Nombres, apellidos, cédula de identidad, ubicación, teléfono y correo electrónico.  
- **Datos médicos:** Tipo de sangre, patologías (si las hay) y tipo de donación a realizar.  

**Formulario de Receptor:**  
Debe incluir:  
- **Información básica:** Nombres, apellidos, cédula de identidad, ubicación, teléfono y correo electrónico.  
- **Datos médicos:** Tipo de sangre, patologías (si las hay) y tipo de donación que necesita.  

**Nota:** El único campo no obligatorio es **patologías**.

##### **Validaciones:**
- Ambos formularios deben validar que no se envíen vacíos.  
- Deben mostrar mensajes claros en caso de errores o datos incompletos.  

---

#### **BackOffice:**

Una vez completada la landing page, se diseñará y maquetará un **BackOffice** con las siguientes características:

##### **Requisitos Fundamentales:**
1. **Login Simple:** Permite el acceso controlado a las funcionalidades del BackOffice.  
2. **Estructuración por Roles:**  
   - **Profesional:**  
     - Acceso a una vista con datos hardcodeados de pacientes y sus estados de trasplantes.  
     - Formulario para agregar nuevos pacientes.  
     - **(Opcional):** Vista para realizar análisis de datos de los pacientes.  
   - **Paciente:**  
     - Acceso a una única vista donde podrá visualizar:  
       - Su estado actual.  
       - Notificaciones relevantes.  
       - Su posición en la lista de trasplantes.  
       - Una lista con sus últimos diagnósticos.

##### **Valoraciones Adicionales:**
1. **Flujo de Navegación:** Garantizar un acceso intuitivo y seguro según el rol del usuario.  

---

### Etapas

El desarrollo de esta aplicación se llevará a cabo en tres (3) etapas:

1. **Primera Etapa:**  
   - Desarrollo de la landing page.  
   - Plazo: **un (1) día** para completarla.

2. **Segunda Etapa:**  
   - Implementación del BackOffice.  
   - Plazo inicial: **un (1) día**, con posibilidad de extenderlo hasta **dos (2) días** si es necesario.

3. **Tercera Etapa:**  
   - Realización de una prueba teórica.  
   - Evaluación de conocimientos básicos sobre **JavaScript/TypeScript** y el **framework** utilizado.  

---

### Requisitos de Entrega

Al finalizar cada etapa, deberás realizar un **Pull Request** con los siguientes detalles:  
1. **Descripción clara:** Resumen de las tareas realizadas.  
2. **Comentarios técnicos:** Explicación de las decisiones implementadas o cambios realizados.  
3. **Documentación:** Adjuntar un `README.md` con:  
   - Instrucciones de instalación y ejecución.  
   - Explicación de la arquitectura del proyecto.  
   - Justificación de las decisiones técnicas.

---

### ¡Muchos Éxitos!
