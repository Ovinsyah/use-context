import React from 'react';
import { Table, Thead, Tbody } from './style'
const style = (props) => {
  const { dataTable, formatTable } = props;
  return (
    <Table {...props}>
      <Thead>
        <tr>
          {
            formatTable.map((head,key)=> <th key={key}>{head.title}</th>)
          }
        </tr>
      </Thead>
      <Tbody>
        {
          dataTable.map((data,keyTr)=>{
            return(
              <tr key={keyTr}>
                {
                  formatTable.map((value,key)=> {
                    const typeCustomValue = value.customValue && typeof(value.customValue)
                    const customValue = value.customValue && (typeCustomValue === 'function' ? value.customValue(data[value.value]):value.customValue);
                    return(
                      <td key={key}>
                      {
                        customValue || data[value.value]
                      }
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </Tbody>
    </Table>
  )
}

export default style
