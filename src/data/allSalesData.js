import salesData from "./salesData";
import secondaryData from "./secondaryData";
import installmentData from "./installmentData";

const allSalesData = [...salesData, ...secondaryData, ...installmentData];

export default allSalesData;
