import {React, useMemo, useState} from 'react'
import { Button, Space, Avatar, Image } from 'antd';
import SuperTable from '../../../../component/SuperTable'
import {EditOutlined, DeleteOutlined,PictureOutlined} from '@ant-design/icons';
import Confirm from '../../../../component/Confirm'
import newsApi from '../../../../api/newsApi';
import { utilsToken } from '../../../../utils/token';
import { useSnackbar } from 'notistack'
import { useHistory } from 'react-router-dom';
import { common } from '../../../../utils/common';
import {tableUtil}from '../../../../utils/table';
import FormEditProject from '../formEditProject';
import { useSelector } from 'react-redux';
import IconSold from '../../../../assets/icons/IconSold';
function ProjectTable(props){
    const{loading,dataSource,pagination,onPaginate,onTableChange,handleSearch,handleReset,openModal}=props
    const tokenUser = utilsToken.getAccessToken()
    const {enqueueSnackbar}= useSnackbar()
    const history = useHistory() 
    const columns = useMemo(()=>{
        return[
            {
                title:"Tên dự án",
                dataIndex:'title',
                key:'title',
                width:300,
                ...tableUtil.GetColumnSearchProps('title', handleSearch, handleReset),
                with:300,
                render: (_, record) => (
                    <>
                       <Avatar
                          src={
                             record.img_info ? (
                                <Image src={record.img_info[0]} style={{ width: 40, backgroundSize:'cover' }} />
                             ) : null
                          }
                          shape="square"
                          icon={<PictureOutlined />}
                       />
                       <span style={{ marginLeft: 10 }}>{record.title}</span>
                    </>
                 )   
                
            },
            {
               title: 'Thông tin',
               dataIndex: 'note',
               key: 'note',
           },
            {
               title:"Giá bán",
               key:"price",
               dataIndex:"price",
               width:150,
               render:(_, record)=>{
                return <div>{common.formatPrice(record.price)}VND</div>
               }
            },
            {
                title:"Trạng thái",
                dataIndex:'status',
                key:'status',
                width:120,
                filters: [
                  {
                     text: 'Đang bán',
                     value: true
                  },
                  {
                     text: 'Đã bán',
                     value: false
                  }
               ],
                render:(_, record)=>{
                  return record.status ? 
                  (<div className='status_sale'>đang bán</div>):(<div className='status_sold'>đã bán</div>)
                } 
            },
            {
                title: 'Loại',
                dataIndex: 'type',
                key: 'type',
                width: 100,
                align: 'center',
                render: (_, record)=>{
                  return record.type ==='BIET_THU'? <>Biệt thự</> :record.type==='NHA_VUON'?<>Nhà vườn</>:record.type==='NHA_PHO'?<>Nhà phố</>:record.type==='CHUNG_CU'?<>Chung cư</>:<>Căn hộ</>
                }
            },
            {
               title: 'Diện tích',
               dataIndex: 'acreage',
               key: 'acreage',
               width: 100,
               align: 'center',
               render:(_,record)=>{
                  return <div>{record.acreage}m2</div>
               }
           },
            {
                title: 'Hoạt  động',
                dataIndex: 'activity',
                key: 'activity',
                fixed: 'right',
                align: 'center',
                render: (_, record) => (
                   <Space>
                      {
                         record.status?(
                           <Confirm
                         className="confirm-modal"
                         onConfirm={async () => {
                             try {
                                 const data ={
                                    uid:`${record.uid}`,
                                    token:tokenUser
                                 }
                                await newsApi.deleteNews(data)
                                history.go(0)
                             } catch (error) {
                                enqueueSnackbar(error.message, {
                                    variant: 'error'
                                 })
                             }
                         }}
                         placement="bottomRight"
                         message={`${record.title || 'project'} đã bán  ?`}
                      >
                         <Button>Đã bán</Button>
                      </Confirm>
                         ):(
                            <Confirm
                              onClick={
                                 async () => {
                                    try {
                                        const data ={
                                           uid:`${record.uid}`,
                                           token:tokenUser
                                        }
                                       await newsApi.restoreNews(data)
                                       history.go(0)
                                    } catch (error) {
                                       enqueueSnackbar(error.message, {
                                           variant: 'error'
                                        })
                                    }
                                }
                              }
                              className="confirm-modal"
                              placement="bottomRight"
                              message={`Bạn muốn đăng bán ${record.title || 'project'} ?`}
                            ><Button>Bán</Button>
                            </Confirm>
                         )
                      }
                      
                      
                      <Button
                         icon={<EditOutlined />}
                         onClick={() => {
                           openModal(record.uid)
                        }}
                      />
                   </Space>
                )
             }
        ]
    })
    return(
        
        <div>
           <SuperTable 
            columns={columns}
            submitting={loading}
            hasPagination={true}
            dataSource={dataSource}
            pagination={pagination}
            onPaginate={onPaginate}
            onChange={onTableChange}
            scroll={{ x:'max-content'}}
        />
        </div>
        
    )
}
export default ProjectTable;