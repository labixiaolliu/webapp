import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
const moment = (date) => {
  // 七天前，显示具体时间
  if (dayjs(date).isBefore(dayjs().subtract(7, 'days'))) {
    return dayjs(date).format('YYYY-MM-DD')
  } else {
    return dayjs(date)
      .locale('zh-cn')
      .from(dayjs())
  }
}

export default {
  moment
}
