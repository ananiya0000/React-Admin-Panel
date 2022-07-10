import React from 'react'
import "./userList.css"
import {DataGrid} from '@material-ui/data-grid'
import {DeleteOutline} from '@material-ui/icons'

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'Username',
          renderCell:(params)=>{
            return(
              <div className='userListUser'>
                <img  src={params.row.avatar} className="userListImg" alt="sorry" />
                {params.row.username}
              </div>  
            )
          },
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 150,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
          editable: true,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
            editable: true,
          },
          {
            field:"action",
            headerName:"Action",width:150,
            renderCell:(params)=>{
                return(
                    <div>
                        <button className='userListEdit'>Edit</button>
                        <DeleteOutline className='userListDelete'/>
                    </div>
                )
            }
          }
      ];
      
      const rows = [
        { id: 1, username: 'Jon Snow', avatar:"https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg",email:'jon@gmail.com',status:'active',transaction:'$120' },
        { id: 2, username: 'Jon change', avatar:"https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg",email:'jon@gmail.com',status:'active',transaction:'$120' },
        { id: 3, username: 'Jon change', avatar:"https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg",email:'jon@gmail.com',status:'active',transaction:'$120' },
        { id: 4, username: 'Jon decle', avatar:"https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg",email:'jon@gmail.com',status:'active',transaction:'$120' },
        { id: 5, username: 'Jon decle', avatar:"https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg",email:'jon@gmail.com',status:'active',transaction:'$120' },
        { id: 6, username: 'Jon decle', avatar:"https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg",email:'jon@gmail.com',status:'active',transaction:'$120' },
        { id: 7, username: 'Jon Snow', avatar:"https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg",email:'jon@gmail.com',status:'active',transaction:'$120' },
        { id: 8, username: 'Jon Snow', avatar:"https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg",email:'jon@gmail.com',status:'active',transaction:'$120' },
        { id: 9, username: 'Jon Snow', avatar:"https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg",email:'jon@gmail.com',status:'active',transaction:'$120' },
        { id: 10, username: 'Jon Snow', avatar:"https://images.pexels.com/photos/2642429/pexels-photo-2642429.jpeg?cs=srgb&dl=pexels-vinicius-altava-2642429.jpg&fm=jpg",email:'jon@gmail.com',status:'active',transaction:'$120' },
    ];
        
  return (
    <div className='userList'>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
