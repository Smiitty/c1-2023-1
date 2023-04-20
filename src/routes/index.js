import user_infoJSON from './../dataset/users_info.json'
let users = []
users = user_infoJSON
// en las 3 líneas de código adjuntas arriba se asocia a la variable local users los datos referentes al archivo .json users_info, para ser ocupado en los endpoints
import Router from 'koa-router'
import getHealth from './health/health'
//import getUserbyNameOrder from '/userRepository.js'

const router = new Router()

router.get('/health', getHealth)
router.get('api/users/:name', users.getUserbyNameOrder)// endpoint con el cual llamamos la función getUserbyNameOrder
export default router
