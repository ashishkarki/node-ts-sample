import dotenv from 'dotenv-safe'

import add from '@src/calculate/add'

dotenv.config()

console.log(`calculate add: ${add(2, 3)}`)
console.log(`env variable: ${process.env.MY_VARIABLE}`)
