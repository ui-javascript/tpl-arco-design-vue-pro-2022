export const rule = [
  {
    type: 'input',
    field: 'goods_name',
    title: '商品名称',
  },
  {
    type: 'input',
    field: 'goods_name2',
    title: '商品名称2',
  },
  {
    type: 'datePicker',
    field: 'created_at',
    title: '创建时间',
  },
];

export const option = {
  onSubmit: function (formData: any) {
    alert(JSON.stringify(formData));
  },

  global: {
    '*': {
      // 'auto-label-width': true,
      col: {
        span: 8,
      },
      wrap: {
        labelColProps: { span: 8 },
        wrapperColProps: { span: 16 },
      },
      props: {
        disabled: false,
      },
    },
  },
};

export const fApi = {};
export const value = {};

export default {
  fApi,
  value,
  rule,
  option,
};
