import * as xlsx from 'xlsx'
import * as path from 'path'
import read from "fs";

export const readExcelFile = (fileName: string, sheetName: string): any[] =>{
    let filePath = path.join(process.cwd(), "test-data", fileName);

    try
    {
        const workBook = xlsx.readFile(filePath);
        const sheet = workBook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet);
        return data;
        console.log(data);
    }
    catch(error){
        console.error(error);
        throw new Error("Error reading the excel file: ");
    }
}
