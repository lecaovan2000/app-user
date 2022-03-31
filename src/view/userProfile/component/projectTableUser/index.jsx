import {React, useMemo, useState} from 'react'
import { Button, Space } from 'antd';
import SuperTable from '../../../../component/SuperTable'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import Confirm from '../../../../component/Confirm'
import newsApi from '../../../../api/newsApi';
import { utilsToken } from '../../../../utils/token';
import { useSnackbar } from 'notistack'
import { useHistory } from 'react-router-dom';
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
                
            },
            {
                title:"Trạng thái",
                dataIndex:'status',
                key:'status', 
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