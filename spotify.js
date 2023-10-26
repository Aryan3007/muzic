const authEndpoint="https://accounts.spotify.com/authorize?"
const clintId="629b902c3dba40bb98f737c8badee5e5"
const redirectURL="http://localhost:5173/"
const scopes=["user-library", "playlist-read-private"]


export const loginEndpoint=`${authEndpoint} client_id=${clintId}&readirect_url=${redirectURL}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`