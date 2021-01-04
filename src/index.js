const _ = require('lodash');
const plugin = require('tailwindcss/plugin');

const flatten = require('tailwindcss/lib/util/flattenColorPalette');
const toColorValue = require('tailwindcss/lib/util/toColorValue');

const marker = plugin(
    function ({ addUtilities, theme, variants, e }) {
        const listMarkerColors = flatten.default(theme('listMarkerColor'));
        const markerColors = flatten.default(theme('markerColor'));

        const listMarkerStyles = _.fromPairs(
            _.map(_.omit(listMarkerColors, 'DEFAULT', 'transparent'), (value, modifier) => {
                return [
                    `.list-marker-${e(modifier)} > ::marker`,
                    { color: toColorValue.default(value) }
                ];
            })
        );

        const markerStyles = _.fromPairs(
            _.map(_.omit(markerColors, 'DEFAULT', 'transparent'), (value, modifier) => {
                return [
                    `.marker-${e(modifier)}::-webkit-details-marker, .marker-${e(modifier)}::marker`,
                    { color: toColorValue.default(value) }
                ];
            })
        );

        addUtilities(listMarkerStyles, variants('listMarkerColor', []));
        addUtilities(markerStyles, variants('markerColor', []));
    },
    {
        theme: {
            listMarkerColor: (theme) => theme('colors'),
            markerColor: (theme) => theme('colors')
        },
        variants: {
            listMarkerColor: ['responsive', 'dark'],
            markerColor: ['responsive', 'dark']
        }
    }
)

module.exports = marker;