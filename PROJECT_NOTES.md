# Magic Place 809 — Notas del Proyecto

> Archivo de referencia para no perder detalles al sincronizar, deployar o hacer cambios futuros.

---

## 🚀 Deploy

| Item | Valor |
|------|-------|
| **Plataforma** | Vercel (conectado vía GitHub) |
| **Repositorio** | https://github.com/jampol126-cmd/Magic-Place-809.git |
| **Dominio actual** | https://apartamento-santa-marta-809.vercel.app |
| **Cómo deployar** | Hacer `git push origin master`. Vercel compila y despliega automático. |

### Comandos útiles
```powershell
cd "c:\Pagina web"
npm install      # instalar dependencias
npm run build    # compilar localmente (tsc + vite)
npm run preview  # previsualizar build local
```

---

## 🗺️ SEO & URLs importantes

| Recurso | URL |
|---------|-----|
| **Sitemap** | `https://apartamento-santa-marta-809.vercel.app/sitemap.xml` |
| **Robots.txt** | `https://apartamento-santa-marta-809.vercel.app/robots.txt` |
| **Google Search Console** | `public/google383cc9efbde2c6ae.html` |
| **Airbnb (anuncio real)** | `https://www.airbnb.com.co/rooms/1528338194549420533` |

> **Tip:** Si cambias el dominio custom en Vercel, actualiza `index.html` (canonical, Open Graph, Twitter, Schema.org) y `public/sitemap.xml`.

---

## 🛠️ Cambios recientes (últimos fixes)

### 2026-04-28 — Fix visual y SEO
1. **Hero:** Agregado botón **"Ver en Airbnb"** junto a "Reservar Ahora" y "Ver Galería".
2. **Móvil — texto raro:** Eliminado fragmento duplicado de JSON-LD suelto en `index.html` que se renderizaba como texto visible en móviles.
3. **Footer móvil — botón invisible:** Corregido botón de Airbnb que aparecía blanco sin texto. Se le quitó `variant="outline"` de shadcn y se aplicaron estilos directos con fondo transparente.
4. **Links Airbnb:** Todos los botones (Hero, Footer, Booking, Navbar móvil, WhatsAppButton) apuntan ahora al anuncio real de Airbnb.

---

## 🎨 Colores de marca (Tailwind)

| Nombre | Tailwind class | Uso |
|--------|---------------|-----|
| Océano | `text-ocean-500` / `bg-ocean-500` | Botones primarios, acentos |
| Mostaza | `text-mustard-500` / `bg-mustard-500` | Badges, estrellas, highlights |

---

## 📁 Archivos clave para SEO

- `index.html` — Meta tags, Schema.org (JSON-LD), canonical, hreflang, Open Graph.
- `public/sitemap.xml` — Mapa del sitio para Google.
- `public/robots.txt` — Instrucciones para crawlers.
- `public/google383cc9efbde2c6ae.html` — Verificación de Google Search Console.

> **Regla de oro:** Si editas `index.html`, revisa que los bloques `<script type="application/ld+json">` estén bien cerrados. **Nunca dejar JSON suelto fuera de una etiqueta `<script>`**.

---

## 🧩 Componentes principales

| Componente | Archivo | Qué hace |
|-----------|---------|----------|
| Hero | `src/sections/Hero.tsx` | Portada con video, CTA buttons |
| Booking | `src/sections/Booking.tsx` | Formulario de reserva + calendario |
| Footer | `src/sections/Footer.tsx` | Pie de página con botones WhatsApp/Airbnb |
| Navbar | `src/components/Navbar.tsx` | Menú fijo + menú móvil |
| WhatsAppButton | `src/components/WhatsAppButton.tsx` | Botón flotante (actualmente va a **Airbnb**) |
| LanguageSelector | `src/components/LanguageSelector.tsx` | Selector de idioma (es/en/pt) |

---

## ⚠️ Problemas conocidos y soluciones

| Problema | Causa | Solución aplicada |
|----------|-------|-------------------|
| Texto JSON visible en móvil | JSON-LD duplicado suelto en `<head>` | Borrar fragmento sin `<script>` |
| Botón Airbnb blanco sin texto | `variant="outline"` de shadcn ponía `bg-white` con `text-white` | Quitar variant, usar clases directas `bg-white/10 border-white/30 text-white` |
| `tsc` no encontrado al compilar | TypeScript no estaba en `node_modules` | Ejecutar `npm install` antes de build |

---

## 📝 Checklist antes de cada deploy

- [ ] `npm run build` compila sin errores
- [ ] Links de Airbnb apuntan al anuncio correcto
- [ ] Canonical URL en `index.html` coincide con el dominio activo
- [ ] `sitemap.xml` tiene el dominio actualizado
- [ ] No hay JSON suelto en `index.html`
- [ ] Commit + push a `master`
- [ ] Esperar que Vercel termine el deploy (badge verde)

---

## 📞 Contacto del proyecto

- **Teléfono:** +57 316 0489297
- **WhatsApp:** `https://wa.me/573160489297`
- **Instagram:** `@magicplace809`
