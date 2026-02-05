
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
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Analytics Engineer",
    icon: mobile,
  },
  {
    title: "Data Engineer",
    icon: backend,
  },
  {
    title: "Business Intelligence (BI) Developer/Engineer",
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
    date: "December 2021 - Present",
    points: [
      "Engineered scalable data pipelines using Azure Data Factory, Databricks, and Apache Spark, integrating 10+ data sources into Synapse and Snowflake warehouses, processing 2M+ records daily with automated data quality checks and validation rules that reduced manual processing time by 25%",
      "Designed and delivered 15+ interactive Power BI dashboards and executive reports with advanced DAX calculations, complex data models, incremental refresh strategies, and row-level security, providing real-time visibility into KPIs across sales, marketing, and operations that drove 20% improvement in operational efficiency",
      "Conducted advanced statistical analysis including A/B testing on marketing campaigns (analyzing 100K+ user interactions with 95% confidence intervals), cohort analysis for customer retention patterns, and ARIMA-based time-series forecasting to identify growth opportunities and optimize resource allocation, resulting in 18% increase in campaign ROI",
      "Performed customer segmentation analysis using K-means clustering and RFM modeling on 500K+ customer records, identifying 5 distinct behavioral segments that enabled targeted marketing strategies and contributed to 22% increase in conversion rates and improved customer lifetime value.",
      "Integrated LLM-powered data classification and entity extraction into ETL pipelines to automate product categorization and standardize unstructured business data, reducing manual tagging effort by 40 percent and improving data quality for downstream analytics",
      "Built AI-assisted analytics tools combining SQL-based data retrieval with generative AI summarization to auto-generate executive insights from KPI dashboards, enabling non-technical stakeholders to interact with data through natural language queries and reducing reporting turnaround time by 30 percent",
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
      "Worked as a Data Analyst and Generative AI Engineer in a project at Tata Consultancy Services for Johnson & Johnson, delivering analytics dashboards, automated data pipelines, and LLM powered solutions to support business and operational decision making.",
    tags: [
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
      {
        name: "DataAnalytics",
        color: "green-text-gradient",
      },
      {
        name: "GenerativeAI",
        color: "pink-text-gradient",
      },
      {
        name: "HealthcareAnalytics",
        color: "green-text-gradient",
      },
      {
        name: "ETLPipelines",
        color: "blue-text-gradient",
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
        name: "Feature Engineering",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://supdecomtp-my.sharepoint.com/:u:/g/personal/m_jayaramu_mbs-education_com/EcNstNxAbfxIuDX22M3J0DEB-RZ6TIkRjShl8Qz0eyAgeQ?e=xzclIZ",
  },
];

export { services, technologies, experiences, testimonials, projects };
