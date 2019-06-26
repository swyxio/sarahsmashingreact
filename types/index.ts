interface ProjectType {
  id: string
  name: string
  stargazers_count: string
  homepage: string
  description: string
}

declare module "@mdx-js/react" {
  import { ComponentType, StyleHTMLAttributes } from "react"

  type MDXProps = {
    children: React.ReactNode
    components: Record<string, React.ReactNode>
  }
  export class MDXProvider extends React.Component<MDXProps> {}
}

declare module "*.png"
