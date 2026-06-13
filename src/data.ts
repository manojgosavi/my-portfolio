import {
  Braces,
  Database,
  GitBranch,
  Layout,
  Mail,
  Server,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './components/icons'

type Icon = LucideIcon | typeof GithubIcon

export interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  repo?: string
}

// TODO: replace with your real projects
export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A short description of this project — what it does, the problem it solves, and any notable results or impact.',
    tags: ['React', 'TypeScript', 'Node.js'],
    link: 'https://example.com',
    repo: 'https://github.com',
  },
  {
    title: 'Project Two',
    description:
      'A short description of this project — what it does, the problem it solves, and any notable results or impact.',
    tags: ['Python', 'Machine Learning', 'Pandas'],
    link: 'https://example.com',
    repo: 'https://github.com',
  },
  {
    title: 'Project Three',
    description:
      'A short description of this project — what it does, the problem it solves, and any notable results or impact.',
    tags: ['Full Stack', 'PostgreSQL', 'Express'],
    link: 'https://example.com',
    repo: 'https://github.com',
  },
]

export interface Skill {
  name: string
  icon: Icon
}

// TODO: adjust to reflect your real skill set
export const skills: Skill[] = [
  { name: 'JavaScript / TypeScript', icon: Braces },
  { name: 'React', icon: Layout },
  { name: 'Node.js & APIs', icon: Server },
  { name: 'Databases & SQL', icon: Database },
  { name: 'Git & GitHub', icon: GitBranch },
  { name: 'AI & Machine Learning', icon: Sparkles },
]

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export interface SocialLink {
  label: string
  href: string
  icon: Icon
}

// TODO: replace with your real profile URLs
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:manoj.gosavi2901@gmail.com', icon: Mail },
]

// TODO: replace with your real Formspree endpoint (https://formspree.io)
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvznvryo'
