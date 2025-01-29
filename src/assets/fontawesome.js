import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faMagnifyingGlass,
    faBars,
    faTimes,
    faUser
} from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faBars, faTimes, faUser)

export default FontAwesomeIcon