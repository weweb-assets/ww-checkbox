<template>
    <div class="ww-checkbox" :style="style" v-html="iconHTML"></div>
</template>

<script>
import { ref, watch, computed } from 'vue';

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

        const internalStates = ref([]);

        return {
            iconText,
            internalStates,
        };
    },
    mounted() {
        console.log('ww-checkbox mounted:', { content: this.content, states: this.states });
        this.internalStates = [...this.states];
        
        // Listen for state updates from parent
        this.$el.addEventListener('updateCheckboxStates', (event) => {
            console.log('ww-checkbox received updateCheckboxStates event:', event.detail);
            this.internalStates = [...event.detail.states];
        });
    },
    watch: {
        states: {
            handler(newStates, oldStates) {
                console.log('ww-checkbox states watcher:', { newStates, oldStates });
                this.internalStates = [...newStates];
            },
            immediate: true,
            deep: true
        }
    },
    computed: {
        isChecked() {
            const checked = this.internalStates.includes('checked');
            console.log('ww-checkbox isChecked:', { internalStates: this.internalStates, checked });
            return checked;
        },
        iconHTML() {
            console.log('ww-checkbox iconHTML computed:', { isChecked: this.isChecked, iconText: this.iconText });
            
            // Only show icon when checked
            if (!this.isChecked) {
                console.log('ww-checkbox: not checked, returning empty string');
                return '';
            }
            
            console.log('ww-checkbox: is checked, showing icon');
            
            // Use a placeholder icon in editor mode when no icon is set
            /* wwEditor:start */
            if (!this.iconText) {
                console.log('ww-checkbox: using fallback icon');
                return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>';
            }
            /* wwEditor:end */
            console.log('ww-checkbox: using loaded icon');
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