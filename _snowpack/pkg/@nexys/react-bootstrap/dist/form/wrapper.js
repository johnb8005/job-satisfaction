import { g as getDefaultExportFromCjs, c as createCommonjsModule, r as react, a as commonjsGlobal } from '../../../../common/index-4b0af3e2.js';

var wrapper = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper2 = exports.Wrapper = void 0;
const react_1 = __importDefault(react);
const Wrapper = ({ label, info, children, errors }) => (react_1.default.createElement("div", { className: "form-group" },
    react_1.default.createElement("label", null, label),
    children,
    react_1.default.createElement("small", { 
        //id="emailHelp"
        className: "form-text text-muted" }, info),
    errors && (react_1.default.createElement("div", { className: "invalid-feedback" },
        react_1.default.createElement("ul", { className: "list list-unstyled" }, errors.map((e, i) => (react_1.default.createElement("li", { key: i }, e))))))));
exports.Wrapper = Wrapper;
const Wrapper2 = ({ label, children, }) => (react_1.default.createElement("div", { className: "col-auto" },
    label && react_1.default.createElement("label", { className: "mr-sm-2" }, label),
    children));
exports.Wrapper2 = Wrapper2;
exports.default = exports.Wrapper;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(wrapper);

export default __pika_web_default_export_for_treeshaking__;
