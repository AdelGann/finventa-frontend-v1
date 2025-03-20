## Principal 

**Framework:**
En esta prueba técnica puedes trabajar con cualquier framework/librería (React, Vue, Angular, Svelte, Astro, Next, Nuxt, etc.) de tu preferencia,
y puedes trabajara con JavaScript o TypeScript, eso es a tu criterio.

**Estilos:**
Tienes completa libertad de elegir que motor de estilado usar, que librería o cualquier componente que desees.

**TypeScript:**
Si decides trabajar con TypeScript, se evaluaran las practicas que uses. nada de any's

## Requerimientos

Para esta prueba técnica, se van a evaluar diferentes aspectos y criterios. En la prueba tomaré las siguientes consideraciones:

1) Buenas practicas HTML (Semántica, SEO, Carga de scripts y enlaces HTML)
2) Habilidades CSS (Uso de Flex / Grid, CSS especificidad, CSS seudo clases, Animaciones)
3) Framework CSS (TailwindCSS, SCSS, CSS modules, Bootstrap)
4) Manejo de JS / TS (Buenas practicas, directivas, manejo del framework utilizado, tipado en caso de usar TypeScript)
5) Fetch Methods (Manejo de peticiones post, get, put, delete, con API's externas)

Adicional a todo eso, y como consideraciones, también se evaluarán los siguientes casos, no son obligatorios, pero suman.

**Documentación:** 
Se evaluará la documentación del código y el contexto general del proyecto. Recuerda que no serás el único que pase por ese código. Es importante dejar una descripción clara de lo que hiciste para los futuros desarrolladores.

**Testing**:
Se evaluará además al menos UN caso de test unitario, usando la librería de testing que desees, y el más importante que consideres.

**Creatividad**:
Se evaluará además la creatividad de la página, mientras más creativo mejor!!


## Contexto del proyecto

Acabas de recibir una llamada...

Te contactan para desarrollar un BackOffice para administración y análisis de datos de laboratorio para un hospital. En general, el proyecto es para llevar una mejor administración para pacientes en listas de espera de trasplantes de órganos, para mejorar y automatizar su flujo y garantizar que todos los pacientes puedan obtener su trasplante de manera correcta y sin adulteraciones, ya que el antiguo sistema médico era propenso a perdidas de datos, y constantes fallas técnicas

### Tu tarea principal

**Landing Page:**
---

Debes desarrollar una landing page, para el hospital, donde su principal objetivo sea atraer a posibles donantes y a personas que necesiten un trasplante. 

En esta, debe tener lo básico una landing, su vista principal, la visión de la página, estadísticas de cuantas personas llevan atendidas, Historia y ubicación del hospital, y finalmente el formulario de contáctenos, en el que pueden ser donantes o personas que necesiten un donante.

El formulario de donante debe tener, datos básicos de ubicación (Nombres, Apellidos, Cédula de Identidad, Ubicación, Teléfono, Email). Datos de sangre (Tipo de sangre), Patologías (Sí las hay) y el tipo de donación que va a realizar

El formulario de receptor debe, de igual forma, tener datos básicos de ubicación, datos de sangre, patologías, y el tipo de donación que necesita.

Los formularios deben tener validación y debe dar error si el formulario se intenta enviar vacío o con datos faltantes.

Como único dato no obligatorio, es el campo de patologías.

**BackOffice**
---

Una vez desarrollado la landing page, debes maquetar una estructura de BackOffice, en las que deberás, como requisito fundamental, manejar un simple login, que de paso a una estructuración de paginas divididas por roles, (Profesional, Paciente). 

El profesional, como único requisito debe acceder a una vista donde aparecerán datos hardcodeados de Pacientes y sus estados de trasplantes, un pequeño formulario para agregar más pacientes, y adicional, pero no obligatorio, una vista para análisis de datos de los pacientes.

El Paciente, tendrá acceso a una única vista en la que verá su estado, notificaciones, posición en la lista de trasplantes y una lista de sus últimos diagnósticos

Como valoraciones adicionales, las rutas deberán estar protegidas y redireccionar a la ruta "/" (o a la ruta que se defina como principal) en caso se intente acceder a dicha ruta protegida sin tener acceso.

**Aclaratoria:**
---
Esto es solo una idea, si no deseas realizar esta prueba, por no sentirte a gusto con este contexto, siéntete libre de escoger otro contexto, el de tu preferencia.

**PERO**, tiene que seguir la misma idea del contexto, una landing que de pie a un BackOffice, el BackOffice con su login, distinción de rangos, rutas protegidas, y vistas de visualización de datos, actualización, creación y posibles eliminaciones.

El contexto debes proponerlo y tendrás media hora (30 min) para pensarlo, y sí en media hora no logras pensar en uno, lo mejor será que sigas con el propuesto.

## Etapas

El desarrollo de esta aplicación será de máximo tres (3) etapas:

1) La primera, deberás desarrollar un landing, donde máximo tendrás un (1) día para completarlo.
2) La segunda, el BackOffice donde contarás con un (1) día de igual forma, pero con posibilidad de extenderlo a dos.
3) Y finalmente la tercera, donde se llevará a cabo una prueba teórica donde se te preguntarán temas básicos sobre JavaScript/TypeScript, y el Framework que utilices. 


## Evaluación

Se te estará evaluando los distintos aspectos de la pagina en general, y las preguntas prácticas, el sistema será evaluado sobre 20 puntos, y las preguntas prácticas sobre 10 puntos, con un total de 30 puntos. Para pasar esta evaluación deberás contar con el 70% de tu calificación para pasar.

¡¡¡ MUCHOS ÉXITOS !!!!