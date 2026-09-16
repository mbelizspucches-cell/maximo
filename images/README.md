# Imágenes del producto

La web usa fondos CSS (no `<img>`) para las fotos, así que mientras no exista
el archivo, la sección se ve como un degradado en los colores de la marca en
vez de un ícono de imagen rota. Sube tus fotos reales con estos nombres
exactos (mismo formato .jpg) y aparecerán automáticamente:

| Archivo a subir | Dónde se usa | Foto sugerida |
|---|---|---|
| `lifestyle-atardecer.jpg` | Sección "Una copa de vino..." | La chimenea sola sobre la mesa de piedra, con olivos y atardecer de fondo |
| `tamano-comparacion.jpg` | Sección "Del tamaño de una copa de vino" | La infografía con la copa de vino y las medidas (27 cm x 16 cm) |
| `kit-incluido.jpg` | Sección "Llega lista para encender" | La infografía con las piezas etiquetadas (cilindro, base, quemador, piedras, apagallamas) |
| `flame-detail.jpg` | Sección con la frase "Enciéndela y deja que la noche fluya sola" | El primer plano de la llama con luces bokeh |

También falta una foto para el **hero** (la de la copa de vino, el queso y
la chimenea encendida sobre la mesa de madera): puedes añadirla como
`hero-ambiente.jpg` y usarla en `.hero-visual` en `style.css` si prefieres
una foto fija en vez del visual 3D animado (`hero-3d.html`) que está puesto
por defecto.

Si prefieres subir las fotos con otros nombres, solo cambia la ruta dentro
de `url('images/...')` en `style.css` (busca las clases `.ph-lifestyle`,
`.ph-size`, `.ph-kit` y `.ph-flame`).
