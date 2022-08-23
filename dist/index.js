var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  NO_SEGMENT: () => NO_SEGMENT,
  elementNames: () => elementNames,
  isActiveElement: () => isActiveElement,
  isBooleanElement: () => isBooleanElement,
  isBoxElement: () => isBoxElement,
  isButtonElement: () => isButtonElement,
  isCaseElement: () => isCaseElement,
  isContainerElement: () => isContainerElement,
  isFlatElement: () => isFlatElement,
  isHtmlElement: () => isHtmlElement,
  isID: () => isID,
  isImportAction: () => isImportAction,
  isImportAnswerAction: () => isImportAnswerAction,
  isImportConfigureAction: () => isImportConfigureAction,
  isImportOpAction: () => isImportOpAction,
  isImportState: () => isImportState,
  isMessageElement: () => isMessageElement,
  isNamedElement: () => isNamedElement,
  isNumberElement: () => isNumberElement,
  isPatchAction: () => isPatchAction,
  isPostAction: () => isPostAction,
  isRadioElement: () => isRadioElement,
  isRealID: () => isRealID,
  isTextElement: () => isTextElement,
  isTextFileLineElement: () => isTextFileLineElement,
  isYesNoElement: () => isYesNoElement,
  num: () => num
});
module.exports = __toCommonJS(src_exports);

// src/risp/actions.ts
function isPatchAction(obj) {
  return typeof obj === "object" && obj !== null && "url" in obj && obj["type"] === "patch";
}
function isPostAction(obj) {
  return typeof obj === "object" && obj !== null && "url" in obj && obj["type"] === "post";
}

// src/risp/elements.ts
function isActiveElement(object) {
  return typeof object === "object" && object !== null && !!object["actions"];
}
function isNamedElement(object) {
  return typeof object === "object" && object !== null && "name" in object;
}
function isBooleanElement(object) {
  return isActiveElement(object) && object["type"] === "boolean";
}
function isYesNoElement(object) {
  return isActiveElement(object) && object["type"] === "yesno";
}
function isNumberElement(object) {
  return isActiveElement(object) && object["type"] === "number";
}
function isTextElement(object) {
  return isActiveElement(object) && object["type"] === "text";
}
function isButtonElement(object) {
  return isActiveElement(object) && object["type"] === "button";
}
function isContainerElement(object) {
  return typeof object === "object" && object !== null && !!object["elements"];
}
function isCaseElement(object) {
  return typeof object === "object" && object !== null && object["condition"] && object["cases"] && typeof object["cases"] === "object" && object["cases"] !== null;
}
function isFlatElement(object) {
  return isContainerElement(object) && object["type"] === "flat";
}
function isBoxElement(object) {
  return isContainerElement(object) && object["type"] === "box";
}
function isHtmlElement(object) {
  return typeof object === "object" && object !== null && object["type"] === "html" && "html" in object && typeof object["html"] === "string";
}
function isMessageElement(object) {
  return typeof object === "object" && object !== null && object["type"] === "message" && "severity" in object && ["info", "warning", "error", "success"].includes(object["severity"]) && "text" in object && typeof object["text"] === "string";
}
function isTextFileLineElement(object) {
  return typeof object === "object" && object !== null && object["type"] === "textFileLine" && "line" in object && typeof object["line"] === "object" && object["line"] !== null;
}
function isRadioElement(object) {
  return isActiveElement(object) && object["type"] === "radio" && "options" in object && typeof object["options"] === "object";
}

// src/import/ImportAction.ts
function isImportOpAction(obj) {
  if (typeof obj === "object" && obj !== null) {
    if ("op" in obj) {
      return ["segmentation", "classification", "analysis", "execution"].includes(obj.op);
    }
  }
  return false;
}
function isImportConfigureAction(obj) {
  if (typeof obj === "object" && obj !== null) {
    if ("configure" in obj) {
      return typeof obj["configure"] === "object" && obj["configure"] !== null;
    }
  }
  return false;
}
function isImportAnswerAction(obj) {
  if (typeof obj === "object" && obj !== null) {
    if ("answer" in obj) {
      return typeof obj["answer"] === "object" && obj["answer"] !== null;
    }
  }
  return false;
}
function isImportAction(obj) {
  return isImportOpAction(obj) || isImportConfigureAction(obj) || isImportAnswerAction(obj);
}

// src/import/ImportState.ts
function isImportState(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  if (obj === null) {
    return false;
  }
  if (!("stage" in obj) || !("files" in obj)) {
    return false;
  }
  if (typeof obj["stage"] !== "string") {
    return false;
  }
  if (!["initial", "segmented", "classified", "analyzed", "executed"].includes(obj["stage"])) {
    return false;
  }
  return true;
}

// src/import/TextFileLine.ts
var NO_SEGMENT = Symbol("NO_SEGMENT");

// src/process_types.ts
var isRealID = (id) => typeof id === "number";
var isID = (id) => isRealID(id) || id === null;

// src/utils.ts
function elementNames(element) {
  if (isContainerElement(element)) {
    const vars = /* @__PURE__ */ new Set();
    for (const sub of element.elements) {
      for (const name of elementNames(sub)) {
        vars.add(name);
      }
    }
    return vars;
  } else if (isNamedElement(element)) {
    return /* @__PURE__ */ new Set([element.name]);
  }
  return /* @__PURE__ */ new Set();
}
function num(str) {
  str = str.replace(/\s/g, "");
  try {
    if (/,\d+\./.test(str)) {
      str = str.replace(/,/g, "");
    } else if (/\.\d+,/.test(str)) {
      str = str.replace(/\./g, "").replace(/,/, ".");
    } else {
      str = str.replace(",", ".");
    }
    return parseFloat(str);
  } catch (err) {
    return NaN;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NO_SEGMENT,
  elementNames,
  isActiveElement,
  isBooleanElement,
  isBoxElement,
  isButtonElement,
  isCaseElement,
  isContainerElement,
  isFlatElement,
  isHtmlElement,
  isID,
  isImportAction,
  isImportAnswerAction,
  isImportConfigureAction,
  isImportOpAction,
  isImportState,
  isMessageElement,
  isNamedElement,
  isNumberElement,
  isPatchAction,
  isPostAction,
  isRadioElement,
  isRealID,
  isTextElement,
  isTextFileLineElement,
  isYesNoElement,
  num
});
