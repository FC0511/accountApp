<template>
	<layout>
		<p>Money.vue</p>
	</layout>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Layout from "@/components/Layout.vue";

    @Component({
        components: {Layout}
    })
    export default class Money extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>
