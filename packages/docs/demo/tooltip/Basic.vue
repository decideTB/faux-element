<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <er-tooltip
        class="box-item"
        content="左上"
        placement="top-start"
      >
        <er-button>文字提示</er-button>
      </er-tooltip>
      <er-tooltip
        class="box-item"
        content="上"
        placement="top"
      >
        <er-button>文字提示</er-button>
      </er-tooltip>
      <er-tooltip
        class="box-item"
        content="右上"
        placement="top-end"
      >
        <er-button>文字提示</er-button>
      </er-tooltip>
    </div>
    <div class="row">
      <er-tooltip
        class="box-item"
        content="左上"
        placement="left-start"
      >
        <er-button>文字提示</er-button>
      </er-tooltip>
      <er-tooltip
        class="box-item"
        content="右上"
        placement="right-start"
      >
        <er-button>文字提示</er-button>
      </er-tooltip>
    </div>
    <div class="row">
      <er-tooltip
        class="box-item"
        content="左"
        placement="left"
      >
        <er-button class="mt-3 mb-3">文字提示</er-button>
      </er-tooltip>
      <er-tooltip
        class="box-item"
        content="右"
        placement="right"
      >
        <er-button>文字提示</er-button>
      </er-tooltip>
    </div>
    <div class="row">
      <er-tooltip
        class="box-item"
        content="左下"
        placement="left-end"
      >
        <er-button>文字提示</er-button>
      </er-tooltip>
      <er-tooltip
        class="box-item"
        content="右下"
        placement="right-end"
      >
        <er-button>文字提示</er-button>
      </er-tooltip>
    </div>
    <div class="row center">
      <er-tooltip
        class="box-item"
        content="左下"
        placement="bottom-start"
      >
        <er-button>文字提示</er-button>
      </er-tooltip>
      <er-tooltip
        class="box-item"
        content="下"
        placement="bottom"
      >
        <er-button>文字提示</er-button>
      </er-tooltip>
      <er-tooltip
        class="box-item"
        content="右下"
        placement="bottom-end"
      >
        <er-button>文字提示</er-button>
      </er-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
