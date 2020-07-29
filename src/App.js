import React from 'react'
import styled from 'styled-components'
import { useTable, useSortBy } from 'react-table'

import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border-bottom: 0;
      border-right: 0;
      border-collapse: collapse;


    tr {
      :last-child {
        border-bottom:0;
        border-right:0;

        td {
          border-bottom: 0;
        }
      }
    }
    

    th{
      border-bottom: 2px solid hsl(0, 0%, 90%);
  border-left-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.05);
  background-color: ${({ clicked }) => clicked ? 'gray' : 'transparent'};

    :visited{
      background-color: yellow;
    }
    :focus{
      background-color:yellow;
    }
    :hover {
        background-color: #f0f0f0;
    }
    :active {
      background-color: yellow;
    }
  },
    td {
      
      
      border-top: 1px solid hsl(0, 0%, 95%);
      border-left-width: 1px;
      border-left-color: rgba(0, 0, 0, 0.05);

      :last-child {
        border-right: 0;
          tr{
                  border-bottom:0;
                }
        

      }
     
     
    }


    }
    columns{
      font-style: italic;
      

    }
    tbody > tr:last-child > td {
      border-bottom: 0;
    }
  }
`
const div2 = styled.div`
  font-style: italic;

`

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20)

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props  
                
                
                
                <th {...column.getHeaderProps(column.getSortByToggleProps())}><div2>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                  <div onclick="alert('hello');">

                    {column.isSorted
                      ? column.isSortedDesc
                        ? this.this.setState({ clicked: true })
                        : this.this.setState({ clicked: true })
                      : ''}
                      </div>

                  </span>
                 
             </div2>   </th> 
              ))}
              
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
      <br />
    </>
  )
}


function App() {
  const columns = React.useMemo(
    () => [
     
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
       
     
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
     
    []
  )


  const data = React.useMemo(() => makeData(2000), [])

  return (
    <Styles>
      <font size="4" face="AtlasGrotesk" >

      <Table columns={columns} data={data} />
      </font>
    </Styles>
  )
}

export default App
