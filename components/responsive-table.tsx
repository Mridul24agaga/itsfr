interface ResponsiveTableProps {
    headers: string[]
    rows: string[][]
  }
  
  export function ResponsiveTable({ headers, rows }: ResponsiveTableProps) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full mt-4 border-collapse border border-gray-700 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-800">
              {headers.map((header, index) => (
                <th key={index} className="p-2 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-2 border border-gray-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  
  