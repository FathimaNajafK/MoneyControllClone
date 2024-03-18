import React, { useState } from 'react';
import { Table } from 'antd';


function Transaction() {
  const [AddTransaction, setAddTransaction] = useState(false)
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
      {AddTransaction ?
        <>
          <h1>Add Transaction</h1>
          <div class="container">
            <div class="flex-display">
              <h2 >My Account</h2>
              <div class="spacing"></div>
              <input />
              <div class="spacing"></div>
              <h4 ><span>Add</span> | <span>MANAGE</span></h4>
              <h4 >Refresh</h4>
            </div>
            <div class="flex-display"></div>
          </div>
          <div class="flex-display allign-flex-left">
            <button className='selectionButton mr-4'>Stocks/ETF</button>
            <button className='selectionButton mr-4'>Mutual Funds</button>
            <button className='selectionButton mr-4'>ULIPS</button>
            <button className='selectionButton mr-4'>Fixed Income</button>
            <button className='selectionButton mr-4'>Property</button>
            <button className='selectionButton mr-4'>Loan</button>
            <button className='selectionButton mr-4'>Other Assets</button>
            <button className='selectionButton mr-4'>Other Borrowings</button>
          </div>
          <div class="flex-display allign-flex-left">
            <h5 className='subselectionButton mr-4'>Manual Entry</h5>
            <h5 className='subselectionButton mr-4'>File Uplaod</h5>
            <h5 className='subselectionButton mr-4'>Upload Contract Note (Beta)</h5>
          </div>
          <div className='lightgreybackground '>
            <div className='flex-display allign-flex-left'>
              <select className='mr-4'>
                <option value={"sajs"}></option>
              </select>
              <select className='mr-4'>
                <option value={"sajs"}>Buy</option>
              </select>
              <div className='form-group mr-4'>
                <label className='mb-4'>Stock Name</label>
                <input type='text' />
              </div>
              <div className='form-group mr-4'>
                <label className='mb-4'>Exchange</label>
                <select >
                  <option value={"sajs"}>NSE</option>
                </select>
              </div>
              <div className='form-group mr-4'>
                <label className='mb-4'>Date</label>
                <input type='date' />
              </div>
              <div className='form-group mr-4'>
                <label className='mb-4'>Quantity</label>
                <input type='number' />
              </div>
              <div className='form-group mr-4'>
                <label className='mb-4'>Price/stock</label>
                <input type='number' />
              </div>
            </div>
<div className='allign-flex-left flex-display'>
<hr className='hrCenter ' />
</div>
            



            <div className='flex-display allign-flex-left'>
              <div className='form-group mr-4'>
                <label className='mb-4 font-color-grey'>Amount</label>
                <input type='number' />
              </div>

              <div className='form-group mr-4'>
                <label className='mb-4 font-color-grey'>Select Broker</label>
                <select >
                  <option value={"sajs"}>NSE</option>
                </select>
              </div>
              <div className='form-group mr-4'>
                <label className='mb-4 font-color-grey'>Total Charge</label>
                <input type='number' />
              </div>
              <div className='form-group mr-4'>
                <label className='mb-4 font-color-grey'>Net Amount</label>
                <input type='number' />
              </div>
              <div className='form-group mr-4'>
                <label className='mb-4 font-color-grey'>Stock Name</label>
                <input type='text' />
              </div>
              <h4 className='font-blue-underline'>Add Sip For this stock</h4>


            </div>
          </div>
          <div className='centerElement'>
            <h3>Add More Transaction</h3>
          </div>
          <div className='centerElement'>
            <button className='btn-blue'>Add Transaction</button>
            <button className='btn-blue-op' onClick={() => setAddTransaction(false)}>Reset</button>
          </div>

        </>
        :
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
              <h4><button class="button" onClick={() => setAddTransaction(true)}>+ Add Transaction</button></h4>
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
              <h4><input type='radio' /> None | <input type='radio' /> None | <input type='radio' /> None</h4>
            </div>
          </div>
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </>
      }</>
  )
}
;
export default Transaction;