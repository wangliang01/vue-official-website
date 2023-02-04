import AMapLoader from '@amap/amap-jsapi-loader'
import { onMounted } from 'vue'
function useMap(el = 'container', options = {}) {
  return new Promise((resolve, reject) => {
    AMapLoader.load({
      key: '41067b5a44b11a4f9a72ec9aa2ebed22', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.Geocoder'] // 需要使用的的插件列表，如比例尺'AMap.Geocoder'等
    })
      .then((AMap) => {
        const map = new AMap.Map(el, options)

        resolve({
          map,
          AMap
        })
      })
      .catch((e) => {
        console.log(e)
        reject(e)
      })
  })
}

// 添加marker
function addMarker(map, AMap) {
  const marker = new AMap.Marker({
    icon: '/pos.png',
    position: [120.538848, 31.276795],
    anchor: 'bottom-center'
  })

  map.add(marker)
}

export const initMap = () => {
  onMounted(async () => {
    const options = {
      zoom: 16, //级别
      center: [120.538848, 31.276795], //中心点坐标
      viewMode: '3D', //使用3D视图
      resizeEnable: true
    }
    const { map, AMap } = await useMap('container', options)

    // 添加marker
    addMarker(map, AMap)
  })
}
