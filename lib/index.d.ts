import { Context, Schema } from 'koishi';
export declare const name = "help-redirect";
export interface Config {
    targetCommand: string;
}
export declare const Config: Schema<Config>;
export declare function apply(ctx: Context, config: Config): void;
