// src/api/blogNoticias.js  (o el archivo donde lo tengas)

export const API_URL = "http://162.248.52.70:1337/api";

export async function getBlogNoticias() {
  try {
    const response = await fetch(`${API_URL}/blognoticias?populate=*`);
    if (!response.ok) throw new Error("Error al obtener datos del CMS");
    const data = await response.json();
    return data.data; // devuelve solo los datos del CMS
  } catch (error) {
    console.error("Error cargando noticias:", error);
    return [];
  }
}
