"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _React = React,
    useState = _React.useState;

function TestComponent2(props) {
  var list = props.list;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var handleInputValueChange = function handleInputValueChange(event) {
    return setInputValue(event.target.value);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "test-component"
  }, /*#__PURE__*/React.createElement("h3", null, " Test Component 2 "), /*#__PURE__*/React.createElement("label", null, " Current input value: ", inputValue, " "), /*#__PURE__*/React.createElement("input", {
    value: inputValue,
    onChange: handleInputValueChange,
    placeholder: "Current input value",
    style: {
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("label", null, " Some random list "), /*#__PURE__*/React.createElement("ul", null, list.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, " ", item, " ");
  })));
}