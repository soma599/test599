<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" mode="aspectFit"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<view class="demo-box">Tailwind + uni-app 已启用</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		}
	}
}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}

.demo-box {
	margin-top: 24rpx;
	padding: 20rpx 24rpx;
	background-color: #ef4444;
	color: #ffffff;
	font-size: 28rpx;
	border-radius: 12rpx;
}
</style>
