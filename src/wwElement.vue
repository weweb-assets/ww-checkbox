<template>
    <div class="ww-checkbox" :style="style">
        <div v-show="checked" :class="[content.icon]" aria-hidden="true"></div>
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
            return this.wwElementState.props.checked
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
