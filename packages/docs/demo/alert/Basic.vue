<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <er-alert type="success">成功提示</er-alert>
    <er-alert type="info">默认提示</er-alert>
    <er-alert type="warning">警告提示</er-alert>
    <er-alert type="danger">失败提示</er-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <er-alert type="success" title="成功提示" />
    <er-alert type="info" title="默认提示" />
    <er-alert type="warning" title="警告提示" />
    <er-alert type="danger" title="失败提示" />
  </div>
</template>
