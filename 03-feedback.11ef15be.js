!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequire4c75;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequire4c75=n);var o=n("1WSnx").throttle,a=document.querySelector(".feedback-form");a.addEventListener("input",o((function(e){i[e.target.name]=e.target.value,localStorage.setItem(l,JSON.stringify(i))}),500)),a.addEventListener("submit",(function(e){e.preventDefault(),console.log(i),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}));var l="feedback-form-state",i=JSON.parse(localStorage.getItem(l))||{};a.email.value=i.email||"",a.message.value=i.message||""}();
//# sourceMappingURL=03-feedback.11ef15be.js.map