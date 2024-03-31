import DataTable from 'react-data-table-component';
import "./index.css"
const customStyles = {
	rows: {
		style: {
			minHeight: '49px', // override the row height
		},
	},
	headCells: {
		style: {
            background:"#F3F4F6",
            color:"#565D6D",

		},
	},
  
};
const columns = [
	{
		name: 'PRICE',
		selector: row => <div style={{color:"#171A1F",fontWeight:"500"}}> {row.price}</div>,
	},
	{
		name: 'FLOOR DIFFERENCE',
		selector: row => <div style={{color:"#171A1F"}}> {row.year}</div>,
	},
    {
		name: 'DATE',
		selector: row => <div style={{color:"#9095A1",fontSize:".7rem",fontWeight:"500"}}> {row.date}</div>,
	},
    {
		name: 'FROM',
		selector: row => <div style={{color:"#20E9FF",fontWeight:"500"}}> {row.from}</div>,
	},
];

const data = [
  	{
		id: 1,
		price: '59.99  $120.00',
		year: '33% below',
        date:"29/12/2022",
        from:"Carmen Martinez"
	},
	{
		id: 2,
		price: '59.99  $120.00',
		year: '33% below',
        date:"29/12/2022",
        from:"Carmen Martinez"
	},
    {
		id: 3,
		price: '59.99  $120.00',
		year: '33% below',
        date:"29/12/2022",
        from:"Carmen Martinez"
	},
]
 
function TableTab() {
	return (
		<DataTable
        className='tabl-size'
			columns={columns}
			data={data}
            customStyles={customStyles}
		/>
	);
};
export default TableTab;