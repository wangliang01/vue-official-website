import Header from './Header/index.vue'
import Footer from './Footer/index.vue'
import Slider from './Slider/slider.vue'
import SliderItem from './Slider/slider-item.vue'
import Card from './Card/index.vue'
import Button from './Button/index.vue'
import Swiper from './Swiper/index.vue'
import { App } from 'vue'

export default (Vue: App) => {
  Vue.component(Header.name, Header)
  Vue.component(Footer.name, Footer)
  Vue.component(Slider.name, Slider)
  Vue.component(SliderItem.name, SliderItem)
  Vue.component(Card.name, Card)
  Vue.component(Button.name, Button)
  Vue.component(Swiper.name, Swiper)
}
