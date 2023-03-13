const headings = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);
const emptySet = new Set([]);
const onlyValidChildren = {
  head: new Set([
    "base",
    "basefront",
    "bgsound",
    "link",
    "meta",
    "title",
    "noscript",
    "noframes",
    "style",
    "script",
    "template"
  ]),
  optgroup: new Set(["option"]),
  select: new Set(["optgroup", "option"]),
  math: new Set(["mrow"]),
  script: new Set(),
  table: new Set(["caption", "colgroup", "tbody", "tfoot", "thead"]),
  tr: new Set(["td", "th"]),
  colgroup: new Set(["col"]),
  tbody: new Set(["tr"]),
  thead: new Set(["tr"]),
  tfoot: new Set(["tr"]),
  iframe: emptySet,
  option: emptySet,
  textarea: emptySet,
  style: emptySet,
  title: emptySet
};
const onlyValidParents = {
  html: emptySet,
  body: new Set(["html"]),
  head: new Set(["html"]),
  td: new Set(["tr"]),
  colgroup: new Set(["table"]),
  caption: new Set(["table"]),
  tbody: new Set(["table"]),
  tfoot: new Set(["table"]),
  col: new Set(["colgroup"]),
  th: new Set(["tr"]),
  thead: new Set(["table"]),
  tr: new Set(["tbody", "thead", "tfoot"]),
  dd: new Set(["dl", "div"]),
  dt: new Set(["dl", "div"]),
  figcaption: new Set(["figure"]),
  summary: new Set(["details"]),
  area: new Set(["map"])
};
const knownInvalidChildren = {
  p: new Set([
    "address",
    "article",
    "aside",
    "blockquote",
    "center",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "fieldset",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "input",
    "hr",
    "li",
    "main",
    "nav",
    "menu",
    "ol",
    "p",
    "pre",
    "section",
    "table",
    "ul"
  ]),
  svg: new Set([
    "b",
    "blockquote",
    "br",
    "code",
    "dd",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "i",
    "img",
    "li",
    "menu",
    "meta",
    "ol",
    "p",
    "pre",
    "ruby",
    "s",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "table",
    "u",
    "ul",
    "var"
  ])
};
const knownInvalidParents = {
  a: new Set(["a"]),
  button: new Set(["button"]),
  dd: new Set(["dd", "dt"]),
  dt: new Set(["dd", "dt"]),
  form: new Set(["form"]),
  li: new Set(["li"]),
  h1: headings,
  h2: headings,
  h3: headings,
  h4: headings,
  h5: headings,
  h6: headings
};
var mapping = {
  onlyValidChildren,
  onlyValidParents,
  knownInvalidChildren,
  knownInvalidParents
};
const {
  onlyValidChildren: onlyValidChildren$1,
  onlyValidParents: onlyValidParents$1,
  knownInvalidChildren: knownInvalidChildren$1,
  knownInvalidParents: knownInvalidParents$1
} = mapping;
function isValidHTMLNesting(parent, child) {
  if (parent in onlyValidChildren$1) {
    return onlyValidChildren$1[parent].has(child);
  }
  if (child in onlyValidParents$1) {
    return onlyValidParents$1[child].has(parent);
  }
  if (parent in knownInvalidChildren$1) {
    if (knownInvalidChildren$1[parent].has(child))
      return false;
  }
  if (child in knownInvalidParents$1) {
    if (knownInvalidParents$1[child].has(parent))
      return false;
  }
  return true;
}
var src = {
  isValidHTMLNesting
};
export default src;
var isValidHTMLNesting$1 = src.isValidHTMLNesting;
export {src as __moduleExports, isValidHTMLNesting$1 as isValidHTMLNesting};