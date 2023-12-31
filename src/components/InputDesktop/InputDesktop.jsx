/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { END_POINT } from "../../utils/constant";
const InputDesktop = ({ onSearch, onChangeKey, onChangeLocation, onChangeType, onChangeState, onChangeDepartment }) => {
      const [department, setDepartment] = useState([]);

      const getDepartment = async () => {
            const res = await axios({
                  url: `${END_POINT}/department`,
                  method: "get",
            });

            if (res.status === 200) {
                  setDepartment(res.data.data.department);
            }
      };
      const getA = async () => {
            const rescareer = await axios({
                  url: `${END_POINT}/career`,
                  method: "get",
            });
            console.log("rescarweq", rescareer);
      };

      useEffect(() => {
            getDepartment();
            getA();
      }, []);

      const locationsWork = [
            {
                  id: 1,
                  location: "Tỉnh/Thành phố",
            },
            {
                  id: 2,
                  location: "Bình Dương",
            },
            {
                  id: 3,
                  location: "Cần Thơ",
            },
            {
                  id: 4,
                  location: "Hồ Chí Minh",
            },
      ];

      const professions = [
            {
                  id: 1,
                  profession: "Ngành nghề",
            },
            {
                  id: 2,
                  profession: "Bưu cục",
                  numberOfRecruitment: 0,
                  type: "văn phòng",
            },
            {
                  id: 3,
                  profession: "Chăm sóc khách hàng",
                  numberOfRecruitment: 0,
                  type: "văn phòng",
            },
      ];

      const positions = [
            {
                  id: 1,
                  position: "Chức vụ",
            },
            {
                  id: 2,
                  position: "Chuyên viên",
            },
      ];

      return (
            <div>
                  <div className='w-[1416px] p-[30px] border-solid border-[1px]  border-slate-300 shadow-md rounded-lg justify-around absolute left-[50%] translate-x-[-50%] bottom-[-32%]  bg-[#f2f2f2] hidden lg:flex z-10'>
                        <div className='flex flex-col'>
                              <label className='mb-[8px] text-[#161D25]' htmlFor='position'>
                                    Vị trí ứng tuyển
                              </label>
                              <input
                                    className='outline outline-[1px] outline-slate-300 w-[300px] p-[8px]'
                                    defaultValue=''
                                    type='text'
                                    name=''
                                    id='position'
                                    placeholder='Nhập vị trí ứng tuyển'
                                    onChange={onChangeKey}
                              />
                        </div>
                        <div className='flex flex-col'>
                              <label className='mb-[8px] text-[#161D25]' htmlFor=''>
                                    Địa điểm làm việc
                              </label>
                              <select
                                    name=''
                                    id=''
                                    className='outline outline-[1px] outline-slate-300 w-[210px] p-[8px]'
                                    onChange={onChangeLocation}
                              >
                                    {locationsWork.map((item) => {
                                          return (
                                                <option key={item.id} value={item.location} className='text-[#444444] '>
                                                      {item.location}
                                                </option>
                                          );
                                    })}
                              </select>
                        </div>
                        <div className='flex flex-col'>
                              <label className='mb-[8px] text-[#161D25]' htmlFor=''>
                                    Ngành nghề
                              </label>
                              <select
                                    name=''
                                    id=''
                                    className='outline outline-[1px] outline-slate-300 w-[210px] p-[8px]'
                                    onChange={onChangeType}
                              >
                                    {professions.map((item) => {
                                          return (
                                                <option
                                                      key={item.id}
                                                      value={item.profession}
                                                      className='text-[#444444]'
                                                >
                                                      {item.profession}
                                                </option>
                                          );
                                    })}
                              </select>
                        </div>
                        <div className='flex flex-col'>
                              <label className='mb-[8px] text-[#161D25]' htmlFor=''>
                                    Phòng ban
                              </label>
                              <select
                                    name=''
                                    id=''
                                    className='outline outline-[1px] outline-slate-300 w-[210px] p-[8px]'
                                    onChange={onChangeDepartment}
                              >
                                    <option value='Phòng ban'>Phòng ban</option>
                                    {department && (
                                          <>
                                                {department.map((item) => {
                                                      return (
                                                            <option
                                                                  key={item.id}
                                                                  value={item.name}
                                                                  className='text-[#444444]'
                                                            >
                                                                  {item.name}
                                                            </option>
                                                      );
                                                })}
                                          </>
                                    )}
                              </select>
                        </div>
                        <div className='flex flex-col'>
                              <label className='mb-[8px] text-[#161D25]' htmlFor=''>
                                    Chức vụ
                              </label>
                              <select
                                    name=''
                                    id=''
                                    className='outline outline-[1px] outline-slate-300 w-[210px] p-[8px]'
                                    onChange={onChangeState}
                              >
                                    {positions.map((item) => {
                                          return (
                                                <option key={item.id} value={item.position} className='text-[#444444]'>
                                                      {item.position}
                                                </option>
                                          );
                                    })}
                              </select>
                        </div>
                        <button
                              className='flex items-center justify-center  bg-[#e5a663] h-0 px-[36px] py-[20px] text-[#232323] self-end gap-2'
                              onClick={onSearch}
                        >
                              <FontAwesomeIcon icon={faMagnifyingGlass} />
                              Tìm kiếm
                        </button>
                  </div>
            </div>
      );
};

export default InputDesktop;
