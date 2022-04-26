export const rule = [
  {
    type: 'input',
    field: 'id',
    title: 'id',
  },
  {
    type: 'input',
    field: 'content',
    title: 'content',
  },
  {
    type: 'input',
    field: 'headline',
    title: 'headline',
  },
  {
    type: 'input',
    field: 'name',
    title: 'name',
  },
  {
    type: 'input',
    field: 'url',
    title: 'url',
  },
  {
    type: 'input',
    field: 'image',
    title: 'image',
  },
  {
    type: 'input',
    field: 'is_deleted',
    title: 'isDeleted',
  },
  {
    type: 'input',
    field: 'is_picked',
    title: 'isPicked',
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
