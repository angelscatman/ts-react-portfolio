# Referencia de Bloques

<p align="center">
	<strong>Guia tecnica del vocabulario editorial usado por el contenido.</strong>
</p>

<p align="center">
	<a href="./content-blocks.md">
		<img src="https://img.shields.io/badge/Volver-Content%20Blocks-111827?style=flat-square" alt="Volver a Content Blocks">
	</a>
</p>

---

## [+] Mapa General

```text
heading  -> titulos internos
paragraph -> cuerpo de texto
image    -> apoyo visual
quote    -> cita textual o aprendizaje
columns  -> layout multi columna con blocks hijos
grid     -> pares label/value o tarjetas compactas
```

## [+] Estilos Compartidos

Muchos bloques aceptan:

```json
"style": {
  "weight": "soft",
  "tone": "muted",
  "size": "md",
  "align": "left",
  "spacing": "default",
  "layout": "contained"
}
```

### Valores

- `weight`: `soft | default | strong`
- `tone`: `default | muted | strong`
- `size`: `sm | md | lg`
- `align`: `left | center`
- `spacing`: `tight | default | relaxed`
- `layout`: `inline | contained | wide | full`

### Guia editorial de tamanos

- `sm`: texto compacto para columnas, captions y apoyo
- `md`: cuerpo principal o lectura larga
- `lg`: escala editorial mayor para momentos de mayor presencia

### Guia editorial de layout

- `inline`: contenido mas corto dentro de la caja de lectura
- `contained`: alineado al ancho normal del texto
- `wide`: expande ligeramente el bloque sin romper demasiado la grilla
- `full`: sangrado total, usar con mucha intencion visual

## [+] `heading`

```json
{
  "type": "heading",
  "variant": "section",
  "text": "Centralización de Trazabilidad"
}
```

Opcionalmente puede llevar `level` si se necesita una sobreescritura puntual.

## [+] `paragraph`

```json
{
  "type": "paragraph",
  "text": "Texto editorial.",
  "style": {
    "weight": "default",
    "tone": "default"
  }
}
```

Uso recomendado:

- `soft + muted` para columnas o apoyo
- `default` para cuerpo principal
- `strong` para remarques sin cambiar a heading

## [+] `image`

```json
{
  "type": "image",
  "src": "https://...",
  "alt": "Panel de monitoreo logístico",
  "caption": "Referencia visual del flujo",
  "style": {
    "layout": "wide",
    "spacing": "relaxed"
  }
}
```

## [+] `quote`

```json
{
  "type": "quote",
  "text": "La arquitectura debe priorizar la fluidez operativa.",
  "attribution": "Aprendizaje del proyecto",
  "style": {
    "tone": "muted",
    "size": "lg"
  }
}
```

## [+] `columns`

```json
{
  "type": "columns",
  "columns": [
    {
      "title": "Fuente de verdad",
      "blocks": [
        {
          "type": "paragraph",
          "text": "El servicio de monitoreo actuaba como fuente única de verdad.",
          "style": {
            "weight": "soft",
            "tone": "muted"
          }
        }
      ]
    },
    {
      "blocks": [
        {
          "type": "image",
          "src": "https://...",
          "alt": "Diagrama de operación"
        }
      ]
    }
  ]
}
```

### Regla

Cada columna usa `blocks`. No usar `items` en contenido nuevo.

## [+] `grid`

```json
{
  "type": "grid",
  "rows": [
    {
      "label": "Autenticación",
      "value": "API Keys"
    },
    {
      "label": "Distribución",
      "value": "Tiempo real"
    }
  ]
}
```

## [+] Ejemplo Combinado

```text
[ eyebrow ]
   -> heading(section)
   -> paragraph
   -> columns
      -> column 1
         -> paragraph
      -> column 2
         -> image
      -> column 3
         -> quote
```

## [+] Notas de Evolución

Bloques naturales para una siguiente fase:

- `list`
- `callout`
- `divider`
- `stat`
- `video` o `embed`
