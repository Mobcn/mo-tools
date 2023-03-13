let fastProto = null;
function FastObject(o) {
  if (fastProto !== null && typeof fastProto.property) {
    const result = fastProto;
    fastProto = FastObject.prototype = null;
    return result;
  }
  fastProto = FastObject.prototype = o == null ? Object.create(null) : o;
  return new FastObject();
}
FastObject();
var toFastProperties = function toFastproperties(o) {
  return FastObject(o);
};
export default toFastProperties;