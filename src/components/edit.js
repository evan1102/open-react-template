import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
 
export default function Edit() {
 const [form, setForm] = useState({
   Manufacturer: "",
   Category: "",
   Class: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedBike = {
     Manufacturer: form.Manufacturer,
     Category: form.Category,
     Class: form.Class,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedBike),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Manufacturer: </label>
         <input
           type="text"
           className="form-control"
           id="Manufacturer"
           value={form.Manufacturer}
           onChange={(e) => updateForm({ Manufacturer: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Category: </label>
         <input
           type="text"
           className="form-control"
           id="Category"
           value={form.Category}
           onChange={(e) => updateForm({ Category: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="class-Class 1"
             value="Class 1"
             checked={form.Class === "Class 1"}
             onChange={(e) => updateForm({ Class: e.target.value })}
           />
           <label htmlFor="class-Class 1" className="form-check-label">Class 1</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="class-Class 2"
             value="Class 2"
             checked={form.Class === "Class 2"}
             onChange={(e) => updateForm({ Class: e.target.value })}
           />
           <label htmlFor="class-Class 2" className="form-check-label">Class 2</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="class-Class 3"
             value="Class 3"
             checked={form.Class === "Class 3"}
             onChange={(e) => updateForm({ Class: e.target.value })}
           />
           <label htmlFor="class-Class 3" className="form-check-label">Class 3</label>
       </div>
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}