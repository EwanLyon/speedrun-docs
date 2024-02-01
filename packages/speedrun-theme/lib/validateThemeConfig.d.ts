import { Joi } from "@docusaurus/utils-validation";
import type { ThemeConfigValidationContext } from "@docusaurus/types";
interface ThemeConfig {
    speedrunDocs?: {
        discord?: string;
        speedrunComURL?: string;
    };
}
export declare const DEFAULT_THEME_CONFIG: ThemeConfig;
export declare const Schema: Joi.ObjectSchema<ThemeConfig>;
export declare function validateThemeConfig({ validate, themeConfig }: ThemeConfigValidationContext<ThemeConfig>): ThemeConfig;
export {};
