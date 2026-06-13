export interface Project {
  title: string
  subtitle: string
  description: string
  link: string
}

export const projects: Project[] = [
  {
    title: 'Project One',
    subtitle: 'React & TypeScript',
    description:
      'A short description of this project goes here. Explain what it does, the problem it solves, and the impact it had.',
    link: 'https://example.com',
  },
  {
    title: 'Project Two',
    subtitle: 'Node.js & Express',
    description:
      'A short description of this project goes here. Explain what it does, the problem it solves, and the impact it had.',
    link: 'https://example.com',
  },
  {
    title: 'Project Three',
    subtitle: 'Full Stack App',
    description:
      'A short description of this project goes here. Explain what it does, the problem it solves, and the impact it had.',
    link: 'https://example.com',
  },
]

export const skills: string[] = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'HTML & CSS',
  'Git & GitHub',
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
