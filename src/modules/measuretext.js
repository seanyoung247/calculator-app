
/**
 * Measures the pixel width of a given text string
 * @param {*} text - The text to measure
 * @param {*} font - Canvas font descriptor of text
 * @returns Width of text in pixels
 */
function measureText(text, font) {
    if (!measureText.canvas) measureText.canvas = document.createElement("canvas");

    const ctx = measureText.canvas.getContext("2d");
    ctx.font = font;

    return ctx.measureText(text).width;
}

/**
 * Creates a Canvas style font descriptor from element properties
 * @param {*} element 
 * @returns String canvas font descripter 
 */
function getFont(element) {
    const styles = window.getComputedStyle(element, null);
    const weight = styles.getPropertyValue("font-weight") || "normal";
    const size = styles.getPropertyValue("font-size") || "16px";
    const family = styles.getPropertyValue("font-family") || "sans-serif";

    return `${weight} ${size} ${family}`;
}

export { measureText, getFont };
