
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  gearXpert,
  project2,
  project3,
  mysql,
  python,
  etl,
  MicrosoftAzure,
  cloud,
  databricks, 
  postgresql,
  git,
  html,
  mongodb,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  cybersecurity,
  AI,
} from '../assets'


// //Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Engineer",
    icon: web,
  },
  {
    title: "Cloud Engineer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "Business Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Microsoft Azure",
    icon: MicrosoftAzure,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Databricks",
    icon: databricks,
  },
  {
    name: "AI",
    icon: AI,
  },
  {
    name: "ETL",
    icon: etl,
  },
  {
    name: "Cloud",
    icon: cloud,
  }, 
  {
    name: "HTML 5",
    icon: html,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "cybersecurity",
    icon: cybersecurity,
  },
  {
    name: "Python",
    icon: python,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Data Engineer",
    company_name: "Tata Consultancy Services",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Dec 2021 - present",
    points: [
      "Developed scalable data pipelines with Azure Data Factory, Databricks, Kafka, and Airflow. Used Snowflake and Delta Lake for large-scale processing.",
      "Automated workflows with Python and SQL, reducing latency and minimizing errors.",
      "Improved data quality, governance, and security across sources. Enhanced query performance through indexing and partitioning.",
      "Collaborated with analysts and engineers to align data solutions with business needs and drive better decision-making.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He’s super reliable and calm under pressure. Even when things get hectic, Manju keeps a cool head and helps everyone stay focused. He’s great at finding simple solutions to complex issues.",
    name: "Shruti Sharma",
    designation: "Co - Worker",
    company: "Tata Consultancy Services",
    image: firstTestimonial,
  },
  {
    testimonial:
      "He gets things done without making a fuss. Quietly efficient.",
    name: "Pavan Kumar Pedamalla",
    designation: "Fellow Student",
    company: "Montpellier Business School",
    image: secondTestimonial,
  },
  {
    testimonial:
      "He’s the kind of teammate who works hard and never complains. Always respectful, helpful, and on point. You never have to worry about follow through when Manju is involved.",
    name: "Shashank Chauhan",
    designation: "Fellow Student",
    company: "Montpellier Business School",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Sales Dashboard",
    description:
      "Designed interactive dashboards with theme customization, dynamic filters, advanced visuals, and heatmaps to track KPIs, sales trends, and customer performance across regions and segments.",
    tags: [
      {
        name: "Tableau",
        color: "blue-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "white-text-gradient",
      },
      {
        name: "Dashboards",
        color: "pink-text-gradient",
      },
      {
        name: "Performance Metrics",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://public.tableau.com/app/profile/manju.j3147/viz/SALESDASHBOARD_17362856385400/SalesDashboard",
  },
  {
    name: "Johnson & Johnson",
    description:
      "Designed and implemented scalable Azure SQL and Data Warehousing solutions, built optimized data pipelines with Databricks and Azure Data Factory, and created interactive Tableau dashboards for actionable insights.",
    tags: [
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
      {
        name: "Databricks",
        color: "green-text-gradient",
      },
      {
        name: "Data Management",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "American Express Default Prediction",
    description:
      "Used LGBM with hyperparameter tuning, optimal binning, and IV techniques to improve credit default predictions, achieving a 0.76 score in the American Express Kaggle competition.",
    tags: [
      {
        name: "Credit Default Prediction",
        color: "blue-text-gradient",
      },
      {
        name: "LGBM",
        color: "white-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Feature Engineering",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://supdecomtp-my.sharepoint.com/:u:/g/personal/m_jayaramu_mbs-education_com/EcNstNxAbfxIuDX22M3J0DEB-RZ6TIkRjShl8Qz0eyAgeQ?e=xzclIZ",
  },
];

export { services, technologies, experiences, testimonials, projects };
