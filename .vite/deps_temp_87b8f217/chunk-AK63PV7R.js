import {
  dialogTitleClasses_default
} from "./chunk-ERLNRHU4.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_extends,
  require_jsx_runtime,
  require_prop_types,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-W63IDYS2.js";
import {
  require_react
} from "./chunk-UM3JHGVO.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/@mui/material/DialogContent/DialogContent.js
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/DialogContent/dialogContentClasses.js
function getDialogContentUtilityClass(slot) {
  return generateUtilityClass("MuiDialogContent", slot);
}
var dialogContentClasses = generateUtilityClasses("MuiDialogContent", ["root", "dividers"]);
var dialogContentClasses_default = dialogContentClasses;

// node_modules/@mui/material/DialogContent/DialogContent.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "dividers"];
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    dividers
  } = ownerState;
  const slots = {
    root: ["root", dividers && "dividers"]
  };
  return composeClasses(slots, getDialogContentUtilityClass, classes);
};
var DialogContentRoot = styled_default("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.dividers && styles.dividers];
  }
})(({
  theme,
  ownerState
}) => _extends({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, ownerState.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
} : {
  [`.${dialogTitleClasses_default.root} + &`]: {
    paddingTop: 0
  }
}));
var DialogContent = React.forwardRef(function DialogContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDialogContent"
  });
  const {
    className,
    dividers = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    dividers
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(DialogContentRoot, _extends({
    className: clsx_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? DialogContent.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: import_prop_types.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var DialogContent_default = DialogContent;

export {
  getDialogContentUtilityClass,
  dialogContentClasses_default,
  DialogContent_default
};
//# sourceMappingURL=chunk-AK63PV7R.js.map
