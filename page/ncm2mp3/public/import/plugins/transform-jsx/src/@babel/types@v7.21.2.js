import _toFastProperties from "./to-fast-properties@v2.0.0.js";
import _helperValidatorIdentifier from "./helper-validator-identifier@v7.19.1.js";
import _helperStringParser from "./helper-string-parser@v7.19.4.js";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var shallowEqual_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = shallowEqual2;
  function shallowEqual2(actual, expected) {
    const keys = Object.keys(expected);
    for (const key of keys) {
      if (actual[key] !== expected[key]) {
        return false;
      }
    }
    return true;
  }
});
var deprecationWarning_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = deprecationWarning;
  const warnings = new Set();
  function deprecationWarning(oldName, newName, prefix = "") {
    if (warnings.has(oldName))
      return;
    warnings.add(oldName);
    const stack = captureShortStackTrace(1, 2);
    console.warn(`${prefix}\`${oldName}\` has been deprecated, please migrate to \`${newName}\`
${stack}`);
  }
  function captureShortStackTrace(skip, length) {
    const {
      stackTraceLimit,
      prepareStackTrace
    } = Error;
    let stackTrace;
    Error.stackTraceLimit = 1 + skip + length;
    Error.prepareStackTrace = function(err, stack) {
      stackTrace = stack;
    };
    Error.stackTraceLimit = stackTraceLimit;
    Error.prepareStackTrace = prepareStackTrace;
    return stackTrace.slice(1 + skip, 1 + skip + length).map((frame) => `    at ${frame}`).join("\n");
  }
});
var generated = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isAccessor = isAccessor2;
  exports.isAnyTypeAnnotation = isAnyTypeAnnotation2;
  exports.isArgumentPlaceholder = isArgumentPlaceholder2;
  exports.isArrayExpression = isArrayExpression2;
  exports.isArrayPattern = isArrayPattern2;
  exports.isArrayTypeAnnotation = isArrayTypeAnnotation2;
  exports.isArrowFunctionExpression = isArrowFunctionExpression2;
  exports.isAssignmentExpression = isAssignmentExpression2;
  exports.isAssignmentPattern = isAssignmentPattern2;
  exports.isAwaitExpression = isAwaitExpression2;
  exports.isBigIntLiteral = isBigIntLiteral2;
  exports.isBinary = isBinary2;
  exports.isBinaryExpression = isBinaryExpression2;
  exports.isBindExpression = isBindExpression2;
  exports.isBlock = isBlock2;
  exports.isBlockParent = isBlockParent2;
  exports.isBlockStatement = isBlockStatement2;
  exports.isBooleanLiteral = isBooleanLiteral2;
  exports.isBooleanLiteralTypeAnnotation = isBooleanLiteralTypeAnnotation2;
  exports.isBooleanTypeAnnotation = isBooleanTypeAnnotation2;
  exports.isBreakStatement = isBreakStatement2;
  exports.isCallExpression = isCallExpression2;
  exports.isCatchClause = isCatchClause2;
  exports.isClass = isClass2;
  exports.isClassAccessorProperty = isClassAccessorProperty2;
  exports.isClassBody = isClassBody2;
  exports.isClassDeclaration = isClassDeclaration2;
  exports.isClassExpression = isClassExpression2;
  exports.isClassImplements = isClassImplements2;
  exports.isClassMethod = isClassMethod2;
  exports.isClassPrivateMethod = isClassPrivateMethod2;
  exports.isClassPrivateProperty = isClassPrivateProperty2;
  exports.isClassProperty = isClassProperty2;
  exports.isCompletionStatement = isCompletionStatement2;
  exports.isConditional = isConditional2;
  exports.isConditionalExpression = isConditionalExpression2;
  exports.isContinueStatement = isContinueStatement2;
  exports.isDebuggerStatement = isDebuggerStatement2;
  exports.isDecimalLiteral = isDecimalLiteral2;
  exports.isDeclaration = isDeclaration2;
  exports.isDeclareClass = isDeclareClass2;
  exports.isDeclareExportAllDeclaration = isDeclareExportAllDeclaration2;
  exports.isDeclareExportDeclaration = isDeclareExportDeclaration2;
  exports.isDeclareFunction = isDeclareFunction2;
  exports.isDeclareInterface = isDeclareInterface2;
  exports.isDeclareModule = isDeclareModule2;
  exports.isDeclareModuleExports = isDeclareModuleExports2;
  exports.isDeclareOpaqueType = isDeclareOpaqueType2;
  exports.isDeclareTypeAlias = isDeclareTypeAlias2;
  exports.isDeclareVariable = isDeclareVariable2;
  exports.isDeclaredPredicate = isDeclaredPredicate2;
  exports.isDecorator = isDecorator2;
  exports.isDirective = isDirective2;
  exports.isDirectiveLiteral = isDirectiveLiteral2;
  exports.isDoExpression = isDoExpression2;
  exports.isDoWhileStatement = isDoWhileStatement2;
  exports.isEmptyStatement = isEmptyStatement2;
  exports.isEmptyTypeAnnotation = isEmptyTypeAnnotation2;
  exports.isEnumBody = isEnumBody2;
  exports.isEnumBooleanBody = isEnumBooleanBody2;
  exports.isEnumBooleanMember = isEnumBooleanMember2;
  exports.isEnumDeclaration = isEnumDeclaration2;
  exports.isEnumDefaultedMember = isEnumDefaultedMember2;
  exports.isEnumMember = isEnumMember2;
  exports.isEnumNumberBody = isEnumNumberBody2;
  exports.isEnumNumberMember = isEnumNumberMember2;
  exports.isEnumStringBody = isEnumStringBody2;
  exports.isEnumStringMember = isEnumStringMember2;
  exports.isEnumSymbolBody = isEnumSymbolBody2;
  exports.isExistsTypeAnnotation = isExistsTypeAnnotation2;
  exports.isExportAllDeclaration = isExportAllDeclaration2;
  exports.isExportDeclaration = isExportDeclaration2;
  exports.isExportDefaultDeclaration = isExportDefaultDeclaration2;
  exports.isExportDefaultSpecifier = isExportDefaultSpecifier2;
  exports.isExportNamedDeclaration = isExportNamedDeclaration2;
  exports.isExportNamespaceSpecifier = isExportNamespaceSpecifier2;
  exports.isExportSpecifier = isExportSpecifier2;
  exports.isExpression = isExpression2;
  exports.isExpressionStatement = isExpressionStatement2;
  exports.isExpressionWrapper = isExpressionWrapper2;
  exports.isFile = isFile2;
  exports.isFlow = isFlow2;
  exports.isFlowBaseAnnotation = isFlowBaseAnnotation2;
  exports.isFlowDeclaration = isFlowDeclaration2;
  exports.isFlowPredicate = isFlowPredicate2;
  exports.isFlowType = isFlowType2;
  exports.isFor = isFor2;
  exports.isForInStatement = isForInStatement2;
  exports.isForOfStatement = isForOfStatement2;
  exports.isForStatement = isForStatement2;
  exports.isForXStatement = isForXStatement2;
  exports.isFunction = isFunction2;
  exports.isFunctionDeclaration = isFunctionDeclaration2;
  exports.isFunctionExpression = isFunctionExpression2;
  exports.isFunctionParent = isFunctionParent2;
  exports.isFunctionTypeAnnotation = isFunctionTypeAnnotation2;
  exports.isFunctionTypeParam = isFunctionTypeParam2;
  exports.isGenericTypeAnnotation = isGenericTypeAnnotation2;
  exports.isIdentifier = isIdentifier2;
  exports.isIfStatement = isIfStatement2;
  exports.isImmutable = isImmutable2;
  exports.isImport = isImport2;
  exports.isImportAttribute = isImportAttribute2;
  exports.isImportDeclaration = isImportDeclaration2;
  exports.isImportDefaultSpecifier = isImportDefaultSpecifier2;
  exports.isImportNamespaceSpecifier = isImportNamespaceSpecifier2;
  exports.isImportOrExportDeclaration = isImportOrExportDeclaration2;
  exports.isImportSpecifier = isImportSpecifier2;
  exports.isIndexedAccessType = isIndexedAccessType2;
  exports.isInferredPredicate = isInferredPredicate2;
  exports.isInterfaceDeclaration = isInterfaceDeclaration2;
  exports.isInterfaceExtends = isInterfaceExtends2;
  exports.isInterfaceTypeAnnotation = isInterfaceTypeAnnotation2;
  exports.isInterpreterDirective = isInterpreterDirective2;
  exports.isIntersectionTypeAnnotation = isIntersectionTypeAnnotation2;
  exports.isJSX = isJSX2;
  exports.isJSXAttribute = isJSXAttribute2;
  exports.isJSXClosingElement = isJSXClosingElement2;
  exports.isJSXClosingFragment = isJSXClosingFragment2;
  exports.isJSXElement = isJSXElement2;
  exports.isJSXEmptyExpression = isJSXEmptyExpression2;
  exports.isJSXExpressionContainer = isJSXExpressionContainer2;
  exports.isJSXFragment = isJSXFragment2;
  exports.isJSXIdentifier = isJSXIdentifier2;
  exports.isJSXMemberExpression = isJSXMemberExpression2;
  exports.isJSXNamespacedName = isJSXNamespacedName2;
  exports.isJSXOpeningElement = isJSXOpeningElement2;
  exports.isJSXOpeningFragment = isJSXOpeningFragment2;
  exports.isJSXSpreadAttribute = isJSXSpreadAttribute2;
  exports.isJSXSpreadChild = isJSXSpreadChild2;
  exports.isJSXText = isJSXText2;
  exports.isLVal = isLVal2;
  exports.isLabeledStatement = isLabeledStatement2;
  exports.isLiteral = isLiteral2;
  exports.isLogicalExpression = isLogicalExpression2;
  exports.isLoop = isLoop2;
  exports.isMemberExpression = isMemberExpression2;
  exports.isMetaProperty = isMetaProperty2;
  exports.isMethod = isMethod2;
  exports.isMiscellaneous = isMiscellaneous2;
  exports.isMixedTypeAnnotation = isMixedTypeAnnotation2;
  exports.isModuleDeclaration = isModuleDeclaration2;
  exports.isModuleExpression = isModuleExpression2;
  exports.isModuleSpecifier = isModuleSpecifier2;
  exports.isNewExpression = isNewExpression2;
  exports.isNoop = isNoop2;
  exports.isNullLiteral = isNullLiteral2;
  exports.isNullLiteralTypeAnnotation = isNullLiteralTypeAnnotation2;
  exports.isNullableTypeAnnotation = isNullableTypeAnnotation2;
  exports.isNumberLiteral = isNumberLiteral2;
  exports.isNumberLiteralTypeAnnotation = isNumberLiteralTypeAnnotation2;
  exports.isNumberTypeAnnotation = isNumberTypeAnnotation2;
  exports.isNumericLiteral = isNumericLiteral2;
  exports.isObjectExpression = isObjectExpression2;
  exports.isObjectMember = isObjectMember2;
  exports.isObjectMethod = isObjectMethod2;
  exports.isObjectPattern = isObjectPattern2;
  exports.isObjectProperty = isObjectProperty2;
  exports.isObjectTypeAnnotation = isObjectTypeAnnotation2;
  exports.isObjectTypeCallProperty = isObjectTypeCallProperty2;
  exports.isObjectTypeIndexer = isObjectTypeIndexer2;
  exports.isObjectTypeInternalSlot = isObjectTypeInternalSlot2;
  exports.isObjectTypeProperty = isObjectTypeProperty2;
  exports.isObjectTypeSpreadProperty = isObjectTypeSpreadProperty2;
  exports.isOpaqueType = isOpaqueType2;
  exports.isOptionalCallExpression = isOptionalCallExpression2;
  exports.isOptionalIndexedAccessType = isOptionalIndexedAccessType2;
  exports.isOptionalMemberExpression = isOptionalMemberExpression2;
  exports.isParenthesizedExpression = isParenthesizedExpression2;
  exports.isPattern = isPattern2;
  exports.isPatternLike = isPatternLike2;
  exports.isPipelineBareFunction = isPipelineBareFunction2;
  exports.isPipelinePrimaryTopicReference = isPipelinePrimaryTopicReference2;
  exports.isPipelineTopicExpression = isPipelineTopicExpression2;
  exports.isPlaceholder = isPlaceholder2;
  exports.isPrivate = isPrivate2;
  exports.isPrivateName = isPrivateName2;
  exports.isProgram = isProgram2;
  exports.isProperty = isProperty2;
  exports.isPureish = isPureish2;
  exports.isQualifiedTypeIdentifier = isQualifiedTypeIdentifier2;
  exports.isRecordExpression = isRecordExpression2;
  exports.isRegExpLiteral = isRegExpLiteral2;
  exports.isRegexLiteral = isRegexLiteral2;
  exports.isRestElement = isRestElement2;
  exports.isRestProperty = isRestProperty2;
  exports.isReturnStatement = isReturnStatement2;
  exports.isScopable = isScopable2;
  exports.isSequenceExpression = isSequenceExpression2;
  exports.isSpreadElement = isSpreadElement2;
  exports.isSpreadProperty = isSpreadProperty2;
  exports.isStandardized = isStandardized2;
  exports.isStatement = isStatement2;
  exports.isStaticBlock = isStaticBlock2;
  exports.isStringLiteral = isStringLiteral2;
  exports.isStringLiteralTypeAnnotation = isStringLiteralTypeAnnotation2;
  exports.isStringTypeAnnotation = isStringTypeAnnotation2;
  exports.isSuper = isSuper2;
  exports.isSwitchCase = isSwitchCase2;
  exports.isSwitchStatement = isSwitchStatement2;
  exports.isSymbolTypeAnnotation = isSymbolTypeAnnotation2;
  exports.isTSAnyKeyword = isTSAnyKeyword2;
  exports.isTSArrayType = isTSArrayType2;
  exports.isTSAsExpression = isTSAsExpression2;
  exports.isTSBaseType = isTSBaseType2;
  exports.isTSBigIntKeyword = isTSBigIntKeyword2;
  exports.isTSBooleanKeyword = isTSBooleanKeyword2;
  exports.isTSCallSignatureDeclaration = isTSCallSignatureDeclaration2;
  exports.isTSConditionalType = isTSConditionalType2;
  exports.isTSConstructSignatureDeclaration = isTSConstructSignatureDeclaration2;
  exports.isTSConstructorType = isTSConstructorType2;
  exports.isTSDeclareFunction = isTSDeclareFunction2;
  exports.isTSDeclareMethod = isTSDeclareMethod2;
  exports.isTSEntityName = isTSEntityName2;
  exports.isTSEnumDeclaration = isTSEnumDeclaration2;
  exports.isTSEnumMember = isTSEnumMember2;
  exports.isTSExportAssignment = isTSExportAssignment2;
  exports.isTSExpressionWithTypeArguments = isTSExpressionWithTypeArguments2;
  exports.isTSExternalModuleReference = isTSExternalModuleReference2;
  exports.isTSFunctionType = isTSFunctionType2;
  exports.isTSImportEqualsDeclaration = isTSImportEqualsDeclaration2;
  exports.isTSImportType = isTSImportType2;
  exports.isTSIndexSignature = isTSIndexSignature2;
  exports.isTSIndexedAccessType = isTSIndexedAccessType2;
  exports.isTSInferType = isTSInferType2;
  exports.isTSInstantiationExpression = isTSInstantiationExpression2;
  exports.isTSInterfaceBody = isTSInterfaceBody2;
  exports.isTSInterfaceDeclaration = isTSInterfaceDeclaration2;
  exports.isTSIntersectionType = isTSIntersectionType2;
  exports.isTSIntrinsicKeyword = isTSIntrinsicKeyword2;
  exports.isTSLiteralType = isTSLiteralType2;
  exports.isTSMappedType = isTSMappedType2;
  exports.isTSMethodSignature = isTSMethodSignature2;
  exports.isTSModuleBlock = isTSModuleBlock2;
  exports.isTSModuleDeclaration = isTSModuleDeclaration2;
  exports.isTSNamedTupleMember = isTSNamedTupleMember2;
  exports.isTSNamespaceExportDeclaration = isTSNamespaceExportDeclaration2;
  exports.isTSNeverKeyword = isTSNeverKeyword2;
  exports.isTSNonNullExpression = isTSNonNullExpression2;
  exports.isTSNullKeyword = isTSNullKeyword2;
  exports.isTSNumberKeyword = isTSNumberKeyword2;
  exports.isTSObjectKeyword = isTSObjectKeyword2;
  exports.isTSOptionalType = isTSOptionalType2;
  exports.isTSParameterProperty = isTSParameterProperty2;
  exports.isTSParenthesizedType = isTSParenthesizedType2;
  exports.isTSPropertySignature = isTSPropertySignature2;
  exports.isTSQualifiedName = isTSQualifiedName2;
  exports.isTSRestType = isTSRestType2;
  exports.isTSSatisfiesExpression = isTSSatisfiesExpression2;
  exports.isTSStringKeyword = isTSStringKeyword2;
  exports.isTSSymbolKeyword = isTSSymbolKeyword2;
  exports.isTSThisType = isTSThisType2;
  exports.isTSTupleType = isTSTupleType2;
  exports.isTSType = isTSType2;
  exports.isTSTypeAliasDeclaration = isTSTypeAliasDeclaration2;
  exports.isTSTypeAnnotation = isTSTypeAnnotation2;
  exports.isTSTypeAssertion = isTSTypeAssertion2;
  exports.isTSTypeElement = isTSTypeElement2;
  exports.isTSTypeLiteral = isTSTypeLiteral2;
  exports.isTSTypeOperator = isTSTypeOperator2;
  exports.isTSTypeParameter = isTSTypeParameter2;
  exports.isTSTypeParameterDeclaration = isTSTypeParameterDeclaration2;
  exports.isTSTypeParameterInstantiation = isTSTypeParameterInstantiation2;
  exports.isTSTypePredicate = isTSTypePredicate2;
  exports.isTSTypeQuery = isTSTypeQuery2;
  exports.isTSTypeReference = isTSTypeReference2;
  exports.isTSUndefinedKeyword = isTSUndefinedKeyword2;
  exports.isTSUnionType = isTSUnionType2;
  exports.isTSUnknownKeyword = isTSUnknownKeyword2;
  exports.isTSVoidKeyword = isTSVoidKeyword2;
  exports.isTaggedTemplateExpression = isTaggedTemplateExpression2;
  exports.isTemplateElement = isTemplateElement2;
  exports.isTemplateLiteral = isTemplateLiteral2;
  exports.isTerminatorless = isTerminatorless2;
  exports.isThisExpression = isThisExpression2;
  exports.isThisTypeAnnotation = isThisTypeAnnotation2;
  exports.isThrowStatement = isThrowStatement2;
  exports.isTopicReference = isTopicReference2;
  exports.isTryStatement = isTryStatement2;
  exports.isTupleExpression = isTupleExpression2;
  exports.isTupleTypeAnnotation = isTupleTypeAnnotation2;
  exports.isTypeAlias = isTypeAlias2;
  exports.isTypeAnnotation = isTypeAnnotation2;
  exports.isTypeCastExpression = isTypeCastExpression2;
  exports.isTypeParameter = isTypeParameter2;
  exports.isTypeParameterDeclaration = isTypeParameterDeclaration2;
  exports.isTypeParameterInstantiation = isTypeParameterInstantiation2;
  exports.isTypeScript = isTypeScript2;
  exports.isTypeofTypeAnnotation = isTypeofTypeAnnotation2;
  exports.isUnaryExpression = isUnaryExpression2;
  exports.isUnaryLike = isUnaryLike2;
  exports.isUnionTypeAnnotation = isUnionTypeAnnotation2;
  exports.isUpdateExpression = isUpdateExpression2;
  exports.isUserWhitespacable = isUserWhitespacable2;
  exports.isV8IntrinsicIdentifier = isV8IntrinsicIdentifier2;
  exports.isVariableDeclaration = isVariableDeclaration2;
  exports.isVariableDeclarator = isVariableDeclarator2;
  exports.isVariance = isVariance2;
  exports.isVoidTypeAnnotation = isVoidTypeAnnotation2;
  exports.isWhile = isWhile2;
  exports.isWhileStatement = isWhileStatement2;
  exports.isWithStatement = isWithStatement2;
  exports.isYieldExpression = isYieldExpression2;
  function isArrayExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ArrayExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isAssignmentExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AssignmentExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isBinaryExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BinaryExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isInterpreterDirective2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "InterpreterDirective") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDirective2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Directive") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDirectiveLiteral2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DirectiveLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isBlockStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BlockStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isBreakStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BreakStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isCallExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "CallExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isCatchClause2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "CatchClause") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isConditionalExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ConditionalExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isContinueStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ContinueStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDebuggerStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DebuggerStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDoWhileStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DoWhileStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isEmptyStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EmptyStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isExpressionStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExpressionStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isFile2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "File") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isForInStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ForInStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isForStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ForStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isFunctionDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isFunctionExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isIdentifier2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Identifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isIfStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "IfStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isLabeledStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "LabeledStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isStringLiteral2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "StringLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isNumericLiteral2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NumericLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isNullLiteral2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NullLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isBooleanLiteral2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BooleanLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isRegExpLiteral2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "RegExpLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isLogicalExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "LogicalExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isMemberExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "MemberExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isNewExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NewExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isProgram2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Program") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectMethod2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectMethod") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectProperty2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isRestElement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "RestElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isReturnStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ReturnStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isSequenceExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "SequenceExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isParenthesizedExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ParenthesizedExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isSwitchCase2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "SwitchCase") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isSwitchStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "SwitchStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isThisExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ThisExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isThrowStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ThrowStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTryStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TryStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isUnaryExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "UnaryExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isUpdateExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "UpdateExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isVariableDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "VariableDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isVariableDeclarator2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "VariableDeclarator") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isWhileStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "WhileStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isWithStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "WithStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isAssignmentPattern2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AssignmentPattern") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isArrayPattern2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ArrayPattern") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isArrowFunctionExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ArrowFunctionExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isClassBody2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isClassExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isClassDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isExportAllDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportAllDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isExportDefaultDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportDefaultDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isExportNamedDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportNamedDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isExportSpecifier2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isForOfStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ForOfStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isImportDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ImportDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isImportDefaultSpecifier2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ImportDefaultSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isImportNamespaceSpecifier2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ImportNamespaceSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isImportSpecifier2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ImportSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isMetaProperty2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "MetaProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isClassMethod2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassMethod") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectPattern2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectPattern") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isSpreadElement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "SpreadElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isSuper2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Super") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTaggedTemplateExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TaggedTemplateExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTemplateElement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TemplateElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTemplateLiteral2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TemplateLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isYieldExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "YieldExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isAwaitExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AwaitExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isImport2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Import") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isBigIntLiteral2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BigIntLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isExportNamespaceSpecifier2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportNamespaceSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isOptionalMemberExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "OptionalMemberExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isOptionalCallExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "OptionalCallExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isClassProperty2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isClassAccessorProperty2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassAccessorProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isClassPrivateProperty2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassPrivateProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isClassPrivateMethod2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassPrivateMethod") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isPrivateName2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "PrivateName") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isStaticBlock2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "StaticBlock") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isAnyTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AnyTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isArrayTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ArrayTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isBooleanTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BooleanTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isBooleanLiteralTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BooleanLiteralTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isNullLiteralTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NullLiteralTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isClassImplements2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassImplements") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareClass2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareClass") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareFunction2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareFunction") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareInterface2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareInterface") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareModule2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareModule") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareModuleExports2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareModuleExports") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareTypeAlias2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareTypeAlias") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareOpaqueType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareOpaqueType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareVariable2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareVariable") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareExportDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareExportDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclareExportAllDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareExportAllDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclaredPredicate2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclaredPredicate") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isExistsTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExistsTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isFunctionTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isFunctionTypeParam2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionTypeParam") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isGenericTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "GenericTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isInferredPredicate2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "InferredPredicate") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isInterfaceExtends2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "InterfaceExtends") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isInterfaceDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "InterfaceDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isInterfaceTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "InterfaceTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isIntersectionTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "IntersectionTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isMixedTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "MixedTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isEmptyTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EmptyTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isNullableTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NullableTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isNumberLiteralTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NumberLiteralTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isNumberTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NumberTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectTypeInternalSlot2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectTypeInternalSlot") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectTypeCallProperty2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectTypeCallProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectTypeIndexer2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectTypeIndexer") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectTypeProperty2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectTypeProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectTypeSpreadProperty2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectTypeSpreadProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isOpaqueType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "OpaqueType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isQualifiedTypeIdentifier2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "QualifiedTypeIdentifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isStringLiteralTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "StringLiteralTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isStringTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "StringTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isSymbolTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "SymbolTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isThisTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ThisTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTupleTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TupleTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeofTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeofTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeAlias2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeAlias") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeCastExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeCastExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeParameter2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeParameter") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeParameterDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeParameterDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeParameterInstantiation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TypeParameterInstantiation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isUnionTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "UnionTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isVariance2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Variance") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isVoidTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "VoidTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumBooleanBody2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumBooleanBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumNumberBody2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumNumberBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumStringBody2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumStringBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumSymbolBody2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumSymbolBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumBooleanMember2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumBooleanMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumNumberMember2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumNumberMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumStringMember2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumStringMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumDefaultedMember2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumDefaultedMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isIndexedAccessType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "IndexedAccessType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isOptionalIndexedAccessType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "OptionalIndexedAccessType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXAttribute2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXAttribute") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXClosingElement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXClosingElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXElement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXEmptyExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXEmptyExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXExpressionContainer2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXExpressionContainer") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXSpreadChild2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXSpreadChild") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXIdentifier2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXIdentifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXMemberExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXMemberExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXNamespacedName2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXNamespacedName") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXOpeningElement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXOpeningElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXSpreadAttribute2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXSpreadAttribute") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXText2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXText") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXFragment2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXFragment") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXOpeningFragment2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXOpeningFragment") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSXClosingFragment2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXClosingFragment") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isNoop2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Noop") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isPlaceholder2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Placeholder") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isV8IntrinsicIdentifier2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "V8IntrinsicIdentifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isArgumentPlaceholder2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ArgumentPlaceholder") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isBindExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BindExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isImportAttribute2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ImportAttribute") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDecorator2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Decorator") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDoExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DoExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isExportDefaultSpecifier2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportDefaultSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isRecordExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "RecordExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTupleExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TupleExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDecimalLiteral2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DecimalLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isModuleExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ModuleExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTopicReference2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TopicReference") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isPipelineTopicExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "PipelineTopicExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isPipelineBareFunction2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "PipelineBareFunction") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isPipelinePrimaryTopicReference2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "PipelinePrimaryTopicReference") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSParameterProperty2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSParameterProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSDeclareFunction2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSDeclareFunction") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSDeclareMethod2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSDeclareMethod") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSQualifiedName2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSQualifiedName") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSCallSignatureDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSCallSignatureDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSConstructSignatureDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSConstructSignatureDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSPropertySignature2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSPropertySignature") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSMethodSignature2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSMethodSignature") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSIndexSignature2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSIndexSignature") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSAnyKeyword2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSAnyKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSBooleanKeyword2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSBooleanKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSBigIntKeyword2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSBigIntKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSIntrinsicKeyword2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSIntrinsicKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSNeverKeyword2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSNeverKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSNullKeyword2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSNullKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSNumberKeyword2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSNumberKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSObjectKeyword2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSObjectKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSStringKeyword2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSStringKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSSymbolKeyword2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSSymbolKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSUndefinedKeyword2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSUndefinedKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSUnknownKeyword2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSUnknownKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSVoidKeyword2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSVoidKeyword") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSThisType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSThisType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSFunctionType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSFunctionType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSConstructorType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSConstructorType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeReference2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeReference") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypePredicate2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypePredicate") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeQuery2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeQuery") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeLiteral2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSArrayType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSArrayType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTupleType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTupleType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSOptionalType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSOptionalType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSRestType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSRestType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSNamedTupleMember2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSNamedTupleMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSUnionType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSUnionType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSIntersectionType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSIntersectionType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSConditionalType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSConditionalType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSInferType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSInferType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSParenthesizedType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSParenthesizedType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeOperator2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeOperator") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSIndexedAccessType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSIndexedAccessType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSMappedType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSMappedType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSLiteralType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSLiteralType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSExpressionWithTypeArguments2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSExpressionWithTypeArguments") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSInterfaceDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSInterfaceDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSInterfaceBody2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSInterfaceBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeAliasDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeAliasDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSInstantiationExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSInstantiationExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSAsExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSAsExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSSatisfiesExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSSatisfiesExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeAssertion2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeAssertion") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSEnumDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSEnumDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSEnumMember2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSEnumMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSModuleDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSModuleDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSModuleBlock2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSModuleBlock") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSImportType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSImportType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSImportEqualsDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSImportEqualsDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSExternalModuleReference2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSExternalModuleReference") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSNonNullExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSNonNullExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSExportAssignment2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSExportAssignment") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSNamespaceExportDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSNamespaceExportDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeParameterInstantiation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeParameterInstantiation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeParameterDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeParameterDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeParameter2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSTypeParameter") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isStandardized2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ArrayExpression" || nodeType === "AssignmentExpression" || nodeType === "BinaryExpression" || nodeType === "InterpreterDirective" || nodeType === "Directive" || nodeType === "DirectiveLiteral" || nodeType === "BlockStatement" || nodeType === "BreakStatement" || nodeType === "CallExpression" || nodeType === "CatchClause" || nodeType === "ConditionalExpression" || nodeType === "ContinueStatement" || nodeType === "DebuggerStatement" || nodeType === "DoWhileStatement" || nodeType === "EmptyStatement" || nodeType === "ExpressionStatement" || nodeType === "File" || nodeType === "ForInStatement" || nodeType === "ForStatement" || nodeType === "FunctionDeclaration" || nodeType === "FunctionExpression" || nodeType === "Identifier" || nodeType === "IfStatement" || nodeType === "LabeledStatement" || nodeType === "StringLiteral" || nodeType === "NumericLiteral" || nodeType === "NullLiteral" || nodeType === "BooleanLiteral" || nodeType === "RegExpLiteral" || nodeType === "LogicalExpression" || nodeType === "MemberExpression" || nodeType === "NewExpression" || nodeType === "Program" || nodeType === "ObjectExpression" || nodeType === "ObjectMethod" || nodeType === "ObjectProperty" || nodeType === "RestElement" || nodeType === "ReturnStatement" || nodeType === "SequenceExpression" || nodeType === "ParenthesizedExpression" || nodeType === "SwitchCase" || nodeType === "SwitchStatement" || nodeType === "ThisExpression" || nodeType === "ThrowStatement" || nodeType === "TryStatement" || nodeType === "UnaryExpression" || nodeType === "UpdateExpression" || nodeType === "VariableDeclaration" || nodeType === "VariableDeclarator" || nodeType === "WhileStatement" || nodeType === "WithStatement" || nodeType === "AssignmentPattern" || nodeType === "ArrayPattern" || nodeType === "ArrowFunctionExpression" || nodeType === "ClassBody" || nodeType === "ClassExpression" || nodeType === "ClassDeclaration" || nodeType === "ExportAllDeclaration" || nodeType === "ExportDefaultDeclaration" || nodeType === "ExportNamedDeclaration" || nodeType === "ExportSpecifier" || nodeType === "ForOfStatement" || nodeType === "ImportDeclaration" || nodeType === "ImportDefaultSpecifier" || nodeType === "ImportNamespaceSpecifier" || nodeType === "ImportSpecifier" || nodeType === "MetaProperty" || nodeType === "ClassMethod" || nodeType === "ObjectPattern" || nodeType === "SpreadElement" || nodeType === "Super" || nodeType === "TaggedTemplateExpression" || nodeType === "TemplateElement" || nodeType === "TemplateLiteral" || nodeType === "YieldExpression" || nodeType === "AwaitExpression" || nodeType === "Import" || nodeType === "BigIntLiteral" || nodeType === "ExportNamespaceSpecifier" || nodeType === "OptionalMemberExpression" || nodeType === "OptionalCallExpression" || nodeType === "ClassProperty" || nodeType === "ClassAccessorProperty" || nodeType === "ClassPrivateProperty" || nodeType === "ClassPrivateMethod" || nodeType === "PrivateName" || nodeType === "StaticBlock" || nodeType === "Placeholder" && (node.expectedNode === "Identifier" || node.expectedNode === "StringLiteral" || node.expectedNode === "BlockStatement" || node.expectedNode === "ClassBody")) {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isExpression2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ArrayExpression" || nodeType === "AssignmentExpression" || nodeType === "BinaryExpression" || nodeType === "CallExpression" || nodeType === "ConditionalExpression" || nodeType === "FunctionExpression" || nodeType === "Identifier" || nodeType === "StringLiteral" || nodeType === "NumericLiteral" || nodeType === "NullLiteral" || nodeType === "BooleanLiteral" || nodeType === "RegExpLiteral" || nodeType === "LogicalExpression" || nodeType === "MemberExpression" || nodeType === "NewExpression" || nodeType === "ObjectExpression" || nodeType === "SequenceExpression" || nodeType === "ParenthesizedExpression" || nodeType === "ThisExpression" || nodeType === "UnaryExpression" || nodeType === "UpdateExpression" || nodeType === "ArrowFunctionExpression" || nodeType === "ClassExpression" || nodeType === "MetaProperty" || nodeType === "Super" || nodeType === "TaggedTemplateExpression" || nodeType === "TemplateLiteral" || nodeType === "YieldExpression" || nodeType === "AwaitExpression" || nodeType === "Import" || nodeType === "BigIntLiteral" || nodeType === "OptionalMemberExpression" || nodeType === "OptionalCallExpression" || nodeType === "TypeCastExpression" || nodeType === "JSXElement" || nodeType === "JSXFragment" || nodeType === "BindExpression" || nodeType === "DoExpression" || nodeType === "RecordExpression" || nodeType === "TupleExpression" || nodeType === "DecimalLiteral" || nodeType === "ModuleExpression" || nodeType === "TopicReference" || nodeType === "PipelineTopicExpression" || nodeType === "PipelineBareFunction" || nodeType === "PipelinePrimaryTopicReference" || nodeType === "TSInstantiationExpression" || nodeType === "TSAsExpression" || nodeType === "TSSatisfiesExpression" || nodeType === "TSTypeAssertion" || nodeType === "TSNonNullExpression" || nodeType === "Placeholder" && (node.expectedNode === "Expression" || node.expectedNode === "Identifier" || node.expectedNode === "StringLiteral")) {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isBinary2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BinaryExpression" || nodeType === "LogicalExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isScopable2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BlockStatement" || nodeType === "CatchClause" || nodeType === "DoWhileStatement" || nodeType === "ForInStatement" || nodeType === "ForStatement" || nodeType === "FunctionDeclaration" || nodeType === "FunctionExpression" || nodeType === "Program" || nodeType === "ObjectMethod" || nodeType === "SwitchStatement" || nodeType === "WhileStatement" || nodeType === "ArrowFunctionExpression" || nodeType === "ClassExpression" || nodeType === "ClassDeclaration" || nodeType === "ForOfStatement" || nodeType === "ClassMethod" || nodeType === "ClassPrivateMethod" || nodeType === "StaticBlock" || nodeType === "TSModuleBlock" || nodeType === "Placeholder" && node.expectedNode === "BlockStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isBlockParent2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BlockStatement" || nodeType === "CatchClause" || nodeType === "DoWhileStatement" || nodeType === "ForInStatement" || nodeType === "ForStatement" || nodeType === "FunctionDeclaration" || nodeType === "FunctionExpression" || nodeType === "Program" || nodeType === "ObjectMethod" || nodeType === "SwitchStatement" || nodeType === "WhileStatement" || nodeType === "ArrowFunctionExpression" || nodeType === "ForOfStatement" || nodeType === "ClassMethod" || nodeType === "ClassPrivateMethod" || nodeType === "StaticBlock" || nodeType === "TSModuleBlock" || nodeType === "Placeholder" && node.expectedNode === "BlockStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isBlock2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BlockStatement" || nodeType === "Program" || nodeType === "TSModuleBlock" || nodeType === "Placeholder" && node.expectedNode === "BlockStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BlockStatement" || nodeType === "BreakStatement" || nodeType === "ContinueStatement" || nodeType === "DebuggerStatement" || nodeType === "DoWhileStatement" || nodeType === "EmptyStatement" || nodeType === "ExpressionStatement" || nodeType === "ForInStatement" || nodeType === "ForStatement" || nodeType === "FunctionDeclaration" || nodeType === "IfStatement" || nodeType === "LabeledStatement" || nodeType === "ReturnStatement" || nodeType === "SwitchStatement" || nodeType === "ThrowStatement" || nodeType === "TryStatement" || nodeType === "VariableDeclaration" || nodeType === "WhileStatement" || nodeType === "WithStatement" || nodeType === "ClassDeclaration" || nodeType === "ExportAllDeclaration" || nodeType === "ExportDefaultDeclaration" || nodeType === "ExportNamedDeclaration" || nodeType === "ForOfStatement" || nodeType === "ImportDeclaration" || nodeType === "DeclareClass" || nodeType === "DeclareFunction" || nodeType === "DeclareInterface" || nodeType === "DeclareModule" || nodeType === "DeclareModuleExports" || nodeType === "DeclareTypeAlias" || nodeType === "DeclareOpaqueType" || nodeType === "DeclareVariable" || nodeType === "DeclareExportDeclaration" || nodeType === "DeclareExportAllDeclaration" || nodeType === "InterfaceDeclaration" || nodeType === "OpaqueType" || nodeType === "TypeAlias" || nodeType === "EnumDeclaration" || nodeType === "TSDeclareFunction" || nodeType === "TSInterfaceDeclaration" || nodeType === "TSTypeAliasDeclaration" || nodeType === "TSEnumDeclaration" || nodeType === "TSModuleDeclaration" || nodeType === "TSImportEqualsDeclaration" || nodeType === "TSExportAssignment" || nodeType === "TSNamespaceExportDeclaration" || nodeType === "Placeholder" && (node.expectedNode === "Statement" || node.expectedNode === "Declaration" || node.expectedNode === "BlockStatement")) {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTerminatorless2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BreakStatement" || nodeType === "ContinueStatement" || nodeType === "ReturnStatement" || nodeType === "ThrowStatement" || nodeType === "YieldExpression" || nodeType === "AwaitExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isCompletionStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "BreakStatement" || nodeType === "ContinueStatement" || nodeType === "ReturnStatement" || nodeType === "ThrowStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isConditional2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ConditionalExpression" || nodeType === "IfStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isLoop2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DoWhileStatement" || nodeType === "ForInStatement" || nodeType === "ForStatement" || nodeType === "WhileStatement" || nodeType === "ForOfStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isWhile2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DoWhileStatement" || nodeType === "WhileStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isExpressionWrapper2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExpressionStatement" || nodeType === "ParenthesizedExpression" || nodeType === "TypeCastExpression") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isFor2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ForInStatement" || nodeType === "ForStatement" || nodeType === "ForOfStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isForXStatement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ForInStatement" || nodeType === "ForOfStatement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isFunction2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionDeclaration" || nodeType === "FunctionExpression" || nodeType === "ObjectMethod" || nodeType === "ArrowFunctionExpression" || nodeType === "ClassMethod" || nodeType === "ClassPrivateMethod") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isFunctionParent2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionDeclaration" || nodeType === "FunctionExpression" || nodeType === "ObjectMethod" || nodeType === "ArrowFunctionExpression" || nodeType === "ClassMethod" || nodeType === "ClassPrivateMethod" || nodeType === "StaticBlock" || nodeType === "TSModuleBlock") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isPureish2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionDeclaration" || nodeType === "FunctionExpression" || nodeType === "StringLiteral" || nodeType === "NumericLiteral" || nodeType === "NullLiteral" || nodeType === "BooleanLiteral" || nodeType === "RegExpLiteral" || nodeType === "ArrowFunctionExpression" || nodeType === "BigIntLiteral" || nodeType === "DecimalLiteral" || nodeType === "Placeholder" && node.expectedNode === "StringLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "FunctionDeclaration" || nodeType === "VariableDeclaration" || nodeType === "ClassDeclaration" || nodeType === "ExportAllDeclaration" || nodeType === "ExportDefaultDeclaration" || nodeType === "ExportNamedDeclaration" || nodeType === "ImportDeclaration" || nodeType === "DeclareClass" || nodeType === "DeclareFunction" || nodeType === "DeclareInterface" || nodeType === "DeclareModule" || nodeType === "DeclareModuleExports" || nodeType === "DeclareTypeAlias" || nodeType === "DeclareOpaqueType" || nodeType === "DeclareVariable" || nodeType === "DeclareExportDeclaration" || nodeType === "DeclareExportAllDeclaration" || nodeType === "InterfaceDeclaration" || nodeType === "OpaqueType" || nodeType === "TypeAlias" || nodeType === "EnumDeclaration" || nodeType === "TSDeclareFunction" || nodeType === "TSInterfaceDeclaration" || nodeType === "TSTypeAliasDeclaration" || nodeType === "TSEnumDeclaration" || nodeType === "TSModuleDeclaration" || nodeType === "Placeholder" && node.expectedNode === "Declaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isPatternLike2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Identifier" || nodeType === "RestElement" || nodeType === "AssignmentPattern" || nodeType === "ArrayPattern" || nodeType === "ObjectPattern" || nodeType === "TSAsExpression" || nodeType === "TSSatisfiesExpression" || nodeType === "TSTypeAssertion" || nodeType === "TSNonNullExpression" || nodeType === "Placeholder" && (node.expectedNode === "Pattern" || node.expectedNode === "Identifier")) {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isLVal2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Identifier" || nodeType === "MemberExpression" || nodeType === "RestElement" || nodeType === "AssignmentPattern" || nodeType === "ArrayPattern" || nodeType === "ObjectPattern" || nodeType === "TSParameterProperty" || nodeType === "TSAsExpression" || nodeType === "TSSatisfiesExpression" || nodeType === "TSTypeAssertion" || nodeType === "TSNonNullExpression" || nodeType === "Placeholder" && (node.expectedNode === "Pattern" || node.expectedNode === "Identifier")) {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSEntityName2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Identifier" || nodeType === "TSQualifiedName" || nodeType === "Placeholder" && node.expectedNode === "Identifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isLiteral2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "StringLiteral" || nodeType === "NumericLiteral" || nodeType === "NullLiteral" || nodeType === "BooleanLiteral" || nodeType === "RegExpLiteral" || nodeType === "TemplateLiteral" || nodeType === "BigIntLiteral" || nodeType === "DecimalLiteral" || nodeType === "Placeholder" && node.expectedNode === "StringLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isImmutable2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "StringLiteral" || nodeType === "NumericLiteral" || nodeType === "NullLiteral" || nodeType === "BooleanLiteral" || nodeType === "BigIntLiteral" || nodeType === "JSXAttribute" || nodeType === "JSXClosingElement" || nodeType === "JSXElement" || nodeType === "JSXExpressionContainer" || nodeType === "JSXSpreadChild" || nodeType === "JSXOpeningElement" || nodeType === "JSXText" || nodeType === "JSXFragment" || nodeType === "JSXOpeningFragment" || nodeType === "JSXClosingFragment" || nodeType === "DecimalLiteral" || nodeType === "Placeholder" && node.expectedNode === "StringLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isUserWhitespacable2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectMethod" || nodeType === "ObjectProperty" || nodeType === "ObjectTypeInternalSlot" || nodeType === "ObjectTypeCallProperty" || nodeType === "ObjectTypeIndexer" || nodeType === "ObjectTypeProperty" || nodeType === "ObjectTypeSpreadProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isMethod2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectMethod" || nodeType === "ClassMethod" || nodeType === "ClassPrivateMethod") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isObjectMember2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectMethod" || nodeType === "ObjectProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isProperty2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ObjectProperty" || nodeType === "ClassProperty" || nodeType === "ClassAccessorProperty" || nodeType === "ClassPrivateProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isUnaryLike2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "UnaryExpression" || nodeType === "SpreadElement") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isPattern2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AssignmentPattern" || nodeType === "ArrayPattern" || nodeType === "ObjectPattern" || nodeType === "Placeholder" && node.expectedNode === "Pattern") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isClass2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassExpression" || nodeType === "ClassDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isImportOrExportDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportAllDeclaration" || nodeType === "ExportDefaultDeclaration" || nodeType === "ExportNamedDeclaration" || nodeType === "ImportDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isExportDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportAllDeclaration" || nodeType === "ExportDefaultDeclaration" || nodeType === "ExportNamedDeclaration") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isModuleSpecifier2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ExportSpecifier" || nodeType === "ImportDefaultSpecifier" || nodeType === "ImportNamespaceSpecifier" || nodeType === "ImportSpecifier" || nodeType === "ExportNamespaceSpecifier" || nodeType === "ExportDefaultSpecifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isAccessor2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassAccessorProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isPrivate2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "ClassPrivateProperty" || nodeType === "ClassPrivateMethod" || nodeType === "PrivateName") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isFlow2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AnyTypeAnnotation" || nodeType === "ArrayTypeAnnotation" || nodeType === "BooleanTypeAnnotation" || nodeType === "BooleanLiteralTypeAnnotation" || nodeType === "NullLiteralTypeAnnotation" || nodeType === "ClassImplements" || nodeType === "DeclareClass" || nodeType === "DeclareFunction" || nodeType === "DeclareInterface" || nodeType === "DeclareModule" || nodeType === "DeclareModuleExports" || nodeType === "DeclareTypeAlias" || nodeType === "DeclareOpaqueType" || nodeType === "DeclareVariable" || nodeType === "DeclareExportDeclaration" || nodeType === "DeclareExportAllDeclaration" || nodeType === "DeclaredPredicate" || nodeType === "ExistsTypeAnnotation" || nodeType === "FunctionTypeAnnotation" || nodeType === "FunctionTypeParam" || nodeType === "GenericTypeAnnotation" || nodeType === "InferredPredicate" || nodeType === "InterfaceExtends" || nodeType === "InterfaceDeclaration" || nodeType === "InterfaceTypeAnnotation" || nodeType === "IntersectionTypeAnnotation" || nodeType === "MixedTypeAnnotation" || nodeType === "EmptyTypeAnnotation" || nodeType === "NullableTypeAnnotation" || nodeType === "NumberLiteralTypeAnnotation" || nodeType === "NumberTypeAnnotation" || nodeType === "ObjectTypeAnnotation" || nodeType === "ObjectTypeInternalSlot" || nodeType === "ObjectTypeCallProperty" || nodeType === "ObjectTypeIndexer" || nodeType === "ObjectTypeProperty" || nodeType === "ObjectTypeSpreadProperty" || nodeType === "OpaqueType" || nodeType === "QualifiedTypeIdentifier" || nodeType === "StringLiteralTypeAnnotation" || nodeType === "StringTypeAnnotation" || nodeType === "SymbolTypeAnnotation" || nodeType === "ThisTypeAnnotation" || nodeType === "TupleTypeAnnotation" || nodeType === "TypeofTypeAnnotation" || nodeType === "TypeAlias" || nodeType === "TypeAnnotation" || nodeType === "TypeCastExpression" || nodeType === "TypeParameter" || nodeType === "TypeParameterDeclaration" || nodeType === "TypeParameterInstantiation" || nodeType === "UnionTypeAnnotation" || nodeType === "Variance" || nodeType === "VoidTypeAnnotation" || nodeType === "EnumDeclaration" || nodeType === "EnumBooleanBody" || nodeType === "EnumNumberBody" || nodeType === "EnumStringBody" || nodeType === "EnumSymbolBody" || nodeType === "EnumBooleanMember" || nodeType === "EnumNumberMember" || nodeType === "EnumStringMember" || nodeType === "EnumDefaultedMember" || nodeType === "IndexedAccessType" || nodeType === "OptionalIndexedAccessType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isFlowType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AnyTypeAnnotation" || nodeType === "ArrayTypeAnnotation" || nodeType === "BooleanTypeAnnotation" || nodeType === "BooleanLiteralTypeAnnotation" || nodeType === "NullLiteralTypeAnnotation" || nodeType === "ExistsTypeAnnotation" || nodeType === "FunctionTypeAnnotation" || nodeType === "GenericTypeAnnotation" || nodeType === "InterfaceTypeAnnotation" || nodeType === "IntersectionTypeAnnotation" || nodeType === "MixedTypeAnnotation" || nodeType === "EmptyTypeAnnotation" || nodeType === "NullableTypeAnnotation" || nodeType === "NumberLiteralTypeAnnotation" || nodeType === "NumberTypeAnnotation" || nodeType === "ObjectTypeAnnotation" || nodeType === "StringLiteralTypeAnnotation" || nodeType === "StringTypeAnnotation" || nodeType === "SymbolTypeAnnotation" || nodeType === "ThisTypeAnnotation" || nodeType === "TupleTypeAnnotation" || nodeType === "TypeofTypeAnnotation" || nodeType === "UnionTypeAnnotation" || nodeType === "VoidTypeAnnotation" || nodeType === "IndexedAccessType" || nodeType === "OptionalIndexedAccessType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isFlowBaseAnnotation2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "AnyTypeAnnotation" || nodeType === "BooleanTypeAnnotation" || nodeType === "NullLiteralTypeAnnotation" || nodeType === "MixedTypeAnnotation" || nodeType === "EmptyTypeAnnotation" || nodeType === "NumberTypeAnnotation" || nodeType === "StringTypeAnnotation" || nodeType === "SymbolTypeAnnotation" || nodeType === "ThisTypeAnnotation" || nodeType === "VoidTypeAnnotation") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isFlowDeclaration2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclareClass" || nodeType === "DeclareFunction" || nodeType === "DeclareInterface" || nodeType === "DeclareModule" || nodeType === "DeclareModuleExports" || nodeType === "DeclareTypeAlias" || nodeType === "DeclareOpaqueType" || nodeType === "DeclareVariable" || nodeType === "DeclareExportDeclaration" || nodeType === "DeclareExportAllDeclaration" || nodeType === "InterfaceDeclaration" || nodeType === "OpaqueType" || nodeType === "TypeAlias") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isFlowPredicate2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "DeclaredPredicate" || nodeType === "InferredPredicate") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumBody2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumBooleanBody" || nodeType === "EnumNumberBody" || nodeType === "EnumStringBody" || nodeType === "EnumSymbolBody") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isEnumMember2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "EnumBooleanMember" || nodeType === "EnumNumberMember" || nodeType === "EnumStringMember" || nodeType === "EnumDefaultedMember") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isJSX2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "JSXAttribute" || nodeType === "JSXClosingElement" || nodeType === "JSXElement" || nodeType === "JSXEmptyExpression" || nodeType === "JSXExpressionContainer" || nodeType === "JSXSpreadChild" || nodeType === "JSXIdentifier" || nodeType === "JSXMemberExpression" || nodeType === "JSXNamespacedName" || nodeType === "JSXOpeningElement" || nodeType === "JSXSpreadAttribute" || nodeType === "JSXText" || nodeType === "JSXFragment" || nodeType === "JSXOpeningFragment" || nodeType === "JSXClosingFragment") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isMiscellaneous2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "Noop" || nodeType === "Placeholder" || nodeType === "V8IntrinsicIdentifier") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTypeScript2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSParameterProperty" || nodeType === "TSDeclareFunction" || nodeType === "TSDeclareMethod" || nodeType === "TSQualifiedName" || nodeType === "TSCallSignatureDeclaration" || nodeType === "TSConstructSignatureDeclaration" || nodeType === "TSPropertySignature" || nodeType === "TSMethodSignature" || nodeType === "TSIndexSignature" || nodeType === "TSAnyKeyword" || nodeType === "TSBooleanKeyword" || nodeType === "TSBigIntKeyword" || nodeType === "TSIntrinsicKeyword" || nodeType === "TSNeverKeyword" || nodeType === "TSNullKeyword" || nodeType === "TSNumberKeyword" || nodeType === "TSObjectKeyword" || nodeType === "TSStringKeyword" || nodeType === "TSSymbolKeyword" || nodeType === "TSUndefinedKeyword" || nodeType === "TSUnknownKeyword" || nodeType === "TSVoidKeyword" || nodeType === "TSThisType" || nodeType === "TSFunctionType" || nodeType === "TSConstructorType" || nodeType === "TSTypeReference" || nodeType === "TSTypePredicate" || nodeType === "TSTypeQuery" || nodeType === "TSTypeLiteral" || nodeType === "TSArrayType" || nodeType === "TSTupleType" || nodeType === "TSOptionalType" || nodeType === "TSRestType" || nodeType === "TSNamedTupleMember" || nodeType === "TSUnionType" || nodeType === "TSIntersectionType" || nodeType === "TSConditionalType" || nodeType === "TSInferType" || nodeType === "TSParenthesizedType" || nodeType === "TSTypeOperator" || nodeType === "TSIndexedAccessType" || nodeType === "TSMappedType" || nodeType === "TSLiteralType" || nodeType === "TSExpressionWithTypeArguments" || nodeType === "TSInterfaceDeclaration" || nodeType === "TSInterfaceBody" || nodeType === "TSTypeAliasDeclaration" || nodeType === "TSInstantiationExpression" || nodeType === "TSAsExpression" || nodeType === "TSSatisfiesExpression" || nodeType === "TSTypeAssertion" || nodeType === "TSEnumDeclaration" || nodeType === "TSEnumMember" || nodeType === "TSModuleDeclaration" || nodeType === "TSModuleBlock" || nodeType === "TSImportType" || nodeType === "TSImportEqualsDeclaration" || nodeType === "TSExternalModuleReference" || nodeType === "TSNonNullExpression" || nodeType === "TSExportAssignment" || nodeType === "TSNamespaceExportDeclaration" || nodeType === "TSTypeAnnotation" || nodeType === "TSTypeParameterInstantiation" || nodeType === "TSTypeParameterDeclaration" || nodeType === "TSTypeParameter") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSTypeElement2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSCallSignatureDeclaration" || nodeType === "TSConstructSignatureDeclaration" || nodeType === "TSPropertySignature" || nodeType === "TSMethodSignature" || nodeType === "TSIndexSignature") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSAnyKeyword" || nodeType === "TSBooleanKeyword" || nodeType === "TSBigIntKeyword" || nodeType === "TSIntrinsicKeyword" || nodeType === "TSNeverKeyword" || nodeType === "TSNullKeyword" || nodeType === "TSNumberKeyword" || nodeType === "TSObjectKeyword" || nodeType === "TSStringKeyword" || nodeType === "TSSymbolKeyword" || nodeType === "TSUndefinedKeyword" || nodeType === "TSUnknownKeyword" || nodeType === "TSVoidKeyword" || nodeType === "TSThisType" || nodeType === "TSFunctionType" || nodeType === "TSConstructorType" || nodeType === "TSTypeReference" || nodeType === "TSTypePredicate" || nodeType === "TSTypeQuery" || nodeType === "TSTypeLiteral" || nodeType === "TSArrayType" || nodeType === "TSTupleType" || nodeType === "TSOptionalType" || nodeType === "TSRestType" || nodeType === "TSUnionType" || nodeType === "TSIntersectionType" || nodeType === "TSConditionalType" || nodeType === "TSInferType" || nodeType === "TSParenthesizedType" || nodeType === "TSTypeOperator" || nodeType === "TSIndexedAccessType" || nodeType === "TSMappedType" || nodeType === "TSLiteralType" || nodeType === "TSExpressionWithTypeArguments" || nodeType === "TSImportType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isTSBaseType2(node, opts) {
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "TSAnyKeyword" || nodeType === "TSBooleanKeyword" || nodeType === "TSBigIntKeyword" || nodeType === "TSIntrinsicKeyword" || nodeType === "TSNeverKeyword" || nodeType === "TSNullKeyword" || nodeType === "TSNumberKeyword" || nodeType === "TSObjectKeyword" || nodeType === "TSStringKeyword" || nodeType === "TSSymbolKeyword" || nodeType === "TSUndefinedKeyword" || nodeType === "TSUnknownKeyword" || nodeType === "TSVoidKeyword" || nodeType === "TSThisType" || nodeType === "TSLiteralType") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isNumberLiteral2(node, opts) {
    (0, deprecationWarning_1.default)("isNumberLiteral", "isNumericLiteral");
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "NumberLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isRegexLiteral2(node, opts) {
    (0, deprecationWarning_1.default)("isRegexLiteral", "isRegExpLiteral");
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "RegexLiteral") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isRestProperty2(node, opts) {
    (0, deprecationWarning_1.default)("isRestProperty", "isRestElement");
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "RestProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isSpreadProperty2(node, opts) {
    (0, deprecationWarning_1.default)("isSpreadProperty", "isSpreadElement");
    if (!node)
      return false;
    const nodeType = node.type;
    if (nodeType === "SpreadProperty") {
      if (typeof opts === "undefined") {
        return true;
      } else {
        return (0, shallowEqual_1.default)(node, opts);
      }
    }
    return false;
  }
  function isModuleDeclaration2(node, opts) {
    (0, deprecationWarning_1.default)("isModuleDeclaration", "isImportOrExportDeclaration");
    return isImportOrExportDeclaration2(node, opts);
  }
});
var matchesPattern_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = matchesPattern2;
  function matchesPattern2(member, match, allowPartial) {
    if (!(0, generated.isMemberExpression)(member))
      return false;
    const parts = Array.isArray(match) ? match : match.split(".");
    const nodes = [];
    let node;
    for (node = member; (0, generated.isMemberExpression)(node); node = node.object) {
      nodes.push(node.property);
    }
    nodes.push(node);
    if (nodes.length < parts.length)
      return false;
    if (!allowPartial && nodes.length > parts.length)
      return false;
    for (let i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
      const node2 = nodes[j];
      let value;
      if ((0, generated.isIdentifier)(node2)) {
        value = node2.name;
      } else if ((0, generated.isStringLiteral)(node2)) {
        value = node2.value;
      } else if ((0, generated.isThisExpression)(node2)) {
        value = "this";
      } else {
        return false;
      }
      if (parts[i] !== value)
        return false;
    }
    return true;
  }
});
var buildMatchMemberExpression_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = buildMatchMemberExpression2;
  function buildMatchMemberExpression2(match, allowPartial) {
    const parts = match.split(".");
    return (member) => (0, matchesPattern_1.default)(member, parts, allowPartial);
  }
});
var isReactComponent_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  const isReactComponent = (0, buildMatchMemberExpression_1.default)("React.Component");
  var _default = isReactComponent;
  exports.default = _default;
});
var isCompatTag_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isCompatTag;
  function isCompatTag(tagName) {
    return !!tagName && /^[a-z]/.test(tagName);
  }
});
var isType_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isType2;
  function isType2(nodeType, targetType) {
    if (nodeType === targetType)
      return true;
    if (definitions.ALIAS_KEYS[targetType])
      return false;
    const aliases = definitions.FLIPPED_ALIAS_KEYS[targetType];
    if (aliases) {
      if (aliases[0] === nodeType)
        return true;
      for (const alias of aliases) {
        if (nodeType === alias)
          return true;
      }
    }
    return false;
  }
});
var isPlaceholderType_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isPlaceholderType2;
  function isPlaceholderType2(placeholderType, targetType) {
    if (placeholderType === targetType)
      return true;
    const aliases = definitions.PLACEHOLDERS_ALIAS[placeholderType];
    if (aliases) {
      for (const alias of aliases) {
        if (targetType === alias)
          return true;
      }
    }
    return false;
  }
});
var is_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = is2;
  function is2(type, node, opts) {
    if (!node)
      return false;
    const matches = (0, isType_1.default)(node.type, type);
    if (!matches) {
      if (!opts && node.type === "Placeholder" && type in definitions.FLIPPED_ALIAS_KEYS) {
        return (0, isPlaceholderType_1.default)(node.expectedNode, type);
      }
      return false;
    }
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, shallowEqual_1.default)(node, opts);
    }
  }
});
var isValidIdentifier_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isValidIdentifier2;
  function isValidIdentifier2(name, reserved = true) {
    if (typeof name !== "string")
      return false;
    if (reserved) {
      if ((0, _helperValidatorIdentifier.isKeyword)(name) || (0, _helperValidatorIdentifier.isStrictReservedWord)(name, true)) {
        return false;
      }
    }
    return (0, _helperValidatorIdentifier.isIdentifierName)(name);
  }
});
var constants = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UPDATE_OPERATORS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.STATEMENT_OR_BLOCK_KEYS = exports.NUMBER_UNARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.NOT_LOCAL_BINDING = exports.LOGICAL_OPERATORS = exports.INHERIT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.EQUALITY_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.COMMENT_KEYS = exports.BOOLEAN_UNARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.BLOCK_SCOPED_SYMBOL = exports.BINARY_OPERATORS = exports.ASSIGNMENT_OPERATORS = void 0;
  const STATEMENT_OR_BLOCK_KEYS2 = ["consequent", "body", "alternate"];
  exports.STATEMENT_OR_BLOCK_KEYS = STATEMENT_OR_BLOCK_KEYS2;
  const FLATTENABLE_KEYS2 = ["body", "expressions"];
  exports.FLATTENABLE_KEYS = FLATTENABLE_KEYS2;
  const FOR_INIT_KEYS2 = ["left", "init"];
  exports.FOR_INIT_KEYS = FOR_INIT_KEYS2;
  const COMMENT_KEYS2 = ["leadingComments", "trailingComments", "innerComments"];
  exports.COMMENT_KEYS = COMMENT_KEYS2;
  const LOGICAL_OPERATORS2 = ["||", "&&", "??"];
  exports.LOGICAL_OPERATORS = LOGICAL_OPERATORS2;
  const UPDATE_OPERATORS2 = ["++", "--"];
  exports.UPDATE_OPERATORS = UPDATE_OPERATORS2;
  const BOOLEAN_NUMBER_BINARY_OPERATORS2 = [">", "<", ">=", "<="];
  exports.BOOLEAN_NUMBER_BINARY_OPERATORS = BOOLEAN_NUMBER_BINARY_OPERATORS2;
  const EQUALITY_BINARY_OPERATORS2 = ["==", "===", "!=", "!=="];
  exports.EQUALITY_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS2;
  const COMPARISON_BINARY_OPERATORS2 = [...EQUALITY_BINARY_OPERATORS2, "in", "instanceof"];
  exports.COMPARISON_BINARY_OPERATORS = COMPARISON_BINARY_OPERATORS2;
  const BOOLEAN_BINARY_OPERATORS2 = [...COMPARISON_BINARY_OPERATORS2, ...BOOLEAN_NUMBER_BINARY_OPERATORS2];
  exports.BOOLEAN_BINARY_OPERATORS = BOOLEAN_BINARY_OPERATORS2;
  const NUMBER_BINARY_OPERATORS2 = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
  exports.NUMBER_BINARY_OPERATORS = NUMBER_BINARY_OPERATORS2;
  const BINARY_OPERATORS2 = ["+", ...NUMBER_BINARY_OPERATORS2, ...BOOLEAN_BINARY_OPERATORS2, "|>"];
  exports.BINARY_OPERATORS = BINARY_OPERATORS2;
  const ASSIGNMENT_OPERATORS2 = ["=", "+=", ...NUMBER_BINARY_OPERATORS2.map((op) => op + "="), ...LOGICAL_OPERATORS2.map((op) => op + "=")];
  exports.ASSIGNMENT_OPERATORS = ASSIGNMENT_OPERATORS2;
  const BOOLEAN_UNARY_OPERATORS2 = ["delete", "!"];
  exports.BOOLEAN_UNARY_OPERATORS = BOOLEAN_UNARY_OPERATORS2;
  const NUMBER_UNARY_OPERATORS2 = ["+", "-", "~"];
  exports.NUMBER_UNARY_OPERATORS = NUMBER_UNARY_OPERATORS2;
  const STRING_UNARY_OPERATORS2 = ["typeof"];
  exports.STRING_UNARY_OPERATORS = STRING_UNARY_OPERATORS2;
  const UNARY_OPERATORS2 = ["void", "throw", ...BOOLEAN_UNARY_OPERATORS2, ...NUMBER_UNARY_OPERATORS2, ...STRING_UNARY_OPERATORS2];
  exports.UNARY_OPERATORS = UNARY_OPERATORS2;
  const INHERIT_KEYS2 = {
    optional: ["typeAnnotation", "typeParameters", "returnType"],
    force: ["start", "loc", "end"]
  };
  exports.INHERIT_KEYS = INHERIT_KEYS2;
  const BLOCK_SCOPED_SYMBOL2 = Symbol.for("var used to be block scoped");
  exports.BLOCK_SCOPED_SYMBOL = BLOCK_SCOPED_SYMBOL2;
  const NOT_LOCAL_BINDING2 = Symbol.for("should not be considered a local binding");
  exports.NOT_LOCAL_BINDING = NOT_LOCAL_BINDING2;
});
var utils = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.VISITOR_KEYS = exports.NODE_PARENT_VALIDATIONS = exports.NODE_FIELDS = exports.FLIPPED_ALIAS_KEYS = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.ALIAS_KEYS = void 0;
  exports.arrayOf = arrayOf;
  exports.arrayOfType = arrayOfType;
  exports.assertEach = assertEach;
  exports.assertNodeOrValueType = assertNodeOrValueType;
  exports.assertNodeType = assertNodeType;
  exports.assertOneOf = assertOneOf;
  exports.assertOptionalChainStart = assertOptionalChainStart;
  exports.assertShape = assertShape;
  exports.assertValueType = assertValueType;
  exports.chain = chain;
  exports.default = defineType2;
  exports.defineAliasedType = defineAliasedType;
  exports.typeIs = typeIs;
  exports.validate = validate2;
  exports.validateArrayOfType = validateArrayOfType;
  exports.validateOptional = validateOptional;
  exports.validateOptionalType = validateOptionalType;
  exports.validateType = validateType;
  const VISITOR_KEYS2 = {};
  exports.VISITOR_KEYS = VISITOR_KEYS2;
  const ALIAS_KEYS2 = {};
  exports.ALIAS_KEYS = ALIAS_KEYS2;
  const FLIPPED_ALIAS_KEYS2 = {};
  exports.FLIPPED_ALIAS_KEYS = FLIPPED_ALIAS_KEYS2;
  const NODE_FIELDS2 = {};
  exports.NODE_FIELDS = NODE_FIELDS2;
  const BUILDER_KEYS2 = {};
  exports.BUILDER_KEYS = BUILDER_KEYS2;
  const DEPRECATED_KEYS2 = {};
  exports.DEPRECATED_KEYS = DEPRECATED_KEYS2;
  const NODE_PARENT_VALIDATIONS2 = {};
  exports.NODE_PARENT_VALIDATIONS = NODE_PARENT_VALIDATIONS2;
  function getType(val) {
    if (Array.isArray(val)) {
      return "array";
    } else if (val === null) {
      return "null";
    } else {
      return typeof val;
    }
  }
  function validate2(validate3) {
    return {
      validate: validate3
    };
  }
  function typeIs(typeName) {
    return typeof typeName === "string" ? assertNodeType(typeName) : assertNodeType(...typeName);
  }
  function validateType(typeName) {
    return validate2(typeIs(typeName));
  }
  function validateOptional(validate3) {
    return {
      validate: validate3,
      optional: true
    };
  }
  function validateOptionalType(typeName) {
    return {
      validate: typeIs(typeName),
      optional: true
    };
  }
  function arrayOf(elementType) {
    return chain(assertValueType("array"), assertEach(elementType));
  }
  function arrayOfType(typeName) {
    return arrayOf(typeIs(typeName));
  }
  function validateArrayOfType(typeName) {
    return validate2(arrayOfType(typeName));
  }
  function assertEach(callback) {
    function validator(node, key, val) {
      if (!Array.isArray(val))
        return;
      for (let i = 0; i < val.length; i++) {
        const subkey = `${key}[${i}]`;
        const v = val[i];
        callback(node, subkey, v);
      }
    }
    validator.each = callback;
    return validator;
  }
  function assertOneOf(...values) {
    function validate3(node, key, val) {
      if (values.indexOf(val) < 0) {
        throw new TypeError(`Property ${key} expected value to be one of ${JSON.stringify(values)} but got ${JSON.stringify(val)}`);
      }
    }
    validate3.oneOf = values;
    return validate3;
  }
  function assertNodeType(...types) {
    function validate3(node, key, val) {
      for (const type of types) {
        if ((0, is_1.default)(type, val)) {
          (0, validate_1.validateChild)(node, key, val);
          return;
        }
      }
      throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
    }
    validate3.oneOfNodeTypes = types;
    return validate3;
  }
  function assertNodeOrValueType(...types) {
    function validate3(node, key, val) {
      for (const type of types) {
        if (getType(val) === type || (0, is_1.default)(type, val)) {
          (0, validate_1.validateChild)(node, key, val);
          return;
        }
      }
      throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
    }
    validate3.oneOfNodeOrValueTypes = types;
    return validate3;
  }
  function assertValueType(type) {
    function validate3(node, key, val) {
      const valid = getType(val) === type;
      if (!valid) {
        throw new TypeError(`Property ${key} expected type of ${type} but got ${getType(val)}`);
      }
    }
    validate3.type = type;
    return validate3;
  }
  function assertShape(shape) {
    function validate3(node, key, val) {
      const errors = [];
      for (const property of Object.keys(shape)) {
        try {
          (0, validate_1.validateField)(node, property, val[property], shape[property]);
        } catch (error) {
          if (error instanceof TypeError) {
            errors.push(error.message);
            continue;
          }
          throw error;
        }
      }
      if (errors.length) {
        throw new TypeError(`Property ${key} of ${node.type} expected to have the following:
${errors.join("\n")}`);
      }
    }
    validate3.shapeOf = shape;
    return validate3;
  }
  function assertOptionalChainStart() {
    function validate3(node) {
      var _current;
      let current = node;
      while (node) {
        const {
          type
        } = current;
        if (type === "OptionalCallExpression") {
          if (current.optional)
            return;
          current = current.callee;
          continue;
        }
        if (type === "OptionalMemberExpression") {
          if (current.optional)
            return;
          current = current.object;
          continue;
        }
        break;
      }
      throw new TypeError(`Non-optional ${node.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${(_current = current) == null ? void 0 : _current.type}`);
    }
    return validate3;
  }
  function chain(...fns) {
    function validate3(...args) {
      for (const fn of fns) {
        fn(...args);
      }
    }
    validate3.chainOf = fns;
    if (fns.length >= 2 && "type" in fns[0] && fns[0].type === "array" && !("each" in fns[1])) {
      throw new Error(`An assertValueType("array") validator can only be followed by an assertEach(...) validator.`);
    }
    return validate3;
  }
  const validTypeOpts = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"];
  const validFieldKeys = ["default", "optional", "validate"];
  const store = {};
  function defineAliasedType(...aliases) {
    return (type, opts = {}) => {
      let defined = opts.aliases;
      if (!defined) {
        var _store$opts$inherits$, _defined;
        if (opts.inherits)
          defined = (_store$opts$inherits$ = store[opts.inherits].aliases) == null ? void 0 : _store$opts$inherits$.slice();
        (_defined = defined) != null ? _defined : defined = [];
        opts.aliases = defined;
      }
      const additional = aliases.filter((a) => !defined.includes(a));
      defined.unshift(...additional);
      return defineType2(type, opts);
    };
  }
  function defineType2(type, opts = {}) {
    const inherits2 = opts.inherits && store[opts.inherits] || {};
    let fields = opts.fields;
    if (!fields) {
      fields = {};
      if (inherits2.fields) {
        const keys = Object.getOwnPropertyNames(inherits2.fields);
        for (const key of keys) {
          const field = inherits2.fields[key];
          const def = field.default;
          if (Array.isArray(def) ? def.length > 0 : def && typeof def === "object") {
            throw new Error("field defaults can only be primitives or empty arrays currently");
          }
          fields[key] = {
            default: Array.isArray(def) ? [] : def,
            optional: field.optional,
            validate: field.validate
          };
        }
      }
    }
    const visitor = opts.visitor || inherits2.visitor || [];
    const aliases = opts.aliases || inherits2.aliases || [];
    const builder = opts.builder || inherits2.builder || opts.visitor || [];
    for (const k of Object.keys(opts)) {
      if (validTypeOpts.indexOf(k) === -1) {
        throw new Error(`Unknown type option "${k}" on ${type}`);
      }
    }
    if (opts.deprecatedAlias) {
      DEPRECATED_KEYS2[opts.deprecatedAlias] = type;
    }
    for (const key of visitor.concat(builder)) {
      fields[key] = fields[key] || {};
    }
    for (const key of Object.keys(fields)) {
      const field = fields[key];
      if (field.default !== void 0 && builder.indexOf(key) === -1) {
        field.optional = true;
      }
      if (field.default === void 0) {
        field.default = null;
      } else if (!field.validate && field.default != null) {
        field.validate = assertValueType(getType(field.default));
      }
      for (const k of Object.keys(field)) {
        if (validFieldKeys.indexOf(k) === -1) {
          throw new Error(`Unknown field key "${k}" on ${type}.${key}`);
        }
      }
    }
    VISITOR_KEYS2[type] = opts.visitor = visitor;
    BUILDER_KEYS2[type] = opts.builder = builder;
    NODE_FIELDS2[type] = opts.fields = fields;
    ALIAS_KEYS2[type] = opts.aliases = aliases;
    aliases.forEach((alias) => {
      FLIPPED_ALIAS_KEYS2[alias] = FLIPPED_ALIAS_KEYS2[alias] || [];
      FLIPPED_ALIAS_KEYS2[alias].push(type);
    });
    if (opts.validate) {
      NODE_PARENT_VALIDATIONS2[type] = opts.validate;
    }
    store[type] = opts;
  }
});
var core = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.patternLikeCommon = exports.functionTypeAnnotationCommon = exports.functionDeclarationCommon = exports.functionCommon = exports.classMethodOrPropertyCommon = exports.classMethodOrDeclareMethodCommon = void 0;
  const defineType2 = (0, utils.defineAliasedType)("Standardized");
  defineType2("ArrayExpression", {
    fields: {
      elements: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
        default: []
      }
    },
    visitor: ["elements"],
    aliases: ["Expression"]
  });
  defineType2("AssignmentExpression", {
    fields: {
      operator: {
        validate: function() {
          {
            return (0, utils.assertValueType)("string");
          }
        }()
      },
      left: {
        validate: (0, utils.assertNodeType)("LVal")
      },
      right: {
        validate: (0, utils.assertNodeType)("Expression")
      }
    },
    builder: ["operator", "left", "right"],
    visitor: ["left", "right"],
    aliases: ["Expression"]
  });
  defineType2("BinaryExpression", {
    builder: ["operator", "left", "right"],
    fields: {
      operator: {
        validate: (0, utils.assertOneOf)(...constants.BINARY_OPERATORS)
      },
      left: {
        validate: function() {
          const expression = (0, utils.assertNodeType)("Expression");
          const inOp = (0, utils.assertNodeType)("Expression", "PrivateName");
          const validator = Object.assign(function(node, key, val) {
            const validator2 = node.operator === "in" ? inOp : expression;
            validator2(node, key, val);
          }, {
            oneOfNodeTypes: ["Expression", "PrivateName"]
          });
          return validator;
        }()
      },
      right: {
        validate: (0, utils.assertNodeType)("Expression")
      }
    },
    visitor: ["left", "right"],
    aliases: ["Binary", "Expression"]
  });
  defineType2("InterpreterDirective", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, utils.assertValueType)("string")
      }
    }
  });
  defineType2("Directive", {
    visitor: ["value"],
    fields: {
      value: {
        validate: (0, utils.assertNodeType)("DirectiveLiteral")
      }
    }
  });
  defineType2("DirectiveLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, utils.assertValueType)("string")
      }
    }
  });
  defineType2("BlockStatement", {
    builder: ["body", "directives"],
    visitor: ["directives", "body"],
    fields: {
      directives: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Directive"))),
        default: []
      },
      body: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Statement")))
      }
    },
    aliases: ["Scopable", "BlockParent", "Block", "Statement"]
  });
  defineType2("BreakStatement", {
    visitor: ["label"],
    fields: {
      label: {
        validate: (0, utils.assertNodeType)("Identifier"),
        optional: true
      }
    },
    aliases: ["Statement", "Terminatorless", "CompletionStatement"]
  });
  defineType2("CallExpression", {
    visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
    builder: ["callee", "arguments"],
    aliases: ["Expression"],
    fields: Object.assign({
      callee: {
        validate: (0, utils.assertNodeType)("Expression", "Super", "V8IntrinsicIdentifier")
      },
      arguments: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
      }
    }, {
      optional: {
        validate: (0, utils.assertOneOf)(true, false),
        optional: true
      }
    }, {
      typeArguments: {
        validate: (0, utils.assertNodeType)("TypeParameterInstantiation"),
        optional: true
      },
      typeParameters: {
        validate: (0, utils.assertNodeType)("TSTypeParameterInstantiation"),
        optional: true
      }
    })
  });
  defineType2("CatchClause", {
    visitor: ["param", "body"],
    fields: {
      param: {
        validate: (0, utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
        optional: true
      },
      body: {
        validate: (0, utils.assertNodeType)("BlockStatement")
      }
    },
    aliases: ["Scopable", "BlockParent"]
  });
  defineType2("ConditionalExpression", {
    visitor: ["test", "consequent", "alternate"],
    fields: {
      test: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      consequent: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      alternate: {
        validate: (0, utils.assertNodeType)("Expression")
      }
    },
    aliases: ["Expression", "Conditional"]
  });
  defineType2("ContinueStatement", {
    visitor: ["label"],
    fields: {
      label: {
        validate: (0, utils.assertNodeType)("Identifier"),
        optional: true
      }
    },
    aliases: ["Statement", "Terminatorless", "CompletionStatement"]
  });
  defineType2("DebuggerStatement", {
    aliases: ["Statement"]
  });
  defineType2("DoWhileStatement", {
    visitor: ["test", "body"],
    fields: {
      test: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      body: {
        validate: (0, utils.assertNodeType)("Statement")
      }
    },
    aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
  });
  defineType2("EmptyStatement", {
    aliases: ["Statement"]
  });
  defineType2("ExpressionStatement", {
    visitor: ["expression"],
    fields: {
      expression: {
        validate: (0, utils.assertNodeType)("Expression")
      }
    },
    aliases: ["Statement", "ExpressionWrapper"]
  });
  defineType2("File", {
    builder: ["program", "comments", "tokens"],
    visitor: ["program"],
    fields: {
      program: {
        validate: (0, utils.assertNodeType)("Program")
      },
      comments: {
        validate: Object.assign(() => {
        }, {
          each: {
            oneOfNodeTypes: ["CommentBlock", "CommentLine"]
          }
        }),
        optional: true
      },
      tokens: {
        validate: (0, utils.assertEach)(Object.assign(() => {
        }, {
          type: "any"
        })),
        optional: true
      }
    }
  });
  defineType2("ForInStatement", {
    visitor: ["left", "right", "body"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
    fields: {
      left: {
        validate: (0, utils.assertNodeType)("VariableDeclaration", "LVal")
      },
      right: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      body: {
        validate: (0, utils.assertNodeType)("Statement")
      }
    }
  });
  defineType2("ForStatement", {
    visitor: ["init", "test", "update", "body"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
    fields: {
      init: {
        validate: (0, utils.assertNodeType)("VariableDeclaration", "Expression"),
        optional: true
      },
      test: {
        validate: (0, utils.assertNodeType)("Expression"),
        optional: true
      },
      update: {
        validate: (0, utils.assertNodeType)("Expression"),
        optional: true
      },
      body: {
        validate: (0, utils.assertNodeType)("Statement")
      }
    }
  });
  const functionCommon = () => ({
    params: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Identifier", "Pattern", "RestElement")))
    },
    generator: {
      default: false
    },
    async: {
      default: false
    }
  });
  exports.functionCommon = functionCommon;
  const functionTypeAnnotationCommon = () => ({
    returnType: {
      validate: (0, utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    typeParameters: {
      validate: (0, utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    }
  });
  exports.functionTypeAnnotationCommon = functionTypeAnnotationCommon;
  const functionDeclarationCommon = () => Object.assign({}, functionCommon(), {
    declare: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    id: {
      validate: (0, utils.assertNodeType)("Identifier"),
      optional: true
    }
  });
  exports.functionDeclarationCommon = functionDeclarationCommon;
  defineType2("FunctionDeclaration", {
    builder: ["id", "params", "body", "generator", "async"],
    visitor: ["id", "params", "body", "returnType", "typeParameters"],
    fields: Object.assign({}, functionDeclarationCommon(), functionTypeAnnotationCommon(), {
      body: {
        validate: (0, utils.assertNodeType)("BlockStatement")
      },
      predicate: {
        validate: (0, utils.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
        optional: true
      }
    }),
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
    validate: function() {
      return () => {
      };
    }()
  });
  defineType2("FunctionExpression", {
    inherits: "FunctionDeclaration",
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
    fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
      id: {
        validate: (0, utils.assertNodeType)("Identifier"),
        optional: true
      },
      body: {
        validate: (0, utils.assertNodeType)("BlockStatement")
      },
      predicate: {
        validate: (0, utils.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
        optional: true
      }
    })
  });
  const patternLikeCommon = () => ({
    typeAnnotation: {
      validate: (0, utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    optional: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    decorators: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
      optional: true
    }
  });
  exports.patternLikeCommon = patternLikeCommon;
  defineType2("Identifier", {
    builder: ["name"],
    visitor: ["typeAnnotation", "decorators"],
    aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
    fields: Object.assign({}, patternLikeCommon(), {
      name: {
        validate: (0, utils.chain)((0, utils.assertValueType)("string"), Object.assign(function(node, key, val) {
          return;
        }, {
          type: "string"
        }))
      }
    }),
    validate(parent, key, node) {
      return;
    }
  });
  defineType2("IfStatement", {
    visitor: ["test", "consequent", "alternate"],
    aliases: ["Statement", "Conditional"],
    fields: {
      test: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      consequent: {
        validate: (0, utils.assertNodeType)("Statement")
      },
      alternate: {
        optional: true,
        validate: (0, utils.assertNodeType)("Statement")
      }
    }
  });
  defineType2("LabeledStatement", {
    visitor: ["label", "body"],
    aliases: ["Statement"],
    fields: {
      label: {
        validate: (0, utils.assertNodeType)("Identifier")
      },
      body: {
        validate: (0, utils.assertNodeType)("Statement")
      }
    }
  });
  defineType2("StringLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, utils.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  defineType2("NumericLiteral", {
    builder: ["value"],
    deprecatedAlias: "NumberLiteral",
    fields: {
      value: {
        validate: (0, utils.assertValueType)("number")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  defineType2("NullLiteral", {
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  defineType2("BooleanLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, utils.assertValueType)("boolean")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  defineType2("RegExpLiteral", {
    builder: ["pattern", "flags"],
    deprecatedAlias: "RegexLiteral",
    aliases: ["Expression", "Pureish", "Literal"],
    fields: {
      pattern: {
        validate: (0, utils.assertValueType)("string")
      },
      flags: {
        validate: (0, utils.chain)((0, utils.assertValueType)("string"), Object.assign(function(node, key, val) {
          return;
        }, {
          type: "string"
        })),
        default: ""
      }
    }
  });
  defineType2("LogicalExpression", {
    builder: ["operator", "left", "right"],
    visitor: ["left", "right"],
    aliases: ["Binary", "Expression"],
    fields: {
      operator: {
        validate: (0, utils.assertOneOf)(...constants.LOGICAL_OPERATORS)
      },
      left: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      right: {
        validate: (0, utils.assertNodeType)("Expression")
      }
    }
  });
  defineType2("MemberExpression", {
    builder: ["object", "property", "computed", ...["optional"]],
    visitor: ["object", "property"],
    aliases: ["Expression", "LVal"],
    fields: Object.assign({
      object: {
        validate: (0, utils.assertNodeType)("Expression", "Super")
      },
      property: {
        validate: function() {
          const normal = (0, utils.assertNodeType)("Identifier", "PrivateName");
          const computed = (0, utils.assertNodeType)("Expression");
          const validator = function(node, key, val) {
            const validator2 = node.computed ? computed : normal;
            validator2(node, key, val);
          };
          validator.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"];
          return validator;
        }()
      },
      computed: {
        default: false
      }
    }, {
      optional: {
        validate: (0, utils.assertOneOf)(true, false),
        optional: true
      }
    })
  });
  defineType2("NewExpression", {
    inherits: "CallExpression"
  });
  defineType2("Program", {
    visitor: ["directives", "body"],
    builder: ["body", "directives", "sourceType", "interpreter"],
    fields: {
      sourceFile: {
        validate: (0, utils.assertValueType)("string")
      },
      sourceType: {
        validate: (0, utils.assertOneOf)("script", "module"),
        default: "script"
      },
      interpreter: {
        validate: (0, utils.assertNodeType)("InterpreterDirective"),
        default: null,
        optional: true
      },
      directives: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Directive"))),
        default: []
      },
      body: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Statement")))
      }
    },
    aliases: ["Scopable", "BlockParent", "Block"]
  });
  defineType2("ObjectExpression", {
    visitor: ["properties"],
    aliases: ["Expression"],
    fields: {
      properties: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
      }
    }
  });
  defineType2("ObjectMethod", {
    builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
    fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
      kind: Object.assign({
        validate: (0, utils.assertOneOf)("method", "get", "set")
      }, {
        default: "method"
      }),
      computed: {
        default: false
      },
      key: {
        validate: function() {
          const normal = (0, utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral");
          const computed = (0, utils.assertNodeType)("Expression");
          const validator = function(node, key, val) {
            const validator2 = node.computed ? computed : normal;
            validator2(node, key, val);
          };
          validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral"];
          return validator;
        }()
      },
      decorators: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
        optional: true
      },
      body: {
        validate: (0, utils.assertNodeType)("BlockStatement")
      }
    }),
    visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
    aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
  });
  defineType2("ObjectProperty", {
    builder: ["key", "value", "computed", "shorthand", ...["decorators"]],
    fields: {
      computed: {
        default: false
      },
      key: {
        validate: function() {
          const normal = (0, utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName");
          const computed = (0, utils.assertNodeType)("Expression");
          const validator = Object.assign(function(node, key, val) {
            const validator2 = node.computed ? computed : normal;
            validator2(node, key, val);
          }, {
            oneOfNodeTypes: ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName"]
          });
          return validator;
        }()
      },
      value: {
        validate: (0, utils.assertNodeType)("Expression", "PatternLike")
      },
      shorthand: {
        validate: (0, utils.chain)((0, utils.assertValueType)("boolean"), Object.assign(function(node, key, val) {
          return;
        }, {
          type: "boolean"
        }), function(node, key, val) {
          return;
        }),
        default: false
      },
      decorators: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
        optional: true
      }
    },
    visitor: ["key", "value", "decorators"],
    aliases: ["UserWhitespacable", "Property", "ObjectMember"],
    validate: function() {
      const pattern = (0, utils.assertNodeType)("Identifier", "Pattern", "TSAsExpression", "TSSatisfiesExpression", "TSNonNullExpression", "TSTypeAssertion");
      const expression = (0, utils.assertNodeType)("Expression");
      return function(parent, key, node) {
        return;
      };
    }()
  });
  defineType2("RestElement", {
    visitor: ["argument", "typeAnnotation"],
    builder: ["argument"],
    aliases: ["LVal", "PatternLike"],
    deprecatedAlias: "RestProperty",
    fields: Object.assign({}, patternLikeCommon(), {
      argument: {
        validate: (0, utils.assertNodeType)("LVal")
      }
    }),
    validate(parent, key) {
      return;
    }
  });
  defineType2("ReturnStatement", {
    visitor: ["argument"],
    aliases: ["Statement", "Terminatorless", "CompletionStatement"],
    fields: {
      argument: {
        validate: (0, utils.assertNodeType)("Expression"),
        optional: true
      }
    }
  });
  defineType2("SequenceExpression", {
    visitor: ["expressions"],
    fields: {
      expressions: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Expression")))
      }
    },
    aliases: ["Expression"]
  });
  defineType2("ParenthesizedExpression", {
    visitor: ["expression"],
    aliases: ["Expression", "ExpressionWrapper"],
    fields: {
      expression: {
        validate: (0, utils.assertNodeType)("Expression")
      }
    }
  });
  defineType2("SwitchCase", {
    visitor: ["test", "consequent"],
    fields: {
      test: {
        validate: (0, utils.assertNodeType)("Expression"),
        optional: true
      },
      consequent: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Statement")))
      }
    }
  });
  defineType2("SwitchStatement", {
    visitor: ["discriminant", "cases"],
    aliases: ["Statement", "BlockParent", "Scopable"],
    fields: {
      discriminant: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      cases: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("SwitchCase")))
      }
    }
  });
  defineType2("ThisExpression", {
    aliases: ["Expression"]
  });
  defineType2("ThrowStatement", {
    visitor: ["argument"],
    aliases: ["Statement", "Terminatorless", "CompletionStatement"],
    fields: {
      argument: {
        validate: (0, utils.assertNodeType)("Expression")
      }
    }
  });
  defineType2("TryStatement", {
    visitor: ["block", "handler", "finalizer"],
    aliases: ["Statement"],
    fields: {
      block: {
        validate: (0, utils.chain)((0, utils.assertNodeType)("BlockStatement"), Object.assign(function(node) {
          return;
        }, {
          oneOfNodeTypes: ["BlockStatement"]
        }))
      },
      handler: {
        optional: true,
        validate: (0, utils.assertNodeType)("CatchClause")
      },
      finalizer: {
        optional: true,
        validate: (0, utils.assertNodeType)("BlockStatement")
      }
    }
  });
  defineType2("UnaryExpression", {
    builder: ["operator", "argument", "prefix"],
    fields: {
      prefix: {
        default: true
      },
      argument: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      operator: {
        validate: (0, utils.assertOneOf)(...constants.UNARY_OPERATORS)
      }
    },
    visitor: ["argument"],
    aliases: ["UnaryLike", "Expression"]
  });
  defineType2("UpdateExpression", {
    builder: ["operator", "argument", "prefix"],
    fields: {
      prefix: {
        default: false
      },
      argument: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      operator: {
        validate: (0, utils.assertOneOf)(...constants.UPDATE_OPERATORS)
      }
    },
    visitor: ["argument"],
    aliases: ["Expression"]
  });
  defineType2("VariableDeclaration", {
    builder: ["kind", "declarations"],
    visitor: ["declarations"],
    aliases: ["Statement", "Declaration"],
    fields: {
      declare: {
        validate: (0, utils.assertValueType)("boolean"),
        optional: true
      },
      kind: {
        validate: (0, utils.assertOneOf)("var", "let", "const", "using")
      },
      declarations: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("VariableDeclarator")))
      }
    },
    validate(parent, key, node) {
      return;
    }
  });
  defineType2("VariableDeclarator", {
    visitor: ["id", "init"],
    fields: {
      id: {
        validate: function() {
          {
            return (0, utils.assertNodeType)("LVal");
          }
        }()
      },
      definite: {
        optional: true,
        validate: (0, utils.assertValueType)("boolean")
      },
      init: {
        optional: true,
        validate: (0, utils.assertNodeType)("Expression")
      }
    }
  });
  defineType2("WhileStatement", {
    visitor: ["test", "body"],
    aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
    fields: {
      test: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      body: {
        validate: (0, utils.assertNodeType)("Statement")
      }
    }
  });
  defineType2("WithStatement", {
    visitor: ["object", "body"],
    aliases: ["Statement"],
    fields: {
      object: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      body: {
        validate: (0, utils.assertNodeType)("Statement")
      }
    }
  });
  defineType2("AssignmentPattern", {
    visitor: ["left", "right", "decorators"],
    builder: ["left", "right"],
    aliases: ["Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, patternLikeCommon(), {
      left: {
        validate: (0, utils.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
      },
      right: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      decorators: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
        optional: true
      }
    })
  });
  defineType2("ArrayPattern", {
    visitor: ["elements", "typeAnnotation"],
    builder: ["elements"],
    aliases: ["Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, patternLikeCommon(), {
      elements: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeOrValueType)("null", "PatternLike", "LVal")))
      }
    })
  });
  defineType2("ArrowFunctionExpression", {
    builder: ["params", "body", "async"],
    visitor: ["params", "body", "returnType", "typeParameters"],
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
    fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
      expression: {
        validate: (0, utils.assertValueType)("boolean")
      },
      body: {
        validate: (0, utils.assertNodeType)("BlockStatement", "Expression")
      },
      predicate: {
        validate: (0, utils.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
        optional: true
      }
    })
  });
  defineType2("ClassBody", {
    visitor: ["body"],
    fields: {
      body: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "ClassAccessorProperty", "TSDeclareMethod", "TSIndexSignature", "StaticBlock")))
      }
    }
  });
  defineType2("ClassExpression", {
    builder: ["id", "superClass", "body", "decorators"],
    visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
    aliases: ["Scopable", "Class", "Expression"],
    fields: {
      id: {
        validate: (0, utils.assertNodeType)("Identifier"),
        optional: true
      },
      typeParameters: {
        validate: (0, utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: true
      },
      body: {
        validate: (0, utils.assertNodeType)("ClassBody")
      },
      superClass: {
        optional: true,
        validate: (0, utils.assertNodeType)("Expression")
      },
      superTypeParameters: {
        validate: (0, utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: true
      },
      implements: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
        optional: true
      },
      decorators: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
        optional: true
      },
      mixins: {
        validate: (0, utils.assertNodeType)("InterfaceExtends"),
        optional: true
      }
    }
  });
  defineType2("ClassDeclaration", {
    inherits: "ClassExpression",
    aliases: ["Scopable", "Class", "Statement", "Declaration"],
    fields: {
      id: {
        validate: (0, utils.assertNodeType)("Identifier")
      },
      typeParameters: {
        validate: (0, utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: true
      },
      body: {
        validate: (0, utils.assertNodeType)("ClassBody")
      },
      superClass: {
        optional: true,
        validate: (0, utils.assertNodeType)("Expression")
      },
      superTypeParameters: {
        validate: (0, utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: true
      },
      implements: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
        optional: true
      },
      decorators: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
        optional: true
      },
      mixins: {
        validate: (0, utils.assertNodeType)("InterfaceExtends"),
        optional: true
      },
      declare: {
        validate: (0, utils.assertValueType)("boolean"),
        optional: true
      },
      abstract: {
        validate: (0, utils.assertValueType)("boolean"),
        optional: true
      }
    },
    validate: function() {
      const identifier2 = (0, utils.assertNodeType)("Identifier");
      return function(parent, key, node) {
        return;
      };
    }()
  });
  defineType2("ExportAllDeclaration", {
    visitor: ["source"],
    aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
    fields: {
      source: {
        validate: (0, utils.assertNodeType)("StringLiteral")
      },
      exportKind: (0, utils.validateOptional)((0, utils.assertOneOf)("type", "value")),
      assertions: {
        optional: true,
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ImportAttribute")))
      }
    }
  });
  defineType2("ExportDefaultDeclaration", {
    visitor: ["declaration"],
    aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
    fields: {
      declaration: {
        validate: (0, utils.assertNodeType)("TSDeclareFunction", "FunctionDeclaration", "ClassDeclaration", "Expression")
      },
      exportKind: (0, utils.validateOptional)((0, utils.assertOneOf)("value"))
    }
  });
  defineType2("ExportNamedDeclaration", {
    visitor: ["declaration", "specifiers", "source"],
    aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
    fields: {
      declaration: {
        optional: true,
        validate: (0, utils.chain)((0, utils.assertNodeType)("Declaration"), Object.assign(function(node, key, val) {
          return;
        }, {
          oneOfNodeTypes: ["Declaration"]
        }), function(node, key, val) {
          return;
        })
      },
      assertions: {
        optional: true,
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ImportAttribute")))
      },
      specifiers: {
        default: [],
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)(function() {
          const sourced = (0, utils.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
          const sourceless = (0, utils.assertNodeType)("ExportSpecifier");
          return sourced;
        }()))
      },
      source: {
        validate: (0, utils.assertNodeType)("StringLiteral"),
        optional: true
      },
      exportKind: (0, utils.validateOptional)((0, utils.assertOneOf)("type", "value"))
    }
  });
  defineType2("ExportSpecifier", {
    visitor: ["local", "exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, utils.assertNodeType)("Identifier")
      },
      exported: {
        validate: (0, utils.assertNodeType)("Identifier", "StringLiteral")
      },
      exportKind: {
        validate: (0, utils.assertOneOf)("type", "value"),
        optional: true
      }
    }
  });
  defineType2("ForOfStatement", {
    visitor: ["left", "right", "body"],
    builder: ["left", "right", "body", "await"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
    fields: {
      left: {
        validate: function() {
          {
            return (0, utils.assertNodeType)("VariableDeclaration", "LVal");
          }
        }()
      },
      right: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      body: {
        validate: (0, utils.assertNodeType)("Statement")
      },
      await: {
        default: false
      }
    }
  });
  defineType2("ImportDeclaration", {
    visitor: ["specifiers", "source"],
    aliases: ["Statement", "Declaration", "ImportOrExportDeclaration"],
    fields: {
      assertions: {
        optional: true,
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ImportAttribute")))
      },
      module: {
        optional: true,
        validate: (0, utils.assertValueType)("boolean")
      },
      specifiers: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
      },
      source: {
        validate: (0, utils.assertNodeType)("StringLiteral")
      },
      importKind: {
        validate: (0, utils.assertOneOf)("type", "typeof", "value"),
        optional: true
      }
    }
  });
  defineType2("ImportDefaultSpecifier", {
    visitor: ["local"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, utils.assertNodeType)("Identifier")
      }
    }
  });
  defineType2("ImportNamespaceSpecifier", {
    visitor: ["local"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, utils.assertNodeType)("Identifier")
      }
    }
  });
  defineType2("ImportSpecifier", {
    visitor: ["local", "imported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, utils.assertNodeType)("Identifier")
      },
      imported: {
        validate: (0, utils.assertNodeType)("Identifier", "StringLiteral")
      },
      importKind: {
        validate: (0, utils.assertOneOf)("type", "typeof", "value"),
        optional: true
      }
    }
  });
  defineType2("MetaProperty", {
    visitor: ["meta", "property"],
    aliases: ["Expression"],
    fields: {
      meta: {
        validate: (0, utils.chain)((0, utils.assertNodeType)("Identifier"), Object.assign(function(node, key, val) {
          return;
        }, {
          oneOfNodeTypes: ["Identifier"]
        }))
      },
      property: {
        validate: (0, utils.assertNodeType)("Identifier")
      }
    }
  });
  const classMethodOrPropertyCommon = () => ({
    abstract: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    accessibility: {
      validate: (0, utils.assertOneOf)("public", "private", "protected"),
      optional: true
    },
    static: {
      default: false
    },
    override: {
      default: false
    },
    computed: {
      default: false
    },
    optional: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    key: {
      validate: (0, utils.chain)(function() {
        const normal = (0, utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        const computed = (0, utils.assertNodeType)("Expression");
        return function(node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }(), (0, utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression"))
    }
  });
  exports.classMethodOrPropertyCommon = classMethodOrPropertyCommon;
  const classMethodOrDeclareMethodCommon = () => Object.assign({}, functionCommon(), classMethodOrPropertyCommon(), {
    params: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
    },
    kind: {
      validate: (0, utils.assertOneOf)("get", "set", "method", "constructor"),
      default: "method"
    },
    access: {
      validate: (0, utils.chain)((0, utils.assertValueType)("string"), (0, utils.assertOneOf)("public", "private", "protected")),
      optional: true
    },
    decorators: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
      optional: true
    }
  });
  exports.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
  defineType2("ClassMethod", {
    aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
    builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
    visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
    fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
      body: {
        validate: (0, utils.assertNodeType)("BlockStatement")
      }
    })
  });
  defineType2("ObjectPattern", {
    visitor: ["properties", "typeAnnotation", "decorators"],
    builder: ["properties"],
    aliases: ["Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, patternLikeCommon(), {
      properties: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("RestElement", "ObjectProperty")))
      }
    })
  });
  defineType2("SpreadElement", {
    visitor: ["argument"],
    aliases: ["UnaryLike"],
    deprecatedAlias: "SpreadProperty",
    fields: {
      argument: {
        validate: (0, utils.assertNodeType)("Expression")
      }
    }
  });
  defineType2("Super", {
    aliases: ["Expression"]
  });
  defineType2("TaggedTemplateExpression", {
    visitor: ["tag", "quasi", "typeParameters"],
    builder: ["tag", "quasi"],
    aliases: ["Expression"],
    fields: {
      tag: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      quasi: {
        validate: (0, utils.assertNodeType)("TemplateLiteral")
      },
      typeParameters: {
        validate: (0, utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: true
      }
    }
  });
  defineType2("TemplateElement", {
    builder: ["value", "tail"],
    fields: {
      value: {
        validate: (0, utils.chain)((0, utils.assertShape)({
          raw: {
            validate: (0, utils.assertValueType)("string")
          },
          cooked: {
            validate: (0, utils.assertValueType)("string"),
            optional: true
          }
        }), function templateElementCookedValidator(node) {
          const raw = node.value.raw;
          let unterminatedCalled = false;
          const error = () => {
            throw new Error("Internal @babel/types error.");
          };
          const {
            str,
            firstInvalidLoc
          } = (0, _helperStringParser.readStringContents)("template", raw, 0, 0, 0, {
            unterminated() {
              unterminatedCalled = true;
            },
            strictNumericEscape: error,
            invalidEscapeSequence: error,
            numericSeparatorInEscapeSequence: error,
            unexpectedNumericSeparator: error,
            invalidDigit: error,
            invalidCodePoint: error
          });
          if (!unterminatedCalled)
            throw new Error("Invalid raw");
          node.value.cooked = firstInvalidLoc ? null : str;
        })
      },
      tail: {
        default: false
      }
    }
  });
  defineType2("TemplateLiteral", {
    visitor: ["quasis", "expressions"],
    aliases: ["Expression", "Literal"],
    fields: {
      quasis: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("TemplateElement")))
      },
      expressions: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Expression", "TSType")), function(node, key, val) {
          if (node.quasis.length !== val.length + 1) {
            throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of expressions.
Expected ${val.length + 1} quasis but got ${node.quasis.length}`);
          }
        })
      }
    }
  });
  defineType2("YieldExpression", {
    builder: ["argument", "delegate"],
    visitor: ["argument"],
    aliases: ["Expression", "Terminatorless"],
    fields: {
      delegate: {
        validate: (0, utils.chain)((0, utils.assertValueType)("boolean"), Object.assign(function(node, key, val) {
          return;
        }, {
          type: "boolean"
        })),
        default: false
      },
      argument: {
        optional: true,
        validate: (0, utils.assertNodeType)("Expression")
      }
    }
  });
  defineType2("AwaitExpression", {
    builder: ["argument"],
    visitor: ["argument"],
    aliases: ["Expression", "Terminatorless"],
    fields: {
      argument: {
        validate: (0, utils.assertNodeType)("Expression")
      }
    }
  });
  defineType2("Import", {
    aliases: ["Expression"]
  });
  defineType2("BigIntLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, utils.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  defineType2("ExportNamespaceSpecifier", {
    visitor: ["exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      exported: {
        validate: (0, utils.assertNodeType)("Identifier")
      }
    }
  });
  defineType2("OptionalMemberExpression", {
    builder: ["object", "property", "computed", "optional"],
    visitor: ["object", "property"],
    aliases: ["Expression"],
    fields: {
      object: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      property: {
        validate: function() {
          const normal = (0, utils.assertNodeType)("Identifier");
          const computed = (0, utils.assertNodeType)("Expression");
          const validator = Object.assign(function(node, key, val) {
            const validator2 = node.computed ? computed : normal;
            validator2(node, key, val);
          }, {
            oneOfNodeTypes: ["Expression", "Identifier"]
          });
          return validator;
        }()
      },
      computed: {
        default: false
      },
      optional: {
        validate: (0, utils.assertValueType)("boolean")
      }
    }
  });
  defineType2("OptionalCallExpression", {
    visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
    builder: ["callee", "arguments", "optional"],
    aliases: ["Expression"],
    fields: {
      callee: {
        validate: (0, utils.assertNodeType)("Expression")
      },
      arguments: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
      },
      optional: {
        validate: (0, utils.assertValueType)("boolean")
      },
      typeArguments: {
        validate: (0, utils.assertNodeType)("TypeParameterInstantiation"),
        optional: true
      },
      typeParameters: {
        validate: (0, utils.assertNodeType)("TSTypeParameterInstantiation"),
        optional: true
      }
    }
  });
  defineType2("ClassProperty", {
    visitor: ["key", "value", "typeAnnotation", "decorators"],
    builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
    aliases: ["Property"],
    fields: Object.assign({}, classMethodOrPropertyCommon(), {
      value: {
        validate: (0, utils.assertNodeType)("Expression"),
        optional: true
      },
      definite: {
        validate: (0, utils.assertValueType)("boolean"),
        optional: true
      },
      typeAnnotation: {
        validate: (0, utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: true
      },
      decorators: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
        optional: true
      },
      readonly: {
        validate: (0, utils.assertValueType)("boolean"),
        optional: true
      },
      declare: {
        validate: (0, utils.assertValueType)("boolean"),
        optional: true
      },
      variance: {
        validate: (0, utils.assertNodeType)("Variance"),
        optional: true
      }
    })
  });
  defineType2("ClassAccessorProperty", {
    visitor: ["key", "value", "typeAnnotation", "decorators"],
    builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
    aliases: ["Property", "Accessor"],
    fields: Object.assign({}, classMethodOrPropertyCommon(), {
      key: {
        validate: (0, utils.chain)(function() {
          const normal = (0, utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName");
          const computed = (0, utils.assertNodeType)("Expression");
          return function(node, key, val) {
            const validator = node.computed ? computed : normal;
            validator(node, key, val);
          };
        }(), (0, utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression", "PrivateName"))
      },
      value: {
        validate: (0, utils.assertNodeType)("Expression"),
        optional: true
      },
      definite: {
        validate: (0, utils.assertValueType)("boolean"),
        optional: true
      },
      typeAnnotation: {
        validate: (0, utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: true
      },
      decorators: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
        optional: true
      },
      readonly: {
        validate: (0, utils.assertValueType)("boolean"),
        optional: true
      },
      declare: {
        validate: (0, utils.assertValueType)("boolean"),
        optional: true
      },
      variance: {
        validate: (0, utils.assertNodeType)("Variance"),
        optional: true
      }
    })
  });
  defineType2("ClassPrivateProperty", {
    visitor: ["key", "value", "decorators", "typeAnnotation"],
    builder: ["key", "value", "decorators", "static"],
    aliases: ["Property", "Private"],
    fields: {
      key: {
        validate: (0, utils.assertNodeType)("PrivateName")
      },
      value: {
        validate: (0, utils.assertNodeType)("Expression"),
        optional: true
      },
      typeAnnotation: {
        validate: (0, utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: true
      },
      decorators: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
        optional: true
      },
      static: {
        validate: (0, utils.assertValueType)("boolean"),
        default: false
      },
      readonly: {
        validate: (0, utils.assertValueType)("boolean"),
        optional: true
      },
      definite: {
        validate: (0, utils.assertValueType)("boolean"),
        optional: true
      },
      variance: {
        validate: (0, utils.assertNodeType)("Variance"),
        optional: true
      }
    }
  });
  defineType2("ClassPrivateMethod", {
    builder: ["kind", "key", "params", "body", "static"],
    visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
    aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
    fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
      kind: {
        validate: (0, utils.assertOneOf)("get", "set", "method"),
        default: "method"
      },
      key: {
        validate: (0, utils.assertNodeType)("PrivateName")
      },
      body: {
        validate: (0, utils.assertNodeType)("BlockStatement")
      }
    })
  });
  defineType2("PrivateName", {
    visitor: ["id"],
    aliases: ["Private"],
    fields: {
      id: {
        validate: (0, utils.assertNodeType)("Identifier")
      }
    }
  });
  defineType2("StaticBlock", {
    visitor: ["body"],
    fields: {
      body: {
        validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Statement")))
      }
    },
    aliases: ["Scopable", "BlockParent", "FunctionParent"]
  });
});
const defineType = (0, utils.defineAliasedType)("Flow");
const defineInterfaceishType = (name) => {
  defineType(name, {
    builder: ["id", "typeParameters", "extends", "body"],
    visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, utils.validateType)("Identifier"),
      typeParameters: (0, utils.validateOptionalType)("TypeParameterDeclaration"),
      extends: (0, utils.validateOptional)((0, utils.arrayOfType)("InterfaceExtends")),
      mixins: (0, utils.validateOptional)((0, utils.arrayOfType)("InterfaceExtends")),
      implements: (0, utils.validateOptional)((0, utils.arrayOfType)("ClassImplements")),
      body: (0, utils.validateType)("ObjectTypeAnnotation")
    }
  });
};
defineType("AnyTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType("ArrayTypeAnnotation", {
  visitor: ["elementType"],
  aliases: ["FlowType"],
  fields: {
    elementType: (0, utils.validateType)("FlowType")
  }
});
defineType("BooleanTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType("BooleanLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
defineType("NullLiteralTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType("ClassImplements", {
  visitor: ["id", "typeParameters"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("DeclareClass");
defineType("DeclareFunction", {
  visitor: ["id"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    predicate: (0, utils.validateOptionalType)("DeclaredPredicate")
  }
});
defineInterfaceishType("DeclareInterface");
defineType("DeclareModule", {
  builder: ["id", "body", "kind"],
  visitor: ["id", "body"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, utils.validateType)("BlockStatement"),
    kind: (0, utils.validateOptional)((0, utils.assertOneOf)("CommonJS", "ES"))
  }
});
defineType("DeclareModuleExports", {
  visitor: ["typeAnnotation"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    typeAnnotation: (0, utils.validateType)("TypeAnnotation")
  }
});
defineType("DeclareTypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, utils.validateType)("FlowType")
  }
});
defineType("DeclareOpaqueType", {
  visitor: ["id", "typeParameters", "supertype"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, utils.validateOptionalType)("FlowType"),
    impltype: (0, utils.validateOptionalType)("FlowType")
  }
});
defineType("DeclareVariable", {
  visitor: ["id"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)("Identifier")
  }
});
defineType("DeclareExportDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    declaration: (0, utils.validateOptionalType)("Flow"),
    specifiers: (0, utils.validateOptional)((0, utils.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
    source: (0, utils.validateOptionalType)("StringLiteral"),
    default: (0, utils.validateOptional)((0, utils.assertValueType)("boolean"))
  }
});
defineType("DeclareExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    source: (0, utils.validateType)("StringLiteral"),
    exportKind: (0, utils.validateOptional)((0, utils.assertOneOf)("type", "value"))
  }
});
defineType("DeclaredPredicate", {
  visitor: ["value"],
  aliases: ["FlowPredicate"],
  fields: {
    value: (0, utils.validateType)("Flow")
  }
});
defineType("ExistsTypeAnnotation", {
  aliases: ["FlowType"]
});
defineType("FunctionTypeAnnotation", {
  visitor: ["typeParameters", "params", "rest", "returnType"],
  aliases: ["FlowType"],
  fields: {
    typeParameters: (0, utils.validateOptionalType)("TypeParameterDeclaration"),
    params: (0, utils.validate)((0, utils.arrayOfType)("FunctionTypeParam")),
    rest: (0, utils.validateOptionalType)("FunctionTypeParam"),
    this: (0, utils.validateOptionalType)("FunctionTypeParam"),
    returnType: (0, utils.validateType)("FlowType")
  }
});
defineType("FunctionTypeParam", {
  visitor: ["name", "typeAnnotation"],
  fields: {
    name: (0, utils.validateOptionalType)("Identifier"),
    typeAnnotation: (0, utils.validateType)("FlowType"),
    optional: (0, utils.validateOptional)((0, utils.assertValueType)("boolean"))
  }
});
defineType("GenericTypeAnnotation", {
  visitor: ["id", "typeParameters"],
  aliases: ["FlowType"],
  fields: {
    id: (0, utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineType("InferredPredicate", {
  aliases: ["FlowPredicate"]
});
defineType("InterfaceExtends", {
  visitor: ["id", "typeParameters"],
  fields: {
    id: (0, utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("InterfaceDeclaration");
defineType("InterfaceTypeAnnotation", {
  visitor: ["extends", "body"],
  aliases: ["FlowType"],
  fields: {
    extends: (0, utils.validateOptional)((0, utils.arrayOfType)("InterfaceExtends")),
    body: (0, utils.validateType)("ObjectTypeAnnotation")
  }
});
defineType("IntersectionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, utils.validate)((0, utils.arrayOfType)("FlowType"))
  }
});
defineType("MixedTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType("EmptyTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType("NullableTypeAnnotation", {
  visitor: ["typeAnnotation"],
  aliases: ["FlowType"],
  fields: {
    typeAnnotation: (0, utils.validateType)("FlowType")
  }
});
defineType("NumberLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, utils.validate)((0, utils.assertValueType)("number"))
  }
});
defineType("NumberTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType("ObjectTypeAnnotation", {
  visitor: ["properties", "indexers", "callProperties", "internalSlots"],
  aliases: ["FlowType"],
  builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
  fields: {
    properties: (0, utils.validate)((0, utils.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
    indexers: {
      validate: (0, utils.arrayOfType)("ObjectTypeIndexer"),
      optional: true,
      default: []
    },
    callProperties: {
      validate: (0, utils.arrayOfType)("ObjectTypeCallProperty"),
      optional: true,
      default: []
    },
    internalSlots: {
      validate: (0, utils.arrayOfType)("ObjectTypeInternalSlot"),
      optional: true,
      default: []
    },
    exact: {
      validate: (0, utils.assertValueType)("boolean"),
      default: false
    },
    inexact: (0, utils.validateOptional)((0, utils.assertValueType)("boolean"))
  }
});
defineType("ObjectTypeInternalSlot", {
  visitor: ["id", "value", "optional", "static", "method"],
  aliases: ["UserWhitespacable"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    value: (0, utils.validateType)("FlowType"),
    optional: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    static: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    method: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
defineType("ObjectTypeCallProperty", {
  visitor: ["value"],
  aliases: ["UserWhitespacable"],
  fields: {
    value: (0, utils.validateType)("FlowType"),
    static: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
defineType("ObjectTypeIndexer", {
  visitor: ["id", "key", "value", "variance"],
  aliases: ["UserWhitespacable"],
  fields: {
    id: (0, utils.validateOptionalType)("Identifier"),
    key: (0, utils.validateType)("FlowType"),
    value: (0, utils.validateType)("FlowType"),
    static: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    variance: (0, utils.validateOptionalType)("Variance")
  }
});
defineType("ObjectTypeProperty", {
  visitor: ["key", "value", "variance"],
  aliases: ["UserWhitespacable"],
  fields: {
    key: (0, utils.validateType)(["Identifier", "StringLiteral"]),
    value: (0, utils.validateType)("FlowType"),
    kind: (0, utils.validate)((0, utils.assertOneOf)("init", "get", "set")),
    static: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    proto: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    optional: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    variance: (0, utils.validateOptionalType)("Variance"),
    method: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
defineType("ObjectTypeSpreadProperty", {
  visitor: ["argument"],
  aliases: ["UserWhitespacable"],
  fields: {
    argument: (0, utils.validateType)("FlowType")
  }
});
defineType("OpaqueType", {
  visitor: ["id", "typeParameters", "supertype", "impltype"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, utils.validateOptionalType)("FlowType"),
    impltype: (0, utils.validateType)("FlowType")
  }
});
defineType("QualifiedTypeIdentifier", {
  visitor: ["id", "qualification"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    qualification: (0, utils.validateType)(["Identifier", "QualifiedTypeIdentifier"])
  }
});
defineType("StringLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, utils.validate)((0, utils.assertValueType)("string"))
  }
});
defineType("StringTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType("SymbolTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType("ThisTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType("TupleTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, utils.validate)((0, utils.arrayOfType)("FlowType"))
  }
});
defineType("TypeofTypeAnnotation", {
  visitor: ["argument"],
  aliases: ["FlowType"],
  fields: {
    argument: (0, utils.validateType)("FlowType")
  }
});
defineType("TypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, utils.validateType)("FlowType")
  }
});
defineType("TypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, utils.validateType)("FlowType")
  }
});
defineType("TypeCastExpression", {
  visitor: ["expression", "typeAnnotation"],
  aliases: ["ExpressionWrapper", "Expression"],
  fields: {
    expression: (0, utils.validateType)("Expression"),
    typeAnnotation: (0, utils.validateType)("TypeAnnotation")
  }
});
defineType("TypeParameter", {
  visitor: ["bound", "default", "variance"],
  fields: {
    name: (0, utils.validate)((0, utils.assertValueType)("string")),
    bound: (0, utils.validateOptionalType)("TypeAnnotation"),
    default: (0, utils.validateOptionalType)("FlowType"),
    variance: (0, utils.validateOptionalType)("Variance")
  }
});
defineType("TypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: (0, utils.validate)((0, utils.arrayOfType)("TypeParameter"))
  }
});
defineType("TypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: (0, utils.validate)((0, utils.arrayOfType)("FlowType"))
  }
});
defineType("UnionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, utils.validate)((0, utils.arrayOfType)("FlowType"))
  }
});
defineType("Variance", {
  builder: ["kind"],
  fields: {
    kind: (0, utils.validate)((0, utils.assertOneOf)("minus", "plus"))
  }
});
defineType("VoidTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType("EnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    body: (0, utils.validateType)(["EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody"])
  }
});
defineType("EnumBooleanBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    members: (0, utils.validateArrayOfType)("EnumBooleanMember"),
    hasUnknownMembers: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
defineType("EnumNumberBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    members: (0, utils.validateArrayOfType)("EnumNumberMember"),
    hasUnknownMembers: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
defineType("EnumStringBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, utils.validate)((0, utils.assertValueType)("boolean")),
    members: (0, utils.validateArrayOfType)(["EnumStringMember", "EnumDefaultedMember"]),
    hasUnknownMembers: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
defineType("EnumSymbolBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    members: (0, utils.validateArrayOfType)("EnumDefaultedMember"),
    hasUnknownMembers: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
defineType("EnumBooleanMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    init: (0, utils.validateType)("BooleanLiteral")
  }
});
defineType("EnumNumberMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    init: (0, utils.validateType)("NumericLiteral")
  }
});
defineType("EnumStringMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, utils.validateType)("Identifier"),
    init: (0, utils.validateType)("StringLiteral")
  }
});
defineType("EnumDefaultedMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, utils.validateType)("Identifier")
  }
});
defineType("IndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["FlowType"],
  fields: {
    objectType: (0, utils.validateType)("FlowType"),
    indexType: (0, utils.validateType)("FlowType")
  }
});
defineType("OptionalIndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["FlowType"],
  fields: {
    objectType: (0, utils.validateType)("FlowType"),
    indexType: (0, utils.validateType)("FlowType"),
    optional: (0, utils.validate)((0, utils.assertValueType)("boolean"))
  }
});
const defineType$1 = (0, utils.defineAliasedType)("JSX");
defineType$1("JSXAttribute", {
  visitor: ["name", "value"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: (0, utils.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
    },
    value: {
      optional: true,
      validate: (0, utils.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
    }
  }
});
defineType$1("JSXClosingElement", {
  visitor: ["name"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: (0, utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    }
  }
});
defineType$1("JSXElement", {
  builder: ["openingElement", "closingElement", "children", "selfClosing"],
  visitor: ["openingElement", "children", "closingElement"],
  aliases: ["Immutable", "Expression"],
  fields: Object.assign({
    openingElement: {
      validate: (0, utils.assertNodeType)("JSXOpeningElement")
    },
    closingElement: {
      optional: true,
      validate: (0, utils.assertNodeType)("JSXClosingElement")
    },
    children: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }, {
    selfClosing: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    }
  })
});
defineType$1("JSXEmptyExpression", {});
defineType$1("JSXExpressionContainer", {
  visitor: ["expression"],
  aliases: ["Immutable"],
  fields: {
    expression: {
      validate: (0, utils.assertNodeType)("Expression", "JSXEmptyExpression")
    }
  }
});
defineType$1("JSXSpreadChild", {
  visitor: ["expression"],
  aliases: ["Immutable"],
  fields: {
    expression: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  }
});
defineType$1("JSXIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, utils.assertValueType)("string")
    }
  }
});
defineType$1("JSXMemberExpression", {
  visitor: ["object", "property"],
  fields: {
    object: {
      validate: (0, utils.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
    },
    property: {
      validate: (0, utils.assertNodeType)("JSXIdentifier")
    }
  }
});
defineType$1("JSXNamespacedName", {
  visitor: ["namespace", "name"],
  fields: {
    namespace: {
      validate: (0, utils.assertNodeType)("JSXIdentifier")
    },
    name: {
      validate: (0, utils.assertNodeType)("JSXIdentifier")
    }
  }
});
defineType$1("JSXOpeningElement", {
  builder: ["name", "attributes", "selfClosing"],
  visitor: ["name", "attributes"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: (0, utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    },
    selfClosing: {
      default: false
    },
    attributes: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
    },
    typeParameters: {
      validate: (0, utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType$1("JSXSpreadAttribute", {
  visitor: ["argument"],
  fields: {
    argument: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  }
});
defineType$1("JSXText", {
  aliases: ["Immutable"],
  builder: ["value"],
  fields: {
    value: {
      validate: (0, utils.assertValueType)("string")
    }
  }
});
defineType$1("JSXFragment", {
  builder: ["openingFragment", "closingFragment", "children"],
  visitor: ["openingFragment", "children", "closingFragment"],
  aliases: ["Immutable", "Expression"],
  fields: {
    openingFragment: {
      validate: (0, utils.assertNodeType)("JSXOpeningFragment")
    },
    closingFragment: {
      validate: (0, utils.assertNodeType)("JSXClosingFragment")
    },
    children: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }
});
defineType$1("JSXOpeningFragment", {
  aliases: ["Immutable"]
});
defineType$1("JSXClosingFragment", {
  aliases: ["Immutable"]
});
var placeholders = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PLACEHOLDERS_FLIPPED_ALIAS = exports.PLACEHOLDERS_ALIAS = exports.PLACEHOLDERS = void 0;
  const PLACEHOLDERS2 = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
  exports.PLACEHOLDERS = PLACEHOLDERS2;
  const PLACEHOLDERS_ALIAS2 = {
    Declaration: ["Statement"],
    Pattern: ["PatternLike", "LVal"]
  };
  exports.PLACEHOLDERS_ALIAS = PLACEHOLDERS_ALIAS2;
  for (const type of PLACEHOLDERS2) {
    const alias = utils.ALIAS_KEYS[type];
    if (alias != null && alias.length)
      PLACEHOLDERS_ALIAS2[type] = alias;
  }
  const PLACEHOLDERS_FLIPPED_ALIAS2 = {};
  exports.PLACEHOLDERS_FLIPPED_ALIAS = PLACEHOLDERS_FLIPPED_ALIAS2;
  Object.keys(PLACEHOLDERS_ALIAS2).forEach((type) => {
    PLACEHOLDERS_ALIAS2[type].forEach((alias) => {
      if (!Object.hasOwnProperty.call(PLACEHOLDERS_FLIPPED_ALIAS2, alias)) {
        PLACEHOLDERS_FLIPPED_ALIAS2[alias] = [];
      }
      PLACEHOLDERS_FLIPPED_ALIAS2[alias].push(type);
    });
  });
});
const defineType$2 = (0, utils.defineAliasedType)("Miscellaneous");
{
  defineType$2("Noop", {
    visitor: []
  });
}
defineType$2("Placeholder", {
  visitor: [],
  builder: ["expectedNode", "name"],
  fields: {
    name: {
      validate: (0, utils.assertNodeType)("Identifier")
    },
    expectedNode: {
      validate: (0, utils.assertOneOf)(...placeholders.PLACEHOLDERS)
    }
  }
});
defineType$2("V8IntrinsicIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, utils.assertValueType)("string")
    }
  }
});
(0, utils.default)("ArgumentPlaceholder", {});
(0, utils.default)("BindExpression", {
  visitor: ["object", "callee"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: Object.assign(() => {
      }, {
        oneOfNodeTypes: ["Expression"]
      })
    },
    callee: {
      validate: Object.assign(() => {
      }, {
        oneOfNodeTypes: ["Expression"]
      })
    }
  }
});
(0, utils.default)("ImportAttribute", {
  visitor: ["key", "value"],
  fields: {
    key: {
      validate: (0, utils.assertNodeType)("Identifier", "StringLiteral")
    },
    value: {
      validate: (0, utils.assertNodeType)("StringLiteral")
    }
  }
});
(0, utils.default)("Decorator", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  }
});
(0, utils.default)("DoExpression", {
  visitor: ["body"],
  builder: ["body", "async"],
  aliases: ["Expression"],
  fields: {
    body: {
      validate: (0, utils.assertNodeType)("BlockStatement")
    },
    async: {
      validate: (0, utils.assertValueType)("boolean"),
      default: false
    }
  }
});
(0, utils.default)("ExportDefaultSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, utils.assertNodeType)("Identifier")
    }
  }
});
(0, utils.default)("RecordExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("ObjectProperty", "SpreadElement")))
    }
  }
});
(0, utils.default)("TupleExpression", {
  fields: {
    elements: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Expression", "SpreadElement"))),
      default: []
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
(0, utils.default)("DecimalLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, utils.default)("ModuleExpression", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, utils.assertNodeType)("Program")
    }
  },
  aliases: ["Expression"]
});
(0, utils.default)("TopicReference", {
  aliases: ["Expression"]
});
(0, utils.default)("PipelineTopicExpression", {
  builder: ["expression"],
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression"]
});
(0, utils.default)("PipelineBareFunction", {
  builder: ["callee"],
  visitor: ["callee"],
  fields: {
    callee: {
      validate: (0, utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression"]
});
(0, utils.default)("PipelinePrimaryTopicReference", {
  aliases: ["Expression"]
});
const defineType$3 = (0, utils.defineAliasedType)("TypeScript");
const bool = (0, utils.assertValueType)("boolean");
const tSFunctionTypeAnnotationCommon = () => ({
  returnType: {
    validate: (0, utils.assertNodeType)("TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, utils.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
});
defineType$3("TSParameterProperty", {
  aliases: ["LVal"],
  visitor: ["parameter"],
  fields: {
    accessibility: {
      validate: (0, utils.assertOneOf)("public", "private", "protected"),
      optional: true
    },
    readonly: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    parameter: {
      validate: (0, utils.assertNodeType)("Identifier", "AssignmentPattern")
    },
    override: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    decorators: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("Decorator"))),
      optional: true
    }
  }
});
defineType$3("TSDeclareFunction", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, (0, core.functionDeclarationCommon)(), tSFunctionTypeAnnotationCommon())
});
defineType$3("TSDeclareMethod", {
  visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, (0, core.classMethodOrDeclareMethodCommon)(), tSFunctionTypeAnnotationCommon())
});
defineType$3("TSQualifiedName", {
  aliases: ["TSEntityName"],
  visitor: ["left", "right"],
  fields: {
    left: (0, utils.validateType)("TSEntityName"),
    right: (0, utils.validateType)("Identifier")
  }
});
const signatureDeclarationCommon = () => ({
  typeParameters: (0, utils.validateOptionalType)("TSTypeParameterDeclaration"),
  ["parameters"]: (0, utils.validateArrayOfType)(["Identifier", "RestElement"]),
  ["typeAnnotation"]: (0, utils.validateOptionalType)("TSTypeAnnotation")
});
const callConstructSignatureDeclaration = {
  aliases: ["TSTypeElement"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"],
  fields: signatureDeclarationCommon()
};
defineType$3("TSCallSignatureDeclaration", callConstructSignatureDeclaration);
defineType$3("TSConstructSignatureDeclaration", callConstructSignatureDeclaration);
const namedTypeElementCommon = () => ({
  key: (0, utils.validateType)("Expression"),
  computed: {
    default: false
  },
  optional: (0, utils.validateOptional)(bool)
});
defineType$3("TSPropertySignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeAnnotation", "initializer"],
  fields: Object.assign({}, namedTypeElementCommon(), {
    readonly: (0, utils.validateOptional)(bool),
    typeAnnotation: (0, utils.validateOptionalType)("TSTypeAnnotation"),
    initializer: (0, utils.validateOptionalType)("Expression"),
    kind: {
      validate: (0, utils.assertOneOf)("get", "set")
    }
  })
});
defineType$3("TSMethodSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
  fields: Object.assign({}, signatureDeclarationCommon(), namedTypeElementCommon(), {
    kind: {
      validate: (0, utils.assertOneOf)("method", "get", "set")
    }
  })
});
defineType$3("TSIndexSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["parameters", "typeAnnotation"],
  fields: {
    readonly: (0, utils.validateOptional)(bool),
    static: (0, utils.validateOptional)(bool),
    parameters: (0, utils.validateArrayOfType)("Identifier"),
    typeAnnotation: (0, utils.validateOptionalType)("TSTypeAnnotation")
  }
});
const tsKeywordTypes = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];
for (const type of tsKeywordTypes) {
  defineType$3(type, {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });
}
defineType$3("TSThisType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: [],
  fields: {}
});
const fnOrCtrBase = {
  aliases: ["TSType"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"]
};
defineType$3("TSFunctionType", Object.assign({}, fnOrCtrBase, {
  fields: signatureDeclarationCommon()
}));
defineType$3("TSConstructorType", Object.assign({}, fnOrCtrBase, {
  fields: Object.assign({}, signatureDeclarationCommon(), {
    abstract: (0, utils.validateOptional)(bool)
  })
}));
defineType$3("TSTypeReference", {
  aliases: ["TSType"],
  visitor: ["typeName", "typeParameters"],
  fields: {
    typeName: (0, utils.validateType)("TSEntityName"),
    typeParameters: (0, utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
defineType$3("TSTypePredicate", {
  aliases: ["TSType"],
  visitor: ["parameterName", "typeAnnotation"],
  builder: ["parameterName", "typeAnnotation", "asserts"],
  fields: {
    parameterName: (0, utils.validateType)(["Identifier", "TSThisType"]),
    typeAnnotation: (0, utils.validateOptionalType)("TSTypeAnnotation"),
    asserts: (0, utils.validateOptional)(bool)
  }
});
defineType$3("TSTypeQuery", {
  aliases: ["TSType"],
  visitor: ["exprName", "typeParameters"],
  fields: {
    exprName: (0, utils.validateType)(["TSEntityName", "TSImportType"]),
    typeParameters: (0, utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
defineType$3("TSTypeLiteral", {
  aliases: ["TSType"],
  visitor: ["members"],
  fields: {
    members: (0, utils.validateArrayOfType)("TSTypeElement")
  }
});
defineType$3("TSArrayType", {
  aliases: ["TSType"],
  visitor: ["elementType"],
  fields: {
    elementType: (0, utils.validateType)("TSType")
  }
});
defineType$3("TSTupleType", {
  aliases: ["TSType"],
  visitor: ["elementTypes"],
  fields: {
    elementTypes: (0, utils.validateArrayOfType)(["TSType", "TSNamedTupleMember"])
  }
});
defineType$3("TSOptionalType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, utils.validateType)("TSType")
  }
});
defineType$3("TSRestType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, utils.validateType)("TSType")
  }
});
defineType$3("TSNamedTupleMember", {
  visitor: ["label", "elementType"],
  builder: ["label", "elementType", "optional"],
  fields: {
    label: (0, utils.validateType)("Identifier"),
    optional: {
      validate: bool,
      default: false
    },
    elementType: (0, utils.validateType)("TSType")
  }
});
const unionOrIntersection = {
  aliases: ["TSType"],
  visitor: ["types"],
  fields: {
    types: (0, utils.validateArrayOfType)("TSType")
  }
};
defineType$3("TSUnionType", unionOrIntersection);
defineType$3("TSIntersectionType", unionOrIntersection);
defineType$3("TSConditionalType", {
  aliases: ["TSType"],
  visitor: ["checkType", "extendsType", "trueType", "falseType"],
  fields: {
    checkType: (0, utils.validateType)("TSType"),
    extendsType: (0, utils.validateType)("TSType"),
    trueType: (0, utils.validateType)("TSType"),
    falseType: (0, utils.validateType)("TSType")
  }
});
defineType$3("TSInferType", {
  aliases: ["TSType"],
  visitor: ["typeParameter"],
  fields: {
    typeParameter: (0, utils.validateType)("TSTypeParameter")
  }
});
defineType$3("TSParenthesizedType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, utils.validateType)("TSType")
  }
});
defineType$3("TSTypeOperator", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    operator: (0, utils.validate)((0, utils.assertValueType)("string")),
    typeAnnotation: (0, utils.validateType)("TSType")
  }
});
defineType$3("TSIndexedAccessType", {
  aliases: ["TSType"],
  visitor: ["objectType", "indexType"],
  fields: {
    objectType: (0, utils.validateType)("TSType"),
    indexType: (0, utils.validateType)("TSType")
  }
});
defineType$3("TSMappedType", {
  aliases: ["TSType"],
  visitor: ["typeParameter", "typeAnnotation", "nameType"],
  fields: {
    readonly: (0, utils.validateOptional)((0, utils.assertOneOf)(true, false, "+", "-")),
    typeParameter: (0, utils.validateType)("TSTypeParameter"),
    optional: (0, utils.validateOptional)((0, utils.assertOneOf)(true, false, "+", "-")),
    typeAnnotation: (0, utils.validateOptionalType)("TSType"),
    nameType: (0, utils.validateOptionalType)("TSType")
  }
});
defineType$3("TSLiteralType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: ["literal"],
  fields: {
    literal: {
      validate: function() {
        const unaryExpression2 = (0, utils.assertNodeType)("NumericLiteral", "BigIntLiteral");
        const unaryOperator = (0, utils.assertOneOf)("-");
        const literal = (0, utils.assertNodeType)("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral");
        function validator(parent, key, node) {
          if ((0, is_1.default)("UnaryExpression", node)) {
            unaryOperator(node, "operator", node.operator);
            unaryExpression2(node, "argument", node.argument);
          } else {
            literal(parent, key, node);
          }
        }
        validator.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral", "UnaryExpression"];
        return validator;
      }()
    }
  }
});
defineType$3("TSExpressionWithTypeArguments", {
  aliases: ["TSType"],
  visitor: ["expression", "typeParameters"],
  fields: {
    expression: (0, utils.validateType)("TSEntityName"),
    typeParameters: (0, utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
defineType$3("TSInterfaceDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "extends", "body"],
  fields: {
    declare: (0, utils.validateOptional)(bool),
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TSTypeParameterDeclaration"),
    extends: (0, utils.validateOptional)((0, utils.arrayOfType)("TSExpressionWithTypeArguments")),
    body: (0, utils.validateType)("TSInterfaceBody")
  }
});
defineType$3("TSInterfaceBody", {
  visitor: ["body"],
  fields: {
    body: (0, utils.validateArrayOfType)("TSTypeElement")
  }
});
defineType$3("TSTypeAliasDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "typeAnnotation"],
  fields: {
    declare: (0, utils.validateOptional)(bool),
    id: (0, utils.validateType)("Identifier"),
    typeParameters: (0, utils.validateOptionalType)("TSTypeParameterDeclaration"),
    typeAnnotation: (0, utils.validateType)("TSType")
  }
});
defineType$3("TSInstantiationExpression", {
  aliases: ["Expression"],
  visitor: ["expression", "typeParameters"],
  fields: {
    expression: (0, utils.validateType)("Expression"),
    typeParameters: (0, utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
const TSTypeExpression = {
  aliases: ["Expression", "LVal", "PatternLike"],
  visitor: ["expression", "typeAnnotation"],
  fields: {
    expression: (0, utils.validateType)("Expression"),
    typeAnnotation: (0, utils.validateType)("TSType")
  }
};
defineType$3("TSAsExpression", TSTypeExpression);
defineType$3("TSSatisfiesExpression", TSTypeExpression);
defineType$3("TSTypeAssertion", {
  aliases: ["Expression", "LVal", "PatternLike"],
  visitor: ["typeAnnotation", "expression"],
  fields: {
    typeAnnotation: (0, utils.validateType)("TSType"),
    expression: (0, utils.validateType)("Expression")
  }
});
defineType$3("TSEnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "members"],
  fields: {
    declare: (0, utils.validateOptional)(bool),
    const: (0, utils.validateOptional)(bool),
    id: (0, utils.validateType)("Identifier"),
    members: (0, utils.validateArrayOfType)("TSEnumMember"),
    initializer: (0, utils.validateOptionalType)("Expression")
  }
});
defineType$3("TSEnumMember", {
  visitor: ["id", "initializer"],
  fields: {
    id: (0, utils.validateType)(["Identifier", "StringLiteral"]),
    initializer: (0, utils.validateOptionalType)("Expression")
  }
});
defineType$3("TSModuleDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    declare: (0, utils.validateOptional)(bool),
    global: (0, utils.validateOptional)(bool),
    id: (0, utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, utils.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
  }
});
defineType$3("TSModuleBlock", {
  aliases: ["Scopable", "Block", "BlockParent", "FunctionParent"],
  visitor: ["body"],
  fields: {
    body: (0, utils.validateArrayOfType)("Statement")
  }
});
defineType$3("TSImportType", {
  aliases: ["TSType"],
  visitor: ["argument", "qualifier", "typeParameters"],
  fields: {
    argument: (0, utils.validateType)("StringLiteral"),
    qualifier: (0, utils.validateOptionalType)("TSEntityName"),
    typeParameters: (0, utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
defineType$3("TSImportEqualsDeclaration", {
  aliases: ["Statement"],
  visitor: ["id", "moduleReference"],
  fields: {
    isExport: (0, utils.validate)(bool),
    id: (0, utils.validateType)("Identifier"),
    moduleReference: (0, utils.validateType)(["TSEntityName", "TSExternalModuleReference"]),
    importKind: {
      validate: (0, utils.assertOneOf)("type", "value"),
      optional: true
    }
  }
});
defineType$3("TSExternalModuleReference", {
  visitor: ["expression"],
  fields: {
    expression: (0, utils.validateType)("StringLiteral")
  }
});
defineType$3("TSNonNullExpression", {
  aliases: ["Expression", "LVal", "PatternLike"],
  visitor: ["expression"],
  fields: {
    expression: (0, utils.validateType)("Expression")
  }
});
defineType$3("TSExportAssignment", {
  aliases: ["Statement"],
  visitor: ["expression"],
  fields: {
    expression: (0, utils.validateType)("Expression")
  }
});
defineType$3("TSNamespaceExportDeclaration", {
  aliases: ["Statement"],
  visitor: ["id"],
  fields: {
    id: (0, utils.validateType)("Identifier")
  }
});
defineType$3("TSTypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: {
      validate: (0, utils.assertNodeType)("TSType")
    }
  }
});
defineType$3("TSTypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("TSType")))
    }
  }
});
defineType$3("TSTypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, utils.chain)((0, utils.assertValueType)("array"), (0, utils.assertEach)((0, utils.assertNodeType)("TSTypeParameter")))
    }
  }
});
defineType$3("TSTypeParameter", {
  builder: ["constraint", "default", "name"],
  visitor: ["constraint", "default"],
  fields: {
    name: {
      validate: (0, utils.assertValueType)("string")
    },
    in: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    out: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    const: {
      validate: (0, utils.assertValueType)("boolean"),
      optional: true
    },
    constraint: {
      validate: (0, utils.assertNodeType)("TSType"),
      optional: true
    },
    default: {
      validate: (0, utils.assertNodeType)("TSType"),
      optional: true
    }
  }
});
var deprecatedAliases = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DEPRECATED_ALIASES = void 0;
  const DEPRECATED_ALIASES2 = {
    ModuleDeclaration: "ImportOrExportDeclaration"
  };
  exports.DEPRECATED_ALIASES = DEPRECATED_ALIASES2;
});
var definitions = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "ALIAS_KEYS", {
    enumerable: true,
    get: function() {
      return utils.ALIAS_KEYS;
    }
  });
  Object.defineProperty(exports, "BUILDER_KEYS", {
    enumerable: true,
    get: function() {
      return utils.BUILDER_KEYS;
    }
  });
  Object.defineProperty(exports, "DEPRECATED_ALIASES", {
    enumerable: true,
    get: function() {
      return deprecatedAliases.DEPRECATED_ALIASES;
    }
  });
  Object.defineProperty(exports, "DEPRECATED_KEYS", {
    enumerable: true,
    get: function() {
      return utils.DEPRECATED_KEYS;
    }
  });
  Object.defineProperty(exports, "FLIPPED_ALIAS_KEYS", {
    enumerable: true,
    get: function() {
      return utils.FLIPPED_ALIAS_KEYS;
    }
  });
  Object.defineProperty(exports, "NODE_FIELDS", {
    enumerable: true,
    get: function() {
      return utils.NODE_FIELDS;
    }
  });
  Object.defineProperty(exports, "NODE_PARENT_VALIDATIONS", {
    enumerable: true,
    get: function() {
      return utils.NODE_PARENT_VALIDATIONS;
    }
  });
  Object.defineProperty(exports, "PLACEHOLDERS", {
    enumerable: true,
    get: function() {
      return placeholders.PLACEHOLDERS;
    }
  });
  Object.defineProperty(exports, "PLACEHOLDERS_ALIAS", {
    enumerable: true,
    get: function() {
      return placeholders.PLACEHOLDERS_ALIAS;
    }
  });
  Object.defineProperty(exports, "PLACEHOLDERS_FLIPPED_ALIAS", {
    enumerable: true,
    get: function() {
      return placeholders.PLACEHOLDERS_FLIPPED_ALIAS;
    }
  });
  exports.TYPES = void 0;
  Object.defineProperty(exports, "VISITOR_KEYS", {
    enumerable: true,
    get: function() {
      return utils.VISITOR_KEYS;
    }
  });
  Object.keys(deprecatedAliases.DEPRECATED_ALIASES).forEach((deprecatedAlias) => {
    utils.FLIPPED_ALIAS_KEYS[deprecatedAlias] = utils.FLIPPED_ALIAS_KEYS[deprecatedAliases.DEPRECATED_ALIASES[deprecatedAlias]];
  });
  _toFastProperties(utils.VISITOR_KEYS);
  _toFastProperties(utils.ALIAS_KEYS);
  _toFastProperties(utils.FLIPPED_ALIAS_KEYS);
  _toFastProperties(utils.NODE_FIELDS);
  _toFastProperties(utils.BUILDER_KEYS);
  _toFastProperties(utils.DEPRECATED_KEYS);
  _toFastProperties(placeholders.PLACEHOLDERS_ALIAS);
  _toFastProperties(placeholders.PLACEHOLDERS_FLIPPED_ALIAS);
  const TYPES2 = [].concat(Object.keys(utils.VISITOR_KEYS), Object.keys(utils.FLIPPED_ALIAS_KEYS), Object.keys(utils.DEPRECATED_KEYS));
  exports.TYPES = TYPES2;
});
var validate_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = validate2;
  exports.validateChild = validateChild;
  exports.validateField = validateField;
  function validate2(node, key, val) {
    if (!node)
      return;
    const fields = definitions.NODE_FIELDS[node.type];
    if (!fields)
      return;
    const field = fields[key];
    validateField(node, key, val, field);
    validateChild(node, key, val);
  }
  function validateField(node, key, val, field) {
    if (!(field != null && field.validate))
      return;
    if (field.optional && val == null)
      return;
    field.validate(node, key, val);
  }
  function validateChild(node, key, val) {
    if (val == null)
      return;
    const validate3 = definitions.NODE_PARENT_VALIDATIONS[val.type];
    if (!validate3)
      return;
    validate3(node, key, val);
  }
});
var validateNode_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = validateNode;
  function validateNode(node) {
    const keys = lib.BUILDER_KEYS[node.type];
    for (const key of keys) {
      (0, validate_1.default)(node, key, node[key]);
    }
    return node;
  }
});
var generated$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.anyTypeAnnotation = anyTypeAnnotation2;
  exports.argumentPlaceholder = argumentPlaceholder2;
  exports.arrayExpression = arrayExpression2;
  exports.arrayPattern = arrayPattern2;
  exports.arrayTypeAnnotation = arrayTypeAnnotation2;
  exports.arrowFunctionExpression = arrowFunctionExpression2;
  exports.assignmentExpression = assignmentExpression2;
  exports.assignmentPattern = assignmentPattern2;
  exports.awaitExpression = awaitExpression2;
  exports.bigIntLiteral = bigIntLiteral2;
  exports.binaryExpression = binaryExpression2;
  exports.bindExpression = bindExpression2;
  exports.blockStatement = blockStatement2;
  exports.booleanLiteral = booleanLiteral2;
  exports.booleanLiteralTypeAnnotation = booleanLiteralTypeAnnotation2;
  exports.booleanTypeAnnotation = booleanTypeAnnotation2;
  exports.breakStatement = breakStatement2;
  exports.callExpression = callExpression2;
  exports.catchClause = catchClause2;
  exports.classAccessorProperty = classAccessorProperty2;
  exports.classBody = classBody2;
  exports.classDeclaration = classDeclaration2;
  exports.classExpression = classExpression2;
  exports.classImplements = classImplements2;
  exports.classMethod = classMethod2;
  exports.classPrivateMethod = classPrivateMethod2;
  exports.classPrivateProperty = classPrivateProperty2;
  exports.classProperty = classProperty2;
  exports.conditionalExpression = conditionalExpression2;
  exports.continueStatement = continueStatement2;
  exports.debuggerStatement = debuggerStatement2;
  exports.decimalLiteral = decimalLiteral2;
  exports.declareClass = declareClass2;
  exports.declareExportAllDeclaration = declareExportAllDeclaration2;
  exports.declareExportDeclaration = declareExportDeclaration2;
  exports.declareFunction = declareFunction2;
  exports.declareInterface = declareInterface2;
  exports.declareModule = declareModule2;
  exports.declareModuleExports = declareModuleExports2;
  exports.declareOpaqueType = declareOpaqueType2;
  exports.declareTypeAlias = declareTypeAlias2;
  exports.declareVariable = declareVariable2;
  exports.declaredPredicate = declaredPredicate2;
  exports.decorator = decorator2;
  exports.directive = directive2;
  exports.directiveLiteral = directiveLiteral2;
  exports.doExpression = doExpression2;
  exports.doWhileStatement = doWhileStatement2;
  exports.emptyStatement = emptyStatement2;
  exports.emptyTypeAnnotation = emptyTypeAnnotation2;
  exports.enumBooleanBody = enumBooleanBody2;
  exports.enumBooleanMember = enumBooleanMember2;
  exports.enumDeclaration = enumDeclaration2;
  exports.enumDefaultedMember = enumDefaultedMember2;
  exports.enumNumberBody = enumNumberBody2;
  exports.enumNumberMember = enumNumberMember2;
  exports.enumStringBody = enumStringBody2;
  exports.enumStringMember = enumStringMember2;
  exports.enumSymbolBody = enumSymbolBody2;
  exports.existsTypeAnnotation = existsTypeAnnotation2;
  exports.exportAllDeclaration = exportAllDeclaration2;
  exports.exportDefaultDeclaration = exportDefaultDeclaration2;
  exports.exportDefaultSpecifier = exportDefaultSpecifier2;
  exports.exportNamedDeclaration = exportNamedDeclaration2;
  exports.exportNamespaceSpecifier = exportNamespaceSpecifier2;
  exports.exportSpecifier = exportSpecifier2;
  exports.expressionStatement = expressionStatement2;
  exports.file = file2;
  exports.forInStatement = forInStatement2;
  exports.forOfStatement = forOfStatement2;
  exports.forStatement = forStatement2;
  exports.functionDeclaration = functionDeclaration2;
  exports.functionExpression = functionExpression2;
  exports.functionTypeAnnotation = functionTypeAnnotation2;
  exports.functionTypeParam = functionTypeParam2;
  exports.genericTypeAnnotation = genericTypeAnnotation2;
  exports.identifier = identifier2;
  exports.ifStatement = ifStatement2;
  exports.import = _import;
  exports.importAttribute = importAttribute2;
  exports.importDeclaration = importDeclaration2;
  exports.importDefaultSpecifier = importDefaultSpecifier2;
  exports.importNamespaceSpecifier = importNamespaceSpecifier2;
  exports.importSpecifier = importSpecifier2;
  exports.indexedAccessType = indexedAccessType2;
  exports.inferredPredicate = inferredPredicate2;
  exports.interfaceDeclaration = interfaceDeclaration2;
  exports.interfaceExtends = interfaceExtends2;
  exports.interfaceTypeAnnotation = interfaceTypeAnnotation2;
  exports.interpreterDirective = interpreterDirective2;
  exports.intersectionTypeAnnotation = intersectionTypeAnnotation2;
  exports.jSXAttribute = exports.jsxAttribute = jsxAttribute2;
  exports.jSXClosingElement = exports.jsxClosingElement = jsxClosingElement2;
  exports.jSXClosingFragment = exports.jsxClosingFragment = jsxClosingFragment2;
  exports.jSXElement = exports.jsxElement = jsxElement2;
  exports.jSXEmptyExpression = exports.jsxEmptyExpression = jsxEmptyExpression2;
  exports.jSXExpressionContainer = exports.jsxExpressionContainer = jsxExpressionContainer2;
  exports.jSXFragment = exports.jsxFragment = jsxFragment2;
  exports.jSXIdentifier = exports.jsxIdentifier = jsxIdentifier2;
  exports.jSXMemberExpression = exports.jsxMemberExpression = jsxMemberExpression2;
  exports.jSXNamespacedName = exports.jsxNamespacedName = jsxNamespacedName2;
  exports.jSXOpeningElement = exports.jsxOpeningElement = jsxOpeningElement2;
  exports.jSXOpeningFragment = exports.jsxOpeningFragment = jsxOpeningFragment2;
  exports.jSXSpreadAttribute = exports.jsxSpreadAttribute = jsxSpreadAttribute2;
  exports.jSXSpreadChild = exports.jsxSpreadChild = jsxSpreadChild2;
  exports.jSXText = exports.jsxText = jsxText2;
  exports.labeledStatement = labeledStatement2;
  exports.logicalExpression = logicalExpression2;
  exports.memberExpression = memberExpression2;
  exports.metaProperty = metaProperty2;
  exports.mixedTypeAnnotation = mixedTypeAnnotation2;
  exports.moduleExpression = moduleExpression2;
  exports.newExpression = newExpression2;
  exports.noop = noop2;
  exports.nullLiteral = nullLiteral2;
  exports.nullLiteralTypeAnnotation = nullLiteralTypeAnnotation2;
  exports.nullableTypeAnnotation = nullableTypeAnnotation2;
  exports.numberLiteral = NumberLiteral2;
  exports.numberLiteralTypeAnnotation = numberLiteralTypeAnnotation2;
  exports.numberTypeAnnotation = numberTypeAnnotation2;
  exports.numericLiteral = numericLiteral2;
  exports.objectExpression = objectExpression2;
  exports.objectMethod = objectMethod2;
  exports.objectPattern = objectPattern2;
  exports.objectProperty = objectProperty2;
  exports.objectTypeAnnotation = objectTypeAnnotation2;
  exports.objectTypeCallProperty = objectTypeCallProperty2;
  exports.objectTypeIndexer = objectTypeIndexer2;
  exports.objectTypeInternalSlot = objectTypeInternalSlot2;
  exports.objectTypeProperty = objectTypeProperty2;
  exports.objectTypeSpreadProperty = objectTypeSpreadProperty2;
  exports.opaqueType = opaqueType2;
  exports.optionalCallExpression = optionalCallExpression2;
  exports.optionalIndexedAccessType = optionalIndexedAccessType2;
  exports.optionalMemberExpression = optionalMemberExpression2;
  exports.parenthesizedExpression = parenthesizedExpression2;
  exports.pipelineBareFunction = pipelineBareFunction2;
  exports.pipelinePrimaryTopicReference = pipelinePrimaryTopicReference2;
  exports.pipelineTopicExpression = pipelineTopicExpression2;
  exports.placeholder = placeholder2;
  exports.privateName = privateName2;
  exports.program = program2;
  exports.qualifiedTypeIdentifier = qualifiedTypeIdentifier2;
  exports.recordExpression = recordExpression2;
  exports.regExpLiteral = regExpLiteral2;
  exports.regexLiteral = RegexLiteral2;
  exports.restElement = restElement2;
  exports.restProperty = RestProperty2;
  exports.returnStatement = returnStatement2;
  exports.sequenceExpression = sequenceExpression2;
  exports.spreadElement = spreadElement2;
  exports.spreadProperty = SpreadProperty2;
  exports.staticBlock = staticBlock2;
  exports.stringLiteral = stringLiteral2;
  exports.stringLiteralTypeAnnotation = stringLiteralTypeAnnotation2;
  exports.stringTypeAnnotation = stringTypeAnnotation2;
  exports.super = _super;
  exports.switchCase = switchCase2;
  exports.switchStatement = switchStatement2;
  exports.symbolTypeAnnotation = symbolTypeAnnotation2;
  exports.taggedTemplateExpression = taggedTemplateExpression2;
  exports.templateElement = templateElement2;
  exports.templateLiteral = templateLiteral2;
  exports.thisExpression = thisExpression2;
  exports.thisTypeAnnotation = thisTypeAnnotation2;
  exports.throwStatement = throwStatement2;
  exports.topicReference = topicReference2;
  exports.tryStatement = tryStatement2;
  exports.tSAnyKeyword = exports.tsAnyKeyword = tsAnyKeyword2;
  exports.tSArrayType = exports.tsArrayType = tsArrayType2;
  exports.tSAsExpression = exports.tsAsExpression = tsAsExpression2;
  exports.tSBigIntKeyword = exports.tsBigIntKeyword = tsBigIntKeyword2;
  exports.tSBooleanKeyword = exports.tsBooleanKeyword = tsBooleanKeyword2;
  exports.tSCallSignatureDeclaration = exports.tsCallSignatureDeclaration = tsCallSignatureDeclaration2;
  exports.tSConditionalType = exports.tsConditionalType = tsConditionalType2;
  exports.tSConstructSignatureDeclaration = exports.tsConstructSignatureDeclaration = tsConstructSignatureDeclaration2;
  exports.tSConstructorType = exports.tsConstructorType = tsConstructorType2;
  exports.tSDeclareFunction = exports.tsDeclareFunction = tsDeclareFunction2;
  exports.tSDeclareMethod = exports.tsDeclareMethod = tsDeclareMethod2;
  exports.tSEnumDeclaration = exports.tsEnumDeclaration = tsEnumDeclaration2;
  exports.tSEnumMember = exports.tsEnumMember = tsEnumMember2;
  exports.tSExportAssignment = exports.tsExportAssignment = tsExportAssignment2;
  exports.tSExpressionWithTypeArguments = exports.tsExpressionWithTypeArguments = tsExpressionWithTypeArguments2;
  exports.tSExternalModuleReference = exports.tsExternalModuleReference = tsExternalModuleReference2;
  exports.tSFunctionType = exports.tsFunctionType = tsFunctionType2;
  exports.tSImportEqualsDeclaration = exports.tsImportEqualsDeclaration = tsImportEqualsDeclaration2;
  exports.tSImportType = exports.tsImportType = tsImportType2;
  exports.tSIndexSignature = exports.tsIndexSignature = tsIndexSignature2;
  exports.tSIndexedAccessType = exports.tsIndexedAccessType = tsIndexedAccessType2;
  exports.tSInferType = exports.tsInferType = tsInferType2;
  exports.tSInstantiationExpression = exports.tsInstantiationExpression = tsInstantiationExpression2;
  exports.tSInterfaceBody = exports.tsInterfaceBody = tsInterfaceBody2;
  exports.tSInterfaceDeclaration = exports.tsInterfaceDeclaration = tsInterfaceDeclaration2;
  exports.tSIntersectionType = exports.tsIntersectionType = tsIntersectionType2;
  exports.tSIntrinsicKeyword = exports.tsIntrinsicKeyword = tsIntrinsicKeyword2;
  exports.tSLiteralType = exports.tsLiteralType = tsLiteralType2;
  exports.tSMappedType = exports.tsMappedType = tsMappedType2;
  exports.tSMethodSignature = exports.tsMethodSignature = tsMethodSignature2;
  exports.tSModuleBlock = exports.tsModuleBlock = tsModuleBlock2;
  exports.tSModuleDeclaration = exports.tsModuleDeclaration = tsModuleDeclaration2;
  exports.tSNamedTupleMember = exports.tsNamedTupleMember = tsNamedTupleMember2;
  exports.tSNamespaceExportDeclaration = exports.tsNamespaceExportDeclaration = tsNamespaceExportDeclaration2;
  exports.tSNeverKeyword = exports.tsNeverKeyword = tsNeverKeyword2;
  exports.tSNonNullExpression = exports.tsNonNullExpression = tsNonNullExpression2;
  exports.tSNullKeyword = exports.tsNullKeyword = tsNullKeyword2;
  exports.tSNumberKeyword = exports.tsNumberKeyword = tsNumberKeyword2;
  exports.tSObjectKeyword = exports.tsObjectKeyword = tsObjectKeyword2;
  exports.tSOptionalType = exports.tsOptionalType = tsOptionalType2;
  exports.tSParameterProperty = exports.tsParameterProperty = tsParameterProperty2;
  exports.tSParenthesizedType = exports.tsParenthesizedType = tsParenthesizedType2;
  exports.tSPropertySignature = exports.tsPropertySignature = tsPropertySignature2;
  exports.tSQualifiedName = exports.tsQualifiedName = tsQualifiedName2;
  exports.tSRestType = exports.tsRestType = tsRestType2;
  exports.tSSatisfiesExpression = exports.tsSatisfiesExpression = tsSatisfiesExpression2;
  exports.tSStringKeyword = exports.tsStringKeyword = tsStringKeyword2;
  exports.tSSymbolKeyword = exports.tsSymbolKeyword = tsSymbolKeyword2;
  exports.tSThisType = exports.tsThisType = tsThisType2;
  exports.tSTupleType = exports.tsTupleType = tsTupleType2;
  exports.tSTypeAliasDeclaration = exports.tsTypeAliasDeclaration = tsTypeAliasDeclaration2;
  exports.tSTypeAnnotation = exports.tsTypeAnnotation = tsTypeAnnotation2;
  exports.tSTypeAssertion = exports.tsTypeAssertion = tsTypeAssertion2;
  exports.tSTypeLiteral = exports.tsTypeLiteral = tsTypeLiteral2;
  exports.tSTypeOperator = exports.tsTypeOperator = tsTypeOperator2;
  exports.tSTypeParameter = exports.tsTypeParameter = tsTypeParameter2;
  exports.tSTypeParameterDeclaration = exports.tsTypeParameterDeclaration = tsTypeParameterDeclaration2;
  exports.tSTypeParameterInstantiation = exports.tsTypeParameterInstantiation = tsTypeParameterInstantiation2;
  exports.tSTypePredicate = exports.tsTypePredicate = tsTypePredicate2;
  exports.tSTypeQuery = exports.tsTypeQuery = tsTypeQuery2;
  exports.tSTypeReference = exports.tsTypeReference = tsTypeReference2;
  exports.tSUndefinedKeyword = exports.tsUndefinedKeyword = tsUndefinedKeyword2;
  exports.tSUnionType = exports.tsUnionType = tsUnionType2;
  exports.tSUnknownKeyword = exports.tsUnknownKeyword = tsUnknownKeyword2;
  exports.tSVoidKeyword = exports.tsVoidKeyword = tsVoidKeyword2;
  exports.tupleExpression = tupleExpression2;
  exports.tupleTypeAnnotation = tupleTypeAnnotation2;
  exports.typeAlias = typeAlias2;
  exports.typeAnnotation = typeAnnotation2;
  exports.typeCastExpression = typeCastExpression2;
  exports.typeParameter = typeParameter2;
  exports.typeParameterDeclaration = typeParameterDeclaration2;
  exports.typeParameterInstantiation = typeParameterInstantiation2;
  exports.typeofTypeAnnotation = typeofTypeAnnotation2;
  exports.unaryExpression = unaryExpression2;
  exports.unionTypeAnnotation = unionTypeAnnotation2;
  exports.updateExpression = updateExpression2;
  exports.v8IntrinsicIdentifier = v8IntrinsicIdentifier2;
  exports.variableDeclaration = variableDeclaration2;
  exports.variableDeclarator = variableDeclarator2;
  exports.variance = variance2;
  exports.voidTypeAnnotation = voidTypeAnnotation2;
  exports.whileStatement = whileStatement2;
  exports.withStatement = withStatement2;
  exports.yieldExpression = yieldExpression2;
  function arrayExpression2(elements = []) {
    return (0, validateNode_1.default)({
      type: "ArrayExpression",
      elements
    });
  }
  function assignmentExpression2(operator, left, right) {
    return (0, validateNode_1.default)({
      type: "AssignmentExpression",
      operator,
      left,
      right
    });
  }
  function binaryExpression2(operator, left, right) {
    return (0, validateNode_1.default)({
      type: "BinaryExpression",
      operator,
      left,
      right
    });
  }
  function interpreterDirective2(value) {
    return (0, validateNode_1.default)({
      type: "InterpreterDirective",
      value
    });
  }
  function directive2(value) {
    return (0, validateNode_1.default)({
      type: "Directive",
      value
    });
  }
  function directiveLiteral2(value) {
    return (0, validateNode_1.default)({
      type: "DirectiveLiteral",
      value
    });
  }
  function blockStatement2(body, directives = []) {
    return (0, validateNode_1.default)({
      type: "BlockStatement",
      body,
      directives
    });
  }
  function breakStatement2(label = null) {
    return (0, validateNode_1.default)({
      type: "BreakStatement",
      label
    });
  }
  function callExpression2(callee, _arguments) {
    return (0, validateNode_1.default)({
      type: "CallExpression",
      callee,
      arguments: _arguments
    });
  }
  function catchClause2(param = null, body) {
    return (0, validateNode_1.default)({
      type: "CatchClause",
      param,
      body
    });
  }
  function conditionalExpression2(test, consequent, alternate) {
    return (0, validateNode_1.default)({
      type: "ConditionalExpression",
      test,
      consequent,
      alternate
    });
  }
  function continueStatement2(label = null) {
    return (0, validateNode_1.default)({
      type: "ContinueStatement",
      label
    });
  }
  function debuggerStatement2() {
    return {
      type: "DebuggerStatement"
    };
  }
  function doWhileStatement2(test, body) {
    return (0, validateNode_1.default)({
      type: "DoWhileStatement",
      test,
      body
    });
  }
  function emptyStatement2() {
    return {
      type: "EmptyStatement"
    };
  }
  function expressionStatement2(expression) {
    return (0, validateNode_1.default)({
      type: "ExpressionStatement",
      expression
    });
  }
  function file2(program3, comments = null, tokens = null) {
    return (0, validateNode_1.default)({
      type: "File",
      program: program3,
      comments,
      tokens
    });
  }
  function forInStatement2(left, right, body) {
    return (0, validateNode_1.default)({
      type: "ForInStatement",
      left,
      right,
      body
    });
  }
  function forStatement2(init = null, test = null, update = null, body) {
    return (0, validateNode_1.default)({
      type: "ForStatement",
      init,
      test,
      update,
      body
    });
  }
  function functionDeclaration2(id = null, params, body, generator = false, async = false) {
    return (0, validateNode_1.default)({
      type: "FunctionDeclaration",
      id,
      params,
      body,
      generator,
      async
    });
  }
  function functionExpression2(id = null, params, body, generator = false, async = false) {
    return (0, validateNode_1.default)({
      type: "FunctionExpression",
      id,
      params,
      body,
      generator,
      async
    });
  }
  function identifier2(name) {
    return (0, validateNode_1.default)({
      type: "Identifier",
      name
    });
  }
  function ifStatement2(test, consequent, alternate = null) {
    return (0, validateNode_1.default)({
      type: "IfStatement",
      test,
      consequent,
      alternate
    });
  }
  function labeledStatement2(label, body) {
    return (0, validateNode_1.default)({
      type: "LabeledStatement",
      label,
      body
    });
  }
  function stringLiteral2(value) {
    return (0, validateNode_1.default)({
      type: "StringLiteral",
      value
    });
  }
  function numericLiteral2(value) {
    return (0, validateNode_1.default)({
      type: "NumericLiteral",
      value
    });
  }
  function nullLiteral2() {
    return {
      type: "NullLiteral"
    };
  }
  function booleanLiteral2(value) {
    return (0, validateNode_1.default)({
      type: "BooleanLiteral",
      value
    });
  }
  function regExpLiteral2(pattern, flags = "") {
    return (0, validateNode_1.default)({
      type: "RegExpLiteral",
      pattern,
      flags
    });
  }
  function logicalExpression2(operator, left, right) {
    return (0, validateNode_1.default)({
      type: "LogicalExpression",
      operator,
      left,
      right
    });
  }
  function memberExpression2(object, property, computed = false, optional = null) {
    return (0, validateNode_1.default)({
      type: "MemberExpression",
      object,
      property,
      computed,
      optional
    });
  }
  function newExpression2(callee, _arguments) {
    return (0, validateNode_1.default)({
      type: "NewExpression",
      callee,
      arguments: _arguments
    });
  }
  function program2(body, directives = [], sourceType = "script", interpreter = null) {
    return (0, validateNode_1.default)({
      type: "Program",
      body,
      directives,
      sourceType,
      interpreter,
      sourceFile: null
    });
  }
  function objectExpression2(properties) {
    return (0, validateNode_1.default)({
      type: "ObjectExpression",
      properties
    });
  }
  function objectMethod2(kind = "method", key, params, body, computed = false, generator = false, async = false) {
    return (0, validateNode_1.default)({
      type: "ObjectMethod",
      kind,
      key,
      params,
      body,
      computed,
      generator,
      async
    });
  }
  function objectProperty2(key, value, computed = false, shorthand = false, decorators = null) {
    return (0, validateNode_1.default)({
      type: "ObjectProperty",
      key,
      value,
      computed,
      shorthand,
      decorators
    });
  }
  function restElement2(argument) {
    return (0, validateNode_1.default)({
      type: "RestElement",
      argument
    });
  }
  function returnStatement2(argument = null) {
    return (0, validateNode_1.default)({
      type: "ReturnStatement",
      argument
    });
  }
  function sequenceExpression2(expressions) {
    return (0, validateNode_1.default)({
      type: "SequenceExpression",
      expressions
    });
  }
  function parenthesizedExpression2(expression) {
    return (0, validateNode_1.default)({
      type: "ParenthesizedExpression",
      expression
    });
  }
  function switchCase2(test = null, consequent) {
    return (0, validateNode_1.default)({
      type: "SwitchCase",
      test,
      consequent
    });
  }
  function switchStatement2(discriminant, cases) {
    return (0, validateNode_1.default)({
      type: "SwitchStatement",
      discriminant,
      cases
    });
  }
  function thisExpression2() {
    return {
      type: "ThisExpression"
    };
  }
  function throwStatement2(argument) {
    return (0, validateNode_1.default)({
      type: "ThrowStatement",
      argument
    });
  }
  function tryStatement2(block, handler = null, finalizer = null) {
    return (0, validateNode_1.default)({
      type: "TryStatement",
      block,
      handler,
      finalizer
    });
  }
  function unaryExpression2(operator, argument, prefix = true) {
    return (0, validateNode_1.default)({
      type: "UnaryExpression",
      operator,
      argument,
      prefix
    });
  }
  function updateExpression2(operator, argument, prefix = false) {
    return (0, validateNode_1.default)({
      type: "UpdateExpression",
      operator,
      argument,
      prefix
    });
  }
  function variableDeclaration2(kind, declarations) {
    return (0, validateNode_1.default)({
      type: "VariableDeclaration",
      kind,
      declarations
    });
  }
  function variableDeclarator2(id, init = null) {
    return (0, validateNode_1.default)({
      type: "VariableDeclarator",
      id,
      init
    });
  }
  function whileStatement2(test, body) {
    return (0, validateNode_1.default)({
      type: "WhileStatement",
      test,
      body
    });
  }
  function withStatement2(object, body) {
    return (0, validateNode_1.default)({
      type: "WithStatement",
      object,
      body
    });
  }
  function assignmentPattern2(left, right) {
    return (0, validateNode_1.default)({
      type: "AssignmentPattern",
      left,
      right
    });
  }
  function arrayPattern2(elements) {
    return (0, validateNode_1.default)({
      type: "ArrayPattern",
      elements
    });
  }
  function arrowFunctionExpression2(params, body, async = false) {
    return (0, validateNode_1.default)({
      type: "ArrowFunctionExpression",
      params,
      body,
      async,
      expression: null
    });
  }
  function classBody2(body) {
    return (0, validateNode_1.default)({
      type: "ClassBody",
      body
    });
  }
  function classExpression2(id = null, superClass = null, body, decorators = null) {
    return (0, validateNode_1.default)({
      type: "ClassExpression",
      id,
      superClass,
      body,
      decorators
    });
  }
  function classDeclaration2(id, superClass = null, body, decorators = null) {
    return (0, validateNode_1.default)({
      type: "ClassDeclaration",
      id,
      superClass,
      body,
      decorators
    });
  }
  function exportAllDeclaration2(source) {
    return (0, validateNode_1.default)({
      type: "ExportAllDeclaration",
      source
    });
  }
  function exportDefaultDeclaration2(declaration) {
    return (0, validateNode_1.default)({
      type: "ExportDefaultDeclaration",
      declaration
    });
  }
  function exportNamedDeclaration2(declaration = null, specifiers = [], source = null) {
    return (0, validateNode_1.default)({
      type: "ExportNamedDeclaration",
      declaration,
      specifiers,
      source
    });
  }
  function exportSpecifier2(local, exported) {
    return (0, validateNode_1.default)({
      type: "ExportSpecifier",
      local,
      exported
    });
  }
  function forOfStatement2(left, right, body, _await = false) {
    return (0, validateNode_1.default)({
      type: "ForOfStatement",
      left,
      right,
      body,
      await: _await
    });
  }
  function importDeclaration2(specifiers, source) {
    return (0, validateNode_1.default)({
      type: "ImportDeclaration",
      specifiers,
      source
    });
  }
  function importDefaultSpecifier2(local) {
    return (0, validateNode_1.default)({
      type: "ImportDefaultSpecifier",
      local
    });
  }
  function importNamespaceSpecifier2(local) {
    return (0, validateNode_1.default)({
      type: "ImportNamespaceSpecifier",
      local
    });
  }
  function importSpecifier2(local, imported) {
    return (0, validateNode_1.default)({
      type: "ImportSpecifier",
      local,
      imported
    });
  }
  function metaProperty2(meta, property) {
    return (0, validateNode_1.default)({
      type: "MetaProperty",
      meta,
      property
    });
  }
  function classMethod2(kind = "method", key, params, body, computed = false, _static = false, generator = false, async = false) {
    return (0, validateNode_1.default)({
      type: "ClassMethod",
      kind,
      key,
      params,
      body,
      computed,
      static: _static,
      generator,
      async
    });
  }
  function objectPattern2(properties) {
    return (0, validateNode_1.default)({
      type: "ObjectPattern",
      properties
    });
  }
  function spreadElement2(argument) {
    return (0, validateNode_1.default)({
      type: "SpreadElement",
      argument
    });
  }
  function _super() {
    return {
      type: "Super"
    };
  }
  function taggedTemplateExpression2(tag, quasi) {
    return (0, validateNode_1.default)({
      type: "TaggedTemplateExpression",
      tag,
      quasi
    });
  }
  function templateElement2(value, tail = false) {
    return (0, validateNode_1.default)({
      type: "TemplateElement",
      value,
      tail
    });
  }
  function templateLiteral2(quasis, expressions) {
    return (0, validateNode_1.default)({
      type: "TemplateLiteral",
      quasis,
      expressions
    });
  }
  function yieldExpression2(argument = null, delegate = false) {
    return (0, validateNode_1.default)({
      type: "YieldExpression",
      argument,
      delegate
    });
  }
  function awaitExpression2(argument) {
    return (0, validateNode_1.default)({
      type: "AwaitExpression",
      argument
    });
  }
  function _import() {
    return {
      type: "Import"
    };
  }
  function bigIntLiteral2(value) {
    return (0, validateNode_1.default)({
      type: "BigIntLiteral",
      value
    });
  }
  function exportNamespaceSpecifier2(exported) {
    return (0, validateNode_1.default)({
      type: "ExportNamespaceSpecifier",
      exported
    });
  }
  function optionalMemberExpression2(object, property, computed = false, optional) {
    return (0, validateNode_1.default)({
      type: "OptionalMemberExpression",
      object,
      property,
      computed,
      optional
    });
  }
  function optionalCallExpression2(callee, _arguments, optional) {
    return (0, validateNode_1.default)({
      type: "OptionalCallExpression",
      callee,
      arguments: _arguments,
      optional
    });
  }
  function classProperty2(key, value = null, typeAnnotation3 = null, decorators = null, computed = false, _static = false) {
    return (0, validateNode_1.default)({
      type: "ClassProperty",
      key,
      value,
      typeAnnotation: typeAnnotation3,
      decorators,
      computed,
      static: _static
    });
  }
  function classAccessorProperty2(key, value = null, typeAnnotation3 = null, decorators = null, computed = false, _static = false) {
    return (0, validateNode_1.default)({
      type: "ClassAccessorProperty",
      key,
      value,
      typeAnnotation: typeAnnotation3,
      decorators,
      computed,
      static: _static
    });
  }
  function classPrivateProperty2(key, value = null, decorators = null, _static = false) {
    return (0, validateNode_1.default)({
      type: "ClassPrivateProperty",
      key,
      value,
      decorators,
      static: _static
    });
  }
  function classPrivateMethod2(kind = "method", key, params, body, _static = false) {
    return (0, validateNode_1.default)({
      type: "ClassPrivateMethod",
      kind,
      key,
      params,
      body,
      static: _static
    });
  }
  function privateName2(id) {
    return (0, validateNode_1.default)({
      type: "PrivateName",
      id
    });
  }
  function staticBlock2(body) {
    return (0, validateNode_1.default)({
      type: "StaticBlock",
      body
    });
  }
  function anyTypeAnnotation2() {
    return {
      type: "AnyTypeAnnotation"
    };
  }
  function arrayTypeAnnotation2(elementType) {
    return (0, validateNode_1.default)({
      type: "ArrayTypeAnnotation",
      elementType
    });
  }
  function booleanTypeAnnotation2() {
    return {
      type: "BooleanTypeAnnotation"
    };
  }
  function booleanLiteralTypeAnnotation2(value) {
    return (0, validateNode_1.default)({
      type: "BooleanLiteralTypeAnnotation",
      value
    });
  }
  function nullLiteralTypeAnnotation2() {
    return {
      type: "NullLiteralTypeAnnotation"
    };
  }
  function classImplements2(id, typeParameters = null) {
    return (0, validateNode_1.default)({
      type: "ClassImplements",
      id,
      typeParameters
    });
  }
  function declareClass2(id, typeParameters = null, _extends = null, body) {
    return (0, validateNode_1.default)({
      type: "DeclareClass",
      id,
      typeParameters,
      extends: _extends,
      body
    });
  }
  function declareFunction2(id) {
    return (0, validateNode_1.default)({
      type: "DeclareFunction",
      id
    });
  }
  function declareInterface2(id, typeParameters = null, _extends = null, body) {
    return (0, validateNode_1.default)({
      type: "DeclareInterface",
      id,
      typeParameters,
      extends: _extends,
      body
    });
  }
  function declareModule2(id, body, kind = null) {
    return (0, validateNode_1.default)({
      type: "DeclareModule",
      id,
      body,
      kind
    });
  }
  function declareModuleExports2(typeAnnotation3) {
    return (0, validateNode_1.default)({
      type: "DeclareModuleExports",
      typeAnnotation: typeAnnotation3
    });
  }
  function declareTypeAlias2(id, typeParameters = null, right) {
    return (0, validateNode_1.default)({
      type: "DeclareTypeAlias",
      id,
      typeParameters,
      right
    });
  }
  function declareOpaqueType2(id, typeParameters = null, supertype = null) {
    return (0, validateNode_1.default)({
      type: "DeclareOpaqueType",
      id,
      typeParameters,
      supertype
    });
  }
  function declareVariable2(id) {
    return (0, validateNode_1.default)({
      type: "DeclareVariable",
      id
    });
  }
  function declareExportDeclaration2(declaration = null, specifiers = null, source = null) {
    return (0, validateNode_1.default)({
      type: "DeclareExportDeclaration",
      declaration,
      specifiers,
      source
    });
  }
  function declareExportAllDeclaration2(source) {
    return (0, validateNode_1.default)({
      type: "DeclareExportAllDeclaration",
      source
    });
  }
  function declaredPredicate2(value) {
    return (0, validateNode_1.default)({
      type: "DeclaredPredicate",
      value
    });
  }
  function existsTypeAnnotation2() {
    return {
      type: "ExistsTypeAnnotation"
    };
  }
  function functionTypeAnnotation2(typeParameters = null, params, rest = null, returnType) {
    return (0, validateNode_1.default)({
      type: "FunctionTypeAnnotation",
      typeParameters,
      params,
      rest,
      returnType
    });
  }
  function functionTypeParam2(name = null, typeAnnotation3) {
    return (0, validateNode_1.default)({
      type: "FunctionTypeParam",
      name,
      typeAnnotation: typeAnnotation3
    });
  }
  function genericTypeAnnotation2(id, typeParameters = null) {
    return (0, validateNode_1.default)({
      type: "GenericTypeAnnotation",
      id,
      typeParameters
    });
  }
  function inferredPredicate2() {
    return {
      type: "InferredPredicate"
    };
  }
  function interfaceExtends2(id, typeParameters = null) {
    return (0, validateNode_1.default)({
      type: "InterfaceExtends",
      id,
      typeParameters
    });
  }
  function interfaceDeclaration2(id, typeParameters = null, _extends = null, body) {
    return (0, validateNode_1.default)({
      type: "InterfaceDeclaration",
      id,
      typeParameters,
      extends: _extends,
      body
    });
  }
  function interfaceTypeAnnotation2(_extends = null, body) {
    return (0, validateNode_1.default)({
      type: "InterfaceTypeAnnotation",
      extends: _extends,
      body
    });
  }
  function intersectionTypeAnnotation2(types) {
    return (0, validateNode_1.default)({
      type: "IntersectionTypeAnnotation",
      types
    });
  }
  function mixedTypeAnnotation2() {
    return {
      type: "MixedTypeAnnotation"
    };
  }
  function emptyTypeAnnotation2() {
    return {
      type: "EmptyTypeAnnotation"
    };
  }
  function nullableTypeAnnotation2(typeAnnotation3) {
    return (0, validateNode_1.default)({
      type: "NullableTypeAnnotation",
      typeAnnotation: typeAnnotation3
    });
  }
  function numberLiteralTypeAnnotation2(value) {
    return (0, validateNode_1.default)({
      type: "NumberLiteralTypeAnnotation",
      value
    });
  }
  function numberTypeAnnotation2() {
    return {
      type: "NumberTypeAnnotation"
    };
  }
  function objectTypeAnnotation2(properties, indexers = [], callProperties = [], internalSlots = [], exact = false) {
    return (0, validateNode_1.default)({
      type: "ObjectTypeAnnotation",
      properties,
      indexers,
      callProperties,
      internalSlots,
      exact
    });
  }
  function objectTypeInternalSlot2(id, value, optional, _static, method) {
    return (0, validateNode_1.default)({
      type: "ObjectTypeInternalSlot",
      id,
      value,
      optional,
      static: _static,
      method
    });
  }
  function objectTypeCallProperty2(value) {
    return (0, validateNode_1.default)({
      type: "ObjectTypeCallProperty",
      value,
      static: null
    });
  }
  function objectTypeIndexer2(id = null, key, value, variance3 = null) {
    return (0, validateNode_1.default)({
      type: "ObjectTypeIndexer",
      id,
      key,
      value,
      variance: variance3,
      static: null
    });
  }
  function objectTypeProperty2(key, value, variance3 = null) {
    return (0, validateNode_1.default)({
      type: "ObjectTypeProperty",
      key,
      value,
      variance: variance3,
      kind: null,
      method: null,
      optional: null,
      proto: null,
      static: null
    });
  }
  function objectTypeSpreadProperty2(argument) {
    return (0, validateNode_1.default)({
      type: "ObjectTypeSpreadProperty",
      argument
    });
  }
  function opaqueType2(id, typeParameters = null, supertype = null, impltype) {
    return (0, validateNode_1.default)({
      type: "OpaqueType",
      id,
      typeParameters,
      supertype,
      impltype
    });
  }
  function qualifiedTypeIdentifier2(id, qualification) {
    return (0, validateNode_1.default)({
      type: "QualifiedTypeIdentifier",
      id,
      qualification
    });
  }
  function stringLiteralTypeAnnotation2(value) {
    return (0, validateNode_1.default)({
      type: "StringLiteralTypeAnnotation",
      value
    });
  }
  function stringTypeAnnotation2() {
    return {
      type: "StringTypeAnnotation"
    };
  }
  function symbolTypeAnnotation2() {
    return {
      type: "SymbolTypeAnnotation"
    };
  }
  function thisTypeAnnotation2() {
    return {
      type: "ThisTypeAnnotation"
    };
  }
  function tupleTypeAnnotation2(types) {
    return (0, validateNode_1.default)({
      type: "TupleTypeAnnotation",
      types
    });
  }
  function typeofTypeAnnotation2(argument) {
    return (0, validateNode_1.default)({
      type: "TypeofTypeAnnotation",
      argument
    });
  }
  function typeAlias2(id, typeParameters = null, right) {
    return (0, validateNode_1.default)({
      type: "TypeAlias",
      id,
      typeParameters,
      right
    });
  }
  function typeAnnotation2(typeAnnotation3) {
    return (0, validateNode_1.default)({
      type: "TypeAnnotation",
      typeAnnotation: typeAnnotation3
    });
  }
  function typeCastExpression2(expression, typeAnnotation3) {
    return (0, validateNode_1.default)({
      type: "TypeCastExpression",
      expression,
      typeAnnotation: typeAnnotation3
    });
  }
  function typeParameter2(bound = null, _default = null, variance3 = null) {
    return (0, validateNode_1.default)({
      type: "TypeParameter",
      bound,
      default: _default,
      variance: variance3,
      name: null
    });
  }
  function typeParameterDeclaration2(params) {
    return (0, validateNode_1.default)({
      type: "TypeParameterDeclaration",
      params
    });
  }
  function typeParameterInstantiation2(params) {
    return (0, validateNode_1.default)({
      type: "TypeParameterInstantiation",
      params
    });
  }
  function unionTypeAnnotation2(types) {
    return (0, validateNode_1.default)({
      type: "UnionTypeAnnotation",
      types
    });
  }
  function variance2(kind) {
    return (0, validateNode_1.default)({
      type: "Variance",
      kind
    });
  }
  function voidTypeAnnotation2() {
    return {
      type: "VoidTypeAnnotation"
    };
  }
  function enumDeclaration2(id, body) {
    return (0, validateNode_1.default)({
      type: "EnumDeclaration",
      id,
      body
    });
  }
  function enumBooleanBody2(members) {
    return (0, validateNode_1.default)({
      type: "EnumBooleanBody",
      members,
      explicitType: null,
      hasUnknownMembers: null
    });
  }
  function enumNumberBody2(members) {
    return (0, validateNode_1.default)({
      type: "EnumNumberBody",
      members,
      explicitType: null,
      hasUnknownMembers: null
    });
  }
  function enumStringBody2(members) {
    return (0, validateNode_1.default)({
      type: "EnumStringBody",
      members,
      explicitType: null,
      hasUnknownMembers: null
    });
  }
  function enumSymbolBody2(members) {
    return (0, validateNode_1.default)({
      type: "EnumSymbolBody",
      members,
      hasUnknownMembers: null
    });
  }
  function enumBooleanMember2(id) {
    return (0, validateNode_1.default)({
      type: "EnumBooleanMember",
      id,
      init: null
    });
  }
  function enumNumberMember2(id, init) {
    return (0, validateNode_1.default)({
      type: "EnumNumberMember",
      id,
      init
    });
  }
  function enumStringMember2(id, init) {
    return (0, validateNode_1.default)({
      type: "EnumStringMember",
      id,
      init
    });
  }
  function enumDefaultedMember2(id) {
    return (0, validateNode_1.default)({
      type: "EnumDefaultedMember",
      id
    });
  }
  function indexedAccessType2(objectType, indexType) {
    return (0, validateNode_1.default)({
      type: "IndexedAccessType",
      objectType,
      indexType
    });
  }
  function optionalIndexedAccessType2(objectType, indexType) {
    return (0, validateNode_1.default)({
      type: "OptionalIndexedAccessType",
      objectType,
      indexType,
      optional: null
    });
  }
  function jsxAttribute2(name, value = null) {
    return (0, validateNode_1.default)({
      type: "JSXAttribute",
      name,
      value
    });
  }
  function jsxClosingElement2(name) {
    return (0, validateNode_1.default)({
      type: "JSXClosingElement",
      name
    });
  }
  function jsxElement2(openingElement, closingElement = null, children, selfClosing = null) {
    return (0, validateNode_1.default)({
      type: "JSXElement",
      openingElement,
      closingElement,
      children,
      selfClosing
    });
  }
  function jsxEmptyExpression2() {
    return {
      type: "JSXEmptyExpression"
    };
  }
  function jsxExpressionContainer2(expression) {
    return (0, validateNode_1.default)({
      type: "JSXExpressionContainer",
      expression
    });
  }
  function jsxSpreadChild2(expression) {
    return (0, validateNode_1.default)({
      type: "JSXSpreadChild",
      expression
    });
  }
  function jsxIdentifier2(name) {
    return (0, validateNode_1.default)({
      type: "JSXIdentifier",
      name
    });
  }
  function jsxMemberExpression2(object, property) {
    return (0, validateNode_1.default)({
      type: "JSXMemberExpression",
      object,
      property
    });
  }
  function jsxNamespacedName2(namespace, name) {
    return (0, validateNode_1.default)({
      type: "JSXNamespacedName",
      namespace,
      name
    });
  }
  function jsxOpeningElement2(name, attributes, selfClosing = false) {
    return (0, validateNode_1.default)({
      type: "JSXOpeningElement",
      name,
      attributes,
      selfClosing
    });
  }
  function jsxSpreadAttribute2(argument) {
    return (0, validateNode_1.default)({
      type: "JSXSpreadAttribute",
      argument
    });
  }
  function jsxText2(value) {
    return (0, validateNode_1.default)({
      type: "JSXText",
      value
    });
  }
  function jsxFragment2(openingFragment, closingFragment, children) {
    return (0, validateNode_1.default)({
      type: "JSXFragment",
      openingFragment,
      closingFragment,
      children
    });
  }
  function jsxOpeningFragment2() {
    return {
      type: "JSXOpeningFragment"
    };
  }
  function jsxClosingFragment2() {
    return {
      type: "JSXClosingFragment"
    };
  }
  function noop2() {
    return {
      type: "Noop"
    };
  }
  function placeholder2(expectedNode, name) {
    return (0, validateNode_1.default)({
      type: "Placeholder",
      expectedNode,
      name
    });
  }
  function v8IntrinsicIdentifier2(name) {
    return (0, validateNode_1.default)({
      type: "V8IntrinsicIdentifier",
      name
    });
  }
  function argumentPlaceholder2() {
    return {
      type: "ArgumentPlaceholder"
    };
  }
  function bindExpression2(object, callee) {
    return (0, validateNode_1.default)({
      type: "BindExpression",
      object,
      callee
    });
  }
  function importAttribute2(key, value) {
    return (0, validateNode_1.default)({
      type: "ImportAttribute",
      key,
      value
    });
  }
  function decorator2(expression) {
    return (0, validateNode_1.default)({
      type: "Decorator",
      expression
    });
  }
  function doExpression2(body, async = false) {
    return (0, validateNode_1.default)({
      type: "DoExpression",
      body,
      async
    });
  }
  function exportDefaultSpecifier2(exported) {
    return (0, validateNode_1.default)({
      type: "ExportDefaultSpecifier",
      exported
    });
  }
  function recordExpression2(properties) {
    return (0, validateNode_1.default)({
      type: "RecordExpression",
      properties
    });
  }
  function tupleExpression2(elements = []) {
    return (0, validateNode_1.default)({
      type: "TupleExpression",
      elements
    });
  }
  function decimalLiteral2(value) {
    return (0, validateNode_1.default)({
      type: "DecimalLiteral",
      value
    });
  }
  function moduleExpression2(body) {
    return (0, validateNode_1.default)({
      type: "ModuleExpression",
      body
    });
  }
  function topicReference2() {
    return {
      type: "TopicReference"
    };
  }
  function pipelineTopicExpression2(expression) {
    return (0, validateNode_1.default)({
      type: "PipelineTopicExpression",
      expression
    });
  }
  function pipelineBareFunction2(callee) {
    return (0, validateNode_1.default)({
      type: "PipelineBareFunction",
      callee
    });
  }
  function pipelinePrimaryTopicReference2() {
    return {
      type: "PipelinePrimaryTopicReference"
    };
  }
  function tsParameterProperty2(parameter) {
    return (0, validateNode_1.default)({
      type: "TSParameterProperty",
      parameter
    });
  }
  function tsDeclareFunction2(id = null, typeParameters = null, params, returnType = null) {
    return (0, validateNode_1.default)({
      type: "TSDeclareFunction",
      id,
      typeParameters,
      params,
      returnType
    });
  }
  function tsDeclareMethod2(decorators = null, key, typeParameters = null, params, returnType = null) {
    return (0, validateNode_1.default)({
      type: "TSDeclareMethod",
      decorators,
      key,
      typeParameters,
      params,
      returnType
    });
  }
  function tsQualifiedName2(left, right) {
    return (0, validateNode_1.default)({
      type: "TSQualifiedName",
      left,
      right
    });
  }
  function tsCallSignatureDeclaration2(typeParameters = null, parameters, typeAnnotation3 = null) {
    return (0, validateNode_1.default)({
      type: "TSCallSignatureDeclaration",
      typeParameters,
      parameters,
      typeAnnotation: typeAnnotation3
    });
  }
  function tsConstructSignatureDeclaration2(typeParameters = null, parameters, typeAnnotation3 = null) {
    return (0, validateNode_1.default)({
      type: "TSConstructSignatureDeclaration",
      typeParameters,
      parameters,
      typeAnnotation: typeAnnotation3
    });
  }
  function tsPropertySignature2(key, typeAnnotation3 = null, initializer = null) {
    return (0, validateNode_1.default)({
      type: "TSPropertySignature",
      key,
      typeAnnotation: typeAnnotation3,
      initializer,
      kind: null
    });
  }
  function tsMethodSignature2(key, typeParameters = null, parameters, typeAnnotation3 = null) {
    return (0, validateNode_1.default)({
      type: "TSMethodSignature",
      key,
      typeParameters,
      parameters,
      typeAnnotation: typeAnnotation3,
      kind: null
    });
  }
  function tsIndexSignature2(parameters, typeAnnotation3 = null) {
    return (0, validateNode_1.default)({
      type: "TSIndexSignature",
      parameters,
      typeAnnotation: typeAnnotation3
    });
  }
  function tsAnyKeyword2() {
    return {
      type: "TSAnyKeyword"
    };
  }
  function tsBooleanKeyword2() {
    return {
      type: "TSBooleanKeyword"
    };
  }
  function tsBigIntKeyword2() {
    return {
      type: "TSBigIntKeyword"
    };
  }
  function tsIntrinsicKeyword2() {
    return {
      type: "TSIntrinsicKeyword"
    };
  }
  function tsNeverKeyword2() {
    return {
      type: "TSNeverKeyword"
    };
  }
  function tsNullKeyword2() {
    return {
      type: "TSNullKeyword"
    };
  }
  function tsNumberKeyword2() {
    return {
      type: "TSNumberKeyword"
    };
  }
  function tsObjectKeyword2() {
    return {
      type: "TSObjectKeyword"
    };
  }
  function tsStringKeyword2() {
    return {
      type: "TSStringKeyword"
    };
  }
  function tsSymbolKeyword2() {
    return {
      type: "TSSymbolKeyword"
    };
  }
  function tsUndefinedKeyword2() {
    return {
      type: "TSUndefinedKeyword"
    };
  }
  function tsUnknownKeyword2() {
    return {
      type: "TSUnknownKeyword"
    };
  }
  function tsVoidKeyword2() {
    return {
      type: "TSVoidKeyword"
    };
  }
  function tsThisType2() {
    return {
      type: "TSThisType"
    };
  }
  function tsFunctionType2(typeParameters = null, parameters, typeAnnotation3 = null) {
    return (0, validateNode_1.default)({
      type: "TSFunctionType",
      typeParameters,
      parameters,
      typeAnnotation: typeAnnotation3
    });
  }
  function tsConstructorType2(typeParameters = null, parameters, typeAnnotation3 = null) {
    return (0, validateNode_1.default)({
      type: "TSConstructorType",
      typeParameters,
      parameters,
      typeAnnotation: typeAnnotation3
    });
  }
  function tsTypeReference2(typeName, typeParameters = null) {
    return (0, validateNode_1.default)({
      type: "TSTypeReference",
      typeName,
      typeParameters
    });
  }
  function tsTypePredicate2(parameterName, typeAnnotation3 = null, asserts = null) {
    return (0, validateNode_1.default)({
      type: "TSTypePredicate",
      parameterName,
      typeAnnotation: typeAnnotation3,
      asserts
    });
  }
  function tsTypeQuery2(exprName, typeParameters = null) {
    return (0, validateNode_1.default)({
      type: "TSTypeQuery",
      exprName,
      typeParameters
    });
  }
  function tsTypeLiteral2(members) {
    return (0, validateNode_1.default)({
      type: "TSTypeLiteral",
      members
    });
  }
  function tsArrayType2(elementType) {
    return (0, validateNode_1.default)({
      type: "TSArrayType",
      elementType
    });
  }
  function tsTupleType2(elementTypes) {
    return (0, validateNode_1.default)({
      type: "TSTupleType",
      elementTypes
    });
  }
  function tsOptionalType2(typeAnnotation3) {
    return (0, validateNode_1.default)({
      type: "TSOptionalType",
      typeAnnotation: typeAnnotation3
    });
  }
  function tsRestType2(typeAnnotation3) {
    return (0, validateNode_1.default)({
      type: "TSRestType",
      typeAnnotation: typeAnnotation3
    });
  }
  function tsNamedTupleMember2(label, elementType, optional = false) {
    return (0, validateNode_1.default)({
      type: "TSNamedTupleMember",
      label,
      elementType,
      optional
    });
  }
  function tsUnionType2(types) {
    return (0, validateNode_1.default)({
      type: "TSUnionType",
      types
    });
  }
  function tsIntersectionType2(types) {
    return (0, validateNode_1.default)({
      type: "TSIntersectionType",
      types
    });
  }
  function tsConditionalType2(checkType, extendsType, trueType, falseType) {
    return (0, validateNode_1.default)({
      type: "TSConditionalType",
      checkType,
      extendsType,
      trueType,
      falseType
    });
  }
  function tsInferType2(typeParameter3) {
    return (0, validateNode_1.default)({
      type: "TSInferType",
      typeParameter: typeParameter3
    });
  }
  function tsParenthesizedType2(typeAnnotation3) {
    return (0, validateNode_1.default)({
      type: "TSParenthesizedType",
      typeAnnotation: typeAnnotation3
    });
  }
  function tsTypeOperator2(typeAnnotation3) {
    return (0, validateNode_1.default)({
      type: "TSTypeOperator",
      typeAnnotation: typeAnnotation3,
      operator: null
    });
  }
  function tsIndexedAccessType2(objectType, indexType) {
    return (0, validateNode_1.default)({
      type: "TSIndexedAccessType",
      objectType,
      indexType
    });
  }
  function tsMappedType2(typeParameter3, typeAnnotation3 = null, nameType = null) {
    return (0, validateNode_1.default)({
      type: "TSMappedType",
      typeParameter: typeParameter3,
      typeAnnotation: typeAnnotation3,
      nameType
    });
  }
  function tsLiteralType2(literal) {
    return (0, validateNode_1.default)({
      type: "TSLiteralType",
      literal
    });
  }
  function tsExpressionWithTypeArguments2(expression, typeParameters = null) {
    return (0, validateNode_1.default)({
      type: "TSExpressionWithTypeArguments",
      expression,
      typeParameters
    });
  }
  function tsInterfaceDeclaration2(id, typeParameters = null, _extends = null, body) {
    return (0, validateNode_1.default)({
      type: "TSInterfaceDeclaration",
      id,
      typeParameters,
      extends: _extends,
      body
    });
  }
  function tsInterfaceBody2(body) {
    return (0, validateNode_1.default)({
      type: "TSInterfaceBody",
      body
    });
  }
  function tsTypeAliasDeclaration2(id, typeParameters = null, typeAnnotation3) {
    return (0, validateNode_1.default)({
      type: "TSTypeAliasDeclaration",
      id,
      typeParameters,
      typeAnnotation: typeAnnotation3
    });
  }
  function tsInstantiationExpression2(expression, typeParameters = null) {
    return (0, validateNode_1.default)({
      type: "TSInstantiationExpression",
      expression,
      typeParameters
    });
  }
  function tsAsExpression2(expression, typeAnnotation3) {
    return (0, validateNode_1.default)({
      type: "TSAsExpression",
      expression,
      typeAnnotation: typeAnnotation3
    });
  }
  function tsSatisfiesExpression2(expression, typeAnnotation3) {
    return (0, validateNode_1.default)({
      type: "TSSatisfiesExpression",
      expression,
      typeAnnotation: typeAnnotation3
    });
  }
  function tsTypeAssertion2(typeAnnotation3, expression) {
    return (0, validateNode_1.default)({
      type: "TSTypeAssertion",
      typeAnnotation: typeAnnotation3,
      expression
    });
  }
  function tsEnumDeclaration2(id, members) {
    return (0, validateNode_1.default)({
      type: "TSEnumDeclaration",
      id,
      members
    });
  }
  function tsEnumMember2(id, initializer = null) {
    return (0, validateNode_1.default)({
      type: "TSEnumMember",
      id,
      initializer
    });
  }
  function tsModuleDeclaration2(id, body) {
    return (0, validateNode_1.default)({
      type: "TSModuleDeclaration",
      id,
      body
    });
  }
  function tsModuleBlock2(body) {
    return (0, validateNode_1.default)({
      type: "TSModuleBlock",
      body
    });
  }
  function tsImportType2(argument, qualifier = null, typeParameters = null) {
    return (0, validateNode_1.default)({
      type: "TSImportType",
      argument,
      qualifier,
      typeParameters
    });
  }
  function tsImportEqualsDeclaration2(id, moduleReference) {
    return (0, validateNode_1.default)({
      type: "TSImportEqualsDeclaration",
      id,
      moduleReference,
      isExport: null
    });
  }
  function tsExternalModuleReference2(expression) {
    return (0, validateNode_1.default)({
      type: "TSExternalModuleReference",
      expression
    });
  }
  function tsNonNullExpression2(expression) {
    return (0, validateNode_1.default)({
      type: "TSNonNullExpression",
      expression
    });
  }
  function tsExportAssignment2(expression) {
    return (0, validateNode_1.default)({
      type: "TSExportAssignment",
      expression
    });
  }
  function tsNamespaceExportDeclaration2(id) {
    return (0, validateNode_1.default)({
      type: "TSNamespaceExportDeclaration",
      id
    });
  }
  function tsTypeAnnotation2(typeAnnotation3) {
    return (0, validateNode_1.default)({
      type: "TSTypeAnnotation",
      typeAnnotation: typeAnnotation3
    });
  }
  function tsTypeParameterInstantiation2(params) {
    return (0, validateNode_1.default)({
      type: "TSTypeParameterInstantiation",
      params
    });
  }
  function tsTypeParameterDeclaration2(params) {
    return (0, validateNode_1.default)({
      type: "TSTypeParameterDeclaration",
      params
    });
  }
  function tsTypeParameter2(constraint = null, _default = null, name) {
    return (0, validateNode_1.default)({
      type: "TSTypeParameter",
      constraint,
      default: _default,
      name
    });
  }
  function NumberLiteral2(value) {
    (0, deprecationWarning_1.default)("NumberLiteral", "NumericLiteral", "The node type ");
    return numericLiteral2(value);
  }
  function RegexLiteral2(pattern, flags = "") {
    (0, deprecationWarning_1.default)("RegexLiteral", "RegExpLiteral", "The node type ");
    return regExpLiteral2(pattern, flags);
  }
  function RestProperty2(argument) {
    (0, deprecationWarning_1.default)("RestProperty", "RestElement", "The node type ");
    return restElement2(argument);
  }
  function SpreadProperty2(argument) {
    (0, deprecationWarning_1.default)("SpreadProperty", "SpreadElement", "The node type ");
    return spreadElement2(argument);
  }
});
var cleanJSXElementLiteralChild_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cleanJSXElementLiteralChild;
  function cleanJSXElementLiteralChild(child, args) {
    const lines = child.value.split(/\r\n|\n|\r/);
    let lastNonEmptyLine = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].match(/[^ \t]/)) {
        lastNonEmptyLine = i;
      }
    }
    let str = "";
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const isFirstLine = i === 0;
      const isLastLine = i === lines.length - 1;
      const isLastNonEmptyLine = i === lastNonEmptyLine;
      let trimmedLine = line.replace(/\t/g, " ");
      if (!isFirstLine) {
        trimmedLine = trimmedLine.replace(/^[ ]+/, "");
      }
      if (!isLastLine) {
        trimmedLine = trimmedLine.replace(/[ ]+$/, "");
      }
      if (trimmedLine) {
        if (!isLastNonEmptyLine) {
          trimmedLine += " ";
        }
        str += trimmedLine;
      }
    }
    if (str)
      args.push((0, lib.inherits)((0, generated$1.stringLiteral)(str), child));
  }
});
var buildChildren_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = buildChildren;
  function buildChildren(node) {
    const elements = [];
    for (let i = 0; i < node.children.length; i++) {
      let child = node.children[i];
      if ((0, generated.isJSXText)(child)) {
        (0, cleanJSXElementLiteralChild_1.default)(child, elements);
        continue;
      }
      if ((0, generated.isJSXExpressionContainer)(child))
        child = child.expression;
      if ((0, generated.isJSXEmptyExpression)(child))
        continue;
      elements.push(child);
    }
    return elements;
  }
});
var isNode_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isNode2;
  function isNode2(node) {
    return !!(node && definitions.VISITOR_KEYS[node.type]);
  }
});
var assertNode_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = assertNode2;
  function assertNode2(node) {
    if (!(0, isNode_1.default)(node)) {
      var _node$type;
      const type = (_node$type = node == null ? void 0 : node.type) != null ? _node$type : JSON.stringify(node);
      throw new TypeError(`Not a valid node of type "${type}"`);
    }
  }
});
var generated$2 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.assertAccessor = assertAccessor2;
  exports.assertAnyTypeAnnotation = assertAnyTypeAnnotation2;
  exports.assertArgumentPlaceholder = assertArgumentPlaceholder2;
  exports.assertArrayExpression = assertArrayExpression2;
  exports.assertArrayPattern = assertArrayPattern2;
  exports.assertArrayTypeAnnotation = assertArrayTypeAnnotation2;
  exports.assertArrowFunctionExpression = assertArrowFunctionExpression2;
  exports.assertAssignmentExpression = assertAssignmentExpression2;
  exports.assertAssignmentPattern = assertAssignmentPattern2;
  exports.assertAwaitExpression = assertAwaitExpression2;
  exports.assertBigIntLiteral = assertBigIntLiteral2;
  exports.assertBinary = assertBinary2;
  exports.assertBinaryExpression = assertBinaryExpression2;
  exports.assertBindExpression = assertBindExpression2;
  exports.assertBlock = assertBlock2;
  exports.assertBlockParent = assertBlockParent2;
  exports.assertBlockStatement = assertBlockStatement2;
  exports.assertBooleanLiteral = assertBooleanLiteral2;
  exports.assertBooleanLiteralTypeAnnotation = assertBooleanLiteralTypeAnnotation2;
  exports.assertBooleanTypeAnnotation = assertBooleanTypeAnnotation2;
  exports.assertBreakStatement = assertBreakStatement2;
  exports.assertCallExpression = assertCallExpression2;
  exports.assertCatchClause = assertCatchClause2;
  exports.assertClass = assertClass2;
  exports.assertClassAccessorProperty = assertClassAccessorProperty2;
  exports.assertClassBody = assertClassBody2;
  exports.assertClassDeclaration = assertClassDeclaration2;
  exports.assertClassExpression = assertClassExpression2;
  exports.assertClassImplements = assertClassImplements2;
  exports.assertClassMethod = assertClassMethod2;
  exports.assertClassPrivateMethod = assertClassPrivateMethod2;
  exports.assertClassPrivateProperty = assertClassPrivateProperty2;
  exports.assertClassProperty = assertClassProperty2;
  exports.assertCompletionStatement = assertCompletionStatement2;
  exports.assertConditional = assertConditional2;
  exports.assertConditionalExpression = assertConditionalExpression2;
  exports.assertContinueStatement = assertContinueStatement2;
  exports.assertDebuggerStatement = assertDebuggerStatement2;
  exports.assertDecimalLiteral = assertDecimalLiteral2;
  exports.assertDeclaration = assertDeclaration2;
  exports.assertDeclareClass = assertDeclareClass2;
  exports.assertDeclareExportAllDeclaration = assertDeclareExportAllDeclaration2;
  exports.assertDeclareExportDeclaration = assertDeclareExportDeclaration2;
  exports.assertDeclareFunction = assertDeclareFunction2;
  exports.assertDeclareInterface = assertDeclareInterface2;
  exports.assertDeclareModule = assertDeclareModule2;
  exports.assertDeclareModuleExports = assertDeclareModuleExports2;
  exports.assertDeclareOpaqueType = assertDeclareOpaqueType2;
  exports.assertDeclareTypeAlias = assertDeclareTypeAlias2;
  exports.assertDeclareVariable = assertDeclareVariable2;
  exports.assertDeclaredPredicate = assertDeclaredPredicate2;
  exports.assertDecorator = assertDecorator2;
  exports.assertDirective = assertDirective2;
  exports.assertDirectiveLiteral = assertDirectiveLiteral2;
  exports.assertDoExpression = assertDoExpression2;
  exports.assertDoWhileStatement = assertDoWhileStatement2;
  exports.assertEmptyStatement = assertEmptyStatement2;
  exports.assertEmptyTypeAnnotation = assertEmptyTypeAnnotation2;
  exports.assertEnumBody = assertEnumBody2;
  exports.assertEnumBooleanBody = assertEnumBooleanBody2;
  exports.assertEnumBooleanMember = assertEnumBooleanMember2;
  exports.assertEnumDeclaration = assertEnumDeclaration2;
  exports.assertEnumDefaultedMember = assertEnumDefaultedMember2;
  exports.assertEnumMember = assertEnumMember2;
  exports.assertEnumNumberBody = assertEnumNumberBody2;
  exports.assertEnumNumberMember = assertEnumNumberMember2;
  exports.assertEnumStringBody = assertEnumStringBody2;
  exports.assertEnumStringMember = assertEnumStringMember2;
  exports.assertEnumSymbolBody = assertEnumSymbolBody2;
  exports.assertExistsTypeAnnotation = assertExistsTypeAnnotation2;
  exports.assertExportAllDeclaration = assertExportAllDeclaration2;
  exports.assertExportDeclaration = assertExportDeclaration2;
  exports.assertExportDefaultDeclaration = assertExportDefaultDeclaration2;
  exports.assertExportDefaultSpecifier = assertExportDefaultSpecifier2;
  exports.assertExportNamedDeclaration = assertExportNamedDeclaration2;
  exports.assertExportNamespaceSpecifier = assertExportNamespaceSpecifier2;
  exports.assertExportSpecifier = assertExportSpecifier2;
  exports.assertExpression = assertExpression2;
  exports.assertExpressionStatement = assertExpressionStatement2;
  exports.assertExpressionWrapper = assertExpressionWrapper2;
  exports.assertFile = assertFile2;
  exports.assertFlow = assertFlow2;
  exports.assertFlowBaseAnnotation = assertFlowBaseAnnotation2;
  exports.assertFlowDeclaration = assertFlowDeclaration2;
  exports.assertFlowPredicate = assertFlowPredicate2;
  exports.assertFlowType = assertFlowType2;
  exports.assertFor = assertFor2;
  exports.assertForInStatement = assertForInStatement2;
  exports.assertForOfStatement = assertForOfStatement2;
  exports.assertForStatement = assertForStatement2;
  exports.assertForXStatement = assertForXStatement2;
  exports.assertFunction = assertFunction2;
  exports.assertFunctionDeclaration = assertFunctionDeclaration2;
  exports.assertFunctionExpression = assertFunctionExpression2;
  exports.assertFunctionParent = assertFunctionParent2;
  exports.assertFunctionTypeAnnotation = assertFunctionTypeAnnotation2;
  exports.assertFunctionTypeParam = assertFunctionTypeParam2;
  exports.assertGenericTypeAnnotation = assertGenericTypeAnnotation2;
  exports.assertIdentifier = assertIdentifier2;
  exports.assertIfStatement = assertIfStatement2;
  exports.assertImmutable = assertImmutable2;
  exports.assertImport = assertImport2;
  exports.assertImportAttribute = assertImportAttribute2;
  exports.assertImportDeclaration = assertImportDeclaration2;
  exports.assertImportDefaultSpecifier = assertImportDefaultSpecifier2;
  exports.assertImportNamespaceSpecifier = assertImportNamespaceSpecifier2;
  exports.assertImportOrExportDeclaration = assertImportOrExportDeclaration2;
  exports.assertImportSpecifier = assertImportSpecifier2;
  exports.assertIndexedAccessType = assertIndexedAccessType2;
  exports.assertInferredPredicate = assertInferredPredicate2;
  exports.assertInterfaceDeclaration = assertInterfaceDeclaration2;
  exports.assertInterfaceExtends = assertInterfaceExtends2;
  exports.assertInterfaceTypeAnnotation = assertInterfaceTypeAnnotation2;
  exports.assertInterpreterDirective = assertInterpreterDirective2;
  exports.assertIntersectionTypeAnnotation = assertIntersectionTypeAnnotation2;
  exports.assertJSX = assertJSX2;
  exports.assertJSXAttribute = assertJSXAttribute2;
  exports.assertJSXClosingElement = assertJSXClosingElement2;
  exports.assertJSXClosingFragment = assertJSXClosingFragment2;
  exports.assertJSXElement = assertJSXElement2;
  exports.assertJSXEmptyExpression = assertJSXEmptyExpression2;
  exports.assertJSXExpressionContainer = assertJSXExpressionContainer2;
  exports.assertJSXFragment = assertJSXFragment2;
  exports.assertJSXIdentifier = assertJSXIdentifier2;
  exports.assertJSXMemberExpression = assertJSXMemberExpression2;
  exports.assertJSXNamespacedName = assertJSXNamespacedName2;
  exports.assertJSXOpeningElement = assertJSXOpeningElement2;
  exports.assertJSXOpeningFragment = assertJSXOpeningFragment2;
  exports.assertJSXSpreadAttribute = assertJSXSpreadAttribute2;
  exports.assertJSXSpreadChild = assertJSXSpreadChild2;
  exports.assertJSXText = assertJSXText2;
  exports.assertLVal = assertLVal2;
  exports.assertLabeledStatement = assertLabeledStatement2;
  exports.assertLiteral = assertLiteral2;
  exports.assertLogicalExpression = assertLogicalExpression2;
  exports.assertLoop = assertLoop2;
  exports.assertMemberExpression = assertMemberExpression2;
  exports.assertMetaProperty = assertMetaProperty2;
  exports.assertMethod = assertMethod2;
  exports.assertMiscellaneous = assertMiscellaneous2;
  exports.assertMixedTypeAnnotation = assertMixedTypeAnnotation2;
  exports.assertModuleDeclaration = assertModuleDeclaration2;
  exports.assertModuleExpression = assertModuleExpression2;
  exports.assertModuleSpecifier = assertModuleSpecifier2;
  exports.assertNewExpression = assertNewExpression2;
  exports.assertNoop = assertNoop2;
  exports.assertNullLiteral = assertNullLiteral2;
  exports.assertNullLiteralTypeAnnotation = assertNullLiteralTypeAnnotation2;
  exports.assertNullableTypeAnnotation = assertNullableTypeAnnotation2;
  exports.assertNumberLiteral = assertNumberLiteral2;
  exports.assertNumberLiteralTypeAnnotation = assertNumberLiteralTypeAnnotation2;
  exports.assertNumberTypeAnnotation = assertNumberTypeAnnotation2;
  exports.assertNumericLiteral = assertNumericLiteral2;
  exports.assertObjectExpression = assertObjectExpression2;
  exports.assertObjectMember = assertObjectMember2;
  exports.assertObjectMethod = assertObjectMethod2;
  exports.assertObjectPattern = assertObjectPattern2;
  exports.assertObjectProperty = assertObjectProperty2;
  exports.assertObjectTypeAnnotation = assertObjectTypeAnnotation2;
  exports.assertObjectTypeCallProperty = assertObjectTypeCallProperty2;
  exports.assertObjectTypeIndexer = assertObjectTypeIndexer2;
  exports.assertObjectTypeInternalSlot = assertObjectTypeInternalSlot2;
  exports.assertObjectTypeProperty = assertObjectTypeProperty2;
  exports.assertObjectTypeSpreadProperty = assertObjectTypeSpreadProperty2;
  exports.assertOpaqueType = assertOpaqueType2;
  exports.assertOptionalCallExpression = assertOptionalCallExpression2;
  exports.assertOptionalIndexedAccessType = assertOptionalIndexedAccessType2;
  exports.assertOptionalMemberExpression = assertOptionalMemberExpression2;
  exports.assertParenthesizedExpression = assertParenthesizedExpression2;
  exports.assertPattern = assertPattern2;
  exports.assertPatternLike = assertPatternLike2;
  exports.assertPipelineBareFunction = assertPipelineBareFunction2;
  exports.assertPipelinePrimaryTopicReference = assertPipelinePrimaryTopicReference2;
  exports.assertPipelineTopicExpression = assertPipelineTopicExpression2;
  exports.assertPlaceholder = assertPlaceholder2;
  exports.assertPrivate = assertPrivate2;
  exports.assertPrivateName = assertPrivateName2;
  exports.assertProgram = assertProgram2;
  exports.assertProperty = assertProperty2;
  exports.assertPureish = assertPureish2;
  exports.assertQualifiedTypeIdentifier = assertQualifiedTypeIdentifier2;
  exports.assertRecordExpression = assertRecordExpression2;
  exports.assertRegExpLiteral = assertRegExpLiteral2;
  exports.assertRegexLiteral = assertRegexLiteral2;
  exports.assertRestElement = assertRestElement2;
  exports.assertRestProperty = assertRestProperty2;
  exports.assertReturnStatement = assertReturnStatement2;
  exports.assertScopable = assertScopable2;
  exports.assertSequenceExpression = assertSequenceExpression2;
  exports.assertSpreadElement = assertSpreadElement2;
  exports.assertSpreadProperty = assertSpreadProperty2;
  exports.assertStandardized = assertStandardized2;
  exports.assertStatement = assertStatement2;
  exports.assertStaticBlock = assertStaticBlock2;
  exports.assertStringLiteral = assertStringLiteral2;
  exports.assertStringLiteralTypeAnnotation = assertStringLiteralTypeAnnotation2;
  exports.assertStringTypeAnnotation = assertStringTypeAnnotation2;
  exports.assertSuper = assertSuper2;
  exports.assertSwitchCase = assertSwitchCase2;
  exports.assertSwitchStatement = assertSwitchStatement2;
  exports.assertSymbolTypeAnnotation = assertSymbolTypeAnnotation2;
  exports.assertTSAnyKeyword = assertTSAnyKeyword2;
  exports.assertTSArrayType = assertTSArrayType2;
  exports.assertTSAsExpression = assertTSAsExpression2;
  exports.assertTSBaseType = assertTSBaseType2;
  exports.assertTSBigIntKeyword = assertTSBigIntKeyword2;
  exports.assertTSBooleanKeyword = assertTSBooleanKeyword2;
  exports.assertTSCallSignatureDeclaration = assertTSCallSignatureDeclaration2;
  exports.assertTSConditionalType = assertTSConditionalType2;
  exports.assertTSConstructSignatureDeclaration = assertTSConstructSignatureDeclaration2;
  exports.assertTSConstructorType = assertTSConstructorType2;
  exports.assertTSDeclareFunction = assertTSDeclareFunction2;
  exports.assertTSDeclareMethod = assertTSDeclareMethod2;
  exports.assertTSEntityName = assertTSEntityName2;
  exports.assertTSEnumDeclaration = assertTSEnumDeclaration2;
  exports.assertTSEnumMember = assertTSEnumMember2;
  exports.assertTSExportAssignment = assertTSExportAssignment2;
  exports.assertTSExpressionWithTypeArguments = assertTSExpressionWithTypeArguments2;
  exports.assertTSExternalModuleReference = assertTSExternalModuleReference2;
  exports.assertTSFunctionType = assertTSFunctionType2;
  exports.assertTSImportEqualsDeclaration = assertTSImportEqualsDeclaration2;
  exports.assertTSImportType = assertTSImportType2;
  exports.assertTSIndexSignature = assertTSIndexSignature2;
  exports.assertTSIndexedAccessType = assertTSIndexedAccessType2;
  exports.assertTSInferType = assertTSInferType2;
  exports.assertTSInstantiationExpression = assertTSInstantiationExpression2;
  exports.assertTSInterfaceBody = assertTSInterfaceBody2;
  exports.assertTSInterfaceDeclaration = assertTSInterfaceDeclaration2;
  exports.assertTSIntersectionType = assertTSIntersectionType2;
  exports.assertTSIntrinsicKeyword = assertTSIntrinsicKeyword2;
  exports.assertTSLiteralType = assertTSLiteralType2;
  exports.assertTSMappedType = assertTSMappedType2;
  exports.assertTSMethodSignature = assertTSMethodSignature2;
  exports.assertTSModuleBlock = assertTSModuleBlock2;
  exports.assertTSModuleDeclaration = assertTSModuleDeclaration2;
  exports.assertTSNamedTupleMember = assertTSNamedTupleMember2;
  exports.assertTSNamespaceExportDeclaration = assertTSNamespaceExportDeclaration2;
  exports.assertTSNeverKeyword = assertTSNeverKeyword2;
  exports.assertTSNonNullExpression = assertTSNonNullExpression2;
  exports.assertTSNullKeyword = assertTSNullKeyword2;
  exports.assertTSNumberKeyword = assertTSNumberKeyword2;
  exports.assertTSObjectKeyword = assertTSObjectKeyword2;
  exports.assertTSOptionalType = assertTSOptionalType2;
  exports.assertTSParameterProperty = assertTSParameterProperty2;
  exports.assertTSParenthesizedType = assertTSParenthesizedType2;
  exports.assertTSPropertySignature = assertTSPropertySignature2;
  exports.assertTSQualifiedName = assertTSQualifiedName2;
  exports.assertTSRestType = assertTSRestType2;
  exports.assertTSSatisfiesExpression = assertTSSatisfiesExpression2;
  exports.assertTSStringKeyword = assertTSStringKeyword2;
  exports.assertTSSymbolKeyword = assertTSSymbolKeyword2;
  exports.assertTSThisType = assertTSThisType2;
  exports.assertTSTupleType = assertTSTupleType2;
  exports.assertTSType = assertTSType2;
  exports.assertTSTypeAliasDeclaration = assertTSTypeAliasDeclaration2;
  exports.assertTSTypeAnnotation = assertTSTypeAnnotation2;
  exports.assertTSTypeAssertion = assertTSTypeAssertion2;
  exports.assertTSTypeElement = assertTSTypeElement2;
  exports.assertTSTypeLiteral = assertTSTypeLiteral2;
  exports.assertTSTypeOperator = assertTSTypeOperator2;
  exports.assertTSTypeParameter = assertTSTypeParameter2;
  exports.assertTSTypeParameterDeclaration = assertTSTypeParameterDeclaration2;
  exports.assertTSTypeParameterInstantiation = assertTSTypeParameterInstantiation2;
  exports.assertTSTypePredicate = assertTSTypePredicate2;
  exports.assertTSTypeQuery = assertTSTypeQuery2;
  exports.assertTSTypeReference = assertTSTypeReference2;
  exports.assertTSUndefinedKeyword = assertTSUndefinedKeyword2;
  exports.assertTSUnionType = assertTSUnionType2;
  exports.assertTSUnknownKeyword = assertTSUnknownKeyword2;
  exports.assertTSVoidKeyword = assertTSVoidKeyword2;
  exports.assertTaggedTemplateExpression = assertTaggedTemplateExpression2;
  exports.assertTemplateElement = assertTemplateElement2;
  exports.assertTemplateLiteral = assertTemplateLiteral2;
  exports.assertTerminatorless = assertTerminatorless2;
  exports.assertThisExpression = assertThisExpression2;
  exports.assertThisTypeAnnotation = assertThisTypeAnnotation2;
  exports.assertThrowStatement = assertThrowStatement2;
  exports.assertTopicReference = assertTopicReference2;
  exports.assertTryStatement = assertTryStatement2;
  exports.assertTupleExpression = assertTupleExpression2;
  exports.assertTupleTypeAnnotation = assertTupleTypeAnnotation2;
  exports.assertTypeAlias = assertTypeAlias2;
  exports.assertTypeAnnotation = assertTypeAnnotation2;
  exports.assertTypeCastExpression = assertTypeCastExpression2;
  exports.assertTypeParameter = assertTypeParameter2;
  exports.assertTypeParameterDeclaration = assertTypeParameterDeclaration2;
  exports.assertTypeParameterInstantiation = assertTypeParameterInstantiation2;
  exports.assertTypeScript = assertTypeScript2;
  exports.assertTypeofTypeAnnotation = assertTypeofTypeAnnotation2;
  exports.assertUnaryExpression = assertUnaryExpression2;
  exports.assertUnaryLike = assertUnaryLike2;
  exports.assertUnionTypeAnnotation = assertUnionTypeAnnotation2;
  exports.assertUpdateExpression = assertUpdateExpression2;
  exports.assertUserWhitespacable = assertUserWhitespacable2;
  exports.assertV8IntrinsicIdentifier = assertV8IntrinsicIdentifier2;
  exports.assertVariableDeclaration = assertVariableDeclaration2;
  exports.assertVariableDeclarator = assertVariableDeclarator2;
  exports.assertVariance = assertVariance2;
  exports.assertVoidTypeAnnotation = assertVoidTypeAnnotation2;
  exports.assertWhile = assertWhile2;
  exports.assertWhileStatement = assertWhileStatement2;
  exports.assertWithStatement = assertWithStatement2;
  exports.assertYieldExpression = assertYieldExpression2;
  function assert(type, node, opts) {
    if (!(0, is_1.default)(type, node, opts)) {
      throw new Error(`Expected type "${type}" with option ${JSON.stringify(opts)}, but instead got "${node.type}".`);
    }
  }
  function assertArrayExpression2(node, opts) {
    assert("ArrayExpression", node, opts);
  }
  function assertAssignmentExpression2(node, opts) {
    assert("AssignmentExpression", node, opts);
  }
  function assertBinaryExpression2(node, opts) {
    assert("BinaryExpression", node, opts);
  }
  function assertInterpreterDirective2(node, opts) {
    assert("InterpreterDirective", node, opts);
  }
  function assertDirective2(node, opts) {
    assert("Directive", node, opts);
  }
  function assertDirectiveLiteral2(node, opts) {
    assert("DirectiveLiteral", node, opts);
  }
  function assertBlockStatement2(node, opts) {
    assert("BlockStatement", node, opts);
  }
  function assertBreakStatement2(node, opts) {
    assert("BreakStatement", node, opts);
  }
  function assertCallExpression2(node, opts) {
    assert("CallExpression", node, opts);
  }
  function assertCatchClause2(node, opts) {
    assert("CatchClause", node, opts);
  }
  function assertConditionalExpression2(node, opts) {
    assert("ConditionalExpression", node, opts);
  }
  function assertContinueStatement2(node, opts) {
    assert("ContinueStatement", node, opts);
  }
  function assertDebuggerStatement2(node, opts) {
    assert("DebuggerStatement", node, opts);
  }
  function assertDoWhileStatement2(node, opts) {
    assert("DoWhileStatement", node, opts);
  }
  function assertEmptyStatement2(node, opts) {
    assert("EmptyStatement", node, opts);
  }
  function assertExpressionStatement2(node, opts) {
    assert("ExpressionStatement", node, opts);
  }
  function assertFile2(node, opts) {
    assert("File", node, opts);
  }
  function assertForInStatement2(node, opts) {
    assert("ForInStatement", node, opts);
  }
  function assertForStatement2(node, opts) {
    assert("ForStatement", node, opts);
  }
  function assertFunctionDeclaration2(node, opts) {
    assert("FunctionDeclaration", node, opts);
  }
  function assertFunctionExpression2(node, opts) {
    assert("FunctionExpression", node, opts);
  }
  function assertIdentifier2(node, opts) {
    assert("Identifier", node, opts);
  }
  function assertIfStatement2(node, opts) {
    assert("IfStatement", node, opts);
  }
  function assertLabeledStatement2(node, opts) {
    assert("LabeledStatement", node, opts);
  }
  function assertStringLiteral2(node, opts) {
    assert("StringLiteral", node, opts);
  }
  function assertNumericLiteral2(node, opts) {
    assert("NumericLiteral", node, opts);
  }
  function assertNullLiteral2(node, opts) {
    assert("NullLiteral", node, opts);
  }
  function assertBooleanLiteral2(node, opts) {
    assert("BooleanLiteral", node, opts);
  }
  function assertRegExpLiteral2(node, opts) {
    assert("RegExpLiteral", node, opts);
  }
  function assertLogicalExpression2(node, opts) {
    assert("LogicalExpression", node, opts);
  }
  function assertMemberExpression2(node, opts) {
    assert("MemberExpression", node, opts);
  }
  function assertNewExpression2(node, opts) {
    assert("NewExpression", node, opts);
  }
  function assertProgram2(node, opts) {
    assert("Program", node, opts);
  }
  function assertObjectExpression2(node, opts) {
    assert("ObjectExpression", node, opts);
  }
  function assertObjectMethod2(node, opts) {
    assert("ObjectMethod", node, opts);
  }
  function assertObjectProperty2(node, opts) {
    assert("ObjectProperty", node, opts);
  }
  function assertRestElement2(node, opts) {
    assert("RestElement", node, opts);
  }
  function assertReturnStatement2(node, opts) {
    assert("ReturnStatement", node, opts);
  }
  function assertSequenceExpression2(node, opts) {
    assert("SequenceExpression", node, opts);
  }
  function assertParenthesizedExpression2(node, opts) {
    assert("ParenthesizedExpression", node, opts);
  }
  function assertSwitchCase2(node, opts) {
    assert("SwitchCase", node, opts);
  }
  function assertSwitchStatement2(node, opts) {
    assert("SwitchStatement", node, opts);
  }
  function assertThisExpression2(node, opts) {
    assert("ThisExpression", node, opts);
  }
  function assertThrowStatement2(node, opts) {
    assert("ThrowStatement", node, opts);
  }
  function assertTryStatement2(node, opts) {
    assert("TryStatement", node, opts);
  }
  function assertUnaryExpression2(node, opts) {
    assert("UnaryExpression", node, opts);
  }
  function assertUpdateExpression2(node, opts) {
    assert("UpdateExpression", node, opts);
  }
  function assertVariableDeclaration2(node, opts) {
    assert("VariableDeclaration", node, opts);
  }
  function assertVariableDeclarator2(node, opts) {
    assert("VariableDeclarator", node, opts);
  }
  function assertWhileStatement2(node, opts) {
    assert("WhileStatement", node, opts);
  }
  function assertWithStatement2(node, opts) {
    assert("WithStatement", node, opts);
  }
  function assertAssignmentPattern2(node, opts) {
    assert("AssignmentPattern", node, opts);
  }
  function assertArrayPattern2(node, opts) {
    assert("ArrayPattern", node, opts);
  }
  function assertArrowFunctionExpression2(node, opts) {
    assert("ArrowFunctionExpression", node, opts);
  }
  function assertClassBody2(node, opts) {
    assert("ClassBody", node, opts);
  }
  function assertClassExpression2(node, opts) {
    assert("ClassExpression", node, opts);
  }
  function assertClassDeclaration2(node, opts) {
    assert("ClassDeclaration", node, opts);
  }
  function assertExportAllDeclaration2(node, opts) {
    assert("ExportAllDeclaration", node, opts);
  }
  function assertExportDefaultDeclaration2(node, opts) {
    assert("ExportDefaultDeclaration", node, opts);
  }
  function assertExportNamedDeclaration2(node, opts) {
    assert("ExportNamedDeclaration", node, opts);
  }
  function assertExportSpecifier2(node, opts) {
    assert("ExportSpecifier", node, opts);
  }
  function assertForOfStatement2(node, opts) {
    assert("ForOfStatement", node, opts);
  }
  function assertImportDeclaration2(node, opts) {
    assert("ImportDeclaration", node, opts);
  }
  function assertImportDefaultSpecifier2(node, opts) {
    assert("ImportDefaultSpecifier", node, opts);
  }
  function assertImportNamespaceSpecifier2(node, opts) {
    assert("ImportNamespaceSpecifier", node, opts);
  }
  function assertImportSpecifier2(node, opts) {
    assert("ImportSpecifier", node, opts);
  }
  function assertMetaProperty2(node, opts) {
    assert("MetaProperty", node, opts);
  }
  function assertClassMethod2(node, opts) {
    assert("ClassMethod", node, opts);
  }
  function assertObjectPattern2(node, opts) {
    assert("ObjectPattern", node, opts);
  }
  function assertSpreadElement2(node, opts) {
    assert("SpreadElement", node, opts);
  }
  function assertSuper2(node, opts) {
    assert("Super", node, opts);
  }
  function assertTaggedTemplateExpression2(node, opts) {
    assert("TaggedTemplateExpression", node, opts);
  }
  function assertTemplateElement2(node, opts) {
    assert("TemplateElement", node, opts);
  }
  function assertTemplateLiteral2(node, opts) {
    assert("TemplateLiteral", node, opts);
  }
  function assertYieldExpression2(node, opts) {
    assert("YieldExpression", node, opts);
  }
  function assertAwaitExpression2(node, opts) {
    assert("AwaitExpression", node, opts);
  }
  function assertImport2(node, opts) {
    assert("Import", node, opts);
  }
  function assertBigIntLiteral2(node, opts) {
    assert("BigIntLiteral", node, opts);
  }
  function assertExportNamespaceSpecifier2(node, opts) {
    assert("ExportNamespaceSpecifier", node, opts);
  }
  function assertOptionalMemberExpression2(node, opts) {
    assert("OptionalMemberExpression", node, opts);
  }
  function assertOptionalCallExpression2(node, opts) {
    assert("OptionalCallExpression", node, opts);
  }
  function assertClassProperty2(node, opts) {
    assert("ClassProperty", node, opts);
  }
  function assertClassAccessorProperty2(node, opts) {
    assert("ClassAccessorProperty", node, opts);
  }
  function assertClassPrivateProperty2(node, opts) {
    assert("ClassPrivateProperty", node, opts);
  }
  function assertClassPrivateMethod2(node, opts) {
    assert("ClassPrivateMethod", node, opts);
  }
  function assertPrivateName2(node, opts) {
    assert("PrivateName", node, opts);
  }
  function assertStaticBlock2(node, opts) {
    assert("StaticBlock", node, opts);
  }
  function assertAnyTypeAnnotation2(node, opts) {
    assert("AnyTypeAnnotation", node, opts);
  }
  function assertArrayTypeAnnotation2(node, opts) {
    assert("ArrayTypeAnnotation", node, opts);
  }
  function assertBooleanTypeAnnotation2(node, opts) {
    assert("BooleanTypeAnnotation", node, opts);
  }
  function assertBooleanLiteralTypeAnnotation2(node, opts) {
    assert("BooleanLiteralTypeAnnotation", node, opts);
  }
  function assertNullLiteralTypeAnnotation2(node, opts) {
    assert("NullLiteralTypeAnnotation", node, opts);
  }
  function assertClassImplements2(node, opts) {
    assert("ClassImplements", node, opts);
  }
  function assertDeclareClass2(node, opts) {
    assert("DeclareClass", node, opts);
  }
  function assertDeclareFunction2(node, opts) {
    assert("DeclareFunction", node, opts);
  }
  function assertDeclareInterface2(node, opts) {
    assert("DeclareInterface", node, opts);
  }
  function assertDeclareModule2(node, opts) {
    assert("DeclareModule", node, opts);
  }
  function assertDeclareModuleExports2(node, opts) {
    assert("DeclareModuleExports", node, opts);
  }
  function assertDeclareTypeAlias2(node, opts) {
    assert("DeclareTypeAlias", node, opts);
  }
  function assertDeclareOpaqueType2(node, opts) {
    assert("DeclareOpaqueType", node, opts);
  }
  function assertDeclareVariable2(node, opts) {
    assert("DeclareVariable", node, opts);
  }
  function assertDeclareExportDeclaration2(node, opts) {
    assert("DeclareExportDeclaration", node, opts);
  }
  function assertDeclareExportAllDeclaration2(node, opts) {
    assert("DeclareExportAllDeclaration", node, opts);
  }
  function assertDeclaredPredicate2(node, opts) {
    assert("DeclaredPredicate", node, opts);
  }
  function assertExistsTypeAnnotation2(node, opts) {
    assert("ExistsTypeAnnotation", node, opts);
  }
  function assertFunctionTypeAnnotation2(node, opts) {
    assert("FunctionTypeAnnotation", node, opts);
  }
  function assertFunctionTypeParam2(node, opts) {
    assert("FunctionTypeParam", node, opts);
  }
  function assertGenericTypeAnnotation2(node, opts) {
    assert("GenericTypeAnnotation", node, opts);
  }
  function assertInferredPredicate2(node, opts) {
    assert("InferredPredicate", node, opts);
  }
  function assertInterfaceExtends2(node, opts) {
    assert("InterfaceExtends", node, opts);
  }
  function assertInterfaceDeclaration2(node, opts) {
    assert("InterfaceDeclaration", node, opts);
  }
  function assertInterfaceTypeAnnotation2(node, opts) {
    assert("InterfaceTypeAnnotation", node, opts);
  }
  function assertIntersectionTypeAnnotation2(node, opts) {
    assert("IntersectionTypeAnnotation", node, opts);
  }
  function assertMixedTypeAnnotation2(node, opts) {
    assert("MixedTypeAnnotation", node, opts);
  }
  function assertEmptyTypeAnnotation2(node, opts) {
    assert("EmptyTypeAnnotation", node, opts);
  }
  function assertNullableTypeAnnotation2(node, opts) {
    assert("NullableTypeAnnotation", node, opts);
  }
  function assertNumberLiteralTypeAnnotation2(node, opts) {
    assert("NumberLiteralTypeAnnotation", node, opts);
  }
  function assertNumberTypeAnnotation2(node, opts) {
    assert("NumberTypeAnnotation", node, opts);
  }
  function assertObjectTypeAnnotation2(node, opts) {
    assert("ObjectTypeAnnotation", node, opts);
  }
  function assertObjectTypeInternalSlot2(node, opts) {
    assert("ObjectTypeInternalSlot", node, opts);
  }
  function assertObjectTypeCallProperty2(node, opts) {
    assert("ObjectTypeCallProperty", node, opts);
  }
  function assertObjectTypeIndexer2(node, opts) {
    assert("ObjectTypeIndexer", node, opts);
  }
  function assertObjectTypeProperty2(node, opts) {
    assert("ObjectTypeProperty", node, opts);
  }
  function assertObjectTypeSpreadProperty2(node, opts) {
    assert("ObjectTypeSpreadProperty", node, opts);
  }
  function assertOpaqueType2(node, opts) {
    assert("OpaqueType", node, opts);
  }
  function assertQualifiedTypeIdentifier2(node, opts) {
    assert("QualifiedTypeIdentifier", node, opts);
  }
  function assertStringLiteralTypeAnnotation2(node, opts) {
    assert("StringLiteralTypeAnnotation", node, opts);
  }
  function assertStringTypeAnnotation2(node, opts) {
    assert("StringTypeAnnotation", node, opts);
  }
  function assertSymbolTypeAnnotation2(node, opts) {
    assert("SymbolTypeAnnotation", node, opts);
  }
  function assertThisTypeAnnotation2(node, opts) {
    assert("ThisTypeAnnotation", node, opts);
  }
  function assertTupleTypeAnnotation2(node, opts) {
    assert("TupleTypeAnnotation", node, opts);
  }
  function assertTypeofTypeAnnotation2(node, opts) {
    assert("TypeofTypeAnnotation", node, opts);
  }
  function assertTypeAlias2(node, opts) {
    assert("TypeAlias", node, opts);
  }
  function assertTypeAnnotation2(node, opts) {
    assert("TypeAnnotation", node, opts);
  }
  function assertTypeCastExpression2(node, opts) {
    assert("TypeCastExpression", node, opts);
  }
  function assertTypeParameter2(node, opts) {
    assert("TypeParameter", node, opts);
  }
  function assertTypeParameterDeclaration2(node, opts) {
    assert("TypeParameterDeclaration", node, opts);
  }
  function assertTypeParameterInstantiation2(node, opts) {
    assert("TypeParameterInstantiation", node, opts);
  }
  function assertUnionTypeAnnotation2(node, opts) {
    assert("UnionTypeAnnotation", node, opts);
  }
  function assertVariance2(node, opts) {
    assert("Variance", node, opts);
  }
  function assertVoidTypeAnnotation2(node, opts) {
    assert("VoidTypeAnnotation", node, opts);
  }
  function assertEnumDeclaration2(node, opts) {
    assert("EnumDeclaration", node, opts);
  }
  function assertEnumBooleanBody2(node, opts) {
    assert("EnumBooleanBody", node, opts);
  }
  function assertEnumNumberBody2(node, opts) {
    assert("EnumNumberBody", node, opts);
  }
  function assertEnumStringBody2(node, opts) {
    assert("EnumStringBody", node, opts);
  }
  function assertEnumSymbolBody2(node, opts) {
    assert("EnumSymbolBody", node, opts);
  }
  function assertEnumBooleanMember2(node, opts) {
    assert("EnumBooleanMember", node, opts);
  }
  function assertEnumNumberMember2(node, opts) {
    assert("EnumNumberMember", node, opts);
  }
  function assertEnumStringMember2(node, opts) {
    assert("EnumStringMember", node, opts);
  }
  function assertEnumDefaultedMember2(node, opts) {
    assert("EnumDefaultedMember", node, opts);
  }
  function assertIndexedAccessType2(node, opts) {
    assert("IndexedAccessType", node, opts);
  }
  function assertOptionalIndexedAccessType2(node, opts) {
    assert("OptionalIndexedAccessType", node, opts);
  }
  function assertJSXAttribute2(node, opts) {
    assert("JSXAttribute", node, opts);
  }
  function assertJSXClosingElement2(node, opts) {
    assert("JSXClosingElement", node, opts);
  }
  function assertJSXElement2(node, opts) {
    assert("JSXElement", node, opts);
  }
  function assertJSXEmptyExpression2(node, opts) {
    assert("JSXEmptyExpression", node, opts);
  }
  function assertJSXExpressionContainer2(node, opts) {
    assert("JSXExpressionContainer", node, opts);
  }
  function assertJSXSpreadChild2(node, opts) {
    assert("JSXSpreadChild", node, opts);
  }
  function assertJSXIdentifier2(node, opts) {
    assert("JSXIdentifier", node, opts);
  }
  function assertJSXMemberExpression2(node, opts) {
    assert("JSXMemberExpression", node, opts);
  }
  function assertJSXNamespacedName2(node, opts) {
    assert("JSXNamespacedName", node, opts);
  }
  function assertJSXOpeningElement2(node, opts) {
    assert("JSXOpeningElement", node, opts);
  }
  function assertJSXSpreadAttribute2(node, opts) {
    assert("JSXSpreadAttribute", node, opts);
  }
  function assertJSXText2(node, opts) {
    assert("JSXText", node, opts);
  }
  function assertJSXFragment2(node, opts) {
    assert("JSXFragment", node, opts);
  }
  function assertJSXOpeningFragment2(node, opts) {
    assert("JSXOpeningFragment", node, opts);
  }
  function assertJSXClosingFragment2(node, opts) {
    assert("JSXClosingFragment", node, opts);
  }
  function assertNoop2(node, opts) {
    assert("Noop", node, opts);
  }
  function assertPlaceholder2(node, opts) {
    assert("Placeholder", node, opts);
  }
  function assertV8IntrinsicIdentifier2(node, opts) {
    assert("V8IntrinsicIdentifier", node, opts);
  }
  function assertArgumentPlaceholder2(node, opts) {
    assert("ArgumentPlaceholder", node, opts);
  }
  function assertBindExpression2(node, opts) {
    assert("BindExpression", node, opts);
  }
  function assertImportAttribute2(node, opts) {
    assert("ImportAttribute", node, opts);
  }
  function assertDecorator2(node, opts) {
    assert("Decorator", node, opts);
  }
  function assertDoExpression2(node, opts) {
    assert("DoExpression", node, opts);
  }
  function assertExportDefaultSpecifier2(node, opts) {
    assert("ExportDefaultSpecifier", node, opts);
  }
  function assertRecordExpression2(node, opts) {
    assert("RecordExpression", node, opts);
  }
  function assertTupleExpression2(node, opts) {
    assert("TupleExpression", node, opts);
  }
  function assertDecimalLiteral2(node, opts) {
    assert("DecimalLiteral", node, opts);
  }
  function assertModuleExpression2(node, opts) {
    assert("ModuleExpression", node, opts);
  }
  function assertTopicReference2(node, opts) {
    assert("TopicReference", node, opts);
  }
  function assertPipelineTopicExpression2(node, opts) {
    assert("PipelineTopicExpression", node, opts);
  }
  function assertPipelineBareFunction2(node, opts) {
    assert("PipelineBareFunction", node, opts);
  }
  function assertPipelinePrimaryTopicReference2(node, opts) {
    assert("PipelinePrimaryTopicReference", node, opts);
  }
  function assertTSParameterProperty2(node, opts) {
    assert("TSParameterProperty", node, opts);
  }
  function assertTSDeclareFunction2(node, opts) {
    assert("TSDeclareFunction", node, opts);
  }
  function assertTSDeclareMethod2(node, opts) {
    assert("TSDeclareMethod", node, opts);
  }
  function assertTSQualifiedName2(node, opts) {
    assert("TSQualifiedName", node, opts);
  }
  function assertTSCallSignatureDeclaration2(node, opts) {
    assert("TSCallSignatureDeclaration", node, opts);
  }
  function assertTSConstructSignatureDeclaration2(node, opts) {
    assert("TSConstructSignatureDeclaration", node, opts);
  }
  function assertTSPropertySignature2(node, opts) {
    assert("TSPropertySignature", node, opts);
  }
  function assertTSMethodSignature2(node, opts) {
    assert("TSMethodSignature", node, opts);
  }
  function assertTSIndexSignature2(node, opts) {
    assert("TSIndexSignature", node, opts);
  }
  function assertTSAnyKeyword2(node, opts) {
    assert("TSAnyKeyword", node, opts);
  }
  function assertTSBooleanKeyword2(node, opts) {
    assert("TSBooleanKeyword", node, opts);
  }
  function assertTSBigIntKeyword2(node, opts) {
    assert("TSBigIntKeyword", node, opts);
  }
  function assertTSIntrinsicKeyword2(node, opts) {
    assert("TSIntrinsicKeyword", node, opts);
  }
  function assertTSNeverKeyword2(node, opts) {
    assert("TSNeverKeyword", node, opts);
  }
  function assertTSNullKeyword2(node, opts) {
    assert("TSNullKeyword", node, opts);
  }
  function assertTSNumberKeyword2(node, opts) {
    assert("TSNumberKeyword", node, opts);
  }
  function assertTSObjectKeyword2(node, opts) {
    assert("TSObjectKeyword", node, opts);
  }
  function assertTSStringKeyword2(node, opts) {
    assert("TSStringKeyword", node, opts);
  }
  function assertTSSymbolKeyword2(node, opts) {
    assert("TSSymbolKeyword", node, opts);
  }
  function assertTSUndefinedKeyword2(node, opts) {
    assert("TSUndefinedKeyword", node, opts);
  }
  function assertTSUnknownKeyword2(node, opts) {
    assert("TSUnknownKeyword", node, opts);
  }
  function assertTSVoidKeyword2(node, opts) {
    assert("TSVoidKeyword", node, opts);
  }
  function assertTSThisType2(node, opts) {
    assert("TSThisType", node, opts);
  }
  function assertTSFunctionType2(node, opts) {
    assert("TSFunctionType", node, opts);
  }
  function assertTSConstructorType2(node, opts) {
    assert("TSConstructorType", node, opts);
  }
  function assertTSTypeReference2(node, opts) {
    assert("TSTypeReference", node, opts);
  }
  function assertTSTypePredicate2(node, opts) {
    assert("TSTypePredicate", node, opts);
  }
  function assertTSTypeQuery2(node, opts) {
    assert("TSTypeQuery", node, opts);
  }
  function assertTSTypeLiteral2(node, opts) {
    assert("TSTypeLiteral", node, opts);
  }
  function assertTSArrayType2(node, opts) {
    assert("TSArrayType", node, opts);
  }
  function assertTSTupleType2(node, opts) {
    assert("TSTupleType", node, opts);
  }
  function assertTSOptionalType2(node, opts) {
    assert("TSOptionalType", node, opts);
  }
  function assertTSRestType2(node, opts) {
    assert("TSRestType", node, opts);
  }
  function assertTSNamedTupleMember2(node, opts) {
    assert("TSNamedTupleMember", node, opts);
  }
  function assertTSUnionType2(node, opts) {
    assert("TSUnionType", node, opts);
  }
  function assertTSIntersectionType2(node, opts) {
    assert("TSIntersectionType", node, opts);
  }
  function assertTSConditionalType2(node, opts) {
    assert("TSConditionalType", node, opts);
  }
  function assertTSInferType2(node, opts) {
    assert("TSInferType", node, opts);
  }
  function assertTSParenthesizedType2(node, opts) {
    assert("TSParenthesizedType", node, opts);
  }
  function assertTSTypeOperator2(node, opts) {
    assert("TSTypeOperator", node, opts);
  }
  function assertTSIndexedAccessType2(node, opts) {
    assert("TSIndexedAccessType", node, opts);
  }
  function assertTSMappedType2(node, opts) {
    assert("TSMappedType", node, opts);
  }
  function assertTSLiteralType2(node, opts) {
    assert("TSLiteralType", node, opts);
  }
  function assertTSExpressionWithTypeArguments2(node, opts) {
    assert("TSExpressionWithTypeArguments", node, opts);
  }
  function assertTSInterfaceDeclaration2(node, opts) {
    assert("TSInterfaceDeclaration", node, opts);
  }
  function assertTSInterfaceBody2(node, opts) {
    assert("TSInterfaceBody", node, opts);
  }
  function assertTSTypeAliasDeclaration2(node, opts) {
    assert("TSTypeAliasDeclaration", node, opts);
  }
  function assertTSInstantiationExpression2(node, opts) {
    assert("TSInstantiationExpression", node, opts);
  }
  function assertTSAsExpression2(node, opts) {
    assert("TSAsExpression", node, opts);
  }
  function assertTSSatisfiesExpression2(node, opts) {
    assert("TSSatisfiesExpression", node, opts);
  }
  function assertTSTypeAssertion2(node, opts) {
    assert("TSTypeAssertion", node, opts);
  }
  function assertTSEnumDeclaration2(node, opts) {
    assert("TSEnumDeclaration", node, opts);
  }
  function assertTSEnumMember2(node, opts) {
    assert("TSEnumMember", node, opts);
  }
  function assertTSModuleDeclaration2(node, opts) {
    assert("TSModuleDeclaration", node, opts);
  }
  function assertTSModuleBlock2(node, opts) {
    assert("TSModuleBlock", node, opts);
  }
  function assertTSImportType2(node, opts) {
    assert("TSImportType", node, opts);
  }
  function assertTSImportEqualsDeclaration2(node, opts) {
    assert("TSImportEqualsDeclaration", node, opts);
  }
  function assertTSExternalModuleReference2(node, opts) {
    assert("TSExternalModuleReference", node, opts);
  }
  function assertTSNonNullExpression2(node, opts) {
    assert("TSNonNullExpression", node, opts);
  }
  function assertTSExportAssignment2(node, opts) {
    assert("TSExportAssignment", node, opts);
  }
  function assertTSNamespaceExportDeclaration2(node, opts) {
    assert("TSNamespaceExportDeclaration", node, opts);
  }
  function assertTSTypeAnnotation2(node, opts) {
    assert("TSTypeAnnotation", node, opts);
  }
  function assertTSTypeParameterInstantiation2(node, opts) {
    assert("TSTypeParameterInstantiation", node, opts);
  }
  function assertTSTypeParameterDeclaration2(node, opts) {
    assert("TSTypeParameterDeclaration", node, opts);
  }
  function assertTSTypeParameter2(node, opts) {
    assert("TSTypeParameter", node, opts);
  }
  function assertStandardized2(node, opts) {
    assert("Standardized", node, opts);
  }
  function assertExpression2(node, opts) {
    assert("Expression", node, opts);
  }
  function assertBinary2(node, opts) {
    assert("Binary", node, opts);
  }
  function assertScopable2(node, opts) {
    assert("Scopable", node, opts);
  }
  function assertBlockParent2(node, opts) {
    assert("BlockParent", node, opts);
  }
  function assertBlock2(node, opts) {
    assert("Block", node, opts);
  }
  function assertStatement2(node, opts) {
    assert("Statement", node, opts);
  }
  function assertTerminatorless2(node, opts) {
    assert("Terminatorless", node, opts);
  }
  function assertCompletionStatement2(node, opts) {
    assert("CompletionStatement", node, opts);
  }
  function assertConditional2(node, opts) {
    assert("Conditional", node, opts);
  }
  function assertLoop2(node, opts) {
    assert("Loop", node, opts);
  }
  function assertWhile2(node, opts) {
    assert("While", node, opts);
  }
  function assertExpressionWrapper2(node, opts) {
    assert("ExpressionWrapper", node, opts);
  }
  function assertFor2(node, opts) {
    assert("For", node, opts);
  }
  function assertForXStatement2(node, opts) {
    assert("ForXStatement", node, opts);
  }
  function assertFunction2(node, opts) {
    assert("Function", node, opts);
  }
  function assertFunctionParent2(node, opts) {
    assert("FunctionParent", node, opts);
  }
  function assertPureish2(node, opts) {
    assert("Pureish", node, opts);
  }
  function assertDeclaration2(node, opts) {
    assert("Declaration", node, opts);
  }
  function assertPatternLike2(node, opts) {
    assert("PatternLike", node, opts);
  }
  function assertLVal2(node, opts) {
    assert("LVal", node, opts);
  }
  function assertTSEntityName2(node, opts) {
    assert("TSEntityName", node, opts);
  }
  function assertLiteral2(node, opts) {
    assert("Literal", node, opts);
  }
  function assertImmutable2(node, opts) {
    assert("Immutable", node, opts);
  }
  function assertUserWhitespacable2(node, opts) {
    assert("UserWhitespacable", node, opts);
  }
  function assertMethod2(node, opts) {
    assert("Method", node, opts);
  }
  function assertObjectMember2(node, opts) {
    assert("ObjectMember", node, opts);
  }
  function assertProperty2(node, opts) {
    assert("Property", node, opts);
  }
  function assertUnaryLike2(node, opts) {
    assert("UnaryLike", node, opts);
  }
  function assertPattern2(node, opts) {
    assert("Pattern", node, opts);
  }
  function assertClass2(node, opts) {
    assert("Class", node, opts);
  }
  function assertImportOrExportDeclaration2(node, opts) {
    assert("ImportOrExportDeclaration", node, opts);
  }
  function assertExportDeclaration2(node, opts) {
    assert("ExportDeclaration", node, opts);
  }
  function assertModuleSpecifier2(node, opts) {
    assert("ModuleSpecifier", node, opts);
  }
  function assertAccessor2(node, opts) {
    assert("Accessor", node, opts);
  }
  function assertPrivate2(node, opts) {
    assert("Private", node, opts);
  }
  function assertFlow2(node, opts) {
    assert("Flow", node, opts);
  }
  function assertFlowType2(node, opts) {
    assert("FlowType", node, opts);
  }
  function assertFlowBaseAnnotation2(node, opts) {
    assert("FlowBaseAnnotation", node, opts);
  }
  function assertFlowDeclaration2(node, opts) {
    assert("FlowDeclaration", node, opts);
  }
  function assertFlowPredicate2(node, opts) {
    assert("FlowPredicate", node, opts);
  }
  function assertEnumBody2(node, opts) {
    assert("EnumBody", node, opts);
  }
  function assertEnumMember2(node, opts) {
    assert("EnumMember", node, opts);
  }
  function assertJSX2(node, opts) {
    assert("JSX", node, opts);
  }
  function assertMiscellaneous2(node, opts) {
    assert("Miscellaneous", node, opts);
  }
  function assertTypeScript2(node, opts) {
    assert("TypeScript", node, opts);
  }
  function assertTSTypeElement2(node, opts) {
    assert("TSTypeElement", node, opts);
  }
  function assertTSType2(node, opts) {
    assert("TSType", node, opts);
  }
  function assertTSBaseType2(node, opts) {
    assert("TSBaseType", node, opts);
  }
  function assertNumberLiteral2(node, opts) {
    (0, deprecationWarning_1.default)("assertNumberLiteral", "assertNumericLiteral");
    assert("NumberLiteral", node, opts);
  }
  function assertRegexLiteral2(node, opts) {
    (0, deprecationWarning_1.default)("assertRegexLiteral", "assertRegExpLiteral");
    assert("RegexLiteral", node, opts);
  }
  function assertRestProperty2(node, opts) {
    (0, deprecationWarning_1.default)("assertRestProperty", "assertRestElement");
    assert("RestProperty", node, opts);
  }
  function assertSpreadProperty2(node, opts) {
    (0, deprecationWarning_1.default)("assertSpreadProperty", "assertSpreadElement");
    assert("SpreadProperty", node, opts);
  }
  function assertModuleDeclaration2(node, opts) {
    (0, deprecationWarning_1.default)("assertModuleDeclaration", "assertImportOrExportDeclaration");
    assert("ModuleDeclaration", node, opts);
  }
});
var createTypeAnnotationBasedOnTypeof_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _default = createTypeAnnotationBasedOnTypeof2;
  exports.default = _default;
  function createTypeAnnotationBasedOnTypeof2(type) {
    switch (type) {
      case "string":
        return (0, generated$1.stringTypeAnnotation)();
      case "number":
        return (0, generated$1.numberTypeAnnotation)();
      case "undefined":
        return (0, generated$1.voidTypeAnnotation)();
      case "boolean":
        return (0, generated$1.booleanTypeAnnotation)();
      case "function":
        return (0, generated$1.genericTypeAnnotation)((0, generated$1.identifier)("Function"));
      case "object":
        return (0, generated$1.genericTypeAnnotation)((0, generated$1.identifier)("Object"));
      case "symbol":
        return (0, generated$1.genericTypeAnnotation)((0, generated$1.identifier)("Symbol"));
      case "bigint":
        return (0, generated$1.anyTypeAnnotation)();
    }
    throw new Error("Invalid typeof value: " + type);
  }
});
var removeTypeDuplicates_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = removeTypeDuplicates2;
  function getQualifiedName(node) {
    return (0, generated.isIdentifier)(node) ? node.name : `${node.id.name}.${getQualifiedName(node.qualification)}`;
  }
  function removeTypeDuplicates2(nodes) {
    const generics = new Map();
    const bases = new Map();
    const typeGroups = new Set();
    const types = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (!node)
        continue;
      if (types.indexOf(node) >= 0) {
        continue;
      }
      if ((0, generated.isAnyTypeAnnotation)(node)) {
        return [node];
      }
      if ((0, generated.isFlowBaseAnnotation)(node)) {
        bases.set(node.type, node);
        continue;
      }
      if ((0, generated.isUnionTypeAnnotation)(node)) {
        if (!typeGroups.has(node.types)) {
          nodes = nodes.concat(node.types);
          typeGroups.add(node.types);
        }
        continue;
      }
      if ((0, generated.isGenericTypeAnnotation)(node)) {
        const name = getQualifiedName(node.id);
        if (generics.has(name)) {
          let existing = generics.get(name);
          if (existing.typeParameters) {
            if (node.typeParameters) {
              existing.typeParameters.params = removeTypeDuplicates2(existing.typeParameters.params.concat(node.typeParameters.params));
            }
          } else {
            existing = node.typeParameters;
          }
        } else {
          generics.set(name, node);
        }
        continue;
      }
      types.push(node);
    }
    for (const [, baseType] of bases) {
      types.push(baseType);
    }
    for (const [, genericName] of generics) {
      types.push(genericName);
    }
    return types;
  }
});
var createFlowUnionType_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createFlowUnionType2;
  function createFlowUnionType2(types) {
    const flattened = (0, removeTypeDuplicates_1.default)(types);
    if (flattened.length === 1) {
      return flattened[0];
    } else {
      return (0, generated$1.unionTypeAnnotation)(flattened);
    }
  }
});
var removeTypeDuplicates_1$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = removeTypeDuplicates2;
  function getQualifiedName(node) {
    return (0, generated.isIdentifier)(node) ? node.name : `${node.right.name}.${getQualifiedName(node.left)}`;
  }
  function removeTypeDuplicates2(nodes) {
    const generics = new Map();
    const bases = new Map();
    const typeGroups = new Set();
    const types = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (!node)
        continue;
      if (types.indexOf(node) >= 0) {
        continue;
      }
      if ((0, generated.isTSAnyKeyword)(node)) {
        return [node];
      }
      if ((0, generated.isTSBaseType)(node)) {
        bases.set(node.type, node);
        continue;
      }
      if ((0, generated.isTSUnionType)(node)) {
        if (!typeGroups.has(node.types)) {
          nodes.push(...node.types);
          typeGroups.add(node.types);
        }
        continue;
      }
      if ((0, generated.isTSTypeReference)(node) && node.typeParameters) {
        const name = getQualifiedName(node.typeName);
        if (generics.has(name)) {
          let existing = generics.get(name);
          if (existing.typeParameters) {
            if (node.typeParameters) {
              existing.typeParameters.params = removeTypeDuplicates2(existing.typeParameters.params.concat(node.typeParameters.params));
            }
          } else {
            existing = node.typeParameters;
          }
        } else {
          generics.set(name, node);
        }
        continue;
      }
      types.push(node);
    }
    for (const [, baseType] of bases) {
      types.push(baseType);
    }
    for (const [, genericName] of generics) {
      types.push(genericName);
    }
    return types;
  }
});
var createTSUnionType_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createTSUnionType2;
  function createTSUnionType2(typeAnnotations) {
    const types = typeAnnotations.map((type) => {
      return (0, generated.isTSTypeAnnotation)(type) ? type.typeAnnotation : type;
    });
    const flattened = (0, removeTypeDuplicates_1$1.default)(types);
    if (flattened.length === 1) {
      return flattened[0];
    } else {
      return (0, generated$1.tsUnionType)(flattened);
    }
  }
});
var uppercase = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "AnyTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.anyTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ArgumentPlaceholder", {
    enumerable: true,
    get: function() {
      return generated$1.argumentPlaceholder;
    }
  });
  Object.defineProperty(exports, "ArrayExpression", {
    enumerable: true,
    get: function() {
      return generated$1.arrayExpression;
    }
  });
  Object.defineProperty(exports, "ArrayPattern", {
    enumerable: true,
    get: function() {
      return generated$1.arrayPattern;
    }
  });
  Object.defineProperty(exports, "ArrayTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.arrayTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ArrowFunctionExpression", {
    enumerable: true,
    get: function() {
      return generated$1.arrowFunctionExpression;
    }
  });
  Object.defineProperty(exports, "AssignmentExpression", {
    enumerable: true,
    get: function() {
      return generated$1.assignmentExpression;
    }
  });
  Object.defineProperty(exports, "AssignmentPattern", {
    enumerable: true,
    get: function() {
      return generated$1.assignmentPattern;
    }
  });
  Object.defineProperty(exports, "AwaitExpression", {
    enumerable: true,
    get: function() {
      return generated$1.awaitExpression;
    }
  });
  Object.defineProperty(exports, "BigIntLiteral", {
    enumerable: true,
    get: function() {
      return generated$1.bigIntLiteral;
    }
  });
  Object.defineProperty(exports, "BinaryExpression", {
    enumerable: true,
    get: function() {
      return generated$1.binaryExpression;
    }
  });
  Object.defineProperty(exports, "BindExpression", {
    enumerable: true,
    get: function() {
      return generated$1.bindExpression;
    }
  });
  Object.defineProperty(exports, "BlockStatement", {
    enumerable: true,
    get: function() {
      return generated$1.blockStatement;
    }
  });
  Object.defineProperty(exports, "BooleanLiteral", {
    enumerable: true,
    get: function() {
      return generated$1.booleanLiteral;
    }
  });
  Object.defineProperty(exports, "BooleanLiteralTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.booleanLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "BooleanTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.booleanTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "BreakStatement", {
    enumerable: true,
    get: function() {
      return generated$1.breakStatement;
    }
  });
  Object.defineProperty(exports, "CallExpression", {
    enumerable: true,
    get: function() {
      return generated$1.callExpression;
    }
  });
  Object.defineProperty(exports, "CatchClause", {
    enumerable: true,
    get: function() {
      return generated$1.catchClause;
    }
  });
  Object.defineProperty(exports, "ClassAccessorProperty", {
    enumerable: true,
    get: function() {
      return generated$1.classAccessorProperty;
    }
  });
  Object.defineProperty(exports, "ClassBody", {
    enumerable: true,
    get: function() {
      return generated$1.classBody;
    }
  });
  Object.defineProperty(exports, "ClassDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.classDeclaration;
    }
  });
  Object.defineProperty(exports, "ClassExpression", {
    enumerable: true,
    get: function() {
      return generated$1.classExpression;
    }
  });
  Object.defineProperty(exports, "ClassImplements", {
    enumerable: true,
    get: function() {
      return generated$1.classImplements;
    }
  });
  Object.defineProperty(exports, "ClassMethod", {
    enumerable: true,
    get: function() {
      return generated$1.classMethod;
    }
  });
  Object.defineProperty(exports, "ClassPrivateMethod", {
    enumerable: true,
    get: function() {
      return generated$1.classPrivateMethod;
    }
  });
  Object.defineProperty(exports, "ClassPrivateProperty", {
    enumerable: true,
    get: function() {
      return generated$1.classPrivateProperty;
    }
  });
  Object.defineProperty(exports, "ClassProperty", {
    enumerable: true,
    get: function() {
      return generated$1.classProperty;
    }
  });
  Object.defineProperty(exports, "ConditionalExpression", {
    enumerable: true,
    get: function() {
      return generated$1.conditionalExpression;
    }
  });
  Object.defineProperty(exports, "ContinueStatement", {
    enumerable: true,
    get: function() {
      return generated$1.continueStatement;
    }
  });
  Object.defineProperty(exports, "DebuggerStatement", {
    enumerable: true,
    get: function() {
      return generated$1.debuggerStatement;
    }
  });
  Object.defineProperty(exports, "DecimalLiteral", {
    enumerable: true,
    get: function() {
      return generated$1.decimalLiteral;
    }
  });
  Object.defineProperty(exports, "DeclareClass", {
    enumerable: true,
    get: function() {
      return generated$1.declareClass;
    }
  });
  Object.defineProperty(exports, "DeclareExportAllDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.declareExportAllDeclaration;
    }
  });
  Object.defineProperty(exports, "DeclareExportDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.declareExportDeclaration;
    }
  });
  Object.defineProperty(exports, "DeclareFunction", {
    enumerable: true,
    get: function() {
      return generated$1.declareFunction;
    }
  });
  Object.defineProperty(exports, "DeclareInterface", {
    enumerable: true,
    get: function() {
      return generated$1.declareInterface;
    }
  });
  Object.defineProperty(exports, "DeclareModule", {
    enumerable: true,
    get: function() {
      return generated$1.declareModule;
    }
  });
  Object.defineProperty(exports, "DeclareModuleExports", {
    enumerable: true,
    get: function() {
      return generated$1.declareModuleExports;
    }
  });
  Object.defineProperty(exports, "DeclareOpaqueType", {
    enumerable: true,
    get: function() {
      return generated$1.declareOpaqueType;
    }
  });
  Object.defineProperty(exports, "DeclareTypeAlias", {
    enumerable: true,
    get: function() {
      return generated$1.declareTypeAlias;
    }
  });
  Object.defineProperty(exports, "DeclareVariable", {
    enumerable: true,
    get: function() {
      return generated$1.declareVariable;
    }
  });
  Object.defineProperty(exports, "DeclaredPredicate", {
    enumerable: true,
    get: function() {
      return generated$1.declaredPredicate;
    }
  });
  Object.defineProperty(exports, "Decorator", {
    enumerable: true,
    get: function() {
      return generated$1.decorator;
    }
  });
  Object.defineProperty(exports, "Directive", {
    enumerable: true,
    get: function() {
      return generated$1.directive;
    }
  });
  Object.defineProperty(exports, "DirectiveLiteral", {
    enumerable: true,
    get: function() {
      return generated$1.directiveLiteral;
    }
  });
  Object.defineProperty(exports, "DoExpression", {
    enumerable: true,
    get: function() {
      return generated$1.doExpression;
    }
  });
  Object.defineProperty(exports, "DoWhileStatement", {
    enumerable: true,
    get: function() {
      return generated$1.doWhileStatement;
    }
  });
  Object.defineProperty(exports, "EmptyStatement", {
    enumerable: true,
    get: function() {
      return generated$1.emptyStatement;
    }
  });
  Object.defineProperty(exports, "EmptyTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.emptyTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "EnumBooleanBody", {
    enumerable: true,
    get: function() {
      return generated$1.enumBooleanBody;
    }
  });
  Object.defineProperty(exports, "EnumBooleanMember", {
    enumerable: true,
    get: function() {
      return generated$1.enumBooleanMember;
    }
  });
  Object.defineProperty(exports, "EnumDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.enumDeclaration;
    }
  });
  Object.defineProperty(exports, "EnumDefaultedMember", {
    enumerable: true,
    get: function() {
      return generated$1.enumDefaultedMember;
    }
  });
  Object.defineProperty(exports, "EnumNumberBody", {
    enumerable: true,
    get: function() {
      return generated$1.enumNumberBody;
    }
  });
  Object.defineProperty(exports, "EnumNumberMember", {
    enumerable: true,
    get: function() {
      return generated$1.enumNumberMember;
    }
  });
  Object.defineProperty(exports, "EnumStringBody", {
    enumerable: true,
    get: function() {
      return generated$1.enumStringBody;
    }
  });
  Object.defineProperty(exports, "EnumStringMember", {
    enumerable: true,
    get: function() {
      return generated$1.enumStringMember;
    }
  });
  Object.defineProperty(exports, "EnumSymbolBody", {
    enumerable: true,
    get: function() {
      return generated$1.enumSymbolBody;
    }
  });
  Object.defineProperty(exports, "ExistsTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.existsTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ExportAllDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.exportAllDeclaration;
    }
  });
  Object.defineProperty(exports, "ExportDefaultDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.exportDefaultDeclaration;
    }
  });
  Object.defineProperty(exports, "ExportDefaultSpecifier", {
    enumerable: true,
    get: function() {
      return generated$1.exportDefaultSpecifier;
    }
  });
  Object.defineProperty(exports, "ExportNamedDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.exportNamedDeclaration;
    }
  });
  Object.defineProperty(exports, "ExportNamespaceSpecifier", {
    enumerable: true,
    get: function() {
      return generated$1.exportNamespaceSpecifier;
    }
  });
  Object.defineProperty(exports, "ExportSpecifier", {
    enumerable: true,
    get: function() {
      return generated$1.exportSpecifier;
    }
  });
  Object.defineProperty(exports, "ExpressionStatement", {
    enumerable: true,
    get: function() {
      return generated$1.expressionStatement;
    }
  });
  Object.defineProperty(exports, "File", {
    enumerable: true,
    get: function() {
      return generated$1.file;
    }
  });
  Object.defineProperty(exports, "ForInStatement", {
    enumerable: true,
    get: function() {
      return generated$1.forInStatement;
    }
  });
  Object.defineProperty(exports, "ForOfStatement", {
    enumerable: true,
    get: function() {
      return generated$1.forOfStatement;
    }
  });
  Object.defineProperty(exports, "ForStatement", {
    enumerable: true,
    get: function() {
      return generated$1.forStatement;
    }
  });
  Object.defineProperty(exports, "FunctionDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.functionDeclaration;
    }
  });
  Object.defineProperty(exports, "FunctionExpression", {
    enumerable: true,
    get: function() {
      return generated$1.functionExpression;
    }
  });
  Object.defineProperty(exports, "FunctionTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.functionTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "FunctionTypeParam", {
    enumerable: true,
    get: function() {
      return generated$1.functionTypeParam;
    }
  });
  Object.defineProperty(exports, "GenericTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.genericTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "Identifier", {
    enumerable: true,
    get: function() {
      return generated$1.identifier;
    }
  });
  Object.defineProperty(exports, "IfStatement", {
    enumerable: true,
    get: function() {
      return generated$1.ifStatement;
    }
  });
  Object.defineProperty(exports, "Import", {
    enumerable: true,
    get: function() {
      return generated$1.import;
    }
  });
  Object.defineProperty(exports, "ImportAttribute", {
    enumerable: true,
    get: function() {
      return generated$1.importAttribute;
    }
  });
  Object.defineProperty(exports, "ImportDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.importDeclaration;
    }
  });
  Object.defineProperty(exports, "ImportDefaultSpecifier", {
    enumerable: true,
    get: function() {
      return generated$1.importDefaultSpecifier;
    }
  });
  Object.defineProperty(exports, "ImportNamespaceSpecifier", {
    enumerable: true,
    get: function() {
      return generated$1.importNamespaceSpecifier;
    }
  });
  Object.defineProperty(exports, "ImportSpecifier", {
    enumerable: true,
    get: function() {
      return generated$1.importSpecifier;
    }
  });
  Object.defineProperty(exports, "IndexedAccessType", {
    enumerable: true,
    get: function() {
      return generated$1.indexedAccessType;
    }
  });
  Object.defineProperty(exports, "InferredPredicate", {
    enumerable: true,
    get: function() {
      return generated$1.inferredPredicate;
    }
  });
  Object.defineProperty(exports, "InterfaceDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.interfaceDeclaration;
    }
  });
  Object.defineProperty(exports, "InterfaceExtends", {
    enumerable: true,
    get: function() {
      return generated$1.interfaceExtends;
    }
  });
  Object.defineProperty(exports, "InterfaceTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.interfaceTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "InterpreterDirective", {
    enumerable: true,
    get: function() {
      return generated$1.interpreterDirective;
    }
  });
  Object.defineProperty(exports, "IntersectionTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.intersectionTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "JSXAttribute", {
    enumerable: true,
    get: function() {
      return generated$1.jsxAttribute;
    }
  });
  Object.defineProperty(exports, "JSXClosingElement", {
    enumerable: true,
    get: function() {
      return generated$1.jsxClosingElement;
    }
  });
  Object.defineProperty(exports, "JSXClosingFragment", {
    enumerable: true,
    get: function() {
      return generated$1.jsxClosingFragment;
    }
  });
  Object.defineProperty(exports, "JSXElement", {
    enumerable: true,
    get: function() {
      return generated$1.jsxElement;
    }
  });
  Object.defineProperty(exports, "JSXEmptyExpression", {
    enumerable: true,
    get: function() {
      return generated$1.jsxEmptyExpression;
    }
  });
  Object.defineProperty(exports, "JSXExpressionContainer", {
    enumerable: true,
    get: function() {
      return generated$1.jsxExpressionContainer;
    }
  });
  Object.defineProperty(exports, "JSXFragment", {
    enumerable: true,
    get: function() {
      return generated$1.jsxFragment;
    }
  });
  Object.defineProperty(exports, "JSXIdentifier", {
    enumerable: true,
    get: function() {
      return generated$1.jsxIdentifier;
    }
  });
  Object.defineProperty(exports, "JSXMemberExpression", {
    enumerable: true,
    get: function() {
      return generated$1.jsxMemberExpression;
    }
  });
  Object.defineProperty(exports, "JSXNamespacedName", {
    enumerable: true,
    get: function() {
      return generated$1.jsxNamespacedName;
    }
  });
  Object.defineProperty(exports, "JSXOpeningElement", {
    enumerable: true,
    get: function() {
      return generated$1.jsxOpeningElement;
    }
  });
  Object.defineProperty(exports, "JSXOpeningFragment", {
    enumerable: true,
    get: function() {
      return generated$1.jsxOpeningFragment;
    }
  });
  Object.defineProperty(exports, "JSXSpreadAttribute", {
    enumerable: true,
    get: function() {
      return generated$1.jsxSpreadAttribute;
    }
  });
  Object.defineProperty(exports, "JSXSpreadChild", {
    enumerable: true,
    get: function() {
      return generated$1.jsxSpreadChild;
    }
  });
  Object.defineProperty(exports, "JSXText", {
    enumerable: true,
    get: function() {
      return generated$1.jsxText;
    }
  });
  Object.defineProperty(exports, "LabeledStatement", {
    enumerable: true,
    get: function() {
      return generated$1.labeledStatement;
    }
  });
  Object.defineProperty(exports, "LogicalExpression", {
    enumerable: true,
    get: function() {
      return generated$1.logicalExpression;
    }
  });
  Object.defineProperty(exports, "MemberExpression", {
    enumerable: true,
    get: function() {
      return generated$1.memberExpression;
    }
  });
  Object.defineProperty(exports, "MetaProperty", {
    enumerable: true,
    get: function() {
      return generated$1.metaProperty;
    }
  });
  Object.defineProperty(exports, "MixedTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.mixedTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ModuleExpression", {
    enumerable: true,
    get: function() {
      return generated$1.moduleExpression;
    }
  });
  Object.defineProperty(exports, "NewExpression", {
    enumerable: true,
    get: function() {
      return generated$1.newExpression;
    }
  });
  Object.defineProperty(exports, "Noop", {
    enumerable: true,
    get: function() {
      return generated$1.noop;
    }
  });
  Object.defineProperty(exports, "NullLiteral", {
    enumerable: true,
    get: function() {
      return generated$1.nullLiteral;
    }
  });
  Object.defineProperty(exports, "NullLiteralTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.nullLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "NullableTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.nullableTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "NumberLiteral", {
    enumerable: true,
    get: function() {
      return generated$1.numberLiteral;
    }
  });
  Object.defineProperty(exports, "NumberLiteralTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.numberLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "NumberTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.numberTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "NumericLiteral", {
    enumerable: true,
    get: function() {
      return generated$1.numericLiteral;
    }
  });
  Object.defineProperty(exports, "ObjectExpression", {
    enumerable: true,
    get: function() {
      return generated$1.objectExpression;
    }
  });
  Object.defineProperty(exports, "ObjectMethod", {
    enumerable: true,
    get: function() {
      return generated$1.objectMethod;
    }
  });
  Object.defineProperty(exports, "ObjectPattern", {
    enumerable: true,
    get: function() {
      return generated$1.objectPattern;
    }
  });
  Object.defineProperty(exports, "ObjectProperty", {
    enumerable: true,
    get: function() {
      return generated$1.objectProperty;
    }
  });
  Object.defineProperty(exports, "ObjectTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.objectTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ObjectTypeCallProperty", {
    enumerable: true,
    get: function() {
      return generated$1.objectTypeCallProperty;
    }
  });
  Object.defineProperty(exports, "ObjectTypeIndexer", {
    enumerable: true,
    get: function() {
      return generated$1.objectTypeIndexer;
    }
  });
  Object.defineProperty(exports, "ObjectTypeInternalSlot", {
    enumerable: true,
    get: function() {
      return generated$1.objectTypeInternalSlot;
    }
  });
  Object.defineProperty(exports, "ObjectTypeProperty", {
    enumerable: true,
    get: function() {
      return generated$1.objectTypeProperty;
    }
  });
  Object.defineProperty(exports, "ObjectTypeSpreadProperty", {
    enumerable: true,
    get: function() {
      return generated$1.objectTypeSpreadProperty;
    }
  });
  Object.defineProperty(exports, "OpaqueType", {
    enumerable: true,
    get: function() {
      return generated$1.opaqueType;
    }
  });
  Object.defineProperty(exports, "OptionalCallExpression", {
    enumerable: true,
    get: function() {
      return generated$1.optionalCallExpression;
    }
  });
  Object.defineProperty(exports, "OptionalIndexedAccessType", {
    enumerable: true,
    get: function() {
      return generated$1.optionalIndexedAccessType;
    }
  });
  Object.defineProperty(exports, "OptionalMemberExpression", {
    enumerable: true,
    get: function() {
      return generated$1.optionalMemberExpression;
    }
  });
  Object.defineProperty(exports, "ParenthesizedExpression", {
    enumerable: true,
    get: function() {
      return generated$1.parenthesizedExpression;
    }
  });
  Object.defineProperty(exports, "PipelineBareFunction", {
    enumerable: true,
    get: function() {
      return generated$1.pipelineBareFunction;
    }
  });
  Object.defineProperty(exports, "PipelinePrimaryTopicReference", {
    enumerable: true,
    get: function() {
      return generated$1.pipelinePrimaryTopicReference;
    }
  });
  Object.defineProperty(exports, "PipelineTopicExpression", {
    enumerable: true,
    get: function() {
      return generated$1.pipelineTopicExpression;
    }
  });
  Object.defineProperty(exports, "Placeholder", {
    enumerable: true,
    get: function() {
      return generated$1.placeholder;
    }
  });
  Object.defineProperty(exports, "PrivateName", {
    enumerable: true,
    get: function() {
      return generated$1.privateName;
    }
  });
  Object.defineProperty(exports, "Program", {
    enumerable: true,
    get: function() {
      return generated$1.program;
    }
  });
  Object.defineProperty(exports, "QualifiedTypeIdentifier", {
    enumerable: true,
    get: function() {
      return generated$1.qualifiedTypeIdentifier;
    }
  });
  Object.defineProperty(exports, "RecordExpression", {
    enumerable: true,
    get: function() {
      return generated$1.recordExpression;
    }
  });
  Object.defineProperty(exports, "RegExpLiteral", {
    enumerable: true,
    get: function() {
      return generated$1.regExpLiteral;
    }
  });
  Object.defineProperty(exports, "RegexLiteral", {
    enumerable: true,
    get: function() {
      return generated$1.regexLiteral;
    }
  });
  Object.defineProperty(exports, "RestElement", {
    enumerable: true,
    get: function() {
      return generated$1.restElement;
    }
  });
  Object.defineProperty(exports, "RestProperty", {
    enumerable: true,
    get: function() {
      return generated$1.restProperty;
    }
  });
  Object.defineProperty(exports, "ReturnStatement", {
    enumerable: true,
    get: function() {
      return generated$1.returnStatement;
    }
  });
  Object.defineProperty(exports, "SequenceExpression", {
    enumerable: true,
    get: function() {
      return generated$1.sequenceExpression;
    }
  });
  Object.defineProperty(exports, "SpreadElement", {
    enumerable: true,
    get: function() {
      return generated$1.spreadElement;
    }
  });
  Object.defineProperty(exports, "SpreadProperty", {
    enumerable: true,
    get: function() {
      return generated$1.spreadProperty;
    }
  });
  Object.defineProperty(exports, "StaticBlock", {
    enumerable: true,
    get: function() {
      return generated$1.staticBlock;
    }
  });
  Object.defineProperty(exports, "StringLiteral", {
    enumerable: true,
    get: function() {
      return generated$1.stringLiteral;
    }
  });
  Object.defineProperty(exports, "StringLiteralTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.stringLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "StringTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.stringTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "Super", {
    enumerable: true,
    get: function() {
      return generated$1.super;
    }
  });
  Object.defineProperty(exports, "SwitchCase", {
    enumerable: true,
    get: function() {
      return generated$1.switchCase;
    }
  });
  Object.defineProperty(exports, "SwitchStatement", {
    enumerable: true,
    get: function() {
      return generated$1.switchStatement;
    }
  });
  Object.defineProperty(exports, "SymbolTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.symbolTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "TSAnyKeyword", {
    enumerable: true,
    get: function() {
      return generated$1.tsAnyKeyword;
    }
  });
  Object.defineProperty(exports, "TSArrayType", {
    enumerable: true,
    get: function() {
      return generated$1.tsArrayType;
    }
  });
  Object.defineProperty(exports, "TSAsExpression", {
    enumerable: true,
    get: function() {
      return generated$1.tsAsExpression;
    }
  });
  Object.defineProperty(exports, "TSBigIntKeyword", {
    enumerable: true,
    get: function() {
      return generated$1.tsBigIntKeyword;
    }
  });
  Object.defineProperty(exports, "TSBooleanKeyword", {
    enumerable: true,
    get: function() {
      return generated$1.tsBooleanKeyword;
    }
  });
  Object.defineProperty(exports, "TSCallSignatureDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.tsCallSignatureDeclaration;
    }
  });
  Object.defineProperty(exports, "TSConditionalType", {
    enumerable: true,
    get: function() {
      return generated$1.tsConditionalType;
    }
  });
  Object.defineProperty(exports, "TSConstructSignatureDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.tsConstructSignatureDeclaration;
    }
  });
  Object.defineProperty(exports, "TSConstructorType", {
    enumerable: true,
    get: function() {
      return generated$1.tsConstructorType;
    }
  });
  Object.defineProperty(exports, "TSDeclareFunction", {
    enumerable: true,
    get: function() {
      return generated$1.tsDeclareFunction;
    }
  });
  Object.defineProperty(exports, "TSDeclareMethod", {
    enumerable: true,
    get: function() {
      return generated$1.tsDeclareMethod;
    }
  });
  Object.defineProperty(exports, "TSEnumDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.tsEnumDeclaration;
    }
  });
  Object.defineProperty(exports, "TSEnumMember", {
    enumerable: true,
    get: function() {
      return generated$1.tsEnumMember;
    }
  });
  Object.defineProperty(exports, "TSExportAssignment", {
    enumerable: true,
    get: function() {
      return generated$1.tsExportAssignment;
    }
  });
  Object.defineProperty(exports, "TSExpressionWithTypeArguments", {
    enumerable: true,
    get: function() {
      return generated$1.tsExpressionWithTypeArguments;
    }
  });
  Object.defineProperty(exports, "TSExternalModuleReference", {
    enumerable: true,
    get: function() {
      return generated$1.tsExternalModuleReference;
    }
  });
  Object.defineProperty(exports, "TSFunctionType", {
    enumerable: true,
    get: function() {
      return generated$1.tsFunctionType;
    }
  });
  Object.defineProperty(exports, "TSImportEqualsDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.tsImportEqualsDeclaration;
    }
  });
  Object.defineProperty(exports, "TSImportType", {
    enumerable: true,
    get: function() {
      return generated$1.tsImportType;
    }
  });
  Object.defineProperty(exports, "TSIndexSignature", {
    enumerable: true,
    get: function() {
      return generated$1.tsIndexSignature;
    }
  });
  Object.defineProperty(exports, "TSIndexedAccessType", {
    enumerable: true,
    get: function() {
      return generated$1.tsIndexedAccessType;
    }
  });
  Object.defineProperty(exports, "TSInferType", {
    enumerable: true,
    get: function() {
      return generated$1.tsInferType;
    }
  });
  Object.defineProperty(exports, "TSInstantiationExpression", {
    enumerable: true,
    get: function() {
      return generated$1.tsInstantiationExpression;
    }
  });
  Object.defineProperty(exports, "TSInterfaceBody", {
    enumerable: true,
    get: function() {
      return generated$1.tsInterfaceBody;
    }
  });
  Object.defineProperty(exports, "TSInterfaceDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.tsInterfaceDeclaration;
    }
  });
  Object.defineProperty(exports, "TSIntersectionType", {
    enumerable: true,
    get: function() {
      return generated$1.tsIntersectionType;
    }
  });
  Object.defineProperty(exports, "TSIntrinsicKeyword", {
    enumerable: true,
    get: function() {
      return generated$1.tsIntrinsicKeyword;
    }
  });
  Object.defineProperty(exports, "TSLiteralType", {
    enumerable: true,
    get: function() {
      return generated$1.tsLiteralType;
    }
  });
  Object.defineProperty(exports, "TSMappedType", {
    enumerable: true,
    get: function() {
      return generated$1.tsMappedType;
    }
  });
  Object.defineProperty(exports, "TSMethodSignature", {
    enumerable: true,
    get: function() {
      return generated$1.tsMethodSignature;
    }
  });
  Object.defineProperty(exports, "TSModuleBlock", {
    enumerable: true,
    get: function() {
      return generated$1.tsModuleBlock;
    }
  });
  Object.defineProperty(exports, "TSModuleDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.tsModuleDeclaration;
    }
  });
  Object.defineProperty(exports, "TSNamedTupleMember", {
    enumerable: true,
    get: function() {
      return generated$1.tsNamedTupleMember;
    }
  });
  Object.defineProperty(exports, "TSNamespaceExportDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.tsNamespaceExportDeclaration;
    }
  });
  Object.defineProperty(exports, "TSNeverKeyword", {
    enumerable: true,
    get: function() {
      return generated$1.tsNeverKeyword;
    }
  });
  Object.defineProperty(exports, "TSNonNullExpression", {
    enumerable: true,
    get: function() {
      return generated$1.tsNonNullExpression;
    }
  });
  Object.defineProperty(exports, "TSNullKeyword", {
    enumerable: true,
    get: function() {
      return generated$1.tsNullKeyword;
    }
  });
  Object.defineProperty(exports, "TSNumberKeyword", {
    enumerable: true,
    get: function() {
      return generated$1.tsNumberKeyword;
    }
  });
  Object.defineProperty(exports, "TSObjectKeyword", {
    enumerable: true,
    get: function() {
      return generated$1.tsObjectKeyword;
    }
  });
  Object.defineProperty(exports, "TSOptionalType", {
    enumerable: true,
    get: function() {
      return generated$1.tsOptionalType;
    }
  });
  Object.defineProperty(exports, "TSParameterProperty", {
    enumerable: true,
    get: function() {
      return generated$1.tsParameterProperty;
    }
  });
  Object.defineProperty(exports, "TSParenthesizedType", {
    enumerable: true,
    get: function() {
      return generated$1.tsParenthesizedType;
    }
  });
  Object.defineProperty(exports, "TSPropertySignature", {
    enumerable: true,
    get: function() {
      return generated$1.tsPropertySignature;
    }
  });
  Object.defineProperty(exports, "TSQualifiedName", {
    enumerable: true,
    get: function() {
      return generated$1.tsQualifiedName;
    }
  });
  Object.defineProperty(exports, "TSRestType", {
    enumerable: true,
    get: function() {
      return generated$1.tsRestType;
    }
  });
  Object.defineProperty(exports, "TSSatisfiesExpression", {
    enumerable: true,
    get: function() {
      return generated$1.tsSatisfiesExpression;
    }
  });
  Object.defineProperty(exports, "TSStringKeyword", {
    enumerable: true,
    get: function() {
      return generated$1.tsStringKeyword;
    }
  });
  Object.defineProperty(exports, "TSSymbolKeyword", {
    enumerable: true,
    get: function() {
      return generated$1.tsSymbolKeyword;
    }
  });
  Object.defineProperty(exports, "TSThisType", {
    enumerable: true,
    get: function() {
      return generated$1.tsThisType;
    }
  });
  Object.defineProperty(exports, "TSTupleType", {
    enumerable: true,
    get: function() {
      return generated$1.tsTupleType;
    }
  });
  Object.defineProperty(exports, "TSTypeAliasDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.tsTypeAliasDeclaration;
    }
  });
  Object.defineProperty(exports, "TSTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.tsTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "TSTypeAssertion", {
    enumerable: true,
    get: function() {
      return generated$1.tsTypeAssertion;
    }
  });
  Object.defineProperty(exports, "TSTypeLiteral", {
    enumerable: true,
    get: function() {
      return generated$1.tsTypeLiteral;
    }
  });
  Object.defineProperty(exports, "TSTypeOperator", {
    enumerable: true,
    get: function() {
      return generated$1.tsTypeOperator;
    }
  });
  Object.defineProperty(exports, "TSTypeParameter", {
    enumerable: true,
    get: function() {
      return generated$1.tsTypeParameter;
    }
  });
  Object.defineProperty(exports, "TSTypeParameterDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.tsTypeParameterDeclaration;
    }
  });
  Object.defineProperty(exports, "TSTypeParameterInstantiation", {
    enumerable: true,
    get: function() {
      return generated$1.tsTypeParameterInstantiation;
    }
  });
  Object.defineProperty(exports, "TSTypePredicate", {
    enumerable: true,
    get: function() {
      return generated$1.tsTypePredicate;
    }
  });
  Object.defineProperty(exports, "TSTypeQuery", {
    enumerable: true,
    get: function() {
      return generated$1.tsTypeQuery;
    }
  });
  Object.defineProperty(exports, "TSTypeReference", {
    enumerable: true,
    get: function() {
      return generated$1.tsTypeReference;
    }
  });
  Object.defineProperty(exports, "TSUndefinedKeyword", {
    enumerable: true,
    get: function() {
      return generated$1.tsUndefinedKeyword;
    }
  });
  Object.defineProperty(exports, "TSUnionType", {
    enumerable: true,
    get: function() {
      return generated$1.tsUnionType;
    }
  });
  Object.defineProperty(exports, "TSUnknownKeyword", {
    enumerable: true,
    get: function() {
      return generated$1.tsUnknownKeyword;
    }
  });
  Object.defineProperty(exports, "TSVoidKeyword", {
    enumerable: true,
    get: function() {
      return generated$1.tsVoidKeyword;
    }
  });
  Object.defineProperty(exports, "TaggedTemplateExpression", {
    enumerable: true,
    get: function() {
      return generated$1.taggedTemplateExpression;
    }
  });
  Object.defineProperty(exports, "TemplateElement", {
    enumerable: true,
    get: function() {
      return generated$1.templateElement;
    }
  });
  Object.defineProperty(exports, "TemplateLiteral", {
    enumerable: true,
    get: function() {
      return generated$1.templateLiteral;
    }
  });
  Object.defineProperty(exports, "ThisExpression", {
    enumerable: true,
    get: function() {
      return generated$1.thisExpression;
    }
  });
  Object.defineProperty(exports, "ThisTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.thisTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "ThrowStatement", {
    enumerable: true,
    get: function() {
      return generated$1.throwStatement;
    }
  });
  Object.defineProperty(exports, "TopicReference", {
    enumerable: true,
    get: function() {
      return generated$1.topicReference;
    }
  });
  Object.defineProperty(exports, "TryStatement", {
    enumerable: true,
    get: function() {
      return generated$1.tryStatement;
    }
  });
  Object.defineProperty(exports, "TupleExpression", {
    enumerable: true,
    get: function() {
      return generated$1.tupleExpression;
    }
  });
  Object.defineProperty(exports, "TupleTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.tupleTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "TypeAlias", {
    enumerable: true,
    get: function() {
      return generated$1.typeAlias;
    }
  });
  Object.defineProperty(exports, "TypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.typeAnnotation;
    }
  });
  Object.defineProperty(exports, "TypeCastExpression", {
    enumerable: true,
    get: function() {
      return generated$1.typeCastExpression;
    }
  });
  Object.defineProperty(exports, "TypeParameter", {
    enumerable: true,
    get: function() {
      return generated$1.typeParameter;
    }
  });
  Object.defineProperty(exports, "TypeParameterDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.typeParameterDeclaration;
    }
  });
  Object.defineProperty(exports, "TypeParameterInstantiation", {
    enumerable: true,
    get: function() {
      return generated$1.typeParameterInstantiation;
    }
  });
  Object.defineProperty(exports, "TypeofTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.typeofTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "UnaryExpression", {
    enumerable: true,
    get: function() {
      return generated$1.unaryExpression;
    }
  });
  Object.defineProperty(exports, "UnionTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.unionTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "UpdateExpression", {
    enumerable: true,
    get: function() {
      return generated$1.updateExpression;
    }
  });
  Object.defineProperty(exports, "V8IntrinsicIdentifier", {
    enumerable: true,
    get: function() {
      return generated$1.v8IntrinsicIdentifier;
    }
  });
  Object.defineProperty(exports, "VariableDeclaration", {
    enumerable: true,
    get: function() {
      return generated$1.variableDeclaration;
    }
  });
  Object.defineProperty(exports, "VariableDeclarator", {
    enumerable: true,
    get: function() {
      return generated$1.variableDeclarator;
    }
  });
  Object.defineProperty(exports, "Variance", {
    enumerable: true,
    get: function() {
      return generated$1.variance;
    }
  });
  Object.defineProperty(exports, "VoidTypeAnnotation", {
    enumerable: true,
    get: function() {
      return generated$1.voidTypeAnnotation;
    }
  });
  Object.defineProperty(exports, "WhileStatement", {
    enumerable: true,
    get: function() {
      return generated$1.whileStatement;
    }
  });
  Object.defineProperty(exports, "WithStatement", {
    enumerable: true,
    get: function() {
      return generated$1.withStatement;
    }
  });
  Object.defineProperty(exports, "YieldExpression", {
    enumerable: true,
    get: function() {
      return generated$1.yieldExpression;
    }
  });
});
var cloneNode_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cloneNode2;
  const has = Function.call.bind(Object.prototype.hasOwnProperty);
  function cloneIfNode(obj, deep, withoutLoc, commentsCache) {
    if (obj && typeof obj.type === "string") {
      return cloneNodeInternal(obj, deep, withoutLoc, commentsCache);
    }
    return obj;
  }
  function cloneIfNodeOrArray(obj, deep, withoutLoc, commentsCache) {
    if (Array.isArray(obj)) {
      return obj.map((node) => cloneIfNode(node, deep, withoutLoc, commentsCache));
    }
    return cloneIfNode(obj, deep, withoutLoc, commentsCache);
  }
  function cloneNode2(node, deep = true, withoutLoc = false) {
    return cloneNodeInternal(node, deep, withoutLoc, new Map());
  }
  function cloneNodeInternal(node, deep = true, withoutLoc = false, commentsCache) {
    if (!node)
      return node;
    const {
      type
    } = node;
    const newNode = {
      type: node.type
    };
    if ((0, generated.isIdentifier)(node)) {
      newNode.name = node.name;
      if (has(node, "optional") && typeof node.optional === "boolean") {
        newNode.optional = node.optional;
      }
      if (has(node, "typeAnnotation")) {
        newNode.typeAnnotation = deep ? cloneIfNodeOrArray(node.typeAnnotation, true, withoutLoc, commentsCache) : node.typeAnnotation;
      }
    } else if (!has(definitions.NODE_FIELDS, type)) {
      throw new Error(`Unknown node type: "${type}"`);
    } else {
      for (const field of Object.keys(definitions.NODE_FIELDS[type])) {
        if (has(node, field)) {
          if (deep) {
            newNode[field] = (0, generated.isFile)(node) && field === "comments" ? maybeCloneComments(node.comments, deep, withoutLoc, commentsCache) : cloneIfNodeOrArray(node[field], true, withoutLoc, commentsCache);
          } else {
            newNode[field] = node[field];
          }
        }
      }
    }
    if (has(node, "loc")) {
      if (withoutLoc) {
        newNode.loc = null;
      } else {
        newNode.loc = node.loc;
      }
    }
    if (has(node, "leadingComments")) {
      newNode.leadingComments = maybeCloneComments(node.leadingComments, deep, withoutLoc, commentsCache);
    }
    if (has(node, "innerComments")) {
      newNode.innerComments = maybeCloneComments(node.innerComments, deep, withoutLoc, commentsCache);
    }
    if (has(node, "trailingComments")) {
      newNode.trailingComments = maybeCloneComments(node.trailingComments, deep, withoutLoc, commentsCache);
    }
    if (has(node, "extra")) {
      newNode.extra = Object.assign({}, node.extra);
    }
    return newNode;
  }
  function maybeCloneComments(comments, deep, withoutLoc, commentsCache) {
    if (!comments || !deep) {
      return comments;
    }
    return comments.map((comment) => {
      const cache = commentsCache.get(comment);
      if (cache)
        return cache;
      const {
        type,
        value,
        loc
      } = comment;
      const ret = {
        type,
        value,
        loc
      };
      if (withoutLoc) {
        ret.loc = null;
      }
      commentsCache.set(comment, ret);
      return ret;
    });
  }
});
var clone_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = clone2;
  function clone2(node) {
    return (0, cloneNode_1.default)(node, false);
  }
});
var cloneDeep_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cloneDeep2;
  function cloneDeep2(node) {
    return (0, cloneNode_1.default)(node);
  }
});
var cloneDeepWithoutLoc_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cloneDeepWithoutLoc2;
  function cloneDeepWithoutLoc2(node) {
    return (0, cloneNode_1.default)(node, true, true);
  }
});
var cloneWithoutLoc_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cloneWithoutLoc2;
  function cloneWithoutLoc2(node) {
    return (0, cloneNode_1.default)(node, false, true);
  }
});
var addComments_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addComments2;
  function addComments2(node, type, comments) {
    if (!comments || !node)
      return node;
    const key = `${type}Comments`;
    if (node[key]) {
      if (type === "leading") {
        node[key] = comments.concat(node[key]);
      } else {
        node[key].push(...comments);
      }
    } else {
      node[key] = comments;
    }
    return node;
  }
});
var addComment_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addComment2;
  function addComment2(node, type, content, line) {
    return (0, addComments_1.default)(node, type, [{
      type: line ? "CommentLine" : "CommentBlock",
      value: content
    }]);
  }
});
var inherit_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = inherit;
  function inherit(key, child, parent) {
    if (child && parent) {
      child[key] = Array.from(new Set([].concat(child[key], parent[key]).filter(Boolean)));
    }
  }
});
var inheritInnerComments_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = inheritInnerComments2;
  function inheritInnerComments2(child, parent) {
    (0, inherit_1.default)("innerComments", child, parent);
  }
});
var inheritLeadingComments_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = inheritLeadingComments2;
  function inheritLeadingComments2(child, parent) {
    (0, inherit_1.default)("leadingComments", child, parent);
  }
});
var inheritTrailingComments_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = inheritTrailingComments2;
  function inheritTrailingComments2(child, parent) {
    (0, inherit_1.default)("trailingComments", child, parent);
  }
});
var inheritsComments_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = inheritsComments2;
  function inheritsComments2(child, parent) {
    (0, inheritTrailingComments_1.default)(child, parent);
    (0, inheritLeadingComments_1.default)(child, parent);
    (0, inheritInnerComments_1.default)(child, parent);
    return child;
  }
});
var removeComments_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = removeComments2;
  function removeComments2(node) {
    constants.COMMENT_KEYS.forEach((key) => {
      node[key] = null;
    });
    return node;
  }
});
var generated$3 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WHILE_TYPES = exports.USERWHITESPACABLE_TYPES = exports.UNARYLIKE_TYPES = exports.TYPESCRIPT_TYPES = exports.TSTYPE_TYPES = exports.TSTYPEELEMENT_TYPES = exports.TSENTITYNAME_TYPES = exports.TSBASETYPE_TYPES = exports.TERMINATORLESS_TYPES = exports.STATEMENT_TYPES = exports.STANDARDIZED_TYPES = exports.SCOPABLE_TYPES = exports.PUREISH_TYPES = exports.PROPERTY_TYPES = exports.PRIVATE_TYPES = exports.PATTERN_TYPES = exports.PATTERNLIKE_TYPES = exports.OBJECTMEMBER_TYPES = exports.MODULESPECIFIER_TYPES = exports.MODULEDECLARATION_TYPES = exports.MISCELLANEOUS_TYPES = exports.METHOD_TYPES = exports.LVAL_TYPES = exports.LOOP_TYPES = exports.LITERAL_TYPES = exports.JSX_TYPES = exports.IMPORTOREXPORTDECLARATION_TYPES = exports.IMMUTABLE_TYPES = exports.FUNCTION_TYPES = exports.FUNCTIONPARENT_TYPES = exports.FOR_TYPES = exports.FORXSTATEMENT_TYPES = exports.FLOW_TYPES = exports.FLOWTYPE_TYPES = exports.FLOWPREDICATE_TYPES = exports.FLOWDECLARATION_TYPES = exports.FLOWBASEANNOTATION_TYPES = exports.EXPRESSION_TYPES = exports.EXPRESSIONWRAPPER_TYPES = exports.EXPORTDECLARATION_TYPES = exports.ENUMMEMBER_TYPES = exports.ENUMBODY_TYPES = exports.DECLARATION_TYPES = exports.CONDITIONAL_TYPES = exports.COMPLETIONSTATEMENT_TYPES = exports.CLASS_TYPES = exports.BLOCK_TYPES = exports.BLOCKPARENT_TYPES = exports.BINARY_TYPES = exports.ACCESSOR_TYPES = void 0;
  const STANDARDIZED_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Standardized"];
  exports.STANDARDIZED_TYPES = STANDARDIZED_TYPES2;
  const EXPRESSION_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Expression"];
  exports.EXPRESSION_TYPES = EXPRESSION_TYPES2;
  const BINARY_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Binary"];
  exports.BINARY_TYPES = BINARY_TYPES2;
  const SCOPABLE_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Scopable"];
  exports.SCOPABLE_TYPES = SCOPABLE_TYPES2;
  const BLOCKPARENT_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["BlockParent"];
  exports.BLOCKPARENT_TYPES = BLOCKPARENT_TYPES2;
  const BLOCK_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Block"];
  exports.BLOCK_TYPES = BLOCK_TYPES2;
  const STATEMENT_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Statement"];
  exports.STATEMENT_TYPES = STATEMENT_TYPES2;
  const TERMINATORLESS_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Terminatorless"];
  exports.TERMINATORLESS_TYPES = TERMINATORLESS_TYPES2;
  const COMPLETIONSTATEMENT_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["CompletionStatement"];
  exports.COMPLETIONSTATEMENT_TYPES = COMPLETIONSTATEMENT_TYPES2;
  const CONDITIONAL_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Conditional"];
  exports.CONDITIONAL_TYPES = CONDITIONAL_TYPES2;
  const LOOP_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Loop"];
  exports.LOOP_TYPES = LOOP_TYPES2;
  const WHILE_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["While"];
  exports.WHILE_TYPES = WHILE_TYPES2;
  const EXPRESSIONWRAPPER_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];
  exports.EXPRESSIONWRAPPER_TYPES = EXPRESSIONWRAPPER_TYPES2;
  const FOR_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["For"];
  exports.FOR_TYPES = FOR_TYPES2;
  const FORXSTATEMENT_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["ForXStatement"];
  exports.FORXSTATEMENT_TYPES = FORXSTATEMENT_TYPES2;
  const FUNCTION_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Function"];
  exports.FUNCTION_TYPES = FUNCTION_TYPES2;
  const FUNCTIONPARENT_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["FunctionParent"];
  exports.FUNCTIONPARENT_TYPES = FUNCTIONPARENT_TYPES2;
  const PUREISH_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Pureish"];
  exports.PUREISH_TYPES = PUREISH_TYPES2;
  const DECLARATION_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Declaration"];
  exports.DECLARATION_TYPES = DECLARATION_TYPES2;
  const PATTERNLIKE_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["PatternLike"];
  exports.PATTERNLIKE_TYPES = PATTERNLIKE_TYPES2;
  const LVAL_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["LVal"];
  exports.LVAL_TYPES = LVAL_TYPES2;
  const TSENTITYNAME_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["TSEntityName"];
  exports.TSENTITYNAME_TYPES = TSENTITYNAME_TYPES2;
  const LITERAL_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Literal"];
  exports.LITERAL_TYPES = LITERAL_TYPES2;
  const IMMUTABLE_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Immutable"];
  exports.IMMUTABLE_TYPES = IMMUTABLE_TYPES2;
  const USERWHITESPACABLE_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["UserWhitespacable"];
  exports.USERWHITESPACABLE_TYPES = USERWHITESPACABLE_TYPES2;
  const METHOD_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Method"];
  exports.METHOD_TYPES = METHOD_TYPES2;
  const OBJECTMEMBER_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["ObjectMember"];
  exports.OBJECTMEMBER_TYPES = OBJECTMEMBER_TYPES2;
  const PROPERTY_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Property"];
  exports.PROPERTY_TYPES = PROPERTY_TYPES2;
  const UNARYLIKE_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["UnaryLike"];
  exports.UNARYLIKE_TYPES = UNARYLIKE_TYPES2;
  const PATTERN_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Pattern"];
  exports.PATTERN_TYPES = PATTERN_TYPES2;
  const CLASS_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Class"];
  exports.CLASS_TYPES = CLASS_TYPES2;
  const IMPORTOREXPORTDECLARATION_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["ImportOrExportDeclaration"];
  exports.IMPORTOREXPORTDECLARATION_TYPES = IMPORTOREXPORTDECLARATION_TYPES2;
  const EXPORTDECLARATION_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["ExportDeclaration"];
  exports.EXPORTDECLARATION_TYPES = EXPORTDECLARATION_TYPES2;
  const MODULESPECIFIER_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];
  exports.MODULESPECIFIER_TYPES = MODULESPECIFIER_TYPES2;
  const ACCESSOR_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Accessor"];
  exports.ACCESSOR_TYPES = ACCESSOR_TYPES2;
  const PRIVATE_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Private"];
  exports.PRIVATE_TYPES = PRIVATE_TYPES2;
  const FLOW_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Flow"];
  exports.FLOW_TYPES = FLOW_TYPES2;
  const FLOWTYPE_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["FlowType"];
  exports.FLOWTYPE_TYPES = FLOWTYPE_TYPES2;
  const FLOWBASEANNOTATION_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];
  exports.FLOWBASEANNOTATION_TYPES = FLOWBASEANNOTATION_TYPES2;
  const FLOWDECLARATION_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["FlowDeclaration"];
  exports.FLOWDECLARATION_TYPES = FLOWDECLARATION_TYPES2;
  const FLOWPREDICATE_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["FlowPredicate"];
  exports.FLOWPREDICATE_TYPES = FLOWPREDICATE_TYPES2;
  const ENUMBODY_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["EnumBody"];
  exports.ENUMBODY_TYPES = ENUMBODY_TYPES2;
  const ENUMMEMBER_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["EnumMember"];
  exports.ENUMMEMBER_TYPES = ENUMMEMBER_TYPES2;
  const JSX_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["JSX"];
  exports.JSX_TYPES = JSX_TYPES2;
  const MISCELLANEOUS_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["Miscellaneous"];
  exports.MISCELLANEOUS_TYPES = MISCELLANEOUS_TYPES2;
  const TYPESCRIPT_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["TypeScript"];
  exports.TYPESCRIPT_TYPES = TYPESCRIPT_TYPES2;
  const TSTYPEELEMENT_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["TSTypeElement"];
  exports.TSTYPEELEMENT_TYPES = TSTYPEELEMENT_TYPES2;
  const TSTYPE_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["TSType"];
  exports.TSTYPE_TYPES = TSTYPE_TYPES2;
  const TSBASETYPE_TYPES2 = definitions.FLIPPED_ALIAS_KEYS["TSBaseType"];
  exports.TSBASETYPE_TYPES = TSBASETYPE_TYPES2;
  const MODULEDECLARATION_TYPES2 = IMPORTOREXPORTDECLARATION_TYPES2;
  exports.MODULEDECLARATION_TYPES = MODULEDECLARATION_TYPES2;
});
var toBlock_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toBlock2;
  function toBlock2(node, parent) {
    if ((0, generated.isBlockStatement)(node)) {
      return node;
    }
    let blockNodes = [];
    if ((0, generated.isEmptyStatement)(node)) {
      blockNodes = [];
    } else {
      if (!(0, generated.isStatement)(node)) {
        if ((0, generated.isFunction)(parent)) {
          node = (0, generated$1.returnStatement)(node);
        } else {
          node = (0, generated$1.expressionStatement)(node);
        }
      }
      blockNodes = [node];
    }
    return (0, generated$1.blockStatement)(blockNodes);
  }
});
var ensureBlock_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ensureBlock2;
  function ensureBlock2(node, key = "body") {
    const result = (0, toBlock_1.default)(node[key], node);
    node[key] = result;
    return result;
  }
});
var toIdentifier_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toIdentifier2;
  function toIdentifier2(input) {
    input = input + "";
    let name = "";
    for (const c of input) {
      name += (0, _helperValidatorIdentifier.isIdentifierChar)(c.codePointAt(0)) ? c : "-";
    }
    name = name.replace(/^[-0-9]+/, "");
    name = name.replace(/[-\s]+(.)?/g, function(match, c) {
      return c ? c.toUpperCase() : "";
    });
    if (!(0, isValidIdentifier_1.default)(name)) {
      name = `_${name}`;
    }
    return name || "_";
  }
});
var toBindingIdentifierName_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toBindingIdentifierName2;
  function toBindingIdentifierName2(name) {
    name = (0, toIdentifier_1.default)(name);
    if (name === "eval" || name === "arguments")
      name = "_" + name;
    return name;
  }
});
var toComputedKey_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toComputedKey2;
  function toComputedKey2(node, key = node.key || node.property) {
    if (!node.computed && (0, generated.isIdentifier)(key))
      key = (0, generated$1.stringLiteral)(key.name);
    return key;
  }
});
var toExpression_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _default = toExpression2;
  exports.default = _default;
  function toExpression2(node) {
    if ((0, generated.isExpressionStatement)(node)) {
      node = node.expression;
    }
    if ((0, generated.isExpression)(node)) {
      return node;
    }
    if ((0, generated.isClass)(node)) {
      node.type = "ClassExpression";
    } else if ((0, generated.isFunction)(node)) {
      node.type = "FunctionExpression";
    }
    if (!(0, generated.isExpression)(node)) {
      throw new Error(`cannot turn ${node.type} to an expression`);
    }
    return node;
  }
});
var traverseFast_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = traverseFast2;
  function traverseFast2(node, enter, opts) {
    if (!node)
      return;
    const keys = definitions.VISITOR_KEYS[node.type];
    if (!keys)
      return;
    opts = opts || {};
    enter(node, opts);
    for (const key of keys) {
      const subNode = node[key];
      if (Array.isArray(subNode)) {
        for (const node2 of subNode) {
          traverseFast2(node2, enter, opts);
        }
      } else {
        traverseFast2(subNode, enter, opts);
      }
    }
  }
});
var removeProperties_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = removeProperties2;
  const CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];
  const CLEAR_KEYS_PLUS_COMMENTS = [...constants.COMMENT_KEYS, "comments", ...CLEAR_KEYS];
  function removeProperties2(node, opts = {}) {
    const map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;
    for (const key of map) {
      if (node[key] != null)
        node[key] = void 0;
    }
    for (const key of Object.keys(node)) {
      if (key[0] === "_" && node[key] != null)
        node[key] = void 0;
    }
    const symbols = Object.getOwnPropertySymbols(node);
    for (const sym of symbols) {
      node[sym] = null;
    }
  }
});
var removePropertiesDeep_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = removePropertiesDeep2;
  function removePropertiesDeep2(tree, opts) {
    (0, traverseFast_1.default)(tree, removeProperties_1.default, opts);
    return tree;
  }
});
var toKeyAlias_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toKeyAlias2;
  function toKeyAlias2(node, key = node.key) {
    let alias;
    if (node.kind === "method") {
      return toKeyAlias2.increment() + "";
    } else if ((0, generated.isIdentifier)(key)) {
      alias = key.name;
    } else if ((0, generated.isStringLiteral)(key)) {
      alias = JSON.stringify(key.value);
    } else {
      alias = JSON.stringify((0, removePropertiesDeep_1.default)((0, cloneNode_1.default)(key)));
    }
    if (node.computed) {
      alias = `[${alias}]`;
    }
    if (node.static) {
      alias = `static:${alias}`;
    }
    return alias;
  }
  toKeyAlias2.uid = 0;
  toKeyAlias2.increment = function() {
    if (toKeyAlias2.uid >= Number.MAX_SAFE_INTEGER) {
      return toKeyAlias2.uid = 0;
    } else {
      return toKeyAlias2.uid++;
    }
  };
});
var getBindingIdentifiers_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getBindingIdentifiers2;
  function getBindingIdentifiers2(node, duplicates, outerOnly) {
    const search = [].concat(node);
    const ids = Object.create(null);
    while (search.length) {
      const id = search.shift();
      if (!id)
        continue;
      const keys = getBindingIdentifiers2.keys[id.type];
      if ((0, generated.isIdentifier)(id)) {
        if (duplicates) {
          const _ids = ids[id.name] = ids[id.name] || [];
          _ids.push(id);
        } else {
          ids[id.name] = id;
        }
        continue;
      }
      if ((0, generated.isExportDeclaration)(id) && !(0, generated.isExportAllDeclaration)(id)) {
        if ((0, generated.isDeclaration)(id.declaration)) {
          search.push(id.declaration);
        }
        continue;
      }
      if (outerOnly) {
        if ((0, generated.isFunctionDeclaration)(id)) {
          search.push(id.id);
          continue;
        }
        if ((0, generated.isFunctionExpression)(id)) {
          continue;
        }
      }
      if (keys) {
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const nodes = id[key];
          if (nodes) {
            Array.isArray(nodes) ? search.push(...nodes) : search.push(nodes);
          }
        }
      }
    }
    return ids;
  }
  getBindingIdentifiers2.keys = {
    DeclareClass: ["id"],
    DeclareFunction: ["id"],
    DeclareModule: ["id"],
    DeclareVariable: ["id"],
    DeclareInterface: ["id"],
    DeclareTypeAlias: ["id"],
    DeclareOpaqueType: ["id"],
    InterfaceDeclaration: ["id"],
    TypeAlias: ["id"],
    OpaqueType: ["id"],
    CatchClause: ["param"],
    LabeledStatement: ["label"],
    UnaryExpression: ["argument"],
    AssignmentExpression: ["left"],
    ImportSpecifier: ["local"],
    ImportNamespaceSpecifier: ["local"],
    ImportDefaultSpecifier: ["local"],
    ImportDeclaration: ["specifiers"],
    ExportSpecifier: ["exported"],
    ExportNamespaceSpecifier: ["exported"],
    ExportDefaultSpecifier: ["exported"],
    FunctionDeclaration: ["id", "params"],
    FunctionExpression: ["id", "params"],
    ArrowFunctionExpression: ["params"],
    ObjectMethod: ["params"],
    ClassMethod: ["params"],
    ClassPrivateMethod: ["params"],
    ForInStatement: ["left"],
    ForOfStatement: ["left"],
    ClassDeclaration: ["id"],
    ClassExpression: ["id"],
    RestElement: ["argument"],
    UpdateExpression: ["argument"],
    ObjectProperty: ["value"],
    AssignmentPattern: ["left"],
    ArrayPattern: ["elements"],
    ObjectPattern: ["properties"],
    VariableDeclaration: ["declarations"],
    VariableDeclarator: ["id"]
  };
});
var gatherSequenceExpressions_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = gatherSequenceExpressions;
  function gatherSequenceExpressions(nodes, scope, declars) {
    const exprs = [];
    let ensureLastUndefined = true;
    for (const node of nodes) {
      if (!(0, generated.isEmptyStatement)(node)) {
        ensureLastUndefined = false;
      }
      if ((0, generated.isExpression)(node)) {
        exprs.push(node);
      } else if ((0, generated.isExpressionStatement)(node)) {
        exprs.push(node.expression);
      } else if ((0, generated.isVariableDeclaration)(node)) {
        if (node.kind !== "var")
          return;
        for (const declar of node.declarations) {
          const bindings = (0, getBindingIdentifiers_1.default)(declar);
          for (const key of Object.keys(bindings)) {
            declars.push({
              kind: node.kind,
              id: (0, cloneNode_1.default)(bindings[key])
            });
          }
          if (declar.init) {
            exprs.push((0, generated$1.assignmentExpression)("=", declar.id, declar.init));
          }
        }
        ensureLastUndefined = true;
      } else if ((0, generated.isIfStatement)(node)) {
        const consequent = node.consequent ? gatherSequenceExpressions([node.consequent], scope, declars) : scope.buildUndefinedNode();
        const alternate = node.alternate ? gatherSequenceExpressions([node.alternate], scope, declars) : scope.buildUndefinedNode();
        if (!consequent || !alternate)
          return;
        exprs.push((0, generated$1.conditionalExpression)(node.test, consequent, alternate));
      } else if ((0, generated.isBlockStatement)(node)) {
        const body = gatherSequenceExpressions(node.body, scope, declars);
        if (!body)
          return;
        exprs.push(body);
      } else if ((0, generated.isEmptyStatement)(node)) {
        if (nodes.indexOf(node) === 0) {
          ensureLastUndefined = true;
        }
      } else {
        return;
      }
    }
    if (ensureLastUndefined) {
      exprs.push(scope.buildUndefinedNode());
    }
    if (exprs.length === 1) {
      return exprs[0];
    } else {
      return (0, generated$1.sequenceExpression)(exprs);
    }
  }
});
var toSequenceExpression_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toSequenceExpression2;
  function toSequenceExpression2(nodes, scope) {
    if (!(nodes != null && nodes.length))
      return;
    const declars = [];
    const result = (0, gatherSequenceExpressions_1.default)(nodes, scope, declars);
    if (!result)
      return;
    for (const declar of declars) {
      scope.push(declar);
    }
    return result;
  }
});
var toStatement_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _default = toStatement2;
  exports.default = _default;
  function toStatement2(node, ignore) {
    if ((0, generated.isStatement)(node)) {
      return node;
    }
    let mustHaveId = false;
    let newType;
    if ((0, generated.isClass)(node)) {
      mustHaveId = true;
      newType = "ClassDeclaration";
    } else if ((0, generated.isFunction)(node)) {
      mustHaveId = true;
      newType = "FunctionDeclaration";
    } else if ((0, generated.isAssignmentExpression)(node)) {
      return (0, generated$1.expressionStatement)(node);
    }
    if (mustHaveId && !node.id) {
      newType = false;
    }
    if (!newType) {
      if (ignore) {
        return false;
      } else {
        throw new Error(`cannot turn ${node.type} to a statement`);
      }
    }
    node.type = newType;
    return node;
  }
});
var valueToNode_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _default = valueToNode2;
  exports.default = _default;
  const objectToString = Function.call.bind(Object.prototype.toString);
  function isRegExp(value) {
    return objectToString(value) === "[object RegExp]";
  }
  function isPlainObject(value) {
    if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Object]") {
      return false;
    }
    const proto = Object.getPrototypeOf(value);
    return proto === null || Object.getPrototypeOf(proto) === null;
  }
  function valueToNode2(value) {
    if (value === void 0) {
      return (0, generated$1.identifier)("undefined");
    }
    if (value === true || value === false) {
      return (0, generated$1.booleanLiteral)(value);
    }
    if (value === null) {
      return (0, generated$1.nullLiteral)();
    }
    if (typeof value === "string") {
      return (0, generated$1.stringLiteral)(value);
    }
    if (typeof value === "number") {
      let result;
      if (Number.isFinite(value)) {
        result = (0, generated$1.numericLiteral)(Math.abs(value));
      } else {
        let numerator;
        if (Number.isNaN(value)) {
          numerator = (0, generated$1.numericLiteral)(0);
        } else {
          numerator = (0, generated$1.numericLiteral)(1);
        }
        result = (0, generated$1.binaryExpression)("/", numerator, (0, generated$1.numericLiteral)(0));
      }
      if (value < 0 || Object.is(value, -0)) {
        result = (0, generated$1.unaryExpression)("-", result);
      }
      return result;
    }
    if (isRegExp(value)) {
      const pattern = value.source;
      const flags = value.toString().match(/\/([a-z]+|)$/)[1];
      return (0, generated$1.regExpLiteral)(pattern, flags);
    }
    if (Array.isArray(value)) {
      return (0, generated$1.arrayExpression)(value.map(valueToNode2));
    }
    if (isPlainObject(value)) {
      const props = [];
      for (const key of Object.keys(value)) {
        let nodeKey;
        if ((0, isValidIdentifier_1.default)(key)) {
          nodeKey = (0, generated$1.identifier)(key);
        } else {
          nodeKey = (0, generated$1.stringLiteral)(key);
        }
        props.push((0, generated$1.objectProperty)(nodeKey, valueToNode2(value[key])));
      }
      return (0, generated$1.objectExpression)(props);
    }
    throw new Error("don't know how to turn this value into a node");
  }
});
var appendToMemberExpression_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = appendToMemberExpression2;
  function appendToMemberExpression2(member, append, computed = false) {
    member.object = (0, generated$1.memberExpression)(member.object, member.property, member.computed);
    member.property = append;
    member.computed = !!computed;
    return member;
  }
});
var inherits_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = inherits2;
  function inherits2(child, parent) {
    if (!child || !parent)
      return child;
    for (const key of constants.INHERIT_KEYS.optional) {
      if (child[key] == null) {
        child[key] = parent[key];
      }
    }
    for (const key of Object.keys(parent)) {
      if (key[0] === "_" && key !== "__clone") {
        child[key] = parent[key];
      }
    }
    for (const key of constants.INHERIT_KEYS.force) {
      child[key] = parent[key];
    }
    (0, inheritsComments_1.default)(child, parent);
    return child;
  }
});
var prependToMemberExpression_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prependToMemberExpression2;
  function prependToMemberExpression2(member, prepend) {
    if ((0, lib.isSuper)(member.object)) {
      throw new Error("Cannot prepend node to super property access (`super.foo`).");
    }
    member.object = (0, generated$1.memberExpression)(prepend, member.object);
    return member;
  }
});
var getOuterBindingIdentifiers_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _default = getOuterBindingIdentifiers2;
  exports.default = _default;
  function getOuterBindingIdentifiers2(node, duplicates) {
    return (0, getBindingIdentifiers_1.default)(node, duplicates, true);
  }
});
var traverse_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = traverse2;
  function traverse2(node, handlers, state) {
    if (typeof handlers === "function") {
      handlers = {
        enter: handlers
      };
    }
    const {
      enter,
      exit
    } = handlers;
    traverseSimpleImpl(node, enter, exit, state, []);
  }
  function traverseSimpleImpl(node, enter, exit, state, ancestors) {
    const keys = definitions.VISITOR_KEYS[node.type];
    if (!keys)
      return;
    if (enter)
      enter(node, ancestors, state);
    for (const key of keys) {
      const subNode = node[key];
      if (Array.isArray(subNode)) {
        for (let i = 0; i < subNode.length; i++) {
          const child = subNode[i];
          if (!child)
            continue;
          ancestors.push({
            node,
            key,
            index: i
          });
          traverseSimpleImpl(child, enter, exit, state, ancestors);
          ancestors.pop();
        }
      } else if (subNode) {
        ancestors.push({
          node,
          key
        });
        traverseSimpleImpl(subNode, enter, exit, state, ancestors);
        ancestors.pop();
      }
    }
    if (exit)
      exit(node, ancestors, state);
  }
});
var isBinding_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isBinding2;
  function isBinding2(node, parent, grandparent) {
    if (grandparent && node.type === "Identifier" && parent.type === "ObjectProperty" && grandparent.type === "ObjectExpression") {
      return false;
    }
    const keys = getBindingIdentifiers_1.default.keys[parent.type];
    if (keys) {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const val = parent[key];
        if (Array.isArray(val)) {
          if (val.indexOf(node) >= 0)
            return true;
        } else {
          if (val === node)
            return true;
        }
      }
    }
    return false;
  }
});
var isLet_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isLet2;
  function isLet2(node) {
    return (0, generated.isVariableDeclaration)(node) && (node.kind !== "var" || node[constants.BLOCK_SCOPED_SYMBOL]);
  }
});
var isBlockScoped_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isBlockScoped2;
  function isBlockScoped2(node) {
    return (0, generated.isFunctionDeclaration)(node) || (0, generated.isClassDeclaration)(node) || (0, isLet_1.default)(node);
  }
});
var isImmutable_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isImmutable2;
  function isImmutable2(node) {
    if ((0, isType_1.default)(node.type, "Immutable"))
      return true;
    if ((0, generated.isIdentifier)(node)) {
      if (node.name === "undefined") {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
});
var isNodesEquivalent_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isNodesEquivalent2;
  function isNodesEquivalent2(a, b) {
    if (typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
      return a === b;
    }
    if (a.type !== b.type) {
      return false;
    }
    const fields = Object.keys(definitions.NODE_FIELDS[a.type] || a.type);
    const visitorKeys = definitions.VISITOR_KEYS[a.type];
    for (const field of fields) {
      const val_a = a[field];
      const val_b = b[field];
      if (typeof val_a !== typeof val_b) {
        return false;
      }
      if (val_a == null && val_b == null) {
        continue;
      } else if (val_a == null || val_b == null) {
        return false;
      }
      if (Array.isArray(val_a)) {
        if (!Array.isArray(val_b)) {
          return false;
        }
        if (val_a.length !== val_b.length) {
          return false;
        }
        for (let i = 0; i < val_a.length; i++) {
          if (!isNodesEquivalent2(val_a[i], val_b[i])) {
            return false;
          }
        }
        continue;
      }
      if (typeof val_a === "object" && !(visitorKeys != null && visitorKeys.includes(field))) {
        for (const key of Object.keys(val_a)) {
          if (val_a[key] !== val_b[key]) {
            return false;
          }
        }
        continue;
      }
      if (!isNodesEquivalent2(val_a, val_b)) {
        return false;
      }
    }
    return true;
  }
});
var isReferenced_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isReferenced2;
  function isReferenced2(node, parent, grandparent) {
    switch (parent.type) {
      case "MemberExpression":
      case "OptionalMemberExpression":
        if (parent.property === node) {
          return !!parent.computed;
        }
        return parent.object === node;
      case "JSXMemberExpression":
        return parent.object === node;
      case "VariableDeclarator":
        return parent.init === node;
      case "ArrowFunctionExpression":
        return parent.body === node;
      case "PrivateName":
        return false;
      case "ClassMethod":
      case "ClassPrivateMethod":
      case "ObjectMethod":
        if (parent.key === node) {
          return !!parent.computed;
        }
        return false;
      case "ObjectProperty":
        if (parent.key === node) {
          return !!parent.computed;
        }
        return !grandparent || grandparent.type !== "ObjectPattern";
      case "ClassProperty":
      case "ClassAccessorProperty":
        if (parent.key === node) {
          return !!parent.computed;
        }
        return true;
      case "ClassPrivateProperty":
        return parent.key !== node;
      case "ClassDeclaration":
      case "ClassExpression":
        return parent.superClass === node;
      case "AssignmentExpression":
        return parent.right === node;
      case "AssignmentPattern":
        return parent.right === node;
      case "LabeledStatement":
        return false;
      case "CatchClause":
        return false;
      case "RestElement":
        return false;
      case "BreakStatement":
      case "ContinueStatement":
        return false;
      case "FunctionDeclaration":
      case "FunctionExpression":
        return false;
      case "ExportNamespaceSpecifier":
      case "ExportDefaultSpecifier":
        return false;
      case "ExportSpecifier":
        if (grandparent != null && grandparent.source) {
          return false;
        }
        return parent.local === node;
      case "ImportDefaultSpecifier":
      case "ImportNamespaceSpecifier":
      case "ImportSpecifier":
        return false;
      case "ImportAttribute":
        return false;
      case "JSXAttribute":
        return false;
      case "ObjectPattern":
      case "ArrayPattern":
        return false;
      case "MetaProperty":
        return false;
      case "ObjectTypeProperty":
        return parent.key !== node;
      case "TSEnumMember":
        return parent.id !== node;
      case "TSPropertySignature":
        if (parent.key === node) {
          return !!parent.computed;
        }
        return true;
    }
    return true;
  }
});
var isScope_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isScope2;
  function isScope2(node, parent) {
    if ((0, generated.isBlockStatement)(node) && ((0, generated.isFunction)(parent) || (0, generated.isCatchClause)(parent))) {
      return false;
    }
    if ((0, generated.isPattern)(node) && ((0, generated.isFunction)(parent) || (0, generated.isCatchClause)(parent))) {
      return true;
    }
    return (0, generated.isScopable)(node);
  }
});
var isSpecifierDefault_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isSpecifierDefault2;
  function isSpecifierDefault2(specifier) {
    return (0, generated.isImportDefaultSpecifier)(specifier) || (0, generated.isIdentifier)(specifier.imported || specifier.exported, {
      name: "default"
    });
  }
});
var isValidES3Identifier_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isValidES3Identifier2;
  const RESERVED_WORDS_ES3_ONLY = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);
  function isValidES3Identifier2(name) {
    return (0, isValidIdentifier_1.default)(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
  }
});
var isVar_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isVar2;
  function isVar2(node) {
    return (0, generated.isVariableDeclaration)(node, {
      kind: "var"
    }) && !node[constants.BLOCK_SCOPED_SYMBOL];
  }
});
var generated$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
var lib = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _exportNames = {
    react: true,
    assertNode: true,
    createTypeAnnotationBasedOnTypeof: true,
    createUnionTypeAnnotation: true,
    createFlowUnionType: true,
    createTSUnionType: true,
    cloneNode: true,
    clone: true,
    cloneDeep: true,
    cloneDeepWithoutLoc: true,
    cloneWithoutLoc: true,
    addComment: true,
    addComments: true,
    inheritInnerComments: true,
    inheritLeadingComments: true,
    inheritsComments: true,
    inheritTrailingComments: true,
    removeComments: true,
    ensureBlock: true,
    toBindingIdentifierName: true,
    toBlock: true,
    toComputedKey: true,
    toExpression: true,
    toIdentifier: true,
    toKeyAlias: true,
    toSequenceExpression: true,
    toStatement: true,
    valueToNode: true,
    appendToMemberExpression: true,
    inherits: true,
    prependToMemberExpression: true,
    removeProperties: true,
    removePropertiesDeep: true,
    removeTypeDuplicates: true,
    getBindingIdentifiers: true,
    getOuterBindingIdentifiers: true,
    traverse: true,
    traverseFast: true,
    shallowEqual: true,
    is: true,
    isBinding: true,
    isBlockScoped: true,
    isImmutable: true,
    isLet: true,
    isNode: true,
    isNodesEquivalent: true,
    isPlaceholderType: true,
    isReferenced: true,
    isScope: true,
    isSpecifierDefault: true,
    isType: true,
    isValidES3Identifier: true,
    isValidIdentifier: true,
    isVar: true,
    matchesPattern: true,
    validate: true,
    buildMatchMemberExpression: true,
    __internal__deprecationWarning: true
  };
  Object.defineProperty(exports, "__internal__deprecationWarning", {
    enumerable: true,
    get: function() {
      return deprecationWarning_1.default;
    }
  });
  Object.defineProperty(exports, "addComment", {
    enumerable: true,
    get: function() {
      return addComment_1.default;
    }
  });
  Object.defineProperty(exports, "addComments", {
    enumerable: true,
    get: function() {
      return addComments_1.default;
    }
  });
  Object.defineProperty(exports, "appendToMemberExpression", {
    enumerable: true,
    get: function() {
      return appendToMemberExpression_1.default;
    }
  });
  Object.defineProperty(exports, "assertNode", {
    enumerable: true,
    get: function() {
      return assertNode_1.default;
    }
  });
  Object.defineProperty(exports, "buildMatchMemberExpression", {
    enumerable: true,
    get: function() {
      return buildMatchMemberExpression_1.default;
    }
  });
  Object.defineProperty(exports, "clone", {
    enumerable: true,
    get: function() {
      return clone_1.default;
    }
  });
  Object.defineProperty(exports, "cloneDeep", {
    enumerable: true,
    get: function() {
      return cloneDeep_1.default;
    }
  });
  Object.defineProperty(exports, "cloneDeepWithoutLoc", {
    enumerable: true,
    get: function() {
      return cloneDeepWithoutLoc_1.default;
    }
  });
  Object.defineProperty(exports, "cloneNode", {
    enumerable: true,
    get: function() {
      return cloneNode_1.default;
    }
  });
  Object.defineProperty(exports, "cloneWithoutLoc", {
    enumerable: true,
    get: function() {
      return cloneWithoutLoc_1.default;
    }
  });
  Object.defineProperty(exports, "createFlowUnionType", {
    enumerable: true,
    get: function() {
      return createFlowUnionType_1.default;
    }
  });
  Object.defineProperty(exports, "createTSUnionType", {
    enumerable: true,
    get: function() {
      return createTSUnionType_1.default;
    }
  });
  Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
    enumerable: true,
    get: function() {
      return createTypeAnnotationBasedOnTypeof_1.default;
    }
  });
  Object.defineProperty(exports, "createUnionTypeAnnotation", {
    enumerable: true,
    get: function() {
      return createFlowUnionType_1.default;
    }
  });
  Object.defineProperty(exports, "ensureBlock", {
    enumerable: true,
    get: function() {
      return ensureBlock_1.default;
    }
  });
  Object.defineProperty(exports, "getBindingIdentifiers", {
    enumerable: true,
    get: function() {
      return getBindingIdentifiers_1.default;
    }
  });
  Object.defineProperty(exports, "getOuterBindingIdentifiers", {
    enumerable: true,
    get: function() {
      return getOuterBindingIdentifiers_1.default;
    }
  });
  Object.defineProperty(exports, "inheritInnerComments", {
    enumerable: true,
    get: function() {
      return inheritInnerComments_1.default;
    }
  });
  Object.defineProperty(exports, "inheritLeadingComments", {
    enumerable: true,
    get: function() {
      return inheritLeadingComments_1.default;
    }
  });
  Object.defineProperty(exports, "inheritTrailingComments", {
    enumerable: true,
    get: function() {
      return inheritTrailingComments_1.default;
    }
  });
  Object.defineProperty(exports, "inherits", {
    enumerable: true,
    get: function() {
      return inherits_1.default;
    }
  });
  Object.defineProperty(exports, "inheritsComments", {
    enumerable: true,
    get: function() {
      return inheritsComments_1.default;
    }
  });
  Object.defineProperty(exports, "is", {
    enumerable: true,
    get: function() {
      return is_1.default;
    }
  });
  Object.defineProperty(exports, "isBinding", {
    enumerable: true,
    get: function() {
      return isBinding_1.default;
    }
  });
  Object.defineProperty(exports, "isBlockScoped", {
    enumerable: true,
    get: function() {
      return isBlockScoped_1.default;
    }
  });
  Object.defineProperty(exports, "isImmutable", {
    enumerable: true,
    get: function() {
      return isImmutable_1.default;
    }
  });
  Object.defineProperty(exports, "isLet", {
    enumerable: true,
    get: function() {
      return isLet_1.default;
    }
  });
  Object.defineProperty(exports, "isNode", {
    enumerable: true,
    get: function() {
      return isNode_1.default;
    }
  });
  Object.defineProperty(exports, "isNodesEquivalent", {
    enumerable: true,
    get: function() {
      return isNodesEquivalent_1.default;
    }
  });
  Object.defineProperty(exports, "isPlaceholderType", {
    enumerable: true,
    get: function() {
      return isPlaceholderType_1.default;
    }
  });
  Object.defineProperty(exports, "isReferenced", {
    enumerable: true,
    get: function() {
      return isReferenced_1.default;
    }
  });
  Object.defineProperty(exports, "isScope", {
    enumerable: true,
    get: function() {
      return isScope_1.default;
    }
  });
  Object.defineProperty(exports, "isSpecifierDefault", {
    enumerable: true,
    get: function() {
      return isSpecifierDefault_1.default;
    }
  });
  Object.defineProperty(exports, "isType", {
    enumerable: true,
    get: function() {
      return isType_1.default;
    }
  });
  Object.defineProperty(exports, "isValidES3Identifier", {
    enumerable: true,
    get: function() {
      return isValidES3Identifier_1.default;
    }
  });
  Object.defineProperty(exports, "isValidIdentifier", {
    enumerable: true,
    get: function() {
      return isValidIdentifier_1.default;
    }
  });
  Object.defineProperty(exports, "isVar", {
    enumerable: true,
    get: function() {
      return isVar_1.default;
    }
  });
  Object.defineProperty(exports, "matchesPattern", {
    enumerable: true,
    get: function() {
      return matchesPattern_1.default;
    }
  });
  Object.defineProperty(exports, "prependToMemberExpression", {
    enumerable: true,
    get: function() {
      return prependToMemberExpression_1.default;
    }
  });
  exports.react = void 0;
  Object.defineProperty(exports, "removeComments", {
    enumerable: true,
    get: function() {
      return removeComments_1.default;
    }
  });
  Object.defineProperty(exports, "removeProperties", {
    enumerable: true,
    get: function() {
      return removeProperties_1.default;
    }
  });
  Object.defineProperty(exports, "removePropertiesDeep", {
    enumerable: true,
    get: function() {
      return removePropertiesDeep_1.default;
    }
  });
  Object.defineProperty(exports, "removeTypeDuplicates", {
    enumerable: true,
    get: function() {
      return removeTypeDuplicates_1.default;
    }
  });
  Object.defineProperty(exports, "shallowEqual", {
    enumerable: true,
    get: function() {
      return shallowEqual_1.default;
    }
  });
  Object.defineProperty(exports, "toBindingIdentifierName", {
    enumerable: true,
    get: function() {
      return toBindingIdentifierName_1.default;
    }
  });
  Object.defineProperty(exports, "toBlock", {
    enumerable: true,
    get: function() {
      return toBlock_1.default;
    }
  });
  Object.defineProperty(exports, "toComputedKey", {
    enumerable: true,
    get: function() {
      return toComputedKey_1.default;
    }
  });
  Object.defineProperty(exports, "toExpression", {
    enumerable: true,
    get: function() {
      return toExpression_1.default;
    }
  });
  Object.defineProperty(exports, "toIdentifier", {
    enumerable: true,
    get: function() {
      return toIdentifier_1.default;
    }
  });
  Object.defineProperty(exports, "toKeyAlias", {
    enumerable: true,
    get: function() {
      return toKeyAlias_1.default;
    }
  });
  Object.defineProperty(exports, "toSequenceExpression", {
    enumerable: true,
    get: function() {
      return toSequenceExpression_1.default;
    }
  });
  Object.defineProperty(exports, "toStatement", {
    enumerable: true,
    get: function() {
      return toStatement_1.default;
    }
  });
  Object.defineProperty(exports, "traverse", {
    enumerable: true,
    get: function() {
      return traverse_1.default;
    }
  });
  Object.defineProperty(exports, "traverseFast", {
    enumerable: true,
    get: function() {
      return traverseFast_1.default;
    }
  });
  Object.defineProperty(exports, "validate", {
    enumerable: true,
    get: function() {
      return validate_1.default;
    }
  });
  Object.defineProperty(exports, "valueToNode", {
    enumerable: true,
    get: function() {
      return valueToNode_1.default;
    }
  });
  Object.keys(generated$2).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === generated$2[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return generated$2[key];
      }
    });
  });
  Object.keys(generated$1).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === generated$1[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return generated$1[key];
      }
    });
  });
  Object.keys(uppercase).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === uppercase[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return uppercase[key];
      }
    });
  });
  Object.keys(generated$3).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === generated$3[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return generated$3[key];
      }
    });
  });
  Object.keys(constants).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === constants[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return constants[key];
      }
    });
  });
  Object.keys(definitions).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === definitions[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return definitions[key];
      }
    });
  });
  Object.keys(traverse_1).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === traverse_1[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return traverse_1[key];
      }
    });
  });
  Object.keys(generated).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === generated[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return generated[key];
      }
    });
  });
  Object.keys(generated$4).forEach(function(key) {
    if (key === "default" || key === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key))
      return;
    if (key in exports && exports[key] === generated$4[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function() {
        return generated$4[key];
      }
    });
  });
  const react2 = {
    isReactComponent: isReactComponent_1.default,
    isCompatTag: isCompatTag_1.default,
    buildChildren: buildChildren_1.default
  };
  exports.react = react2;
});
var __pika_web_default_export_for_treeshaking__ = /* @__PURE__ */ getDefaultExportFromCjs(lib);
var ACCESSOR_TYPES = lib.ACCESSOR_TYPES;
var ALIAS_KEYS = lib.ALIAS_KEYS;
var ASSIGNMENT_OPERATORS = lib.ASSIGNMENT_OPERATORS;
var AnyTypeAnnotation = lib.AnyTypeAnnotation;
var ArgumentPlaceholder = lib.ArgumentPlaceholder;
var ArrayExpression = lib.ArrayExpression;
var ArrayPattern = lib.ArrayPattern;
var ArrayTypeAnnotation = lib.ArrayTypeAnnotation;
var ArrowFunctionExpression = lib.ArrowFunctionExpression;
var AssignmentExpression = lib.AssignmentExpression;
var AssignmentPattern = lib.AssignmentPattern;
var AwaitExpression = lib.AwaitExpression;
var BINARY_OPERATORS = lib.BINARY_OPERATORS;
var BINARY_TYPES = lib.BINARY_TYPES;
var BLOCKPARENT_TYPES = lib.BLOCKPARENT_TYPES;
var BLOCK_SCOPED_SYMBOL = lib.BLOCK_SCOPED_SYMBOL;
var BLOCK_TYPES = lib.BLOCK_TYPES;
var BOOLEAN_BINARY_OPERATORS = lib.BOOLEAN_BINARY_OPERATORS;
var BOOLEAN_NUMBER_BINARY_OPERATORS = lib.BOOLEAN_NUMBER_BINARY_OPERATORS;
var BOOLEAN_UNARY_OPERATORS = lib.BOOLEAN_UNARY_OPERATORS;
var BUILDER_KEYS = lib.BUILDER_KEYS;
var BigIntLiteral = lib.BigIntLiteral;
var BinaryExpression = lib.BinaryExpression;
var BindExpression = lib.BindExpression;
var BlockStatement = lib.BlockStatement;
var BooleanLiteral = lib.BooleanLiteral;
var BooleanLiteralTypeAnnotation = lib.BooleanLiteralTypeAnnotation;
var BooleanTypeAnnotation = lib.BooleanTypeAnnotation;
var BreakStatement = lib.BreakStatement;
var CLASS_TYPES = lib.CLASS_TYPES;
var COMMENT_KEYS = lib.COMMENT_KEYS;
var COMPARISON_BINARY_OPERATORS = lib.COMPARISON_BINARY_OPERATORS;
var COMPLETIONSTATEMENT_TYPES = lib.COMPLETIONSTATEMENT_TYPES;
var CONDITIONAL_TYPES = lib.CONDITIONAL_TYPES;
var CallExpression = lib.CallExpression;
var CatchClause = lib.CatchClause;
var ClassAccessorProperty = lib.ClassAccessorProperty;
var ClassBody = lib.ClassBody;
var ClassDeclaration = lib.ClassDeclaration;
var ClassExpression = lib.ClassExpression;
var ClassImplements = lib.ClassImplements;
var ClassMethod = lib.ClassMethod;
var ClassPrivateMethod = lib.ClassPrivateMethod;
var ClassPrivateProperty = lib.ClassPrivateProperty;
var ClassProperty = lib.ClassProperty;
var ConditionalExpression = lib.ConditionalExpression;
var ContinueStatement = lib.ContinueStatement;
var DECLARATION_TYPES = lib.DECLARATION_TYPES;
var DEPRECATED_ALIASES = lib.DEPRECATED_ALIASES;
var DEPRECATED_KEYS = lib.DEPRECATED_KEYS;
var DebuggerStatement = lib.DebuggerStatement;
var DecimalLiteral = lib.DecimalLiteral;
var DeclareClass = lib.DeclareClass;
var DeclareExportAllDeclaration = lib.DeclareExportAllDeclaration;
var DeclareExportDeclaration = lib.DeclareExportDeclaration;
var DeclareFunction = lib.DeclareFunction;
var DeclareInterface = lib.DeclareInterface;
var DeclareModule = lib.DeclareModule;
var DeclareModuleExports = lib.DeclareModuleExports;
var DeclareOpaqueType = lib.DeclareOpaqueType;
var DeclareTypeAlias = lib.DeclareTypeAlias;
var DeclareVariable = lib.DeclareVariable;
var DeclaredPredicate = lib.DeclaredPredicate;
var Decorator = lib.Decorator;
var Directive = lib.Directive;
var DirectiveLiteral = lib.DirectiveLiteral;
var DoExpression = lib.DoExpression;
var DoWhileStatement = lib.DoWhileStatement;
var ENUMBODY_TYPES = lib.ENUMBODY_TYPES;
var ENUMMEMBER_TYPES = lib.ENUMMEMBER_TYPES;
var EQUALITY_BINARY_OPERATORS = lib.EQUALITY_BINARY_OPERATORS;
var EXPORTDECLARATION_TYPES = lib.EXPORTDECLARATION_TYPES;
var EXPRESSIONWRAPPER_TYPES = lib.EXPRESSIONWRAPPER_TYPES;
var EXPRESSION_TYPES = lib.EXPRESSION_TYPES;
var EmptyStatement = lib.EmptyStatement;
var EmptyTypeAnnotation = lib.EmptyTypeAnnotation;
var EnumBooleanBody = lib.EnumBooleanBody;
var EnumBooleanMember = lib.EnumBooleanMember;
var EnumDeclaration = lib.EnumDeclaration;
var EnumDefaultedMember = lib.EnumDefaultedMember;
var EnumNumberBody = lib.EnumNumberBody;
var EnumNumberMember = lib.EnumNumberMember;
var EnumStringBody = lib.EnumStringBody;
var EnumStringMember = lib.EnumStringMember;
var EnumSymbolBody = lib.EnumSymbolBody;
var ExistsTypeAnnotation = lib.ExistsTypeAnnotation;
var ExportAllDeclaration = lib.ExportAllDeclaration;
var ExportDefaultDeclaration = lib.ExportDefaultDeclaration;
var ExportDefaultSpecifier = lib.ExportDefaultSpecifier;
var ExportNamedDeclaration = lib.ExportNamedDeclaration;
var ExportNamespaceSpecifier = lib.ExportNamespaceSpecifier;
var ExportSpecifier = lib.ExportSpecifier;
var ExpressionStatement = lib.ExpressionStatement;
var FLATTENABLE_KEYS = lib.FLATTENABLE_KEYS;
var FLIPPED_ALIAS_KEYS = lib.FLIPPED_ALIAS_KEYS;
var FLOWBASEANNOTATION_TYPES = lib.FLOWBASEANNOTATION_TYPES;
var FLOWDECLARATION_TYPES = lib.FLOWDECLARATION_TYPES;
var FLOWPREDICATE_TYPES = lib.FLOWPREDICATE_TYPES;
var FLOWTYPE_TYPES = lib.FLOWTYPE_TYPES;
var FLOW_TYPES = lib.FLOW_TYPES;
var FORXSTATEMENT_TYPES = lib.FORXSTATEMENT_TYPES;
var FOR_INIT_KEYS = lib.FOR_INIT_KEYS;
var FOR_TYPES = lib.FOR_TYPES;
var FUNCTIONPARENT_TYPES = lib.FUNCTIONPARENT_TYPES;
var FUNCTION_TYPES = lib.FUNCTION_TYPES;
var File = lib.File;
var ForInStatement = lib.ForInStatement;
var ForOfStatement = lib.ForOfStatement;
var ForStatement = lib.ForStatement;
var FunctionDeclaration = lib.FunctionDeclaration;
var FunctionExpression = lib.FunctionExpression;
var FunctionTypeAnnotation = lib.FunctionTypeAnnotation;
var FunctionTypeParam = lib.FunctionTypeParam;
var GenericTypeAnnotation = lib.GenericTypeAnnotation;
var IMMUTABLE_TYPES = lib.IMMUTABLE_TYPES;
var IMPORTOREXPORTDECLARATION_TYPES = lib.IMPORTOREXPORTDECLARATION_TYPES;
var INHERIT_KEYS = lib.INHERIT_KEYS;
var Identifier = lib.Identifier;
var IfStatement = lib.IfStatement;
var Import = lib.Import;
var ImportAttribute = lib.ImportAttribute;
var ImportDeclaration = lib.ImportDeclaration;
var ImportDefaultSpecifier = lib.ImportDefaultSpecifier;
var ImportNamespaceSpecifier = lib.ImportNamespaceSpecifier;
var ImportSpecifier = lib.ImportSpecifier;
var IndexedAccessType = lib.IndexedAccessType;
var InferredPredicate = lib.InferredPredicate;
var InterfaceDeclaration = lib.InterfaceDeclaration;
var InterfaceExtends = lib.InterfaceExtends;
var InterfaceTypeAnnotation = lib.InterfaceTypeAnnotation;
var InterpreterDirective = lib.InterpreterDirective;
var IntersectionTypeAnnotation = lib.IntersectionTypeAnnotation;
var JSXAttribute = lib.JSXAttribute;
var JSXClosingElement = lib.JSXClosingElement;
var JSXClosingFragment = lib.JSXClosingFragment;
var JSXElement = lib.JSXElement;
var JSXEmptyExpression = lib.JSXEmptyExpression;
var JSXExpressionContainer = lib.JSXExpressionContainer;
var JSXFragment = lib.JSXFragment;
var JSXIdentifier = lib.JSXIdentifier;
var JSXMemberExpression = lib.JSXMemberExpression;
var JSXNamespacedName = lib.JSXNamespacedName;
var JSXOpeningElement = lib.JSXOpeningElement;
var JSXOpeningFragment = lib.JSXOpeningFragment;
var JSXSpreadAttribute = lib.JSXSpreadAttribute;
var JSXSpreadChild = lib.JSXSpreadChild;
var JSXText = lib.JSXText;
var JSX_TYPES = lib.JSX_TYPES;
var LITERAL_TYPES = lib.LITERAL_TYPES;
var LOGICAL_OPERATORS = lib.LOGICAL_OPERATORS;
var LOOP_TYPES = lib.LOOP_TYPES;
var LVAL_TYPES = lib.LVAL_TYPES;
var LabeledStatement = lib.LabeledStatement;
var LogicalExpression = lib.LogicalExpression;
var METHOD_TYPES = lib.METHOD_TYPES;
var MISCELLANEOUS_TYPES = lib.MISCELLANEOUS_TYPES;
var MODULEDECLARATION_TYPES = lib.MODULEDECLARATION_TYPES;
var MODULESPECIFIER_TYPES = lib.MODULESPECIFIER_TYPES;
var MemberExpression = lib.MemberExpression;
var MetaProperty = lib.MetaProperty;
var MixedTypeAnnotation = lib.MixedTypeAnnotation;
var ModuleExpression = lib.ModuleExpression;
var NODE_FIELDS = lib.NODE_FIELDS;
var NODE_PARENT_VALIDATIONS = lib.NODE_PARENT_VALIDATIONS;
var NOT_LOCAL_BINDING = lib.NOT_LOCAL_BINDING;
var NUMBER_BINARY_OPERATORS = lib.NUMBER_BINARY_OPERATORS;
var NUMBER_UNARY_OPERATORS = lib.NUMBER_UNARY_OPERATORS;
var NewExpression = lib.NewExpression;
var Noop = lib.Noop;
var NullLiteral = lib.NullLiteral;
var NullLiteralTypeAnnotation = lib.NullLiteralTypeAnnotation;
var NullableTypeAnnotation = lib.NullableTypeAnnotation;
var NumberLiteral = lib.NumberLiteral;
var NumberLiteralTypeAnnotation = lib.NumberLiteralTypeAnnotation;
var NumberTypeAnnotation = lib.NumberTypeAnnotation;
var NumericLiteral = lib.NumericLiteral;
var OBJECTMEMBER_TYPES = lib.OBJECTMEMBER_TYPES;
var ObjectExpression = lib.ObjectExpression;
var ObjectMethod = lib.ObjectMethod;
var ObjectPattern = lib.ObjectPattern;
var ObjectProperty = lib.ObjectProperty;
var ObjectTypeAnnotation = lib.ObjectTypeAnnotation;
var ObjectTypeCallProperty = lib.ObjectTypeCallProperty;
var ObjectTypeIndexer = lib.ObjectTypeIndexer;
var ObjectTypeInternalSlot = lib.ObjectTypeInternalSlot;
var ObjectTypeProperty = lib.ObjectTypeProperty;
var ObjectTypeSpreadProperty = lib.ObjectTypeSpreadProperty;
var OpaqueType = lib.OpaqueType;
var OptionalCallExpression = lib.OptionalCallExpression;
var OptionalIndexedAccessType = lib.OptionalIndexedAccessType;
var OptionalMemberExpression = lib.OptionalMemberExpression;
var PATTERNLIKE_TYPES = lib.PATTERNLIKE_TYPES;
var PATTERN_TYPES = lib.PATTERN_TYPES;
var PLACEHOLDERS = lib.PLACEHOLDERS;
var PLACEHOLDERS_ALIAS = lib.PLACEHOLDERS_ALIAS;
var PLACEHOLDERS_FLIPPED_ALIAS = lib.PLACEHOLDERS_FLIPPED_ALIAS;
var PRIVATE_TYPES = lib.PRIVATE_TYPES;
var PROPERTY_TYPES = lib.PROPERTY_TYPES;
var PUREISH_TYPES = lib.PUREISH_TYPES;
var ParenthesizedExpression = lib.ParenthesizedExpression;
var PipelineBareFunction = lib.PipelineBareFunction;
var PipelinePrimaryTopicReference = lib.PipelinePrimaryTopicReference;
var PipelineTopicExpression = lib.PipelineTopicExpression;
var Placeholder = lib.Placeholder;
var PrivateName = lib.PrivateName;
var Program = lib.Program;
var QualifiedTypeIdentifier = lib.QualifiedTypeIdentifier;
var RecordExpression = lib.RecordExpression;
var RegExpLiteral = lib.RegExpLiteral;
var RegexLiteral = lib.RegexLiteral;
var RestElement = lib.RestElement;
var RestProperty = lib.RestProperty;
var ReturnStatement = lib.ReturnStatement;
var SCOPABLE_TYPES = lib.SCOPABLE_TYPES;
var STANDARDIZED_TYPES = lib.STANDARDIZED_TYPES;
var STATEMENT_OR_BLOCK_KEYS = lib.STATEMENT_OR_BLOCK_KEYS;
var STATEMENT_TYPES = lib.STATEMENT_TYPES;
var STRING_UNARY_OPERATORS = lib.STRING_UNARY_OPERATORS;
var SequenceExpression = lib.SequenceExpression;
var SpreadElement = lib.SpreadElement;
var SpreadProperty = lib.SpreadProperty;
var StaticBlock = lib.StaticBlock;
var StringLiteral = lib.StringLiteral;
var StringLiteralTypeAnnotation = lib.StringLiteralTypeAnnotation;
var StringTypeAnnotation = lib.StringTypeAnnotation;
var Super = lib.Super;
var SwitchCase = lib.SwitchCase;
var SwitchStatement = lib.SwitchStatement;
var SymbolTypeAnnotation = lib.SymbolTypeAnnotation;
var TERMINATORLESS_TYPES = lib.TERMINATORLESS_TYPES;
var TSAnyKeyword = lib.TSAnyKeyword;
var TSArrayType = lib.TSArrayType;
var TSAsExpression = lib.TSAsExpression;
var TSBASETYPE_TYPES = lib.TSBASETYPE_TYPES;
var TSBigIntKeyword = lib.TSBigIntKeyword;
var TSBooleanKeyword = lib.TSBooleanKeyword;
var TSCallSignatureDeclaration = lib.TSCallSignatureDeclaration;
var TSConditionalType = lib.TSConditionalType;
var TSConstructSignatureDeclaration = lib.TSConstructSignatureDeclaration;
var TSConstructorType = lib.TSConstructorType;
var TSDeclareFunction = lib.TSDeclareFunction;
var TSDeclareMethod = lib.TSDeclareMethod;
var TSENTITYNAME_TYPES = lib.TSENTITYNAME_TYPES;
var TSEnumDeclaration = lib.TSEnumDeclaration;
var TSEnumMember = lib.TSEnumMember;
var TSExportAssignment = lib.TSExportAssignment;
var TSExpressionWithTypeArguments = lib.TSExpressionWithTypeArguments;
var TSExternalModuleReference = lib.TSExternalModuleReference;
var TSFunctionType = lib.TSFunctionType;
var TSImportEqualsDeclaration = lib.TSImportEqualsDeclaration;
var TSImportType = lib.TSImportType;
var TSIndexSignature = lib.TSIndexSignature;
var TSIndexedAccessType = lib.TSIndexedAccessType;
var TSInferType = lib.TSInferType;
var TSInstantiationExpression = lib.TSInstantiationExpression;
var TSInterfaceBody = lib.TSInterfaceBody;
var TSInterfaceDeclaration = lib.TSInterfaceDeclaration;
var TSIntersectionType = lib.TSIntersectionType;
var TSIntrinsicKeyword = lib.TSIntrinsicKeyword;
var TSLiteralType = lib.TSLiteralType;
var TSMappedType = lib.TSMappedType;
var TSMethodSignature = lib.TSMethodSignature;
var TSModuleBlock = lib.TSModuleBlock;
var TSModuleDeclaration = lib.TSModuleDeclaration;
var TSNamedTupleMember = lib.TSNamedTupleMember;
var TSNamespaceExportDeclaration = lib.TSNamespaceExportDeclaration;
var TSNeverKeyword = lib.TSNeverKeyword;
var TSNonNullExpression = lib.TSNonNullExpression;
var TSNullKeyword = lib.TSNullKeyword;
var TSNumberKeyword = lib.TSNumberKeyword;
var TSObjectKeyword = lib.TSObjectKeyword;
var TSOptionalType = lib.TSOptionalType;
var TSParameterProperty = lib.TSParameterProperty;
var TSParenthesizedType = lib.TSParenthesizedType;
var TSPropertySignature = lib.TSPropertySignature;
var TSQualifiedName = lib.TSQualifiedName;
var TSRestType = lib.TSRestType;
var TSSatisfiesExpression = lib.TSSatisfiesExpression;
var TSStringKeyword = lib.TSStringKeyword;
var TSSymbolKeyword = lib.TSSymbolKeyword;
var TSTYPEELEMENT_TYPES = lib.TSTYPEELEMENT_TYPES;
var TSTYPE_TYPES = lib.TSTYPE_TYPES;
var TSThisType = lib.TSThisType;
var TSTupleType = lib.TSTupleType;
var TSTypeAliasDeclaration = lib.TSTypeAliasDeclaration;
var TSTypeAnnotation = lib.TSTypeAnnotation;
var TSTypeAssertion = lib.TSTypeAssertion;
var TSTypeLiteral = lib.TSTypeLiteral;
var TSTypeOperator = lib.TSTypeOperator;
var TSTypeParameter = lib.TSTypeParameter;
var TSTypeParameterDeclaration = lib.TSTypeParameterDeclaration;
var TSTypeParameterInstantiation = lib.TSTypeParameterInstantiation;
var TSTypePredicate = lib.TSTypePredicate;
var TSTypeQuery = lib.TSTypeQuery;
var TSTypeReference = lib.TSTypeReference;
var TSUndefinedKeyword = lib.TSUndefinedKeyword;
var TSUnionType = lib.TSUnionType;
var TSUnknownKeyword = lib.TSUnknownKeyword;
var TSVoidKeyword = lib.TSVoidKeyword;
var TYPES = lib.TYPES;
var TYPESCRIPT_TYPES = lib.TYPESCRIPT_TYPES;
var TaggedTemplateExpression = lib.TaggedTemplateExpression;
var TemplateElement = lib.TemplateElement;
var TemplateLiteral = lib.TemplateLiteral;
var ThisExpression = lib.ThisExpression;
var ThisTypeAnnotation = lib.ThisTypeAnnotation;
var ThrowStatement = lib.ThrowStatement;
var TopicReference = lib.TopicReference;
var TryStatement = lib.TryStatement;
var TupleExpression = lib.TupleExpression;
var TupleTypeAnnotation = lib.TupleTypeAnnotation;
var TypeAlias = lib.TypeAlias;
var TypeAnnotation = lib.TypeAnnotation;
var TypeCastExpression = lib.TypeCastExpression;
var TypeParameter = lib.TypeParameter;
var TypeParameterDeclaration = lib.TypeParameterDeclaration;
var TypeParameterInstantiation = lib.TypeParameterInstantiation;
var TypeofTypeAnnotation = lib.TypeofTypeAnnotation;
var UNARYLIKE_TYPES = lib.UNARYLIKE_TYPES;
var UNARY_OPERATORS = lib.UNARY_OPERATORS;
var UPDATE_OPERATORS = lib.UPDATE_OPERATORS;
var USERWHITESPACABLE_TYPES = lib.USERWHITESPACABLE_TYPES;
var UnaryExpression = lib.UnaryExpression;
var UnionTypeAnnotation = lib.UnionTypeAnnotation;
var UpdateExpression = lib.UpdateExpression;
var V8IntrinsicIdentifier = lib.V8IntrinsicIdentifier;
var VISITOR_KEYS = lib.VISITOR_KEYS;
var VariableDeclaration = lib.VariableDeclaration;
var VariableDeclarator = lib.VariableDeclarator;
var Variance = lib.Variance;
var VoidTypeAnnotation = lib.VoidTypeAnnotation;
var WHILE_TYPES = lib.WHILE_TYPES;
var WhileStatement = lib.WhileStatement;
var WithStatement = lib.WithStatement;
var YieldExpression = lib.YieldExpression;
var __internal__deprecationWarning = lib.__internal__deprecationWarning;
var addComment = lib.addComment;
var addComments = lib.addComments;
var anyTypeAnnotation = lib.anyTypeAnnotation;
var appendToMemberExpression = lib.appendToMemberExpression;
var argumentPlaceholder = lib.argumentPlaceholder;
var arrayExpression = lib.arrayExpression;
var arrayPattern = lib.arrayPattern;
var arrayTypeAnnotation = lib.arrayTypeAnnotation;
var arrowFunctionExpression = lib.arrowFunctionExpression;
var assertAccessor = lib.assertAccessor;
var assertAnyTypeAnnotation = lib.assertAnyTypeAnnotation;
var assertArgumentPlaceholder = lib.assertArgumentPlaceholder;
var assertArrayExpression = lib.assertArrayExpression;
var assertArrayPattern = lib.assertArrayPattern;
var assertArrayTypeAnnotation = lib.assertArrayTypeAnnotation;
var assertArrowFunctionExpression = lib.assertArrowFunctionExpression;
var assertAssignmentExpression = lib.assertAssignmentExpression;
var assertAssignmentPattern = lib.assertAssignmentPattern;
var assertAwaitExpression = lib.assertAwaitExpression;
var assertBigIntLiteral = lib.assertBigIntLiteral;
var assertBinary = lib.assertBinary;
var assertBinaryExpression = lib.assertBinaryExpression;
var assertBindExpression = lib.assertBindExpression;
var assertBlock = lib.assertBlock;
var assertBlockParent = lib.assertBlockParent;
var assertBlockStatement = lib.assertBlockStatement;
var assertBooleanLiteral = lib.assertBooleanLiteral;
var assertBooleanLiteralTypeAnnotation = lib.assertBooleanLiteralTypeAnnotation;
var assertBooleanTypeAnnotation = lib.assertBooleanTypeAnnotation;
var assertBreakStatement = lib.assertBreakStatement;
var assertCallExpression = lib.assertCallExpression;
var assertCatchClause = lib.assertCatchClause;
var assertClass = lib.assertClass;
var assertClassAccessorProperty = lib.assertClassAccessorProperty;
var assertClassBody = lib.assertClassBody;
var assertClassDeclaration = lib.assertClassDeclaration;
var assertClassExpression = lib.assertClassExpression;
var assertClassImplements = lib.assertClassImplements;
var assertClassMethod = lib.assertClassMethod;
var assertClassPrivateMethod = lib.assertClassPrivateMethod;
var assertClassPrivateProperty = lib.assertClassPrivateProperty;
var assertClassProperty = lib.assertClassProperty;
var assertCompletionStatement = lib.assertCompletionStatement;
var assertConditional = lib.assertConditional;
var assertConditionalExpression = lib.assertConditionalExpression;
var assertContinueStatement = lib.assertContinueStatement;
var assertDebuggerStatement = lib.assertDebuggerStatement;
var assertDecimalLiteral = lib.assertDecimalLiteral;
var assertDeclaration = lib.assertDeclaration;
var assertDeclareClass = lib.assertDeclareClass;
var assertDeclareExportAllDeclaration = lib.assertDeclareExportAllDeclaration;
var assertDeclareExportDeclaration = lib.assertDeclareExportDeclaration;
var assertDeclareFunction = lib.assertDeclareFunction;
var assertDeclareInterface = lib.assertDeclareInterface;
var assertDeclareModule = lib.assertDeclareModule;
var assertDeclareModuleExports = lib.assertDeclareModuleExports;
var assertDeclareOpaqueType = lib.assertDeclareOpaqueType;
var assertDeclareTypeAlias = lib.assertDeclareTypeAlias;
var assertDeclareVariable = lib.assertDeclareVariable;
var assertDeclaredPredicate = lib.assertDeclaredPredicate;
var assertDecorator = lib.assertDecorator;
var assertDirective = lib.assertDirective;
var assertDirectiveLiteral = lib.assertDirectiveLiteral;
var assertDoExpression = lib.assertDoExpression;
var assertDoWhileStatement = lib.assertDoWhileStatement;
var assertEmptyStatement = lib.assertEmptyStatement;
var assertEmptyTypeAnnotation = lib.assertEmptyTypeAnnotation;
var assertEnumBody = lib.assertEnumBody;
var assertEnumBooleanBody = lib.assertEnumBooleanBody;
var assertEnumBooleanMember = lib.assertEnumBooleanMember;
var assertEnumDeclaration = lib.assertEnumDeclaration;
var assertEnumDefaultedMember = lib.assertEnumDefaultedMember;
var assertEnumMember = lib.assertEnumMember;
var assertEnumNumberBody = lib.assertEnumNumberBody;
var assertEnumNumberMember = lib.assertEnumNumberMember;
var assertEnumStringBody = lib.assertEnumStringBody;
var assertEnumStringMember = lib.assertEnumStringMember;
var assertEnumSymbolBody = lib.assertEnumSymbolBody;
var assertExistsTypeAnnotation = lib.assertExistsTypeAnnotation;
var assertExportAllDeclaration = lib.assertExportAllDeclaration;
var assertExportDeclaration = lib.assertExportDeclaration;
var assertExportDefaultDeclaration = lib.assertExportDefaultDeclaration;
var assertExportDefaultSpecifier = lib.assertExportDefaultSpecifier;
var assertExportNamedDeclaration = lib.assertExportNamedDeclaration;
var assertExportNamespaceSpecifier = lib.assertExportNamespaceSpecifier;
var assertExportSpecifier = lib.assertExportSpecifier;
var assertExpression = lib.assertExpression;
var assertExpressionStatement = lib.assertExpressionStatement;
var assertExpressionWrapper = lib.assertExpressionWrapper;
var assertFile = lib.assertFile;
var assertFlow = lib.assertFlow;
var assertFlowBaseAnnotation = lib.assertFlowBaseAnnotation;
var assertFlowDeclaration = lib.assertFlowDeclaration;
var assertFlowPredicate = lib.assertFlowPredicate;
var assertFlowType = lib.assertFlowType;
var assertFor = lib.assertFor;
var assertForInStatement = lib.assertForInStatement;
var assertForOfStatement = lib.assertForOfStatement;
var assertForStatement = lib.assertForStatement;
var assertForXStatement = lib.assertForXStatement;
var assertFunction = lib.assertFunction;
var assertFunctionDeclaration = lib.assertFunctionDeclaration;
var assertFunctionExpression = lib.assertFunctionExpression;
var assertFunctionParent = lib.assertFunctionParent;
var assertFunctionTypeAnnotation = lib.assertFunctionTypeAnnotation;
var assertFunctionTypeParam = lib.assertFunctionTypeParam;
var assertGenericTypeAnnotation = lib.assertGenericTypeAnnotation;
var assertIdentifier = lib.assertIdentifier;
var assertIfStatement = lib.assertIfStatement;
var assertImmutable = lib.assertImmutable;
var assertImport = lib.assertImport;
var assertImportAttribute = lib.assertImportAttribute;
var assertImportDeclaration = lib.assertImportDeclaration;
var assertImportDefaultSpecifier = lib.assertImportDefaultSpecifier;
var assertImportNamespaceSpecifier = lib.assertImportNamespaceSpecifier;
var assertImportOrExportDeclaration = lib.assertImportOrExportDeclaration;
var assertImportSpecifier = lib.assertImportSpecifier;
var assertIndexedAccessType = lib.assertIndexedAccessType;
var assertInferredPredicate = lib.assertInferredPredicate;
var assertInterfaceDeclaration = lib.assertInterfaceDeclaration;
var assertInterfaceExtends = lib.assertInterfaceExtends;
var assertInterfaceTypeAnnotation = lib.assertInterfaceTypeAnnotation;
var assertInterpreterDirective = lib.assertInterpreterDirective;
var assertIntersectionTypeAnnotation = lib.assertIntersectionTypeAnnotation;
var assertJSX = lib.assertJSX;
var assertJSXAttribute = lib.assertJSXAttribute;
var assertJSXClosingElement = lib.assertJSXClosingElement;
var assertJSXClosingFragment = lib.assertJSXClosingFragment;
var assertJSXElement = lib.assertJSXElement;
var assertJSXEmptyExpression = lib.assertJSXEmptyExpression;
var assertJSXExpressionContainer = lib.assertJSXExpressionContainer;
var assertJSXFragment = lib.assertJSXFragment;
var assertJSXIdentifier = lib.assertJSXIdentifier;
var assertJSXMemberExpression = lib.assertJSXMemberExpression;
var assertJSXNamespacedName = lib.assertJSXNamespacedName;
var assertJSXOpeningElement = lib.assertJSXOpeningElement;
var assertJSXOpeningFragment = lib.assertJSXOpeningFragment;
var assertJSXSpreadAttribute = lib.assertJSXSpreadAttribute;
var assertJSXSpreadChild = lib.assertJSXSpreadChild;
var assertJSXText = lib.assertJSXText;
var assertLVal = lib.assertLVal;
var assertLabeledStatement = lib.assertLabeledStatement;
var assertLiteral = lib.assertLiteral;
var assertLogicalExpression = lib.assertLogicalExpression;
var assertLoop = lib.assertLoop;
var assertMemberExpression = lib.assertMemberExpression;
var assertMetaProperty = lib.assertMetaProperty;
var assertMethod = lib.assertMethod;
var assertMiscellaneous = lib.assertMiscellaneous;
var assertMixedTypeAnnotation = lib.assertMixedTypeAnnotation;
var assertModuleDeclaration = lib.assertModuleDeclaration;
var assertModuleExpression = lib.assertModuleExpression;
var assertModuleSpecifier = lib.assertModuleSpecifier;
var assertNewExpression = lib.assertNewExpression;
var assertNode = lib.assertNode;
var assertNoop = lib.assertNoop;
var assertNullLiteral = lib.assertNullLiteral;
var assertNullLiteralTypeAnnotation = lib.assertNullLiteralTypeAnnotation;
var assertNullableTypeAnnotation = lib.assertNullableTypeAnnotation;
var assertNumberLiteral = lib.assertNumberLiteral;
var assertNumberLiteralTypeAnnotation = lib.assertNumberLiteralTypeAnnotation;
var assertNumberTypeAnnotation = lib.assertNumberTypeAnnotation;
var assertNumericLiteral = lib.assertNumericLiteral;
var assertObjectExpression = lib.assertObjectExpression;
var assertObjectMember = lib.assertObjectMember;
var assertObjectMethod = lib.assertObjectMethod;
var assertObjectPattern = lib.assertObjectPattern;
var assertObjectProperty = lib.assertObjectProperty;
var assertObjectTypeAnnotation = lib.assertObjectTypeAnnotation;
var assertObjectTypeCallProperty = lib.assertObjectTypeCallProperty;
var assertObjectTypeIndexer = lib.assertObjectTypeIndexer;
var assertObjectTypeInternalSlot = lib.assertObjectTypeInternalSlot;
var assertObjectTypeProperty = lib.assertObjectTypeProperty;
var assertObjectTypeSpreadProperty = lib.assertObjectTypeSpreadProperty;
var assertOpaqueType = lib.assertOpaqueType;
var assertOptionalCallExpression = lib.assertOptionalCallExpression;
var assertOptionalIndexedAccessType = lib.assertOptionalIndexedAccessType;
var assertOptionalMemberExpression = lib.assertOptionalMemberExpression;
var assertParenthesizedExpression = lib.assertParenthesizedExpression;
var assertPattern = lib.assertPattern;
var assertPatternLike = lib.assertPatternLike;
var assertPipelineBareFunction = lib.assertPipelineBareFunction;
var assertPipelinePrimaryTopicReference = lib.assertPipelinePrimaryTopicReference;
var assertPipelineTopicExpression = lib.assertPipelineTopicExpression;
var assertPlaceholder = lib.assertPlaceholder;
var assertPrivate = lib.assertPrivate;
var assertPrivateName = lib.assertPrivateName;
var assertProgram = lib.assertProgram;
var assertProperty = lib.assertProperty;
var assertPureish = lib.assertPureish;
var assertQualifiedTypeIdentifier = lib.assertQualifiedTypeIdentifier;
var assertRecordExpression = lib.assertRecordExpression;
var assertRegExpLiteral = lib.assertRegExpLiteral;
var assertRegexLiteral = lib.assertRegexLiteral;
var assertRestElement = lib.assertRestElement;
var assertRestProperty = lib.assertRestProperty;
var assertReturnStatement = lib.assertReturnStatement;
var assertScopable = lib.assertScopable;
var assertSequenceExpression = lib.assertSequenceExpression;
var assertSpreadElement = lib.assertSpreadElement;
var assertSpreadProperty = lib.assertSpreadProperty;
var assertStandardized = lib.assertStandardized;
var assertStatement = lib.assertStatement;
var assertStaticBlock = lib.assertStaticBlock;
var assertStringLiteral = lib.assertStringLiteral;
var assertStringLiteralTypeAnnotation = lib.assertStringLiteralTypeAnnotation;
var assertStringTypeAnnotation = lib.assertStringTypeAnnotation;
var assertSuper = lib.assertSuper;
var assertSwitchCase = lib.assertSwitchCase;
var assertSwitchStatement = lib.assertSwitchStatement;
var assertSymbolTypeAnnotation = lib.assertSymbolTypeAnnotation;
var assertTSAnyKeyword = lib.assertTSAnyKeyword;
var assertTSArrayType = lib.assertTSArrayType;
var assertTSAsExpression = lib.assertTSAsExpression;
var assertTSBaseType = lib.assertTSBaseType;
var assertTSBigIntKeyword = lib.assertTSBigIntKeyword;
var assertTSBooleanKeyword = lib.assertTSBooleanKeyword;
var assertTSCallSignatureDeclaration = lib.assertTSCallSignatureDeclaration;
var assertTSConditionalType = lib.assertTSConditionalType;
var assertTSConstructSignatureDeclaration = lib.assertTSConstructSignatureDeclaration;
var assertTSConstructorType = lib.assertTSConstructorType;
var assertTSDeclareFunction = lib.assertTSDeclareFunction;
var assertTSDeclareMethod = lib.assertTSDeclareMethod;
var assertTSEntityName = lib.assertTSEntityName;
var assertTSEnumDeclaration = lib.assertTSEnumDeclaration;
var assertTSEnumMember = lib.assertTSEnumMember;
var assertTSExportAssignment = lib.assertTSExportAssignment;
var assertTSExpressionWithTypeArguments = lib.assertTSExpressionWithTypeArguments;
var assertTSExternalModuleReference = lib.assertTSExternalModuleReference;
var assertTSFunctionType = lib.assertTSFunctionType;
var assertTSImportEqualsDeclaration = lib.assertTSImportEqualsDeclaration;
var assertTSImportType = lib.assertTSImportType;
var assertTSIndexSignature = lib.assertTSIndexSignature;
var assertTSIndexedAccessType = lib.assertTSIndexedAccessType;
var assertTSInferType = lib.assertTSInferType;
var assertTSInstantiationExpression = lib.assertTSInstantiationExpression;
var assertTSInterfaceBody = lib.assertTSInterfaceBody;
var assertTSInterfaceDeclaration = lib.assertTSInterfaceDeclaration;
var assertTSIntersectionType = lib.assertTSIntersectionType;
var assertTSIntrinsicKeyword = lib.assertTSIntrinsicKeyword;
var assertTSLiteralType = lib.assertTSLiteralType;
var assertTSMappedType = lib.assertTSMappedType;
var assertTSMethodSignature = lib.assertTSMethodSignature;
var assertTSModuleBlock = lib.assertTSModuleBlock;
var assertTSModuleDeclaration = lib.assertTSModuleDeclaration;
var assertTSNamedTupleMember = lib.assertTSNamedTupleMember;
var assertTSNamespaceExportDeclaration = lib.assertTSNamespaceExportDeclaration;
var assertTSNeverKeyword = lib.assertTSNeverKeyword;
var assertTSNonNullExpression = lib.assertTSNonNullExpression;
var assertTSNullKeyword = lib.assertTSNullKeyword;
var assertTSNumberKeyword = lib.assertTSNumberKeyword;
var assertTSObjectKeyword = lib.assertTSObjectKeyword;
var assertTSOptionalType = lib.assertTSOptionalType;
var assertTSParameterProperty = lib.assertTSParameterProperty;
var assertTSParenthesizedType = lib.assertTSParenthesizedType;
var assertTSPropertySignature = lib.assertTSPropertySignature;
var assertTSQualifiedName = lib.assertTSQualifiedName;
var assertTSRestType = lib.assertTSRestType;
var assertTSSatisfiesExpression = lib.assertTSSatisfiesExpression;
var assertTSStringKeyword = lib.assertTSStringKeyword;
var assertTSSymbolKeyword = lib.assertTSSymbolKeyword;
var assertTSThisType = lib.assertTSThisType;
var assertTSTupleType = lib.assertTSTupleType;
var assertTSType = lib.assertTSType;
var assertTSTypeAliasDeclaration = lib.assertTSTypeAliasDeclaration;
var assertTSTypeAnnotation = lib.assertTSTypeAnnotation;
var assertTSTypeAssertion = lib.assertTSTypeAssertion;
var assertTSTypeElement = lib.assertTSTypeElement;
var assertTSTypeLiteral = lib.assertTSTypeLiteral;
var assertTSTypeOperator = lib.assertTSTypeOperator;
var assertTSTypeParameter = lib.assertTSTypeParameter;
var assertTSTypeParameterDeclaration = lib.assertTSTypeParameterDeclaration;
var assertTSTypeParameterInstantiation = lib.assertTSTypeParameterInstantiation;
var assertTSTypePredicate = lib.assertTSTypePredicate;
var assertTSTypeQuery = lib.assertTSTypeQuery;
var assertTSTypeReference = lib.assertTSTypeReference;
var assertTSUndefinedKeyword = lib.assertTSUndefinedKeyword;
var assertTSUnionType = lib.assertTSUnionType;
var assertTSUnknownKeyword = lib.assertTSUnknownKeyword;
var assertTSVoidKeyword = lib.assertTSVoidKeyword;
var assertTaggedTemplateExpression = lib.assertTaggedTemplateExpression;
var assertTemplateElement = lib.assertTemplateElement;
var assertTemplateLiteral = lib.assertTemplateLiteral;
var assertTerminatorless = lib.assertTerminatorless;
var assertThisExpression = lib.assertThisExpression;
var assertThisTypeAnnotation = lib.assertThisTypeAnnotation;
var assertThrowStatement = lib.assertThrowStatement;
var assertTopicReference = lib.assertTopicReference;
var assertTryStatement = lib.assertTryStatement;
var assertTupleExpression = lib.assertTupleExpression;
var assertTupleTypeAnnotation = lib.assertTupleTypeAnnotation;
var assertTypeAlias = lib.assertTypeAlias;
var assertTypeAnnotation = lib.assertTypeAnnotation;
var assertTypeCastExpression = lib.assertTypeCastExpression;
var assertTypeParameter = lib.assertTypeParameter;
var assertTypeParameterDeclaration = lib.assertTypeParameterDeclaration;
var assertTypeParameterInstantiation = lib.assertTypeParameterInstantiation;
var assertTypeScript = lib.assertTypeScript;
var assertTypeofTypeAnnotation = lib.assertTypeofTypeAnnotation;
var assertUnaryExpression = lib.assertUnaryExpression;
var assertUnaryLike = lib.assertUnaryLike;
var assertUnionTypeAnnotation = lib.assertUnionTypeAnnotation;
var assertUpdateExpression = lib.assertUpdateExpression;
var assertUserWhitespacable = lib.assertUserWhitespacable;
var assertV8IntrinsicIdentifier = lib.assertV8IntrinsicIdentifier;
var assertVariableDeclaration = lib.assertVariableDeclaration;
var assertVariableDeclarator = lib.assertVariableDeclarator;
var assertVariance = lib.assertVariance;
var assertVoidTypeAnnotation = lib.assertVoidTypeAnnotation;
var assertWhile = lib.assertWhile;
var assertWhileStatement = lib.assertWhileStatement;
var assertWithStatement = lib.assertWithStatement;
var assertYieldExpression = lib.assertYieldExpression;
var assignmentExpression = lib.assignmentExpression;
var assignmentPattern = lib.assignmentPattern;
var awaitExpression = lib.awaitExpression;
var bigIntLiteral = lib.bigIntLiteral;
var binaryExpression = lib.binaryExpression;
var bindExpression = lib.bindExpression;
var blockStatement = lib.blockStatement;
var booleanLiteral = lib.booleanLiteral;
var booleanLiteralTypeAnnotation = lib.booleanLiteralTypeAnnotation;
var booleanTypeAnnotation = lib.booleanTypeAnnotation;
var breakStatement = lib.breakStatement;
var buildMatchMemberExpression = lib.buildMatchMemberExpression;
var callExpression = lib.callExpression;
var catchClause = lib.catchClause;
var classAccessorProperty = lib.classAccessorProperty;
var classBody = lib.classBody;
var classDeclaration = lib.classDeclaration;
var classExpression = lib.classExpression;
var classImplements = lib.classImplements;
var classMethod = lib.classMethod;
var classPrivateMethod = lib.classPrivateMethod;
var classPrivateProperty = lib.classPrivateProperty;
var classProperty = lib.classProperty;
var clone = lib.clone;
var cloneDeep = lib.cloneDeep;
var cloneDeepWithoutLoc = lib.cloneDeepWithoutLoc;
var cloneNode = lib.cloneNode;
var cloneWithoutLoc = lib.cloneWithoutLoc;
var conditionalExpression = lib.conditionalExpression;
var continueStatement = lib.continueStatement;
var createFlowUnionType = lib.createFlowUnionType;
var createTSUnionType = lib.createTSUnionType;
var createTypeAnnotationBasedOnTypeof = lib.createTypeAnnotationBasedOnTypeof;
var createUnionTypeAnnotation = lib.createUnionTypeAnnotation;
var debuggerStatement = lib.debuggerStatement;
var decimalLiteral = lib.decimalLiteral;
var declareClass = lib.declareClass;
var declareExportAllDeclaration = lib.declareExportAllDeclaration;
var declareExportDeclaration = lib.declareExportDeclaration;
var declareFunction = lib.declareFunction;
var declareInterface = lib.declareInterface;
var declareModule = lib.declareModule;
var declareModuleExports = lib.declareModuleExports;
var declareOpaqueType = lib.declareOpaqueType;
var declareTypeAlias = lib.declareTypeAlias;
var declareVariable = lib.declareVariable;
var declaredPredicate = lib.declaredPredicate;
var decorator = lib.decorator;
export default __pika_web_default_export_for_treeshaking__;
var directive = lib.directive;
var directiveLiteral = lib.directiveLiteral;
var doExpression = lib.doExpression;
var doWhileStatement = lib.doWhileStatement;
var emptyStatement = lib.emptyStatement;
var emptyTypeAnnotation = lib.emptyTypeAnnotation;
var ensureBlock = lib.ensureBlock;
var enumBooleanBody = lib.enumBooleanBody;
var enumBooleanMember = lib.enumBooleanMember;
var enumDeclaration = lib.enumDeclaration;
var enumDefaultedMember = lib.enumDefaultedMember;
var enumNumberBody = lib.enumNumberBody;
var enumNumberMember = lib.enumNumberMember;
var enumStringBody = lib.enumStringBody;
var enumStringMember = lib.enumStringMember;
var enumSymbolBody = lib.enumSymbolBody;
var existsTypeAnnotation = lib.existsTypeAnnotation;
var exportAllDeclaration = lib.exportAllDeclaration;
var exportDefaultDeclaration = lib.exportDefaultDeclaration;
var exportDefaultSpecifier = lib.exportDefaultSpecifier;
var exportNamedDeclaration = lib.exportNamedDeclaration;
var exportNamespaceSpecifier = lib.exportNamespaceSpecifier;
var exportSpecifier = lib.exportSpecifier;
var expressionStatement = lib.expressionStatement;
var file = lib.file;
var forInStatement = lib.forInStatement;
var forOfStatement = lib.forOfStatement;
var forStatement = lib.forStatement;
var functionDeclaration = lib.functionDeclaration;
var functionExpression = lib.functionExpression;
var functionTypeAnnotation = lib.functionTypeAnnotation;
var functionTypeParam = lib.functionTypeParam;
var genericTypeAnnotation = lib.genericTypeAnnotation;
var getBindingIdentifiers = lib.getBindingIdentifiers;
var getOuterBindingIdentifiers = lib.getOuterBindingIdentifiers;
var identifier = lib.identifier;
var ifStatement = lib.ifStatement;
var importAttribute = lib.importAttribute;
var importDeclaration = lib.importDeclaration;
var importDefaultSpecifier = lib.importDefaultSpecifier;
var importNamespaceSpecifier = lib.importNamespaceSpecifier;
var importSpecifier = lib.importSpecifier;
var indexedAccessType = lib.indexedAccessType;
var inferredPredicate = lib.inferredPredicate;
var inheritInnerComments = lib.inheritInnerComments;
var inheritLeadingComments = lib.inheritLeadingComments;
var inheritTrailingComments = lib.inheritTrailingComments;
var inherits = lib.inherits;
var inheritsComments = lib.inheritsComments;
var interfaceDeclaration = lib.interfaceDeclaration;
var interfaceExtends = lib.interfaceExtends;
var interfaceTypeAnnotation = lib.interfaceTypeAnnotation;
var interpreterDirective = lib.interpreterDirective;
var intersectionTypeAnnotation = lib.intersectionTypeAnnotation;
var is = lib.is;
var isAccessor = lib.isAccessor;
var isAnyTypeAnnotation = lib.isAnyTypeAnnotation;
var isArgumentPlaceholder = lib.isArgumentPlaceholder;
var isArrayExpression = lib.isArrayExpression;
var isArrayPattern = lib.isArrayPattern;
var isArrayTypeAnnotation = lib.isArrayTypeAnnotation;
var isArrowFunctionExpression = lib.isArrowFunctionExpression;
var isAssignmentExpression = lib.isAssignmentExpression;
var isAssignmentPattern = lib.isAssignmentPattern;
var isAwaitExpression = lib.isAwaitExpression;
var isBigIntLiteral = lib.isBigIntLiteral;
var isBinary = lib.isBinary;
var isBinaryExpression = lib.isBinaryExpression;
var isBindExpression = lib.isBindExpression;
var isBinding = lib.isBinding;
var isBlock = lib.isBlock;
var isBlockParent = lib.isBlockParent;
var isBlockScoped = lib.isBlockScoped;
var isBlockStatement = lib.isBlockStatement;
var isBooleanLiteral = lib.isBooleanLiteral;
var isBooleanLiteralTypeAnnotation = lib.isBooleanLiteralTypeAnnotation;
var isBooleanTypeAnnotation = lib.isBooleanTypeAnnotation;
var isBreakStatement = lib.isBreakStatement;
var isCallExpression = lib.isCallExpression;
var isCatchClause = lib.isCatchClause;
var isClass = lib.isClass;
var isClassAccessorProperty = lib.isClassAccessorProperty;
var isClassBody = lib.isClassBody;
var isClassDeclaration = lib.isClassDeclaration;
var isClassExpression = lib.isClassExpression;
var isClassImplements = lib.isClassImplements;
var isClassMethod = lib.isClassMethod;
var isClassPrivateMethod = lib.isClassPrivateMethod;
var isClassPrivateProperty = lib.isClassPrivateProperty;
var isClassProperty = lib.isClassProperty;
var isCompletionStatement = lib.isCompletionStatement;
var isConditional = lib.isConditional;
var isConditionalExpression = lib.isConditionalExpression;
var isContinueStatement = lib.isContinueStatement;
var isDebuggerStatement = lib.isDebuggerStatement;
var isDecimalLiteral = lib.isDecimalLiteral;
var isDeclaration = lib.isDeclaration;
var isDeclareClass = lib.isDeclareClass;
var isDeclareExportAllDeclaration = lib.isDeclareExportAllDeclaration;
var isDeclareExportDeclaration = lib.isDeclareExportDeclaration;
var isDeclareFunction = lib.isDeclareFunction;
var isDeclareInterface = lib.isDeclareInterface;
var isDeclareModule = lib.isDeclareModule;
var isDeclareModuleExports = lib.isDeclareModuleExports;
var isDeclareOpaqueType = lib.isDeclareOpaqueType;
var isDeclareTypeAlias = lib.isDeclareTypeAlias;
var isDeclareVariable = lib.isDeclareVariable;
var isDeclaredPredicate = lib.isDeclaredPredicate;
var isDecorator = lib.isDecorator;
var isDirective = lib.isDirective;
var isDirectiveLiteral = lib.isDirectiveLiteral;
var isDoExpression = lib.isDoExpression;
var isDoWhileStatement = lib.isDoWhileStatement;
var isEmptyStatement = lib.isEmptyStatement;
var isEmptyTypeAnnotation = lib.isEmptyTypeAnnotation;
var isEnumBody = lib.isEnumBody;
var isEnumBooleanBody = lib.isEnumBooleanBody;
var isEnumBooleanMember = lib.isEnumBooleanMember;
var isEnumDeclaration = lib.isEnumDeclaration;
var isEnumDefaultedMember = lib.isEnumDefaultedMember;
var isEnumMember = lib.isEnumMember;
var isEnumNumberBody = lib.isEnumNumberBody;
var isEnumNumberMember = lib.isEnumNumberMember;
var isEnumStringBody = lib.isEnumStringBody;
var isEnumStringMember = lib.isEnumStringMember;
var isEnumSymbolBody = lib.isEnumSymbolBody;
var isExistsTypeAnnotation = lib.isExistsTypeAnnotation;
var isExportAllDeclaration = lib.isExportAllDeclaration;
var isExportDeclaration = lib.isExportDeclaration;
var isExportDefaultDeclaration = lib.isExportDefaultDeclaration;
var isExportDefaultSpecifier = lib.isExportDefaultSpecifier;
var isExportNamedDeclaration = lib.isExportNamedDeclaration;
var isExportNamespaceSpecifier = lib.isExportNamespaceSpecifier;
var isExportSpecifier = lib.isExportSpecifier;
var isExpression = lib.isExpression;
var isExpressionStatement = lib.isExpressionStatement;
var isExpressionWrapper = lib.isExpressionWrapper;
var isFile = lib.isFile;
var isFlow = lib.isFlow;
var isFlowBaseAnnotation = lib.isFlowBaseAnnotation;
var isFlowDeclaration = lib.isFlowDeclaration;
var isFlowPredicate = lib.isFlowPredicate;
var isFlowType = lib.isFlowType;
var isFor = lib.isFor;
var isForInStatement = lib.isForInStatement;
var isForOfStatement = lib.isForOfStatement;
var isForStatement = lib.isForStatement;
var isForXStatement = lib.isForXStatement;
var isFunction = lib.isFunction;
var isFunctionDeclaration = lib.isFunctionDeclaration;
var isFunctionExpression = lib.isFunctionExpression;
var isFunctionParent = lib.isFunctionParent;
var isFunctionTypeAnnotation = lib.isFunctionTypeAnnotation;
var isFunctionTypeParam = lib.isFunctionTypeParam;
var isGenericTypeAnnotation = lib.isGenericTypeAnnotation;
var isIdentifier = lib.isIdentifier;
var isIfStatement = lib.isIfStatement;
var isImmutable = lib.isImmutable;
var isImport = lib.isImport;
var isImportAttribute = lib.isImportAttribute;
var isImportDeclaration = lib.isImportDeclaration;
var isImportDefaultSpecifier = lib.isImportDefaultSpecifier;
var isImportNamespaceSpecifier = lib.isImportNamespaceSpecifier;
var isImportOrExportDeclaration = lib.isImportOrExportDeclaration;
var isImportSpecifier = lib.isImportSpecifier;
var isIndexedAccessType = lib.isIndexedAccessType;
var isInferredPredicate = lib.isInferredPredicate;
var isInterfaceDeclaration = lib.isInterfaceDeclaration;
var isInterfaceExtends = lib.isInterfaceExtends;
var isInterfaceTypeAnnotation = lib.isInterfaceTypeAnnotation;
var isInterpreterDirective = lib.isInterpreterDirective;
var isIntersectionTypeAnnotation = lib.isIntersectionTypeAnnotation;
var isJSX = lib.isJSX;
var isJSXAttribute = lib.isJSXAttribute;
var isJSXClosingElement = lib.isJSXClosingElement;
var isJSXClosingFragment = lib.isJSXClosingFragment;
var isJSXElement = lib.isJSXElement;
var isJSXEmptyExpression = lib.isJSXEmptyExpression;
var isJSXExpressionContainer = lib.isJSXExpressionContainer;
var isJSXFragment = lib.isJSXFragment;
var isJSXIdentifier = lib.isJSXIdentifier;
var isJSXMemberExpression = lib.isJSXMemberExpression;
var isJSXNamespacedName = lib.isJSXNamespacedName;
var isJSXOpeningElement = lib.isJSXOpeningElement;
var isJSXOpeningFragment = lib.isJSXOpeningFragment;
var isJSXSpreadAttribute = lib.isJSXSpreadAttribute;
var isJSXSpreadChild = lib.isJSXSpreadChild;
var isJSXText = lib.isJSXText;
var isLVal = lib.isLVal;
var isLabeledStatement = lib.isLabeledStatement;
var isLet = lib.isLet;
var isLiteral = lib.isLiteral;
var isLogicalExpression = lib.isLogicalExpression;
var isLoop = lib.isLoop;
var isMemberExpression = lib.isMemberExpression;
var isMetaProperty = lib.isMetaProperty;
var isMethod = lib.isMethod;
var isMiscellaneous = lib.isMiscellaneous;
var isMixedTypeAnnotation = lib.isMixedTypeAnnotation;
var isModuleDeclaration = lib.isModuleDeclaration;
var isModuleExpression = lib.isModuleExpression;
var isModuleSpecifier = lib.isModuleSpecifier;
var isNewExpression = lib.isNewExpression;
var isNode = lib.isNode;
var isNodesEquivalent = lib.isNodesEquivalent;
var isNoop = lib.isNoop;
var isNullLiteral = lib.isNullLiteral;
var isNullLiteralTypeAnnotation = lib.isNullLiteralTypeAnnotation;
var isNullableTypeAnnotation = lib.isNullableTypeAnnotation;
var isNumberLiteral = lib.isNumberLiteral;
var isNumberLiteralTypeAnnotation = lib.isNumberLiteralTypeAnnotation;
var isNumberTypeAnnotation = lib.isNumberTypeAnnotation;
var isNumericLiteral = lib.isNumericLiteral;
var isObjectExpression = lib.isObjectExpression;
var isObjectMember = lib.isObjectMember;
var isObjectMethod = lib.isObjectMethod;
var isObjectPattern = lib.isObjectPattern;
var isObjectProperty = lib.isObjectProperty;
var isObjectTypeAnnotation = lib.isObjectTypeAnnotation;
var isObjectTypeCallProperty = lib.isObjectTypeCallProperty;
var isObjectTypeIndexer = lib.isObjectTypeIndexer;
var isObjectTypeInternalSlot = lib.isObjectTypeInternalSlot;
var isObjectTypeProperty = lib.isObjectTypeProperty;
var isObjectTypeSpreadProperty = lib.isObjectTypeSpreadProperty;
var isOpaqueType = lib.isOpaqueType;
var isOptionalCallExpression = lib.isOptionalCallExpression;
var isOptionalIndexedAccessType = lib.isOptionalIndexedAccessType;
var isOptionalMemberExpression = lib.isOptionalMemberExpression;
var isParenthesizedExpression = lib.isParenthesizedExpression;
var isPattern = lib.isPattern;
var isPatternLike = lib.isPatternLike;
var isPipelineBareFunction = lib.isPipelineBareFunction;
var isPipelinePrimaryTopicReference = lib.isPipelinePrimaryTopicReference;
var isPipelineTopicExpression = lib.isPipelineTopicExpression;
var isPlaceholder = lib.isPlaceholder;
var isPlaceholderType = lib.isPlaceholderType;
var isPrivate = lib.isPrivate;
var isPrivateName = lib.isPrivateName;
var isProgram = lib.isProgram;
var isProperty = lib.isProperty;
var isPureish = lib.isPureish;
var isQualifiedTypeIdentifier = lib.isQualifiedTypeIdentifier;
var isRecordExpression = lib.isRecordExpression;
var isReferenced = lib.isReferenced;
var isRegExpLiteral = lib.isRegExpLiteral;
var isRegexLiteral = lib.isRegexLiteral;
var isRestElement = lib.isRestElement;
var isRestProperty = lib.isRestProperty;
var isReturnStatement = lib.isReturnStatement;
var isScopable = lib.isScopable;
var isScope = lib.isScope;
var isSequenceExpression = lib.isSequenceExpression;
var isSpecifierDefault = lib.isSpecifierDefault;
var isSpreadElement = lib.isSpreadElement;
var isSpreadProperty = lib.isSpreadProperty;
var isStandardized = lib.isStandardized;
var isStatement = lib.isStatement;
var isStaticBlock = lib.isStaticBlock;
var isStringLiteral = lib.isStringLiteral;
var isStringLiteralTypeAnnotation = lib.isStringLiteralTypeAnnotation;
var isStringTypeAnnotation = lib.isStringTypeAnnotation;
var isSuper = lib.isSuper;
var isSwitchCase = lib.isSwitchCase;
var isSwitchStatement = lib.isSwitchStatement;
var isSymbolTypeAnnotation = lib.isSymbolTypeAnnotation;
var isTSAnyKeyword = lib.isTSAnyKeyword;
var isTSArrayType = lib.isTSArrayType;
var isTSAsExpression = lib.isTSAsExpression;
var isTSBaseType = lib.isTSBaseType;
var isTSBigIntKeyword = lib.isTSBigIntKeyword;
var isTSBooleanKeyword = lib.isTSBooleanKeyword;
var isTSCallSignatureDeclaration = lib.isTSCallSignatureDeclaration;
var isTSConditionalType = lib.isTSConditionalType;
var isTSConstructSignatureDeclaration = lib.isTSConstructSignatureDeclaration;
var isTSConstructorType = lib.isTSConstructorType;
var isTSDeclareFunction = lib.isTSDeclareFunction;
var isTSDeclareMethod = lib.isTSDeclareMethod;
var isTSEntityName = lib.isTSEntityName;
var isTSEnumDeclaration = lib.isTSEnumDeclaration;
var isTSEnumMember = lib.isTSEnumMember;
var isTSExportAssignment = lib.isTSExportAssignment;
var isTSExpressionWithTypeArguments = lib.isTSExpressionWithTypeArguments;
var isTSExternalModuleReference = lib.isTSExternalModuleReference;
var isTSFunctionType = lib.isTSFunctionType;
var isTSImportEqualsDeclaration = lib.isTSImportEqualsDeclaration;
var isTSImportType = lib.isTSImportType;
var isTSIndexSignature = lib.isTSIndexSignature;
var isTSIndexedAccessType = lib.isTSIndexedAccessType;
var isTSInferType = lib.isTSInferType;
var isTSInstantiationExpression = lib.isTSInstantiationExpression;
var isTSInterfaceBody = lib.isTSInterfaceBody;
var isTSInterfaceDeclaration = lib.isTSInterfaceDeclaration;
var isTSIntersectionType = lib.isTSIntersectionType;
var isTSIntrinsicKeyword = lib.isTSIntrinsicKeyword;
var isTSLiteralType = lib.isTSLiteralType;
var isTSMappedType = lib.isTSMappedType;
var isTSMethodSignature = lib.isTSMethodSignature;
var isTSModuleBlock = lib.isTSModuleBlock;
var isTSModuleDeclaration = lib.isTSModuleDeclaration;
var isTSNamedTupleMember = lib.isTSNamedTupleMember;
var isTSNamespaceExportDeclaration = lib.isTSNamespaceExportDeclaration;
var isTSNeverKeyword = lib.isTSNeverKeyword;
var isTSNonNullExpression = lib.isTSNonNullExpression;
var isTSNullKeyword = lib.isTSNullKeyword;
var isTSNumberKeyword = lib.isTSNumberKeyword;
var isTSObjectKeyword = lib.isTSObjectKeyword;
var isTSOptionalType = lib.isTSOptionalType;
var isTSParameterProperty = lib.isTSParameterProperty;
var isTSParenthesizedType = lib.isTSParenthesizedType;
var isTSPropertySignature = lib.isTSPropertySignature;
var isTSQualifiedName = lib.isTSQualifiedName;
var isTSRestType = lib.isTSRestType;
var isTSSatisfiesExpression = lib.isTSSatisfiesExpression;
var isTSStringKeyword = lib.isTSStringKeyword;
var isTSSymbolKeyword = lib.isTSSymbolKeyword;
var isTSThisType = lib.isTSThisType;
var isTSTupleType = lib.isTSTupleType;
var isTSType = lib.isTSType;
var isTSTypeAliasDeclaration = lib.isTSTypeAliasDeclaration;
var isTSTypeAnnotation = lib.isTSTypeAnnotation;
var isTSTypeAssertion = lib.isTSTypeAssertion;
var isTSTypeElement = lib.isTSTypeElement;
var isTSTypeLiteral = lib.isTSTypeLiteral;
var isTSTypeOperator = lib.isTSTypeOperator;
var isTSTypeParameter = lib.isTSTypeParameter;
var isTSTypeParameterDeclaration = lib.isTSTypeParameterDeclaration;
var isTSTypeParameterInstantiation = lib.isTSTypeParameterInstantiation;
var isTSTypePredicate = lib.isTSTypePredicate;
var isTSTypeQuery = lib.isTSTypeQuery;
var isTSTypeReference = lib.isTSTypeReference;
var isTSUndefinedKeyword = lib.isTSUndefinedKeyword;
var isTSUnionType = lib.isTSUnionType;
var isTSUnknownKeyword = lib.isTSUnknownKeyword;
var isTSVoidKeyword = lib.isTSVoidKeyword;
var isTaggedTemplateExpression = lib.isTaggedTemplateExpression;
var isTemplateElement = lib.isTemplateElement;
var isTemplateLiteral = lib.isTemplateLiteral;
var isTerminatorless = lib.isTerminatorless;
var isThisExpression = lib.isThisExpression;
var isThisTypeAnnotation = lib.isThisTypeAnnotation;
var isThrowStatement = lib.isThrowStatement;
var isTopicReference = lib.isTopicReference;
var isTryStatement = lib.isTryStatement;
var isTupleExpression = lib.isTupleExpression;
var isTupleTypeAnnotation = lib.isTupleTypeAnnotation;
var isType = lib.isType;
var isTypeAlias = lib.isTypeAlias;
var isTypeAnnotation = lib.isTypeAnnotation;
var isTypeCastExpression = lib.isTypeCastExpression;
var isTypeParameter = lib.isTypeParameter;
var isTypeParameterDeclaration = lib.isTypeParameterDeclaration;
var isTypeParameterInstantiation = lib.isTypeParameterInstantiation;
var isTypeScript = lib.isTypeScript;
var isTypeofTypeAnnotation = lib.isTypeofTypeAnnotation;
var isUnaryExpression = lib.isUnaryExpression;
var isUnaryLike = lib.isUnaryLike;
var isUnionTypeAnnotation = lib.isUnionTypeAnnotation;
var isUpdateExpression = lib.isUpdateExpression;
var isUserWhitespacable = lib.isUserWhitespacable;
var isV8IntrinsicIdentifier = lib.isV8IntrinsicIdentifier;
var isValidES3Identifier = lib.isValidES3Identifier;
var isValidIdentifier = lib.isValidIdentifier;
var isVar = lib.isVar;
var isVariableDeclaration = lib.isVariableDeclaration;
var isVariableDeclarator = lib.isVariableDeclarator;
var isVariance = lib.isVariance;
var isVoidTypeAnnotation = lib.isVoidTypeAnnotation;
var isWhile = lib.isWhile;
var isWhileStatement = lib.isWhileStatement;
var isWithStatement = lib.isWithStatement;
var isYieldExpression = lib.isYieldExpression;
var jSXAttribute = lib.jSXAttribute;
var jSXClosingElement = lib.jSXClosingElement;
var jSXClosingFragment = lib.jSXClosingFragment;
var jSXElement = lib.jSXElement;
var jSXEmptyExpression = lib.jSXEmptyExpression;
var jSXExpressionContainer = lib.jSXExpressionContainer;
var jSXFragment = lib.jSXFragment;
var jSXIdentifier = lib.jSXIdentifier;
var jSXMemberExpression = lib.jSXMemberExpression;
var jSXNamespacedName = lib.jSXNamespacedName;
var jSXOpeningElement = lib.jSXOpeningElement;
var jSXOpeningFragment = lib.jSXOpeningFragment;
var jSXSpreadAttribute = lib.jSXSpreadAttribute;
var jSXSpreadChild = lib.jSXSpreadChild;
var jSXText = lib.jSXText;
var jsxAttribute = lib.jsxAttribute;
var jsxClosingElement = lib.jsxClosingElement;
var jsxClosingFragment = lib.jsxClosingFragment;
var jsxElement = lib.jsxElement;
var jsxEmptyExpression = lib.jsxEmptyExpression;
var jsxExpressionContainer = lib.jsxExpressionContainer;
var jsxFragment = lib.jsxFragment;
var jsxIdentifier = lib.jsxIdentifier;
var jsxMemberExpression = lib.jsxMemberExpression;
var jsxNamespacedName = lib.jsxNamespacedName;
var jsxOpeningElement = lib.jsxOpeningElement;
var jsxOpeningFragment = lib.jsxOpeningFragment;
var jsxSpreadAttribute = lib.jsxSpreadAttribute;
var jsxSpreadChild = lib.jsxSpreadChild;
var jsxText = lib.jsxText;
var labeledStatement = lib.labeledStatement;
var logicalExpression = lib.logicalExpression;
var matchesPattern = lib.matchesPattern;
var memberExpression = lib.memberExpression;
var metaProperty = lib.metaProperty;
var mixedTypeAnnotation = lib.mixedTypeAnnotation;
var moduleExpression = lib.moduleExpression;
var newExpression = lib.newExpression;
var noop = lib.noop;
var nullLiteral = lib.nullLiteral;
var nullLiteralTypeAnnotation = lib.nullLiteralTypeAnnotation;
var nullableTypeAnnotation = lib.nullableTypeAnnotation;
var numberLiteral = lib.numberLiteral;
var numberLiteralTypeAnnotation = lib.numberLiteralTypeAnnotation;
var numberTypeAnnotation = lib.numberTypeAnnotation;
var numericLiteral = lib.numericLiteral;
var objectExpression = lib.objectExpression;
var objectMethod = lib.objectMethod;
var objectPattern = lib.objectPattern;
var objectProperty = lib.objectProperty;
var objectTypeAnnotation = lib.objectTypeAnnotation;
var objectTypeCallProperty = lib.objectTypeCallProperty;
var objectTypeIndexer = lib.objectTypeIndexer;
var objectTypeInternalSlot = lib.objectTypeInternalSlot;
var objectTypeProperty = lib.objectTypeProperty;
var objectTypeSpreadProperty = lib.objectTypeSpreadProperty;
var opaqueType = lib.opaqueType;
var optionalCallExpression = lib.optionalCallExpression;
var optionalIndexedAccessType = lib.optionalIndexedAccessType;
var optionalMemberExpression = lib.optionalMemberExpression;
var parenthesizedExpression = lib.parenthesizedExpression;
var pipelineBareFunction = lib.pipelineBareFunction;
var pipelinePrimaryTopicReference = lib.pipelinePrimaryTopicReference;
var pipelineTopicExpression = lib.pipelineTopicExpression;
var placeholder = lib.placeholder;
var prependToMemberExpression = lib.prependToMemberExpression;
var privateName = lib.privateName;
var program = lib.program;
var qualifiedTypeIdentifier = lib.qualifiedTypeIdentifier;
var react = lib.react;
var recordExpression = lib.recordExpression;
var regExpLiteral = lib.regExpLiteral;
var regexLiteral = lib.regexLiteral;
var removeComments = lib.removeComments;
var removeProperties = lib.removeProperties;
var removePropertiesDeep = lib.removePropertiesDeep;
var removeTypeDuplicates = lib.removeTypeDuplicates;
var restElement = lib.restElement;
var restProperty = lib.restProperty;
var returnStatement = lib.returnStatement;
var sequenceExpression = lib.sequenceExpression;
var shallowEqual = lib.shallowEqual;
var spreadElement = lib.spreadElement;
var spreadProperty = lib.spreadProperty;
var staticBlock = lib.staticBlock;
var stringLiteral = lib.stringLiteral;
var stringLiteralTypeAnnotation = lib.stringLiteralTypeAnnotation;
var stringTypeAnnotation = lib.stringTypeAnnotation;
var switchCase = lib.switchCase;
var switchStatement = lib.switchStatement;
var symbolTypeAnnotation = lib.symbolTypeAnnotation;
var tSAnyKeyword = lib.tSAnyKeyword;
var tSArrayType = lib.tSArrayType;
var tSAsExpression = lib.tSAsExpression;
var tSBigIntKeyword = lib.tSBigIntKeyword;
var tSBooleanKeyword = lib.tSBooleanKeyword;
var tSCallSignatureDeclaration = lib.tSCallSignatureDeclaration;
var tSConditionalType = lib.tSConditionalType;
var tSConstructSignatureDeclaration = lib.tSConstructSignatureDeclaration;
var tSConstructorType = lib.tSConstructorType;
var tSDeclareFunction = lib.tSDeclareFunction;
var tSDeclareMethod = lib.tSDeclareMethod;
var tSEnumDeclaration = lib.tSEnumDeclaration;
var tSEnumMember = lib.tSEnumMember;
var tSExportAssignment = lib.tSExportAssignment;
var tSExpressionWithTypeArguments = lib.tSExpressionWithTypeArguments;
var tSExternalModuleReference = lib.tSExternalModuleReference;
var tSFunctionType = lib.tSFunctionType;
var tSImportEqualsDeclaration = lib.tSImportEqualsDeclaration;
var tSImportType = lib.tSImportType;
var tSIndexSignature = lib.tSIndexSignature;
var tSIndexedAccessType = lib.tSIndexedAccessType;
var tSInferType = lib.tSInferType;
var tSInstantiationExpression = lib.tSInstantiationExpression;
var tSInterfaceBody = lib.tSInterfaceBody;
var tSInterfaceDeclaration = lib.tSInterfaceDeclaration;
var tSIntersectionType = lib.tSIntersectionType;
var tSIntrinsicKeyword = lib.tSIntrinsicKeyword;
var tSLiteralType = lib.tSLiteralType;
var tSMappedType = lib.tSMappedType;
var tSMethodSignature = lib.tSMethodSignature;
var tSModuleBlock = lib.tSModuleBlock;
var tSModuleDeclaration = lib.tSModuleDeclaration;
var tSNamedTupleMember = lib.tSNamedTupleMember;
var tSNamespaceExportDeclaration = lib.tSNamespaceExportDeclaration;
var tSNeverKeyword = lib.tSNeverKeyword;
var tSNonNullExpression = lib.tSNonNullExpression;
var tSNullKeyword = lib.tSNullKeyword;
var tSNumberKeyword = lib.tSNumberKeyword;
var tSObjectKeyword = lib.tSObjectKeyword;
var tSOptionalType = lib.tSOptionalType;
var tSParameterProperty = lib.tSParameterProperty;
var tSParenthesizedType = lib.tSParenthesizedType;
var tSPropertySignature = lib.tSPropertySignature;
var tSQualifiedName = lib.tSQualifiedName;
var tSRestType = lib.tSRestType;
var tSSatisfiesExpression = lib.tSSatisfiesExpression;
var tSStringKeyword = lib.tSStringKeyword;
var tSSymbolKeyword = lib.tSSymbolKeyword;
var tSThisType = lib.tSThisType;
var tSTupleType = lib.tSTupleType;
var tSTypeAliasDeclaration = lib.tSTypeAliasDeclaration;
var tSTypeAnnotation = lib.tSTypeAnnotation;
var tSTypeAssertion = lib.tSTypeAssertion;
var tSTypeLiteral = lib.tSTypeLiteral;
var tSTypeOperator = lib.tSTypeOperator;
var tSTypeParameter = lib.tSTypeParameter;
var tSTypeParameterDeclaration = lib.tSTypeParameterDeclaration;
var tSTypeParameterInstantiation = lib.tSTypeParameterInstantiation;
var tSTypePredicate = lib.tSTypePredicate;
var tSTypeQuery = lib.tSTypeQuery;
var tSTypeReference = lib.tSTypeReference;
var tSUndefinedKeyword = lib.tSUndefinedKeyword;
var tSUnionType = lib.tSUnionType;
var tSUnknownKeyword = lib.tSUnknownKeyword;
var tSVoidKeyword = lib.tSVoidKeyword;
var taggedTemplateExpression = lib.taggedTemplateExpression;
var templateElement = lib.templateElement;
var templateLiteral = lib.templateLiteral;
var thisExpression = lib.thisExpression;
var thisTypeAnnotation = lib.thisTypeAnnotation;
var throwStatement = lib.throwStatement;
var toBindingIdentifierName = lib.toBindingIdentifierName;
var toBlock = lib.toBlock;
var toComputedKey = lib.toComputedKey;
var toExpression = lib.toExpression;
var toIdentifier = lib.toIdentifier;
var toKeyAlias = lib.toKeyAlias;
var toSequenceExpression = lib.toSequenceExpression;
var toStatement = lib.toStatement;
var topicReference = lib.topicReference;
var traverse = lib.traverse;
var traverseFast = lib.traverseFast;
var tryStatement = lib.tryStatement;
var tsAnyKeyword = lib.tsAnyKeyword;
var tsArrayType = lib.tsArrayType;
var tsAsExpression = lib.tsAsExpression;
var tsBigIntKeyword = lib.tsBigIntKeyword;
var tsBooleanKeyword = lib.tsBooleanKeyword;
var tsCallSignatureDeclaration = lib.tsCallSignatureDeclaration;
var tsConditionalType = lib.tsConditionalType;
var tsConstructSignatureDeclaration = lib.tsConstructSignatureDeclaration;
var tsConstructorType = lib.tsConstructorType;
var tsDeclareFunction = lib.tsDeclareFunction;
var tsDeclareMethod = lib.tsDeclareMethod;
var tsEnumDeclaration = lib.tsEnumDeclaration;
var tsEnumMember = lib.tsEnumMember;
var tsExportAssignment = lib.tsExportAssignment;
var tsExpressionWithTypeArguments = lib.tsExpressionWithTypeArguments;
var tsExternalModuleReference = lib.tsExternalModuleReference;
var tsFunctionType = lib.tsFunctionType;
var tsImportEqualsDeclaration = lib.tsImportEqualsDeclaration;
var tsImportType = lib.tsImportType;
var tsIndexSignature = lib.tsIndexSignature;
var tsIndexedAccessType = lib.tsIndexedAccessType;
var tsInferType = lib.tsInferType;
var tsInstantiationExpression = lib.tsInstantiationExpression;
var tsInterfaceBody = lib.tsInterfaceBody;
var tsInterfaceDeclaration = lib.tsInterfaceDeclaration;
var tsIntersectionType = lib.tsIntersectionType;
var tsIntrinsicKeyword = lib.tsIntrinsicKeyword;
var tsLiteralType = lib.tsLiteralType;
var tsMappedType = lib.tsMappedType;
var tsMethodSignature = lib.tsMethodSignature;
var tsModuleBlock = lib.tsModuleBlock;
var tsModuleDeclaration = lib.tsModuleDeclaration;
var tsNamedTupleMember = lib.tsNamedTupleMember;
var tsNamespaceExportDeclaration = lib.tsNamespaceExportDeclaration;
var tsNeverKeyword = lib.tsNeverKeyword;
var tsNonNullExpression = lib.tsNonNullExpression;
var tsNullKeyword = lib.tsNullKeyword;
var tsNumberKeyword = lib.tsNumberKeyword;
var tsObjectKeyword = lib.tsObjectKeyword;
var tsOptionalType = lib.tsOptionalType;
var tsParameterProperty = lib.tsParameterProperty;
var tsParenthesizedType = lib.tsParenthesizedType;
var tsPropertySignature = lib.tsPropertySignature;
var tsQualifiedName = lib.tsQualifiedName;
var tsRestType = lib.tsRestType;
var tsSatisfiesExpression = lib.tsSatisfiesExpression;
var tsStringKeyword = lib.tsStringKeyword;
var tsSymbolKeyword = lib.tsSymbolKeyword;
var tsThisType = lib.tsThisType;
var tsTupleType = lib.tsTupleType;
var tsTypeAliasDeclaration = lib.tsTypeAliasDeclaration;
var tsTypeAnnotation = lib.tsTypeAnnotation;
var tsTypeAssertion = lib.tsTypeAssertion;
var tsTypeLiteral = lib.tsTypeLiteral;
var tsTypeOperator = lib.tsTypeOperator;
var tsTypeParameter = lib.tsTypeParameter;
var tsTypeParameterDeclaration = lib.tsTypeParameterDeclaration;
var tsTypeParameterInstantiation = lib.tsTypeParameterInstantiation;
var tsTypePredicate = lib.tsTypePredicate;
var tsTypeQuery = lib.tsTypeQuery;
var tsTypeReference = lib.tsTypeReference;
var tsUndefinedKeyword = lib.tsUndefinedKeyword;
var tsUnionType = lib.tsUnionType;
var tsUnknownKeyword = lib.tsUnknownKeyword;
var tsVoidKeyword = lib.tsVoidKeyword;
var tupleExpression = lib.tupleExpression;
var tupleTypeAnnotation = lib.tupleTypeAnnotation;
var typeAlias = lib.typeAlias;
var typeAnnotation = lib.typeAnnotation;
var typeCastExpression = lib.typeCastExpression;
var typeParameter = lib.typeParameter;
var typeParameterDeclaration = lib.typeParameterDeclaration;
var typeParameterInstantiation = lib.typeParameterInstantiation;
var typeofTypeAnnotation = lib.typeofTypeAnnotation;
var unaryExpression = lib.unaryExpression;
var unionTypeAnnotation = lib.unionTypeAnnotation;
var updateExpression = lib.updateExpression;
var v8IntrinsicIdentifier = lib.v8IntrinsicIdentifier;
var validate = lib.validate;
var valueToNode = lib.valueToNode;
var variableDeclaration = lib.variableDeclaration;
var variableDeclarator = lib.variableDeclarator;
var variance = lib.variance;
var voidTypeAnnotation = lib.voidTypeAnnotation;
var whileStatement = lib.whileStatement;
var withStatement = lib.withStatement;
var yieldExpression = lib.yieldExpression;
export {ACCESSOR_TYPES, ALIAS_KEYS, ASSIGNMENT_OPERATORS, AnyTypeAnnotation, ArgumentPlaceholder, ArrayExpression, ArrayPattern, ArrayTypeAnnotation, ArrowFunctionExpression, AssignmentExpression, AssignmentPattern, AwaitExpression, BINARY_OPERATORS, BINARY_TYPES, BLOCKPARENT_TYPES, BLOCK_SCOPED_SYMBOL, BLOCK_TYPES, BOOLEAN_BINARY_OPERATORS, BOOLEAN_NUMBER_BINARY_OPERATORS, BOOLEAN_UNARY_OPERATORS, BUILDER_KEYS, BigIntLiteral, BinaryExpression, BindExpression, BlockStatement, BooleanLiteral, BooleanLiteralTypeAnnotation, BooleanTypeAnnotation, BreakStatement, CLASS_TYPES, COMMENT_KEYS, COMPARISON_BINARY_OPERATORS, COMPLETIONSTATEMENT_TYPES, CONDITIONAL_TYPES, CallExpression, CatchClause, ClassAccessorProperty, ClassBody, ClassDeclaration, ClassExpression, ClassImplements, ClassMethod, ClassPrivateMethod, ClassPrivateProperty, ClassProperty, ConditionalExpression, ContinueStatement, DECLARATION_TYPES, DEPRECATED_ALIASES, DEPRECATED_KEYS, DebuggerStatement, DecimalLiteral, DeclareClass, DeclareExportAllDeclaration, DeclareExportDeclaration, DeclareFunction, DeclareInterface, DeclareModule, DeclareModuleExports, DeclareOpaqueType, DeclareTypeAlias, DeclareVariable, DeclaredPredicate, Decorator, Directive, DirectiveLiteral, DoExpression, DoWhileStatement, ENUMBODY_TYPES, ENUMMEMBER_TYPES, EQUALITY_BINARY_OPERATORS, EXPORTDECLARATION_TYPES, EXPRESSIONWRAPPER_TYPES, EXPRESSION_TYPES, EmptyStatement, EmptyTypeAnnotation, EnumBooleanBody, EnumBooleanMember, EnumDeclaration, EnumDefaultedMember, EnumNumberBody, EnumNumberMember, EnumStringBody, EnumStringMember, EnumSymbolBody, ExistsTypeAnnotation, ExportAllDeclaration, ExportDefaultDeclaration, ExportDefaultSpecifier, ExportNamedDeclaration, ExportNamespaceSpecifier, ExportSpecifier, ExpressionStatement, FLATTENABLE_KEYS, FLIPPED_ALIAS_KEYS, FLOWBASEANNOTATION_TYPES, FLOWDECLARATION_TYPES, FLOWPREDICATE_TYPES, FLOWTYPE_TYPES, FLOW_TYPES, FORXSTATEMENT_TYPES, FOR_INIT_KEYS, FOR_TYPES, FUNCTIONPARENT_TYPES, FUNCTION_TYPES, File, ForInStatement, ForOfStatement, ForStatement, FunctionDeclaration, FunctionExpression, FunctionTypeAnnotation, FunctionTypeParam, GenericTypeAnnotation, IMMUTABLE_TYPES, IMPORTOREXPORTDECLARATION_TYPES, INHERIT_KEYS, Identifier, IfStatement, Import, ImportAttribute, ImportDeclaration, ImportDefaultSpecifier, ImportNamespaceSpecifier, ImportSpecifier, IndexedAccessType, InferredPredicate, InterfaceDeclaration, InterfaceExtends, InterfaceTypeAnnotation, InterpreterDirective, IntersectionTypeAnnotation, JSXAttribute, JSXClosingElement, JSXClosingFragment, JSXElement, JSXEmptyExpression, JSXExpressionContainer, JSXFragment, JSXIdentifier, JSXMemberExpression, JSXNamespacedName, JSXOpeningElement, JSXOpeningFragment, JSXSpreadAttribute, JSXSpreadChild, JSXText, JSX_TYPES, LITERAL_TYPES, LOGICAL_OPERATORS, LOOP_TYPES, LVAL_TYPES, LabeledStatement, LogicalExpression, METHOD_TYPES, MISCELLANEOUS_TYPES, MODULEDECLARATION_TYPES, MODULESPECIFIER_TYPES, MemberExpression, MetaProperty, MixedTypeAnnotation, ModuleExpression, NODE_FIELDS, NODE_PARENT_VALIDATIONS, NOT_LOCAL_BINDING, NUMBER_BINARY_OPERATORS, NUMBER_UNARY_OPERATORS, NewExpression, Noop, NullLiteral, NullLiteralTypeAnnotation, NullableTypeAnnotation, NumberLiteral, NumberLiteralTypeAnnotation, NumberTypeAnnotation, NumericLiteral, OBJECTMEMBER_TYPES, ObjectExpression, ObjectMethod, ObjectPattern, ObjectProperty, ObjectTypeAnnotation, ObjectTypeCallProperty, ObjectTypeIndexer, ObjectTypeInternalSlot, ObjectTypeProperty, ObjectTypeSpreadProperty, OpaqueType, OptionalCallExpression, OptionalIndexedAccessType, OptionalMemberExpression, PATTERNLIKE_TYPES, PATTERN_TYPES, PLACEHOLDERS, PLACEHOLDERS_ALIAS, PLACEHOLDERS_FLIPPED_ALIAS, PRIVATE_TYPES, PROPERTY_TYPES, PUREISH_TYPES, ParenthesizedExpression, PipelineBareFunction, PipelinePrimaryTopicReference, PipelineTopicExpression, Placeholder, PrivateName, Program, QualifiedTypeIdentifier, RecordExpression, RegExpLiteral, RegexLiteral, RestElement, RestProperty, ReturnStatement, SCOPABLE_TYPES, STANDARDIZED_TYPES, STATEMENT_OR_BLOCK_KEYS, STATEMENT_TYPES, STRING_UNARY_OPERATORS, SequenceExpression, SpreadElement, SpreadProperty, StaticBlock, StringLiteral, StringLiteralTypeAnnotation, StringTypeAnnotation, Super, SwitchCase, SwitchStatement, SymbolTypeAnnotation, TERMINATORLESS_TYPES, TSAnyKeyword, TSArrayType, TSAsExpression, TSBASETYPE_TYPES, TSBigIntKeyword, TSBooleanKeyword, TSCallSignatureDeclaration, TSConditionalType, TSConstructSignatureDeclaration, TSConstructorType, TSDeclareFunction, TSDeclareMethod, TSENTITYNAME_TYPES, TSEnumDeclaration, TSEnumMember, TSExportAssignment, TSExpressionWithTypeArguments, TSExternalModuleReference, TSFunctionType, TSImportEqualsDeclaration, TSImportType, TSIndexSignature, TSIndexedAccessType, TSInferType, TSInstantiationExpression, TSInterfaceBody, TSInterfaceDeclaration, TSIntersectionType, TSIntrinsicKeyword, TSLiteralType, TSMappedType, TSMethodSignature, TSModuleBlock, TSModuleDeclaration, TSNamedTupleMember, TSNamespaceExportDeclaration, TSNeverKeyword, TSNonNullExpression, TSNullKeyword, TSNumberKeyword, TSObjectKeyword, TSOptionalType, TSParameterProperty, TSParenthesizedType, TSPropertySignature, TSQualifiedName, TSRestType, TSSatisfiesExpression, TSStringKeyword, TSSymbolKeyword, TSTYPEELEMENT_TYPES, TSTYPE_TYPES, TSThisType, TSTupleType, TSTypeAliasDeclaration, TSTypeAnnotation, TSTypeAssertion, TSTypeLiteral, TSTypeOperator, TSTypeParameter, TSTypeParameterDeclaration, TSTypeParameterInstantiation, TSTypePredicate, TSTypeQuery, TSTypeReference, TSUndefinedKeyword, TSUnionType, TSUnknownKeyword, TSVoidKeyword, TYPES, TYPESCRIPT_TYPES, TaggedTemplateExpression, TemplateElement, TemplateLiteral, ThisExpression, ThisTypeAnnotation, ThrowStatement, TopicReference, TryStatement, TupleExpression, TupleTypeAnnotation, TypeAlias, TypeAnnotation, TypeCastExpression, TypeParameter, TypeParameterDeclaration, TypeParameterInstantiation, TypeofTypeAnnotation, UNARYLIKE_TYPES, UNARY_OPERATORS, UPDATE_OPERATORS, USERWHITESPACABLE_TYPES, UnaryExpression, UnionTypeAnnotation, UpdateExpression, V8IntrinsicIdentifier, VISITOR_KEYS, VariableDeclaration, VariableDeclarator, Variance, VoidTypeAnnotation, WHILE_TYPES, WhileStatement, WithStatement, YieldExpression, __internal__deprecationWarning, lib as __moduleExports, addComment, addComments, anyTypeAnnotation, appendToMemberExpression, argumentPlaceholder, arrayExpression, arrayPattern, arrayTypeAnnotation, arrowFunctionExpression, assertAccessor, assertAnyTypeAnnotation, assertArgumentPlaceholder, assertArrayExpression, assertArrayPattern, assertArrayTypeAnnotation, assertArrowFunctionExpression, assertAssignmentExpression, assertAssignmentPattern, assertAwaitExpression, assertBigIntLiteral, assertBinary, assertBinaryExpression, assertBindExpression, assertBlock, assertBlockParent, assertBlockStatement, assertBooleanLiteral, assertBooleanLiteralTypeAnnotation, assertBooleanTypeAnnotation, assertBreakStatement, assertCallExpression, assertCatchClause, assertClass, assertClassAccessorProperty, assertClassBody, assertClassDeclaration, assertClassExpression, assertClassImplements, assertClassMethod, assertClassPrivateMethod, assertClassPrivateProperty, assertClassProperty, assertCompletionStatement, assertConditional, assertConditionalExpression, assertContinueStatement, assertDebuggerStatement, assertDecimalLiteral, assertDeclaration, assertDeclareClass, assertDeclareExportAllDeclaration, assertDeclareExportDeclaration, assertDeclareFunction, assertDeclareInterface, assertDeclareModule, assertDeclareModuleExports, assertDeclareOpaqueType, assertDeclareTypeAlias, assertDeclareVariable, assertDeclaredPredicate, assertDecorator, assertDirective, assertDirectiveLiteral, assertDoExpression, assertDoWhileStatement, assertEmptyStatement, assertEmptyTypeAnnotation, assertEnumBody, assertEnumBooleanBody, assertEnumBooleanMember, assertEnumDeclaration, assertEnumDefaultedMember, assertEnumMember, assertEnumNumberBody, assertEnumNumberMember, assertEnumStringBody, assertEnumStringMember, assertEnumSymbolBody, assertExistsTypeAnnotation, assertExportAllDeclaration, assertExportDeclaration, assertExportDefaultDeclaration, assertExportDefaultSpecifier, assertExportNamedDeclaration, assertExportNamespaceSpecifier, assertExportSpecifier, assertExpression, assertExpressionStatement, assertExpressionWrapper, assertFile, assertFlow, assertFlowBaseAnnotation, assertFlowDeclaration, assertFlowPredicate, assertFlowType, assertFor, assertForInStatement, assertForOfStatement, assertForStatement, assertForXStatement, assertFunction, assertFunctionDeclaration, assertFunctionExpression, assertFunctionParent, assertFunctionTypeAnnotation, assertFunctionTypeParam, assertGenericTypeAnnotation, assertIdentifier, assertIfStatement, assertImmutable, assertImport, assertImportAttribute, assertImportDeclaration, assertImportDefaultSpecifier, assertImportNamespaceSpecifier, assertImportOrExportDeclaration, assertImportSpecifier, assertIndexedAccessType, assertInferredPredicate, assertInterfaceDeclaration, assertInterfaceExtends, assertInterfaceTypeAnnotation, assertInterpreterDirective, assertIntersectionTypeAnnotation, assertJSX, assertJSXAttribute, assertJSXClosingElement, assertJSXClosingFragment, assertJSXElement, assertJSXEmptyExpression, assertJSXExpressionContainer, assertJSXFragment, assertJSXIdentifier, assertJSXMemberExpression, assertJSXNamespacedName, assertJSXOpeningElement, assertJSXOpeningFragment, assertJSXSpreadAttribute, assertJSXSpreadChild, assertJSXText, assertLVal, assertLabeledStatement, assertLiteral, assertLogicalExpression, assertLoop, assertMemberExpression, assertMetaProperty, assertMethod, assertMiscellaneous, assertMixedTypeAnnotation, assertModuleDeclaration, assertModuleExpression, assertModuleSpecifier, assertNewExpression, assertNode, assertNoop, assertNullLiteral, assertNullLiteralTypeAnnotation, assertNullableTypeAnnotation, assertNumberLiteral, assertNumberLiteralTypeAnnotation, assertNumberTypeAnnotation, assertNumericLiteral, assertObjectExpression, assertObjectMember, assertObjectMethod, assertObjectPattern, assertObjectProperty, assertObjectTypeAnnotation, assertObjectTypeCallProperty, assertObjectTypeIndexer, assertObjectTypeInternalSlot, assertObjectTypeProperty, assertObjectTypeSpreadProperty, assertOpaqueType, assertOptionalCallExpression, assertOptionalIndexedAccessType, assertOptionalMemberExpression, assertParenthesizedExpression, assertPattern, assertPatternLike, assertPipelineBareFunction, assertPipelinePrimaryTopicReference, assertPipelineTopicExpression, assertPlaceholder, assertPrivate, assertPrivateName, assertProgram, assertProperty, assertPureish, assertQualifiedTypeIdentifier, assertRecordExpression, assertRegExpLiteral, assertRegexLiteral, assertRestElement, assertRestProperty, assertReturnStatement, assertScopable, assertSequenceExpression, assertSpreadElement, assertSpreadProperty, assertStandardized, assertStatement, assertStaticBlock, assertStringLiteral, assertStringLiteralTypeAnnotation, assertStringTypeAnnotation, assertSuper, assertSwitchCase, assertSwitchStatement, assertSymbolTypeAnnotation, assertTSAnyKeyword, assertTSArrayType, assertTSAsExpression, assertTSBaseType, assertTSBigIntKeyword, assertTSBooleanKeyword, assertTSCallSignatureDeclaration, assertTSConditionalType, assertTSConstructSignatureDeclaration, assertTSConstructorType, assertTSDeclareFunction, assertTSDeclareMethod, assertTSEntityName, assertTSEnumDeclaration, assertTSEnumMember, assertTSExportAssignment, assertTSExpressionWithTypeArguments, assertTSExternalModuleReference, assertTSFunctionType, assertTSImportEqualsDeclaration, assertTSImportType, assertTSIndexSignature, assertTSIndexedAccessType, assertTSInferType, assertTSInstantiationExpression, assertTSInterfaceBody, assertTSInterfaceDeclaration, assertTSIntersectionType, assertTSIntrinsicKeyword, assertTSLiteralType, assertTSMappedType, assertTSMethodSignature, assertTSModuleBlock, assertTSModuleDeclaration, assertTSNamedTupleMember, assertTSNamespaceExportDeclaration, assertTSNeverKeyword, assertTSNonNullExpression, assertTSNullKeyword, assertTSNumberKeyword, assertTSObjectKeyword, assertTSOptionalType, assertTSParameterProperty, assertTSParenthesizedType, assertTSPropertySignature, assertTSQualifiedName, assertTSRestType, assertTSSatisfiesExpression, assertTSStringKeyword, assertTSSymbolKeyword, assertTSThisType, assertTSTupleType, assertTSType, assertTSTypeAliasDeclaration, assertTSTypeAnnotation, assertTSTypeAssertion, assertTSTypeElement, assertTSTypeLiteral, assertTSTypeOperator, assertTSTypeParameter, assertTSTypeParameterDeclaration, assertTSTypeParameterInstantiation, assertTSTypePredicate, assertTSTypeQuery, assertTSTypeReference, assertTSUndefinedKeyword, assertTSUnionType, assertTSUnknownKeyword, assertTSVoidKeyword, assertTaggedTemplateExpression, assertTemplateElement, assertTemplateLiteral, assertTerminatorless, assertThisExpression, assertThisTypeAnnotation, assertThrowStatement, assertTopicReference, assertTryStatement, assertTupleExpression, assertTupleTypeAnnotation, assertTypeAlias, assertTypeAnnotation, assertTypeCastExpression, assertTypeParameter, assertTypeParameterDeclaration, assertTypeParameterInstantiation, assertTypeScript, assertTypeofTypeAnnotation, assertUnaryExpression, assertUnaryLike, assertUnionTypeAnnotation, assertUpdateExpression, assertUserWhitespacable, assertV8IntrinsicIdentifier, assertVariableDeclaration, assertVariableDeclarator, assertVariance, assertVoidTypeAnnotation, assertWhile, assertWhileStatement, assertWithStatement, assertYieldExpression, assignmentExpression, assignmentPattern, awaitExpression, bigIntLiteral, binaryExpression, bindExpression, blockStatement, booleanLiteral, booleanLiteralTypeAnnotation, booleanTypeAnnotation, breakStatement, buildMatchMemberExpression, callExpression, catchClause, classAccessorProperty, classBody, classDeclaration, classExpression, classImplements, classMethod, classPrivateMethod, classPrivateProperty, classProperty, clone, cloneDeep, cloneDeepWithoutLoc, cloneNode, cloneWithoutLoc, conditionalExpression, continueStatement, createFlowUnionType, createTSUnionType, createTypeAnnotationBasedOnTypeof, createUnionTypeAnnotation, debuggerStatement, decimalLiteral, declareClass, declareExportAllDeclaration, declareExportDeclaration, declareFunction, declareInterface, declareModule, declareModuleExports, declareOpaqueType, declareTypeAlias, declareVariable, declaredPredicate, decorator, directive, directiveLiteral, doExpression, doWhileStatement, emptyStatement, emptyTypeAnnotation, ensureBlock, enumBooleanBody, enumBooleanMember, enumDeclaration, enumDefaultedMember, enumNumberBody, enumNumberMember, enumStringBody, enumStringMember, enumSymbolBody, existsTypeAnnotation, exportAllDeclaration, exportDefaultDeclaration, exportDefaultSpecifier, exportNamedDeclaration, exportNamespaceSpecifier, exportSpecifier, expressionStatement, file, forInStatement, forOfStatement, forStatement, functionDeclaration, functionExpression, functionTypeAnnotation, functionTypeParam, genericTypeAnnotation, getBindingIdentifiers, getOuterBindingIdentifiers, identifier, ifStatement, importAttribute, importDeclaration, importDefaultSpecifier, importNamespaceSpecifier, importSpecifier, indexedAccessType, inferredPredicate, inheritInnerComments, inheritLeadingComments, inheritTrailingComments, inherits, inheritsComments, interfaceDeclaration, interfaceExtends, interfaceTypeAnnotation, interpreterDirective, intersectionTypeAnnotation, is, isAccessor, isAnyTypeAnnotation, isArgumentPlaceholder, isArrayExpression, isArrayPattern, isArrayTypeAnnotation, isArrowFunctionExpression, isAssignmentExpression, isAssignmentPattern, isAwaitExpression, isBigIntLiteral, isBinary, isBinaryExpression, isBindExpression, isBinding, isBlock, isBlockParent, isBlockScoped, isBlockStatement, isBooleanLiteral, isBooleanLiteralTypeAnnotation, isBooleanTypeAnnotation, isBreakStatement, isCallExpression, isCatchClause, isClass, isClassAccessorProperty, isClassBody, isClassDeclaration, isClassExpression, isClassImplements, isClassMethod, isClassPrivateMethod, isClassPrivateProperty, isClassProperty, isCompletionStatement, isConditional, isConditionalExpression, isContinueStatement, isDebuggerStatement, isDecimalLiteral, isDeclaration, isDeclareClass, isDeclareExportAllDeclaration, isDeclareExportDeclaration, isDeclareFunction, isDeclareInterface, isDeclareModule, isDeclareModuleExports, isDeclareOpaqueType, isDeclareTypeAlias, isDeclareVariable, isDeclaredPredicate, isDecorator, isDirective, isDirectiveLiteral, isDoExpression, isDoWhileStatement, isEmptyStatement, isEmptyTypeAnnotation, isEnumBody, isEnumBooleanBody, isEnumBooleanMember, isEnumDeclaration, isEnumDefaultedMember, isEnumMember, isEnumNumberBody, isEnumNumberMember, isEnumStringBody, isEnumStringMember, isEnumSymbolBody, isExistsTypeAnnotation, isExportAllDeclaration, isExportDeclaration, isExportDefaultDeclaration, isExportDefaultSpecifier, isExportNamedDeclaration, isExportNamespaceSpecifier, isExportSpecifier, isExpression, isExpressionStatement, isExpressionWrapper, isFile, isFlow, isFlowBaseAnnotation, isFlowDeclaration, isFlowPredicate, isFlowType, isFor, isForInStatement, isForOfStatement, isForStatement, isForXStatement, isFunction, isFunctionDeclaration, isFunctionExpression, isFunctionParent, isFunctionTypeAnnotation, isFunctionTypeParam, isGenericTypeAnnotation, isIdentifier, isIfStatement, isImmutable, isImport, isImportAttribute, isImportDeclaration, isImportDefaultSpecifier, isImportNamespaceSpecifier, isImportOrExportDeclaration, isImportSpecifier, isIndexedAccessType, isInferredPredicate, isInterfaceDeclaration, isInterfaceExtends, isInterfaceTypeAnnotation, isInterpreterDirective, isIntersectionTypeAnnotation, isJSX, isJSXAttribute, isJSXClosingElement, isJSXClosingFragment, isJSXElement, isJSXEmptyExpression, isJSXExpressionContainer, isJSXFragment, isJSXIdentifier, isJSXMemberExpression, isJSXNamespacedName, isJSXOpeningElement, isJSXOpeningFragment, isJSXSpreadAttribute, isJSXSpreadChild, isJSXText, isLVal, isLabeledStatement, isLet, isLiteral, isLogicalExpression, isLoop, isMemberExpression, isMetaProperty, isMethod, isMiscellaneous, isMixedTypeAnnotation, isModuleDeclaration, isModuleExpression, isModuleSpecifier, isNewExpression, isNode, isNodesEquivalent, isNoop, isNullLiteral, isNullLiteralTypeAnnotation, isNullableTypeAnnotation, isNumberLiteral, isNumberLiteralTypeAnnotation, isNumberTypeAnnotation, isNumericLiteral, isObjectExpression, isObjectMember, isObjectMethod, isObjectPattern, isObjectProperty, isObjectTypeAnnotation, isObjectTypeCallProperty, isObjectTypeIndexer, isObjectTypeInternalSlot, isObjectTypeProperty, isObjectTypeSpreadProperty, isOpaqueType, isOptionalCallExpression, isOptionalIndexedAccessType, isOptionalMemberExpression, isParenthesizedExpression, isPattern, isPatternLike, isPipelineBareFunction, isPipelinePrimaryTopicReference, isPipelineTopicExpression, isPlaceholder, isPlaceholderType, isPrivate, isPrivateName, isProgram, isProperty, isPureish, isQualifiedTypeIdentifier, isRecordExpression, isReferenced, isRegExpLiteral, isRegexLiteral, isRestElement, isRestProperty, isReturnStatement, isScopable, isScope, isSequenceExpression, isSpecifierDefault, isSpreadElement, isSpreadProperty, isStandardized, isStatement, isStaticBlock, isStringLiteral, isStringLiteralTypeAnnotation, isStringTypeAnnotation, isSuper, isSwitchCase, isSwitchStatement, isSymbolTypeAnnotation, isTSAnyKeyword, isTSArrayType, isTSAsExpression, isTSBaseType, isTSBigIntKeyword, isTSBooleanKeyword, isTSCallSignatureDeclaration, isTSConditionalType, isTSConstructSignatureDeclaration, isTSConstructorType, isTSDeclareFunction, isTSDeclareMethod, isTSEntityName, isTSEnumDeclaration, isTSEnumMember, isTSExportAssignment, isTSExpressionWithTypeArguments, isTSExternalModuleReference, isTSFunctionType, isTSImportEqualsDeclaration, isTSImportType, isTSIndexSignature, isTSIndexedAccessType, isTSInferType, isTSInstantiationExpression, isTSInterfaceBody, isTSInterfaceDeclaration, isTSIntersectionType, isTSIntrinsicKeyword, isTSLiteralType, isTSMappedType, isTSMethodSignature, isTSModuleBlock, isTSModuleDeclaration, isTSNamedTupleMember, isTSNamespaceExportDeclaration, isTSNeverKeyword, isTSNonNullExpression, isTSNullKeyword, isTSNumberKeyword, isTSObjectKeyword, isTSOptionalType, isTSParameterProperty, isTSParenthesizedType, isTSPropertySignature, isTSQualifiedName, isTSRestType, isTSSatisfiesExpression, isTSStringKeyword, isTSSymbolKeyword, isTSThisType, isTSTupleType, isTSType, isTSTypeAliasDeclaration, isTSTypeAnnotation, isTSTypeAssertion, isTSTypeElement, isTSTypeLiteral, isTSTypeOperator, isTSTypeParameter, isTSTypeParameterDeclaration, isTSTypeParameterInstantiation, isTSTypePredicate, isTSTypeQuery, isTSTypeReference, isTSUndefinedKeyword, isTSUnionType, isTSUnknownKeyword, isTSVoidKeyword, isTaggedTemplateExpression, isTemplateElement, isTemplateLiteral, isTerminatorless, isThisExpression, isThisTypeAnnotation, isThrowStatement, isTopicReference, isTryStatement, isTupleExpression, isTupleTypeAnnotation, isType, isTypeAlias, isTypeAnnotation, isTypeCastExpression, isTypeParameter, isTypeParameterDeclaration, isTypeParameterInstantiation, isTypeScript, isTypeofTypeAnnotation, isUnaryExpression, isUnaryLike, isUnionTypeAnnotation, isUpdateExpression, isUserWhitespacable, isV8IntrinsicIdentifier, isValidES3Identifier, isValidIdentifier, isVar, isVariableDeclaration, isVariableDeclarator, isVariance, isVoidTypeAnnotation, isWhile, isWhileStatement, isWithStatement, isYieldExpression, jSXAttribute, jSXClosingElement, jSXClosingFragment, jSXElement, jSXEmptyExpression, jSXExpressionContainer, jSXFragment, jSXIdentifier, jSXMemberExpression, jSXNamespacedName, jSXOpeningElement, jSXOpeningFragment, jSXSpreadAttribute, jSXSpreadChild, jSXText, jsxAttribute, jsxClosingElement, jsxClosingFragment, jsxElement, jsxEmptyExpression, jsxExpressionContainer, jsxFragment, jsxIdentifier, jsxMemberExpression, jsxNamespacedName, jsxOpeningElement, jsxOpeningFragment, jsxSpreadAttribute, jsxSpreadChild, jsxText, labeledStatement, logicalExpression, matchesPattern, memberExpression, metaProperty, mixedTypeAnnotation, moduleExpression, newExpression, noop, nullLiteral, nullLiteralTypeAnnotation, nullableTypeAnnotation, numberLiteral, numberLiteralTypeAnnotation, numberTypeAnnotation, numericLiteral, objectExpression, objectMethod, objectPattern, objectProperty, objectTypeAnnotation, objectTypeCallProperty, objectTypeIndexer, objectTypeInternalSlot, objectTypeProperty, objectTypeSpreadProperty, opaqueType, optionalCallExpression, optionalIndexedAccessType, optionalMemberExpression, parenthesizedExpression, pipelineBareFunction, pipelinePrimaryTopicReference, pipelineTopicExpression, placeholder, prependToMemberExpression, privateName, program, qualifiedTypeIdentifier, react, recordExpression, regExpLiteral, regexLiteral, removeComments, removeProperties, removePropertiesDeep, removeTypeDuplicates, restElement, restProperty, returnStatement, sequenceExpression, shallowEqual, spreadElement, spreadProperty, staticBlock, stringLiteral, stringLiteralTypeAnnotation, stringTypeAnnotation, switchCase, switchStatement, symbolTypeAnnotation, tSAnyKeyword, tSArrayType, tSAsExpression, tSBigIntKeyword, tSBooleanKeyword, tSCallSignatureDeclaration, tSConditionalType, tSConstructSignatureDeclaration, tSConstructorType, tSDeclareFunction, tSDeclareMethod, tSEnumDeclaration, tSEnumMember, tSExportAssignment, tSExpressionWithTypeArguments, tSExternalModuleReference, tSFunctionType, tSImportEqualsDeclaration, tSImportType, tSIndexSignature, tSIndexedAccessType, tSInferType, tSInstantiationExpression, tSInterfaceBody, tSInterfaceDeclaration, tSIntersectionType, tSIntrinsicKeyword, tSLiteralType, tSMappedType, tSMethodSignature, tSModuleBlock, tSModuleDeclaration, tSNamedTupleMember, tSNamespaceExportDeclaration, tSNeverKeyword, tSNonNullExpression, tSNullKeyword, tSNumberKeyword, tSObjectKeyword, tSOptionalType, tSParameterProperty, tSParenthesizedType, tSPropertySignature, tSQualifiedName, tSRestType, tSSatisfiesExpression, tSStringKeyword, tSSymbolKeyword, tSThisType, tSTupleType, tSTypeAliasDeclaration, tSTypeAnnotation, tSTypeAssertion, tSTypeLiteral, tSTypeOperator, tSTypeParameter, tSTypeParameterDeclaration, tSTypeParameterInstantiation, tSTypePredicate, tSTypeQuery, tSTypeReference, tSUndefinedKeyword, tSUnionType, tSUnknownKeyword, tSVoidKeyword, taggedTemplateExpression, templateElement, templateLiteral, thisExpression, thisTypeAnnotation, throwStatement, toBindingIdentifierName, toBlock, toComputedKey, toExpression, toIdentifier, toKeyAlias, toSequenceExpression, toStatement, topicReference, traverse, traverseFast, tryStatement, tsAnyKeyword, tsArrayType, tsAsExpression, tsBigIntKeyword, tsBooleanKeyword, tsCallSignatureDeclaration, tsConditionalType, tsConstructSignatureDeclaration, tsConstructorType, tsDeclareFunction, tsDeclareMethod, tsEnumDeclaration, tsEnumMember, tsExportAssignment, tsExpressionWithTypeArguments, tsExternalModuleReference, tsFunctionType, tsImportEqualsDeclaration, tsImportType, tsIndexSignature, tsIndexedAccessType, tsInferType, tsInstantiationExpression, tsInterfaceBody, tsInterfaceDeclaration, tsIntersectionType, tsIntrinsicKeyword, tsLiteralType, tsMappedType, tsMethodSignature, tsModuleBlock, tsModuleDeclaration, tsNamedTupleMember, tsNamespaceExportDeclaration, tsNeverKeyword, tsNonNullExpression, tsNullKeyword, tsNumberKeyword, tsObjectKeyword, tsOptionalType, tsParameterProperty, tsParenthesizedType, tsPropertySignature, tsQualifiedName, tsRestType, tsSatisfiesExpression, tsStringKeyword, tsSymbolKeyword, tsThisType, tsTupleType, tsTypeAliasDeclaration, tsTypeAnnotation, tsTypeAssertion, tsTypeLiteral, tsTypeOperator, tsTypeParameter, tsTypeParameterDeclaration, tsTypeParameterInstantiation, tsTypePredicate, tsTypeQuery, tsTypeReference, tsUndefinedKeyword, tsUnionType, tsUnknownKeyword, tsVoidKeyword, tupleExpression, tupleTypeAnnotation, typeAlias, typeAnnotation, typeCastExpression, typeParameter, typeParameterDeclaration, typeParameterInstantiation, typeofTypeAnnotation, unaryExpression, unionTypeAnnotation, updateExpression, v8IntrinsicIdentifier, validate, valueToNode, variableDeclaration, variableDeclarator, variance, voidTypeAnnotation, whileStatement, withStatement, yieldExpression};