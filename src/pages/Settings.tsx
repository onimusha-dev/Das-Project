import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"


const Settings = () => {


  const tableHeadStyle = "p-8 text-lg font-medium border-y-1 md:w-2/5"
  const tableCellStyle = "p-8 text-lg"

  return (
    <section className="px-5 my-10">
      <h2 className="text-3xl font-medium pb-5">
        Settings
      </h2>
      <section className="bg-white rounded-md shadow-xs border-1">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className={tableHeadStyle}>Profile Picture</TableCell>
              <TableCell className={tableCellStyle}>
                <div className="flex justify-start items-center pr-5 gap-5">
                  <div className="w-12 h-12 rounded-full bg-green-300 "></div>
                  <button className="text-black/25 text-xs ">Max file size is - 5MB</button>
                </div>
              </TableCell>
              <TableCell className={tableCellStyle}>
                <div className="flex gap-5 justify-end items-center">
                  <button className="text-red-600 font-medium underline hover:bg-gray-200 h-14 rounded-md px-10 hover:text-red-800 transition-colors duration-300 ease-in-out">Delete</button>
                  <Button className="bg-white text-lg hover:bg-gray-200 text-blue-800 hover:text-blue-900 border-1 border-blue-800 hover:border-blue-900 px-10 py-7">Edit</Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={tableHeadStyle}>Name</TableCell>
              <TableCell className={tableCellStyle}>Susie Chan</TableCell>
              <TableCell className={`${tableCellStyle} justify-end flex items-center` }>
                <Button className="bg-white text-lg hover:bg-gray-200 text-blue-800 hover:text-blue-900 border-1 border-blue-800 hover:border-blue-900 px-10 py-7">Edit</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={tableHeadStyle}>Password</TableCell>
              <TableCell className={tableCellStyle}>•••••••••</TableCell>
              <TableCell className={`${tableCellStyle} justify-end flex items-center`}>
                <Button className="bg-white text-lg hover:bg-gray-200 text-blue-800 hover:text-blue-900 border-1 border-blue-800 hover:border-blue-900 px-10 py-7">Edit</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={tableHeadStyle}>Role</TableCell>
              <TableCell className={tableCellStyle}>
                <p className="h-12 items-center flex">Admin</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </section>
    </section>
  )
}

export default Settings