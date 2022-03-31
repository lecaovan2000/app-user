import {React, useMemo} from 'react'
import { Button, Space } from 'antd';
import SuperTable from '../../../../component/SuperTable'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import Confirm from '../../../../component/Confirm'
import newsApi from '../../../../api/newsApi';
function ProjectTable(props){
    const{loading,dataSource,pagination,onPaginate,onTableChange}=props

    
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
                         onConfirm={async () => await newsApi.deleteNews({uid:`${record.uid}`,token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhb3ZhbiIsImlhdCI6MTY0ODcxNTMxMn0.v02GrHfrG1D4_JU-sgKWvSodhMOYXorVcmi97i0sVY0"})}
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