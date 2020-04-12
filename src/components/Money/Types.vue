<template>
	<div>
		<ul class="types">
			<li :class="type && type === '-' && `selected`" @click="changeType('-')">支出</li>
			<li :class="type && type === '+' && `selected`" @click="changeType('+')">收入</li>
		</ul>
	</div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";

    @Component
    export default class Types extends Vue {
        @Prop(String) type!: string;

        created(): void {
            console.log(this.type);
        }

        changeType(type: string) {
            this.$emit('update:type', type);
        }


    }
</script>

<style lang="scss" scoped>
	.types {
		background: #c4c4c4;
		display: flex;
		text-align: center;
		font-size: 24px;

		> li {
			width: 50%;
			height: 64px;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;

			&.selected::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 4px;
				background: #333;
			}
		}
	}
</style>
