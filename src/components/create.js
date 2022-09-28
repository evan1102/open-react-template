import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   Manufacturer: "",
   Category: "",
   Class: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ Manufacturer: "", Category: "", Class: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="Manufacturer">Manufacturer</label>
         <input
           type="text"
           className="form-control"
           id="Manufacturer"
           value={form.Manufacturer}
           onChange={(e) => updateForm({ Manufacturer: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="Category">Category</label>
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
             name="classOptions"
             id="Class-Class 1"
             value="Class 1"
             checked={form.level === "Class 1"}
             onChange={(e) => updateForm({ Class: e.target.value })}
           />
           <label htmlFor="class-class1" className="form-check-label">Class 1</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="classOptions"
             id="class-Class 2"
             value="Class 2"
             checked={form.level === "Class 2"}
             onChange={(e) => updateForm({ Class: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">Class 2</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="classOptions"
             id="class-Class 3"
             value="Class 3"
             checked={form.level === "Class 3"}
             onChange={(e) => updateForm({ Class: e.target.value })}
           />
           <label htmlFor="class-Class 3" className="form-check-label">Class 3</label>
         </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}