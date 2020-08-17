const req = require.context('./svg', false, /\.svg$/,"lazy") 
/* eslint-disable */

const requireAll = (requireContext: any) => {
    console.log(requireContext);
    return requireContext.keys().map(requireContext);
};
/* eslint-disable */
requireAll(req)
export default{}