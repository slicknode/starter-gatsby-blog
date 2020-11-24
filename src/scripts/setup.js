const util = require("util")
const exec = util.promisify(require("child_process").exec)
const readFile = util.promisify(require("fs").readFile)
const writeFile = util.promisify(require("fs").writeFile)
const fileExists = util.promisify(require("fs").exists)
const path = require("path")

;(async () => {
  const { stdout, stderr } = await exec("slicknode endpoint")

  if (stderr) {
    console.error(`Error: ${stderr}`)
    return
  }
  const endpoint = stdout.trim()
  console.log(`Adding GraphQL endpoint ${endpoint} to /.env file`)

  const envFile = path.resolve(path.join(__dirname, "..", "..", ".env"))
  let envFileExists = await fileExists(envFile, "utf8")
  if (envFileExists) {
    throw new Error(
      `An .env file already exists, please add the endpoint manually: \`SLICKNODE_ENDPOINT=${endpoint}\``
    )
  } else {
    // Write new env file
    const envFileContent = `SLICKNODE_ENDPOINT=${endpoint}\n`
    await writeFile(envFile, envFileContent)
    console.log(
      "\nSetup successful! Run `npm run develop` to start the local dev server\n"
    )
  }
})()
