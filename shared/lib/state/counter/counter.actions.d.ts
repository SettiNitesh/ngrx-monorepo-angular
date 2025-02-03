export declare const increment: import("@ngrx/store").ActionCreator<"[Counter] Increment", () => import("@ngrx/store").Action<"[Counter] Increment">>;
export declare const decrement: import("@ngrx/store").ActionCreator<"[Counter] Decrement", () => import("@ngrx/store").Action<"[Counter] Decrement">>;
export declare const reset: import("@ngrx/store").ActionCreator<"reset", () => import("@ngrx/store").Action<"reset">>;
export declare const addToCounter: import("@ngrx/store").ActionCreator<"addToCounter", (props: {
    value: number;
}) => {
    value: number;
} & import("@ngrx/store").Action<"addToCounter">>;
