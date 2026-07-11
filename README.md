# Heaven

Web app privada para que una dentista que trabaja en varias clínicas y hospitales registre en segundos los procedimientos realizados y controle cuánto debe cobrar — y cuánto gana ella — según la configuración de cada centro. Reemplaza el uso manual de Excel/Word, priorizando velocidad, simplicidad y trazabilidad histórica.

No es un software clínico: no guarda fichas médicas, solo el nombre y código del paciente como identificador de la atención (ambos opcionales), junto con las prestaciones, tarifas y comisiones para efectos de cobro.

## Ver el prototipo

**🔗 Prototipo en vivo: [justxdin.github.io/proyecto-heaven](https://justxdin.github.io/proyecto-heaven/)**

Este repo contiene un **prototipo visual interactivo**, separado en tres archivos sin dependencias de build ni backend:

```
index.html   → estructura, carga Google Fonts (Sora / Inter / IBM Plex Mono) y las librerías de exportación (SheetJS, jsPDF)
styles.css   → estilos
app.js       → estado, datos de ejemplo y toda la lógica
```

También se puede abrir `index.html` directamente en el navegador, o publicar tu propia copia con GitHub Pages:

**Settings → Pages → Deploy from branch → `main` → `/ (root)`**

Los tres archivos deben estar en la misma carpeta. Los datos que se ven (centros, procedimientos, tarifas, ~23 registros de ejemplo repartidos entre junio y julio) son de prueba y viven en memoria del navegador: al recargar la página o cerrar sesión vuelven a su estado inicial.

## Diseño

- **Identidad visual**: tipografía Sora para títulos (Inter para texto, IBM Plex Mono para números/datos), isotipo propio en SVG, y un único azul de acento (`#2563EB`) en toda la app.
- **Vista operativa vs. panel admin, diferenciados por estructura, no por color**: la vista operativa es clara de punta a punta; el admin tiene su propio sidebar en navy oscuro (fijo en escritorio, off-canvas en mobile) — así se distinguen de un vistazo sin necesitar dos paletas de color distintas.
- **Fondo con degradado de marca** (los mismos tonos suaves en login y admin): animado en el login (se ve pocos segundos), estático en el admin (pantalla de trabajo, para no generar distracción en sesiones largas); respeta `prefers-reduced-motion`.
- **Profundidad real**: sombras en tarjetas, paneles y modales (no solo bordes), anillos de foco suaves en los campos.
- **Mobile-first de verdad**: la base de los estilos es para celular real (sin simular un marco de teléfono en pantallas chicas), y se agranda progresivamente en tablet/escritorio — tanto la vista operativa como el panel admin.
- **Pulido específico para iOS**: se desactivó el flash de "tap highlight" nativo, y los `<select>` (filtros, tarifas, paginación) tienen flecha e interacción propias en vez del estilo nativo del sistema, que se ve inconsistente en iPhone.
- **Estados de hover** en todo elemento clickeable (chips, botones, filas de historial, tabs, selects) en dispositivos con mouse.
- **Sistema de íconos SVG propio**, minimalista y coherente en toda la app (menú, acciones, filtros, exportar, etc.), sin depender de ninguna librería externa de íconos.
- **Tablas responsivas**: en escritorio se ven como tabla; en mobile cada fila pasa a ser una tarjeta con etiquetas, con las acciones (Editar/Eliminar) arriba en vez de al final.
- **Color identificador por centro**: se elige de una paleta curada de 8 colores y se aplica automáticamente (tinte suave) en filas de Registros, barras de Resumen y tarjetas de Facturas, para reconocer cada centro de un vistazo.

## Qué incluye el prototipo

**Vista operativa (mobile-first, se adapta también a tablet/escritorio)**
- Login
- Registro rápido: centro → nombre y código de paciente (opcionales) → variable/categoría del paciente (definida por cada centro) → uno o varios procedimientos → guardar, con ticket de confirmación que muestra total facturado y ganancia estimada
- Historial de registros propios
- Acceso directo al panel admin, y cierre de sesión

**Panel administrativo (escritorio y mobile, con menú fijo/hamburguesa)**
- **Resumen**: totales facturados y ganados. Filtros por Centro / Año / Mes / rango de fechas, ocultos detrás de un botón "Filtros" y aplicados recién al tocar "Filtrar" (no automático). Arranca mostrando el mes actual por defecto. Historial agrupable por día/mes/año, y exportación a Excel y PDF respetando el filtro activo.
- **Centros**: nombre, color identificador, datos de facturación (razón social, NIF/CIF con selector de tipo, calle, ciudad, código postal, IVA intracomunitario), variables de paciente definidas libremente por el usuario (con su % de ganancia cada una) y activación.
- **Procedimientos**: catálogo, con "Diferencia" activada/desactivada (la diferenciación se resuelve por las variables de cada centro, no por procedimiento).
- **Tarifas**: acordeón por procedimiento (uno abierto a la vez) — dentro, un campo editable por cada variable del centro seleccionado.
- **Facturación**: genera un PDF de honorarios por centro y periodo, con número de factura manual, % IVA y % retención IRPF configurables, gasto opcional (se resta de los honorarios antes de calcular la base imponible), descripción del servicio y notas/mención legal editables. Guarda un historial de facturas emitidas (filtrable por centro) con opción de volver a descargar o enviar por correo (abre el cliente de correo del usuario con el PDF ya descargado para adjuntar).
- **Registros**: listado con edición y borrado auditado. Filtros por Centro / Mes / rango de fechas / buscador de paciente (nombre o código), paginado (10/20/50 por página). La vista general muestra Centro, Fecha, Nombre, Código, Total, Ganancia y Acciones; el ID, la categoría y el detalle de procedimientos quedan disponibles al editar.
- **Auditoría**: historial cronológico de cambios (creado / editado / eliminado).
- **Perfil** (ícono de ajustes): datos personales del profesional (nombre, apellido, calle, ciudad, código postal, NIF/NIE/CIF, IVA intracomunitario) y moneda de visualización (Euro o Dólar) — todos opcionales.
- Vuelta directa a la app operativa, y cierre de sesión, desde el pie del menú lateral.

## Alcance del MVP

**Incluye:** login privado, registro por procedimientos con identificación opcional de paciente, centros con variables de paciente y color definidos por el usuario, tarifas por centro/procedimiento/variable, porcentaje de ganancia por variable y centro, múltiples procedimientos por atención, historial de tarifas (versionado + snapshot por registro), edición y borrado con trazabilidad, filtros y paginación en las vistas principales, exportación a Excel/PDF, generación de facturas en PDF con gastos deducibles, panel admin completo y responsive.

**Excluye por ahora:** agenda/calendario, pago por horas, bonos, descuentos, envío automático de correo (el botón actual abre el cliente de correo del usuario, no envía en segundo plano), conversión real de moneda (el selector de moneda solo cambia el formato de visualización, no aplica tipo de cambio), estadísticas avanzadas, multiusuario complejo, integraciones externas.

## Modelo de datos

| Entidad | Descripción |
|---|---|
| `users` | Usuario operativo y admin |
| `profile` | Datos personales del profesional y moneda de visualización |
| `centers` | Clínicas y hospitales, con datos de facturación y color identificador |
| `center_variables` | Categorías de paciente definidas por el usuario en cada centro (ej. Adulto, Niño, Anciano...), cada una con su % de ganancia |
| `procedures` | Catálogo de procedimientos, con o sin diferenciación por variable |
| `procedure_rates` | Tarifas vigentes por centro, procedimiento y variable |
| `registrations` | Cabecera de cada atención: centro, variable de paciente, nombre/código de paciente, total facturado, % y monto ganado |
| `registration_items` | Procedimientos dentro de una atención, con snapshot del valor aplicado |
| `invoices` | Facturas emitidas: centro, periodo, número, honorarios, gasto, IVA, retención, total |
| `audit_log` | Historial de cambios |

El snapshot en cada `registration_item` (y el `profitPct`/`earned` guardado en cada `registration`) es clave: permite modificar tarifas o porcentajes hacia adelante sin alterar el valor histórico de atenciones ya registradas.

## Reglas de negocio

- El sistema trabaja por procedimientos (no por horas, por ahora).
- Cada centro define sus propias variables de paciente (no hay categorías fijas como "adulto/niño") y un % de ganancia por cada una.
- Cada procedimiento puede tener valor distinto según el centro y, si tiene la diferenciación activada, según la variable.
- Un mismo paciente puede tener varios procedimientos en un mismo registro.
- La fecha es obligatoria; la hora no es relevante.
- La base imponible de una factura es el **total ganado** (comisión), no el total facturado a los pacientes; si hay gasto, se resta antes de aplicar IVA y retención.
- Toda edición o borrado queda registrado — nunca se pierde información histórica.

## Stack propuesto (siguiente etapa)

- Frontend: responsive, mobile-first (evolución del prototipo actual)
- Backend: PHP / Laravel, sirviendo una API
- Base de datos: PostgreSQL o MySQL
- Autenticación por roles (operativo / admin)
- Envío de correo real (factura adjunta automáticamente) vía Laravel Mail

GitHub Pages solo sirve archivos estáticos, así que el backend en PHP correrá en un hosting aparte cuando se construya la versión real; el prototipo seguirá siendo HTML/CSS/JS puro mientras se valida el flujo.

## Estado actual

Este repositorio contiene únicamente el **prototipo clickeable**, pensado para validar pantallas, flujo y reglas de negocio antes de construir la aplicación real con backend y base de datos. Está verificado de punta a punta (todas las pantallas, filtros, cálculos y exportaciones probados en conjunto), pero el detalle visual fino conviene revisarlo siempre en un navegador real antes de dar un cambio por cerrado.
