require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "ASLAMKURESHI",
    "id": 125907818,
    "node_id": "U_kgDOB4Ezag",
    "avatar_url": "https://avatars.githubusercontent.com/u/125907818?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ASLAMKURESHI",
    "html_url": "https://github.com/ASLAMKURESHI",
    "followers_url": "https://api.github.com/users/ASLAMKURESHI/followers",
    "following_url": "https://api.github.com/users/ASLAMKURESHI/following{/other_user}",
    "gists_url": "https://api.github.com/users/ASLAMKURESHI/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ASLAMKURESHI/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ASLAMKURESHI/subscriptions",
    "organizations_url": "https://api.github.com/users/ASLAMKURESHI/orgs",
    "repos_url": "https://api.github.com/users/ASLAMKURESHI/repos",
    "events_url": "https://api.github.com/users/ASLAMKURESHI/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ASLAMKURESHI/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-02-20T16:53:23Z",
    "updated_at": "2024-10-07T19:35:43Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send('<h1>login at Chai Aur Code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>welcome at chai aur code</h2>')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})