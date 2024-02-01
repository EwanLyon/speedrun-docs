"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoLinkerRemark = exports.validateThemeConfig = void 0;
const tslib_1 = require("tslib");
const video_linker_1 = tslib_1.__importDefault(require("./remark/video-linker"));
exports.videoLinkerRemark = video_linker_1.default;
function themeSpeedrun() {
    return {
        name: "speedrun-docs-theme",
        getThemePath() {
            return "../lib/theme";
        },
        getTypeScriptThemePath() {
            return "../src/theme";
        },
        getClientModules() {
            return [require.resolve("./css/custom.css")];
        },
    };
}
exports.default = themeSpeedrun;
var validateThemeConfig_1 = require("./validateThemeConfig");
Object.defineProperty(exports, "validateThemeConfig", { enumerable: true, get: function () { return validateThemeConfig_1.validateThemeConfig; } });
