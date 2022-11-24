<template>
	<view class="details">
		<video :src="productDetails.videoUrl"></video>
		<view class="imageBox" v-for="item in productDetails.imageList">
			<image :src="item.imageUrl"></image>
		</view>
		<view class="urlBox">
			<view class="center">
				<view class="titleBox" @click="copyUrl(item.index)" v-for="item in urlList">
					{{item.biaoTi}}
				</view>
			</view>
		</view>
		<view class="zhedang">
			
		</view>
		<show v-if="flag" :toast='toast' @flagClose="getFlag"></show>
	</view>
</template>

<script>
	import request from '../../utils/util.js'
	import "../../styles/productDetails.scss"

	import show from './showToast/showToast.vue'

	export default {
		data() {
			return {
				productDetails: {},
				flag: false,
				toast: {},
				urlList: [{
					biaoTi: '前往淘宝查看',
					index: 1
				}, {
					biaoTi: '前往京东查看',
					index: 2
				}]

			};
		},

		onLoad() {
			this.getImgList();
			console.log(this.productDetails.productNameCn)
			
		},

		methods: {
			async getImgList() {
			
				const {
					data
				} = await request('/detail?id=af98a2668f314c378938add6210cb3d6')
				console.log(data.data)
				this.productDetails = data.data
				console.log(this.productDetails)
				this.productDetails.taobaoUrl = '1111'
			    wx.setNavigationBarTitle({ title:'aaa'})
			},

			copyUrl(pamaras) {
				let url = ''
				if (pamaras == 2) {
					let toast = {
						title1: '请打开京东App',
						title2: '复制京东口令成功',
						title3: '打开京东App即可查看'
					}
					url = this.productDetails.jdUrl
					this.toast = toast;
				};
				if (pamaras == 1) {
					let toast = {
						title1: '请打开淘宝App',
						title2: '复制淘宝口令成功',
						title3: '打开淘宝App即可查看'
					}
					url = this.productDetails.taobaoUrl
					this.toast = toast;
				}
				this.flag = true;
				this.copy(url)

			},

			copy(url) {
				wx.setClipboardData({
					data: url,
					complete: function() {
						wx.hideToast()
					}
				});
			},

			getFlag(val) {
				this.flag = val
			}

		},
		components: {
			show
		}

	}
</script>
