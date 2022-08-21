// import strava from 'strava-v3';
// 04fb9c2ad2ee92c403687439f044c012b1c2e360
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Activity() {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState({});
  const clientID = '90913';
  const clientSecret = 'ae9141765ce504c265f5485b506bc6a76c1130cf';
  const refreshToken = 'a30e8bf7e9ab20b9e324e4af05e76a846a2c2e8c';
  const auth_link = 'https://www.strava.com/oauth/token';
  const activities_link = 'https://www.strava.com/api/v3/athlete/activities';

  // https://www.strava.com/oauth/token?client_id=90913&client_secret=ae9141765ce504c265f5485b506bc6a76c1130cf&code=96406633a3f9f908515a63ab2a7fd69e71c3cfed&grant_type=authorization_code
// auth code = 96406633a3f9f908515a63ab2a7fd69e71c3cfed
  useEffect(() => {
    async function fetchData() {
      const stravaAuthResponse = await axios.all([
        axios.post(`${auth_link}?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
      ]);
      // console.log('Response: ', stravaAuthResponse[0].data.access_token);
      const accessToken = stravaAuthResponse[0].data.access_token;
      const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${accessToken}&per_page=200`);
      console.log(stravaActivityResponse);
      setActivities(stravaActivityResponse);
      setIsLoading(false);
    }
    fetchData()
  }, []);


  function getActivities(){
    if(isLoading) return <>LOADING</>
    if(!isLoading) {
      let commuteList = activities.data.map((activity) => {
        if (activity.commute === true) {
          return activity;
        }
      });
      console.log(commuteList)
      return commuteList.length
    }
  }

  return (
    <div>
      Hi
      {getActivities()}
    </div>
  );
}

export default Activity;


// https://www.strava.com/oauth/authorize?client_id=90913&redirect_uri=http://localhost:3000/activity&response_type=code&scope=activity:read

// Step 1: Get authorization code
// One off thing:
// https://www.strava.com/oauth/authorize?client_id=90913&redirect_uri=http://localhost&response_type=code&scope=activity:read_all

// Step 2: Exchange authorization code for access token and refresh token
// This was returned:
// http://localhost/?state=&code=47d2497f8315d28c081bba078b941d248abd01e8&scope=read,activity:read_all
// 47d2497f8315d28c081bba078b941d248abd01e8

// POST: https://www.strava.com/oauth/token?client_id=90913&client_secret=ae9141765ce504c265f5485b506bc6a76c1130cf&code=4f0959631f5d9642989d97e99e7c92353d9a2f4a&grant_type=authorization_code



// Other way:
// const [isLoading, setIsLoading] = useState(true)
  // const [activities, setActivities] = useState({})

  // //Strava Credentials
  // let clientID = "90913";
  // let clientSecret = "ae9141765ce504c265f5485b506bc6a76c1130cf";

  // // refresh token and call address
  // const refreshToken = "a30e8bf7e9ab20b9e324e4af05e76a846a2c2e8c";
  // const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`

  // // endpoint for read-all activities. temporary token is added in getActivities()
  // const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`

  // // Use refresh token to get current access token
  // useEffect(() => {
  //   fetch(callRefresh, {
  //     method: 'POST'
  //   })
  //   .then(res => res.json())
  //   .then(result => getActivities(result.access_token))
  // }, [callRefresh])

  // // use current access token to call all activities
  // function getActivities(access){
  //   // console.log(callActivities + access)
  //     fetch(callActivities + access)
  //     .then(res => res.json())
  //     .then(data => setActivities(data), setIsLoading(prev => !prev))
  //     .catch(e => console.log(e))
  // }
