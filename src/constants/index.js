
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
    title: "Data Analyst",
    company_name: "Tata Consultancy Services",
    icon: tekisky,
    iconBg: "#383E56",
    date: "May 2021 - February 2024",
    points: [
      "Engineered scalable data pipelines using Azure Data Factory, Databricks, and Spark, integrating diverse data sources into Synapse and Snowflake to support analytics, forecasting, and decision making.",
      "Automated cleaning, transformation, and feature engineering with SQL, Python, and dbt, reducing manual workload by 25 percent while improving the reliability and accuracy of reporting datasets.",
      "Designed and delivered Power BI dashboards and executive reports, implementing DAX optimizations, incremental refresh, and row level security to provide actionable insights and drive operational efficiency.",
      "Conducted advanced analytics including A B testing, cohort analysis, and time series forecasting to identify growth opportunities, optimize campaigns, and improve customer retention strategies."
    ],
  },

    {
    title: "Generative AI Engineer",
    company_name: "Tata Consultancy Services",
    icon: tekisky,
    iconBg: "#383E56",
    date: "February 2024 - Present",
    points: [
      "Delivered production grade LLM systems by developing RAG pipelines with vector databases, orchestrating LangChain multi step agents, and fine tuning domain specific models using LoRA and PEFT.",
      "Reduced hallucinations and improved factual accuracy by applying grounding techniques, source attribution, verifier models, and adversarial red teaming to identify vulnerabilities and strengthen overall system reliability.",
      "Designed and implemented production grade generative AI workflows using retrieval augmented generation, combining vector databases, prompt templates, and source grounded responses to improve factual accuracy.",
      "Built enterprise ready microservices, standardized embeddings and prompt libraries, established governance for model lineage and provenance, and mentored teams on GenAI adoption."
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
    name: "Kaggle Competition",
    description:
      "Contributed to two Kaggle competitions for credit default and customer churn prediction. Engineered high-value features using IV, optimal binning, and feature importance. Trained and compared models like LightGBM, Random Forest, KNN, and Extra Trees.",
    tags: [
      {
        name: "Credit Default and Customer Churn Prediction",
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
        name: "Random Forest",
        color: "pink-text-gradient",
      },
      {
        name: "KNN",
        color: "pink-text-gradient",
      },
      {
        name: "Extra Trees",
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
