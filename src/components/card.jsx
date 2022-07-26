
import img1 from './../images/download.svg';

export default function Card(props) {
    const { firstName, lastName, age, email, password, members = 0 } = props
    console.log('age :>> ', age);
    // let a = 10;
    // a > 0 ? console.log('a is > 0') : console.log('a is < 0')
    // if( a > 0 ) {
    //     console.log('a is > 0');
    // } else {
    //     console.log('a is < 0');
    // }
    return (
        <div className="container">
            <div className='main-div'>
                <div className='heading-div'><h1>User Form Data</h1></div>
                <div className='detail-div'>
                    <h6>First Name : {firstName}</h6>
                    <h6>Last Name : {lastName}</h6>
                    <h6>User Email : {email}</h6>
                    <h6>User Age : {age}</h6>
                    <h6>Password : {password}</h6>
                    {/* {age && <h6>User Age : {age}</h6>} */}
                    <h6>Total Member : {members} {members < 2 ? 'member' : 'members'}</h6>

                </div>
            </div>
        </div>
    )
} 