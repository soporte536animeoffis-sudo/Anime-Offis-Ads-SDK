/**
 * Anime Offis Ads Helper
 * SDK para el consumo del endpoint de publicidad dinámica.
 */

export const AnimeOffisAds = {
    endpoint: "https://ads.animeoffis.com",

    /**
     * Obtiene la URL del video del anuncio desde el servidor VAST.
     * @returns {Promise<string|null>} URL del video .mp4
     */
    async fetchAdVideo() {
        try {
            const response = await fetch(this.endpoint);
            if (!response.ok) throw new Error("Error al conectar con la API de anuncios");

            const xmlText = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, "text/xml");
            
            // Extraer el recurso MediaFile del XML VAST
            const mediaFile = xmlDoc.getElementsByTagName("MediaFile")[0];
            
            return mediaFile ? mediaFile.textContent.trim() : null;
        } catch (error) {
            console.error("Anime Offis Ads Error:", error);
            return null;
        }
    }
};

