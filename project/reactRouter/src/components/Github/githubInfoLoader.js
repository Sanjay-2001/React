export const githubInfoLoader = async () =>{
 const response=  await fetch('https://api.github.com/users/sanjay-2001')
 return response.json();
}