<template>
		<view class="msgBox">
			<p class="title1">{{toast.title1}}</p>
			<p class="title2">{{toast.title2}}</p>
			<p class="title3">{{toast.title3}}</p>
			<button class="iknow" @click="close">知道啦</button>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				title:{},
				flag:false
			};
		},
		onLoad() {
		
		},
		methods:{
			close(){
				 this.$emit('flagClose', this.flag)
			}
		},
		props:['toast']
	}
</script>

<style lang="scss">
		.msgBox{
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin:auto;
			z-index: 20;
			width: 517rpx;
			height: 391rpx;
			background: white;
			border-radius: 20rpx;
			.title1{
				margin-top: 50rpx;
				text-align: center;
				font-size: 36rpx;
				font-family: PingFang SC;
				font-weight: 600;
			}
			.title2{
				margin-top: 35rpx;
				text-align: center;
			}
			.title3{
				text-align: center;
			}
			.iknow{
				margin-top: 48rpx;
				width: 342rpx;
				height: 94rpx;
				background: #d6000f;
				border-radius: 46px;
				font-size: 28rpx;
				font-family: PingFang SC;
				line-height: 94rpx;
				color: white;
			}
		}
	
	

</style>
