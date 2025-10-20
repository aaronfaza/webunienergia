export const API_URL = "http://localhost:1337/api";

export async function getBlogNoticias() {
  try {
    const response = await fetch(`${API_URL}/blognoticias?populate=*`);
    if (!response.ok) throw new Error("Error al obtener datos del CMS");
    const data = await response.json();
    return data.data; // devuelve solo los datos
  } catch (error) {
    console.error(error);
    return [];
  }
}
