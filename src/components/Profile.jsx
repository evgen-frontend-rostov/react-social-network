import React from "react";

const Profile = () => {
    return (
        <div className='content'>
            <img className='content-cover' src='https://s1.1zoom.ru/big3/932/387625-svetik.jpg' />
            <div className='content__profyle'>
                <img className='content__profyle-avatar' src='https://i.pinimg.com/736x/a7/40/cc/a740ccbabb9cc84e91f3c159a999876f.jpg' />
                <div>
                    <h2 className='content__profyle-title'>Evgeniy B.</h2>
                    <p className='content__profyle-description'>
                        Date of birth: 10 june 1991<br />
                        City: Rostov-on-Don<br />
                        Education: DSTU '14
                    </p>
                </div>
            </div>
            <div className='posts'>
                <h2>My posts</h2>
                <div className='posts__text-area'>
                    <p className='posts__text-area__placeholder'>your news...</p>
                </div>
                <button className='posts__button'>Send</button>
            </div>
            <div className='new-posts'>
                <div className='new-posts__1'>
                    <img src='https://static.tildacdn.com/tild3539-3563-4163-a636-383036313865/photo.png' />
                    <p className='new-posts__1__descritption'>I doing the new project from React</p>
                </div>
                <div className='new-posts__2'>
                    <img src='https://static.tildacdn.com/tild3539-3563-4163-a636-383036313865/photo.png' />
                    <p className='new-posts__2__descritption'>I will be send 5000$ in a month</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;