import { Joi } from "@docusaurus/utils-validation";
export const DEFAULT_THEME_CONFIG = {
    speedrunDocs: {
        discord: "",
        speedrunComURL: "",
    },
};
export const Schema = Joi.object({
    speedrunDocs: Joi.object({
        discord: Joi.string().optional().default(DEFAULT_THEME_CONFIG.speedrunDocs.discord),
        speedrunComURL: Joi.string().optional().default(DEFAULT_THEME_CONFIG.speedrunDocs.speedrunComURL),
    }).default(DEFAULT_THEME_CONFIG.speedrunDocs),
});
export function validateThemeConfig({ validate, themeConfig }) {
    return validate(Schema, themeConfig);
}
