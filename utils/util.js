export default function request(url,data,method){
    return new Promise((resolve,reject)=>{
        uni.request({
          url:'https://dhcookerproductmanual.touchdot.top/electric/mini/product'+url,
          data,
          method,
          success:res=>{
              resolve(res)
          },
          fail:err=>{
              reject(err)
          }
        })
    })
}