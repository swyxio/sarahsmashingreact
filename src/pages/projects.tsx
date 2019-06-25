import React from "react"
import "./projects.css"
type ProjectType = { id: string; name: string; stargazers_count: string; homepage: string; description: string }
export default () => {
  const [githubProjects, setList] = React.useState([])
  React.useEffect(() => {
    fetch(`https://api.github.com/users/sdras/repos?page=1&per_page=100`)
      .then((res) => res.json())
      .then(setList)
  }, [])

  return (
    <main className="projectsPage">
      <section>
        <h1>Projects</h1>
        {githubProjects.map((project: ProjectType) => (
          <div key={project.id} className="project">
            <h3>
              <a href="project.html_url">{project.name}</a>
            </h3>
            <p className="stars">✷ {project.stargazers_count}</p>
            <p>{project.homepage}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
      <aside>
        <h3>About</h3>
        <p>
          I am Hawk Philsworth. I am fancy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos pariatur ex
          totam voluptatibus doloremque quia voluptate repudiandae asperiores tempore! Explicabo, libero? Sunt ad
          dolores magni tenetur praesentium, perspiciatis ipsum vero!
        </p>
      </aside>
    </main>
  )
}
