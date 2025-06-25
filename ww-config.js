export default {
    editor: {
        label: {
            en: 'Checkbox',
            fr: 'Checkbox',
        },
        icon: 'check',
    },
    states: ['checked'],
    options: {
        displayAllowedValues: ['flex', 'inline-flex'],
    },
    properties: {
        color: {
            label: { en: 'Color', fr: 'Couleur' },
            type: 'Color',
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
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
            type: 'SystemIcon',
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
            defaultValue: 'lucide/check',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'A string that defines the icon code',
            },
            /* wwEditor:end */
        },
    },
};
