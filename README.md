# 🚀 Anime Offis Ads SDK

El SDK oficial de **Anime Offis AF GDL México** para la integración de publicidad dinámica basada en el estándar VAST 3.0. Diseñado para ofrecer una infraestructura publicitaria estable, rápida y rentable para la comunidad de anime.

## 📌 ¿Qué es Anime Offis Ads?
Es una solución integral que permite a desarrolladores de sitios web y aplicaciones de anime gestionar espacios publicitarios de forma automatizada. A través de nuestra red, puedes mostrar anuncios de alta calidad y participar en nuestro ecosistema de recompensas.

---

## 🔗 Infraestructura Global
Utilizamos **Cloudflare Edge Computing** para garantizar que los anuncios carguen instantáneamente en cualquier parte del mundo.

* **Endpoint Global:** `https://ads.animeoffis.com`
* **Formato:** VAST 3.0 (XML) / MP4 Progresivo.
* **Colores de Marca:** Cian (`#00aaff`) y Magenta (`#ff00aa`).

---

## 💰 Programa de Monetización (Aportadores)
No solo servimos anuncios; ayudamos a que tu proyecto crezca. Los sitios web que integren nuestro SDK pueden calificar para recibir recompensas basadas en impresiones reales y verificadas.

### ¿Cómo participar?
1.  **Solicita tu ID:** Contacta con la dirección creativa (**Destiny Martinez**) para obtener tu `Publisher ID` único.
2.  **Activa el Tracking:** Integra tu ID en la solicitud para que nuestro sistema contabilice tus impresiones.
3.  **Recibe Recompensas:** Los pagos se procesan de manera programada según el volumen de tráfico verificado y la calidad de las impresiones.

---

## 🛠️ Guía de Integración

### 1. Preparación
Copia los archivos `ads-helper.js` y `styles.css` (disponibles en este repositorio) en la raíz de tu proyecto.

### 2. Implementación de Código
Importa el SDK y configura tu `Publisher ID` para empezar a contar impresiones:

```javascript
import { AnimeOffisAds } from './ads-helper.js';

async function iniciarPublicidad() {
    // Reemplaza 'GUEST' con tu ID de aportador para monetizar
    const adUrl = await AnimeOffisAds.fetchAdVideo('TU_PUBLISHER_ID');

    if (adUrl) {
        // Ejemplo con Video.js
        player.src({ type: 'video/mp4', src: adUrl });
        console.log("Cargando anuncio de Anime Offis...");
    }
}
3. Instalación vía NPM (Beta)
Estamos preparando nuestra librería oficial para gestores de paquetes para facilitar la actualización automática:
npm install @animeoffis/ads-sdk (Próximamente)
📊 Sistema de Métricas y Transparencia
Nuestro sistema de backend basado en Cloudflare detecta automáticamente:
Impresiones: Peticiones exitosas desde dominios autorizados y únicos.
Validación: Seguimiento de visualización para asegurar que el contenido sea visto por usuarios reales.
Seguridad: Filtros avanzados anti-bot para proteger la integridad de la red y asegurar pagos justos.
📄 Licencia y Créditos
Este software se distribuye bajo la licencia MIT. Eres libre de usarlo en proyectos personales o comerciales siempre que se mantenga el crédito correspondiente.
Desarrollado por Anime Offis AF GDL México.
Fundador / Director Creativo: Destiny Martinez
Mascota Oficial: Styceht (Pronunciado: Cyset)
© 2026 Anime Offis - Transformando la comunidad del Anime.
