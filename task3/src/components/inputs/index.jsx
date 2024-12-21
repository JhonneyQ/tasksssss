import React, { PureComponent } from 'react'


export class Input extends PureComponent {
  render() {

    // const [studentName, setStudentName] = useState("");
    // const [gpa, setGpa] = useState(0);
    // const [faculty, setFaculty] = useState("");

    // const submit = (e) =>{
    //     e.preventDefault();
    //     const student = {
    //       studentName,
    //       gpa,
    //       faculty,
    //     };

    //     setStudents([...students, student]);
        
    // }


    return (
      <form className='input' onSubmit={submit}>
        <input type='text' placeholder='name' id='name'/>
        <input type='number' placeholder='gpa' id='gpa'/>
        <input type='text' placeholder='faculty' id='faculty'/>

      </form>
    )
  }
}

export default Input

