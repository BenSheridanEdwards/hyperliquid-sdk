import type { Hex } from "../common.d.ts";
import type { TIF } from "../info/orders.d.ts";

/** Order parameters. */
export type Order = {
    /** An integer representing the asset being traded. */
    a: number;

    /** Is the order to buy? */
    b: boolean;

    /** Price. */
    p: string;

    /** Size (in base currency units). */
    s: string;

    /** Is reduce-only? */
    r: boolean;

    /** Order type and parameters. */
    t:
        | {
            /** Limit order parameters. */
            limit: {
                /** Time-in-force. */
                tif: TIF;
            };
        }
        | {
            /** Trigger order parameters. */
            trigger: {
                /** Is the market order. */
                isMarket: boolean;

                /** Trigger price. */
                triggerPx: string;

                /** Indicates if it's take-profit or stop-loss. */
                tpsl: "tp" | "sl";
            };
        };

    /** Client Order ID. */
    c?: Hex;
};
