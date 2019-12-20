import * as CSS2D from "three/examples/jsm/renderers/CSS2DRenderer";

/*
 * Mixin containing the logic for dealing with text labels.
 */
export const addAxisLabels = function(symbol, coordinate, textColor, backgroundColor) {
    const text = document.createElement('div');
    text.className ='label';
    text.style.color = textColor;
    text.style.backgroundColor = backgroundColor;
    text.textContent = symbol;
    const label = new CSS2D.CSS2DObject( text );
    label.position.copy(coordinate);

    return label;
};
