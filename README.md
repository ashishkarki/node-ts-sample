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

Before you run this tsc command ensure that you have typescript installed. You can check your ts installation by executing the command:

`tsc -v`.

If tsc (typescript compiler) isn't installed, install it (globally here) by typing:

`npm i -g typescript`
