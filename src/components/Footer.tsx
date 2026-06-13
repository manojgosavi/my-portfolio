export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {year} Manoj Gosavi. All rights reserved.</p>
        <div className="footer__links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:manoj.gosavi2901@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
