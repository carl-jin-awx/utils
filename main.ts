type IDobject = {
  [key: string]: any;
}

export const isEmptyObj = (obj: any) => typeof obj === 'function' && obj !== null

export const deleteProps = (obj: IDobject, keyList: string[] = []) => Object.keys(obj).reduce((acc, cur) => {
  if (!keyList.includes(cur)) {
    acc[cur] = obj[cur]
  }
  return acc
}, {} as IDobject)

export default {
  isEmptyObj,
  deleteProps
}

export const add = (val1: number, val2: number) => val1 + val2
