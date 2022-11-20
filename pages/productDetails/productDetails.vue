<template>
	<view class="details">
		<video :src="productDetails.videoUrl"></video>
		<view class="imageBox" v-for="item in productDetails.imageList">
			<image :src="item.imageUrl"></image>
		</view>
		<view class="copy" @click="copy">
			复制
		</view>

	</view>
</template>

<script>
	import request from '../../utils/util.js'
	import "../../styles/productDetails.scss"
	import showToast from '../../utils/showToast.js'

	export default {
		data() {
			return {
				productDetails: {}
			};
		},
		onLoad() {
			this.getImgList()
		},
		methods: {
		 async getImgList() {
				const {
					data
				} = await request('/detail?id=af98a2668f314c378938add6210cb3d6')
				console.log(data.data)
				this.productDetails = data.data
				console.log(this.productDetails)
			},
			copy() {
			 uni.setClipboardData({
					data: this.productDetails.taobaoUrl,
					success: function(res) {
						uni.getClipboardData({
							success: function(res) {
								showToast(res, 'yse', 3000)
							},
			  	});
					},
				});
			},


		},

	}
</script>
