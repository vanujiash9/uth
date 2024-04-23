import React, { useState } from 'react'; // Import useState from React
import { Input, Table } from 'antd';

const Text1 = () => {
  const columns = [
    { title: 'student code', dataIndex: 'studentCode', key: 'studentCode' },
    { title: 'student Name', dataIndex: 'studentName', key: 'studentName' },
    { title: 'final Test', dataIndex: 'result', key: 'result' },
    { title: 'Home Town', dataIndex: 'hometown', key: 'hometown' },
  ];
  const data = [
    { studentCode: '0909001', studentName: 'Lê Văn Thắng', result: 8, hometown: 'TPHCM' },
    { studentCode: '0909002', studentName: 'Trần Minh Tâm', result: 7.5, hometown: 'Đồng Nai' },
    { studentCode: '0909003', studentName: 'Lý Uyển Nhi', result: 8.6, hometown: 'TPHCM' },
    { studentCode: '0909004', studentName: 'Trịnh Thị Thu Thảo', result: 6, hometown: 'Tiền Giang' },
    { studentCode: '0909005', studentName: 'Lê Văn Thắng', result: 8, hometown: 'Khánh Hòa' },
  ];
  const [searchText, setSearchText] = useState(''); // Define search text state
  const [searchData, setSearchData] = useState(data); // Define search data state
  const [filteredData, setFilteredData] = useState(data); // Define filtered data state

  return (
    <div style={{ display: 'inline' }}>
      <div>
        Find student by name:
        <Input 
          type="text" 
          value={searchText} 
          onChange={(e) => setSearchText(e.currentTarget.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              const filtered = data.filter(x => x.studentName.toLowerCase().includes(searchText));
              setSearchData(filtered);
              setFilteredData(filtered); // Set filtered data state
            }
          }}
        />
        {/* Add key for checkboxes */}
        <input type="checkbox" key="checkbox1" />&nbsp;TPHCM&nbsp;
        <input type="checkbox" key="checkbox2" />&nbsp;Khánh Hòa&nbsp;
      </div>
      <Table columns={columns} dataSource={filteredData} /> {/* Use filteredData here */}
    </div>
  );
};

export default Text1;
