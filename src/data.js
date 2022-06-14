//  icons
import {
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiAtSign,
  FiMonitor,
  FiAirplay,
  FiServer,
  FiDatabase,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import Logo from './assets/img/brands/logo.png';


// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'Inicio',
    href: 'home',
  },
  {
    name: 'Sobre Mi',
    href: 'about',
  },
  {
    name: 'Portafolio',
    href: 'portfolio',
  },
  {
    name: 'Servicios',
    href: 'services',
  },
  {
    name: 'Testimonios',
    href: 'testimonials',
  },
  {
    name: 'Contactos',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiTwitter/>,
    href: 'https://twitter.com/Gussdev',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/guss.dev/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/gustavopumachagua',
  },
  {
    icon: <FiAtSign />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: Logo,
    href: '',
  }
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'Clon WebSite',
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'Proyectos Personales',
  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'Proyectos Personales',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'Proyectos con API',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'Clon WebSite',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'Proyectos con API',
  },
];

// projects
export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'Proyectos con API',
  },
  {
    name: 'Clon WebSite',
  },
  {
    name: 'Proyectos Personales',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiMonitor />,
    name: 'Diseño Web',
    description:
      'Tengo amplios conocimientos y experiencia en HTML, CSS, JS, diseño grafico con Figma.',
  },
  {
    icon: <FiAirplay />,
    name: 'Web Development',
    description:
      'Tengos proyectos desarrollados en lenguajes de programación como ReactJS',
  },
  {
    icon: <FiServer />,
    name: 'Desarrollo de sistemas',
    description:
      'Tengos proyectos desarrollados en lenguajes de programación como NodeJS',
  },
  {
    icon: <FiDatabase/>,
    name: 'Administracion de Base de datos',
    description:
      'Tengo estudios sobre base de datos desde la implementacion, administracion y el modelado de base de datos',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Es una persona muy investigador, lo que no sabe lo aprende muy rapido el solo.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'No se cansa de aprender, el siempre esta en constantes investigacion.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Es un chico visionario, le gusta imaginar el futuro e investigar.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Tienes alguna duda?',
    subtitle: 'Me puedes escribir.',
    description: 'Envia un Email gustavopumachagua@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Ubicame',
    subtitle: 'Lima, Peru',
    description: '2022',
  },
];