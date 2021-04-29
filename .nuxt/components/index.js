import { wrapFunctional } from './utils'

export { default as Profile } from '../../components/Profile.vue'

export const LazyProfile = import('../../components/Profile.vue' /* webpackChunkName: "components/profile" */).then(c => wrapFunctional(c.default || c))
