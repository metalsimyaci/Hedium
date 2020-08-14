const req = require.context('./svg', false, /\.svg$/,"lazy") 
console.warn("hasan");
console.log(req);
const requireAll = (requireContext) => {
    console.log(requireContext);
    return requireContext.keys().map(requireContext);
};
requireAll(req)
export default{}