import { useState } from 'react';

function StudentApp() {
  const [count, setCount] = useState(0);
  const [filteredStudent, setFilteredStudent] = useState({});

  const studs = [
    {"name":"Stud1", marks:98}, 
    {"name":"Stud2", marks:99},
    {"name":"Stud3", marks:50},
    {"name":"Stud4", marks:30}]
  
  const sorted_studs = studs.sort((a, b) => b.marks - a.marks);

  function handleClick() {
    setFilteredStudent(sorted_studs.slice(0, count).map((item) => { return item.name }))
    console.log(filteredStudent)
  }

  return (
    <div className="container">
      <input value={count} onChange={(e) => setCount(Number(e.target.value))} />
      <button onClick={handleClick}>Get count</button>       
      {/* handleClick() => This is giving error "Too many re-renders. React limits the number of renders to prevent an infinite loop." so use only "handleClick" */}
      <br></br>
      <h1>{JSON.stringify(filteredStudent)}</h1>
    </div>
  );
}

export default StudentApp;