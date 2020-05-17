import request from '@/utils/request'
export function getName( params ) {
  return {
    type:"ADD",
    payload: request.post('https://blogs.zdldove.top/Home/Apis/listWithPage',params)
  }
}