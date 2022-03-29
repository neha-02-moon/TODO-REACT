import React,{useState} from 'react'
import Notes from '../images/Notes.png'

const Todo =() =>{

 const [inputData,setInputData]= useState(''); //state created to hold the data
 const [items,setItems]=useState([]); // items value will be a empty array , data will store in array

const addItem= () =>{
    if(!inputData){

    }else{
  setItems([...items,inputData]); //... is a spread operator 
  setInputData('')  //to clear the add items constainer
    }
}
// delete item
const   deleteItem=(id) =>{
         const updateitems=items.filter((elem,ind)=>{
       return ind !== id;
     });
     setItems(updateitems);
 }

 //removeall
 const removeAll=()=>
 {
     setItems([]);
 }
    return(
    <>
                 <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={Notes} alt="todologo" />
                        <figcaption>Add Your List Here </figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='✍️ Add items...' 
                        value={inputData} 
                         onChange={(e)=> setInputData(e.target.value)}   />
                       <i className="fa fa-plus add-btn" title="Add item" onClick={addItem} ></i> 
                    </div>

                   <div className="showItems">
                       {
                        // display items
                           items.map((elem,ind)=>{
                               return(
                                <div className="eachItem">
                                <h3>{elem}</h3>
                                <i className="far fa-trash-alt add-btn" title="Delete item" onClick={() => deleteItem(ind)} ></i>
                            </div>
                            
                               )
                           })
                       }
                   </div>

                   <div className="showitems">
                       <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span> </button>
                   </div>
                 </div>
                    </div>
    </>
)


}

export default Todo