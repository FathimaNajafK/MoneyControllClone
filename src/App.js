import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Stock Name',
    dataIndex: 'name',
  },
  {
    title: 'Live Price',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title:'Quantity',
    dataIndex:'quantity',
    sorter: {
      compare: (a, b) => a.quantity - b.quantity,
      multiple: 0,
    },

  }
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
    quantity: 2,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
    quantity: 7,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
    quantity: 9,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
    quantity: 5,
  },
  
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const App = () => <Table columns={columns} dataSource={data} onChange={onChange} />;
export default App;