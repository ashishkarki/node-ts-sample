## Steps to take

1. First create a project folder (of course, you say!!)

2. Next, create a .gitignore file (if this happens automatically in your setup or via your IDE, skip this step)

   2.1 Add following (common) files/folders to the gitignore (also feel free to add more per your requirments)

```
    node_modules
    dist
    .env
    coverage
```

2.2 OR, if you are lazy like me copy a correct gitignore from github search. An example that I have used in this repo is at: https://github.com/TypeStrong/ts-node

3. Npm initialize the project using

   ` npm init -y`

4. A good practice is to save your node version to a .nvmrc file like so

   ` node -v > .nvmrc`

5. Next arm your Node project to work with typescript by installing these dev dependencies:

   ` npm add -D ts-node @types/node`

6. You also need a tsconfig file which tells the typescript compiler how to work with your project. You can do so by:

   ` npx tsc --init`

   6.1 Before you run this tsc command ensure that you have typescript installed. You can check your ts installation by executing the command:

   `tsc -v`.

   6.2 If tsc (typescript compiler) isn't installed, install it (globally here) by typing:

   `npm i -g typescript`

7. Next step, is to add linting (the process of checking your syntax and semantics are up to good standards) and `eslint` in this particular case. The way you do this is by installing an extension in VSCode (there should be same or similar plugins for other editors too) called `ESLint by Dirk Baeumer`.This extension will smartly scan your projects and show you hints around linting and bad code.

   7.1 All is not set yet with linting, you also need to install a npm package with which the ESLint extension will work in conjunction with you perform aforementioned checks. You can do this by typing

   `npm add -D eslint`

   7.2 Once last step around linter, promise!!. Configure linting using the following command:

   `npx eslint --init`

   This command will ask you a few questions around how you what to configure things - make the best judgement call based on your requirements. Take a peek at the `eslint.json` file for an example.

   7.3 The result of all this would be a eslintrc.js file which is where you would have all eslint current and future configurations.

   7.4 Also, create an .eslintignore file that will have a list of files or folders that do not need to be checked by the linter.

8. We will also install the `prettier` package. There are also two aspects to it (a) install the Prettier extension on VSCode (b) install the npm package for dev mode like so `npm add -D prettier`

   8.1 In addition, create a .prettierrc file which contains all the configurations around the usage of prettier plugin. You can find some good samples online and a good example is the corresponding file that comes with this repo.

9. Next step, is to add some more configurations into the eslintrc.js file. We do this by adding a few npm packages. Execute the following commands into the terminal:
   ` npm i -D eslint-plugin-prettier eslint-config-prettier`
   `npm i -D eslint-import-resolver-typescript tsconfig-paths`
