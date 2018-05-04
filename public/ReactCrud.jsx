var StudentAll = React.createClass({   
  


  getInitialState: function () {  
    return { name: '' ,address: '',email:'',contact:'',id:'',Buttontxt:'Save', data1: []};  
  },  
   handleChange: function(e) {  
        this.setState({[e.target.name]: e.target.value});  
    },  

    
  componentDidMount() {  
   
    $.ajax({  
       url: "api/getdata",  
       type: "GET",  
       dataType: 'json',  
       ContentType: 'application/json',  
       success: function(data) {           
         this.setState({data1: data});   
           
       }.bind(this),  
       error: function(jqXHR) {  
         console.log(jqXHR);  
             
       }.bind(this)  
    });  
  },  
    
DeleteData(id){  
  var studentDelete = {  
        'id': id  
           };        
    $.ajax({  
      url: "/api/Removedata/",  
      dataType: 'json',  
      type: 'POST',  
      data: studentDelete,  
      success: function(data) {  
        
         this.componentDidMount();  
  
      }.bind(this),  
      error: function(xhr, status, err) {  
         alert(err);   
             
            
      }.bind(this),  
      });  
    },  
   
    newData(){           
      this.setState({name: '',address:'',contact:'',email:'',id:'',Buttontxt:'Save'});  
        },
  
    EditData(item){           
   this.setState({name: item.name,address:item.address,contact:item.contact,email:item.email,id:item._id,Buttontxt:'Update'});  
     },  
  
   handleClick: function() {  
   
   var Url="";  
   
   
   if(this.state.Buttontxt=="Save") {  
      Url="/api/savedata";  
       }  
      else{
      Url="/api/Updatedata";  
      }  
      var studentdata = {  
        'name': this.state.name,  
        'address':this.state.address,  
        'email':this.state.email,  
        'contact':this.state.contact,  
        'id':this.state.id,
          
    } 
   
    
    $.ajax({  
      
      url: Url,  
      dataType: 'json',  
      type: 'POST',  
      data: studentdata,  
      success: function(data) {         
                
          this.setState(this.getInitialState());  
          this.componentDidMount();  
           
      }.bind(this),  
      error: function(xhr, status, err) {  
         alert(err);       
      }.bind(this)  
    });  
  },  


  
  
  render: function() {  
    return (   
     

<div>


<div className="container-fluid add-user">
                                <div className="row">
                          
                          
                                  <div className="col-md-8">
                                      <h2 className="inner" style={{width:'320px'}}>User Dictionary</h2>
                                  </div>
                          
                                <div className="col-md-4">
                                  <button className="btn add-button btn-primary" onClick={(e) => {this.newData()}} data-toggle="modal" data-target="#newUser"><i className="fas fa-plus-circle"></i> Add new User</button>
                                </div>
                          
                                </div>
                    
                  </div>

  

<div className="modal fade" id="newUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
      <div className="row">
               <div className="col-4"> 
          <div className="pro-holder">
                   <img src="http://via.placeholder.com/140x100" width="100px" height="100px" className="rounded-circle" alt=""/>
                   </div>
                   <div className="upload"><button type="button"  className="btn up btn-primary btn-sm">Upload</button></div>
             </div>
             

          

             <div className="col-8">
             
            
             <div className="form-group">
              <label for="username">User Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={ this.handleChange } id="name" name="name" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
            <div className="form-group">
          <label for="address">Address</label>
          <input type="text"  className="form-control" value={this.state.address} onChange={ this.handleChange } id="address" name="address" placeholder="address"/>
          </div>
          
          </div>
          </div>


          <div class="col-6">
   
    <label for="contact">Contact</label>
  <input type="text" className="form-control"  name="contact" value={this.state.contact}  onChange={ this.handleChange } placeholder="Number"/>

    </div>

    <div class="col-6">

  <label for="email">Email</label>
  <input type="email" className="form-control"  name="email" value={this.state.email}  onChange={ this.handleChange }  placeholder="Email"/>

</div>
          

</form>
      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" value={'Save'} onClick={this.handleClick}  >Save</button>
      </div>
    </div>
  </div>
</div>
                 
    




<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
      <div className="row">
               <div className="col-4"> 
          <div className="pro-holder">
                   <img src="http://via.placeholder.com/140x100" width="100px" height="100px" class="rounded-circle" alt=""/>
                   </div>
                   <div className="upload"><button type="button"  className="btn up btn-primary btn-sm">Upload</button></div>
             </div>
             

          

             <div className="col-8">
             
            
             <div className="form-group">
              <label for="username">User Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={ this.handleChange }  name="name" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
            <div className="form-group">
          <label for="address">Address</label>
          <input type="text"  className="form-control" value={this.state.address} onChange={ this.handleChange }  name="address" placeholder="address"/>
          </div>
          
          </div>
          </div>


          <div class="col-6">
   
    <label for="contact">Contact</label>
  <input type="text" className="form-control"  name="contact" value={this.state.contact} onChange={ this.handleChange } placeholder="Number"/>

    </div>

    <div class="col-6">

  <label for="email">Email</label>
  <input type="email" className="form-control"  name="email"  value={this.state.email} onChange={ this.handleChange }  placeholder="Email"/>

</div>
          

</form>
      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" value={this.state.Buttontxt} onClick={this.handleClick}  >Save</button>
      </div>
    </div>
  </div>
</div>




<div className="container user-data">
<div className="inner-table">
  <div className="data">

      <table className="table table-hover">
         <thead>
           <tr className="header">
             <th >USERNAME</th>
             <th >ADDRESS</th>
             <th >CONTACT</th>
             <th >EMAIL</th>
             <th>OPTIONS</th>
           </tr>
         </thead>
         <tbody>
         {this.state.data1.map((item, index) => (  
           <tr>
               <td>{item.name}</td>                        
          <td>{item.address}</td>  
          <td>{item.email}</td>  
          <td>{item.contact}</td>  
            
             <td><div className="dropdown btn-drop">
               <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 options
               </button>
              
               <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                 <a className="dropdown-item" data-toggle="modal" data-target="#exampleModal" value={this.state.Buttontxt}  onClick={(e) => {this.EditData(item)}} >Edit</a>
                 <a className="dropdown-item" onClick={(e) => {this.DeleteData(item._id)}}>Delete</a>
                 
               </div>
             </div></td>
           </tr>
          ))}
           
         </tbody>
       </table> 
       


 
     
  

  </div>
   
</div>


</div>












</div>

   
  
  
      
    );  
  } 
  
  
});  






ReactDOM.render(<StudentAll  />, document.getElementById('root'))


