import type { CookieOptions } from "better-call";

export type BetterAuthOptions = {
    /**
     * The name of your application. Used as a display name in contexts
     * where your app needs to be identified — for example, as the default
     * issuer name in authenticator apps when users set up 2FA/TOTP.
     *
     * Can also be set via the `APP_NAME` environment variable.
     *
     * @default "Better Auth"
     */
    appName?: string | undefined;
    /**
     * Base path for the Better Auth. This is typically
     * the path where the
     * Better Auth routes are mounted.
     *
     * @default "/api/auth"
     */
    basePath?: string | undefined;
}
