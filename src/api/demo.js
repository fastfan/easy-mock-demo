/*
 * @Author: fastfan
 * @Date: 2021-04-30 17:17:31
 * @LastEditors: fastfan
 * @LastEditTime: 2021-04-30 17:18:57
 * @Description: your description
 */
import request from '@/utils/request.js'
const publicservice = ""

export function getContainersByPageId(params) {
    return request({
      url: `/${publicservice}/screen/generalInterface`,
      method: "get",
      params
    });
}  

export function getInfoById(params) {
    const url = `/${publicservice}/screen/generalInterface?indexTreeId=${indexTreeId}`;
    return request({
        url: url,
        method: "post",
        data:params
    });
  }