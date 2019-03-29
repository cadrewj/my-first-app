import React from 'react'; //this is needed to create a component

const Ninjas = props =>{ //funcrtional component, use them when you dont need states 
    //console.log(this.props);
    //const {name, age, belt} = this.props;
    //const{ninjas} = this.props;//grabs the ninjas
    //const{ninjas} = props;
    //const ninjaList = ninjas.map(ninja => {

        // if(ninja.age>22){
        //     return (
                
        //         <div className= "ninjas" key= {ninja.id}>{/* key is used to make each ninja unique*/}
        //             <div>{ninja.name}</div>
        //             <div>{ninja.age}</div>
        //             <div>{ninja.belt}</div>
        //         </div>
        //     );
        // }
        // else{
        //     return null;
        // }
   // });// to map the ninjas for export
   
    return(
        <div className= "ninja-List">
           {/* {ninjaList}*/}{/* another way to do the same thing <div>{this.props.belt}</div> */}
            {
                props.ninjas.map(ninja =>{ //conditional output using the ternery operator 
                    //eg: condition ? (true return this) : (false return this) 
                    return (ninja.age > 23 ? (
                            <div className= "ninja" key= {ninja.id}>{/* key is used to make each ninja unique*/}
                                <div>{ninja.name}</div>
                                <div>{ninja.age}</div>
                                <div>{ninja.belt}</div>
                                {/*the extra arrow function is used to stop the function from being called until u click the button*/}
                               <button onClick={() =>  props.deleteNinja(ninja.id)}>X</button>
                              
                                </div>
                        ) : (null)
                    );
                })
            }
        </div>       
    );
    
}
export default Ninjas;