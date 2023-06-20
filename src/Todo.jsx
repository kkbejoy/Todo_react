// export function Todo(){

//     const [newItem, setNewItem] = useState(" ")
//     function handleSummit(e) {
//         e.preventDefault()
    
//         setTodos(currentTodos => {
//           return [...currentTodos,
//           {
//             id: crypto.randomUUID(),
//             title: newItem, completed: true
//           }]
//         })
//         setNewItem("")
//       }
//     return(
//         <form onSubmit={handleSummit} className="new-item-form">
//         <div className="form-row">
//           <label htmlFor="item">Add a new Task</label>
//           <input type="text" value={newItem} placeholder="+Add a new Task" onChange={e => setNewItem(e.target.value)} id="item" />
//         </div>
//         <button className="btn">Add</button>
//       </form>
//     )
// }