<template>
  <v-row align="center" :justify="justify" class="counter">
    <v-btn icon @click="$emit('minus')" color="primary" :disabled="!type">
      <v-icon>$backArrow</v-icon>
    </v-btn>

    <v-col cols="3" class="pa-0">
      <v-text-field
        :disabled="!type"
        hide-details
        dense
        class="pa-0 centered-input"
        color="primary"
        :value="quantity"
        @input="$emit('update:quantity', Number($event))"
      ></v-text-field>
    </v-col>

    <v-btn icon color="primary" @click="$emit('plus')" :disabled="!type">
      <v-icon>$nextArrow</v-icon>
    </v-btn>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Counter<T extends string> extends Vue {
  @Prop() quantity!: number;
  @Prop() type!: T;
  @Prop({ default: "center" }) justify!: string;
}
</script>

<style scoped>
.centered-input >>> input {
  text-align: center;
}
</style>
