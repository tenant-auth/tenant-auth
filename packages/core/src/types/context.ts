import type { CookieOptions, EndpointContext } from "better-call";
import type { BetterAuthOptions } from "./init-options";

export type AuthContext<Options extends BetterAuthOptions = BetterAuthOptions> = {
    options: Options;
}
