import { Link } from "react-router-dom";
import "./dataTable.scss";
import { DataGrid,GridToolbar  } from "@mui/x-data-grid";






const DataTable = (props) => {

  const handleDelete = (id)=>{
    console.log(id+" has been deleted")
  }
  
  const actionColumn = {
    field:'action',
    headerName:"Action",
    width:200,
    renderCell:(params) =>{
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
          <img src="/view.svg"/>
          </Link>
          <div className="delete" onClick={()=>handleDelete(params.row.id)}>
            <img src="/delete.svg"/>
          </div>
        </div>
      )
    }
  }
  

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
          toolbar:{
            showQuickFilter:true,
            quickFilterProps:{debounceMs:500}
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
