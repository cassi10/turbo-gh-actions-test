# NOTES

```bash
gh api graphql -F name='refs/heads/hotfix/bug' -F oid='523a3166528459643b130039166956f191c99a8e' -F repositoryId='R_kgDOHcjXwA' -f query='
  mutation($name: String!, $oid: GitObjectID!, $repositoryId: ID!) {
    createRef(input:{name: $name, oid: $oid, repositoryId: $repositoryId}) {
      ref {
        prefix
        name
      }
    }
  }
'
```

```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"

[build]
  base = "/apps/docs"
  build = "next build"
  publish = ".next"
```
