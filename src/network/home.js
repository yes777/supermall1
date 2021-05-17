import {request} from "./request";


//函数调用 -> 压入函数栈（保存函数调用过程中所有变量）
//函数调用结束 -> 弹出函数栈（释放函数所有的变量）再调用一次的时候函数变量重新创建
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
