import React,{useState} from 'react'
import { Table, Space, Dropdown, Menu, Button, message ,} from "antd";
import {
  DownOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import data from '../../data/data'


const Home = (props) => {
    const [tableData, setTableData] = useState(data);

    const handleMenuClick = (e) => {
        if (e.key == "allWare"){
            setTableData(data);
        }else {
            const wareData = [];
            data.forEach((element) => {
              if (element.ware == e.key) {
                wareData.push(element);
              }
            });
            setTableData(wareData);
        }
        
    };
    
    const menu = (
      <Menu
        onClick={handleMenuClick}
        items={[
          {
            label: "All - Ware",
            key: "allWare",
            icon: <UserOutlined />,
          },
          {
            label: "Top - Ware",
            key: "topWare",
            icon: <UserOutlined />,
          },
          {
            label: "Bottom - Ware",
            key: "bottomWare",
            icon: <UserOutlined />,
          },
          {
            label: "Foot - Ware",
            key: "footWare",
            icon: <UserOutlined />,
          },
        ]}
      />
    );

    
    const columns = [
        {
            title: 'Ware',
            dataIndex: "ware",
            key: 'ware',    
        },
      {
        title: "Cloth",
        dataIndex: "cloth",
        key: "cloth",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "Number",
        dataIndex: "number",
        key: "number",
      },
      {
          title: "Color",
          dataIndex : "color",
          key: "color"
      }
    //   {
    //     title: "Tags",
    //     key: "tags",
    //     dataIndex: "tags",
    //     render: (_, { tags }) => (
    //       <>
    //         {tags.map((tag) => {
    //           let color = tag.length > 5 ? "geekblue" : "green";

    //           if (tag === "loser") {
    //             color = "volcano";
    //           }

    //           return (
    //             <Tag color={color} key={tag}>
    //               {tag.toUpperCase()}
    //             </Tag>
    //           );
    //         })}
    //       </>
    //     ),
    //   },
    //   {
    //     title: "Action",
    //     key: "action",
    //     render: (_, record) => (
    //       <Space size="middle">
    //         <a>Invite {record.name}</a>
    //         <a>Delete</a>
    //       </Space>
    //     ),
    //   },
    ];
    
  return (
    <>
      <Dropdown overlay={menu}>
        <Button
          style={{
            float: "center",
            marginLeft: "10rem",
          }}
        >
          <Space>
            Select-Ware
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        onClick={() => props.isLogin(false)}
        style={{
          float: "right",
          margin: "20px",
        }}
      >
        Log Out !
      </Button>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
}

export default Home