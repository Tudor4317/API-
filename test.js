import fs from "fs"
import path from "path"
import { dirname } from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const path1 = path.join(__dirname, '.', 'keys', 'id_rsa_pub.pem')


console.log(path1)
