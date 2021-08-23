# React Deployment - two options

## Github Actions

- create your Github repo
- add a new folder `.github/workflows`
- add the `build-deploy.yml` file in this project
- in `package.json`, add a new key/value as:
  `"homepage": "https://<user>.github.io/<repo>"`

### In Github
- Go to `Settings`
- Go to `Pages`
- in `Source`, select `gh-pages` branch
- Click Save

Once the `build-deploy` action finishes running, the app should be live
at `https://<user>.github.io/<repo>`

## Render.com
- Create an account
- Go to Dashboard
- Click + New -> Static Site
- Select the repo (if not there, configure Github to allow permissions)
- Build Command -> `yarn build`
- Publish directory -> `build`
