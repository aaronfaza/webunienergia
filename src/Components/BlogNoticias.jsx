import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogNoticias() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:1337/api";

    axios
      .get(`${apiUrl}/blognoticias?populate=*`)
      .then((res) => {
        console.log("✅ Datos recibidos:", res.data);
        setPosts(res.data?.data || []);
      })
      .catch((err) => console.error("❌ Error cargando noticias:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-300 text-lg">
        Cargando noticias...
      </div>
    );
  }

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-br from-[#0033A0] via-[#0B2C61] to-[#001B44] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-4 tracking-tight">
          Blog y Noticias
        </h2>
        <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
          Conoce las últimas actualizaciones, proyectos y novedades de UNIENERGÍA.
        </p>

        {posts.length === 0 ? (
          <p className="text-center text-gray-300">
            No hay noticias publicadas por el momento.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const contenidoPlano =
                Array.isArray(post.contenido) &&
                post.contenido[0]?.children &&
                post.contenido[0].children[0]?.text
                  ? post.contenido[0].children[0].text
                  : "Sin contenido";

              const imagenUrl = post.imagen?.[0]?.formats?.medium?.url || post.imagen?.[0]?.url;


              return (
                <motion.article
                  key={post.id || index}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedPost(post)}
                >
                  {imagenUrl && (
                    <img
                      src={`http://localhost:1337${imagenUrl}`}
                      alt={post.titulo}
                      className="w-full h-56 object-cover rounded-t-2xl opacity-90 hover:opacity-100 transition-all duration-300"
                    />
                  )}

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {post.titulo}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {new Date(post.fecha).toLocaleDateString()} — {post.autor}
                    </p>
                    <p className="text-gray-100 text-sm leading-relaxed mb-4 line-clamp-3">
                      {contenidoPlano}
                    </p>
                    <motion.button
                      className="text-[#4CA23C] font-semibold hover:underline"
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPost(post);
                      }}
                    >
                      Leer más →
                    </motion.button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/10 border border-white/20 rounded-3xl backdrop-blur-2xl p-8 max-w-2xl w-full text-white relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
                onClick={() => setSelectedPost(null)}
              >
                ✕
              </button>

             {selectedPost?.imagen?.length > 0 && (
                <img
                  src={`http://localhost:1337${
                    selectedPost.imagen?.[0]?.formats?.large?.url ||
                    selectedPost.imagen?.[0]?.formats?.medium?.url ||
                    selectedPost.imagen?.[0]?.url
                  }`}
                  alt={selectedPost.titulo}
                  className="rounded-2xl mb-6 shadow-lg w-full object-cover max-h-80 opacity-95 hover:opacity-100 transition-all duration-500"
                />
              )}


              <h3 className="text-3xl font-bold mb-2">{selectedPost.titulo}</h3>
              <p className="text-gray-300 text-sm mb-4">
                {new Date(selectedPost.fecha).toLocaleDateString()} —{" "}
                {selectedPost.autor}
              </p>
              <p className="text-gray-100 leading-relaxed">
                {Array.isArray(selectedPost.contenido)
                  ? selectedPost.contenido
                      .map((b) =>
                        b.children ? b.children.map((c) => c.text).join(" ") : ""
                      )
                      .join("\n\n")
                  : selectedPost.contenido}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
