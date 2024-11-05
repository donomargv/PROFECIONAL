'use client'; // Asegúrate de que este es un componente de cliente

import { useEffect, useState } from 'react';
import styles from './globals.css'; // Asegúrate de que el archivo CSS esté disponible

export default function Home() {
  const [date, setDate] = useState(new Date()); // Inicializa el estado de la fecha

  // useEffect se ejecuta en el cliente después del primer render
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date()); // Actualiza la fecha cada segundo
    }, 1000);

    return () => clearInterval(timer); // Limpia el intervalo al desmontar el componente
  }, []);

  // Aquí están todos tus proyectos
  const projects = [
    {
      title: "Perros Presupuesteros",
      image: "https://live.staticflickr.com/1682/26245695445_5fe0a1f8e5_b.jpg",
      link: "https://67295b40722f3d9cfa7f38b8--perrospresupuesteros.netlify.app/"
    },
    {
      title: "Perros Cagaderos",
      image: "https://i.ytimg.com/vi/HLzhQ9Lxr1k/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC6AKKAgwIABABGGUgXChSMA8=&rs=AOn4CLDeX8oK-Aqu33KV2I1vyFqsX4HPLw",
      link: "https://perroscagaderos.netlify.app/"
    },
    {
      title: "No Se Las Cree",
      image: "https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg",
      link: "https://noselascree.netlify.app"
    },
    {
      title: "calculadora",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWLuJYEH9nmnTchXI1sVZUGFlAgLsyuS7kA&s",
      link: "https://66e181d60b7273f1716beb27--euphonious-dieffenbachia-e9e171.netlify.app/"
    },
    {
      title: "Otra",
      image: "https://www.teleantioquia.co/wp-content/uploads/2024/07/foto_0000000120231012163616.jpg",
      link: "https://github.com/donomargv/otra"
    },
    {
      title: "Poderosa",
      image: "https://i.scdn.co/image/ab67616d0000b2735cee9da5de300b80644da1ef",
      link: "https://github.com/donomargv/poderosa"
    },
    {
      title: "AGT LA BANDA",
      image: "https://i.etsystatic.com/33799060/r/il/d97e9d/4215368070/il_300x300.4215368070_fmep.jpg",
      link: "https://66b9424ca67c72cbece3ad1e--glowing-centaur-350176.netlify.app/"
    },
    {
      title: "UMA SOPA DO MACACO",
      image: "https://i1.sndcdn.com/artworks-000483381480-58sqgf-t500x500.jpg",
      link: "https://66b94276f205a4cc934fe2d4--marvelous-sfogliatella-77243c.netlify.app/"
    },
    {
      title: "NO SEA TAN MALO MNRRR",
      image: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2022/06/10/62a34c5f886e9.jpeg",
      link: "https://66b942a4eded4fcddab338a7--amazing-melomakarona-637db8.netlify.app/"
    },
    {
      title: "BANCO COMICO",
      image: "https://www.informador.mx/__export/1506068394073/sites/elinformador/img/historico/11/1072521.jpg_1902800913.jpg",
      link: "https://66b942becc7773cd01d9bdf0--playful-wisp-9fe8b7.netlify.app/"
    },
    {
      title: "PANTENE",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_1_FKo0yUPil-qSV1QlPkIanzvgQ-cBX2g&s",
      link: "https://66b942eca366a4ca69aad781--vermillion-chimera-9f6fa6.netlify.app/"
    },
    {
      title: "Scratch Project 1",
      image: "https://us-tuna-sounds-images.voicemod.net/90554d78-a98c-49b9-9653-3f3da4ef085b-1689555367894.jpg",
      link: "https://scratch.mit.edu/projects/1047186152/"
    },
    {
      title: "Hoja de Vida",
      image: "https://media.tenor.com/MqOgRxIUenMAAAAe/cj-gta.png",
      link: "https://github.com/donomargv/hoja-de-vida/blob/main/hojadevida.html"
    },
    {
      title: "Scratch Project 2",
      image: "https://i.scdn.co/image/ab67616d0000b273a4fbef208e509dbf6dfc61a5",
      link: "https://scratch.mit.edu/projects/1020705262/"
    },
    {
      title: "Scratch Project 3",
      image: "https://s.mxmcdn.net/images-storage/albums/9/5/3/7/2/7/30727359_500_500.jpg",
      link: "https://scratch.mit.edu/projects/1020170106/"
    },
    {
      title: "Scratch Project 4",
      image: "https://c8.alamy.com/comp/C1YRG0/a-man-with-a-machete-betouubangi-riverrepublic-of-congo-C1YRG0.jpg",
      link: "https://scratch.mit.edu/projects/1020193313/"
    },
    {
      title: "Penne's de Burro",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwuL7BU9MRb83CglcUxR2qnnPq_V8KvVG7g&s",
      link: "http://pennesdeburro.wuaze.com"
    },
    {
      title: "Pepola Se Eterno",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFDQq294O16-t4S8XK6zTkrlbnUQtRZtP0AQ&s",
      link: "http://pepolaseterno.wuaze.com/"
    },
    {
      title: "Perros sin Huesos",
      image: "https://supergracioso.com/wp-content/uploads/2016/01/Perros-que-tambi%C3%A9n-llevan-pantalones-Parte-II.jpg",
      link: "http://perrosinhuesos.wuaze.com/"
    },
    {
      title: "Menor Pelucas",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRK7prpktJgLptDbkQ8iVhKczniNPjuBUG3Q&s",
      link: "http://menorpelucas.wuaze.com/"
    },
    {
      title: "Flappy Bird",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKx5hT1Z7OxMBVf7I-6sLeGFEn4I8g9aWRVg&s",
      link: "https://github.com/donomargv/flappy-bird"
    },
    {
      title: "Heath Ledger",
      image: "https://i.scdn.co/image/ab67616d0000b2731648f1154156f2e9619f424f",
      link: "https://github.com/donomargv/"
    },
  ];


    // Código anterior...
  
    return (
      <div className={styles.mainContainer}>
        <h1>La fecha y hora actual es:</h1>
        <h2>{date.toLocaleString()}</h2> {/* Muestra la fecha en formato local */}
        <p>Bienvenido a mi portafolio personal.</p>
        <div className={styles.portfolioContent}>
          <div className={styles.leftContainer}>
            <h1>Omar Yesid Garcia Vega</h1>
            <img
          src="https://e.plataformaintegra.net/cavirey/img/fotos/mat/3746_114_10.jpeg"
          alt="Omar Yesid Garcia Vega"
          className={styles['profile-image']}
          style={{ width: '100px', height: 'auto', borderRadius: '4px' }}
        />
            <h2>Portafolio 2024</h2>
            <p>
              En el año 2024 aprendí muchas cosas sobre temas como React, Arduino, Next.js, Scratch, Blogger, WordPress, HTML, CSS y JavaScript.
              En el año 2024, mi aprendizaje en desarrollo y tecnología avanzó a pasos agigantados y abarcó múltiples disciplinas y herramientas. Cada una de ellas me abrió nuevas puertas y me permitió comprender aspectos más profundos de cómo funcionan tanto el desarrollo de software como la creación de proyectos electrónicos e interactivos. Este proceso me proporcionó habilidades valiosas que mejoraron significativamente mi capacidad para construir aplicaciones web, automatizar tareas y experimentar con electrónica, todo desde una perspectiva más integral y creativa.

React: Modularidad y Eficiencia en la Creación de Interfaces
Comenzando con React, me adentré en el desarrollo de interfaces de usuario más complejas y modulares. Comprendí la importancia de los componentes como bloques reutilizables, los cuales permiten organizar el código y reducir errores en proyectos grandes. Aprendí también sobre el manejo de estados y cómo manipularlos eficientemente, junto con el uso de hooks como useState y useEffect, que facilitan el control de los efectos secundarios y la interacción del usuario. Además, la creación de interfaces interactivas con JSX y el poder de combinar lógica y presentación en un solo lugar fue un cambio revolucionario en mi enfoque de desarrollo.

Arduino: Introducción al Mundo de la Electrónica
Por otro lado, mi incursión en Arduino me sumergió en el mundo de la electrónica. Aprender a programar microcontroladores y ensamblar circuitos me dio una nueva perspectiva sobre la interacción entre hardware y software. Experimenté con sensores, luces LED y motores, comprendiendo el valor de la programación en el ámbito de la electrónica y cómo puede hacer posible la automatización de tareas cotidianas. Proyectos como el control de luces LED mediante código o la creación de pequeños robots me permitieron comprender mejor la lógica digital y la interacción entre hardware y software.

Next.js: El Poder de React en el Lado del Servidor
En cuanto a Next.js, profundicé en la creación de aplicaciones de React que no solo funcionan en el cliente, sino que también son capaces de ejecutar renderización en el servidor. Esto me permitió optimizar el rendimiento de las aplicaciones y mejorar la experiencia del usuario. Entendí la importancia de la generación estática y la renderización bajo demanda para mejorar la carga inicial y hacer que los proyectos sean más escalables. Además, experimenté con la creación de rutas dinámicas y el manejo de datos en tiempo real, lo cual amplió mis habilidades en aplicaciones web complejas.

Scratch: Creatividad en la Programación Visual
Mi experiencia con Scratch fue otro pilar importante en mi aprendizaje. Scratch me permitió explorar la programación de una forma visual y divertida, donde pude enfocarme en la lógica y el flujo de control sin preocuparme tanto por la sintaxis. Creé animaciones, historias interactivas y juegos sencillos que despertaron mi creatividad y me ayudaron a desarrollar habilidades de resolución de problemas. Scratch me mostró que la programación también puede ser accesible y divertida, lo cual es excelente para enseñar los fundamentos de la programación a personas de todas las edades.

Blogger y WordPress: Creación de Contenidos y Gestión de Sitios Web
Exploré también Blogger y WordPress, dos plataformas de publicación que me enseñaron sobre la importancia de la gestión de contenido y la optimización para motores de búsqueda (SEO). En Blogger, pude experimentar con la personalización de plantillas y la estructura del contenido. Por otro lado, WordPress me permitió comprender la creación de sitios web más complejos y personalizables, experimentando con plugins, temas y la estructura interna del sistema. Aprendí sobre la gestión de bases de datos y cómo construir un sitio robusto y flexible que se puede adaptar a las necesidades del usuario.

HTML y CSS: Fundamentos del Diseño Web
Por supuesto, HTML y CSS fueron fundamentales en este proceso. Con HTML, afiancé mis conocimientos en la estructura básica de las páginas web y la semántica, creando un contenido más accesible y fácil de entender para otros desarrolladores y para los motores de búsqueda. Con CSS, exploré las posibilidades de personalización y estilo, adentrándome en el diseño responsivo y en técnicas avanzadas como flexbox y grid para crear interfaces bien organizadas y adaptables a diferentes dispositivos. Además, aprendí sobre la importancia de la accesibilidad y de crear un diseño que funcione para todos los usuarios, independientemente de sus necesidades.

JavaScript: Profundización en el Lenguaje de la Web
Finalmente, con JavaScript, el motor detrás de la mayoría de las interacciones web, pude profundizar en conceptos avanzados como asincronía, manejo de eventos y manipulación del DOM. Aprendí sobre promesas, async/await y el poder del modelo de eventos para crear aplicaciones más fluidas y dinámicas. También trabajé en la optimización de código, buenas prácticas y técnicas avanzadas para mejorar la velocidad y la eficiencia de las aplicaciones.

Conclusión: Un Año de Aprendizaje Integral
En resumen, el 2024 fue un año de aprendizaje integral y multidisciplinario, donde cada tecnología y herramienta se sumó a mi conjunto de habilidades de una manera única. Desde la creación de interfaces interactivas hasta la experimentación con electrónica, logré desarrollar una comprensión más profunda de cómo funcionan y se interrelacionan las diferentes áreas de desarrollo. Este conocimiento no solo ha fortalecido mi capacidad como desarrollador, sino que también me ha inspirado a seguir explorando y aprendiendo en este emocionante mundo de la tecnología y la innovación.
            </p>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.projects}>
              {projects.map((project) => (
                <div className={styles.card} key={project.title}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '200px', height: 'auto', borderRadius: '4px' }}
                  />
                  <h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }