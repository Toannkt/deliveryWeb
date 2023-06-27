/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Tabs } from "antd";
import BillOfLading from "./BillOfLading";
import ProhibitedGoods from "./ProhibitedGoods";
import Freight from "./Freight";
import PostOffices from "./PostOffices";
import PriceList from "./PriceList";
import { Outlet, useNavigate } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
const { TabPane } = Tabs;

export default function Track({ number }) {
      const { setMetadata } = useContext(MainContext);
      useEffect(() => {
            setMetadata((prev) => {
                  return {
                        ...prev,
                        title: "Tra cứu | T&T",
                  };
            });
      }, []);

      const onChange = (key) => {
            console.log(key);
      };
      const navigate = useNavigate();
      const [defaultService, setDefaultService] = useState("cước vận chuyển");
      function callback(dichVu) {
            setDefaultService(dichVu);
            navigate(`/tra-cuu/${dichVu}`);
      }

      return (
            <>
                  <div className='carousel' style={{ paddingTop: "50px" }}>
                        <a href='#'>
                              <img
                                    className='h-full'
                                    src='https://www.larcenter.com.br/wp-content/uploads/sites/3/curriculos/LC-CN-Banner-Home-Site.png'
                                    alt=''
                              />
                        </a>
                  </div>
                  <div
                        className='custom-tab shadow-[#000000] container mx-auto text-xl '
                        style={{ maxWidth: "1200px" }}
                  >
                        <Tabs
                              activeKey={number}
                              onChange={callback}
                              centered
                              size='large'
                              tabPosition='top'
                              type='line'
                              className='p-3'
                              tabBarStyle={{ color: "#fcd535" }}
                        >
                              <TabPane tab='Cước vận chuyển' key='cuoc-van-chuyen'>
                                    <Freight />
                              </TabPane>
                              <TabPane tab='Vận đơn' key='van-don'>
                                    <BillOfLading />
                              </TabPane>
                              <TabPane tab='Bưu cục' key='buu-cuc'>
                                    <PostOffices />
                              </TabPane>
                              <TabPane tab='Bảng giá' key='bang-gia'>
                                    <PriceList />
                              </TabPane>
                              <TabPane tab='Hàng cấm gửi' key='hang-cam-gui'>
                                    <ProhibitedGoods />
                              </TabPane>
                        </Tabs>
                  </div>
                  <Outlet />
            </>
      );
}
