import md5 from 'md5'

const  privateKey = "10e7ca7b3e668af1268f319125ac1539ac2db5a9"
const publicKey= "a66083d6f5a0ef73c7e457401967249e"
const timestamp= Date.now()
const hash = md5(timestamp + privateKey + publicKey)
export default {
    ts:timestamp,
    apikey: publicKey,
    hash: hash
}