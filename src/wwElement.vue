<template>
    <div class="ww-checkbox" :style="style" :class="{ checked: checked }">
        <div :class="[content.icon]" aria-hidden="true"></div>
    </div>
</template>

<script>
export default {
    props: {
        wwElementState: { type: Object, required: true },
        content: { type: Object, required: true },
    },
    computed: {
        checked() {
            return this.wwElementState.states.indexOf('checked') !== -1;
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
    opacity: 0;

    &.checked {
        opacity: 1;
    }
}
</style>
