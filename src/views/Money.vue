<template>
    <Layout class-prefix="layout">
        {{record}}
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <Types :type.sync="record.type"/>
        <div class="notes">
            <FormItem field-name="备注"
                      placeholder="在这里输入备注"
                      @update:value="onUpdateNotes"
            />
        </div>
        <Tags/>
    </Layout>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import Layout from "@/components/Layout.vue";
    import NumberPad from "@/components/Money/NumberPad.vue";
    import FormItem from "@/components/Money/FormItem.vue";
    import Tags from "@/components/Money/Tags.vue";
    import Types from "@/components/Money/Types.vue";

    @Component({
        components: {Types, Tags, FormItem, NumberPad, Layout},

        computed: {
            recordList() {
                return this.$store.state.recordList;
            }
        }
    })
    export default class Money extends Vue {

        record: RecordItem = {
            tages: [],
            notes: "",
            type: "+",
            amount: "10",
        };

        created(): void {
            this.$store.commit("fetchRecords");
        }

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
            this.$store.commit("createRecord", this.record);
        }

        @Watch("recordList")
        onValueChange(val: string, oldVal: string) {
            this.$store.commit("saveRecords");
        }
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
