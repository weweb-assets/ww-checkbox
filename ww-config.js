export default {
    editor: {
        label: {
            en: 'Checkbox',
            fr: 'Checkbox',
        },
        icon: 'check',
    },
    options: {
        hyperlink: true,
    },
    properties: {
        fontSize: {
            label: { en: 'Size', fr: 'Taille' },
            type: 'Number',
            bindable: true,
            responsive: true,
            states: true,
            defaultValue: 20,
            /* wwEditor:start */
            bindingValidation: {
                type: 'number',
                tooltip: 'A number that defines the icon size: `12`',
            },
            /* wwEditor:end */
        },
        color: {
            label: { en: 'Color', fr: 'Couleur' },
            type: 'Color',
            bindable: true,
            responsive: true,
            states: true,
            defaultValue: '#000000',
            /* wwEditor:start */
            bindingValidation: {
                cssSupports: 'color',
                type: 'string',
                tooltip: 'A string that represents a color code: `"rebeccapurple" | "#00ff00" | "rgb(214, 122, 127)"`',
            },
            /* wwEditor:end */
        },
        icon: {
            label: { en: 'Icon', fr: 'Icône' },
            type: 'Icon',
            bindable: true,
            responsive: true,
            states: true,
            defaultValue: 'wwi wwi-check',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'A string that defines the icon code: `"fas fa-check" | "wwi wwi-cross" | "icon-music-note"`',
            },
            /* wwEditor:end */
        },
    },
};
