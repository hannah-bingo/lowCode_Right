import {productListApi} from '@/api/link'

export default [
  {
    clickType: 1,
    label: '商品',
    component: 'com-table',
    url: productListApi,
    linkTextAttr: 'name',
    query: {
      jvStatus: 1,
      skuType: 0,
      status: 1
    },
    saveKeys: ['id', 'name'],
    columns: [
      { label: '商品编码', key: 'jvCode' },
      { label: '商品名称', key: 'name' },
      { label: '品牌', key: 'brand' }
    ],
    formConfig: {
      formAttrMap: {
        labelWidth: '110px'
      },
      formItemMap: {
        jvCode: {
          label: '编码',
          placeholder: '请输入编码名称',
          value: null
        },
        name: {
          label: '名称',
          placeholder: '请输入商品名称',
          value: null
        },
        brand: {
          label: '品牌',
          placeholder: '请输入品牌名称',
          value: null
        }
      }
    }
  },
  {
    clickType: 2,
    label: '跳转内部url',
    linkTextAttr: 'redirectUrl',
    component: 'inner-url'
  },
  {
    clickType: 3,
    label: '跳转外部url',
    linkTextAttr: 'redirectOuterUrl',
    component: 'outer-url'
  }
]
