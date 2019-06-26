import React from "react"
import { useRouteData } from "react-static"
import "./projects.css"
export default () => {
  const { data }: { data: ProjectType[] } = useRouteData()
  return (
    <main className="projectsPage">
      <section>
        <h1>Projects</h1>
        {data.map((project: ProjectType) => (
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
