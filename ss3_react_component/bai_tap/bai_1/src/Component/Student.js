import React from 'react';
const students=[
    {
        id:1,
        Name:'Nguyễn Văn A',
        Age:18,
        Adress:'Hà Nội'
    },
    {
        id:2,
        Name:'Nguyễn Văn B',
        Age:19,
        Adress:'Hà Nội'
    },
    {
        id:1,
        Name:'Nguyễn Văn C',
        Age:20,
        Adress:'Hà Nội'
    },
]

class Student extends React.Component{
    render(){
        return(
            <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Adress</th>
                    </tr>
                </thead>
                <tbody>
                    {students&&students.map((student)=>(    
                    <tr key={student.id}>
                         <td>{student.id}</td>
                        <td>{student.Name}</td>
                        <td>{student.Age}</td>
                        <td>{student.Adress}</td>
                    </tr>
                     ))}
                </tbody>
            </table>
            </>
        )
    }
}
export default Student;