import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className=' border-b-2 flex justify-between items-center p-4 mx-5'>
             <h1 className='  text-4xl  font-bold'>Knowledge Cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;