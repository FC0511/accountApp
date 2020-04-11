<template>
	<Layout class-prefix="layout">
		<NumberPad/>
		<Types/>
		<Notes/>
		<Tags/>
	</Layout>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Layout from "@/components/Layout.vue";
    import NumberPad from "@/components/Money/NumberPad.vue";
    import Notes from "@/components/Money/Notes.vue";
    import Tags from "@/components/Money/Tags.vue";
    import Types from "@/components/Money/Types.vue";

    @Component({
        components: {Types, Tags, Notes, NumberPad, Layout}
    })
    export default class Money extends Vue {

    }
</script>

<style lang="scss">
	.layout-content {
		display: flex;
		flex-direction: column-reverse;
	}
</style>
