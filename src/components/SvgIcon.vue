<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-on="$listeners"
  />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { isExternal } from "@/Utils/validate";
import { Component,  Prop, Vue } from "vue-property-decorator";

@Component
export default class SvgIcon extends Vue {
  @Prop({ type: String, required: true }) iconClass!: string;
  @Prop({ type: String, default: "" }) className!: string;
  get isExternal() {
    return isExternal(this.iconClass);
  }
  get iconName(): string {
    return "#icon-" + this.iconClass;
  }
  get svgClass(): string {
    return this.className ? "svg-icon " + this.className : "svg-icon";
  }
  get styleExternalIcon() {
    return {
      mask: "url(" + this.iconClass + ") no-repeat 50% 50%",
      "-webkit-mask": "url(" + this.iconClass + ") no-repeat 50% 50%",
    };
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>