import './style.css'
import TaskFilter from '../task-filter';

function SubHeader(props){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    let actualDate = new Date();
    let actualMonth = actualDate.getMonth();
    return <div className ="wrapper__container">
                <div className="subHeader__container">
                    <p className="text__container-version">Version 1.0</p>
                    <p className="text__container-update"> Updated on {actualDate.getDate() } { monthNames[actualMonth]}</p>
                 </div>     
                 <TaskFilter onFilter={props.onFilter}></TaskFilter>
             </div>
}

export default SubHeader