export function windowResize(size) {
    return {
        type: "RESIZE",
        payload: size
    };
}