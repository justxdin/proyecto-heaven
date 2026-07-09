# Heaven

Web app privada para que una dentista que trabaja en varias clínicas y hospitales registre en segundos los procedimientos realizados y controle cuánto debe cobrar — y cuánto gana ella — según la configuración de cada centro. Reemplaza el uso manual de Excel/Word, priorizando velocidad, simplicidad y trazabilidad histórica.

No es un software clínico: no almacena fichas médicas ni datos de pacientes. Solo registra prestaciones, tarifas y comisiones para efectos de cobro.

## Ver el prototipo

Este repo contiene un **prototipo visual interactivo**, separado en tres archivos sin dependencias externas ni backend:

```
index.html   → estructura
styles.css   → estilos
app.js       → estado, datos de ejemplo y lógica
```

Se puede abrir `index.html` directamente en el navegador, o publicarlo con GitHub Pages:

**Settings → Pages → Deploy from branch → `main` → `/ (root)`**

Queda disponible en `https://TU_USUARIO.github.io/heaven-prototipo/`

Los tres archivos deben estar en la misma carpeta — `index.html` carga a los otros dos por ruta relativa. Los datos que se ven (centros, procedimientos, tarifas, registros) son de ejemplo y viven en memoria del navegador: al recargar la página vuelven a su estado inicial.

## Qué incluye el prototipo

**Vista operativa (mobile, a pantalla completa en un celular real)**
- Login
- Registro rápido: centro → variable de paciente (definida por cada centro) → uno o varios procedimientos → guardar, con ticket de confirmación que muestra total facturado y ganancia estimada
- Historial de registros propios

**Panel administrativo (desktop, responsive)**
- Resumen: totales facturados y ganados, filtrables por centro, con historial agrupable por día/mes/año
- Centros: nombre, datos de facturación (representante, calle, ciudad, código postal, CIF), variables de paciente definidas libremente por el usuario (con su % de ganancia cada una) y activación
- Procedimientos: catálogo, con "Diferencia" activada/desactivada
- Tarifas: valor por centro y procedimiento — las columnas se arman según las variables que tenga definidas el centro seleccionado
- Registros: listado completo con edición y borrado auditado
- Auditoría: historial cronológico de cambios (creado / editado / eliminado)
- Perfil (ícono ⚙): datos personales del profesional — nombre, apellido, calle, ciudad, código postal, DNI — todos opcionales

## Alcance del MVP

**Incluye:** login privado, registro por procedimientos, centros con variables de paciente definidas por el usuario, tarifas por centro/procedimiento/variable, porcentaje de ganancia por variable y centro, múltiples procedimientos por atención, historial de tarifas (versionado + snapshot por registro), edición y borrado con trazabilidad, panel admin completo.

**Excluye por ahora:** agenda/calendario, pago por horas, bonos, descuentos, retenciones, estadísticas avanzadas, multiusuario complejo, integraciones externas.

## Modelo de datos

| Entidad | Descripción |
|---|---|
| `users` | Usuario operativo y admin |
| `centers` | Clínicas y hospitales, con datos de facturación |
| `center_variables` | Categorías de paciente definidas por el usuario en cada centro (ej. Adulto, Niño, Anciano...), cada una con su % de ganancia |
| `procedures` | Catálogo de procedimientos, con o sin diferenciación por variable |
| `procedure_rates` | Tarifas vigentes por centro, procedimiento y variable |
| `registrations` | Cabecera de cada atención: centro, variable de paciente, total facturado, % y monto ganado |
| `registration_items` | Procedimientos dentro de una atención, con snapshot del valor aplicado |
| `audit_log` | Historial de cambios |

El snapshot en cada `registration_item` (y el `profitPct`/`earned` guardado en cada `registration`) es clave: permite modificar tarifas o porcentajes hacia adelante sin alterar el valor histórico de atenciones ya registradas.

## Reglas de negocio

- El sistema trabaja por procedimientos (no por horas, por ahora).
- Cada centro define sus propias variables de paciente (no hay categorías fijas como "adulto/niño") y un % de ganancia por cada una.
- Cada procedimiento puede tener valor distinto según el centro y, si tiene la diferenciación activada, según la variable.
- Un mismo paciente puede tener varios procedimientos en un mismo registro.
- La fecha es obligatoria; la hora no es relevante.
- Toda edición o borrado queda registrado — nunca se pierde información histórica.

## Stack propuesto (siguiente etapa)

- Frontend: responsive, mobile-first (evolución del prototipo actual)
- Backend: PHP / Laravel, sirviendo una API
- Base de datos: PostgreSQL o MySQL
- Autenticación por roles (operativo / admin)

GitHub Pages solo sirve archivos estáticos, así que el backend en PHP correrá en un hosting aparte cuando se construya la versión real; el prototipo seguirá siendo HTML/CSS/JS puro mientras se valida el flujo.

## Estado actual

Este repositorio contiene únicamente el **prototipo clickeable**, pensado para validar pantallas y flujo antes de construir la aplicación real con backend y base de datos.
