import {
  Brain,
  Cloud,
  Code2,
  Database,
  Mail,
  Settings,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './components/icons'

type Icon = LucideIcon | typeof GithubIcon

export const profile = {
  name: 'Manoj Gosavi',
  title: 'Senior Data Engineer & Backend Engineer',
  tagline:
    'Results-driven Data Engineer & Backend Engineer with 8+ years of experience building scalable data lakes, backend APIs, and cloud-native data pipelines.',
  summary:
    'I specialize in big data processing, cloud solutions, and data pipeline optimization across AWS, Azure, Snowflake, and Databricks. I have a proven track record building scalable data lakes, developing backend APIs, migrating petabyte-scale data to AWS EMR, and implementing data security solutions — with domain expertise across Healthcare, Insurance, Banking, and Marketing/Sales.',
  location: 'Pune, India',
  email: 'manoj.gosavi2901@gmail.com',
}

export interface SkillCategory {
  category: string
  icon: Icon
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages & Scripting',
    icon: Code2,
    items: ['Python', 'Golang', 'SQL', 'C/C++', 'Bash'],
  },
  {
    category: 'Cloud Platforms',
    icon: Cloud,
    items: [
      'AWS (S3, Glue, Lambda, EMR, Redshift, Athena, Kinesis, DynamoDB)',
      'Azure (Databricks, ADF, Synapse)',
      'GCP',
    ],
  },
  {
    category: 'Big Data & Streaming',
    icon: Database,
    items: ['PySpark', 'Kafka', 'Hive', 'Databricks'],
  },
  {
    category: 'Data Warehousing & RDBMS',
    icon: Database,
    items: ['Snowflake', 'Netezza', 'Oracle', 'SQL Server', 'IBM DB2'],
  },
  {
    category: 'Orchestration & DevOps',
    icon: Workflow,
    items: ['Airflow', 'dbt', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Git'],
  },
  {
    category: 'Backend & APIs',
    icon: Settings,
    items: ['FastAPI', 'Flask', 'Golang', 'MongoDB', 'PyTest', 'System Design'],
  },
  {
    category: 'Gen AI & Agentic Frameworks',
    icon: Brain,
    items: ['LangChain', 'LangGraph', 'CrewAI', 'PydanticAI', 'MCP & RAG'],
  },
]

export interface Experience {
  company: string
  role: string
  period: string
  stack: string[]
  points: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Thoughtworks India Pvt. Ltd., Pune',
    role: 'Senior Data Engineer',
    period: 'Jul 2025 - Present',
    stack: ['Python', 'SQL', 'GCP', 'Snowflake', 'dbt', 'Git', 'Airflow', 'Kafka'],
    points: [
      'Migrated a Retail & E-Commerce client database from a legacy Exasol database to Snowflake & dbt.',
      'Migrated 400+ tables with refactored business logic, handling TBs of data across Orders, Returns, Marketplace, Compliance & Payments.',
      'Developed services for product recommendations, partner risk assessments, SLA violation tracking, and a partner management rule engine.',
      'Implemented CI/CD pipelines for automated deployments and managed cloud infrastructure using Terraform.',
    ],
  },
  {
    company: 'Globant India Pvt. Ltd., Pune',
    role: 'Data Engineer',
    period: 'Feb 2022 - Jul 2025',
    stack: ['Java', 'Python', 'PySpark', 'AWS', 'Snowflake', 'Git', 'Airflow', 'Kafka'],
    points: [
      'Played a key role building a Lambda Architecture-driven data lake on AWS with real-time and batch processing.',
      'Built Glue jobs using PySpark, processing 100s of GB of data from JDBC databases and Kafka.',
      'Led a POC on data tokenization for masking PII/PCI fields, improving data security and compliance.',
      'Led migration of Hive and Presto jobs for 700+ tables (petabytes of data) from on-prem to AWS EMR, improving availability and cutting costs.',
      'Ran a capacity-planning POC to size vCPU requirements for migrating jobs from AWS EMR to EMR Serverless.',
      'Delivered 120M+ customized product-usage insights to customers to drive efficiency.',
      'Optimized Airflow DAG costs using Pepperdata.',
      'Designed an end-to-end data enrichment workflow in Databricks for real-time lead generation, using matching algorithms to identify Ideal Customer Profiles (ICP) for targeted marketing.',
    ],
  },
  {
    company: 'IBM, Pune',
    role: 'Big Data Engineer',
    period: 'Apr 2019 - Feb 2022',
    stack: ['Python', 'PySpark', 'Hive', 'Databricks', 'Oracle', 'SAS', 'Salesforce', 'AWS', 'Tableau'],
    points: [
      'Modernized data pipelines from SAS to Spark for the Member Feedback Analytics team.',
      'Designed and maintained end-to-end data pipelines for NPS and Voice of Member (VOM) dashboards.',
      'Led design and development of data warehouses and reporting solutions for organizational needs.',
      'Automated data capture from third-party survey tools and Salesforce, improving accuracy and efficiency.',
      'Built dashboards and visualizations using Tableau Desktop and Server for stakeholder insights.',
    ],
  },
  {
    company: 'Infosys Ltd., Pune',
    role: 'Senior System Engineer',
    period: 'Dec 2016 - Apr 2019',
    stack: ['SQL', 'Python', 'Hive', 'Sqoop', 'Informatica', 'Control-M', 'Jenkins'],
    points: [
      'Designed and implemented Hive solutions for data warehouse management, modeling, query optimization, and ETL.',
      'Built optimized ETL workflows and mappings using Informatica.',
      'Developed fast, optimized SQL queries for reporting and analytics.',
      'Supported high-priority defect fixing, change requests, status reporting, and defect tracking.',
    ],
  },
]

export interface Highlight {
  title: string
  description: string
  tags: string[]
}

export const professionalHighlights: Highlight[] = [
  {
    title: 'Legacy Database Migration to Snowflake & dbt',
    description:
      'Migrated 400+ tables with refactored business logic from a legacy Exasol database to Snowflake & dbt for a Retail/E-Commerce client, handling TBs of data across Orders, Returns, Marketplace, Compliance & Payments.',
    tags: ['Snowflake', 'dbt', 'GCP', 'Airflow'],
  },
  {
    title: 'Lambda Architecture Data Lake on AWS',
    description:
      'Built a Lambda Architecture-driven data lake supporting real-time and batch processing, with Glue/PySpark jobs ingesting 100s of GB from JDBC databases and Kafka.',
    tags: ['AWS Glue', 'PySpark', 'Kafka', 'S3'],
  },
  {
    title: 'Petabyte-Scale Migration to AWS EMR',
    description:
      'Led the migration of Hive and Presto jobs for 700+ tables holding petabytes of data from on-prem to AWS EMR, improving availability and significantly cutting operational costs.',
    tags: ['AWS EMR', 'Hive', 'Presto', 'Cost Optimization'],
  },
  {
    title: 'PII/PCI Data Tokenization POC',
    description:
      'Led a proof-of-concept for tokenizing and masking PII/PCI data fields, strengthening data security and regulatory compliance.',
    tags: ['Data Security', 'Compliance', 'AWS'],
  },
  {
    title: 'Real-Time Lead Enrichment & ICP Matching',
    description:
      'Designed an end-to-end data enrichment workflow in Databricks integrating multiple sources to generate leads in real time, with matching algorithms to identify Ideal Customer Profiles for targeted marketing.',
    tags: ['Databricks', 'Real-Time', 'GTM Analytics'],
  },
  {
    title: 'NPS & Voice of Member Dashboards',
    description:
      'Designed and maintained end-to-end data pipelines and Tableau dashboards for NPS and Voice of Member analytics, enabling data-driven decisions.',
    tags: ['Tableau', 'Spark', 'Data Warehousing'],
  },
]

export interface SideProject {
  title: string
  description: string
  tags: string[]
  link?: string
  repo?: string
}

// TODO: replace with your real side projects, links, and repos
export const sideProjects: SideProject[] = [
  {
    title: 'Real-Time Streaming Data Pipeline',
    description:
      'An end-to-end streaming pipeline ingesting events through Kafka, processing them with PySpark Structured Streaming, and serving aggregates via a Golang API for low-latency dashboards.',
    tags: ['Golang', 'Kafka', 'PySpark', 'Docker'],
    link: 'https://example.com',
    repo: 'https://github.com',
  },
  {
    title: 'Open-Source ETL Framework',
    description:
      'A lightweight, config-driven ETL framework in Python for building and scheduling data pipelines, with built-in data quality checks and Airflow integration.',
    tags: ['Python', 'Airflow', 'dbt', 'Data Quality'],
    link: 'https://example.com',
    repo: 'https://github.com',
  },
  {
    title: 'ML-Powered Resume/Job Matcher',
    description:
      'A machine learning service that scores resume-to-job-description fit using NLP embeddings, exposed via a FastAPI backend with a simple web UI.',
    tags: ['Machine Learning', 'NLP', 'FastAPI', 'Python'],
    link: 'https://example.com',
    repo: 'https://github.com',
  },
]

export interface Certification {
  title: string
  issuer: string
}

export const certifications: Certification[] = [
  { title: 'AWS Certified Data Engineer - Associate', issuer: 'Amazon Web Services' },
  { title: 'Microsoft Certified: Azure Data Engineer Associate', issuer: 'Microsoft' },
  {
    title: 'Databricks Certified Associate Developer for Apache Spark 3.0',
    issuer: 'Databricks',
  },
  { title: 'Apache Airflow Fundamentals', issuer: 'Astronomer' },
]

export const codingProfiles = {
  github: 'manojgosavi',
  leetcode: 'manojgosavi',
}

// TODO: replace with your real SQL leaderboard rank/link once available
export const sqlLeaderboard = {
  platform: 'SQLScratch',
  status: 'Coming soon',
  link: 'https://example.com',
}

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Side Projects', href: '#side-projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Activity', href: '#activity' },
  { label: 'Contact', href: '#contact' },
]

export interface SocialLink {
  label: string
  href: string
  icon: Icon
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/manojgosavi', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/manoj-gosavi', icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:manoj.gosavi2901@gmail.com', icon: Mail },
]

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvznvryo'
