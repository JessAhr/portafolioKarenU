import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram, Github, ChartNoAxesCombined } from "lucide-react";
import { BiSolidUser } from "react-icons/bi";
import { FaHackerrank, FaLightbulb } from "react-icons/fa";
import { LuGithub, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";
import { PiWhatsappLogoThin } from "react-icons/pi";


export const socialNetworks = [
    {
        id: 1,
        logo: <LuGithub size={30} strokeWidth={1} />,
        src: "https://github.com/JessAhr",
    },
    {
        id: 2,
        logo: <LuLinkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/karen-ulcue-full-stack",
    },
    {
        id: 3,
        logo: <LuTwitter size={30} strokeWidth={1} />,
        src: "https://x.com/Kalular3Karen",
    },
    {
        id: 4,
        logo: <LuInstagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/karen_ahr1",
    },
    {
        id: 5,
        logo: < PiWhatsappLogoThin size={30} strokeWidth={1} />,
        src: "https://api.whatsapp.com/send?phone=573126668300&text=Hola%20Karen%20vi%20tu%20portafolio,%20y%20me%20interesa%20hablar%20contigo...",
    },
    {
        id: 6,
        logo: < FaHackerrank size={30} strokeWidth={1} />,
        src: "https://www.hackerrank.com/profile/karenulcuelargo",
    },
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
];
export const boxAboutMe = [
    {   id:1,
        logo:<BiSolidUser size={50} color="#ab0bf5" strokeWidth={2}/> ,
        title: "¿Qien soy?",
        description: "Soy una desarrolldora Full stack de Java, apacionada por el desarrollo y el analisis de datos, el maketing digital, el prendimeinto y las soluciones creativas"
    },
    {   id:2,
        logo:<FaLightbulb  size={50} color="#ab0bf5" strokeWidth={2}/> ,
        title: "Mi pasion",
        description: "Nacio del interes por conocer como se desarrollas las tecnologias que uso a diario, y fui consiente del gran impacto que tiene la tecnologia y desarrolo en la vida diaria"
    },

]

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "E-commerce RutaMTB",
        description: "Colabar con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "sep 2025 ",
    },
    {
        id: 2,
        title: "Creador de Experiencias Digitales",
        subtitle: "Independiente",
        description: "Como apasionada por el marketing ayudo a emprendedores a esablecer su marca en redes sociales.",
        date: "sep 2025",
    },
    {
        id: 3,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "Generation Colombia",
        description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
        date: "Jul 2025",
    },
    {
        id: 4,
        title: "Analista de Datos",
        subtitle: "Comercializadora Central",
        description: "Implemente estratejias de analisis de datos para realizar comprar de insumos con hasta un 30% mas eficiencia. ",
        date: "Mar 2024",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 1,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 19,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 1,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },

    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <ChartNoAxesCombined/>,
        title: "Análisis de datos",
        description: "Transformo datos en insights accionables para apoyar la toma de decisiones estratégicas."
    },

];

export const dataPortfolio = [
    {
        id: 1,
        title: "To-Do Boostrap",
        image: "/to-do.jpg",
        urlGithub: "https://github.com/JessAhr/To-Do-boostrap!",
        urlDemo: "https://to-do-boostrap.netlify.app/",
    },
    {
        id: 2,
        title: "Poke API",
        image: "/poke-Api.jpg",
        urlGithub: "https://github.com/JessAhr/lab-Poke-api",
        urlDemo: "https://poke-api-karen.netlify.app/",
    },
    {
        id: 3,
        title: "E-commerce Ruta MTB",
        image: "/image-8.jpg",
        urlGithub: "https://github.com/samuellopur/ruta-mtb-front",
        urlDemo: "https://master.d1madz5fpdj89j.amplifyapp.com/pages/index.html",
    },
    {
        id: 4,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
     {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];