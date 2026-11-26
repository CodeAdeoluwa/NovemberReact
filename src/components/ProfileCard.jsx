// function ProfileCard(props){
//     return(
//         <div>
//             <h2>{props.name} - {props.role}</h2>
//         </div>
//     )
// }

// export default ProfileCard;

function ProfileCard({name, role}){
    return(
        <div>
            <h2>{name} - {role}</h2>
        </div>
    )
}

export default ProfileCard;