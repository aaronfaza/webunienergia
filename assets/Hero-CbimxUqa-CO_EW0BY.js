import{S as i,N as e}from"./index-BNNyhwF1.js";import{e as l}from"./chevron-right-2LL7zSAO-B7WCN_rd.js";const d=i.memo(()=>{const s=[{src:"/Unienergia-59.jpg",alt:"Planta energética sostenible"},{src:"/Unienergia-62.jpg",alt:"Ingenieros trabajando en proyectos energéticos"},{src:"/Unienergia-28.jpg",alt:"Infraestructura energética moderna"},{src:"/Unienergia-26.jpg",alt:"Energía limpia y sostenible"}],[r,n]=i.useState(0);return i.useEffect(()=>{const t=setInterval(()=>n(a=>(a+1)%s.length),5e3);return()=>clearInterval(t)},[s.length]),e.jsxs("section",{id:"inicio",className:"relative w-full h-screen flex items-center justify-center overflow-hidden text-white","aria-label":"Sección principal de Unienergía",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#0A1B3C] via-[#0B2C61] to-[#020617] z-7"}),s.map((t,a)=>e.jsx("img",{src:t.src,alt:t.alt,loading:"lazy",className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${a===r?"opacity-90":"opacity-0"}`},a)),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0A1B3C]/90 via-[#0B2C61]/60 to-transparent z-10"}),e.jsxs("div",{className:"relative z-20 text-left px-6 md:px-16 lg:px-24 max-w-6xl mx-auto",children:[e.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight",children:[e.jsx("span",{className:"block text-[#AEE5AC] text-sm md:text-base uppercase tracking-widest mb-2",children:"Bienvenido a"}),"Empresa de Recursos Energéticos"," ",e.jsx("span",{className:"inline-block align-baseline bg-gradient-to-r from-[#6CA01C] via-[#4CA23C] to-[#4CA23C] bg-clip-text text-transparent",children:"UNIENERGÍA ABC"})]}),e.jsx("p",{className:"text-gray-300 text-lg mb-8 max-w-xl leading-relaxed font-bold",children:"Energías eficientes, proyectos responsables y compromiso con el desarrollo sostenible del país."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-start",children:[e.jsxs("a",{href:"#servicios",className:`px-6 py-3 bg-[#4CA03C] text-white font-semibold 
                       rounded-full shadow-lg hover:scale-105 hover:shadow-2xl 
                       transition-all duration-300 flex items-center gap-2`,children:["Servicios ",e.jsx(l,{size:18,"aria-hidden":"true"})]}),e.jsx("a",{href:"#nosotros",className:`px-6 py-3 border border-white text-white font-semibold rounded-full 
                       hover:bg-white hover:text-[#0B2C61] transition-all duration-300`,children:"Conoce más"})]})]}),e.jsx("style",{children:`
        .typing-text {
          display: inline-block;
          overflow: hidden;
          border-right: 3px solid #7B1E3C;
          white-space: nowrap;
          vertical-align: bottom;
          animation: typing 3.5s steps(35, end), blink 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink {
          50% { border-color: transparent }
        }
      `})]})});export{d as default};
