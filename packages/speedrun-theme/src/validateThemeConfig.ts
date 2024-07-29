import { Joi } from "@docusaurus/utils-validation";

import type { ThemeConfigValidationContext } from "@docusaurus/types";

interface ThemeConfig {
	speedrunDocs?: {
		discord?: string;
		speedrunComURL?: string;
	};
}

export const DEFAULT_THEME_CONFIG: ThemeConfig = {
	speedrunDocs: {
		discord: "",
		speedrunComURL: "",
	},
};

export const Schema = Joi.object<ThemeConfig>({
	speedrunDocs: Joi.object({
		discord: Joi.string().optional().default(DEFAULT_THEME_CONFIG.speedrunDocs.discord),
		speedrunComURL: Joi.string().optional().default(DEFAULT_THEME_CONFIG.speedrunDocs.speedrunComURL),
	}).default(DEFAULT_THEME_CONFIG.speedrunDocs),
});

export function validateThemeConfig({ validate, themeConfig }: ThemeConfigValidationContext<ThemeConfig>): ThemeConfig {
	return validate(Schema, themeConfig);
}
