# Sistema de Bloques Editoriales

<p align="center">
	<strong>Modelo flexible para escribir contenido narrativo, visual y estructurado sin acoplarlo al layout final.</strong>
</p>

<p align="center">
	<a href="./block-reference.md">
		<img src="https://img.shields.io/badge/Referencia-Bloques-2f6feb?style=flat-square" alt="Referencia de Bloques">
	</a>
	<a href="./block-reference.md#-estilos-compartidos">
		<img src="https://img.shields.io/badge/Style-Shared-7c3aed?style=flat-square" alt="Shared Style">
	</a>
</p>

---

## [+] Idea

El contenido ya no depende de una forma unica de escribir parrafos o listas. Cada seccion usa `blocks`, y cada bloque define su intencion editorial.

```text
[ Section ]
   |
   +-- heading
   +-- paragraph
   +-- image
   +-- quote
   +-- columns
   |    +-- column
   |         +-- blocks[]
   +-- grid
```

La idea es separar:

- contenido
- tono editorial
- layout

Sin obligar al autor a pensar en componentes de React al escribir JSON.

## [+] Referencias

- [Referencia de bloques](./block-reference.md)
- [Estilos compartidos](./block-reference.md#-estilos-compartidos)
- [Ejemplos de columnas](./block-reference.md#-columns)

## [+] Reglas Base

- Una `section` nueva debe preferir `blocks`.
- `section.title` solo se usa cuando realmente existe una bajada editorial unica.
- Si una seccion tiene varios titulos internos, esos deben ser bloques `heading`.
- `columns` ya no usa `items`; cada columna usa `blocks`.
- Los estilos se definen semantica y editorialmente con `style`.

## [+] Vocabulario Editorial

### `heading.variant`

- `section`: titulo fuerte dentro del eyebrow
- `subsection`: division media
- `eyebrow`: etiqueta menor o micro titulo

### `style.weight`

- `soft`: texto mas ligero, ideal para apoyo o columnas
- `default`: parrafo normal
- `strong`: mas presencia sin llegar a heading

### `style.tone`

- `default`: tono base
- `muted`: tono secundario
- `strong`: tono mas presente

### `style.size`

- `sm`
- `md`
- `lg`

Guia editorial recomendada:

- `sm`: texto compacto, ideal para columnas, captions y apoyo
- `md`: cuerpo principal o lectura larga
- `lg`: escala editorial mayor para momentos de mayor presencia

### `style.align`

- `left`
- `center`

### `style.spacing`

- `tight`
- `default`
- `relaxed`

### `style.layout`

- `inline`
- `contained`
- `wide`
- `full`

Guia editorial recomendada:

- `contained`: alineado al cuerpo de texto
- `wide`: ligeramente expandido, para cortes visuales puntuales
- `full`: sangrado fuerte, usar solo cuando la imagen deba romper la caja del texto

## [+] Ejemplo de Seccion

```json
{
  "eyebrow": "Exploraciones y Decisiones de Ingeniería",
  "blocks": [
    {
      "type": "heading",
      "variant": "section",
      "text": "Centralización de Trazabilidad"
    },
    {
      "type": "columns",
      "style": {
        "spacing": "relaxed"
      },
      "columns": [
        {
          "blocks": [
            {
              "type": "paragraph",
              "text": "El servicio de monitoreo actuaba como fuente única de verdad.",
              "style": {
                "weight": "soft",
                "tone": "muted",
                "size": "md"
              }
            }
          ]
        }
      ]
    }
  ]
}
```

## [+] Convención Recomendada

Para nuevo contenido:

```text
section.blocks[]
   -> heading
   -> paragraph
   -> image
   -> quote
   -> columns.columns[].blocks[]
```

Evitar mezclar `body` con `blocks` en entradas nuevas.

## [+] Notas

- `body` sigue existiendo por compatibilidad.
- `blocks` es el camino editorial principal.
- Si un caso necesita una nueva pieza visual, primero se define su bloque y luego su renderer.
