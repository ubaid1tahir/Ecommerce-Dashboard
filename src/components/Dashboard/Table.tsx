import { useTable, useSortBy } from "react-table"

const data = [
    {
        id: 1,
        name: "Ubaid"
    },
    {
        id: 2,
        name: "Abdullah"
    },
    {
        id:3,
        name: "Laiba"
    },
    {
        id:4,
        name: "Hamza"
    }
]

const columns = [
    {
        Header: "ID",
        accessor: "id"
    },
    {
        Header: "NAME",
        accessor: "name"
    }
]

const Table = () => {
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
        data,
        columns
    })
    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((group) => (
                            <tr {...group.getHeaderGroupProps()}>
                                {group.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                                ))}
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>    
                    {rows.map((row) => {
                        prepareRow(row)
                        return <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>
                                    {cell.render("Cell")}
                                </td>
                            ))}
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Table
