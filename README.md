# React App

## Package.json
- your entry point to any app 
- holds configuration, metadata (version, name, etc), dependencies and scripts

### Dependencies
- npm -> Node Package Manager
- command line tool that installs, updates or uninstalls Node.js packages in your application
- online repository for open-source Node.js packages
- https://npmjs.com/
- Install locally: `npm install <package name>`
- Install globally: `npm install -g <package name>`
- Install and Save to package.json: `npm install <package name> --save`
- Uninstall `npm uninstall <package name>`

### BrowsersList
- defines what browsers our app can run on. That is, the build process makes sure the 
  output artifact can run in the specified browsers
- to check what each query means, run `npx browserslist <query>`

## index.html
- traditional html file
- you can add dependencies here too (not recommended)
- PUBLIC_URL -> use this instead of ./ to avoid problems

# Building
- simply run `npm run build`
- `yarn global add serve`
- `serve -s build`

# Deployment

## Github Actions

- create your Github repo
- add a new folder `.github/workflows`
- add the `build-deploy.yml` file in this project
- in `package.json`, add a new key/value as:
  `"homepage": "https://prof-tejera.github.io/<repo>"`
- commit your files (make sure package-lock.json is there)

### In Github
- Go to `Settings`
- Go to `Pages`
- in `Source`, select `gh-pages` branch
- Click Save

Once the `build-deploy` action finishes running, the app should be live
at `https://prof-tejera.github.io/<repo>`

## Render.com
- Create an account
- Go to Dashboard
- Click + New -> Static Site
- Select the repo (if not there, configure Github to allow permissions)
- Build Command -> `yarn build`
- Publish directory -> `build`
