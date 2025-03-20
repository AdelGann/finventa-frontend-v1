### Principal

**Framework:**  
En esta prueba técnica, Lo primordial será que se desarrolle todo en React, o NextJS También puedes optar por trabajar con **JavaScript** o **TypeScript**, según tu criterio.

**Estilos:**  
Tienes completa libertad para elegir el motor de estilado, la librería o los componentes que desees utilizar.

---
### Requerimientos
Para esta prueba técnica, se evaluarán diferentes aspectos y criterios. Los puntos clave a considerar incluyen:
1. **Buenas prácticas en HTML:**  Uso de semántica adecuada. SEO básico. Correcta carga de scripts y enlaces HTML.
2. **Habilidades en CSS:** Uso eficaz de Flexbox y/o Grid. Manejo de especificidad en CSS. Uso de pseudo-clases. Implementación de animaciones.
3. **Framework CSS:** Aplicación de herramientas como TailwindCSS, SCSS, CSS Modules o Bootstrap.
4. **Manejo de JS/TS:** Buenas prácticas en JavaScript o TypeScript. Uso adecuado de directivas y manejo del framework seleccionado. Tipado adecuado (en caso de trabajar con TypeScript).
5. **Métodos Fetch:** Manejo adecuado de peticiones HTTP (`POST`, `GET`, `PUT`, `DELETE`) con APIs externas.
---
### Consideraciones Adicionales 
Tener esto en cuenta, no son obligatorias pero saberlas, y aplicarlas suman puntos

1. **Documentación:**  Se evaluará la claridad y calidad de la documentación del código y el contexto general del proyecto.  Recuerda que tu código podría ser leído por otros desarrolladores en el futuro. Una descripción detallada será de gran valor.
2. **Testing:**  Se evaluarán los casos de prueba que realices.  Puedes utilizar la librería de testing que prefieras, centrándote en el caso más relevante.
3. **Creatividad:**  Se valorará la creatividad en el diseño y funcionalidad de la página. Cuanto más innovador, ¡mejor!
  
---
### Contexto del proyecto

Acabas de recibir una llamada...

Te contactan para desarrollar un BackOffice para la administración y análisis de datos de laboratorio de un hospital. En general, el proyecto busca una mejor gestión de los pacientes en las listas de espera para trasplantes de órganos, con el objetivo de mejorar y automatizar los procesos, garantizando que todos los pacientes puedan recibir su trasplante de manera adecuada y sin irregularidades. Esto es especialmente importante debido a que el antiguo sistema médico era propenso a la pérdida de datos y a fallas técnicas constantes.
#### Tu tarea principal
##### **Landing Page:**

Se debe desarrollar una **landing page** para el hospital, cuyo principal objetivo sea captar posibles donantes y personas que necesiten un trasplante.
##### Elementos principales de la landing page:
- **Vista principal:** Atractiva y con un diseño que transmita el propósito de la página.
- **Visión:** Explicación de los objetivos y el compromiso del hospital con la salud y la vida.
- **Estadísticas:** Datos claros sobre la cantidad de personas atendidas y los logros alcanzados.
- **Historia y ubicación:** Información relevante sobre la trayectoria del hospital y cómo llegar a él.
- **Formulario de contacto:** Permite registrar tanto a donantes como a receptores.
---
##### Especificaciones del formulario

##### Formulario de Donante
Debe recopilar los siguientes datos:
- **Información básica:** Nombres, apellidos, cédula de identidad, ubicación, teléfono y correo electrónico.
- **Datos médicos:** Tipo de sangre, patologías (si las hay) y tipo de donación a realizar.
##### Formulario de Receptor
Debe incluir:
- **Información básica:** Nombres, apellidos, cédula de identidad, ubicación, teléfono y correo electrónico.
- **Datos médicos:** Tipo de sangre, patologías (si las hay) y tipo de donación que necesita.
**Nota:** El campo de patologías es el único dato no obligatorio.

---
##### Validaciones
Ambos formularios deben incluir validaciones para garantizar:
1. Que no se envíen vacíos.
2. Que no haya datos faltantes.
3. Mostrar mensajes de error claros en caso de datos incorrectos o incompletos.
---
##### **BackOffice**

Una vez desarrollada la landing page, se debe diseñar y maquetar una estructura de BackOffice con las siguientes características:
##### **Requisitos Fundamentales**

1. **Login Simple:** Permite el acceso controlado a las funcionalidades del BackOffice.
2. **Estructuración por Roles:** Dividir las vistas según los siguientes roles:

   - **Profesional:** Acceso a una vista con datos hardcodeados de pacientes y sus estados de trasplantes. Formulario para agregar nuevos pacientes. Vista **opcional** para realizar análisis de datos de los pacientes.

   - **Paciente:** Acceso a una vista donde podrá visualizar: Su estado actual. Notificaciones relevantes. Su posición en la lista de trasplantes. Una lista con sus últimos diagnósticos.  

##### **Valoraciones Adicionales**

1. **Rutas Protegidas:** Las rutas deberán estar protegidas. En caso de intentar acceder a una ruta restringida sin la debida autorización, se redirigirá automáticamente a la ruta principal ("/") o a la ruta definida como predeterminada.
2. **Flujo de Navegación:** Garantizar un acceso intuitivo y seguro para los diferentes roles.
  
---
## **Aclaratoria:**

Esta es una propuesta inicial. Si no deseas desarrollar este proyecto debido al contexto planteado, puedes proponer otro tema que se ajuste más a tus preferencias.

Sin embargo, debe cumplir con los siguientes lineamientos:
- Incluir una **landing page** que sirva como punto de inicio para un BackOffice.  
- El BackOffice debe contar con:

    1) Un sistema de login.  

    2) Distinción de roles.  

    3) Rutas protegidas.  

    4) Vistas que permitan la visualización, actualización, creación y, en caso necesario, eliminación de datos. 

Tendrás **30 minutos** para pensar en un nuevo contexto. Si no logras definirlo en ese tiempo, se continuará con el contexto propuesto.

---
### Etapas
  
El desarrollo de esta aplicación se llevará a cabo en un máximo de tres (3) etapas:
1. **Primera Etapa:**  Desarrollo de la landing page, plazo máximo de un (1) día para realizarla
2. **Segunda Etapa:**  Implementación del BackOffice, plazo inicial de un (1) día con posibilidad de extenderlo hasta dos (2) días s es necesario.
3. **Tercera Etapa:**  Realización de una prueba teórica, donde se evaluarán conocimientos sobre **JavaScript/TypeScript** y el Framework utilizado
---
### Requisitos de Entrega:

Al finalizar cada etapa, deberás realizar un **Pull Request** con todos los cambios realizados. Es importante incluir comentarios detallados que expliquen cada acción o modificación llevada a cabo.
### Evaluación
---
Se evaluarán los diferentes aspectos de la página en general y las preguntas prácticas. La calificación total estará dividida de la siguiente manera:

**Sistema:** Evaluado sobre un total de 20 puntos.

**Preguntas prácticas:** Evaluadas sobre un total de 10 puntos.  

El puntaje máximo será de 30 puntos, y para aprobar la evaluación se deberá alcanzar al menos el **70%** de la calificación total.

¡¡¡ MUCHOS ÉXITOS !!!!