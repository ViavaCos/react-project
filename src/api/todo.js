import request from '../utils/request'
const base = 'http://localhost:5555'

// 获取列表
export const getTodosList = (data) => {
  return request('get', base + '/getTodosList', data)
}

// 更新
export const updateTodo = (data) => {
  return request('post', base + '/updateTodo', data)
}

// 新增
export const addTodo = (data) => {
  return request('post', base + '/addTodo', data)
}

// 删除
export const deleteTodo = (data) => {
  return request('delete', base + '/deleteTodo', data)
}