async function fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = res.json();
    console.log(data);
    console.log("this the type : ", typeof data);
    return data;
  } catch (error) {
    console.log("Error in fetching users: ", error);
    throw error;
  }
}
export default fetchUsers;

export async function fetchUserDetails() {
  const id = location.pathname.split("/")[2];
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = res.json();
    console.log("this the type : ", typeof data);
    return data;
  } catch (error) {
    throw error;
  }
}
