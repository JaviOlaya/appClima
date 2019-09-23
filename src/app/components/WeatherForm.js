import React from 'react';
const WheatherForm = props=>{

    return(
         <div class="card card-body">
             <form action="">
                <div class="form-group">
                    <input type="text" placeholder="Your city Name" 
                    class="form-control" autofocus/>
                </div>
                <div class="form-group">
                    <input type="text" name="country" placeholder="Your Country" 
                    class="form-control"/>
                </div>
                <button class="btn btn-success btn-block">
                    Get Weather
                </button>
             </form>
           
         </div>
    )

};

export default WheatherForm;