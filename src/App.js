/** @format */

import React, { useContext } from "react";
import "./App.css";
import "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import {
      Home,
      DefaultLayout,
      About,
      Commit,
      //-----Track
      Track,
      //-----Service
      Service,
      ServiceAll,
      StandardService,
      FastService,
      SuperService,
      FreshService,
      //----Opportunities
      ListOpportunities,
      DetailOpportunites,
      CareerOpportunities,
      RecruitmentDetails,
      Life,
      //-----Profile
      Profile,
      Purchase,
      ChangePassword,
      PurchaseDetail,
      PurchaseStage,
      NotificationCustomer,
      CreateOrder,
      //----- Register/Login
      Register,
      Login,
      ForgetPass,
      Register_OTP,
      //-----advice
      Contact,
      SignUpAdvice,
      PageNotFound,
} from "./pages/pageExport";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainProvider, { MainContext } from "./context/MainContext";
import Metadata from "./SEO/Metadata";
import CustomerRoute from "./layouts/CustomerRoute";
import ProtectedRoute from "./layouts/ProtectLayout";
const App = () => {
      return (
            <MainProvider>
                  <Metadata>
                        <BrowserRouter>
                              <div className='wrapper'>
                                    <ScrollToTop />
                                    <Routes>
                                          <Route path='/' element={<DefaultLayout />}>
                                                <Route index element={<Home />}></Route>
                                                <Route path='ve-chung-toi' element={<About />} />
                                                <Route path='cam-ket' element={<Commit />} />
                                                {/* -----------------------Tra cứu---------------------- */}
                                                <Route
                                                      path='tra-cuu'
                                                      element={<Track number='cuoc-van-chuyen' />}
                                                ></Route>
                                                <Route
                                                      path='tra-cuu/cuoc-van-chuyen'
                                                      element={<Track number='cuoc-van-chuyen' />}
                                                />
                                                <Route path='tra-cuu/van-don' element={<Track number='van-don' />} />
                                                <Route path='tra-cuu/buu-cuc' element={<Track number='buu-cuc' />} />
                                                <Route path='tra-cuu/bang-gia' element={<Track number='bang-gia' />} />
                                                <Route
                                                      path='tra-cuu/hang-cam-gui'
                                                      element={<Track number='hang-cam-gui' />}
                                                />
                                                {/* ------------------------Dịch vụ---------------------- */}
                                                <Route path='dich-vu' element={<Service />} />
                                                <Route path='dich-vu/:id' element={<ServiceAll />} />
                                                <Route path='chuyen-phat-tieu-chuan' element={<StandardService />} />
                                                <Route path='chuyen-phat-nhanh' element={<FastService />} />
                                                <Route path='sieu-dich-vu-chuyen-phat' element={<SuperService />} />
                                                <Route path='chuyen-phat-do-tuoi-song' element={<FreshService />} />
                                                {/* ------------------------Tuyển dụng------------------- */}
                                                <Route path='danh-sach-tuyen-dung' element={<ListOpportunities />} />
                                                <Route path='tuyen-dung/:id' element={<DetailOpportunites />} />
                                                <Route path='tuyen-dung' element={<CareerOpportunities />}>
                                                      <Route
                                                            path='chi-tiet-viec-lam-noi-bat'
                                                            element={<RecruitmentDetails />}
                                                      />
                                                      <Route
                                                            path='chi-tiet-viec-lam-moi'
                                                            element={<RecruitmentDetails />}
                                                      />
                                                </Route>
                                                <Route path='cuoc-song' element={<Life />} />
                                                {/* ----------------------Profile------------------ */}
                                                <Route element={<CustomerRoute />}>
                                                      <Route path='khach-hang/trang-ca-nhan' element={<Profile />} />
                                                      <Route path='khach-hang/dat-hang' element={<Purchase />} />
                                                      <Route
                                                            path='khach-hang/thay-doi-mat-khau'
                                                            element={<ChangePassword />}
                                                      />
                                                      <Route
                                                            path='khach-hang/dat-hang/:id'
                                                            element={<PurchaseDetail />}
                                                      />
                                                      <Route path='khach-hang/tao-don-hang' element={<CreateOrder />} />
                                                      <Route
                                                            path='khach-hang/dat-hang/don-hang/:id'
                                                            element={<PurchaseStage />}
                                                      />
                                                      <Route
                                                            path='khach-hang/thong-bao/don-hang'
                                                            element={<NotificationCustomer />}
                                                      />
                                                </Route>

                                                {/* -------------------------Đăng kí/Đăng nhập------------- */}
                                                <Route element={<ProtectedRoute />}>
                                                      <Route path='dang-ki' element={<Register />} />
                                                      <Route path='dang-nhap' element={<Login />} />
                                                      <Route path='quen-mat-khau' element={<ForgetPass />} />
                                                      <Route path='xac-thuc-otp' element={<Register_OTP />} />
                                                </Route>
                                                {/* -----------------------Tư vấn----------------------- */}
                                                <Route path='tu-van/lien-he' element={<Contact />} />
                                                <Route path='tu-van/dang-ki-tu-van' element={<SignUpAdvice />} />
                                                <Route path='*' element={<PageNotFound />} />
                                          </Route>
                                    </Routes>
                              </div>
                        </BrowserRouter>
                  </Metadata>
            </MainProvider>
      );
};

export default App;
