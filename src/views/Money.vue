<template>
	<Layout class-prefix="layout">
		{{record}}
		<NumberPad :value.sync="record.amount" @submit="saveRecord"/>
		<Types :type.sync="record.type"/>
		<Notes :value.sync="record.notes"/>
		<Tags :data-source.sync="tagsArr" @update:value="onUpdateSelect"/>
	</Layout>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import Layout from "@/components/Layout.vue";
    import NumberPad from "@/components/Money/NumberPad.vue";
    import Notes from "@/components/Money/Notes.vue";
    import Tags from "@/components/Money/Tags.vue";
    import Types from "@/components/Money/Types.vue";
    import recordListModel from "@/models/recordListModel";
    import tagListModel from "@/models/tagListModel";

    @Component({
        components: {Types, Tags, Notes, NumberPad, Layout}
    })
    export default class Money extends Vue {
        type = "+";

        recordList = recordListModel.fetch();

        record: RecordItem = {
            tages: [],
            notes: "",
            type: "+",
            amount: "10",
        };

        tagsArr = tagListModel.fetch();

        // 获取被选中的tags
        onUpdateSelect(value: string[]) {
            console.log(value);
            this.record.tages = value;
        }

        onUpdateNotes(value: string) {
            console.log(value);
            this.record.notes = value;
        }

        onUpdateType(value: string) {
            console.log(value);
            this.record.type = value;
        }

        onUpdateAmount(value: string) {
            console.log(value);
            this.record.amount = value;
        }

        saveRecord() {
            const cloneRecord = recordListModel.clone(this.record);
            cloneRecord.date = new Date();
            this.recordList.push(cloneRecord);
        }

        @Watch("recordList")
        onValueChange(val: string, oldVal: string) {
            recordListModel.save(this.recordList);
        }
    }
</script>

<style lang="scss">
	.layout-content {
		display: flex;
		flex-direction: column-reverse;
	}
</style>
