import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { asyncAddThread } from '../states/thread/action';
import { useDispatch } from 'react-redux';
import ThreadList from '../components/ThreadList';
import ThreadInput from '../components/ThreadInput';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage(){

  const {
    threads = [],
    users = []
  } = useSelector((states) => states);


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(asyncPopulateUsersAndThreads());

  }, [dispatch]);


  const onAddThread = ({ title, body }) =>{
    dispatch(asyncAddThread({ title, body }));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));



  return (
    <section className="home-page">
      <ThreadInput addThread={onAddThread}/>
      <ThreadList threads={threadList}/>
    </section>
  );
}

export default HomePage;