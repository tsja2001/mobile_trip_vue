import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'

export default function useScroll() {
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  // 触底刷新
  const scrollListenerHandler = throttle(() => {
    // 屏幕高度
    clientHeight.value =
      document.documentElement.clientHeight
    // 当前屏幕距离顶部距离
    scrollTop.value = document.documentElement.scrollTop
    // 整个页面的高度
    scrollHeight.value =
      document.documentElement.scrollHeight
    //   监测到滚动到底部了
    if (
      clientHeight.value + scrollTop.value >=
      scrollHeight.value
    ) {
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandler)
  })

  onUnmounted(() => {
    window.removeEventListener(
      'scroll',
      scrollListenerHandler
    )
  })

  return {
    isReachBottom,
    clientHeight,
    scrollTop,
    scrollHeight
  }
}
