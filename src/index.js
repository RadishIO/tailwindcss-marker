const plugin = require('tailwindcss/plugin');

function flattenColors(colors) {
    return Object.assign(
        {},
        ...Object.entries(colors).flatMap(([color, values]) =>
            typeof values == 'object'
                ? Object.entries(flattenColors(values)).map(([number, hex]) => ({
                    [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
                }))
                : [{ [`${color}`]: values }]
        )
    );
}

function toColorValue(maybeFunction) {
    return typeof maybeFunction === 'function' ? maybeFunction({}) : maybeFunction;
}

function sortProperties(obj) {
    let result = {};
    Object.keys(obj).sort((a,b) => a.localeCompare(b)).forEach(key => result[key] = obj[key]);
    return result;
}

const markerPlugin = plugin(
    function ({ addUtilities, theme, variants, e }) {
        const { DEFAULT, transparent, ...markerColors } = flattenColors(theme('markerColor'));

        let markerStyles = {};

        Object.entries(markerColors).forEach(([modifier, value]) => {
            const escapedModifier = e(modifier);
            const color = toColorValue(value);

            markerStyles[`.list-marker-${escapedModifier} > ::marker`] = { color: color };
            markerStyles[`.marker-${escapedModifier}::-webkit-details-marker, .marker-${escapedModifier}::marker`] = { color: color };
        });

        addUtilities(sortProperties(markerStyles), variants('markerColor', []));
    },
    {
        theme: {
            markerColor: (theme) => theme('colors')
        },
        variants: {
            markerColor: ['responsive', 'dark']
        }
    }
);

module.exports = markerPlugin;