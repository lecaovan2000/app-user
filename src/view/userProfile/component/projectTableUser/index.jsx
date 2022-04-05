import {React, useMemo, useState} from 'react'
import { Button, Space, Avatar, Image } from 'antd';
import SuperTable from '../../../../component/SuperTable'
import {EditOutlined, DeleteOutlined,PictureOutlined} from '@ant-design/icons';
import Confirm from '../../../../component/Confirm'
import newsApi from '../../../../api/newsApi';
import { utilsToken } from '../../../../utils/token';
import { useSnackbar } from 'notistack'
import { useHistory } from 'react-router-dom';
import { maxHeight } from '@mui/system';
function ProjectTable(props){
    const{loading,dataSource,pagination,onPaginate,onTableChange}=props
    const tokenUser = utilsToken.getAccessToken()
    const {enqueueSnackbar}= useSnackbar()
    const history = useHistory()
    console.log('token nè', tokenUser)

    
    const columns = useMemo(()=>{
        return[
            {
                title:"Tên dự án",
                dataIndex:'title',
                key:'title',
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
                title:"Trạng thái",
                dataIndex:'status',
                key:'status',
                render:(_, record)=>{
                  return record.status ? 
                  (<div>đang bán</div>):(<div>đã bán</div>)
                } 
            },
            {
                title: 'Loại',
                dataIndex: 'type',
                key: 'type',
                width: 100,
                align: 'center',
            },
            {
                title: 'Hoạt  động',
                dataIndex: 'activity',
                key: 'activity',
                fixed: 'right',
                align: 'center',
                render: (_, record) => (
                   <Space>
                      <Button
                         icon={<EditOutlined />}
                        //  onClick={() => {
                        //     history.push(`/article/${record.uid}`)
                        //  }
                        // }
                      />
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
                         message={`Are you sure to delete ${record.title || 'project'} ?`}
                      >
                         <Button icon={<DeleteOutlined />} />
                      </Confirm>
                   </Space>
                )
             }
        ]
    })
    return(
        <SuperTable 
            columns={columns}
            submitting={loading}
            hasPagination={true}
            dataSource={dataSource}
            pagination={pagination}
            onPaginate={onPaginate}
            onChange={onTableChange}
        />
    )
}
export default ProjectTable;