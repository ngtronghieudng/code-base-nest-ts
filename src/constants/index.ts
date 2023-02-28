import routeApis from './route-apis'
import routeTags from './route-tags'

export interface ConstantsProps {
  routeApis: typeof routeApis
  routeTags: typeof routeTags
}

const constants: ConstantsProps = {
  routeApis,
  routeTags,
}

export default constants
