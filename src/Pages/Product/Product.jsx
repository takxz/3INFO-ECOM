import './Product.css';


export default function Product({user}){
    return (
        <div className='user'>
            <div className="header">
                <div className="picture">
                    <img src={user.imageUrl}  />
                </div>
            </div>
            <div className="content">
                <div className="name">{`${user.firstName} ${user.lastName}`}</div>
                <div className="email">{user.email}</div>
                <div className="email">{user.jobTitle}</div>
            </div>
        </div>
    )
}