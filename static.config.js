import axios from "axios"
import path from "path"

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  getRoutes: async () => {
    const { data } = await axios.get("https://api.github.com/users/sdras/repos?page=1&per_page=100")
    return [
      {
        path: "/projects",
        getData: () => ({ data })
        // children: posts.map((post /* : Post */) => ({
        //   path: `/post/${post.id}`,
        //   template: 'src/containers/Post',
        //   getData: () => ({
        //     post,
        //   }),
        // })),
      }
    ]
  },
  plugins: [
    "react-static-plugin-typescript",
    "react-static-plugin-mdx",
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
}
