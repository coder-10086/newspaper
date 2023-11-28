import React, { useEffect, useState } from 'react'
import { ProTable } from '@ant-design/pro-components'

const data = [
  {
    talentName: '张三1',
    id: 1,
    mcnList: [
      { mcnName: 'douying' },
      { mcnName: 'kuaishou' },
      { mcnName: 'kuaishou' },
      { mcnName: 'kuaishou' },
    ],
  },
  {
    talentName: '张三2',
    id: 2,
    mcnList: [{ mcnName: 'douying' }, { mcnName: 'kuaishou' }],
  },
  {
    talentName: '张三3',
    id: 3,
    mcnList: [{ mcnName: 'douying' }, { mcnName: 'kuaishou' }],
  },
  {
    talentName: '张三4',
    id: 4,
    mcnList: [{ mcnName: 'douying' }, { mcnName: 'kuaishou' }],
  },
  {
    talentName: '张三5',
    id: 5,
    mcnList: [{ mcnName: 'douying' }, { mcnName: 'kuaishou' }],
  },
  {
    talentName: '张三6',
    id: 6,
    mcnList: [{ mcnName: 'douying' }, { mcnName: 'kuaishou' }],
  },
]
let uid = 0

const App = () => {
  const [list, setList] = useState([])
  const columns = [
    {
      title: '达人信息',
      hideInSearch: true,
      dataIndex: 'talentName',
      rowKey: 'uid',
      width: 500,
      onCell: (record, index) => {
        return { rowSpan: record.rowSpan }
      },
    },
    {
      title: '合作方',
      hideInSearch: true,
      dataIndex: 'mcnName',
      rowKey: 'uid',

      width: 500,
    },
  ]
  useEffect(() => {
    let position = 0
    let list = []
    const formatData = data.map((item, index) => {
      return item.mcnList.map((_item, _index) => {
        if (position === 0) {
          list.push({
            uid: uid++,
            talentName: item.talentName,
            mcnName: _item.mcnName,
            rowSpan: item.mcnList.length,
          })
          position++
        } else if (list[position - 1].talentName === item.talentName) {
          list.push({
            uid: uid++,
            talentName: item.talentName,
            mcnName: _item.mcnName,
            rowSpan: 0,
          })
          position++
        } else {
          list.push({
            uid: uid++,
            talentName: item.talentName,
            mcnName: _item.mcnName,
            rowSpan: item.mcnList.length,
          })
          position++
        }
      })
    })
    console.log(list)
    setList(list)
  }, [])

  return <ProTable key="uid" columns={columns} dataSource={list} />
}

export default App
