<template>
	<view class="drag-sort-list">
		<view v-for="(item, index) in items" :key="item.id || index" class="drag-sort-item">
			<text>{{ item.label || item }}</text>
		</view>
	</view>
</template>

<script>
export default {
	name: 'DragSortList',
	props: {
		items: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style>
.drag-sort-list {
	display: flex;
	flex-direction: column;
	gap: 12rpx;
}

.drag-sort-item {
	padding: 16rpx;
	background: #ffffff;
	border: 1rpx solid #e5e7eb;
	border-radius: 8rpx;
}
</style>
