<template>
  <ul class="pagination flex items-center justify-end gap-4">
    <li v-if="paginationLabels.prev">
      <button
        :disabled="hasFirst"
        :class="`${paginationClasses.button} ${
          hasFirst ? paginationClasses.buttonDisable : ''
        }`"
        class="pagination__item !p-0"
        @click="prev"
        aria-label="button"
      >
        <svg
          width="11"
          height="14"
          viewBox="0 0 11 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.70826 11.6933L8.70826 2.30662C8.70826 2.14554 8.60566 2.01496 8.47909 2.01496C8.43248 2.01496 8.38697 2.03305 8.34865 2.06682L3.02208 6.76015C2.91802 6.85184 2.89207 7.03354 2.96411 7.16598C2.97979 7.19481 2.99943 7.2198 3.02208 7.23976L8.34865 11.9331C8.45271 12.0248 8.59547 11.9918 8.66751 11.8593C8.69404 11.8105 8.70826 11.7526 8.70826 11.6933Z"
            fill="#515151"
          />
        </svg>
      </button>
    </li>
    <li
      v-for="page in items"
      :key="page.label"
      :class="`${paginationClasses.li} ${page.active ? '__active' : ''} ${
        page.disable ? paginationClasses.liDisable : ''
      }`"
    >
      <span
        v-if="page.disable"
        :class="`${paginationClasses.button} ${paginationClasses.buttonDisable}`"
        class="pagination__item"
      >
        ...
      </span>
      <button
        v-else
        :class="`${paginationClasses.button} ${
          page.active ? 'pagination__item-active' : ''
        }`"
        class="pagination__item"
        @click="goto(page.label)"
        aria-label="button"
      >
        {{ page.label }}
      </button>
    </li>
    <li
      v-if="paginationLabels.next"
      :class="`${paginationClasses.li} ${
        hasLast ? paginationClasses.liDisable : ''
      }`"
    >
      <button
        :disabled="hasLast"
        :class="[
          `${paginationClasses.button} ${
            hasLast ? paginationClasses.buttonDisable : ''
          }`,
          pagination.has,
        ]"
        class="pagination__item !p-0 rotate-180"
        @click="next"
        aria-label="button"
      >
        <svg
          width="11"
          height="14"
          viewBox="0 0 11 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.70826 11.6933L8.70826 2.30662C8.70826 2.14554 8.60566 2.01496 8.47909 2.01496C8.43248 2.01496 8.38697 2.03305 8.34865 2.06682L3.02208 6.76015C2.91802 6.85184 2.89207 7.03354 2.96411 7.16598C2.97979 7.19481 2.99943 7.2198 3.02208 7.23976L8.34865 11.9331C8.45271 12.0248 8.59547 11.9918 8.66751 11.8593C8.69404 11.8105 8.70826 11.7526 8.70826 11.6933Z"
            fill="#515151"
          />
        </svg>
      </button>
    </li>
  </ul>
</template>

<script>
const defaultClasses = {
  ul: "pagination",
  li: "pagination-item",
  liActive: "pagination-item--active",
  liDisable: "pagination-item--disable",
  button: "pagination-link",
  buttonActive: "pagination-link--active",
  buttonDisable: "pagination-link--disable",
};
const defaultLabels = {
  first: "&laquo;",
  prev: "&lsaquo;",
  next: "&rsaquo;",
  last: "&raquo;",
};
export default {
  props: {
    value: {
      // current page
      type: Number,
      required: true,
    },
    pageCount: {
      // page numbers
      type: Number,
      required: true,
    },
    classes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    labels: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    pagination: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  data() {
    return {
      paginationClasses: {
        ...defaultClasses,
        ...this.classes,
      },
      paginationLabels: {
        ...defaultLabels,
        ...this.labels,
      },
    };
  },
  computed: {
    items() {
      const valPrev = this.value > 1 ? this.value - 1 : 1; // for easier navigation - gives one previous page
      const valNext =
        this.value < this.pageCount ? this.value + 1 : this.pageCount; // one next page
      const extraPrev = valPrev === 3 ? 2 : null;
      const extraNext =
        valNext === this.pageCount - 2 ? this.pageCount - 1 : null;
      const dotsBefore = valPrev > 3 ? 2 : null;
      const dotsAfter =
        valNext < this.pageCount - 2 ? this.pageCount - 1 : null;
      const output = [];
      for (let i = 1; i <= this.pageCount; i += 1) {
        if (
          [
            1,
            this.pageCount,
            this.value,
            valPrev,
            valNext,
            extraPrev,
            extraNext,
            dotsBefore,
            dotsAfter,
          ].includes(i)
        ) {
          output.push({
            label: i,
            active: this.value === i,
            disable: [dotsBefore, dotsAfter].includes(i),
          });
        }
      }
      return output;
    },
    hasFirst() {
      return this.value === 1;
    },
    hasLast() {
      return this.value === this.pageCount;
    },
  },
  watch: {
    value() {
      this.$emit("change");
    },
  },
  mounted() {
    if (this.value > this.pageCount) {
      this.$emit("input", this.pageCount);
    }
  },
  methods: {
    first() {
      if (!this.hasFirst) {
        this.$emit("input", 1);
      }
    },
    prev() {
      if (!this.hasFirst) {
        this.$emit("input", this.value - 1);
      }
    },
    goto(page) {
      this.$emit("input", page);
    },
    next() {
      if (!this.hasLast) {
        this.$emit("input", this.value + 1);
      }
    },
    last() {
      if (!this.hasLast) {
        this.$emit("input", this.pageCount);
      }
    },
  },
};
</script>

<style>
.pagination__item {
  box-shadow: 0 10px 28px rgba(38, 55, 91, 0.06);
  border-radius: 12px;
  padding: 12px 17px;
  width: 44px;
  height: 44px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  font-feature-settings: "salt" on;
  color: #979798;
  transition: 0.2s ease-in-out;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination__item:hover {
  color: #1b9684;
}
.pagination__item-active {
  color: #ffffff;
  border: 1px solid #00a795;
}
</style>
