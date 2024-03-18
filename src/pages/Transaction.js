import React from 'react';
import { Table } from 'antd';


function Transaction() {
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
      title: 'Quantity',
      dataIndex: 'quantity',
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

  return (
    <>
      <div class="container">
        <div class="flex-display">
          <h2 >My Account</h2>
          <div class="spacing"></div>
          <input />
          <div class="spacing"></div>
          <h4 ><span>Add</span> | <span>MANAGE</span></h4>
          <h4 >Refresh</h4>
        </div>
        <div class='flex-display'>
         <h4><button class="button">+ Add Transaction</button></h4> 
          <h4><button class="button"> My Feed </button></h4>
          <div class="spacing"></div>
          <h4 > Icon</h4>
          <h4 ><i class="fa-solid fa-print"></i></h4>
        </div>
      </div>
      <div className='container'>
      <div className='flex-display'>
        <h3 >FILTER</h3>
        <h4 > <span>All</span> | <span>Gainers</span> | <span>Losers</span></h4>
      </div>
      <div className='flex-display'>
        <h3 >Group By</h3>
        <h4><input type='radio'/> None | <input type='radio'/> None | <input type='radio'/> None</h4>
      </div>
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  )
}
;
export default Transaction;