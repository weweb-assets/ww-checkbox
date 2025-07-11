<template>
    <div class="ww-checkbox" :style="style" v-html="iconHTML" />
</template>

<script>
import { ref, watch, computed, inject } from 'vue';

export default {
    props: {
        content: { type: Object, required: true },
        states: { type: Array, default: () => [] },
    },
    emits: ['add-state', 'remove-state'],
    setup(props, { emit }) {
        const { getIcon } = wwLib.useIcons();
        const iconText = ref(null);

        const icon = computed(() => props.content.icon);

        watch(
            icon,
            async newIcon => {
                try {
                    iconText.value = await getIcon(newIcon);
                } catch (error) {
                    iconText.value = null;
                }
            },
            { immediate: true }
        );

        // Inject reactive states from parent
        const injectedStates = inject('checkboxStates', ref([]));

        // Watch for checked state changes
        watch(
            () => injectedStates.value.includes('checked'),
            (isChecked) => {
                if (isChecked) {
                    emit('add-state', 'checked');
                } else {
                    emit('remove-state', 'checked');
                }
            },
            { immediate: true }
        );

        // Watch for readonly state changes
        watch(
            () => injectedStates.value.includes('readonly'),
            (isReadonly) => {
                if (isReadonly) {
                    emit('add-state', 'readonly');
                } else {
                    emit('remove-state', 'readonly');
                }
            },
            { immediate: true }
        );

        return {
            iconText,
            injectedStates,
        };
    },
    computed: {
        isChecked() {
            return this.injectedStates.includes('checked');
        },
        iconHTML() {
            const opacity = this.isChecked ? 1 : 0;

            // Use a placeholder icon in editor mode when no icon is set
            /* wwEditor:start */
            if (!this.iconText) {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 256 256" style="opacity: ${opacity}"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>`;
            }
            /* wwEditor:end */

            return this.iconText;
        },
        style() {
            return {
                color: this.content.color,
            };
        },
    },
};
</script>

<style scoped lang="scss">
.ww-checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;

    :deep(svg) {
        width: 100%;
        height: 100%;
    }
}
</style>
