
import { GoogleSpreadsheet } from "google-spreadsheet";

// Config variables
const SPREADSHEET_ID = "1FdkkooWlX9x5Z1N9MAb8xlRAKfngHcT2kccghOcVDpY";
const SHEET_ID = "758606897";
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const getSpreadsheet = async () => {
    try {
        const credentials = require('../credentials.json');
        await doc.useServiceAccountAuth(credentials);
        // loads document properties and worksheets
        await doc.loadInfo();
        const sheet = doc.sheetsById[SHEET_ID];
        const rows = await sheet.getRows();
        const data = rows.reduce((previousValue, currentValue) => {
            if (!previousValue[currentValue['Nombre']]){
                previousValue[currentValue['Nombre']] = {
                    size: [currentValue['Tamanio']],
                    prices: [currentValue['Precio']],
                    description: currentValue['Descripción'],
                    id: currentValue['Indicador'],
                    image: currentValue['Imagen'],
                    type: currentValue['Tipo']
                }
            } else {
                previousValue[currentValue['Nombre']] = {
                    size: [currentValue['Tamanio'], ...previousValue[currentValue['Nombre']]['size']],
                    prices: [currentValue['Precio'], ...previousValue[currentValue['Nombre']]['prices']],
                    description: currentValue['Descripción'],
                    id: currentValue['Indicador'],
                    image: currentValue['Imagen'],
                    type: currentValue['Tipo']
                }
            }
            return previousValue
        }, {})
        return data;
    } catch (e) {
        console.error('Error: ', e);
    }
};


export const getMenu = async () => {
   return await getSpreadsheet();
}