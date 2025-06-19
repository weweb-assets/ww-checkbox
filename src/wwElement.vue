<template>
    <div class="ww-checkbox" :style="style">
        <div :style="{ opacity: isChecked ? 1 : 0 }" v-html="iconHTML"></div>
    </div>
</template>

<script>
import { ref, watch, computed, inject } from 'vue';

export default {
    props: {
        content: { type: Object, required: true },
        states: { type: Array, default: () => [] },
    },
    setup(props) {
        const { getIcon } = wwLib.useIcons();
        const iconText = ref(null);

        const icon = computed(() => props.content.icon);

        watch(icon, async (newIcon) => {
            try {
                iconText.value = await getIcon(newIcon);
            } catch (error) {
                iconText.value = null;
            }
        }, { immediate: true });

        // Inject reactive states from parent
        const injectedStates = inject('checkboxStates', ref([]));
        
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
            // Use a placeholder icon in editor mode when no icon is set
            /* wwEditor:start */
            if (!this.iconText) {
                return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>';
            }
            /* wwEditor:end */
            return this.iconText;
        },
        style() {
            return {
                color: this.content.color,
                fontSize: `${this.content.fontSize}px`,
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
}
</style>