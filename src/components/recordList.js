import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
 <tr>
     <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
   <td>{props.record.Manufacturer}</td>
   <td>{props.record.Model}</td>
   <td>{props.record.Category}</td>
   <td>{props.record.Class}</td>
   <td>{props.record.Frame}</td>
   <td>{props.record["Top Assist Speed"]}</td>
   <td>{props.record["Min Price ($)"]}</td>
   <td>{props.record["Color Options"].join(", ")}</td>
   <td>{props.record["Picture URL"]}</td>
   <td>{props.record["Standard Accessories"].join(", ")}</td>
   <td>{props.record.Description}</td>
   <td>{props.record["Website URL"]}</td>
   <td>{props.record.Electronics["Back Lights"]}</td>
   <td>{props.record.Electronics["Battery Capacity (Wh)"]}</td>
   <td>{props.record.Electronics["Charger"]}</td>
   <td>{props.record.Electronics["Controller"]}</td>
   <td>{props.record.Electronics["Display"]}</td>
   <td>{props.record.Electronics["Front Lights"]}</td>
   <td>{props.record.Electronics["Pedal Assist"]}</td>
   <td>{props.record.Electronics["Throttle"]}</td>
   <td>{props.record.Electronics.Motor["Drive Type"]}</td>
   <td>{props.record.Electronics.Motor["Manufacturer"]}</td>
   <td>{props.record.Electronics.Motor["Peak Watts"]}</td>
   <td>{props.record.Electronics.Motor["Planetary Gear Reduction"]}</td>
   <td>{props.record.Electronics["Range (mi)"]}</td>
   <td>{props.record.Electronics["USB Ports"]}</td>
   <td>{props.record.Electronics["Wiring"]}</td>
   <td>{props.record.Geometry["Frame Size (in)"]}</td>
   <td>{props.record.Geometry["Low Rider Height (in)"]}</td>
   <td>{props.record.Geometry["High Rider Height (in)"]}</td>
   <td>{props.record.Geometry["Handlebar Height(in)"]}</td>
   <td>{props.record.Geometry["Handlebar Reach(in)"]}</td>
   <td>{props.record.Geometry["Seat Height (in) (*Measured from bottom of the pedal stroke)"]}</td>
   <td>{props.record.Geometry["Standover Height (in)"]}</td>
   <td>{props.record.Geometry["Total Length(in)"]}</td>
   <td>{props.record.Geometry["Wheelbase (in)"]}</td>
   <td>{props.record.Geometry["Front Dropout Width (mm)"]}</td>
   <td>{props.record.Geometry["Rear Dropout Width (mm)"]}</td>
   <td>{props.record.Geometry["Bottom Bracket Shell Width (mm)"]}</td>
   <td>{props.record.Geometry["Seat Tube Length (in)"]}</td>
   <td>{props.record.Geometry["Top Tube Length (in)"]}</td>
   <td>{props.record.Geometry["Headtube(in)"]}</td>
   <td>{props.record.Geometry["Chainstay (in)"]}</td>
   <td>{props.record.Geometry["Handlebar Width(mm)"]}</td>
   <td>{props.record.Geometry["Crank Length(mm)"]}</td>
   <td>{props.record.Geometry["Seatpost Diameter(mm)"]}</td>
   <td>{props.record.Geometry["Max Tire Width (in)"]}</td>
   <td>{props.record.Geometry["Bike Weight Total(lbs)"]}</td>
   <td>{props.record.Geometry["Battery Weight (lbs)"]}</td>
   <td>{props.record.Geometry["Payload Capacity (lbs)"]}</td>
   <td>{props.record.Components.Brakes.Calipers}</td>
   <td>{props.record.Components.Brakes.Levers}</td>
   <td>{props.record.Components.Brakes["Pad Material"]}</td>
   <td>{props.record.Components.Brakes.Rotors}</td>
   <td>{props.record.Components.Chain}</td>
   <td>{props.record.Components["Crank Set"]}</td>
   <td>{props.record.Components.Derailleur}</td>
   <td>{props.record.Components.Fenders}</td>
   <td>{props.record.Components.Fork}</td>
   <td>{props.record.Components.Frame}</td>
   <td>{props.record.Components.Freewheel}</td>
   <td>{props.record.Components.Gearing}</td>
   <td>{props.record.Components.Grips}</td>
   <td>{props.record.Components.Handlebar}</td>
   <td>{props.record.Components.Headset}</td>
   <td>{props.record.Components.Kickstand}</td>
   <td>{props.record.Components.Pedals}</td>
   <td>{props.record.Components.Racks}</td>
   <td>{props.record.Components.Rims}</td>
   <td>{props.record.Components.Saddle}</td>
   <td>{props.record.Components.Seatpost}</td>
   <td>{props.record.Components.Stem}</td>
   <td>{props.record.Components.Tires}</td>
   
 </tr>
);


export default function RecordList() {
 const [records, setRecords] = useState([]);
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
     <h3>Record List</h3>
     <table className="table table-white" style={{ marginTop: 20}}>
       <thead>
         <tr>
           <th>Action</th>
           <th>Manufacturer</th>
           <th>Model</th>
           <th>Category</th>
           <th>Class</th>
           <th>Frame</th>
           <th>Top Assist Speed</th>
           <th>Min Price ($)</th>
           <th>Color Options </th>
           <th>Picture URL</th>
           <th>Standard Accessories </th>
           <th>Description</th>
           <th>Website URL</th>
           <th>Back Lights</th>
           <th>Battery Capacity (Wh)</th>
           <th>Charger</th>
           <th>Controller</th>
           <th>Display</th>
           <th>Front Lights</th>
           <th>Pedal Assist</th>
           <th>Throttle</th>
           <th>Drive Type</th>
           <th>Motor Manufacturer</th>
           <th>Peak Watts</th>
           <th>Planetary Gear Reduction</th>
           <th>Range (mi)</th>
           <th>USB Ports</th>
           <th>Wiring</th>
           <th>Frame Size (in)</th>
           <th>Low Rider Height (in)</th>
           <th>High Rider Height (in)</th>
           <th>Handlebar Height(in)</th>
           <th>Handlebar Reach(in)</th>
           <th>Seat Height (in) (*Measured from bottom of the pedal stroke)</th>
           <th>Standover Height (in)</th>
           <th>Total Length(in) </th>
           <th>Wheelbase (in) </th>
           <th>Front Dropout Width (mm) </th>
           <th>Rear Dropout Width (mm) </th>
           <th>Bottom Bracket Shell Width (mm)</th>
           <th>Seat Tube Length (in)</th>
           <th>Top Tube Length (in) </th>
           <th>Headtube(in)</th>
           <th>Chainstay (in)</th>
           <th>Handlebar Width(mm)</th>
           <th>Crank Length(mm)</th>
           <th>Seatpost Diameter(mm)</th>
           <th>Max Tire Width (in)</th>
           <th>Bike Weight Total(lbs)</th>
           <th>Battery Weight (lbs)</th>
           <th>Payload Capacity (lbs)</th>
            <th>Calipers</th>
            <th>Levers</th>
            <th>Pad Material</th>
            <th>Rotors</th>
          <th>Chain</th>
          <th>Crank Set</th>
          <th>Derailleur</th>
          <th>Fenders</th>
          <th>Fork</th>
          <th>Frame Material</th>
          <th>Freewheel</th>
          <th>Gearing</th>
          <th>Grips</th>
          <th>Handlebar</th>
          <th>Headset</th>
          <th>Kickstand</th>
          <th>Pedals</th>
          <th>Racks</th>
          <th>Rims</th>
          <th>Saddle</th>
          <th>Seatpost</th>
          <th>Stem</th>
          <th>Tires</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}